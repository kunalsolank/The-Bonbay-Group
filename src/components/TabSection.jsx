import { useState } from "react";
import LivePricingTable from "./LivePricingTable";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import stocksHome from "../assets/tbg/stocks-home.svg";
import indicesHome from "../assets/tbg/indices-home.svg";
import commodityHome from "../assets/tbg/commodity-home.svg";
import forexHome from "../assets/tbg/forex-home.svg";
import homeBack from "../assets/tbg/home-back.svg";

const tabs = [
  {
    key: "forex",
    label: "Forex",
    subtitle: "[ Forex ]",
    title: "Trade Major, Minor, and Exotic Pairs",
    points: [
      "Trade major, minor, and exotic pairs with ease while staying ahead of market movements and managing your funds effectively.",
      "Enhance your forex strategy with professional indicators, customizable charts, and powerful technical analysis tools.",
    ],
    buttonText: "Trade Forex",
    buttonLink: "/forex",
    tabTitleIcon: "/Tab-Title-Icon.svg",
    imgSrc: forexHome,
  },
  {
    key: "metals",
    label: "Metals",
    subtitle: "[ Metals ]",
    title: "Access Global Precious Metals Markets",
    points: [
      "Access global precious metals markets and trade price movements in gold, silver, and other key assets under competitive and high-speed trading conditions.",
      "Capitalize on volatility, hedge against uncertainty, and diversify your portfolio through cost-efficient metal trading.",
    ],
    buttonText: "Trade Metals",
    buttonLink: "/metals",
    tabTitleIcon: "/Tab-Title-Icon.svg",
    imgSrc: stocksHome,
  },
  {
    key: "indices",
    label: "Indices",
    subtitle: "[ Indices ]",
    title: "Trade Leading Stock Market Indices",
    points: [
      "Trade the world's leading stock market indices with The Bombay Group. Access major markets, capture global opportunities, and diversify your portfolio in a single trade.",
      "Unlock the power of currency and global indices to elevate your trading strategy. Dive into our expert insights and stay ahead in online trading.",
    ],
    buttonText: "Trade Indices",
    buttonLink: "/indices",
    tabTitleIcon: "/Tab-Title-Icon.svg",
    imgSrc: indicesHome,
  },
  {
    key: "commodities",
    label: "Commodities",
    subtitle: "[ Commodities ]",
    title: "High-Demand Energies & Commodity Markets",
    points: [
      "Trade high-demand commodities such as oil, gold, silver, and natural gas across global markets.",
      "Benefit from competitive spreads, fast execution, and flexible leverage designed for active commodity traders.",
    ],
    buttonText: "Trade Commodities",
    buttonLink: "/commodities",
    tabTitleIcon: "/Tab-Title-Icon.svg",
    imgSrc: commodityHome,
  },
];

/* Maps TabSection tab keys → LivePricingTable category strings */
const TAB_TO_CATEGORY = {
  forex: "FOREX",
  metals: "METALS",
  indices: "INDEX CFDS",
  commodities: "COMMODITIES",
};

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("forex");

  const currentTab = tabs.find((tab) => tab.key === activeTab) || tabs[0];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#05040b] text-white">
      <div className="mx-auto px-4 max-w-7xl flex flex-col gap-12 sm:gap-16">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div>
            <span className="text-[#1fa864] uppercase text-xs sm:text-sm tracking-widest font-semibold">
              [ Core Markets ]
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-transparent bg-clip-text bg-linear-to-r from-white to-gray-300 mt-3">
            Trade Global Financial Markets with Unrivaled Conditions
          </h2>
        </div>

        {/* Tabs Navigation Menu */}
        <nav
          className="flex justify-center gap-2 sm:gap-4 border border-[#ffffff1a] p-2 flex-wrap mx-auto max-w-full overflow-x-auto rounded-lg bg-[#0a0f1d]/50"
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
                  ? "border-0 bg-linear-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white shadow-[0_0_24px_rgba(31,168,100,0.35)]"
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
        </nav>

        {/* Selected Tab Content Showcase */}
        <div>
          {currentTab && (
            <article
              id={`panel-${currentTab.key}`}
              role="tabpanel"
              aria-labelledby={`tab-${currentTab.key}`}
              className="grid grid-cols-1 md:grid-cols-2 items-stretch border border-[#ffffff14] rounded-2xl overflow-hidden bg-[#060814]/70 shadow-2xl"
            >
              {/* Left Content Area: Two Points & CTA */}
              <div className="bg-[#070b16] px-6 sm:px-10 md:px-12 lg:px-16 py-10 md:py-14 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#ffffff14] h-full">
                <span className="text-[#1fa864] uppercase text-xs sm:text-sm mb-3 tracking-widest font-semibold">
                  {currentTab.subtitle}
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                  {currentTab.title}
                </h3>

                {/* The Two Points requested */}
                <div className="flex flex-col gap-4 sm:gap-5 mb-8">
                  {currentTab.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div className="p-1 rounded-full bg-[#1fa864]/20 border border-[#1fa864]/40 text-[#1fa864] flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {currentTab.buttonText && currentTab.buttonLink && (
                  <div>
                    <Link
                      to={currentTab.buttonLink}
                      className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white uppercase font-bold tracking-wider px-6 sm:px-8 py-3.5 text-xs sm:text-sm rounded-lg relative overflow-hidden group w-max shadow-[0_0_24px_rgba(31,168,100,0.3)] hover:opacity-95 hover:scale-[1.02] transition-all"
                    >
                      <span>{currentTab.buttonText}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Right Visual Image */}
              <div className="flex justify-center items-center p-6 sm:p-10 min-h-[300px] md:min-h-[440px] bg-[#05070e]">
                <div
                  className="h-full w-full flex items-center justify-center rounded-xl bg-no-repeat bg-cover bg-center relative p-6"
                  style={{ backgroundImage: `url(${homeBack})` }}
                >
                  <img
                    key={currentTab.key}
                    src={currentTab.imgSrc}
                    alt={currentTab.title}
                    width={500}
                    height={500}
                    loading="eager"
                    className="mx-auto h-auto max-h-[320px] w-auto max-w-[85%] object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </article>
          )}
        </div>

      
      

      </div>
    </section>
  );
}
