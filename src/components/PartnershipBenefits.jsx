import React from "react";
import { motion } from "framer-motion";

const PartnershipBenefits = () => {
  const benefits = [
    {
      number: "01",
      title: "High-Value Commissions",
      description:
        "Earn more from every successful referral with a commission structure built to reward meaningful growth.",
      icon: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/ib/ib-01.webp",
    },
    {
      number: "02",
      title: "Flexible Earning Models",
      description:
        "Choose between CPA or CPL models and build a partnership strategy that fits your audience and business.",
      icon: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/ib/ib-02.webp",
    },
    {
      number: "03",
      title: "Fast & Reliable Payouts",
      description:
        "Get rewarded without unnecessary delays through a streamlined and dependable payout process.",
      icon: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/ib/ib-03.webp",
    },
    {
      number: "04",
      title: "Real-Time Performance",
      description:
        "Monitor referrals, conversions and earnings through a clear dashboard designed for complete visibility.",
      icon: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/ib/ib-01.webp",
    },
    {
      number: "05",
      title: "Dedicated Partner Support",
      description:
        "Work with a team that understands your goals and provides the guidance you need to grow.",
      icon: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/ib/ib-02.webp",
    },
    {
      number: "06",
      title: "Growth-Ready Resources",
      description:
        "Access professional marketing tools and resources designed to help you attract, convert and scale.",
      icon: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/ib/ib-03.webp",
    },
  ];

  return (
    <section
      id="Benefits"
      className="relative overflow-hidden bg-[#070807] py-28 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Ambient glow */}
        <div className="absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#20a46a]/[0.035] blur-[160px]" />

        <div className="absolute right-[-10%] bottom-[5%] h-[600px] w-[600px] rounded-full bg-[#20a46a]/[0.025] blur-[180px]" />

        {/* Fine grid */}
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

        {/* Top radial light */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.015] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.5fr] lg:gap-24">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-start"
          >
            <div className="flex items-center gap-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#20a46a] opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#20a46a]" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#20a46a]">
                Partnership Benefits
              </span>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="max-w-5xl font-serif text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.045em] text-white">
              More than a partnership.
              <br />
              <span className="text-white/30">A platform for</span>{" "}
              <span className="text-[#20a46a]">growth.</span>
            </h2>

            <div className="mt-10 flex max-w-2xl items-start gap-6">
              <div className="mt-2 h-px w-12 shrink-0 bg-[#20a46a]" />

              <p className="text-base leading-8 text-white/45 sm:text-lg">
                Everything you need to turn your network into a scalable,
                rewarding and long-term partnership with Dollrex Capital Ltd.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BENEFITS GRID
        ====================================================== */}
        <div className="mt-24 border-t border-white/[0.08] lg:mt-32">
          <div className="grid lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden border-b border-white/[0.08] ${
                  index % 2 === 0 ? "lg:border-r lg:border-white/[0.08]" : ""
                }`}
              >
                {/* Hover background */}
                <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#20a46a]/[0.035] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />

                {/* Large background number */}
                <div className="pointer-events-none absolute -right-4 -top-8 select-none font-serif text-[180px] font-medium leading-none tracking-[-0.08em] text-[#20a46a] transition-all duration-700 group-hover:-translate-x-4 group-hover:text-[#20a46a]/[0.06] sm:text-[220px]">
                  {benefit.number}
                </div>

                <div className="relative px-0 py-12 sm:py-16 lg:px-12 lg:py-20">
                  {/* Top row */}
                  <div className="mb-12 flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-[0.3em] text-[#20a46a]/70">
                      {benefit.number}
                    </span>

                    {/* Icon */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.025] backdrop-blur-sm transition-all duration-500 group-hover:border-[#20a46a]/40 group-hover:bg-[#20a46a]/10 group-hover:shadow-[0_0_40px_rgba(160,211,17,0.12)]">
                      <img
                        src={benefit.icon}
                        alt=""
                        className="h-7 w-7 object-contain opacity-50 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                      />

                      <span className="absolute inset-[-5px] rounded-full border border-[#20a46a]/0 transition-all duration-500 group-hover:inset-[-8px] group-hover:border-[#20a46a]/10" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative max-w-xl">
                    <h3 className="font-serif text-3xl font-medium leading-[1.05] tracking-[-0.025em] text-white/85 transition-all duration-500 group-hover:text-white sm:text-4xl lg:text-[42px]">
                      {benefit.title}
                    </h3>

                    <p className="mt-6 max-w-md text-sm leading-7 text-white/35 transition-colors duration-500 group-hover:text-white/55 sm:text-base">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-12 flex items-center gap-4">
                    <div className="h-px w-8 bg-white/10 transition-all duration-700 group-hover:w-16 group-hover:bg-[#20a46a]" />

                    <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/20 transition-colors duration-500 group-hover:text-[#20a46a]/70">
                      Partner Advantage
                    </span>
                  </div>
                </div>

                {/* Accent corner */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#20a46a] transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 lg:mt-32"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] px-7 py-10 backdrop-blur-xl sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            {/* Glow */}
            <div className="pointer-events-none absolute right-[-10%] top-[-100%] h-[400px] w-[400px] rounded-full bg-[#20a46a]/[0.06] blur-[100px]" />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#20a46a]">
                  Built for ambitious partners
                </span>

                <h3 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Your network.
                  <span className="text-white/30"> Your growth.</span>
                  <br />
                  <span className="text-[#20a46a]">Our partnership.</span>
                </h3>
              </div>

              <a
                href="#Requirements"
                className="group relative inline-flex w-fit shrink-0 items-center gap-5 overflow-hidden rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:border-[#20a46a]/50 hover:bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] hover:text-black"
              >
                <span className="relative z-10">Become a Partner</span>

                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-black/20 group-hover:rotate-45">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            MICRO FOOTER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-8 flex flex-col justify-between gap-4 px-1 text-[10px] uppercase tracking-[0.25em] text-white/20 sm:flex-row"
        >
          <span>Built on performance</span>

          <span>Designed for long-term partnerships</span>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipBenefits;
