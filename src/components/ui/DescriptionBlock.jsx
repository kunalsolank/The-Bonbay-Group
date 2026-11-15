import React, { useState } from "react";

const DEFAULT_METRICS = [
  { value: "01", label: "STAY INFORMED" },
  { value: "02", label: "TRACK EVENTS" },
  { value: "03", label: "PLAN AHEAD" },
];

const DEFAULT_TITLES = [
  "Stay Ahead of Market News",
  "Understand Market Impact",
  "Make Informed Decisions",
];

/**
 * DescriptionBlock
 *  - 1 item          -> single centered <p>
 *  - 2+ items        -> card grid (default) or tabs (layout="tabs")
 *
 * Props:
 *  description : string (paragraphs split by blank line) | string[]
 *  titles      : string[]   card / tab titles
 *  metrics     : {value, label}[]
 *  layout      : "cards" | "tabs"
 */
const DescriptionBlock = ({
  description,
  titles = DEFAULT_TITLES,
  metrics = DEFAULT_METRICS,
  layout = "cards",
}) => {
  const [active, setActive] = useState(0);

  const items = (
    Array.isArray(description)
      ? description
      : String(description || "").split(/\n\s*\n/)
  )
    .map((p) => String(p).trim())
    .filter(Boolean);

  if (items.length === 0) return null;

  /* ---------- ONE ITEM -> <p> ---------- */
  if (items.length === 1) {
    return (
      <p className="text-white text-base sm:text-lg max-w-[90vw] sm:max-w-[550px] mx-auto text-center">
        {items[0]}
      </p>
    );
  }

  /* ---------- TABS ---------- */
  if (layout === "tabs") {
    return (
      <div className="mx-auto mt-8 w-full max-w-3xl">
        <div className="flex flex-wrap justify-center gap-2" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "border-[#00ff87]/40 bg-[#00ff87]/10 text-[#00ff87]"
                  : "border-white/10 text-white/60 hover:text-white"
              }`}
            >
              {titles[i] || metrics[i]?.label || `Item ${i + 1}`}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          className="mt-5 rounded-2xl border border-white/[0.10] bg-[#0b0b12]/90 p-6 backdrop-blur-xl"
        >
          <p className="text-sm leading-6 text-white/70 sm:text-base">
            {items[active]}
          </p>
        </div>
      </div>
    );
  }

  /* ---------- CARDS ---------- */
  return (
    <div className="mx-auto mt-8 max-w-7xl">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((para, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.10] bg-[#0b0b12]/90 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff87]/30"
          >
            <div className="relative p-6 text-left">
              {/* Top row */}
              <div className="mb-6 flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00ff87]/20 bg-[#00ff87]/[0.07] text-[#00ff87]">
                  <span className="text-lg font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-[#00ff87]">
                    {metrics[i]?.value}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold tracking-widest text-white/40">
                    {metrics[i]?.label}
                  </div>
                </div>
              </div>

              {/* Title */}
              {titles[i] && (
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {titles[i]}
                </h3>
              )}

              {/* Description */}
              <p className="text-sm leading-6 text-white/55">{para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionBlock;