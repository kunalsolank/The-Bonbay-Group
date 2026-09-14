import React from "react";
import { motion } from "framer-motion";

const CommoditiesOverview = () => {
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
            Commodities Trading
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            Trade the world's
            <br />
            <span className="text-[#a0d311]">essential commodities.</span>
          </motion.h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-28 mt-20">
          {/* Commodity Overview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Large Text */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-[#62675f] text-xs uppercase tracking-[0.25em]">
                Global Commodities
              </p>

              <div className="mt-5">
                <span className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-white">
                  4
                </span>

                <span className="text-[#a0d311] text-3xl md:text-4xl ml-3">
                  +
                </span>
              </div>

              <p className="text-[#6f746c] mt-5 max-w-xs leading-6">
                Major commodity categories available across global markets.
              </p>
            </div>

            {/* Commodity Types */}
            <div className="mt-12 border-t border-white/10 pt-7">
              <div className="flex items-center justify-between">
                <span className="text-[#62675f] text-xs uppercase tracking-[0.2em]">
                  Popular Markets
                </span>

                <span className="flex items-center gap-2 text-[#a0d311] text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#a0d311] animate-pulse" />
                  Global Access
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {["Gold", "Silver", "Oil", "Natural Gas"].map((commodity) => (
                  <span
                    key={commodity}
                    className="text-sm text-[#858a82] border-b border-white/10 pb-2"
                  >
                    {commodity}
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
              Commodities trading is the process of buying and selling raw
              materials or natural resources — such as{" "}
              <span className="text-white font-medium">
                gold, silver, oil, and natural gas
              </span>{" "}
              — with the aim of making a profit from changes in their prices.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#737870] text-base md:text-lg leading-8 mt-8"
            >
              These materials are essential to the global economy, and their
              prices can be influenced by factors such as supply and demand,
              geopolitical events, weather conditions, and overall market
              sentiment.
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
              Think of it like a shopkeeper buying goods at a lower price and
              selling them at a higher one. Similarly, commodity traders aim to
              benefit from price movements by identifying opportunities in
              global markets.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#737870] text-base md:text-lg leading-8 mt-8"
            >
              Whether you're new to trading or an experienced market
              participant, commodities can provide opportunities to diversify
              your trading strategy and gain exposure to some of the world's
              most important resources.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#737870] text-base md:text-lg leading-8 mt-8"
            >
              With{" "}
              <span className="text-white font-medium">
                DollreX Capital Ltd.
              </span>
              , getting started with commodity trading is simple and accessible.
              Our platform provides powerful trading tools, competitive
              leverage, and a user-friendly environment designed for traders at
              every experience level.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#737870] text-base md:text-lg leading-8 mt-8"
            >
              You don't need a large investment to begin — just the right
              strategy, reliable tools, and the support of a trading partner
              focused on helping you navigate the markets.
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
            ["Gold", "Precious Metal"],
            ["Silver", "Precious Metal"],
            ["Oil", "Energy Market"],
            ["Natural Gas", "Energy Market"],
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

export default CommoditiesOverview;
