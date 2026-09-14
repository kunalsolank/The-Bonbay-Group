import React from "react";
import { motion } from "framer-motion";

const PartnershipHero = () => {
  const navItems = [
    { label: "Benefits", href: "#Benefits" },
    { label: "Requirements", href: "#Requirements" },
    { label: "Sponsorship plans", href: "#Sponsorship_plans" },
    { label: "How to", href: "#How_to" },
    { label: "FAQs", href: "#FAQs" },
  ];

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#080908] text-white">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-[#20a46a] blur-[180px]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#d9b85c]/5 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* =========================================
            TOP NAVIGATION
        ========================================= */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center border-b border-white/10 py-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <a
                  href={item.href}
                  className="
                    relative
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/45
                    transition-colors
                    duration-300
                    hover:text-[#20a46a]
                  "
                >
                  {item.label}

                  {/* Hover underline */}
                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-px
                      w-0
                      bg-[#d9b85c]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>

                {index < navItems.length - 1 && (
                  <span className="hidden text-white/10 sm:block">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.nav>

        {/* =========================================
            HERO CONTENT
        ========================================= */}
        <div className="grid min-h-[calc(90vh-73px)] items-center gap-14 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[#20a46a]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#20a46a]">
                Partnership
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="max-w-2xl font-serif text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Partner with
              <br />
              <span className="text-[#20a46a]">Dollrex Capital Ltd.</span>
            </h1>

            {/* Secondary Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-7 font-serif text-2xl font-light text-white/80 sm:text-3xl"
            >
              Earn More, Every Day.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-6 max-w-xl text-base leading-8 text-white/50 sm:text-lg"
            >
              Enjoy fast payouts, and track your success in real-time. It’s
              simple, transparent, and built for your growth.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a
                href="#Requirements"
                className="
                  group
                  inline-flex
                  items-center
                  gap-5
                  border
                  border-[#20a46a]
                  bg-[#20a46a]
                  px-7
                  py-4
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-black
                  transition-all
                  duration-300
                  hover:bg-transparent
                  hover:text-[#d9b85c]
                "
              >
                Become A IB
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* =========================================
              RIGHT IMAGE
          ========================================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* Decorative Frame */}
            <div className="absolute -right-4 -top-4 h-full w-full border border-[#20a46a]/25 sm:-right-6 sm:-top-6" />

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.6 }}
              className="group relative h-[450px] overflow-hidden sm:h-[550px] lg:h-[650px]"
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                alt="Dollrex Capital partnership"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  group-hover:scale-105
                "
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

              {/* Image Label */}
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between sm:bottom-9 sm:left-9 sm:right-9">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#20a46a]" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#20a46a]">
                      Strategic Partnership
                    </span>
                  </div>

                  <p className="max-w-xs font-serif text-2xl font-light text-white sm:text-3xl">
                    Built for long-term growth.
                  </p>
                </div>

                <span className="hidden font-serif text-6xl font-light text-white/20 sm:block">
                  01
                </span>
              </div>
            </motion.div>

            {/* Floating Accent */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 hidden h-20 w-20 border border-[#d9b85c]/30 sm:block"
            >
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#20a46a]" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
          Scroll to explore
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="text-white/30"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
};

export default PartnershipHero;
