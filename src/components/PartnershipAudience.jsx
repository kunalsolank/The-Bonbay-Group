import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PartnershipAudience = () => {
  const [activeTab, setActiveTab] = useState("customers");

  const content = {
    customers: {
      eyebrow: "01 / Customer Experience",
      label: "For Your Customers",
      title: "Give your audience",
      highlight: "more reasons to trade.",
      description:
        "Partner with a trading environment designed to give your clients the tools, liquidity and experience they need to trade with confidence.",
      benefits: [
        "Trade across 80+ global currency pairs from a single account.",
        "Access award-winning trading platforms across mobile, tablet and desktop.",
        "Use powerful market analysis tools to identify opportunities with clarity.",
        "Benefit from fast execution, deep liquidity and transparent trading conditions.",
        "Enjoy a secure, professional and seamless trading environment.",
      ],
    },

    partners: {
      eyebrow: "02 / Partner Growth",
      label: "For Our Partners",
      title: "Build a partnership",
      highlight: "that keeps growing.",
      description:
        "Everything you need to attract quality leads, monitor performance and build a stronger revenue stream with Dollrex Capital Ltd.",
      benefits: [
        "Monitor trades, referrals and commissions through real-time reporting.",
        "Partner with an established and professional trading provider.",
        "Receive dedicated support focused on helping you grow your referral network.",
        "Access ready-to-use marketing resources designed to attract and convert leads.",
      ],
    },
  };

  const activeContent = content[activeTab];

  return (
    <section
      id="In-Our-Partners"
      className="relative overflow-hidden bg-[#070807] py-28 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Ambient lighting */}
        <div className="absolute left-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-[#20a46a]/[0.035] blur-[160px]" />

        <div className="absolute bottom-[-15%] right-[-10%] h-[550px] w-[550px] rounded-full bg-[#20a46a]/[0.025] blur-[180px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Top light */}
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.012] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.8fr] lg:gap-24">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-start"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#20a46a]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#20a46a]">
                The Partnership
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            <h2 className="max-w-5xl font-serif text-[clamp(3rem,6vw,6.4rem)] font-medium leading-[0.92] tracking-[-0.05em] text-white">
              One partnership.
              <br />
              <span className="text-white/25">Two sides of</span>{" "}
              <span className="text-[#20a46a]">growth.</span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
              Create meaningful value for your customers while building a
              partnership designed around your own long-term growth.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            INTERACTIVE SELECTOR
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-24 lg:mt-32"
        >
          <div className="grid overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.018] lg:grid-cols-[0.75fr_1.5fr]">
            {/* =================================================
                LEFT SELECTOR
            ================================================== */}
            <div className="relative border-b border-white/[0.08] lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.025] to-transparent" />

              <div className="relative p-7 sm:p-10 lg:p-12">
                <div className="mb-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
                    Choose your perspective
                  </span>
                </div>

                <div className="space-y-2">
                  {/* Customers */}
                  <button
                    onClick={() => setActiveTab("customers")}
                    className={`group relative w-full overflow-hidden rounded-2xl p-6 text-left transition-all duration-500 sm:p-7 ${
                      activeTab === "customers"
                        ? " bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6]"
                        : "bg-white/[0.025] hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="mb-8 flex items-center justify-between">
                        <span
                          className={`font-mono text-[10px] tracking-[0.25em] ${
                            activeTab === "customers"
                              ? "text-black/50"
                              : "text-white/25"
                          }`}
                        >
                          01
                        </span>

                        <span
                          className={`text-lg transition-transform duration-500 ${
                            activeTab === "customers"
                              ? "rotate-45 text-black"
                              : "text-white/20 group-hover:translate-x-1"
                          }`}
                        >
                          ↗
                        </span>
                      </div>

                      <h3
                        className={`font-serif text-2xl font-medium tracking-tight sm:text-3xl ${
                          activeTab === "customers"
                            ? "text-black"
                            : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        Your Customers
                      </h3>

                      <p
                        className={`mt-3 text-sm leading-6 ${
                          activeTab === "customers"
                            ? "text-black/55"
                            : "text-white/25"
                        }`}
                      >
                        A better trading experience for the people you refer.
                      </p>
                    </div>
                  </button>

                  {/* Partners */}
                  <button
                    onClick={() => setActiveTab("partners")}
                    className={`group relative w-full overflow-hidden rounded-2xl p-6 text-left transition-all duration-500 sm:p-7 ${
                      activeTab === "partners"
                        ? " bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6]"
                        : "bg-white/[0.025] hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="mb-8 flex items-center justify-between">
                        <span
                          className={`font-mono text-[10px] tracking-[0.25em] ${
                            activeTab === "partners"
                              ? "text-black/50"
                              : "text-white/25"
                          }`}
                        >
                          02
                        </span>

                        <span
                          className={`text-lg transition-transform duration-500 ${
                            activeTab === "partners"
                              ? "rotate-45 text-black"
                              : "text-white/20 group-hover:translate-x-1"
                          }`}
                        >
                          ↗
                        </span>
                      </div>

                      <h3
                        className={`font-serif text-2xl font-medium tracking-tight sm:text-3xl ${
                          activeTab === "partners"
                            ? "text-black"
                            : "text-white/70 group-hover:text-white"
                        }`}
                      >
                        Our Partners
                      </h3>

                      <p
                        className={`mt-3 text-sm leading-6 ${
                          activeTab === "partners"
                            ? "text-black/55"
                            : "text-white/25"
                        }`}
                      >
                        The tools and support to help your business grow.
                      </p>
                    </div>
                  </button>
                </div>

                {/* Small detail */}
                <div className="mt-12 hidden items-center gap-4 lg:flex">
                  <span className="h-px w-8 bg-white/10" />

                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                    Select to explore
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT CONTENT
            ================================================== */}
            <div className="relative min-h-[600px]">
              {/* Decorative giant number */}
              <div className="pointer-events-none absolute right-[-20px] top-[-30px] select-none font-serif text-[240px] font-medium leading-none tracking-[-0.1em] text-white/[0.025] sm:text-[300px]">
                {activeTab === "customers" ? "01" : "02"}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative p-7 sm:p-10 lg:p-14"
                >
                  {/* Eyebrow */}
                  <div className="flex items-center gap-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#20a46a]" />

                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#20a46a]/70">
                      {activeContent.eyebrow}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="mt-8 max-w-2xl font-serif text-4xl font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                    {activeContent.title}
                    <br />
                    <span className="text-[#20a46a]">
                      {activeContent.highlight}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="mt-8 max-w-xl text-base leading-8 text-white/40 sm:text-lg">
                    {activeContent.description}
                  </p>

                  {/* Benefits */}
                  <div className="mt-14 border-t border-white/[0.08]">
                    {activeContent.benefits.map((benefit, index) => (
                      <motion.div
                        key={`${activeTab}-${index}`}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.07 + 0.15,
                        }}
                        className="group flex gap-5 border-b border-white/[0.08] py-6 sm:gap-7"
                      >
                        {/* Number */}
                        <span className="w-6 shrink-0 pt-1 font-mono text-[10px] tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-[#20a46a]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Indicator */}
                        <div className="relative mt-1.5 h-4 w-4 shrink-0">
                          <span className="absolute inset-0 rounded-full border border-white/15 transition-all duration-500 group-hover:border-[#20a46a]" />

                          <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 transition-all duration-500 group-hover:bg-[#20a46a] group-hover:scale-150" />
                        </div>

                        {/* Text */}
                        <p className="max-w-xl text-sm leading-7 text-white/45 transition-colors duration-300 group-hover:text-white/80 sm:text-base">
                          {benefit}
                        </p>

                        {/* Arrow */}
                        <span className="ml-auto hidden pt-1 text-sm text-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#20a46a] sm:block">
                          ↗
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid gap-8 border-t border-white/[0.08] pt-10 sm:grid-cols-2 lg:mt-24"
        >
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">
              The objective
            </span>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
              Create an ecosystem where your customers receive more value and
              your partnership has room to scale.
            </p>
          </div>

          <div className="flex items-start sm:justify-end">
            <a
              href="#Requirements"
              className="group inline-flex items-center gap-5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors duration-300 group-hover:text-[#20a46a]">
                20a46a a Partner
              </span>

              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-500 group-hover:border-[#20a46a] group-hover:bg-[#20a46a] group-hover:text-black group-hover:rotate-45">
                ↗
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipAudience;
