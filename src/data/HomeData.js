import stocksHome from "../assets/tbg/stocks-home.svg";
import indicesHome from "../assets/tbg/indices-home.svg";
import commodityHome from "../assets/tbg/commodity-home.svg";
import forexHome from "../assets/tbg/forex-home.svg";

export const tabs = [
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
