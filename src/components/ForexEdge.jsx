import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { MARKET_CONFIGS } from "../data/ForexData";

// Market resolution helper: checks props + pathname
function resolveMarketKey({ subtitle, title, marketType, category }) {
  if (marketType) {
    const m = marketType.toLowerCase().trim();
    if (m.includes("commodit")) return "commodities";
    if (m.includes("indic") || m.includes("index")) return "indices";
    if (m.includes("stock") || m.includes("share") || m.includes("equit")) return "stocks";
    if (m.includes("metal")) return "metals";
    if (m.includes("forex")) return "forex";
  }
  if (category) {
    const c = category.toLowerCase().trim();
    if (c.includes("commodit")) return "commodities";
    if (c.includes("indic") || c.includes("index")) return "indices";
    if (c.includes("stock") || c.includes("share") || c.includes("equit")) return "stocks";
    if (c.includes("metal")) return "metals";
    if (c.includes("forex")) return "forex";
  }

  const raw = `${subtitle || ""} ${title || ""} ${
    typeof window !== "undefined" ? window.location.pathname : ""
  }`.toLowerCase();

  if (raw.includes("commodit")) return "commodities";
  if (raw.includes("indice") || raw.includes("index")) return "indices";
  if (raw.includes("stock") || raw.includes("share") || raw.includes("equit")) return "stocks";
  if (raw.includes("metal")) return "metals";
  return "forex";
}

// ─────────────────────────────────────────────────────────────────────────────
// Animation variants
// The grid is the parent: it staggers its cards one by one, bottom to top.
// ─────────────────────────────────────────────────────────────────────────────
const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // gap between cards (lower = faster)
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 }, // y = distance travelled from the bottom
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Feature Card
// ─────────────────────────────────────────────────────────────────────────────
function FeatureCard({ feat }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="group relative w-full rounded-2xl border border-white/10 bg-[#0d0c16]/70 p-6 backdrop-blur-xl transition-colors duration-500 hover:bg-white/[0.06]"
    >
      {/* Top subtle colored gradient line */}
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-70 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${feat.color}, transparent)` }}
      />

      {/* Hover colored ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `inset 0 0 0 1px ${feat.color}40, 0 18px 45px -15px ${feat.color}35`,
        }}
      />

      {/* Top Row: Icon on left, Stat + Label on right */}
      <div className="relative flex items-start justify-between gap-3 mb-5">
        <div
          className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `${feat.color}18`,
            borderColor: `${feat.color}45`,
            color: feat.color,
            boxShadow: `0 0 20px ${feat.color}20`,
          }}
        >
          {feat.icon}
        </div>
        <div className="text-right leading-none">
          <div
            className="text-xl sm:text-2xl font-bold tabular-nums tracking-tight"
            style={{ color: feat.color }}
          >
            {feat.stat}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-widest text-white/40 font-medium">
            {feat.statLabel}
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="relative text-white font-semibold text-lg sm:text-xl mb-2">
        {feat.title}
      </h3>

      {/* Description */}
      <p className="relative text-white/60 text-sm leading-relaxed">{feat.desc}</p>

      {/* Bottom subtle line on hover */}
      <div
        className="absolute left-6 right-6 bottom-0 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${feat.color}, transparent)` }}
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
export default function ForexEdge({ subtitle, title, description, marketType, category }) {
  // Determine market config
  const marketKey = resolveMarketKey({ subtitle, title, marketType, category });
  const config = MARKET_CONFIGS[marketKey] || MARKET_CONFIGS.forex;

  const badgeText = subtitle || config.badge;
  const headingText = title || config.title;
  const subText = description || config.description;

  return (
    // reducedMotion="user" respects the OS "reduce motion" setting automatically
    <MotionConfig reducedMotion="user">
      <section className="relative overflow-hidden py-24 sm:py-32 lg:py-36 bg-[#05040b]">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, black 15%, transparent 75%)",
              maskImage: "radial-gradient(ellipse at 50% 45%, black 15%, transparent 75%)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 550,
              height: 550,
              top: "25%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              background: "radial-gradient(circle, rgba(31,168,100,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 400,
              height: 400,
              top: "65%",
              right: "15%",
              background: "radial-gradient(circle, rgba(57,89,166,0.10) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 sm:mb-20"
          >
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-5 py-2 bg-white/5 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#1fa864] to-[#3959a6] block" />
              <span className="text-xs sm:text-sm text-white/70 uppercase tracking-widest font-medium">
                {badgeText}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white max-w-3xl mx-auto leading-tight mb-4">
              {headingText}
            </h2>
            <p className="text-white/55 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {subText}
            </p>
          </motion.div>

          {/* Cards Grid: cards appear one by one, bottom to top */}
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {config.items.map((feat) => (
              <FeatureCard key={feat.title} feat={feat} />
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 sm:mt-18 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://portal.dollrexcapital.com/register-new/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white px-8 py-3.5 font-medium uppercase secondary-font tracking-wide rounded-full hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(31,168,100,0.45)] transition-all duration-300 inline-block text-sm"
            >
              {config.ctaText}
            </a>
            <a
              href="/about"
              className="text-white/60 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors duration-200 group"
            >
              Learn more
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}