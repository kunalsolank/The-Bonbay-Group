import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * AutoCardGrid – one self-contained, reusable component.
 * Auto-sizing grid + animated hover cards.
 *
 * <AutoCardGrid items={platforms} minItemWidth="250px" />
 *
 * Each item: { number, title, description, image, link?, label? }
 *
 * Props:
 *  - items:        array of cards
 *  - minItemWidth: smallest card width before columns drop (default "250px")
 *  - gap:          grid gap (default "1.5rem")
 *  - mode:         "fit" (stretch to fill row) | "fill" (keep empty tracks)
 *  - label:        default eyebrow text inside the drawer (default "MetaTrader 5")
 *  - className:    extra classes for the grid wrapper
 */
export default function CardGridSection({
  items = [],
  minItemWidth = "250px",
  gap = "1.5rem",
  mode = "fit",
  label: defaultLabel = "MetaTrader 5",
  className = "",
}) {
  const repeat = mode === "fill" ? "auto-fill" : "auto-fit";

  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: `repeat(${repeat}, minmax(min(${minItemWidth}, 100%), 1fr))`,
        gap,
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.number ?? index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative h-95 sm:h-110 md:h-120 overflow-hidden rounded-2xl border border-white/10 bg-[#07090e]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#00ff87]/60 hover:shadow-[0_20px_50px_rgba(0,255,135,0.22)]"
        >
          <Link to={item.link || "/register"} className="block h-full w-full">
            {/* Top hover line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px bg-linear-to-r from-transparent via-[#00ff87] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Background image */}
            <div className="relative h-52 w-full overflow-hidden sm:h-60 lg:absolute lg:inset-x-0 lg:top-0 lg:bottom-24 lg:h-auto">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-contain object-center p-3 transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#05040b] via-[#05040b]/70 to-transparent" />

            {/* Resting title (desktop only) */}
            <div className="absolute bottom-0 left-0 z-20 hidden w-full p-6 transition-all duration-500 sm:block sm:p-7 group-hover:-translate-y-4 group-hover:opacity-0">
              <div className="mb-2.5 flex items-center gap-2.5">
                <span className="h-px w-6 bg-[#00ff87]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#00ff87]">
                  {item.number}
                </span>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                {item.title}
              </h3>
            </div>

            {/* Drawer: always visible on mobile, slides up on hover (sm+) */}
            <div className="absolute bottom-0 left-0 z-20 w-full border-t border-[#00ff87]/25 bg-[#07090e]/95 p-5 backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-7 sm:translate-y-full sm:group-hover:translate-y-0">
              <div className="mb-2 flex items-center justify-between sm:mb-3">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <span className="h-px w-5 bg-[#00ff87] sm:w-6" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00ff87]">
                    {item.label ?? defaultLabel}
                  </span>
                </div>
                <span className="select-none bg-linear-to-b from-[#00ff87]/40 to-transparent bg-clip-text font-mono text-2xl font-semibold text-transparent sm:text-3xl">
                  {item.number}
                </span>
              </div>

              <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl md:text-3xl">
                {item.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-white/70 sm:mt-3 sm:line-clamp-none sm:text-sm">
                {item.description}
              </p>

              <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00ff87] sm:mt-5 sm:text-xs">
                <span>Learn More</span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}