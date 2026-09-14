import React from "react";
import { motion } from "framer-motion";
import SlideUpCards from "../components/SlideUpCards";

const stats = [
  {
    value: "250+",
    label: "Trading Instruments",
  },
  {
    value: "24/5",
    label: "Market Access",
  },
  {
    value: "50+",
    label: "Global Markets",
  },
  {
    value: "0.0*",
    label: "Spreads From",
  },
];

const features = [
  {
    number: "01",
    title: "Global Market Access",
    description:
      "Our mission is to redefine online trading with a modern, inclusive approach. We aim to be the first name people think of when they want to trade—because they know we put them first. Every product we build, every update we launch, and every decision we make is guided by one core purpose: to serve and support our traders.",
  },
  {
    number: "02",
    title: "Built Around Traders",
    description:
      "We are committed to building better tools, breaking down barriers, and staying ahead of the curve—so our traders always have the edge they need.482.",
  },
  {
    number: "03",
    title: "Powerful Technology",
    description:
      "We envision a future where online trading is no longer reserved for the few—but open, fair, and thriving for all. We strive to lead this transformation by eliminating outdated systems, modernizing the trading experience, and growing alongside our community.",
  },
  {
    number: "04",
    title: "Transparent Experience",
    description:
      "We’re not just growing a company—we’re growing a movement. A movement of empowered traders, ethical practices, and global progress. With every new partnership, every new market, and every new trader, Dollrex Capital Ltd. is proud to stand at the frontlines of that change. 567.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AboutUs = () => {
  return (
    <main className="overflow-hidden bg-[#10120d] text-white pt-30">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-137.5 h-137.5 rounded-full bg-[#20a46a] blur-[160px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-50 -bottom-37.5 w-150 h-150 rounded-full bg-[#20a46a]/10 blur-[170px]"
        />

        {/* Decorative rings */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[8%] top-[18%] w-95 h-95 rounded-full border border-[#20a46a]/20"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[13%] top-[24%] w-67.5 h-67.5 rounded-full border border-white/10"
        />

        <div className="relative w-[90%] max-w-7xl mx-auto py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mb-7"
            >
              <span className="w-10 h-0.5 bg-[#20a46a]" />

              <p className="uppercase tracking-[0.3em] text-[#20a46a] text-sm font-semibold">
                About Us
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight"
            >
              Dollrex Capital Ltd. Trade Bold.
              <br />
              <span className="text-[#20a46a]">Trade Smart.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[#aeb3a5] text-base md:text-lg leading-8 max-w-2xl mt-8"
            >
              Explore the Global Currency Market Traded by Millions Daily with
              Us.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-10"
            >
              <button className="group px-7 py-4 bg-linear-to-r from-[#1fa864] via-[#258d87] to-[#3959a6]] text-white font-semibold rounded-full flex items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(160,211,17,0.3)]">
                Start Trading
                <span className="w-8 h-8 rounded-full bg-white text-[#20a46a] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button className="px-7 py-4 border border-white/15 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                Explore Markets
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#72786b] text-xs tracking-[0.3em]"
        >
          SCROLL ↓
        </motion.div>
      </section>

      {/* =====================================================
          STATS - LIGHT SECTION
      ====================================================== */}

      <section className="relative bg-[#e5e7dc] text-[#10120d]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-[90%] max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              variants={fadeUp}
              key={stat.label}
              className={`
                py-12 md:py-16 px-6
                ${index !== 0 ? "border-l border-[#c5c8ba]" : ""}
              `}
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-semibold"
              >
                {stat.value}
              </motion.p>

              <p className="text-[#707568] text-sm mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section className="relative py-28 md:py-36 bg-[#080908] text-white overflow-hidden">
        {/* Ambient Glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-20 w-[450px] h-[450px] bg-[#20a46a]/8 rounded-full blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-200px] bottom-[-200px] w-[450px] h-[450px] bg-[#20a46a]/5 rounded-full blur-[150px]"
        />

        <div className="relative w-[90%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          {/* CHART */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-square max-w-[550px] mx-auto"
            >
              {/* Outer technical frame */}
              <div className="absolute inset-5 md:inset-8 border border-white/10 rounded-[40px]" />

              {/* Small corner details */}
              <div className="absolute top-0 left-16 w-16 h-px bg-[#20a46a]" />
              <div className="absolute bottom-0 right-16 w-16 h-px bg-[#20a46a]" />

              {/* Chart area */}
              <div className="absolute inset-14 md:inset-16 bg-[#0d0f0c] border border-white/10 rounded-[28px] overflow-hidden">
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.08]">
                  {[20, 40, 60, 80].map((position) => (
                    <React.Fragment key={position}>
                      <div
                        className="absolute left-0 w-full h-px bg-white"
                        style={{ top: `${position}%` }}
                      />

                      <div
                        className="absolute top-0 h-full w-px bg-white"
                        style={{ left: `${position}%` }}
                      />
                    </React.Fragment>
                  ))}
                </div>

                {/* Chart labels */}
                <div className="absolute top-5 left-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#62665e]">
                    Market Performance
                  </p>
                </div>

                <div className="absolute top-5 right-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#20a46a] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-[#62665e]">
                    Live
                  </span>
                </div>

                {/* Animated Chart */}
                <svg
                  viewBox="0 0 500 300"
                  className="absolute inset-0 w-full h-full p-8 md:p-10"
                  fill="none"
                >
                  {/* Glow line */}
                  <motion.path
                    d="M20 240 L80 210 L120 220 L170 160 L220 180 L270 110 L320 130 L370 70 L420 95 L480 35"
                    stroke="#20a46a"
                    strokeWidth="10"
                    opacity="0.08"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Main line */}
                  <motion.path
                    d="M20 240 L80 210 L120 220 L170 160 L220 180 L270 110 L320 130 L370 70 L420 95 L480 35"
                    stroke="#20a46a"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  />

                  {/* End point */}
                  <motion.circle
                    cx="480"
                    cy="35"
                    r="6"
                    fill="#20a46a"
                    animate={{
                      r: [5, 9, 5],
                      opacity: [1, 0.6, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </svg>

                {/* Bottom Stats */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#62665e]">
                      Market Growth
                    </p>

                    <p className="text-2xl md:text-3xl font-semibold text-[#20a46a] mt-1">
                      +28.42%
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#62665e]">
                      Markets
                    </p>

                    <p className="text-white font-medium mt-1">24 / 5</p>
                  </div>
                </div>
              </div>

              {/* Floating market indicator */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 right-0 md:right-[-10px] flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#20a46a]" />

                <span className="text-xs uppercase tracking-[0.2em] text-[#777c73]">
                  Global Markets
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[0.3em] text-[#20a46a] text-xs md:text-sm font-semibold mb-6"
            >
              Who We Are
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
            >
              Making global
              <br />
              markets
              <span className="text-[#20a46a]"> simpler.</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              className="space-y-5 mt-8 text-[#858a82] leading-7 max-w-xl text-base md:text-lg"
            >
              <p>
                Dollrex Capital Ltd. is a globally accessible, trader-first ECN
                financial broker, proudly serving clients across Asia, the
                Middle East, and beyond. From first-time traders to seasoned
                professionals, we offer a fair and reliable space to grow,
                backed by cutting-edge technology and a human approach.
              </p>

              <p>
                Powered by the industry-leading MetaTrader 5 platform, we
                provide ultra-tight spreads, instant execution, multilingual
                24/7 support, and complete transparency—so that every trade is
                made with confidence and clarity. We exist to put the power of
                global financial markets into the hands of everyday people, with
                tools and support that make a real difference.
              </p>
            </motion.div>

            {/* Bottom accent */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-4"
            >
              <div className="w-12 h-px bg-[#20a46a]" />

              <span className="text-xs uppercase tracking-[0.25em] text-[#5f645b]">
                Built for modern traders
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <SlideUpCards />

      {/* =====================================================
          WHY US
      ====================================================== */}

      <section className="relative py-28 md:py-36 bg-[#10120d]">
        <div className="w-[90%] max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-3xl mb-16"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[0.25em] text-[#20a46a] text-sm font-semibold mb-5"
            >
              Why Trade With Us
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-6xl font-semibold leading-tight"
            >
              Built for the way
              <br />
              <span className="text-[#20a46a]">traders think.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-5"
          >
            {features.map((feature) => (
              <motion.div
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                key={feature.number}
                className="group relative border border-[#30342b] bg-[#191c15] rounded-3xl p-8 md:p-10 overflow-hidden"
              >
                {/* Glow */}

                <motion.div
                  className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-[#20a46a]/10 blur-[70px]"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                <div className="relative">
                  <div className="flex justify-between">
                    <span className="text-[#20a46a] font-mono text-sm">
                      {feature.number}
                    </span>

                    <span className="text-[#555] group-hover:text-[#20a46a] transition-colors">
                      ↗
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold mt-14">
                    {feature.title}
                  </h3>

                  <p className="text-[#8c9284] leading-7 mt-4">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          GLOBAL MARKETS
      ====================================================== */}

      <section className="relative py-28 md:py-36 bg-[#080908] text-white overflow-hidden">
        {/* Ambient Glow */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-120px] top-[-120px] w-[500px] h-[500px] bg-[#20a46a]/10 rounded-full blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-200px] bottom-[-200px] w-[450px] h-[450px] bg-[#20a46a]/5 rounded-full blur-[130px]"
        />

        <div className="relative w-[90%] max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.p
                variants={fadeUp}
                className="uppercase tracking-[0.3em] text-[#20a46a] text-xs md:text-sm font-semibold mb-6"
              >
                Global Reach
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
              >
                One platform.
                <br />
                <span className="text-[#20a46a]">Global opportunities.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-[#92968f] leading-7 mt-8 max-w-xl text-base md:text-lg"
              >
                Markets never stop moving. Our platform gives you access to
                opportunities across multiple asset classes, allowing you to
                build and manage your trading strategy from one place.
              </motion.p>

              <motion.button
                variants={fadeUp}
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "#20a46a",
                  color: "#080908",
                }}
                whileTap={{ scale: 0.97 }}
                className="mt-9 px-7 py-4 bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white rounded-full font-medium transition-colors duration-300"
              >
                Explore Our Markets →
              </motion.button>
            </motion.div>

            {/* MARKET LIST */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              {[
                ["01", "Forex", "Global currency markets"],
                ["02", "Metals", "Gold, silver & precious metals"],
                ["03", "Indices", "Major global indices"],
                ["04", "Commodities", "Energy & raw materials"],
              ].map(([number, name, description], index) => (
                <motion.div
                  key={number}
                  variants={fadeUp}
                  whileHover={{ x: 10 }}
                  className="group relative flex items-center gap-6 py-7 border-b border-white/10 first:border-t transition-all duration-300"
                >
                  {/* Number */}
                  <span className="w-10 text-[#5f635c] text-sm font-mono group-hover:text-[#20a46a] transition-colors">
                    {number}
                  </span>

                  {/* Name + Description */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:text-[#20a46a] transition-colors duration-300">
                      {name}
                    </h3>

                    <p className="text-sm text-[#666b64] mt-1 group-hover:text-[#92968f] transition-colors">
                      {description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#777b75] group-hover:border-[#20a46a] group-hover:text-[#20a46a] transition-all duration-300"
                  >
                    ↗
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
