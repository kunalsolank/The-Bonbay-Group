import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowUpRight } from "lucide-react";

import "swiper/css";

import backgroundImage from "../assets/home_markets_bg.webp";
import { Ripple } from "../components/ui/ripple";

const markets = [
  { id: 1, name: "Forex", icon: "FX", count: "70+ Pairs", spread: "from 0.0 pips" },
  { id: 2, name: "Metals", icon: "Au", count: "Gold, Silver, Plat", spread: "from 0.1 pips" },
  { id: 3, name: "Indices", icon: "IN", count: "US30, NAS100, GER40", spread: "Institutional" },
  { id: 4, name: "Shares", icon: "SH", count: "1000+ Global Equities", spread: "Zero comms" },
  { id: 5, name: "Commodities", icon: "CO", count: "Oil, Gas, Agriculture", spread: "Ultra-low" },
  { id: 6, name: "ETFs", icon: "ET", count: "Broad & Sectoral", spread: "Direct Market" },
  { id: 7, name: "Crypto", icon: "₿", count: "BTC, ETH, Top 50", spread: "24/7 Deep Book" },
  { id: 8, name: "Futures", icon: "FU", count: "Commodities & Rates", spread: "Zero markups" },
  { id: 9, name: "Bonds", icon: "BO", count: "US & EU Treasuries", spread: "Prime Liquidity" },
];

const AllTrade = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-[#05040b] pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-18 xl:pt-14 xl:pb-20">

      {/* Top transition */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-[#05040b] via-[#05040b]/90 to-transparent sm:h-32" />

      {/* Main atmospheric glow */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-1/4 z-0
          h-[300px] w-[500px]
          -translate-x-1/2 rounded-full
          bg-gradient-to-r from-[#00d2ff]/10 via-[#00ff87]/12 to-[#2563eb]/10
          blur-[100px]
          sm:h-[350px] sm:w-[600px] sm:blur-[120px]
          lg:h-[400px] lg:w-[700px] lg:blur-[140px]
        "
      />

      {/* Bottom left glow */}
      <div
        className="
          pointer-events-none absolute bottom-0 left-[-150px] z-0
          h-[280px] w-[350px]
          rounded-full bg-[#00ff87]/8 blur-[100px]
          lg:h-[350px] lg:w-[450px]
        "
      />

      {/* Bottom right glow */}
      <div
        className="
          pointer-events-none absolute bottom-0 right-[-150px] z-0
          h-[280px] w-[350px]
          rounded-full bg-[#00d2ff]/8 blur-[100px]
          lg:h-[350px] lg:w-[450px]
        "
      />

      {/* Background image */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-20 mix-blend-screen sm:opacity-25 lg:opacity-30">
        <img
          src={backgroundImage}
          alt=""
          className="
            h-full w-full
            max-w-3xl
            object-contain
            [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]
            sm:max-w-4xl
            lg:max-w-5xl
          "
        />
      </div>

      {/* Ripple */}
      <Ripple
        mainCircleSize={500}
        numCircles={6}
        className="z-0 opacity-25 sm:opacity-30 lg:opacity-40"
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col items-center text-center"
        >

          {/* Badge */}
          <div
            className="
              mb-4 inline-flex items-center gap-2
              rounded-full border border-[#00ff87]/30
              bg-[#00ff87]/10
              px-3 py-1
              backdrop-blur-md
              shadow-[0_0_16px_rgba(0,255,135,0.12)]
              sm:mb-5 sm:px-4 sm:py-1.5
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00ff87] animate-ping" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00ff87] sm:text-xs sm:tracking-[0.25em]">
              Multi-Asset Gateway
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              max-w-4xl
              bg-gradient-to-b from-white via-white/95 to-white/60
              bg-clip-text
              text-3xl
              font-normal
              leading-[1.08]
              tracking-tight
              text-transparent
              sm:text-4xl
              md:text-5xl
              lg:text-[52px]
              xl:text-6xl
            "
          >
            Trade All Markets.
            <br />

            <span className="bg-gradient-to-r from-[#00ff87] via-[#00d2ff] to-[#2563eb] bg-clip-text text-transparent">
              Infinite Opportunities.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-xl
              text-center
              text-xs
              font-light
              leading-relaxed
              text-white/65
              sm:mt-5
              sm:text-sm
              md:text-base
              lg:max-w-2xl
            "
          >
            Access Forex, Precious Metals, Global Indices, Equities,
            Commodities, and Crypto within one unified institutional-grade
            trading ecosystem.
          </p>

          {/* CTA */}
          <div className="mt-6 sm:mt-7 lg:mt-8">
            <Link
              to="/login"
              className="
                group/btn relative
                inline-flex
                items-center
                justify-center
                gap-2
                overflow-hidden
                rounded-full
                bg-gradient-to-r
                from-[#00ff87]
                via-[#00d2ff]
                to-[#2563eb]
                p-[1.5px]
                font-semibold
                text-white
                shadow-[0_0_25px_rgba(0,255,135,0.2)]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_40px_rgba(0,255,135,0.4)]
              "
            >
              <span
                className="
                  flex items-center justify-center gap-2
                  rounded-full
                  bg-[#05040b]
                  px-6 py-2.5
                  transition-colors
                  duration-300
                  group-hover/btn:bg-transparent
                  sm:px-7 sm:py-3
                "
              >
                <span className="text-xs font-medium uppercase tracking-wider sm:text-sm">
                  Trade Now
                </span>

                <ArrowUpRight
                  className="
                    h-3.5 w-3.5
                    text-[#00ff87]
                    transition-transform
                    duration-300
                    group-hover/btn:-translate-y-1
                    group-hover/btn:translate-x-1
                    group-hover/btn:text-white
                    sm:h-4 sm:w-4
                  "
                />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* ================= MARKET SLIDER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-10 w-full sm:mt-12 lg:mt-14"
        >
          <div className="mx-auto w-full max-w-[1050px]">

            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              centeredSlides={true}
              loop={true}
              slideToClickedSlide={true}
              speed={550}
              grabCursor={true}
              breakpoints={{
                480: {
                  slidesPerView: 3.5,
                  spaceBetween: 14,
                },

                640: {
                  slidesPerView: 4.5,
                  spaceBetween: 18,
                },

                768: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },

                // Small desktop
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 22,
                },

                // Large desktop
                1280: {
                  slidesPerView: 7,
                  spaceBetween: 26,
                },
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              className="!overflow-visible py-4 sm:py-5"
            >
              {markets.map((market, index) => {
                const isActive = activeIndex === index;

                return (
                  <SwiperSlide
                    key={market.id}
                    className="flex !h-auto cursor-pointer items-center justify-center py-3"
                  >
                    <div
                      className={`
                        relative
                        flex
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        p-2.5
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        ease-out

                        h-[72px]
                        w-[72px]

                        sm:h-[82px]
                        sm:w-[82px]
                        sm:rounded-[20px]

                        md:h-[88px]
                        md:w-[88px]

                        lg:h-[92px]
                        lg:w-[92px]

                        xl:h-[96px]
                        xl:w-[96px]

                        ${
                          isActive
                            ? `
                              scale-[1.08]
                              -translate-y-1
                              border-[#00ff87]/60
                              bg-[#07090e]
                              shadow-[0_12px_30px_rgba(0,255,135,0.22)]
                            `
                            : `
                              scale-[0.9]
                              border-white/10
                              bg-[#07090e]/60
                              opacity-55
                              hover:scale-100
                              hover:opacity-90
                              hover:border-white/20
                            `
                        }
                      `}
                    >
                      {/* Active glow */}
                      {isActive && (
                        <>
                          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff87] to-transparent" />

                          <div className="pointer-events-none absolute -top-3 h-8 w-8 rounded-full bg-[#00ff87]/25 blur-md sm:-top-4 sm:h-10 sm:w-10" />
                        </>
                      )}

                      {/* Icon */}
                      <span
                        className={`
                          font-bold
                          tracking-tight
                          transition-colors
                          duration-300

                          text-lg
                          sm:text-xl
                          md:text-2xl
                          lg:text-[26px]

                          ${
                            isActive
                              ? "bg-gradient-to-r from-white to-[#00ff87] bg-clip-text text-transparent"
                              : "text-white/65"
                          }
                        `}
                      >
                        {market.icon}
                      </span>

                      {/* Name */}
                      <span
                        className="
                          mt-0.5
                          text-[8px]
                          font-mono
                          tracking-wide
                          text-white/45
                          sm:mt-1
                          sm:text-[9px]
                          md:text-[10px]
                        "
                      >
                        {market.name}
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* ================= ACTIVE INFO ================= */}
            <div className="mt-3 flex flex-col items-center sm:mt-4">

              <motion.div
                key={markets[activeIndex].id}
                initial={{
                  opacity: 0,
                  y: 8,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="
                  flex
                  max-w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-[#07090e]/90
                  px-3
                  py-2
                  backdrop-blur-xl
                  shadow-[0_8px_25px_rgba(0,0,0,0.45)]

                  sm:gap-3
                  sm:rounded-2xl
                  sm:px-5
                  sm:py-2.5

                  md:gap-4
                  md:px-6
                  md:py-3
                "
              >

                {/* Name */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00ff87] sm:h-2 sm:w-2" />

                  <span className="text-xs font-semibold text-white sm:text-sm md:text-lg">
                    {markets[activeIndex].name}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-3 w-px bg-white/15 sm:h-4" />

                {/* Count */}
                <span className="max-w-[100px] truncate text-[9px] font-mono text-[#00ff87] sm:max-w-none sm:text-[10px] md:text-xs">
                  {markets[activeIndex].count}
                </span>

                {/* Divider */}
                <div className="h-3 w-px bg-white/15 sm:h-4" />

                {/* Spread */}
                <span className="max-w-[100px] truncate text-[9px] font-mono text-white/55 sm:max-w-none sm:text-[10px] md:text-xs">
                  {markets[activeIndex].spread}
                </span>
              </motion.div>

              {/* Slider label */}
              <p
                className="
                  mt-2
                  text-[8px]
                  font-mono
                  uppercase
                  tracking-[0.2em]
                  text-white/25

                  sm:mt-3
                  sm:text-[9px]
                  sm:tracking-[0.25em]

                  md:text-[10px]
                "
              >
                Interactive Multi-Asset Slider
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-b from-transparent via-[#05040b]/80 to-[#05040b] sm:h-32" />
    </section>
  );
};

export default AllTrade;