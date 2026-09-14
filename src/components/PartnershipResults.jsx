import React from "react";
import { motion } from "framer-motion";

const PartnershipResults = () => {
  const stats = [
    {
      number: "800+",
      title: "Active IBs Worldwide",
      description:
        "Join a fast-growing network of Introducing Brokers who trust us to power their success.",
      image:
        "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/ib/ibc-01.webp",
      size: "large",
    },
    {
      number: "$20M+",
      title: "in Commissions Earned",
      description:
        "Our partners have already earned over $20 million—your success is our top priority.",
      image:
        "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/ib/ibc-02.webp",
      size: "small",
    },
    {
      number: "$9M+",
      title: "Paid Out in Just 12 Months",
      description:
        "We deliver—over $9 million in timely payouts to our partners in the last year alone.",
      image:
        "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/ib/ibc-03.webp",
      size: "small",
    },
  ];

  return (
    <section
      id="Results"
      className="relative overflow-hidden bg-[#080908] py-24 sm:py-28 lg:py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-[#d9b85c]/5 blur-[160px]" />

        <div className="absolute right-[-200px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-[#d9b85c]/5 blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl lg:mb-20"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#20a46a]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#20a46a]">
              Our Track Record
            </span>
          </div>

          <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built on Trust.
            <br />
            <span className="text-[#20a46a]">Backed by Results.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-[320px_320px]">
          {/* =========================
              LARGE STAT
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 md:col-span-7 md:row-span-2 md:min-h-0"
          >
            {/* Image */}
            <img
              src={stats[0].image}
              alt={stats[0].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/5" />

            {/* Gold Glow */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#d9b85c]/10 blur-[100px] transition-all duration-700 group-hover:bg-[#d9b85c]/20" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 lg:p-11">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-[#20a46a]">
                  Global Network
                </span>

                <span className="font-mono text-xs text-white/40">01 / 03</span>
              </div>

              <h3 className="font-serif text-6xl font-medium leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
                {stats[0].number}
              </h3>

              <h4 className="mt-4 text-xl font-medium text-white sm:text-2xl">
                {stats[0].title}
              </h4>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                {stats[0].description}
              </p>

              <div className="mt-7 h-px w-16 bg-[#20a46a] transition-all duration-700 group-hover:w-28" />
            </div>
          </motion.div>

          {/* =========================
              COMMISSIONS
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 md:col-span-5 md:min-h-0"
          >
            <img
              src={stats[1].image}
              alt={stats[1].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />

            <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                Earnings
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
              <h3 className="font-serif text-5xl font-medium leading-none text-[#20a46a] sm:text-6xl">
                {stats[1].number}
              </h3>

              <h4 className="mt-3 text-lg font-medium text-white sm:text-xl">
                {stats[1].title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-white/50">
                {stats[1].description}
              </p>

              <div className="mt-6 h-px w-10 bg-[#20a46a] transition-all duration-500 group-hover:w-20" />
            </div>
          </motion.div>

          {/* =========================
              PAYOUTS
          ========================== */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 md:col-span-5 md:min-h-0"
          >
            <img
              src={stats[2].image}
              alt={stats[2].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />

            <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-md">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                Payouts
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
              <h3 className="font-serif text-5xl font-medium leading-none text-[#20a46a] sm:text-6xl">
                {stats[2].number}
              </h3>

              <h4 className="mt-3 text-lg font-medium text-white sm:text-xl">
                {stats[2].title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-white/50">
                {stats[2].description}
              </p>

              <div className="mt-6 h-px w-10 bg-[#20a46a] transition-all duration-500 group-hover:w-20" />
            </div>
          </motion.div>
        </div>

        {/* =========================
            PROVEN PROGRAM
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mt-4 overflow-hidden rounded-[2rem] border border-[#20a46a]/20 bg-[#20a46a]/[0.04] px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
        >
          {/* Decorative Number */}
          <span className="pointer-events-none absolute -right-3 -top-12 font-serif text-[180px] font-medium leading-none text-[#20a46a]/[0.035] sm:text-[220px]">
            04
          </span>

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-4xl">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-[#20a46a]" />

                <span className="text-xs uppercase tracking-[0.3em] text-[#20a46a]">
                  The Difference
                </span>
              </div>

              <h3 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                A Proven Program{" "}
                <span className="text-[#20a46a]">That Pays.</span>
              </h3>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/50 sm:text-lg">
                With real numbers, global reach, and transparent systems,
                Dollrex Capital Ltd. is where smart partners grow.
              </p>
            </div>

            {/* Decorative Mark */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-[#20a46a]/30">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-8 w-8 text-[#20a46a]"
              >
                <path
                  d="M5 12.5L9.5 17L19 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-10 flex items-center gap-5"
        >
          <div className="h-px flex-1 bg-white/10" />

          <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
            Numbers that speak for themselves
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipResults;
