"use client";
import { useState } from "react";
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
    title: "How multi-chain interoperability is shaping the future of crypto.",
    description:
      "Many Web3 platforms are complex and have a steep learning curve, discouraging new users from entering the space.",
    featuresList: [
      "Blockchain acts as the backbone for decentralization.",
      "Self-executing contracts written on a blockchain.",
      "The integration of Web3 with virtual worlds where users.",
    ],
    tabTitleIcon: "/Tab-Title-Icon.svg",
    imgSrc: forexHome,
  },
  {
    key: "indices",
    label: "Indices",
    subtitle: "[ Indices ]",
    title: "How multi-chain interoperability is shaping the future of crypto.",
    description:
      "Many Web3 platforms are complex and have a steep learning curve, discouraging new users from entering the space.",
    featuresList: [
      "Blockchain acts as the backbone for decentralization.",
      "Self-executing contracts written on a blockchain.",
      "The integration of Web3 with virtual worlds where users.",
    ],
    tabTitleIcon: "/Tab-Title-Icon.svg",
    imgSrc: indicesHome,
  },
  {
    key: "commodities",
    label: "Commodities",
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
    tabTitleIcon: "/Tab-Title-Icon.svg",
    imgSrc: commodityHome,
  },
 

   {
    key: "stocks",
    label: "Stocks",
    subtitle: "[ Stocks ]",
    title: "Explore curated investment options vetted by our experts.",
    description:
      "Spend less time organizing and tracking, and more time on core functions for your project Collaborate, manage projects.",
    buttonText: "Get started",
    buttonLink: "/pricing",
    tabTitleIcon: "/Tab-Title-Icon.svg",
    imgSrc: stocksHome,
  },
];

export default function TabSection() {
  const [activeTab, setActiveTab] = useState("forex");

  const currentTab = tabs.find((tab) => tab.key === activeTab);

  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-black">
      <div className="mx-auto px-4 max-w-[1350px] flex flex-col gap-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
          <div>
            <span className="text-[#1fa864] uppercase text-sm tracking-wide">
              [ Core features ]
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mt-3">
            Powerful new features for solving challenges.
          </h2>
        </div>

        {/* Tabs Menu */}
        <nav
          className="flex justify-center gap-2 sm:gap-4 border border-[#ffffff1a] p-2 mb-8 sm:mb-12 flex-wrap mx-auto max-w-full overflow-x-auto sm:overflow-visible"
          role="tablist"
          aria-label="Core Features Tabs"
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
              className={`px-3 sm:px-6 py-3 text-sm sm:text-base leading-5 font-medium Secondary-font transition whitespace-nowrap flex-shrink-0 ${activeTab === key
                ? "border-0 bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white shadow-[0_0_24px_rgba(31,168,100,0.35)]"
                : "bg-transparent text-white border border-[#ffffff1a]"
                }`}
            >
              <img
                src={tabTitleIcon}
                alt="Tab Title Icon"
                width={18}
                height={18}
                loading="lazy"
                className="inline-block mr-2 sm:mr-3"
              />
              {label}
            </button>
          ))}
        </nav>

        {/* Tabs Content */}
        <div>
          {currentTab && (
            <article
              id={`panel-${currentTab.key}`}
              role="tabpanel"
              aria-labelledby={`tab-${currentTab.key}`}
              className="grid grid-cols-1 md:grid-cols-2 items-stretch border border-[#ffffff14] h-auto md:h-[622px]"
            >
              {/* Left Typography area */}
              <div className="bg-[#06050f] px-6 sm:px-10 md:px-14 lg:px-[60px] py-8 md:py-0 flex flex-col justify-center rounded-t-md md:rounded-l-md md:rounded-tr-none min-h-[350px] border-b md:border-b-0 md:border-r border-[#ffffff14] h-full">
                <span className="text-[#1fa864] uppercase text-sm mb-3 tracking-wide">
                  {currentTab.subtitle}
                </span>
                <h3 className="text-[28px] sm:text-[36px] md:text-[44px] leading-[36px] sm:leading-[44px] md:leading-[54px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 md:mb-5 Secondary-font">
                  {currentTab.title}
                </h3>
                {currentTab.description && (
                  <p className="text-[#BEBEC1] text-base sm:text-lg leading-relaxed mb-4 md:mb-5">
                    {currentTab.description}
                  </p>
                )}

                {/* Button if exists */}
                {currentTab.buttonText && currentTab.buttonLink && (
                  <a
                    href={currentTab.buttonLink}
                    className="inline-block bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white uppercase font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-md relative overflow-hidden group w-max shadow-[0_0_24px_rgba(31,168,100,0.3)]"
                  >
                    <span className="relative z-10">
                      {currentTab.buttonText}
                    </span>
                  </a>
                )}

                {/* Features List if available */}
                {currentTab.featuresList && (
                  <ul className="flex flex-col gap-3 sm:gap-4 mt-4">
                    {currentTab.featuresList.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-400 text-base sm:text-lg"
                      >
                        <svg
                          className="w-5 h-5 text-[#EED85F] flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Security cards */}
                {currentTab.cards && (
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
                    {currentTab.cards.map(({ icon, title, text }, i) => (
                      <div key={i} className="flex flex-col gap-3 sm:gap-5">
                        <img
                          src={icon}
                          alt={title}
                          width={36}
                          height={36}
                          loading="lazy"
                          className="flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[34px] text-white font-normal Secondary-font mb-2 sm:mb-[7px]">
                            {title}
                          </h4>
                          <p className="text-[#BEBEC1] text-sm sm:text-base">
                            {text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right img */}
              <div className="flex justify-center p-4 sm:p-5 h-64 sm:h-80 md:h-full">
                <div
                  className="h-full w-full flex items-center justify-center rounded-b-md md:rounded-r-md md:rounded-bl-none bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${homeBack})` }}
                >
                  <img
                    key={currentTab.key}
                    src={currentTab.imgSrc}
                    alt={currentTab.title}
                    width={700}
                    height={700}
                    loading="lazy"
                    decoding="async"
                    className="mx-auto h-auto w-[72%] max-w-[420px] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)]"
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
