import React from "react";
import { motion } from "framer-motion";
import forexImage from "../../assets/forexImg.webp";
const platforms = [
  {
    number: "01",
    title: "MT5 Desktop",
    description:
      "Experience powerful trading with MetaTrader 5 on your desktop. Analyze the markets with advanced charting tools, manage your orders smoothly, and enjoy fast execution—all in one professional platform designed for serious traders.",
    image: forexImage,
  },
  {
    number: "02",
    title: "MT5 Mobile",
    description:
      "Stay connected to the markets wherever you go. With MT5 on your Android or iOS device, you can trade with full functionality, including one-click trading and access to real-time price feeds, right at your fingertips.",
    image: forexImage,
  },
  {
    number: "03",
    title: "MT5 Web",
    description:
      "No downloads or installations required - MetaTrader 5 Web gives you instant access to your trading account from any internet browser. It’s fast, secure, and fully synced with your desktop and mobile accounts.",
    image: forexImage,
  },
];

const MetaTraderPlatforms = () => {
  return (
    <section className="relative overflow-hidden bg-[#080908] py-24 text-white sm:py-32">
      {/* Ambient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.12 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-[#a0d311] blur-[180px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#20a46a]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#20a46a]">
              Trading Platforms
            </span>
          </div>

          <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Download
            <br />
            <span className="text-[#20a46a]">MetaTrader 5</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
            Access the global markets from wherever you are. Choose the
            MetaTrader 5 platform that fits the way you trade.
          </p>
        </motion.div>

        {/* Platforms */}
        <div>
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.number}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-t border-white/10 py-12 last:border-b sm:py-16"
            >
              <div className="grid items-center gap-10 lg:grid-cols-[80px_1fr_0.85fr] lg:gap-14">
                {/* Number */}
                <div className="hidden lg:block">
                  <span className="font-serif text-5xl font-light text-white/15 transition-colors duration-500 group-hover:text-[#a0d311]/40">
                    {platform.number}
                  </span>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="relative"
                  >
                    <img
                      src={platform.image}
                      alt={platform.title}
                      className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[390px]"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Mobile Number */}
                    <div className="absolute left-5 top-5 lg:hidden">
                      <span className="font-serif text-4xl text-white/70">
                        {platform.number}
                      </span>
                    </div>
                  </motion.div>

                  {/* Image Border */}
                  <div className="pointer-events-none absolute inset-0 border border-white/10 transition-colors duration-500 group-hover:border-[#a0d311]/40" />
                </div>

                {/* Content */}
                <div>
                  <div className="mb-5 flex items-center gap-4">
                    <span className="h-px w-8 bg-[#20a46a] transition-all duration-500 group-hover:w-14" />

                    <span className="text-xs uppercase tracking-[0.25em] text-white/40">
                      MetaTrader 5
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-light text-white sm:text-4xl lg:text-5xl">
                    {platform.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                    {platform.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-px w-8 bg-white/20 transition-all duration-500 group-hover:w-16 group-hover:bg-[#20a46a]" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                      Trade Anywhere
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetaTraderPlatforms;
