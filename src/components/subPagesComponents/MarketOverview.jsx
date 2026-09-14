import React from "react";
import { motion } from "framer-motion";

const MarketOverview = ({
  eyebrow = "Market Overview",
  heading,
  highlight,
  description,

  stat,
  statLabel,
  statDescription,

  status = "Global Access",
  markets = [],

  paragraphs = [],

  features = [],

  image,
  imageAlt = "Market overview",
}) => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#050605] text-white">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[15%] -top-[15%] h-[700px] w-[700px] rounded-full bg-[#20a46a]/10 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[20%] -left-[15%] h-[600px] w-[600px] rounded-full bg-[#20a46a]/7 blur-[180px]"
        />

        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Vertical light */}
        <div className="absolute left-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
        <div className="absolute right-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 md:py-32 lg:px-12 lg:py-40">
        {/* =====================================================
            HERO HEADER
        ====================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-end gap-10 lg:grid-cols-[1.4fr_.6fr]"
        >
          {/* LEFT */}
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-8 flex items-center gap-4"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#20a46a]/50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#20a46a]" />
              </span>

              <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#20a46a]">
                {eyebrow}
              </span>

              <span className="h-px w-16 bg-white/10" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="max-w-[1050px] text-[clamp(3.5rem,8vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.065em]"
            >
              {heading}

              {highlight && (
                <>
                  <br />

                  <span className="relative inline-block text-[#20a46a]">
                    {highlight}

                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.6,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-[-12px] left-0 h-[2px] bg-[#20a46a]"
                    />
                  </span>
                </>
              )}
            </motion.h2>
          </div>

          {/* RIGHT */}
          <motion.div variants={fadeUp} className="lg:pb-3 lg:pl-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#20a46a]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Global Market Access
              </span>
            </div>

            {description && (
              <p className="max-w-md text-base leading-8 text-white/45 md:text-lg">
                {description}
              </p>
            )}
          </motion.div>
        </motion.div>

        {/* =====================================================
            MARKET HERO
        ====================================================== */}

        <div className="relative mt-24 lg:mt-32">
          <div className="grid gap-5 lg:grid-cols-[0.38fr_1fr]">
            {/* =================================================
                MARKET DATA PANEL
            ================================================== */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden border border-white/[0.08] bg-[#0a0c0b]"
            >
              {/* Top line */}
              <div className="absolute left-0 top-0 h-[2px] w-24 bg-[#20a46a]" />

              <div className="flex h-full flex-col justify-between p-7 sm:p-9 lg:p-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                      {statLabel}
                    </span>

                    <span className="font-mono text-[10px] text-[#20a46a]">
                      LIVE
                    </span>
                  </div>

                  <div className="mt-8 overflow-hidden">
                    <motion.span
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9 }}
                      className="block text-[clamp(4rem,7vw,7rem)] font-medium leading-none tracking-[-0.07em]"
                    >
                      {stat}
                    </motion.span>
                  </div>

                  {statDescription && (
                    <p className="mt-6 max-w-[250px] text-sm leading-6 text-white/35">
                      {statDescription}
                    </p>
                  )}
                </div>

                <div className="mt-16">
                  {/* Status */}
                  <div className="border-t border-white/[0.08] pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                        Market Status
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#20a46a]/60" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#20a46a]" />
                        </span>

                        <span className="text-xs text-[#20a46a]">{status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Markets */}
                  {markets.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-2">
                      {markets.map((market, index) => (
                        <motion.span
                          key={market}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.06,
                          }}
                          className="border border-white/[0.08] px-3 py-2 text-[10px] uppercase tracking-wider text-white/40 transition-all duration-300 hover:border-[#20a46a]/40 hover:text-[#20a46a]"
                        >
                          {market}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* =================================================
                IMAGE PANEL
            ================================================== */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative min-h-[500px] overflow-hidden sm:min-h-[600px] lg:min-h-[680px]"
            >
              {image ? (
                <>
                  <motion.img
                    src={image}
                    alt={imageAlt}
                    initial={{
                      scale: 1.12,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    whileHover={{
                      scale: 1.04,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Dark overlays */}
                  <div className="absolute inset-0 bg-[#050605]/20" />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#050605]/70 via-transparent to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#050605] via-transparent to-[#050605]/10" />

                  {/* Image border */}
                  <div className="absolute inset-0 border border-white/[0.08]" />

                  {/* =========================================
                      FLOATING MARKET CARD
                  ========================================== */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.6,
                      duration: 0.8,
                    }}
                    className="absolute right-5 top-5 w-[180px] border border-white/10 bg-[#080a09]/80 p-4 backdrop-blur-xl sm:right-8 sm:top-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">
                        GLOBAL
                      </span>

                      <span className="text-[9px] text-[#20a46a]">
                        + ACTIVE
                      </span>
                    </div>

                    <div className="mt-5">
                      <div className="h-[1px] w-full bg-white/10" />

                      <div className="mt-3 flex items-end gap-[3px]">
                        {[30, 50, 38, 65, 48, 75, 58, 88, 72, 100].map(
                          (height, index) => (
                            <motion.span
                              key={index}
                              initial={{
                                height: 0,
                              }}
                              whileInView={{
                                height: `${height}%`,
                              }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 0.7 + index * 0.05,
                                duration: 0.5,
                              }}
                              className="h-8 flex-1 bg-[#20a46a]/50"
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Coordinates */}
                  <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                      GLOBAL / 24—5
                    </span>
                  </div>

                  {/* Bottom information */}
                  <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#20a46a]">
                          {eyebrow}
                        </p>

                        <h3 className="max-w-lg text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                          Built for markets without borders.
                        </h3>
                      </div>

                      <div className="hidden md:block">
                        <div className="flex items-center gap-3">
                          <span className="h-px w-12 bg-white/30" />

                          <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                            Explore markets
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Corner brackets */}
                  <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-white/30" />
                  <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-white/30" />
                  <div className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-white/30" />
                  <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-white/30" />
                </>
              ) : (
                <div className="flex h-full min-h-[500px] items-center justify-center border border-white/10 bg-[#0a0c0b]">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
                    Market Overview
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            MARKET TICKER
        ====================================================== */}

        <div className="relative mt-5 overflow-hidden border-y border-white/[0.07]">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max"
          >
            {[...markets, ...markets, ...markets].map((market, index) => (
              <div
                key={`${market}-${index}`}
                className="flex items-center gap-5 px-7 py-4"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#20a46a]" />

                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  {market}
                </span>

                <span className="font-mono text-[10px] text-[#20a46a]">
                  OPEN
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            CONTENT SECTION
        ====================================================== */}

        <div className="mt-32 grid gap-16 lg:grid-cols-[0.35fr_0.65fr] lg:gap-24">
          {/* LEFT LABEL */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#20a46a]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Market Intelligence
              </span>
            </div>

            <div className="mt-6 h-px w-20 bg-[#20a46a]" />

            <p className="mt-6 max-w-[220px] text-sm leading-6 text-white/25">
              Everything you need to understand the markets you trade.
            </p>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {paragraphs.map((paragraph, index) => (
              <React.Fragment key={index}>
                <motion.p
                  variants={fadeUp}
                  className={
                    index === 0
                      ? "max-w-4xl text-2xl font-normal leading-[1.45] tracking-tight text-white/80 md:text-4xl"
                      : "mt-10 max-w-3xl text-base leading-8 text-white/35 md:text-lg"
                  }
                >
                  {paragraph}
                </motion.p>

                {index === 0 && paragraphs.length > 1 && (
                  <motion.div
                    variants={fadeUp}
                    className="my-12 h-px w-full bg-white/[0.08]"
                  />
                )}
              </React.Fragment>
            ))}

            {/* =================================================
                FEATURE LIST
            ================================================== */}

            {features.length > 0 && (
              <motion.div
                variants={stagger}
                className="mt-16 border-t border-white/[0.08]"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    variants={fadeUp}
                    className="group relative flex items-center justify-between gap-6 overflow-hidden border-b border-white/[0.08] py-7"
                  >
                    {/* Hover background */}
                    <div className="absolute inset-0 -translate-x-full bg-[#20a46a]/[0.035] transition-transform duration-500 group-hover:translate-x-0" />

                    <div className="relative flex items-center gap-6">
                      <span className="font-mono text-[10px] text-white/20 transition-colors duration-300 group-hover:text-[#20a46a]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm text-white/50 transition-colors duration-300 group-hover:text-white md:text-base">
                        {feature.label}
                      </span>
                    </div>

                    <div className="relative flex items-center gap-5">
                      <span className="text-sm font-medium text-white md:text-base">
                        {feature.value}
                      </span>

                      <span className="translate-x-[-5px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        →
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM STATS
        ====================================================== */}

        {features.length > 0 && (
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-32 border-t border-white/[0.08]"
          >
            <div className="grid grid-cols-2 md:grid-cols-4">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div
                  key={feature.label}
                  variants={fadeUp}
                  className={`group relative px-5 py-10 md:px-8 md:py-12 ${
                    index !== 0 ? "border-l border-white/[0.08]" : ""
                  }`}
                >
                  <span className="absolute left-0 top-0 h-px w-0 bg-[#20a46a] transition-all duration-500 group-hover:w-full" />

                  <p className="text-3xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#20a46a] md:text-5xl">
                    {feature.value}
                  </p>

                  <p className="mt-3 max-w-[150px] text-[9px] uppercase leading-5 tracking-[0.2em] text-white/25">
                    {feature.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MarketOverview;
