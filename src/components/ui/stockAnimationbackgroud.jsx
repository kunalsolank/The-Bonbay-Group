import React, { useEffect, useRef } from "react";

/**
 * Black + green "live trading screen" background, drawn from scratch on canvas.
 *  - live candle that forms in real time, chart scrolls left
 *  - auto-scaling price axis with labels
 *  - last-price line, tag and pulsing dot
 *  - area fill + moving average
 *  - volume bars
 *  - scrolling ticker tape
 *  - flickering order-book bars (desktop only)
 *  - floating +/- % labels, slow scan beam, ambient glows, vignette
 * Respects prefers-reduced-motion (renders one still frame).
 */

const G = "31,168,100"; // main green
const B = "70,235,150"; // bright green
const T = "37,141,135"; // teal
const DOWN = "20,95,75"; // dark green for down candles

const SYMBOLS = [
  "BTC", "ETH", "NIFTY 50", "SENSEX", "NVDA", "AAPL",
  "TSLA", "XAU/USD", "EUR/USD", "S&P 500", "BANKNIFTY", "SOL",
];

const MONO = "11px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

export default function StockAnimationBackground({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const rand = (a, b) => a + Math.random() * (b - a);
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const smooth = (dt, k) => 1 - Math.exp(-dt * k);

    const STEP = 16; // px between candles
    const BODY = 9; // candle body width
    const CANDLE_TIME = 0.9; // seconds per candle

    let w = 0, h = 0, raf = 0;
    let last = performance.now();
    let time = 0;

    let candles = [];
    let target = null;
    let progress = 0;
    let trend = 0;
    let rMin = 90, rMax = 110;

    let tape = [];
    let tapeX = 0;
    let book = [];
    let bookTimer = 0;
    let floaters = [];
    let floatTimer = 0;

    /* ---------------- simulation ---------------- */

    const makeFull = (open) => {
      trend = clamp(trend * 0.9 + rand(-0.35, 0.35), -0.8, 0.8);
      const close = open + trend + rand(-0.7, 0.7) + (100 - open) * 0.004;
      const hi = Math.max(open, close) + rand(0.05, 0.7);
      const lo = Math.min(open, close) - rand(0.05, 0.7);
      const v = 0.25 + Math.random() * 0.6 + Math.abs(close - open) * 0.25;
      return { o: open, c: close, h: hi, l: lo, v };
    };

    const makeLive = (open) => {
      target = makeFull(open);
      return { o: open, c: open, h: open, l: open, v: 0.1 };
    };

    const headX = () => (w < 640 ? w * 0.86 : w * 0.8);
    const xOf = (i) => headX() - (candles.length - 1 - i) * STEP - progress * STEP;
    const chartTop = () => Math.max(64, h * 0.16);
    const chartBottom = () => h * 0.76;
    const yOf = (p) =>
      chartBottom() - ((p - rMin) / (rMax - rMin)) * (chartBottom() - chartTop());

    const targetRange = () => {
      let lo = Infinity, hi = -Infinity;
      for (let i = 0; i < candles.length; i++) {
        if (xOf(i) < -STEP) continue;
        lo = Math.min(lo, candles[i].l);
        hi = Math.max(hi, candles[i].h);
      }
      if (!isFinite(lo)) { lo = 95; hi = 105; }
      const pad = Math.max((hi - lo) * 0.15, 0.5);
      return [lo - pad, hi + pad];
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const n = Math.ceil(w / STEP) + 4;
      candles = [];
      let open = 100;
      for (let i = 0; i < n - 1; i++) {
        const c = makeFull(open);
        candles.push(c);
        open = c.c;
      }
      candles.push(makeLive(open));
      progress = 0;
      [rMin, rMax] = targetRange();

      book = Array.from({ length: 12 }, () => ({ len: rand(0.2, 0.9), t: rand(0.2, 0.9) }));

      if (!tape.length) {
        tape = SYMBOLS.map((s) => ({
          s,
          p: rand(50, 5000),
          ch: rand(-2, 2),
        }));
      }
    };

    const step = (dt) => {
      progress += dt / CANDLE_TIME;
      if (progress >= 1) {
        progress -= 1;
        const done = candles[candles.length - 1];
        Object.assign(done, target);
        candles.push(makeLive(done.c));
        candles.shift();
      }

      const lv = candles[candles.length - 1];
      const p = progress;
      const e = p * p * (3 - 2 * p);
      lv.c = lv.o + (target.c - lv.o) * e + (Math.random() - 0.5) * 0.35 * (1 - p);
      const bodyHi = Math.max(lv.o, target.c);
      const bodyLo = Math.min(lv.o, target.c);
      lv.h = Math.max(lv.h, lv.c, bodyHi + (target.h - bodyHi) * e);
      lv.l = Math.min(lv.l, lv.c, bodyLo - (bodyLo - target.l) * e);
      lv.v = target.v * e;

      // smooth auto-scaling axis
      const [tMin, tMax] = targetRange();
      const k = smooth(dt, 3);
      rMin += (tMin - rMin) * k;
      rMax += (tMax - rMax) * k;

      // ticker
      tapeX += 42 * dt;
      tape.forEach((t) => {
        t.p *= 1 + rand(-1, 1) * 0.00008;
        t.ch = clamp(t.ch + rand(-1, 1) * 0.004, -3, 3);
      });

      // order book
      bookTimer -= dt;
      if (bookTimer <= 0) {
        bookTimer = 0.25;
        book.forEach((r) => (r.t = rand(0.15, 1)));
      }
      const bk = smooth(dt, 8);
      book.forEach((r) => (r.len += (r.t - r.len) * bk));

      // floating labels
      floatTimer -= dt;
      if (floatTimer <= 0) {
        floatTimer = rand(0.5, 1);
        const up = Math.random() > 0.42;
        floaters.push({
          x: rand(w * 0.08, w * 0.92),
          y: rand(h * 0.3, h * 0.8),
          text: `${up ? "+" : "-"}${rand(0.1, 2.5).toFixed(2)}%`,
          up,
          age: 0,
          life: rand(2.5, 4),
        });
      }
      floaters.forEach((f) => {
        f.age += dt;
        f.y -= 16 * dt;
      });
      floaters = floaters.filter((f) => f.age < f.life);
    };

    /* ---------------- drawing ---------------- */

    const drawBase = () => {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#010302");
      g.addColorStop(1, "#04100a");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      const blobs = [
        { x: 0.2, y: 0.35, r: 0.55, c: G, s: 0.00021 },
        { x: 0.85, y: 0.65, r: 0.5, c: T, s: 0.00017 },
        { x: 0.55, y: 0.12, r: 0.4, c: "16,120,70", s: 0.00013 },
      ];
      const tm = time * 1000;
      blobs.forEach((b, i) => {
        const cx = (b.x + Math.sin(tm * b.s + i) * 0.1) * w;
        const cy = (b.y + Math.cos(tm * b.s * 1.3 + i * 2) * 0.1) * h;
        const r = b.r * Math.max(w, h);
        const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        rg.addColorStop(0, `rgba(${b.c},0.18)`);
        rg.addColorStop(1, `rgba(${b.c},0)`);
        ctx.fillStyle = rg;
        ctx.fillRect(0, 0, w, h);
      });
    };

    const drawGrid = () => {
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${G},0.05)`;
      ctx.beginPath();
      const gap = STEP * 4;
      const base = headX() - progress * STEP;
      for (let x = base - Math.ceil(base / gap) * gap; x <= w; x += gap) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      const labels = [];
      for (let i = 0; i < 5; i++) {
        const price = rMin + ((rMax - rMin) * i) / 4;
        const y = yOf(price);
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        labels.push([price, y]);
      }
      ctx.stroke();

      ctx.font = MONO;
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgba(${B},0.32)`;
      labels.forEach(([p, y]) => ctx.fillText(p.toFixed(2), w - 10, y - 9));
    };

    const drawVolume = () => {
      const baseY = h * 0.94;
      const maxH = h * 0.12;
      candles.forEach((c, i) => {
        const x = xOf(i);
        if (x < -STEP || x > w) return;
        const up = c.c >= c.o;
        ctx.fillStyle = `rgba(${up ? G : DOWN},0.2)`;
        const bh = Math.min(1, c.v / 1.2) * maxH;
        ctx.fillRect(x, baseY - bh, BODY, bh);
      });
    };

    const drawArea = () => {
      let first = true;
      let firstX = 0, lastX = 0;
      ctx.beginPath();
      candles.forEach((c, i) => {
        const x = xOf(i) + BODY / 2;
        if (x < -STEP) return;
        const y = yOf(c.c);
        if (first) { ctx.moveTo(x, y); firstX = x; first = false; }
        else ctx.lineTo(x, y);
        lastX = x;
      });
      ctx.shadowColor = `rgba(${G},0.9)`;
      ctx.shadowBlur = 12;
      ctx.strokeStyle = `rgba(${B},0.45)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.lineTo(lastX, chartBottom());
      ctx.lineTo(firstX, chartBottom());
      ctx.closePath();
      const g = ctx.createLinearGradient(0, chartTop(), 0, chartBottom());
      g.addColorStop(0, `rgba(${G},0.16)`);
      g.addColorStop(1, `rgba(${G},0)`);
      ctx.fillStyle = g;
      ctx.fill();
    };

    const drawMA = () => {
      const N = 8;
      ctx.beginPath();
      let started = false;
      for (let i = N - 1; i < candles.length; i++) {
        const x = xOf(i) + BODY / 2;
        if (x < -STEP) continue;
        let s = 0;
        for (let j = i - N + 1; j <= i; j++) s += candles[j].c;
        const y = yOf(s / N);
        if (!started) { ctx.moveTo(x, y); started = true; }
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(${T},0.7)`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    };

    const drawCandles = () => {
      candles.forEach((c, i) => {
        const x = xOf(i);
        if (x < -STEP || x > w) return;
        const up = c.c >= c.o;
        const col = up ? G : DOWN;
        const a = up ? 0.55 : 0.4;
        ctx.strokeStyle = `rgba(${col},${a})`;
        ctx.fillStyle = `rgba(${col},${a})`;
        ctx.lineWidth = 1;
        const cx = x + BODY / 2;
        ctx.beginPath();
        ctx.moveTo(cx, yOf(c.h));
        ctx.lineTo(cx, yOf(c.l));
        ctx.stroke();
        const top = yOf(Math.max(c.o, c.c));
        const bh = Math.max(2, Math.abs(yOf(c.o) - yOf(c.c)));
        ctx.fillRect(x, top, BODY, bh);
      });
    };

    const drawLastPrice = () => {
      const lv = candles[candles.length - 1];
      const y = yOf(lv.c);
      const x = headX() + BODY / 2;

      ctx.setLineDash([4, 5]);
      ctx.strokeStyle = `rgba(${B},0.3)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
      ctx.setLineDash([]);

      // pulsing dot
      const pulse = (time * 1.6) % 1;
      ctx.beginPath();
      ctx.arc(x, y, 3 + pulse * 9, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${B},${0.5 * (1 - pulse)})`;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${B})`;
      ctx.shadowColor = `rgba(${B},1)`;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      // price tag
      ctx.fillStyle = `rgba(${G},0.9)`;
      ctx.fillRect(w - 66, y - 9, 66, 18);
      ctx.fillStyle = "#020504";
      ctx.font = MONO;
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText(lv.c.toFixed(2), w - 8, y);
    };

    const drawTape = () => {
      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.fillRect(0, 0, w, 34);
      ctx.fillStyle = `rgba(${G},0.15)`;
      ctx.fillRect(0, 34, w, 1);

      ctx.font = MONO;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      const GAP = 56;
      const items = tape.map((t) => {
        const txt = `${t.s}  ${t.p.toFixed(2)}  ${t.ch >= 0 ? "▲" : "▼"} ${Math.abs(t.ch).toFixed(2)}%`;
        return { txt, up: t.ch >= 0, wid: ctx.measureText(txt).width };
      });
      const total = items.reduce((s, it) => s + it.wid + GAP, 0);
      let x = -(tapeX % total);
      while (x < w) {
        for (const it of items) {
          if (x > w) break;
          ctx.fillStyle = it.up ? `rgba(${B},0.55)` : `rgba(${T},0.5)`;
          ctx.fillText(it.txt, x, 17);
          x += it.wid + GAP;
        }
      }
    };

    const drawBook = () => {
      if (w < 720) return;
      const x0 = 28;
      const y0 = h * 0.3;
      const rowH = 10;
      const gap = 5;
      book.forEach((r, i) => {
        const ask = i < 6;
        ctx.fillStyle = ask ? `rgba(${T},0.2)` : `rgba(${G},0.26)`;
        ctx.fillRect(x0, y0 + i * (rowH + gap) + (ask ? 0 : 12), r.len * 130, rowH);
      });
    };

    const drawFloaters = () => {
      ctx.font = "12px ui-monospace, Menlo, Consolas, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      floaters.forEach((f) => {
        const a = Math.sin(Math.PI * (f.age / f.life)) * 0.45;
        ctx.fillStyle = f.up ? `rgba(${B},${a})` : `rgba(${T},${a})`;
        ctx.fillText(f.text, f.x, f.y);
      });
    };

    const drawFinish = () => {
      // slow scan beam
      const by = ((time * 0.09) % 1.4 - 0.2) * h;
      const bg = ctx.createLinearGradient(0, by - 70, 0, by + 70);
      bg.addColorStop(0, `rgba(${G},0)`);
      bg.addColorStop(0.5, `rgba(${G},0.05)`);
      bg.addColorStop(1, `rgba(${G},0)`);
      ctx.fillStyle = bg;
      ctx.fillRect(0, by - 70, w, 140);

      // vignette
      const v = ctx.createRadialGradient(
        w / 2, h / 2, Math.min(w, h) * 0.25,
        w / 2, h / 2, Math.max(w, h) * 0.75
      );
      v.addColorStop(0, "rgba(0,0,0,0)");
      v.addColorStop(1, "rgba(0,0,0,0.65)");
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    };

    const draw = () => {
      drawBase();
      drawGrid();
      drawVolume();
      drawArea();
      drawMA();
      drawCandles();
      drawLastPrice();
      drawBook();
      drawFloaters();
      drawTape();
      drawFinish();
    };

    const frame = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      time += dt;
      step(dt);
      draw();
      raf = requestAnimationFrame(frame);
    };

    resize();
    if (reduce) {
      draw();
    } else {
      raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw();
    });
    ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}