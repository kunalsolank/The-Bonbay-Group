import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FeatureList = ({ eyebrow, heading, subheading, points = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activePoint = points[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#080a09] text-white py-24 md:py-32 lg:py-40">
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Green glow */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-64 -right-64 w-[700px] h-[700px] rounded-full bg-[#20a46a]/[0.07] blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-72 -left-72 w-[650px] h-[650px] rounded-full bg-[#20a46a]/[0.04] blur-[180px]"
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#ffffff 1px, transparent 1px),
              linear-gradient(90deg, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* Vertical line */}
        <div className="absolute left-[7%] top-0 bottom-0 w-px bg-white/[0.035]" />

        <div className="absolute right-[7%] top-0 bottom-0 w-px bg-white/[0.035]" />
      </div>

      <div className="relative z-10 w-[90%] max-w-[1400px] mx-auto">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-5xl mb-16 md:mb-20"
        >
          {/* Eyebrow */}

          {eyebrow && (
            <div className="flex items-center gap-4 mb-7">
              <span className="w-12 h-px bg-[#20a46a]" />

              <span className="text-[#20a46a] text-[11px] md:text-xs uppercase tracking-[0.35em] font-semibold">
                {eyebrow}
              </span>
            </div>
          )}

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-20 items-end">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium tracking-[-0.045em] leading-[0.98] text-[#f3f5f1]">
              {heading}
            </h2>

            {subheading && (
              <p className="text-[#858b85] text-base md:text-lg leading-8 max-w-lg">
                {subheading}
              </p>
            )}
          </div>
        </motion.div>

        {/* =====================================================
            MAIN FEATURE SHOWCASE
        ====================================================== */}

        {activePoint && (
          <div className="relative">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] min-h-[520px] border-y border-white/[0.08]">
              {/* =================================================
                  LEFT CONTENT
              ================================================== */}

              <div className="relative flex flex-col justify-between py-10 md:py-14 lg:py-16 lg:pr-14">
                {/* Number */}

                <div>
                  <div className="flex items-center gap-5 mb-10">
                    <span className="text-[#20a46a] font-mono text-sm tracking-[0.2em]">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>

                    <div className="w-16 h-px bg-[#20a46a]/40" />

                    <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
                      Feature
                    </span>
                  </div>

                  {/* Title */}

                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={activePoint.title}
                      initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                      className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.035em] leading-[1.02] text-[#f2f4f0] max-w-xl"
                    >
                      {activePoint.title}
                    </motion.h3>
                  </AnimatePresence>

                  {/* Description */}

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${activePoint.title}-description`}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: 0.05,
                      }}
                      className="mt-7 text-[#858b85] text-base md:text-lg leading-8 max-w-lg"
                    >
                      {activePoint.description}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Bottom detail */}

                <div className="mt-12">
                  <div className="flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-[#20a46a] animate-pulse" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                      Designed for modern trading
                    </span>
                  </div>

                  <div className="mt-6 w-full max-w-[360px] h-px bg-white/[0.08]">
                    <motion.div
                      key={activeIndex}
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: "100%",
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="h-full bg-[#20a46a]"
                    />
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT IMAGE
              ================================================== */}

              <div className="relative min-h-[360px] lg:min-h-full overflow-hidden border-t lg:border-t-0 lg:border-l border-white/[0.08]">
                {/* Image */}

                <AnimatePresence mode="wait">
                  {activePoint.image && (
                    <motion.div
                      key={activePoint.image}
                      initial={{
                        opacity: 0,
                        scale: 1.08,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 1.03,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0"
                    >
                      <img
                        src={activePoint.image}
                        alt={activePoint.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Dark overlay */}

                      <div className="absolute inset-0 bg-black/25" />

                      {/* Left gradient */}

                      <div className="absolute inset-0 bg-gradient-to-r from-[#080a09] via-[#080a09]/20 to-transparent" />

                      {/* Bottom gradient */}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#080a09]/80 via-transparent to-transparent" />

                      {/* Green glow */}

                      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#20a46a]/10 blur-[120px]" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Image information */}

                <div className="absolute left-7 md:left-10 bottom-7 md:bottom-10 z-10">
                  <span className="block text-[9px] uppercase tracking-[0.35em] text-white/40 mb-2">
                    DollreX Capital
                  </span>

                  <span className="text-sm text-white/70">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(Math.min(points.length, 4)).padStart(2, "0")}
                  </span>
                </div>

                {/* Corner decoration */}

                <div className="absolute top-7 right-7 md:top-10 md:right-10 z-10 w-12 h-12 border-t border-r border-white/20" />

                <div className="absolute bottom-7 right-7 md:bottom-10 md:right-10 z-10 w-12 h-12 border-b border-r border-white/20" />
              </div>
            </div>

            {/* =================================================
                FEATURE NAVIGATION
            ================================================== */}

            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/[0.08]">
              {points.slice(0, 4).map((point, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={point.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`
                      group
                      relative
                      text-left
                      px-5
                      md:px-7
                      py-7
                      md:py-9
                      border-r
                      border-white/[0.08]
                      last:border-r-0
                      transition-all
                      duration-300
                      ${isActive ? "bg-white/[0.035]" : "hover:bg-white/[0.02]"}
                    `}
                  >
                    {/* Active line */}

                    <motion.span
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="absolute top-0 left-0 h-[2px] bg-[#20a46a]"
                    />

                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`
                          font-mono
                          text-xs
                          tracking-[0.2em]
                          transition-colors
                          duration-300
                          ${
                            isActive
                              ? "text-[#20a46a]"
                              : "text-white/25 group-hover:text-white/50"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          text-lg
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "text-[#20a46a] translate-x-0"
                              : "text-white/20 -translate-x-2 group-hover:translate-x-0"
                          }
                        `}
                      >
                        →
                      </span>
                    </div>

                    <h4
                      className={`
                        text-sm
                        md:text-base
                        font-medium
                        leading-6
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "text-white"
                            : "text-white/40 group-hover:text-white/70"
                        }
                      `}
                    >
                      {point.title}
                    </h4>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* =====================================================
            BOTTOM BRAND STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
        >
          <p className="text-white/25 text-[10px] uppercase tracking-[0.3em]">
            Precision · Speed · Transparency
          </p>

          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#20a46a]/50" />

            <span className="text-white/30 text-[10px] uppercase tracking-[0.25em]">
              DollreX Capital Ltd.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureList;
