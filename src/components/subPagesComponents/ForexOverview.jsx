import React from "react";
import { motion } from "framer-motion";

const ForexOverview = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
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

  return (
    <section className="relative py-28 md:py-20 bg-[#080908] text-white overflow-hidden">
      {/* Ambient Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-180px] top-[-150px] w-[500px] h-[500px] rounded-full bg-[#a0d311]/8 blur-[150px]"
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
        className="absolute left-[-200px] bottom-[-200px] w-[450px] h-[450px] rounded-full bg-[#a0d311]/5 blur-[140px]"
      />

      <div className="relative w-[90%] max-w-7xl mx-auto">
        {/* Top Heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-[0.3em] text-[#a0d311] text-xs md:text-sm font-semibold mb-6"
          >
            Forex Trading
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            The world's most
            <br />
            <span className="text-[#a0d311]">traded market.</span>
          </motion.h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-28 mt-20">
          {/* Market Statistic */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Large Number */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-[#62675f] text-xs uppercase tracking-[0.25em]">
                Daily Trading Volume
              </p>

              <div className="mt-5">
                <span className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-white">
                  $6T
                </span>
                <span className="text-[#a0d311] text-3xl md:text-4xl ml-3">
                  +
                </span>
              </div>

              <p className="text-[#6f746c] mt-5 max-w-xs leading-6">
                Traded across the global foreign exchange market every day.
              </p>
            </div>

            {/* Trading Hours */}
            <div className="mt-12 border-t border-white/10 pt-7">
              <div className="flex items-center justify-between">
                <span className="text-[#62675f] text-xs uppercase tracking-[0.2em]">
                  Market Hours
                </span>

                <span className="flex items-center gap-2 text-[#a0d311] text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#a0d311] animate-pulse" />
                  Open 24 / 5
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {["London", "New York", "Tokyo", "Dubai"].map((city) => (
                  <span
                    key={city}
                    className="text-sm text-[#858a82] border-b border-white/10 pb-2"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#a1a59e] text-lg md:text-xl leading-8"
            >
              Forex trading — also known as foreign exchange or FX — is the
              global marketplace for exchanging national currencies. It operates
              24 hours a day, five days a week, across major financial hubs like
              London, New York, Tokyo, and Dubai.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#737870] text-base md:text-lg leading-8 mt-8"
            >
              With daily volume exceeding $6 trillion, the forex market offers
              unmatched liquidity and volatility, making it ideal for traders of
              all experience levels.
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              className="w-full h-px bg-white/10 my-10"
            />

            <motion.p
              variants={fadeUp}
              className="text-[#a1a59e] text-lg md:text-xl leading-8"
            >
              At DollreX Capital Ltd, we provide access to over{" "}
              <span className="text-white font-medium">40 currency pairs</span>{" "}
              including majors, minors, and exotics. With deep liquidity, tight
              spreads, and leverage up to{" "}
              <span className="text-[#a0d311] font-medium">1:1000</span>, our
              clients can capitalise on short- and long-term price movements.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#737870] text-base md:text-lg leading-8 mt-8"
            >
              Whether you're trading the{" "}
              <span className="text-white">USD/JPY</span> or{" "}
              <span className="text-white">EUR/USD</span>, our MT5 platform
              delivers the precision and power needed to execute confidently.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#737870] text-base md:text-lg leading-8 mt-8"
            >
              Combine that with dedicated regional support, fast withdrawals,
              and a trader-first environment — and you'll see why more forex
              traders choose{" "}
              <span className="text-white font-medium">
                DollreX Capital Ltd.
              </span>
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Feature Line */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-8 border-t border-white/10"
        >
          {[
            ["40+", "Currency Pairs"],
            ["1:1000", "Maximum Leverage"],
            ["24 / 5", "Market Access"],
            ["MT5", "Trading Platform"],
          ].map(([value, label]) => (
            <motion.div key={label} variants={fadeUp} className="group">
              <p className="text-2xl md:text-3xl font-semibold text-white group-hover:text-[#a0d311] transition-colors duration-300">
                {value}
              </p>

              <p className="text-xs uppercase tracking-[0.18em] text-[#5f645b] mt-2">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ForexOverview;
