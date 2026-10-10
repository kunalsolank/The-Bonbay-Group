import React, { memo } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Mt5MockupShowcase from "./ui/Mt5MockupShowcase";
import { Badge } from "./ui/badge";
import {DEFAULT_HIGHLIGHTS, DEFAULT_PLATFORMS} from "../data/MT5productData"




// ───────────────────────────────────────────────────────────────────────────
// Memoized Platform Card Component (Dark Obsidian Glassmorphism)
// ─────────────────────────────────────────────────────────────────────────────

const PlatformCard = memo(function PlatformCard({ platform }) {
  const Icon = platform.icon;
  return (
    <motion.a
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:border-[#1fa864]/50 hover:bg-white/[0.06] hover:shadow-[0_8px_25px_rgba(31,168,100,0.15)]"
      aria-label={`${platform.caption} ${platform.title}`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 transition-colors group-hover:bg-[#1fa864]/15 group-hover:border-[#1fa864]/30">
        <Icon />
      </div>

      <div className="flex flex-col text-left">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40 leading-none">
          {platform.caption}
        </span>
        <span className="mt-1 text-sm font-semibold text-white leading-tight group-hover:text-[#34d399] transition-colors">
          {platform.title}
        </span>
      </div>
    </motion.a>
  );
});

// ─────────────────────────────────────────────────────────────────────────────
// Main Mt5Product Component
// ─────────────────────────────────────────────────────────────────────────────


const Mt5Product = memo(function Mt5Product({
  badge = "INSTITUTIONAL GRADE MT5 ARCHITECTURE",
  title = "Trade With MT5 —\nThe Global\nStandard",
  description = "Experience the award-winning MetaTrader 5 platform with full DollreX Capital Ltd integration and mobile/web support.",
  highlights = DEFAULT_HIGHLIGHTS,
  ctaText = "Start Trading",
  ctaLink = "https://portal.dollrexcapital.com/register-new/",
  platforms = DEFAULT_PLATFORMS,
  className = "",
}) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-[#05040b] py-14 sm:py-20 lg:py-24 ${className}`}
      aria-labelledby="mt5-product-heading"
    >
      {/* ── Signature Ambient Glow Layer (Emerald / Teal / Indigo Parallax) ── */}
      <div
        className="pointer-events-none absolute -top-32 right-1/4 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-[#1fa864]/15 via-[#258d87]/10 to-transparent blur-[140px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-20 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#258d87]/10 via-[#3959a6]/8 to-transparent blur-[130px] -z-10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          
          {/* ── Left Column: Value Proposition & Download Links ── */}
          <div className="flex flex-col items-start lg:col-span-5 text-left">
            {/* 1. Live Radar Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="live"
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase text-[#34d399] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d399] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34d399]" />
                </span>
                <span>{badge}</span>
              </Badge>
            </motion.div>

            {/* 2. Main Title (Inherits page UI font 'Delight' without 'primary-font' override) */}
            <motion.h2
              id="mt5-product-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.14] whitespace-pre-line"
            >
              {title}
            </motion.h2>

            {/* Signature Brand Accent Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 48, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-3.5 mb-4 h-0.5 bg-gradient-to-r from-[#1fa864] to-[#258d87]"
              aria-hidden="true"
            />

            {/* 3. Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-white/70 text-base sm:text-lg leading-relaxed font-normal max-w-lg"
            >
              {description}
            </motion.p>

            {/* 4. Highlight Feature Tags (Dark Glass Pills) */}
            {highlights && highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 flex flex-wrap items-center gap-2"
              >
                {highlights.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm shadow-xs">
                      {tag}
                    </span>
                    {idx < highlights.length - 1 && (
                      <span className="text-white/20 select-none">•</span>
                    )}
                  </React.Fragment>
                ))}
              </motion.div>
            )}

            {/* 5. Primary CTA Button (Signature Emerald Gradient) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7"
            >
              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#1fa864] to-[#1a9157] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_10px_25px_-5px_rgba(31,168,100,0.4)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_14px_35px_-5px_rgba(31,168,100,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                <span>{ctaText}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* 6. Available Platforms 2x2 Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 sm:mt-11 w-full pt-6 border-t border-white/10"
            >
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3.5">
                AVAILABLE PLATFORMS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 w-full max-w-lg">
                {platforms.map((platform) => (
                  <PlatformCard key={platform.id} platform={platform} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: MT5 Desktop & Mobile 3D Interactive Showcase ── */}
          <div className="lg:col-span-7 flex justify-center items-center w-full pt-4 lg:pt-0">
            <Mt5MockupShowcase />
          </div>

        </div>
      </div>
    </section>
  );
});

export default Mt5Product;