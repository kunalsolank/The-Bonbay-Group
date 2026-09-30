// marketDataService.js
// Returns live data in EXACTLY the same shape as INITIAL_MARKET_DATA.
//
//   FOREX                                        -> Frankfurter API (BAM provider)
//   METALS, INDEX CFDS, CRYPTO, US/UAE STOCKS    -> Yahoo Finance chart API (unofficial, no key)
//
// If a request fails, only that symbol (or category) keeps its static value.

import { INITIAL_MARKET_DATA } from "../data/LiveTableData.js"; // <- adjust to where your data file lives

// ---------------------------------------------------------------- config ----
const FRANKFURTER_URL = "https://api.frankfurter.dev/v2/rates";
const FX_PROVIDER = "BAM"; // null = Frankfurter's blended rates

const IS_NODE = typeof window === "undefined";
// Browsers can't call Yahoo directly (CORS), so in the browser we go through a
// same-origin proxy at /yahoo (see the Vite proxy snippet). Node calls it directly.
const YAHOO_BASE = IS_NODE ? "https://query1.finance.yahoo.com" : "/yahoo";

const HISTORY_DAYS = 14;  // forex history window (calendar days)
const SPARK_POINTS = 10;  // your sparklines have 10 points
const CACHE_MS = 60_000;  // don't hit the APIs more than once a minute
const MAX_PARALLEL = 5;   // Yahoo rate-limits bursts

// Your symbol -> Yahoo Finance ticker.
// NOTE: metals use futures (GC=F etc.), which trade slightly above spot.
const YAHOO_TICKERS = {
  // METALS
  XAUUSD: "GC=F",
  XAGUSD: "SI=F",
  XPTUSD: "PL=F",
  XPDUSD: "PA=F",
  // INDEX CFDS
  US30: "^DJI",
  NAS100: "^NDX",
  SPX500: "^GSPC",
  GER40: "^GDAXI",
  UK100: "^FTSE",
  // CRYPTO
  BTCUSD: "BTC-USD",
  ETHUSD: "ETH-USD",
  SOLUSD: "SOL-USD",
  XRPUSD: "XRP-USD",
  // US STOCKS
  AAPL: "AAPL",
  NVDA: "NVDA",
  TSLA: "TSLA",
  MSFT: "MSFT",
  // UAE STOCKS (Dubai = .AE, Abu Dhabi = .AD)
  EMAAR: "EMAAR.AE",
  FAB: "FAB.AD",
  DEWA: "DEWA.AE",
  SALIK: "SALIK.AE",
};

// --------------------------------------------------------------- helpers ----
const isoDaysAgo = (n) => {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - n);
  return d.toISOString().slice(0, 10);
};

// Scale raw values into the 16..32 band your hard-coded sparklines use.
const toSparkline = (values) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (max === min) return values.map(() => 24);
  return values.map((v) => Math.round(16 + ((v - min) / (max - min)) * 16));
};

// Writes a live quote into an item, keeping every other field (name, c1, leverage...).
// Forex spreads are in pips (1 pip = 10^-(decimals-1)); every other spread is in price units.
function applyQuote(item, { mid, prev, series }, spreadInPips) {
  const unit = spreadInPips ? 10 ** -(item.decimals - 1) : 1;
  const half = (parseFloat(item.spread) * unit) / 2;
  item.bid = Number((mid - half).toFixed(item.decimals));
  item.ask = Number((mid + half).toFixed(item.decimals));
  item.change = Number((((mid - prev) / prev) * 100).toFixed(2));
  item.sparkline = toSparkline(series.slice(-SPARK_POINTS));
}

// Runs async tasks with a concurrency limit.
async function runPool(tasks, limit) {
  const results = new Array(tasks.length);
  let next = 0;
  const worker = async () => {
    while (next < tasks.length) {
      const i = next++;
      results[i] = await tasks[i]().then(
        (value) => ({ ok: true, value }),
        (error) => ({ ok: false, error })
      );
    }
  };
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

// ----------------------------------------------------------------- forex ----
async function loadForex(data) {
  const items = data.FOREX ?? [];
  const codes = new Set();
  for (const item of items) {
    codes.add(item.symbol.slice(0, 3));
    codes.add(item.symbol.slice(3));
  }
  codes.delete("EUR"); // EUR is Frankfurter's base, always 1

  let rows;
  try {
    const params = new URLSearchParams({
      from: isoDaysAgo(HISTORY_DAYS),
      quotes: [...codes].join(","),
    });
    if (FX_PROVIDER) params.set("providers", FX_PROVIDER);
    const res = await fetch(`${FRANKFURTER_URL}?${params}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    rows = await res.json(); // [{ date, base: "EUR", quote, rate }, ...]
  } catch (err) {
    console.warn("[FOREX] Frankfurter failed, using fallback:", err.message);
    return;
  }

  const byDate = new Map(); // date -> { EUR: 1, USD: 1.1493, ... }
  for (const { date, quote, rate } of rows) {
    if (!byDate.has(date)) byDate.set(date, { EUR: 1 });
    byDate.get(date)[quote] = rate;
  }
  const dates = [...byDate.keys()].sort();

  for (const item of items) {
    const base = item.symbol.slice(0, 3);
    const quote = item.symbol.slice(3);
    // Cross rate through EUR: BASEQUOTE = (QUOTE per EUR) / (BASE per EUR)
    const series = [];
    for (const date of dates) {
      const r = byDate.get(date);
      if (r[base] && r[quote]) series.push(r[quote] / r[base]);
    }
    if (series.length < 2) continue;
    applyQuote(
      item,
      { mid: series.at(-1), prev: series.at(-2), series },
      true
    );
  }
}

// ----------------------------------------- metals / indices / crypto / stocks ----
async function fetchYahoo(ticker) {
  const url = `${YAHOO_BASE}/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1d&range=1mo`;
  // Yahoo rejects requests without a browser-like User-Agent; only Node may set it.
  const res = await fetch(url, IS_NODE ? { headers: { "User-Agent": "Mozilla/5.0" } } : undefined);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const json = await res.json();
  const result = json?.chart?.result?.[0];
  if (!result) throw new Error(json?.chart?.error?.description ?? "no data");

  const closes = (result.indicators?.quote?.[0]?.close ?? []).filter((v) => v != null);
  const mid = result.meta?.regularMarketPrice ?? closes.at(-1);
  const prev = closes.length >= 2 ? closes.at(-2) : result.meta?.chartPreviousClose;
  if (!mid || !prev || closes.length < 2) throw new Error("incomplete data");
  return { mid, prev, series: closes };
}

async function loadYahoo(data) {
  const targets = [];
  for (const [category, items] of Object.entries(data)) {
    if (category === "FOREX") continue;
    for (const item of items) {
      if (YAHOO_TICKERS[item.symbol]) targets.push(item);
    }
  }

  const results = await runPool(
    targets.map((item) => () => fetchYahoo(YAHOO_TICKERS[item.symbol])),
    MAX_PARALLEL
  );

  results.forEach((r, i) => {
    const item = targets[i];
    if (r.ok) applyQuote(item, r.value, false);
    else console.warn(`[${item.symbol}] ${YAHOO_TICKERS[item.symbol]} failed, using fallback:`, r.error.message);
  });
}

// ---------------------------------------------------------------- public ----
let cache = null;

export async function fetchLiveMarketData({ force = false } = {}) {
  if (!force && cache && Date.now() - cache.at < CACHE_MS) return cache.data;

  // Deep copy so INITIAL_MARKET_DATA is never mutated.
  const data = JSON.parse(JSON.stringify(INITIAL_MARKET_DATA));
  await Promise.all([loadForex(data), loadYahoo(data)]);

  cache = { at: Date.now(), data };
  return data;
}
