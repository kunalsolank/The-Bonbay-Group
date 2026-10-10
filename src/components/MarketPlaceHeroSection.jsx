import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StockAmbientBackground from "./ui/stockAnimationbackgroud";

export default function MarketPlaceHeroSection({
  tag = "Design studio for AI, SaaS & tech startups | Based on San Francisco",
  title = "Creative studio powering AI, brands & digital futures",
  description = "We partner with visionary teams to build standout brands, launch smarter products, and grow with purpose.",
  buttonText = "Get Started",
  buttonLink = "https://portal.dollrexcapital.com/register-new/",
  stats = [
    { value: "150+", label: "In product launches" },
    { value: "$1.35B", label: "Startup funding raised" },
    { value: "10x ROI", label: "UX/UI Product Revamp" },
    { value: "25K+", label: "Funds and syndicates" },
  ],
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative overflow-hidden min-h-[600px] sm:min-h-screen flex items-center home-hero-section py-28 sm:py-32 lg:py-[180px] h-auto bg-black">
      {/* Animated black-green stock background */}
      <StockAmbientBackground />

      {/* Soft overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      <div className="section-circle opacity-30 pointer-events-none" />

      {/* Main container */}
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 w-full flex flex-col items-center z-10">
        <div className="w-full max-w-[90vw] sm:max-w-[940px] mx-auto">
          <div className="flex flex-col items-center text-center gap-6 sm:gap-8 hero-detail-div">
            {/* Subheading pill */}
            <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center border border-white/10 rounded-full py-2 px-4 sm:py-3 sm:px-5 hero-sub-heading-div max-w-[95vw] sm:max-w-max mx-auto bg-white/5 backdrop-blur-sm">
              <img
                src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/68821a3faca8d79d3b4e7810_star.svg"
                alt=""
                width={20}
                height={20}
                className="sub-heading-icon flex-shrink-0"
                loading="lazy"
              />
              <span className="text-xs sm:text-sm text-white small-paragraph hero-sub-heading-text text-center">
                {tag}
              </span>
            </div>

            <motion.div
              ref={ref}
              initial={{ filter: "blur(20px)", opacity: 0 }}
              animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
              transition={{ duration: 1.2 }}
              className="flex flex-col items-center gap-6 sm:gap-8"
            >
              <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl leading-snug sm:leading-tight lg:leading-[1.2] font-normal max-w-[95vw] sm:max-w-[769px] mx-auto h1-heading hero-heading">
                {title}
              </h2>

              {/* Description */}
              <p className="text-white/80 text-base sm:text-lg max-w-[90vw] sm:max-w-[550px] mx-auto large-paragraph hero-paragraph">
                {description}
              </p>
            </motion.div>

            {/* CTA Button */}
            <div className="flex justify-center hero-button-div">
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white px-8 py-3.5 font-medium uppercase secondary-font tracking-wide rounded-2xl sm:rounded-full hover:scale-[1.03] hover:shadow-[0_10px_25px_-5px_rgba(31,168,100,0.5)] transition-all duration-300 inline-block text-center cursor-pointer shadow-lg text-sm sm:text-base"
              >
                {buttonText}
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 max-w-full sm:max-w-230 mt-10 sm:mt-14 mx-auto w-full">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start text-left">
                  <div className="bg-white/50 w-10 sm:w-11.5 h-px mb-2 sm:mb-3 mr-auto" />
                  <div className="text-2xl sm:text-3xl md:text-4xl text-white mb-2 sm:mb-3 mr-auto font-medium">
                    {stat.value}
                  </div>
                  <p className="text-sm sm:text-base text-white/70 text-center sm:text-left">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}