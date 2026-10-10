import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "../FeatureCard";

/**
 * Reusable section: centered heading + grid of FeatureCards.
 * Cards come in from the bottom, one after another, when the section scrolls into view.
 */
export default function FeatureSection({
  eyebrow,
  heading,
  highlight,
  description,
  items = [],
  columns = 3, // 2 or 3
  bgClass = "bg-[#05040b]", // set this to the SAME color as the sections above/below
}) {
  const gridCols = columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <section className={`relative py-20 sm:py-28 ${bgClass}`}>
      {/* Background glow — kept in the middle, never touches the section edges */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff87]/[0.08] blur-[140px]" />

      <div className="container relative mx-auto max-w-[1350px] px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          {eyebrow && (
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#00ff87]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00ff87]">
                {eyebrow}
              </span>
              <span className="h-px w-10 bg-[#00ff87]" />
            </div>
          )}

          <h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl">
            {heading}
            {highlight && (
              <span className="bg-gradient-to-r from-[#00ff87] via-[#10b981] to-[#1fa864] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,135,0.35)]">
                {" "}
                {highlight}
              </span>
            )}
          </h2>

          {description && (
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              {description}
            </p>
          )}
        </motion.div>

        {/* Cards */}
        <div className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${gridCols}`}>
          {items.map((item, index) => (
            <FeatureCard key={item.title} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}