import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TradingSteps = ({
  eyebrow = "Trading",
  heading = "How to Start Trading with",
  highlight = "Dollrex Capital Ltd.",
  points = [],
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const visiblePoints = points.slice(0, 4);
  const activePoint = visiblePoints[activeStep];

  return (
    <section className="relative overflow-hidden bg-[#080a09] text-white py-24 md:py-32 lg:py-40">


      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient green glow */}

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
          className="absolute -top-64 -right-64 w-175 h-175 rounded-full bg-[#20a46a]/6 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-72 -left-72 w-162.5 h-162.5 rounded-full bg-[#20a46a]/[0.035] blur-[180px]"
        />

        {/* Subtle grid */}

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

        {/* Vertical borders */}

        <div className="absolute left-[7%] top-0 bottom-0 w-px bg-white/[0.035]" />

        <div className="absolute right-[7%] top-0 bottom-0 w-px bg-white/[0.035]" />
      </div>

      <div className="relative z-10 w-[90%] max-w-350 mx-auto">
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
          className="grid lg:grid-cols-[1fr_0.7fr] gap-8 lg:gap-24 items-end mb-20"
        >
          <div>
            {/* Eyebrow */}

            {eyebrow && (
              <div className="flex items-center gap-4 mb-7">
                <span className="w-12 h-px bg-[#20a46a]" />

                <span className="text-[#20a46a] text-[11px] md:text-xs uppercase tracking-[0.35em] font-semibold">
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Heading */}

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-medium leading-[0.98] tracking-[-0.045em] text-[#f3f5f1]">
              {heading}

              <br />

              <span className="text-[#20a46a]">{highlight}</span>
            </h2>
          </div>

          {/* Header side detail */}

          <div className="lg:pb-2">
            <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-4">
              Your journey starts here
            </p>

            <p className="text-[#858b85] text-base md:text-lg leading-8 max-w-lg">
              Open your account, fund your portfolio and access global markets
              through a streamlined trading experience.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN JOURNEY
        ====================================================== */}

        {activePoint && (
          <div className="relative border-y border-white/8">
            <div className="grid lg:grid-cols-[300px_1fr]">
              {/* =================================================
                  LEFT NAVIGATION
              ================================================== */}

              <div className="relative border-b lg:border-b-0 lg:border-r border-white/8">
                {/* Vertical line */}

                <div className="absolute left-8.5 top-10 bottom-10 w-px bg-white/8" />

                {/* Green progress */}

                <motion.div
                  className="absolute left-8.5 top-10 w-px bg-[#20a46a] origin-top"
                  animate={{
                    height:
                      visiblePoints.length > 1
                        ? `${(activeStep / (visiblePoints.length - 1)) * 100}%`
                        : "0%",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                />

                <div className="relative py-8 lg:py-10">
                  {visiblePoints.map((point, index) => {
                    const isActive = index === activeStep;

                    return (
                      <button
                        key={point.number || index}
                        type="button"
                        onClick={() => setActiveStep(index)}
                        className="relative w-full text-left group px-5 lg:px-0"
                      >
                        <div className="flex items-center min-h-20.5">
                          {/* Step circle */}

                          <motion.div
                            animate={{
                              scale: isActive ? 1.08 : 1,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className={`
                              relative
                              z-10
                              ml-0
                              lg:ml-3
                              w-12
                              h-12
                              rounded-full
                              flex
                              items-center
                              justify-center
                              border
                              transition-all
                              duration-300
                              ${
                                isActive
                                  ? "border-[#20a46a] bg-[#20a46a]/10 text-[#20a46a]"
                                  : "border-white/12 bg-[#080a09] text-white/25 group-hover:border-white/30 group-hover:text-white/60"
                              }
                            `}
                          >
                            <span className="font-mono text-xs">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            {isActive && (
                              <motion.span
                                initial={{
                                  opacity: 0,
                                  scale: 0.7,
                                }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                className="absolute -inset-1.25 rounded-full border border-[#20a46a]/20"
                              />
                            )}
                          </motion.div>

                          {/* Text */}

                          <div className="ml-5 lg:ml-6">
                            <span
                              className={`
                                block
                                text-[10px]
                                uppercase
                                tracking-[0.25em]
                                mb-1.5
                                transition-colors
                                duration-300
                                ${
                                  isActive
                                    ? "text-[#20a46a]"
                                    : "text-white/20 group-hover:text-white/40"
                                }
                              `}
                            >
                              Step {String(index + 1).padStart(2, "0")}
                            </span>

                            <span
                              className={`
                                block
                                text-sm
                                font-medium
                                transition-colors
                                duration-300
                                ${
                                  isActive
                                    ? "text-white"
                                    : "text-white/35 group-hover:text-white/65"
                                }
                              `}
                            >
                              {point.title}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  RIGHT CONTENT
              ================================================== */}

              <div className="relative min-h-150 overflow-hidden">
                {/* Background number */}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{
                      opacity: 0,
                      x: 50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -30,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="absolute right-6 md:right-12 lg:right-16 top-6 md:top-10 text-[140px] md:text-[220px] lg:text-[280px] leading-none font-semibold text-white/2.5 select-none pointer-events-none"
                  >
                    {String(activeStep + 1).padStart(2, "0")}
                  </motion.div>
                </AnimatePresence>

                <div className="relative z-10 p-8 md:p-12 lg:p-16 xl:p-20">
                  {/* Step label */}

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeStep}-label`}
                      initial={{
                        opacity: 0,
                        y: 15,
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
                        duration: 0.4,
                      }}
                      className="flex items-center gap-4 mb-8"
                    >
                      <span className="text-[#20a46a] font-mono text-sm tracking-[0.2em]">
                        {String(activeStep + 1).padStart(2, "0")}
                      </span>

                      <span className="w-12 h-px bg-[#20a46a]/50" />

                      <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
                        Trading Step
                      </span>
                    </motion.div>
                  </AnimatePresence>

                  {/* Title */}

                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={`${activeStep}-title`}
                      initial={{
                        opacity: 0,
                        y: 30,
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
                        duration: 0.5,
                      }}
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-[-0.045em] leading-[0.98] max-w-3xl text-[#f2f4f0]"
                    >
                      {activePoint.title}
                    </motion.h3>
                  </AnimatePresence>

                  {/* Description */}

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${activeStep}-description`}
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
                        duration: 0.5,
                        delay: 0.08,
                      }}
                      className="mt-7 text-[#858b85] text-base md:text-lg leading-8 max-w-2xl"
                    >
                      {activePoint.description}
                    </motion.p>
                  </AnimatePresence>

                  {/* =================================================
                      ICON / VISUAL
                  ================================================== */}

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeStep}-icon`}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.15,
                      }}
                      className="mt-16"
                    >
                      <div className="relative w-24 h-24 md:w-28 md:h-28">
                        {/* Outer ring */}

                        <motion.div
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 rounded-full border border-[#20a46a]/20 border-t-[#20a46a]"
                        />

                        {/* Inner circle */}

                        <div className="absolute inset-3 rounded-full bg-[#20a46a]/6 border border-[#20a46a]/20 flex items-center justify-center">
                          <span className="text-3xl text-[#20a46a]">
                            {activePoint.icon}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Bottom information */}

                  <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
                    <div>
                      <span className="block text-white/25 text-[9px] uppercase tracking-[0.3em] mb-2">
                        Progress
                      </span>

                      <span className="text-white/60 text-sm font-mono">
                        {String(activeStep + 1).padStart(2, "0")} /{" "}
                        {String(visiblePoints.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="hidden sm:block w-px h-8 bg-white/10" />

                    <div>
                      <span className="block text-white/25 text-[9px] uppercase tracking-[0.3em] mb-2">
                        DollreX Capital
                      </span>

                      <span className="text-white/50 text-sm">
                        Global market access
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom progress */}

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/4">
                  <motion.div
                    animate={{
                      width: `${
                        ((activeStep + 1) / visiblePoints.length) * 100
                      }%`,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="h-full bg-[#20a46a]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            FOOTER STATEMENT
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
            delay: 0.2,
          }}
          className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#20a46a] animate-pulse" />

            <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
              Built for confident trading
            </span>
          </div>

          <span className="text-white/20 text-[10px] uppercase tracking-[0.25em]">
            DollreX Capital Ltd.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingSteps;
