import React, { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   ALL available symbol sectors (used as the default fallback)
───────────────────────────────────────────────────────────── */
export const ALL_SYMBOL_SECTORS = [
  {
    sectionName: "Indices",
    symbols: [
      "FOREXCOM:SPXUSD",
      "FOREXCOM:NSXUSD",
      "FOREXCOM:DJI",
      "INDEX:NKY",
      "INDEX:DEU40",
      "FOREXCOM:UKXGBP",
    ],
  },

  {
    sectionName: "Commodities",
    symbols: [
      "TVC:GOLD",
      "TVC:SILVER",
      "TVC:USOIL",
      "TVC:UKOIL",
      "TVC:NATURALGAS",
      "COMEX:HG1!",
    ],
  },

  {
    sectionName: "Metals",
    symbols: [
      "OANDA:XAUUSD",
      "OANDA:XAGUSD",
      "TVC:PLATINUM",
      "TVC:PALLADIUM",
    ],
  },

  {
    sectionName: "Forex",
    symbols: [
      "FX:EURUSD",
      "FX:GBPUSD",
      "FX:USDJPY",
      "FX:USDCHF",
      "FX:AUDUSD",
      "FX:USDCAD",
    ],
  },

  {
    sectionName: "Crypto",
    symbols: [
      "BINANCE:BTCUSDT",
      "BINANCE:ETHUSDT",
      "BINANCE:SOLUSDT",
      "BINANCE:XRPUSDT",
      "BINANCE:BNBUSDT",
      "BINANCE:ADAUSDT",
    ],
  },

  {
    sectionName: "US Stocks",
    symbols: [
      "NASDAQ:AAPL",
      "NASDAQ:MSFT",
      "NASDAQ:GOOGL",
      "NASDAQ:AMZN",
      "NASDAQ:TSLA",
      "NASDAQ:NVDA",
    ],
  },

  {
    sectionName: "UAE Stocks",
    symbols: [
      "DFM:EMAAR",
      "DFM:DIB",
      "DFM:EMIRATESNBD",
      "ADX:FAB",
      "ADX:IHC",
      "ADX:ADNOCDIST",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   TradingViewMarketData
   Props:
     symbolSectors – array of { sectionName, symbols[] }
                     Falls back to ALL_SYMBOL_SECTORS when omitted.
───────────────────────────────────────────────────────────── */
export default function TradingViewMarketData({
  symbolSectors = ALL_SYMBOL_SECTORS,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    /*
     * Prevent duplicate widgets when React StrictMode
     * runs the effect more than once, or when the prop changes.
     */
    container.innerHTML = "";

    /*
     * Load TradingView Web Component
     */
    const script = document.createElement("script");

    script.type = "module";
    script.src =
      "https://widgets.tradingview-widget.com/w/en/tv-market-data.js";

    /*
     * Create TradingView element
     */
    const widget = document.createElement("tv-market-data");

    /*
     * Convert JS configuration to the attribute
     * expected by TradingView.
     */
    widget.setAttribute(
      "symbol-sectors",
      JSON.stringify(symbolSectors)
    );

    /*
     * Optional theme.
     */
    widget.setAttribute("theme", "dark");

    /*
     * Add widget then script.
     */
    container.appendChild(widget);
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [symbolSectors]); // re-render when sectors change

  return (
    <div
      ref={containerRef}
      className="w-full"
    />
  );
}