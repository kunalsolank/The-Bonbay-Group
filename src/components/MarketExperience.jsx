import React from "react";
import { motion } from "framer-motion";

import market1 from "../assets/endless possiblities.png";
import market2 from "../assets/built for traders.png";
import market3 from "../assets/global access.png";

const MarketExperience = () => {
  const markets = [
    {
      symbol: "EUR/USD",
      price: "1.1648",
      change: "+0.42%",
    },
    {
      symbol: "XAU/USD",
      price: "3,348.20",
      change: "+1.24%",
    },
    {
      symbol: "NAS100",
      price: "21,450",
      change: "+0.87%",
    },
    {
      symbol: "GBP/USD",
      price: "1.3421",
      change: "+0.31%",
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#080808] py-28 md:py-36">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-[#a0d311]/10 blur-[160px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 bottom-[-200px] w-[450px] h-[450px] rounded-full bg-[#a0d311] blur-[150px]"
      />

      <div className="relative w-[90%] max-w-7xl mx-auto">
        {/* =====================================================
            TOP CONTENT
        ====================================================== */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-[#a0d311]" />

              <span className="uppercase tracking-[0.3em] text-[#a0d311] text-sm font-semibold">
                Global Markets
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-white">
              One platform.
              <br />
              <span className="text-[#a0d311]">Endless possibilities.</span>
            </h2>

            <p className="text-[#888] text-base md:text-lg leading-8 max-w-xl mt-8">
              Discover opportunities across the world's most popular markets.
              Trade the instruments you know, explore new markets and build your
              strategy from one powerful platform.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-9">
              <button className="group px-7 py-4 bg-[#a0d311] text-black rounded-full flex items-center gap-4 font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(160,211,17,0.2)]">
                Explore Markets
                <span className="w-8 h-8 rounded-full bg-black text-[#a0d311] flex items-center justify-center group-hover:translate-x-1 transition-all">
                  →
                </span>
              </button>

              <span className="text-sm text-[#666]">
                250+ instruments available
              </span>
            </div>
          </motion.div>

          {/* =====================================================
              IMAGE STACK
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative min-h-[500px] md:min-h-[600px]"
          >
            {/* Main image */}

            <motion.div
              initial={{
                rotate: -5,
              }}
              whileInView={{
                rotate: -2,
              }}
              whileHover={{
                rotate: 0,
                scale: 1.02,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="absolute left-0 top-12 w-[72%] h-[430px] md:h-[500px] rounded-[30px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.5)] border border-[#292929]"
            >
              <img
                src={market1}
                alt="Global markets"
                className="w-full h-full object-cover"
              />

              {/* Dark overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-white/50 text-xs uppercase tracking-[0.25em]">
                  Global Markets
                </p>

                <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                  Trade without borders.
                </h3>
              </div>
            </motion.div>

            {/* Second image */}

            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                rotate: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 5,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              whileHover={{
                rotate: 2,
                scale: 1.04,
              }}
              className="absolute right-0 top-0 w-[42%] h-[260px] rounded-[28px] overflow-hidden border-8 border-[#080808] shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              <img
                src={market2}
                alt="Trading markets"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Third image */}

            <motion.div
              initial={{
                opacity: 0,
                y: 60,
                rotate: -8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -4,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              whileHover={{
                rotate: 0,
                scale: 1.04,
              }}
              className="absolute right-3 bottom-0 w-[45%] h-[250px] rounded-[28px] overflow-hidden border-8 border-[#080808] shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
            >
              <img
                src={market3}
                alt="Trading technology"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Floating stat */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[50%] bottom-8 bg-[#111] rounded-2xl px-5 py-4 shadow-2xl border border-[#292929]"
            >
              <p className="text-[#666] text-xs uppercase tracking-wider">
                Market Access
              </p>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl font-semibold text-white">24/5</span>

                <span className="text-[#a0d311] text-sm">● Live</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            MARKET TICKER
        ====================================================== */}

        <motion.div
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-24"
        >
          <div className="flex items-center justify-between mb-5">
            <p className="text-xs uppercase tracking-[0.25em] text-[#666]">
              Market Watch
            </p>

            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="w-2 h-2 rounded-full bg-[#a0d311]"
              />

              <span className="text-xs text-[#666]">LIVE MARKETS</span>
            </div>
          </div>

          <div className="border-y border-[#202020] grid grid-cols-2 md:grid-cols-4">
            {markets.map((market, index) => (
              <motion.div
                key={market.symbol}
                whileHover={{
                  backgroundColor: "#111",
                }}
                className={`
                  p-5 md:p-7 transition-colors duration-300
                  ${index % 2 !== 0 ? "border-l border-[#202020]" : ""}
                  md:border-l
                  ${index === 0 ? "md:border-l-0" : ""}
                  ${index > 1 ? "border-t md:border-t-0" : ""}
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">
                    {market.symbol}
                  </span>

                  <span className="text-[#a0d311] text-xs">↗</span>
                </div>

                <div className="flex items-end justify-between mt-3">
                  <span className="text-xl font-semibold text-white">
                    {market.price}
                  </span>

                  <span className="text-xs text-[#a0d311]">
                    {market.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            FEATURE STRIP
        ====================================================== */}

        <motion.div
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
          }}
          transition={{
            duration: 0.8,
          }}
          className="grid md:grid-cols-3 gap-5 mt-12"
        >
          {/* Feature 1 */}

          <motion.div
            whileHover={{
              y: -6,
            }}
            className="bg-[#0e0e0e] rounded-3xl p-7 border border-[#202020] transition-all duration-300 hover:border-[#a0d311]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          >
            <motion.div
              whileHover={{
                rotate: 45,
                scale: 1.1,
              }}
              className="w-11 h-11 rounded-full bg-[#a0d311]/10 border border-[#a0d311]/20 flex items-center justify-center text-[#a0d311] text-xl"
            >
              ↗
            </motion.div>

            <h3 className="text-xl font-semibold mt-6 text-white">
              Global Access
            </h3>

            <p className="text-[#666] leading-7 mt-3">
              Connect with markets across the world from one seamless trading
              environment.
            </p>
          </motion.div>

          {/* Feature 2 */}

          <motion.div
            whileHover={{
              y: -6,
            }}
            className="bg-[#0e0e0e] rounded-3xl p-7 border border-[#202020] transition-all duration-300 hover:border-[#a0d311]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          >
            <motion.div
              whileHover={{
                rotate: -45,
                scale: 1.1,
              }}
              className="w-11 h-11 rounded-full bg-[#a0d311]/10 border border-[#a0d311]/20 flex items-center justify-center text-[#a0d311] text-xl"
            >
              ◈
            </motion.div>

            <h3 className="text-xl font-semibold mt-6 text-white">
              250+ Instruments
            </h3>

            <p className="text-[#666] leading-7 mt-3">
              Explore Forex, Metals, Indices, Commodities and more through one
              powerful platform.
            </p>
          </motion.div>

          {/* Feature 3 */}

          <motion.div
            whileHover={{
              y: -6,
            }}
            className="bg-[#0e0e0e] rounded-3xl p-7 border border-[#202020] transition-all duration-300 hover:border-[#a0d311]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          >
            <motion.div
              whileHover={{
                scale: 1.15,
              }}
              className="w-11 h-11 rounded-full bg-[#a0d311]/10 border border-[#a0d311]/20 flex items-center justify-center text-[#a0d311] text-xl"
            >
              ◎
            </motion.div>

            <h3 className="text-xl font-semibold mt-6 text-white">
              Built For Traders
            </h3>

            <p className="text-[#666] leading-7 mt-3">
              Everything is designed to help you understand markets and act with
              confidence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketExperience;
