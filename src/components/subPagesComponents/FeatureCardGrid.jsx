import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
/** Single card. Also exported in case you need it on its own. */
export function FeatureCard({ feat }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="group relative w-full rounded-2xl border border-white/10 bg-[#0d0c16]/70 p-6 backdrop-blur-xl transition-colors duration-500 hover:bg-white/[0.06]"
    >
      {/* Top gradient line */}
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${feat.color}, transparent)` }}
      />

      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 0 1px ${feat.color}40, 0 18px 45px -15px ${feat.color}35`,
        }}
      />

      {/* Icon + stat */}
      <div className="relative mb-5 flex items-start justify-between gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110"
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
            className="text-xl font-bold tabular-nums tracking-tight sm:text-2xl"
            style={{ color: feat.color }}
          >
            {feat.stat}
          </div>
          <div className="mt-1 text-[10px] font-medium uppercase tracking-widest text-white/40">
            {feat.statLabel}
          </div>
        </div>
      </div>

      <h3 className="relative mb-2 text-lg font-semibold text-white sm:text-xl">
        {feat.title}
      </h3>
      <p className="relative text-sm leading-relaxed text-white/60">{feat.desc}</p>

      {/* Bottom line on hover */}
      <div
        className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${feat.color}, transparent)` }}
      />
    </motion.div>
  );
}

/**
 * Reusable animated card grid.
 *
 * Props:
 * - items:    [{ title, desc, icon, color, stat, statLabel }]
 * - columns:  Tailwind grid-cols classes (default: 1 / 2 / 4 columns)
 * - stagger:  seconds between each card (default 0.15)
 * - delay:    seconds before the first card (default 0.1)
 * - amount:   how much of the grid must be visible to start (0 to 1)
 * - className: extra classes for the grid wrapper
 */
export default function FeatureCardGrid({
  items = [],
  columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  stagger = 0.15,
  delay = 0.1,
  amount = 0.15,
  className = "",
}) {
  const gridVariants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      className={`grid items-stretch gap-6 ${columns} ${className}`}
    >
      {items.map((feat) => (
        <FeatureCard key={feat.title} feat={feat} />
      ))}
    </motion.div>
  );
}