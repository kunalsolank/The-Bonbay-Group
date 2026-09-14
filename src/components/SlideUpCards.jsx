import React from "react";
import { motion } from "framer-motion";
import forexImage from "../assets/forexImg.webp";
const SlideUpCards = () => {
  const platforms = [
    {
      number: "01",
      title: "Trust",
      description:
        "Transparent, and guided by trader-first principles since day one.",
      image: forexImage,
    },
    {
      number: "02",
      title: "Support",
      description:
        "Get expert assistance 24/5 via WhatsApp, email, and live chat.",
      image: forexImage,
    },
    {
      number: "03",
      title: "Access",
      description:
        "Trade global markets with deep liquidity and zero restrictions on strategy.",
      image: forexImage,
    },
    {
      number: "04",
      title: "Speed",
      description:
        "Fast execution. Instant withdrawals. No delays. No excuses.",
      image: forexImage,
    },
  ];
  return (
    <div>
      <section className="relative overflow-hidden bg-[#080908] py-24 sm:py-32">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-[#d9b85c]/10 blur-[160px]" />

        <div className="relative mx-auto  px-6 lg:px-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#20a46a]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#20a46a]">
                Trading Platforms
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Why
              <br />
              <span className="text-[#20a46a]"> DollreX Capital Ltd?</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Designed for traders who value transparency, flexibility, and
              round-the-clock support.
            </p>
          </motion.div>

          {/* Platform Items */}
          {/* Platform Items */}
          <div className="grid gap-6 md:grid-cols-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative h-[520px] overflow-hidden border border-white/10 bg-[#10110f]"
              >
                {/* IMAGE */}
                <img
                  src={platform.image}
                  alt={platform.title}
                  className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-transform
          duration-1000
          ease-out
          group-hover:scale-110
        "
                />

                {/* DARK GRADIENT */}
                <div
                  className="
          absolute inset-0
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
        "
                />

                {/* ========================================
          DEFAULT TITLE
      ======================================== */}
                <div
                  className="
          absolute
          bottom-0
          left-0
          z-20
          w-full
          p-7
          transition-all
          duration-500
          group-hover:-translate-y-4
          group-hover:opacity-0
          sm:p-8
        "
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#20a46a]" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                      {platform.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-light text-white sm:text-4xl">
                    {platform.title}
                  </h3>
                </div>

                {/* ========================================
          HOVER DESCRIPTION
      ======================================== */}
                <div
                  className="
          absolute
          bottom-0
          left-0
          z-10
          w-full

          translate-y-full

          bg-black/95

          p-7

          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:translate-y-0

          sm:p-8
        "
                >
                  {/* Number */}
                  <div className="mb-5">
                    <span className="font-serif text-5xl font-light text-[#3957a7]">
                      {platform.number}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#20a46a]" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#20a46a]">
                      MetaTrader 5
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-3xl font-light text-white sm:text-4xl">
                    {platform.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                    {platform.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-px w-12 bg-[#20a46a]" />

                    <a
                      href="#"
                      className="text-[9px] uppercase tracking-[0.3em] text-white/30"
                    >
                      Trade Anywhere
                    </a>
                  </div>
                </div>

                {/* PREMIUM HOVER BORDER */}
                <div
                  className="
          pointer-events-none
          absolute
          inset-0
          z-30
          border
          border-transparent
          transition-colors
          duration-500
          group-hover:border-[#d9b85c]/50
        "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlideUpCards;
