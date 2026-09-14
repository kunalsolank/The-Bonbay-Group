import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  BarChart3,
  Coins,
  ArrowLeftRight,
  Check,
  ArrowRight,
} from "lucide-react";
import stockImage from "../assets/stock.png";
import indices from "../assets/indices.png";
import forx from "../assets/forex.png";
import comnodities from "../assets/commodities.png";

const tabs = [
  {
    key: "stocks",
    label: "Stocks",
    icon: TrendingUp,
    subtitle: "[ Stocks ]",
    title: "Explore curated investment options vetted by our experts.",
    description:
      "Spend less time organizing and tracking, and more time on core functions for your project Collaborate, manage projects.",
    buttonText: "Get started",
    buttonLink: "/pricing",
    imageSrc: stockImage,
  },

  {
    key: "indices",
    label: "Indices",
    icon: BarChart3,
    subtitle: "[ Indices ]",
    title: "How multi-chain interoperability is shaping the future of crypto.",
    description:
      "Many Web3 platforms are complex and have a steep learning curve, discouraging new users from entering the space.",
    featuresList: [
      "Blockchain acts as the backbone for decentralization.",
      "Self-executing contracts written on a blockchain.",
      "The integration of Web3 with virtual worlds where users.",
    ],
    imageSrc: indices,
  },

  {
    key: "commodities",
    label: "Commodities",
    icon: Coins,
    subtitle: "[ Commodities ]",
    title: "Blockchain security: best practices to keep your assets safe.",
    description:
      "Whether it's an interview, or a meeting with hiring teams, you can give your full attention to the conversation at hand.",
    cards: [
      {
        icon: "https://cdn.prod.website-files.com/67d5482886ed2b38b65e6d7c/67d7aa6dc99c1f4195c7b4a3_Features%20Card%20Icon1.svg",
        title: "Security",
        text: "Reduce costs, scale effortlessly, & make your business come alive.",
      },
      {
        icon: "https://cdn.prod.website-files.com/67d5482886ed2b38b65e6d7c/67d7aa6d93f2cc92ce0db9b0_Features%20Card%20Icon2.svg",
        title: "Ethical Conduct",
        text: "Committing to transparency in operations, transactions.",
      },
    ],
    imageSrc: comnodities,
  },

  {
    key: "forex",
    label: "Forex",
    icon: ArrowLeftRight,
    subtitle: "[ Forex ]",
    title: "How multi-chain interoperability is shaping the future of crypto.",
    description:
      "Many Web3 platforms are complex and have a steep learning curve, discouraging new users from entering the space.",
    featuresList: [
      "Blockchain acts as the backbone for decentralization.",
      "Self-executing contracts written on a blockchain.",
      "The integration of Web3 with virtual worlds where users.",
    ],
    imageSrc: forx,
  },
];

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("stocks");

  const currentTab = tabs.find((tab) => tab.key === activeTab);

  return (
    <section className="py-16 sm:py-20 lg:py-20 xl:py-28 2xl:py-36 bg-black relative overflow-hidden">
      <div className="mx-auto px-4 lg:px-6 max-w-[880px] lg:max-w-[960px] xl:max-w-[1160px] 2xl:max-w-337.5 flex flex-col gap-8 lg:gap-9 xl:gap-10 relative z-10">
        {/* =========================================
            SECTION TITLE
        ========================================== */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-10 xl:mb-12 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto">
          <div>
            <span className="inline-block text-[#20a46a] uppercase text-xs sm:text-sm font-semibold tracking-wider">
              [ Core features ]
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 mt-3 tracking-tight">
            Powerful new features for solving challenges.
          </h2>
        </div>

        {/* =========================================
            TABS MENU (SLIDING PILL)
        ========================================== */}
        <div className="relative mx-auto w-max max-w-full mb-8 sm:mb-10 lg:mb-10 xl:mb-12">
          <nav
            className="relative flex justify-center gap-1.5 sm:gap-2 lg:gap-2 xl:gap-2.5 border border-white/10 p-1.5 flex-wrap rounded-xl backdrop-blur-xl bg-[#07060f]/90 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-x-auto sm:overflow-visible"
            role="tablist"
            aria-label="Core Features Tabs"
          >
            {tabs.map(({ key, label, icon: TabIcon }) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${key}`}
                  id={`tab-${key}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(key)}
                  className={`relative px-4 sm:px-5 lg:px-5 xl:px-6 py-2.5 sm:py-2.5 lg:py-2.5 xl:py-3 text-sm sm:text-base lg:text-sm xl:text-base font-medium Secondary-font transition-colors duration-300 whitespace-nowrap flex-shrink-0 flex items-center justify-center cursor-pointer rounded-lg ${
                    isActive ? "text-white" : "text-neutral-400"
                  }`}
                >
                  {/* Active Sliding Pill Background */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] shadow-lg shadow-emerald-900/40" />
                  )}

                  <span className="relative z-10 flex items-center">
                    {TabIcon && (
                      <TabIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 mr-2 sm:mr-2.5 flex-shrink-0" />
                    )}
                    {label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* =========================================
            TAB CONTENT (GLASSMORPHIC FRAME)
        ========================================== */}
        <div className="relative group/maincard">
          {/* Ambient Backlight Glow behind Main Card */}
          <div className="pointer-events-none absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#1fa864]/20 via-[#258d87]/25 to-[#3959a6]/20 blur-2xl opacity-60" />

          {/* Top Soft Radiant Bloom */}
          <div className="pointer-events-none absolute -top-8 lg:-top-8 xl:-top-10 left-1/2 -translate-x-1/2 h-24 w-64 lg:h-28 lg:w-72 xl:h-32 xl:w-80 rounded-full bg-gradient-to-t from-[#20a46a]/30 via-[#258d87]/20 to-transparent blur-3xl opacity-75" />

          {/* Main Card Frame */}
          <div className="relative rounded-2xl border border-white/10 bg-[#07060f]/95 backdrop-blur-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden">
            {/* Top-edge subtle shimmer gradient line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#20a46a]/50 to-transparent z-20" />

            {currentTab && (
                <article
                  id={`panel-${currentTab.key}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${currentTab.key}`}
                  className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[480px] lg:min-h-[440px] xl:min-h-[520px] 2xl:min-h-[600px]"
                >
                {/* =====================================
                    LEFT CONTENT
                ====================================== */}
                <div className="px-6 sm:px-8 lg:px-8 xl:px-12 2xl:px-16 py-8 lg:py-8 xl:py-10 2xl:py-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 h-full relative z-10">
                  {/* Subtitle */}
                  <span className="text-[#20a46a] uppercase text-xs sm:text-sm font-semibold mb-3 tracking-wider">
                    {currentTab.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-[42px] leading-tight sm:leading-[1.2] font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 mb-4 md:mb-5 Secondary-font">
                    {currentTab.title}
                  </h3>

                  {/* Description */}
                  {currentTab.description && (
                    <p className="text-neutral-400 text-base sm:text-lg lg:text-sm xl:text-base leading-relaxed mb-6 font-normal">
                      {currentTab.description}
                    </p>
                  )}

                  {/* =================================
                      BUTTON
                  ================================== */}
                  {currentTab.buttonText && currentTab.buttonLink && (
                    <Link
                      to={currentTab.buttonLink}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white uppercase text-xs sm:text-sm font-semibold tracking-wider px-6 lg:px-6 xl:px-7 py-3 lg:py-3 xl:py-3.5 rounded-lg shadow-lg shadow-emerald-900/30 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-max group"
                    >
                      <span>{currentTab.buttonText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  )}

                  {/* =================================
                      FEATURES LIST
                  ================================== */}
                  {currentTab.featuresList && (
                    <ul className="flex flex-col gap-3 sm:gap-3.5 lg:gap-3 xl:gap-3.5 mt-2">
                      {currentTab.featuresList.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3.5 text-neutral-300 text-sm sm:text-base lg:text-sm xl:text-base leading-snug"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#1fa864]/15 border border-[#1fa864]/30 text-[#20a46a] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* =================================
                      SECURITY CARDS (COMMODITIES)
                  ================================== */}
                  {currentTab.cards && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-3 xl:gap-4 mt-2">
                      {currentTab.cards.map(({ icon, title, text }, i) => (
                        <div
                          key={i}
                          className="group/card p-4 lg:p-3.5 xl:p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#1fa864]/30 transition-all duration-300"
                        >
                          <div className="w-10 h-10 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover/card:scale-105 group-hover/card:border-[#1fa864]/40 transition-all duration-300">
                            <img
                              src={icon}
                              alt={title}
                              width="22"
                              height="22"
                              className="object-contain"
                            />
                          </div>

                          <h4 className="text-base sm:text-lg lg:text-base xl:text-lg text-white font-medium mb-1.5">
                            {title}
                          </h4>

                          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* =====================================
                    RIGHT IMAGE
                ====================================== */}
                <div className="flex justify-center p-4 sm:p-5 h-64 sm:h-72 md:h-full">
                  <div className="relative bg-[url(/Tab-Section-Bg-Image.webp)] bg-no-repeat bg-cover h-full w-full flex items-center justify-center rounded-b-md md:rounded-r-md md:rounded-bl-none overflow-hidden">
                    <img
                      src={currentTab.imageSrc}
                      alt={currentTab.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
                </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}