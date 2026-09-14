import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const FeaturePoints = ({ eyebrow, heading, subheading, points = [] }) => {
  const steps = points.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);

  /* -----------------------------------------------------------
     PINNED SCROLL CONTAINER (desktop / tablet only — see the
     `hidden lg:block` wrapper below). Mobile gets a simpler
     stacked reveal instead, since scroll-jacking tends to feel
     janky on touch devices and small viewports.
  ----------------------------------------------------------- */
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rawIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, steps.length - 1]
  );

  useMotionValueEvent(rawIndex, "change", (latest) => {
    const rounded = Math.min(
      steps.length - 1,
      Math.max(0, Math.round(latest))
    );
    setActiveIndex((prev) => (prev !== rounded ? rounded : prev));
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-[#080808] text-white">
      {/* Header — shared by both mobile and desktop versions */}
      <div className="relative w-[90%] max-w-7xl mx-auto pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-200px] top-[-150px] w-[500px] h-[500px] rounded-full bg-[#20a46a]/7 blur-[150px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl"
        >
          {eyebrow && (
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-px bg-[#20a46a]" />
              <p className="text-[#20a46a] uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
                {eyebrow}
              </p>
            </div>
          )}

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.03] tracking-tight">
            {heading}
          </h2>

          {subheading && (
            <p className="text-[#777] text-base md:text-lg leading-8 mt-6 md:mt-7 max-w-2xl">
              {subheading}
            </p>
          )}
        </motion.div>
      </div>

      {/* =======================================================
          DESKTOP / TABLET — pinned scroll-jacking version
          Hidden below lg breakpoint.
      ======================================================= */}
      <div className="hidden lg:block">
        <div
          ref={containerRef}
          style={{ height: `${steps.length * 100}vh` }}
          className="relative"
        >
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <motion.div
              animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[-200px] bottom-[-200px] w-[450px] h-[450px] rounded-full bg-[#20a46a]/5 blur-[140px] pointer-events-none"
            />

            <div className="relative w-[90%] max-w-7xl mx-auto">
              <div className="grid grid-cols-[0.85fr_1.15fr] gap-24 items-center">
                {/* Left — step list */}
                <div className="relative">
                  <div className="border-t border-white/10">
                    {steps.map((point, index) => {
                      const isActive = activeIndex === index;
                      return (
                        <div
                          key={point.title}
                          className="relative border-b border-white/10 py-6"
                        >
                          <motion.div
                            initial={false}
                            animate={{ width: isActive ? "100%" : "0%" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="absolute bottom-[-1px] left-0 h-px bg-[#20a46a]"
                          />

                          <div className="flex items-center gap-6">
                            <span
                              className={`text-sm font-mono tracking-widest transition-colors duration-300 ${
                                isActive
                                  ? "text-[#20a46a]"
                                  : "text-[#41443f]"
                              }`}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3
                              className={`text-2xl lg:text-3xl font-medium tracking-tight transition-all duration-300 ${
                                isActive
                                  ? "text-white translate-x-2"
                                  : "text-[#454842]"
                              }`}
                            >
                              {point.title}
                            </h3>

                            <motion.span
                              animate={{
                                x: isActive ? 5 : 0,
                                opacity: isActive ? 1 : 0,
                              }}
                              className="ml-auto text-[#20a46a]"
                            >
                              →
                            </motion.span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Scroll progress bar */}
                  <div className="mt-8">
                    <div className="h-px w-full bg-white/10 relative overflow-hidden">
                      <motion.div
                        style={{ width: progressWidth }}
                        className="absolute inset-y-0 left-0 bg-[#20a46a]"
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#20a46a] animate-pulse" />
                      <span className="text-[#555] text-xs uppercase tracking-[0.2em]">
                        Keep scrolling to explore
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right — showcase */}
                <div className="relative min-h-[480px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -25 }}
                      transition={{ duration: 0.45 }}
                    >
                      <div className="relative h-[380px] overflow-hidden">
                        <motion.img
                          src={steps[activeIndex]?.image}
                          alt={steps[activeIndex]?.title}
                          initial={{ scale: 1.08 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.8 }}
                          className="w-full h-full object-cover grayscale"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                        <div className="absolute -right-20 -top-20 w-52 h-52 rounded-full bg-[#20a46a]/10 blur-[100px]" />

                        <div className="absolute top-6 left-6">
                          <span className="text-[#20a46a] text-xs font-mono tracking-[0.3em]">
                            {String(activeIndex + 1).padStart(2, "0")} /{" "}
                            {String(steps.length).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      <div className="relative mt-[-35px] ml-10">
                        <div className="bg-[#080808] border-l border-[#20a46a] pl-8 py-5">
                          <p className="text-[#20a46a] text-xs uppercase tracking-[0.25em] mb-4">
                            {String(activeIndex + 1).padStart(2, "0")}
                          </p>
                          <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                            {steps[activeIndex]?.title}
                          </h3>
                          <p className="text-[#737870] text-base leading-7 mt-4 max-w-xl">
                            {steps[activeIndex]?.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-8 flex items-center gap-2">
                    {steps.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeIndex === i
                            ? "w-8 bg-[#20a46a]"
                            : "w-1.5 bg-white/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================
          MOBILE — simple stacked reveal, no scroll-jacking.
          Each step is its own card that fades/slides in as it
          enters the viewport, image + text together (no
          separate sticky showcase, since there's no room for
          one at this width).
      ======================================================= */}
      <div className="lg:hidden w-[90%] max-w-xl mx-auto pb-20">
        <div className="flex flex-col gap-10">
          {steps.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative h-[220px] sm:h-[260px] overflow-hidden rounded-sm">
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[#20a46a] text-xs font-mono tracking-[0.3em]">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(steps.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="relative mt-[-16px] ml-4">
                <div className="bg-[#080808] border-l border-[#20a46a] pl-5 py-4">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {point.title}
                  </h3>
                  <p className="text-[#737870] text-sm leading-6 mt-3">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#20a46a] animate-pulse" />
          <span className="text-[#555] text-xs uppercase tracking-[0.2em]">
            Explore our advantages
          </span>
        </div>
      </div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-[90%] max-w-7xl mx-auto border-t border-white/10 pt-8 pb-20 lg:pb-24 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <span className="text-[#454842] text-xs uppercase tracking-[0.25em]">
          DollreX Capital Ltd.
        </span>
        <span className="text-[#555] text-xs uppercase tracking-[0.2em]">
          Built around your trading experience
        </span>
      </motion.div>
    </section>
  );
};

export default FeaturePoints;