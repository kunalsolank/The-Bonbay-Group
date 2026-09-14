import React from "react";
import { motion } from "framer-motion";

const IndicesOverview = () => {
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
            Indices Trading
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            Trade the market's
            <br />
            <span className="text-[#a0d311]">biggest benchmarks.</span>
          </motion.h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-28 mt-20">
          {/* Index Overview */}
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
                Market Benchmark
              </p>

              <div className="mt-5">
                <span className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-white">
                  100
                </span>

                <span className="text-[#a0d311] text-3xl md:text-4xl ml-3">
                  +
                </span>
              </div>

              <p className="text-[#6f746c] mt-5 max-w-xs leading-6">
                Leading companies and sectors represented through major global
                indices.
              </p>
            </div>

            {/* Popular Indices */}
            <div className="mt-12 border-t border-white/10 pt-7">
              <div className="flex items-center justify-between">
                <span className="text-[#62675f] text-xs uppercase tracking-[0.2em]">
                  Popular Indices
                </span>

                <span className="flex items-center gap-2 text-[#a0d311] text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#a0d311] animate-pulse" />
                  Global Access
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {["NASDAQ 100", "S&P 500", "Dow Jones", "DAX"].map((index) => (
                  <span
                    key={index}
                    className="text-sm text-[#858a82] border-b border-white/10 pb-2"
                  >
                    {index}
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
              Indices trading allows you to keep an eye on an entire group of
              companies at once. Instead of buying individual stocks, you trade
              on the performance of a collection of stocks bundled together as
              an <span className="text-white font-medium">index</span>.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#737870] text-base md:text-lg leading-8 mt-8"
            >
              For example, the{" "}
              <span className="text-white font-medium">NASDAQ 100</span>{" "}
              includes many of the world's leading technology and growth
              companies. If you believe the technology sector will rise, you can
              trade the index to potentially benefit from its overall movement.
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
              Indices trading is popular because it provides{" "}
              <span className="text-white font-medium">diversification</span>{" "}
              across multiple companies and can offer a broader view of market
              performance than trading individual stocks.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#737870] text-base md:text-lg leading-8 mt-8"
            >
              By trading an index, you can gain exposure to the performance of
              an entire market or sector without having to select and trade each
              individual company separately.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#737870] text-base md:text-lg leading-8 mt-8"
            >
              With{" "}
              <span className="text-white font-medium">
                DollreX Capital Ltd.
              </span>
              , you get access to the right trading tools, real-time market
              data, and a simple platform designed to make indices trading
              accessible to both new and experienced traders.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#737870] text-base md:text-lg leading-8 mt-8"
            >
              Whether you're tracking technology, major US companies, or broader
              global markets, indices give you a way to trade overall market
              movements through a single instrument.
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
            ["NASDAQ 100", "Technology Index"],
            ["S&P 500", "US Market Index"],
            ["Dow Jones", "Blue-Chip Index"],
            ["DAX", "German Market Index"],
          ].map(([value, label]) => (
            <motion.div key={value} variants={fadeUp} className="group">
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

export default IndicesOverview;
