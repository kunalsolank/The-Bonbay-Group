import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import homeBack from "../assets/tbg/home-back.svg";

export default function TabSection({ tabs, heading = '', title = '' }) {
  const [activeTab, setActiveTab] = useState("forex");

  const currentTab = tabs.find((tab) => tab.key === activeTab) || tabs[0];

  return (
    <section className="py-20 sm:py-28 lg:py-32  text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#1fa864]/10 via-[#258d87]/10 to-[#3959a6]/10 blur-[140px] rounded-full" />

      <div className="mx-auto px-4 max-w-7xl flex flex-col gap-12 sm:gap-16 relative z-10">

        {/* Section Title with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <div>
            <span className="bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] bg-clip-text text-transparent uppercase text-xs sm:text-sm tracking-widest font-bold inline-block">
              {heading}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mt-3">
            {title}
          </h2>
        </motion.div>

        {/* Tabs Navigation Menu with Scroll Animation */}
        <motion.nav
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center gap-2 sm:gap-4 border border-[#ffffff1a] p-2 flex-wrap mx-auto max-w-full overflow-x-auto rounded-lg bg-[#0a0f1d]/50 backdrop-blur-md"
          role="tablist"
          aria-label="Core Markets Tabs"
        >
          {tabs.map(({ key, label, tabTitleIcon }) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={activeTab === key}
              aria-controls={`panel-${key}`}
              id={`tab-${key}`}
              tabIndex={activeTab === key ? 0 : -1}
              onClick={() => setActiveTab(key)}
              className={`px-4 sm:px-7 py-3 text-sm sm:text-base leading-5 font-semibold transition-all rounded duration-200 whitespace-nowrap flex-shrink-0 cursor-pointer ${
                activeTab === key
                  ? "border-0 bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white shadow-[0_0_24px_rgba(31,168,100,0.35)] scale-[1.02]"
                  : "bg-transparent text-gray-300 hover:text-white border border-[#ffffff1a] hover:border-white/30"
              }`}
            >
              <img
                src={tabTitleIcon}
                alt=""
                width={18}
                height={18}
                loading="lazy"
                className="inline-block mr-2 sm:mr-3"
              />
              {label}
            </button>
          ))}
        </motion.nav>

        {/* Selected Tab Content Showcase with Animated Transitions */}
        <div>
          <AnimatePresence mode="wait">
            {currentTab && (
              <motion.article
                key={currentTab.key}
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                id={`panel-${currentTab.key}`}
                role="tabpanel"
                aria-labelledby={`tab-${currentTab.key}`}
                className="grid grid-cols-1 md:grid-cols-2 items-stretch border border-[#ffffff14] rounded-2xl overflow-hidden bg-[#060814]/70 shadow-2xl relative"
              >
                {/* Left Content Area: Two Points & CTA */}
                <div className="bg-[#070b16] px-6 sm:px-10 md:px-12 lg:px-16 py-10 md:py-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#ffffff14] h-full">
                  <span className="bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] bg-clip-text text-transparent uppercase text-xs sm:text-sm mb-3 tracking-widest font-bold inline-block">
                    {currentTab.subtitle}
                  </span>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                    {currentTab.title}
                  </h3>

                  {/* Checklist Points with Stagger Animation */}
                  <div className="flex flex-col gap-4 sm:gap-5 mb-8">
                    {currentTab.points.map((point, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: idx * 0.1, ease: "easeOut" }}
                        className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-colors"
                      >
                        <div className="p-1 rounded-full bg-gradient-to-r from-[#1fa864]/20 via-[#258d87]/20 to-[#3959a6]/20 border border-[#1fa864]/50 text-[#20d882] flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#20d882]" />
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {currentTab.buttonText && currentTab.buttonLink && (
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block"
                      >
                        <Link
                          to={currentTab.buttonLink}
                          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white uppercase font-bold tracking-wider px-6 sm:px-8 py-3.5 text-xs sm:text-sm rounded-lg relative overflow-hidden group w-max shadow-[0_0_24px_rgba(31,168,100,0.35)] hover:opacity-95 transition-all"
                        >
                          <span>{currentTab.buttonText}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Right Visual Image */}
                <div className="flex justify-center items-center p-6 sm:p-10 min-h-[300px] md:min-h-[440px] bg-[#05070e] relative overflow-hidden">
                  <div
                    className="h-full w-full flex items-center justify-center rounded-xl bg-no-repeat bg-cover bg-center relative p-6"
                    style={{ backgroundImage: `url(${homeBack})` }}
                  >
                    <motion.img
                      key={currentTab.key}
                      src={currentTab.imgSrc}
                      alt={currentTab.title}
                      width={500}
                      height={500}
                      loading="eager"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.05 }}
                      className="mx-auto h-auto max-h-[320px] w-auto max-w-[85%] object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.7)] transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
