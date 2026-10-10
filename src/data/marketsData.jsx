/**
 * marketsData.js
 *
 * Central data store for all market pages.
 * Each key maps to a route slug and exports a complete data object
 * that is passed directly into <MarketPageTemplate>.
 *
 * Supported markets: forex | metals | commodities | indices | stocks
 */

// ─────────────────────────────────────────────
// Shared helpers
// ─────────────────────────────────────────────
const REGISTER_LINK = "https://portal.dollrexcapital.com/register-new/";

const defaultSteps = [
  {
    number: 1,
    title: "REGISTER",
    description: "Open a live account and start trading in just minutes.",
    delay: 0,
  },
  {
    number: 2,
    title: "FUND",
    description: "Fund your account using a wide range of funding methods.",
    delay: 300,
  },
  {
    number: 3,
    title: "TRADE",
    description: "Access 1000+ instruments across all asset classes",
    delay: 600,
  },
];

const defaultCompanyLogos = [
  "/company-logo1.svg",
  "/company-logo2.svg",
  "/company-logo3.svg",
  "/company-logo4.svg",
  "/company-logo5.svg",
];

const defaultCompliance = [
  {
    icon: "/compliance-icon1.svg",
    title: "99.9% Uptime",
    description: "Enterprise-grade trading infrastructure.",
    bgColor: "bg-[#011b20]",
  },
  {
    icon: "/compliance-icon2.svg",
    title: "24/5 Support",
    description: "Dedicated support via chat, email & WhatsApp.",
    bgColor: "bg-[#200401]",
  },
  {
    icon: "/compliance-icon3.svg",
    title: "Risk Controls",
    description: "Built-in SL/TP, margin alerts & balance protection.",
    bgColor: "bg-[#012003]",
  },
  {
    icon: "/compliance-icon4.svg",
    title: "Compliance",
    description: "Fully regulated, transparent, and client-first.",
    bgColor: "bg-[#201601]",
  },
];

// ─────────────────────────────────────────────
// Power / FAQ items (reusable SVG icons)
// ─────────────────────────────────────────────
const makePowerItems = (items) => items;

const chartSvg = (
  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8333 17.5V9.16667H17.5V17.5H10.8333ZM2.5 10.8333V2.5H9.16667V10.8333H2.5ZM7.5 9.16667V4.16667H4.16667V9.16667H7.5ZM2.5 17.5V12.5H9.16667V17.5H2.5ZM4.16667 15.8333H7.5V14.1667H4.16667V15.8333ZM12.5 15.8333H15.8333V10.8333H12.5V15.8333ZM10.8333 2.5H17.5V7.5H10.8333V2.5ZM12.5 4.16667V5.83333H15.8333V4.16667H12.5Z" fill="currentColor"/>
  </svg>
);

const shieldSvg = (
  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 1.6665L16.6667 4.1665V9.1665C16.6667 13.0748 13.7917 16.7248 10 17.9165C6.20833 16.7248 3.33333 13.0748 3.33333 9.1665V4.1665L10 1.6665ZM10 3.4415L5 5.3748V9.1665C5 12.1748 7.1 14.9748 10 16.0915C12.9 14.9748 15 12.1748 15 9.1665V5.3748L10 3.4415ZM13.0917 7.2415L13.9167 8.0748L8.75 13.2498L6.08333 10.5748L6.9 9.7498L8.75 11.5998L13.0917 7.2415Z" fill="currentColor"/>
  </svg>
);

const speedSvg = (
  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 1.6665C14.6025 1.6665 18.3333 5.3974 18.3333 9.9999C18.3333 14.6024 14.6025 18.3332 10 18.3332C5.3975 18.3332 1.66667 14.6024 1.66667 9.9999C1.66667 5.3974 5.3975 1.6665 10 1.6665ZM10 3.3332C6.31833 3.3332 3.33333 6.3182 3.33333 9.9999C3.33333 13.6815 6.31833 16.6665 10 16.6665C13.6817 16.6665 16.6667 13.6815 16.6667 9.9999C16.6667 6.3182 13.6817 3.3332 10 3.3332ZM13.0667 6.1757L13.8242 6.9332L11.1783 9.579C11.3633 9.8957 11.4583 10.2574 11.4583 10.6249C11.4583 11.7757 10.5258 12.7082 9.375 12.7082C8.22417 12.7082 7.29167 11.7757 7.29167 10.6249C7.29167 9.474 8.22417 8.5415 9.375 8.5415C9.7425 8.5415 10.1042 8.6365 10.4208 8.8215L13.0667 6.1757Z" fill="currentColor"/>
  </svg>
);

const leverageSvg = (
  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 14.1667H17.5V15.8333H2.5V14.1667ZM3.33333 5.83333H5V12.5H3.33333V5.83333ZM7.08333 4.16667H8.75V12.5H7.08333V4.16667ZM11.25 7.5H12.9167V12.5H11.25V7.5ZM15.4167 2.5H17.0833V12.5H15.4167V2.5Z" fill="currentColor"/>
  </svg>
);

// ═══════════════════════════════════════════════════════
// 1. FOREX
// ═══════════════════════════════════════════════════════
export const forexData = {
  // Hero
  heroTag: "Trade 40+ Currency Pairs | Spreads from 0.0 pips | Up to 1:1000 Leverage",
  heroTitle: "Explore Forex Trading with DollreX Capital Ltd",
  heroDescription:
    "Trade global currencies with tight spreads, advanced tools, and expert guidance designed to boost your success..",
  heroButtonText: "Start Trading Forex",
  heroButtonLink: REGISTER_LINK,
  heroStats: [
    { value: "40+", label: "Currency pairs available" },
    { value: "0-5", label: "Spreads from (pips)" },
    { value: "300", label: "Maximum leverage" },
    { value: "5000", label: "Min Deposit" },
  ],

  // Built / Features
  builtTag: "Why Forex with DollreX",
  builtTitle: "Built for Real Forex Traders",
  builtDescription:
    "Get the conditions, support, and platform performance serious traders need to succeed in global currency markets..",
  builtFeatures: [
    {
      icon: "/icon12.svg",
      title: "Spreads",
      description: "Tight, transparent spreads from as low as 0.0 pips",
      image: "/image12.webp",
    },
    {
      icon: "/icon2.svg",
      title: "Leverage",
      description: "Flexible leverage options up to 1:1000 available on all pairs",
      tools: ["/image2-1.svg", "/image2-2.svg", "/image2-3.svg", "/image2-4.svg", "/image2-5.svg"],
    },
    {
      icon: "/icon3.svg",
      title: "Execution",
      description: "Fast and reliable order execution with minimal slippage.",
      noImage: true,
    },
    {
      icon: "/icon4.svg",
      title: "Support",
      description: "Forex-savvy assistance available 24/5 via WhatsApp, live chat & email.",
      noImage: true,
    },
    {
      icon: "/icon5.svg",
      title: "Fast Execution",
      description: "Market orders filled in milliseconds with no requotes.",
      image: "/image3.webp",
    },
  ],
  builtCompliance: defaultCompliance,

  // Edge / Streamline
  marketType: "forex",
  edgeSubtitle: "Forex Trading Edge",
  edgeTitle: "Your Forex Edge Starts Here",
  edgeDescription:
    "Whether you're scalping majors or swing trading minors, our technology and terms help you trade on your terms.",

  // Global Trading Section
  globalBadge: "The World's Largest Market",
  globalTitle: "The World's Most Traded Market",
  globalDescription: [
    "Forex trading — also known as foreign exchange or FX — is the global marketplace for exchanging national currencies. It operates 24 hours a day, five days a week, across major financial hubs like London, New York, Tokyo, and Dubai. With daily volume exceeding $6 trillion, the forex market offers unmatched liquidity and volatility, making it ideal for traders of all experience levels.",
    "At DollreX Capital Ltd, we provide access to over 40 currency pairs including majors, minors, and exotics. With deep liquidity, tight spreads, and leverage up to 1:1000, our clients can capitalise on short- and long-term price movements. Whether you're trading the USD/JPY or EUR/USD, our MT5 platform delivers the precision and power needed to execute confidently.",
    "Combine that with dedicated regional support, fast withdrawals, and a trader-first environment — and you'll see why more forex traders choose DollreX Capital Ltd.",
  ],
  globalImage: new URL("../assets/fx-chart.webp", import.meta.url).href,
  globalImageAlt: "Flexible Leverage - DollreX Capital",
  globalHighlights: [
    { value: "$6T+", label: "Daily FX Volume" },
    { value: "40+", label: "Currency Pairs" },
    { value: "1:1000", label: "Max Leverage" },
    { value: "24/5", label: "Market Hours" },
  ],
  globalCtaText: "Start Trading Forex",
  globalCtaLink: "https://portal.dollrexcapital.com/register-new/",
  globalReverse: false,


  // Steps
  stepsHeading: "Get Started in Four Simple Steps",
  steps: [
    {
    number: 1,
    title: "Create Your Account",
    description: "Sign up securely in minutes using your email or mobile number.",
    delay: 0,
  },
  {
    number: 2,
    title: "Verify Your Identity",
    description: "Upload your KYC documents and get verified fast by our compliance team..",
    delay: 300,
  },
  {
    number: 3,
    title: "Fund Your Wallet",
    description: "Choose from USDT, bank wire, or cash deposit — funding made local and easy.",
    delay: 600,
  },
  {
    number: 4,
    title: "Start Trading Forex",
    description: "Log in to MT5 and access the full currency market — anytime, anywhere.",
    delay: 900,
  },
  ],
  stepsButtonText: "Open Forex Account",
  stepsButtonLink: REGISTER_LINK,

  // About
  aboutTag: "Trusted by 13K+ Forex traders worldwide.",
  aboutHeading: "Your Edge in the World's Largest Financial Market.",
  aboutDescription:
    "DollreX Capital Ltd gives you institutional-grade Forex access with competitive conditions, 24/5 support, and a secure trading environment.",
  aboutStat1Value: "40+",
  aboutStat1Label: "Currency pairs",
  aboutStat2Value: "13K+",
  aboutStat2Label: "Active Forex traders",
  aboutButtonText: "Learn About Us",
  aboutButtonLink: "/about",
  aboutCompanyLogos: defaultCompanyLogos,

  // FAQ / Power
  faqTag: "Forex Features",
  faqTitle: "Unlock the Full Power of Forex Trading",
  faqDescription:
    "Utilize our highly regarded Forex features — designed to help you trade smarter, faster, and with confidence.",
  faqFeatures: [
    "Trade 40+ major, minor, and exotic currency pairs",
    "Ultra-low spreads from 0.0 pips on major pairs",
    "Up to 1:1000 leverage with built-in risk protection",
    "24/5 dedicated Forex support via WhatsApp, live chat & email",
  ],
  faqPowerItems: makePowerItems([
    {
      title: "Real-Time Forex Charts",
      text: "Access advanced charting with 50+ built-in indicators, multiple timeframes, and real-time price feeds — all inside MT5.",
      svg: chartSvg,
    },
    {
      title: "Negative Balance Protection",
      text: "Your losses can never exceed your deposit. Our automatic negative balance protection keeps you safe during extreme volatility.",
      svg: shieldSvg,
    },
    {
      title: "Lightning-Fast Execution",
      text: "Orders are executed in milliseconds with no requotes and minimal slippage — even during peak market hours.",
      svg: speedSvg,
    },
    {
      title: "Flexible Leverage Options",
      text: "Choose leverage that suits your strategy — from conservative 1:10 all the way to 1:1000 for experienced traders.",
      svg: leverageSvg,
    },
  ]),
  faqButtonText: "Open Forex Account",
  faqButtonLink: REGISTER_LINK,
 faqs: [
  {
    question: "What is Forex trading?",
    answer:
      "Forex trading means buying and selling currencies in pairs, like EUR/USD, to make a profit from price changes. It’s the world’s biggest market, open 24/5.",
  },
  {
    question: "How do I start trading Forex?",
    answer:
      "With DollreX Capital Ltd, you just have to sign up, verify your identity, fund your account, and log in to MT5. You’ll be ready to trade in minutes with full access to currency markets.",
  },
  {
    question: "What is the minimum deposit required?",
    answer:
      "DollreX Capital Ltd offers flexible funding options, and minimum deposit amounts may vary. You can start with what suits your trading goals and preferred plan.",
  },
  {
    question: "What’s the maximum leverage I can use?",
    answer:
      "You can trade with leverage up to 1:1000, giving you greater market exposure. Use it wisely to manage risk while boosting your trading potential.",
  },
  {
    question: "What currency pairs can I trade with DollreX Capital Ltd?",
    answer:
      "DollreX Capital Ltd offer over 40 pairs including majors like EUR/USD, minors, and exotic pairs. You’ll find a wide range of options to match your strategy.",
  },
  {
    question: "What trading platform does DollreX Capital Ltd use?",
    answer:
      "DollreX Capital Ltd support MetaTrader 5 (MT5), a powerful and fast platform known for its advanced tools, smart charts, and access on web, desktop, or mobile.",
  },
  {
    question: "Are spreads really from 0.0 pips?",
    answer:
      "Yes! We offer ultra-low spreads starting at 0.0 pips on major pairs. This helps lower your trading costs and maximize your potential profits.",
  },
  {
    question: "How fast is the order execution at DollreX Capital Ltd?",
    answer:
      "We provide lightning-fast execution with minimal slippage and no requotes—even during high market activity—so you never miss an opportunity.",
  },
  {
    question: "Is my money safe with DollreX Capital Ltd?",
    answer:
      "Absolutely. Your funds are stored securely, and we follow strict compliance protocols to protect your trading account and personal data.",
  },
  {
    question: "Can I get help if I have questions while trading?",
    answer:
      "Yes, our support team is available 24/5 via WhatsApp, live chat, and email. We’re here to assist you with everything from platform help to account queries.",
  },
],
};

// ═══════════════════════════════════════════════════════
// 2. METALS
// ═══════════════════════════════════════════════════════
export const metalsData = {
  // Hero
  heroTag: "Trade Gold, Silver & Platinum | Tight Spreads | Up to 1:500 Leverage",
  heroTitle: "Trade Precious Metals with Precision",
  heroDescription:
    "Gain exposure to Gold, Silver, Platinum, and Palladium with institutional spreads and reliable execution on MT5.",
  heroButtonText: "Start Trading Metals",
  heroButtonLink: REGISTER_LINK,
  heroStats: [
    { value: "4+", label: "Precious metals" },
    { value: "GOLD-8-14", label: "Spreads from (pips)" },
    { value: "300", label: "Maximum leverage" },
    { value: "5000", label: "MIN Deposit" },
  ],

  // Built / Features
  builtTag: "Why Metals with DollreX",
  builtTitle: "Built for Precious Metal Traders, Tuned for Stability.",
  builtDescription:
    "Hedge your portfolio, preserve wealth, or seize volatility — trade metals with tight spreads and dependable infrastructure.",
  builtFeatures: [
    {
      icon: "/icon12.svg",
      title: "Tight Metal Spreads",
      description: "Trade XAUUSD (Gold) from as low as 0.1 pips — keeping your trading costs minimal.",
      image: "/image12.webp",
    },
    {
      icon: "/icon2.svg",
      title: "Multi-Asset Metals",
      description: "Access Gold, Silver, Platinum, and Palladium — all from one account.",
      tools: ["/image2-1.svg", "/image2-2.svg", "/image2-3.svg", "/image2-4.svg", "/image2-5.svg"],
    },
    {
      icon: "/icon3.svg",
      title: "Portfolio Hedging",
      description: "Use precious metals to hedge against currency risk and market downturns.",
      noImage: true,
    },
    {
      icon: "/icon4.svg",
      title: "High Leverage",
      description: "Up to 1:500 leverage on metals — amplify your exposure with controlled risk.",
      noImage: true,
    },
    {
      icon: "/icon5.svg",
      title: "Real-Time Prices",
      description: "Live metal prices streamed directly to your MT5 with zero latency.",
      image: "/image3.webp",
    },
  ],
  builtCompliance: defaultCompliance,
 
  // Edge
  marketType: "metals",
  edgeSubtitle: "Precious Metals Edge",
  edgeTitle: "Most Traded Precious Metals",
  edgeDescription:
    "Precious metals have stood the test of time as safe-haven assets and industrial cornerstones. Explore our most liquid metals traded worldwide.",

  // Steps
  stepsHeading: "Start Trading Metals in 3 Simple Steps",
  steps: defaultSteps,
  stepsButtonText: "Open Metals Account",
  stepsButtonLink: REGISTER_LINK,

  // About
  aboutTag: "Trusted by 13K+ traders globally.",
  aboutHeading: "Preserve Wealth. Seize Opportunity. Trade Precious Metals.",
  aboutDescription:
    "DollreX Capital Ltd provides direct access to precious metals markets with institutional pricing, powerful risk tools, and 24/5 support.",
  aboutStat1Value: "4+",
  aboutStat1Label: "Precious metals",
  aboutStat2Value: "13K+",
  aboutStat2Label: "Active global traders",
  aboutButtonText: "Learn About Us",
  aboutButtonLink: "/about",
  aboutCompanyLogos: defaultCompanyLogos,
  globalBadge: "Safe Haven Assets",
  globalTitle: "Trade Precious Metals with Confidence",
  globalDescription: [
    "Precious metals trading — including gold, silver, platinum, and palladium — offers traders a time-tested hedge against inflation, economic uncertainty, and currency fluctuations. Known for their intrinsic value and safe-haven status, metals remain a cornerstone of global financial portfolios.",
    "At DollreX Capital Ltd, we provide access to spot precious metals with competitive pricing, deep liquidity, and flexible leverage options. Whether you are trading Gold (XAU/USD) or Silver (XAG/USD), our advanced MT5 platform delivers lightning-fast execution and powerful tools to help you capitalize on market movements.",
    "Combine that with dedicated regional support, secure transactions, and a trader-first environment — and you'll see why more commodities traders choose DollreX Capital Ltd.",
  ],
  globalImage: new URL("../assets/mt-chart.webp", import.meta.url).href,
  globalImageAlt: "Precious Metals Trading - DollreX Capital",
  globalHighlights: [
    { value: "Gold & Silver", label: "Core Metals" },
    { value: "0 Spread", label: "Competitive Pricing" },
    { value: "1:500", label: "Max Leverage" },
    { value: "24/5", label: "Market Hours" },
  ],
  globalCtaText: "Start Trading Metals",
  globalCtaLink: "https://portal.dollrexcapital.com/register-new/",
  globalReverse: true,

  // FAQ / Power
  faqTag: "Metals Features",
  faqTitle: "Unlock the Full Power of Precious Metals Trading",
  faqDescription:
    "Trade Gold, Silver, Platinum, and Palladium with the tools, conditions, and support that serious traders demand.",
  faqFeatures: [
    "Trade Gold (XAUUSD) with spreads from just 0.1 pips",
    "Access Silver, Platinum & Palladium from one account",
    "Up to 1:500 leverage on all metals instruments",
    "Real-time prices and one-click execution on MT5",
  ],
  faqPowerItems: makePowerItems([
    {
      title: "Live Gold & Silver Charts",
      text: "Advanced MT5 charting with real-time precious metals price feeds, 50+ indicators, and multi-timeframe analysis.",
      svg: chartSvg,
    },
    {
      title: "Negative Balance Protection",
      text: "Trade metals safely — your losses are capped at your deposit, even during sudden price spikes.",
      svg: shieldSvg,
    },
    {
      title: "Instant Order Execution",
      text: "Execute metals trades in milliseconds with near-zero latency — never miss a price move again.",
      svg: speedSvg,
    },
    {
      title: "Flexible Leverage on Metals",
      text: "Choose from 1:10 to 1:500 leverage to match your risk profile and trading strategy on every metals instrument.",
      svg: leverageSvg,
    },
  ]),
  faqButtonText: "Open Metals Account",
  faqButtonLink: REGISTER_LINK,
  faqs: [
    {
      question: "What precious metals can I trade?",
      answer:
        "You can trade Gold (XAU/USD), Silver (XAG/USD), Platinum, and Palladium. All instruments are available from a single DollreX Capital Ltd. account on the MT5 platform.",
    },
    {
      question: "What are the spreads on Gold (XAU/USD)?",
      answer:
        "Gold spreads start from as low as 0.1 pips. We offer transparent, competitive pricing across all precious metals with no hidden fees.",
    },
    {
      question: "How much leverage is available on metals?",
      answer:
        "We offer leverage up to 1:500 on precious metals instruments. You can adjust your leverage to match your risk tolerance and trading strategy.",
    },
    {
      question: "Why do traders use precious metals?",
      answer:
        "Precious metals like gold and silver are widely used as safe-haven assets, hedges against inflation, and diversification tools. They tend to hold or increase in value during economic uncertainty.",
    },
    {
      question: "Can I use metals trading to hedge my portfolio?",
      answer:
        "Yes. Metals are a classic hedging instrument. Many traders use Gold and Silver positions to offset risk in their forex or equity portfolios during volatile market conditions.",
    },
    {
      question: "Are real-time prices available on MT5?",
      answer:
        "Yes. Live precious metals prices are streamed directly to your MT5 platform with zero latency, giving you accurate, real-time data for every trade.",
    },
    {
      question: "Is negative balance protection available?",
      answer:
        "Yes. Your losses are always capped at your deposit. Our negative balance protection ensures you can never owe more than what you have funded in your account.",
    },
    {
      question: "What hours can I trade precious metals?",
      answer:
        "Precious metals markets are available 24 hours a day, 5 days a week. This lets you react to market news and price movements at any time during the trading week.",
    },
  ],
};

// ═══════════════════════════════════════════════════════
// 3. COMMODITIES
// ═══════════════════════════════════════════════════════
export const commoditiesData = {
  // Hero
  heroTag: "Trade Oil, Gas & Agriculture | Competitive Spreads | Up to 1:200 Leverage",
  heroTitle: "Trade Global Commodities with Confidence",
  heroDescription:
    "Access energy, agriculture, and raw material markets with tight spreads, deep liquidity, and institutional execution on MT5.",
  heroButtonText: "Start Trading Commodities",
  heroButtonLink: REGISTER_LINK,
  heroStats: [
    { value: "20+", label: "Commodity instruments" },
    { value: "Low", label: "Competitive spreads" },
    { value: "1:200", label: "Maximum leverage" },
    { value: "24/5", label: "Market availability" },
  ],

  // Built / Features
  builtTag: "Why Commodities with DollreX",
  builtTitle: "Built for Commodity Traders, Optimized for Real Markets.",
  builtDescription:
    "Whether you trade crude oil, natural gas, or agricultural products — DollreX gives you the edge with reliable pricing and execution.",
  builtFeatures: [
    {
      icon: "/icon12.svg",
      title: "Energy Markets",
      description: "Trade Crude Oil (WTI & Brent) and Natural Gas with real-time pricing and tight spreads.",
      image: "/image12.webp",
    },
    {
      icon: "/icon2.svg",
      title: "Diverse Commodity Access",
      description: "Oil, gas, wheat, coffee, cotton, cocoa — access 20+ commodities from one platform.",
      tools: ["/image2-1.svg", "/image2-2.svg", "/image2-3.svg", "/image2-4.svg", "/image2-5.svg"],
    },
    {
      icon: "/icon3.svg",
      title: "Diversification Tools",
      description: "Use commodities to diversify your portfolio and hedge against inflation.",
      noImage: true,
    },
    {
      icon: "/icon4.svg",
      title: "Leveraged Trading",
      description: "Up to 1:200 leverage on major commodity CFDs — amplify your market exposure.",
      noImage: true,
    },
    {
      icon: "/icon5.svg",
      title: "MT5 Price Feeds",
      description: "Real-time commodity prices direct to MT5 with zero delay.",
      image: "/image3.webp",
    },
  ],
  builtCompliance: defaultCompliance,
     globalBadge: "The World's Largest Market",
  globalTitle: "What is Commodities Trading?",
  globalDescription: [
    "Commodities trading is the process of buying and selling raw materials or natural resources- like gold, silver, oil, or natural gas, with the aim of making a profit from changes in their prices. These materials are essential to the global economy, and their values are influenced by factors like supply and demand, geopolitical events, weather conditions, and market sentiment.",
    "Think of it like this: just as a shopkeeper buys goods at a lower price and sells them for a higher one, traders do the same with commodities. When the price of gold rises or oil demand increases, traders who bought at lower prices stand to earn profits by selling at the higher rate.",
    "With Dollrex Capital Ltd. getting started in commodity trading is simple and accessible. Whether you’re new to the market or an experienced trader, Dollrex Capital Ltd. provides powerful trading tools, competitive leverage, and a user-friendly platform. You don’t need a big investment to begin - just the right strategy and support, which Dollrex Capital Ltd. is here to offer.",
  ],
  globalImage: new URL("../assets/co-chart.webp", import.meta.url).href,
  // Edge
  marketType: "commodities",
  edgeSubtitle: "Commodities Market",
  edgeTitle: "Most Traded Commodities",
  edgeDescription:
    "Commodities are the backbone of global trade, and some stand out for their high demand and liquidity. Here are a few top-traded assets that attract traders worldwide.",

  // Steps
  stepsHeading: "Steps to Start Commodity Trading with Dollrex Capital Ltd.",
  steps:  [
    {
    number: 1,
    title: "Sign Up Easily",
    description: "Open your free Dollrex Capital Ltd. trading account in just minutes — no paperwork, no hassle.",
    delay: 0,
  },
  {
    number: 2,
    title: "Choose Your Commodity",
    description: "Pick from gold, oil, silver, and more — whatever suits your market outlook.",
    delay: 300,
  },
  {
    number: 3,
    title: "Start Trading Smart",
    description: "Use real-time tools, charts, and analysis to enter or exit trades with confidence.",
    delay: 600,
  },
  {
    number: 4,
    title: "Monitor & Grow",
    description: "Track your trades, adjust your strategy, and grow your skills with expert support.",
    delay: 900,
  },
  ],
  stepsButtonText: "Open Commodities Account",
  stepsButtonLink: REGISTER_LINK,

  // About
  aboutTag: "Trusted by 13K+ traders worldwide.",
  aboutHeading: "From Energy to Agriculture — Trade Every Commodity Market.",
  aboutDescription:
    "DollreX Capital Ltd gives you access to 20+ commodity instruments with institutional-grade pricing, reliable execution, and 24/5 expert support.",
  aboutStat1Value: "20+",
  aboutStat1Label: "Commodity instruments",
  aboutStat2Value: "13K+",
  aboutStat2Label: "Active global traders",
  aboutButtonText: "Learn About Us",
  aboutButtonLink: "/about",
  aboutCompanyLogos: defaultCompanyLogos,

  // FAQ / Power
  faqTag: "Commodities Features",
  faqTitle: "Unlock the Full Power of Commodities Trading",
  faqDescription:
    "Trade energy, agriculture, and raw materials with the conditions and tools that professional commodity traders demand.",
  faqFeatures: [
    "Trade 20+ commodity CFDs including Oil, Gas, Wheat & Coffee",
    "Competitive spreads across all energy and agricultural markets",
    "Up to 1:200 leverage on major commodity instruments",
    "Real-time commodity prices with instant MT5 execution",
  ],
  faqPowerItems: makePowerItems([
    {
      title: "Real-Time Commodity Charts",
      text: "Advanced MT5 charting for all commodity markets — with live price feeds, technical indicators, and multi-timeframe analysis.",
      svg: chartSvg,
    },
    {
      title: "Risk Management Suite",
      text: "Stop-loss, take-profit, and margin alerts built into every commodity trade — protecting your capital at all times.",
      svg: shieldSvg,
    },
    {
      title: "Fast & Reliable Execution",
      text: "Commodity orders executed in milliseconds — no requotes, no delays, even during high-volatility market events.",
      svg: speedSvg,
    },
    {
      title: "Portfolio Diversification",
      text: "Spread your exposure across energy, metals, and agriculture commodities — all managed from a single DollreX account.",
      svg: leverageSvg,
    },
  ]),
  faqButtonText: "Open Commodities Account",
  faqButtonLink: REGISTER_LINK,
  faqs: [
  {
    question: "What are commodities in trading?",
    answer:
      "Commodities are natural or raw materials like gold, oil, silver, and natural gas that are traded in global markets. You can buy or sell them based on price changes to earn profits, just like stocks or currencies.",
  },
  {
    question: "Is commodity trading safe for beginners?",
    answer:
      "Yes, but like all trading, it carries risks. Dollrex Capital Ltd. offers tools, support, and educational resources to help beginners understand the market and trade more confidently.",
  },
  {
    question: "How do I start trading commodities?",
    answer:
      "Just create a free account on Dollrex Capital Ltd., choose your commodity, and begin trading. The platform is beginner-friendly with low barriers to entry and expert support available anytime.",
  },
  {
    question: "What is the minimum amount I need to start trading?",
    answer:
      "Dollrex Capital Ltd. allows you to start with a small deposit. The minimum can vary based on your trading instrument and leverage settings, but it’s designed to be accessible for everyone.",
  },
  {
    question: "Why is gold considered a popular commodity to trade?",
    answer:
      'Gold is seen as a "safe-haven" asset. It often holds value during economic uncertainty, making it a preferred choice for both new and experienced traders.',
  },
  {
    question: "Can I trade commodities 24/7 like forex?",
    answer:
      "Commodity markets have specific trading hours depending on the product and exchange. However, with Dollrex Capital Ltd., you can access many commodities during extended market hours with flexibility.",
  },
  {
    question: "What tools are provided for commodity trading?",
    answer:
      "Dollrex Capital Ltd. offers real-time price charts, technical analysis tools, market news, and risk management features like stop-loss and leverage control to help you trade smarter.",
  },
  {
    question: "Do I need to physically own the commodities I trade?",
    answer:
      "No. With CFDs (Contracts for Difference), you only speculate on the price movement without actually owning the physical asset. It’s faster and more flexible.",
  },
  {
    question: "How risky is commodity trading?",
    answer:
      "Commodity prices can be volatile, meaning they change quickly. While this creates opportunities, it also involves risks. It’s important to use proper risk management strategies, which Dollrex Capital Ltd. helps you learn and apply.",
  },
  {
    question: "Are there any hidden charges or swap fees?",
    answer:
      "Dollrex Capital Ltd. offers 0 Swap* on selected instruments and transparent pricing. All fees are clearly displayed, so you know exactly what you’re paying — no hidden surprises.",
  },
],
};

// ═══════════════════════════════════════════════════════
// 4. INDICES
// ═══════════════════════════════════════════════════════
export const indicesData = {
  // Hero
  heroTag: "Trade Major Global Indices | Low Spreads | Up to 1:200 Leverage",
  heroTitle: "Access Global Indices for Smarter Trading",
  heroDescription:
    "Tap into the power of the world’s most influential stock indices like US Wall Street 30, NASDAQ 100, and Germany’s DAX with Dollrex Capital Ltd.",
  heroButtonText: "Start Trading",
  heroButtonLink: REGISTER_LINK,
  heroStats: [
    { value: "15+", label: "Global indices" },
    { value: "Low", label: "Competitive spreads" },
    { value: "1:200", label: "Maximum leverage" },
    { value: "24/5", label: "Extended market hours" },
  ],

  // Built / Features
  builtTag: "Why Trade Indices with Dollrex Capital Ltd.",
  builtTitle: "Why Trade Indices with Dollrex Capital Ltd.",
  builtDescription:
    "ndices trading gives you a broader view of market performance without focusing on individual stocks. Here’s why it’s worth considering.",
  builtFeatures: [
    {
      icon: "/icon12.svg",
      title: "Instant Market Exposure",
      description: "Gain access to entire markets like tech or industrials through one index..",
      image: "/image12.webp",
    },
    {
      icon: "/icon2.svg",
      title: "Lower Risk than Single Stocks",
      description: "Reduce risk by trading a basket of stocks rather than just one..",
      tools: ["/image2-1.svg", "/image2-2.svg", "/image2-3.svg", "/image2-4.svg", "/image2-5.svg"],
    },
    {
      icon: "/icon3.svg",
      title: "Global Economic Insight",
      description: "Indices reflect economic health, offering strong trading signals.",
      noImage: true,
    },
    {
      icon: "/icon4.svg",
      title: "Flexibility with CFDs",
      description: "Trade both rising and falling markets with contract-based trading.",
      noImage: true,
    },
    {
      icon: "/icon5.svg",
      title: "Live Index Prices",
      description: "Real-time index pricing streamed directly to your MT5 account.",
      image: "/image3.webp",
    },
  ],
  builtCompliance: defaultCompliance,
  
  // Edge
  marketType: "indices",
  edgeSubtitle: "Most Popular Indices",
  edgeTitle: "Most Popular Indices",
  edgeDescription:
    "These indices are among the most actively traded in global markets, representing major economic regions and sectors",

  // Steps
  stepsHeading: "How to Start Trading with Dollrex Capital Ltd.",
  steps: [
    {
    number: 1,
    title: "Create Your Account",
    description: "Sign up with Dollrex Capital Ltd. in minutes—fast, secure, and beginner-friendly.",
    delay: 0,
  },
  {
    number: 2,
    title: "Explore Markets",
    description: "Access global indices, commodities like gold or oil, and more.",
    delay: 300,
  },
  {
    number: 3,
    title: "Use Our Tools",
    description: "Analyze trends and get expert-backed insights with Dollrex Capital Ltd. platform.",
    delay: 600,
  },
  {
    number: 4,
    title: "Start Trading",
    description: "Open your first trade with low entry costs and flexible leverage.",
    delay: 900,
  },
  ],
       globalBadge: "The World's Largest Market",
  globalTitle: "What is Indices trading?",
  globalDescription: [
    "Imagine keeping an eye on an entire group of companies at once, that’s what index trading does. Instead of buying individual stocks, you trade on the performance of a group of stocks bundled together as an index.",
    "For example, the NASDAQ 100 includes top tech companies. If you believe tech stocks will rise, you can trade this index to profit from the overall movement.",
    "Indices trading is popular because it offers diversification, lower risk, and better insight into the market’s direction. With Dollrex Capital Ltd., you get the right tools, real-time data, and a simple platform to start trading—even if you’re new.",
  ],
  globalImage: new URL("../assets/in-chart.webp", import.meta.url).href,
  // About
  aboutTag: "Trusted by 13K+ traders worldwide.",
  aboutHeading: "Diversify Your Trading with the World's Top Stock Indices.",
  aboutDescription:
    "DollreX Capital Ltd offers direct CFD access to 15+ global stock indices with competitive pricing, robust execution, and 24/5 support.",
  aboutStat1Value: "15+",
  aboutStat1Label: "Global indices",
  aboutStat2Value: "13K+",
  aboutStat2Label: "Active global traders",
  aboutButtonText: "Learn About Us",
  aboutButtonLink: "/about",
  aboutCompanyLogos: defaultCompanyLogos,

  // FAQ / Power
  faqTag: "Indices Features",
  faqTitle: "Unlock the Full Power of Global Index Trading",
  faqDescription:
    "Harness the power of broad market movements — trade 15+ global indices with institutional conditions and no stock ownership needed.",
  faqFeatures: [
    "Trade S&P 500, NASDAQ, DAX, FTSE 100, and 10+ other indices",
    "Competitive spreads with no hidden commissions on most indices",
    "Up to 1:200 leverage — go long or short on any index CFD",
    "Real-time index prices with sub-millisecond execution on MT5",
  ],
  faqPowerItems: makePowerItems([
    {
      title: "Live Index Charting",
      text: "Monitor all 15+ global indices with real-time MT5 charts, 50+ indicators, and cross-index comparison tools.",
      svg: chartSvg,
    },
    {
      title: "Negative Balance Protection",
      text: "Your index CFD losses are always capped at your deposit — trade with confidence even in volatile markets.",
      svg: shieldSvg,
    },
    {
      title: "Lightning-Fast Execution",
      text: "Index orders filled instantly with no requotes — capturing precise entry and exit points on every trade.",
      svg: speedSvg,
    },
    {
      title: "Flexible Index Leverage",
      text: "Choose conservative or aggressive leverage from 1:5 to 1:200 — tailored to your indices trading strategy.",
      svg: leverageSvg,
    },
  ]),
  faqButtonText: "Open Indices Account",
  faqButtonLink: REGISTER_LINK,
 faqs: [
  {
    question: "What is indices trading?",
    answer:
      "Indices trading means speculating on the price movement of a group of stocks that make up a stock market index, like the NASDAQ or DAX. You don’t own the stocks—just trade on whether the index will rise or fall.",
  },
  {
    question: "How is indices trading different from stock trading?",
    answer:
      "In stock trading, you buy or sell individual company shares. In indices trading, you trade an entire group of stocks through a single index, which gives broader market exposure and helps reduce single-stock risk.",
  },
  {
    question: "Which indices can I trade?",
    answer:
      "Dollrex Capital Ltd. offers access to major global indices including the US Wall Street 30, NASDAQ 100, Germany’s DAX 40, and UK’s FTSE 100. These indices reflect large economies and sectors, giving you great variety.",
  },
  {
    question: "Do I need a large investment to start?",
    answer:
      "No, you don’t. Dollrex Capital Ltd. allows trading with low entry capital and flexible leverage options. This makes it accessible for beginners and helps experienced traders manage risk efficiently.",
  },
  {
    question: "Can I trade indices 24/5 like forex?",
    answer:
      "Indices trading is available during specific market hours depending on the index. While it’s not 24/5 like forex, Dollrex Capital Ltd. provides extended hours and live market access when indices are most active.",
  },
  {
    question: "Is indices trading suitable for beginners?",
    answer:
      "Yes, indices trading can be a good choice for beginners. It offers broader exposure, lower volatility compared to individual stocks, and is easier to follow through market trends and news.",
  },
  {
    question: "What are the risks in indices trading?",
    answer:
      "Like any form of trading, indices involve risk due to price fluctuations. Markets can react to economic news, political events, and global developments. Always trade with a strategy and risk management in place.",
  },
  {
    question: "Can I trade both rising and falling indices?",
    answer:
      "Yes, with Dollrex Capital Ltd. you can go long (buy) or short (sell) an index. This means you can potentially profit whether the market is moving up or down, depending on your trade direction.",
  },
  {
    question: "Are there any hidden fees or swaps?",
    answer:
      "Dollrex Capital Ltd. is transparent with pricing. Many index trades come with 0 swap and no expiry, allowing you to hold positions without extra overnight charges. Always check contract details for specifics.",
  },
  {
    question: "How do I start trading indices on Dollrex Capital Ltd.?",
    answer:
      "Just create an account, explore available indices, use our advanced tools for analysis, and place your trade. Our platform is designed to support all levels—from first-timers to seasoned traders.",
  },
],
};

// ═══════════════════════════════════════════════════════
// 5. STOCKS
// ═══════════════════════════════════════════════════════
export const stocksData = {
  // Hero
  heroTag: "Trade 250+ Global Stocks | Competitive Spreads | Up to 1:20 Leverage",
  heroTitle: "Stocks Trading - Your Gateway to Growth",
  heroDescription:
    "Explore stock CFDs with top names like Apple, Tesla, and Meta. Start small, diversify fast, and trade with low spreads.",
  heroButtonText: "Start Trading Stocks",
  heroButtonLink: REGISTER_LINK,
  heroStats: [
    { value: "250+", label: "Stock instruments" },
    { value: "Low", label: "Competitive spreads" },
    { value: "1:20", label: "Maximum leverage" },
    { value: "24/5", label: "Platform availability" },
  ],

  // Built / Features
  builtTag: "Why Stocks with DollreX",
  builtTitle: "Why Trade Stocks with Dollrex Capital Ltd.?.",
  builtDescription:
    "Trade shares of Apple, Tesla, Google, Amazon, and 250+ top companies as CFDs — without a brokerage account or stock ownership.",
  builtFeatures: [
    {
      icon: "/icon12.svg",
      title: "Instant Access to Global Brands",
      description: "Trade CFDs on Apple, Microsoft, Tesla, and other market movers without owning actual shares.",
      image: "/image12.webp",
    },
    {
      icon: "/icon2.svg",
      title: "Low-Cost Trading",
      description: "Enjoy tight spreads and no commission fees — what you see is what you pay.",
      tools: ["/image2-1.svg", "/image2-2.svg", "/image2-3.svg", "/image2-4.svg", "/image2-5.svg"],
    },
    {
      icon: "/icon3.svg",
      title: "Profit in Any Market Direction",
      description: "Go long or short depending on how the market moves — capture opportunities both ways.",
      noImage: true,
    },
    {
      icon: "/icon4.svg",
      title: "Flexible Leverage Up to 1:50",
      description: "Get more exposure while keeping risk under control with our advanced risk management tools.",
      noImage: true,
    },
    {
      icon: "/icon5.svg",
      title: "Real-Time Stock Prices",
      description: "Live stock prices directly inside MT5 — no delay, no data lag.",
      image: "/image3.webp",
    },
  ],
  builtCompliance: defaultCompliance,

  // Edge
  marketType: "stocks",
  edgeSubtitle: "Top Global Equities",
  edgeTitle: "Top Traded Stocks in 2025",
  edgeDescription:
    "Here are some of the top stocks attracting traders in 2025, valued for their market strength and growth potential:",

  // Steps
  stepsHeading: "How to Start Trading with Dollrex Capital Ltd.",
  steps: [
    {
    number: 1,
    title: "Create Your Account",
    description: "Register with Dollrex Capital Ltd. in minutes and get access to your trading dashboard.",
    delay: 0,
  },
  {
    number: 2,
    title: "Choose Your Instrument",
    description: "Pick from stocks, commodities, indices, and more, all on one platform.",
    delay: 300,
  },
  {
    number: 3,
    title: "Use Powerful Tools",
    description: "Analyze trends and get real-time data with our advanced charting features.",
    delay: 600,
  },
  {
    number: 4,
    title: "Place Your Trade",
    description: "Buy or sell with just a few clicks. Use leverage wisely and manage your risk smartly.",
    delay: 900,
  },
  ],
  stepsButtonText: "Open Stocks Account",
  stepsButtonLink: REGISTER_LINK,
 // global market component 
  globalBadge: "The World's Largest Market",
  globalTitle: "What is Stocks trading?",
  globalDescription: [
    "Stock trading means buying and selling shares of companies to earn from their price changes. Think of it like this, when you believe a company like Apple or Tesla will grow, you buy its stock to benefit from the rise in price. If the price goes up, you earn a profit. If it falls, you lose.",
    "With Dollrex Capital Ltd. you don’t need to buy full shares. You trade stock CFDs, which means you can invest in popular stocks without owning them. Our platform gives you real-time prices, simple tools, and a low entry point, making it easy for both beginners and pros to start.",
    "Stock trading allows you to participate in the success of well-known companies worldwide. You can choose to go long if you expect prices to rise or go short to profit from falling prices. This flexibility makes stock trading an exciting way to grow your investment portfolio.",
  ],
  globalImage: new URL("../assets/sh-chart.webp", import.meta.url).href,
  // About
  aboutTag: "Trusted by 13K+ traders worldwide.",
  aboutHeading: "Trade the World's Biggest Companies — Without Owning a Share.",
  aboutDescription:
    "DollreX Capital Ltd gives you access to 250+ global stock CFDs with institutional conditions, competitive pricing, and 24/5 expert support.",
  aboutStat1Value: "250+",
  aboutStat1Label: "Stock instruments",
  aboutStat2Value: "13K+",
  aboutStat2Label: "Active global traders",
  aboutButtonText: "Learn About Us",
  aboutButtonLink: "/about",
  aboutCompanyLogos: defaultCompanyLogos,

  // FAQ / Power
  faqTag: "Stocks Features",
  faqTitle: "Unlock the Full Power of Global Stock Trading",
  faqDescription:
    "Trade Apple, Tesla, Amazon, and 250+ global stocks as CFDs — with the tools, pricing, and support that serious traders demand.",
  faqFeatures: [
    "Trade 250+ US, European & Asian stocks as CFDs from one account",
    "Go long or short — profit from both rising and falling stock prices",
    "Up to 1:20 leverage on major stock CFDs for amplified exposure",
    "Real-time stock prices with instant MT5 execution — no delays",
  ],
  faqPowerItems: makePowerItems([
    {
      title: "Real-Time Stock Charts",
      text: "Advanced MT5 stock charting with live price feeds, earnings calendar integration, and 50+ technical indicators.",
      svg: chartSvg,
    },
    {
      title: "Risk Management Tools",
      text: "Built-in stop-loss, take-profit, and negative balance protection on all stock CFD positions — always trade safely.",
      svg: shieldSvg,
    },
    {
      title: "Instant Trade Execution",
      text: "Stock orders executed in milliseconds on MT5 — capturing the exact entry and exit prices you need.",
      svg: speedSvg,
    },
    {
      title: "Flexible Leverage on Stocks",
      text: "Choose from 1:2 to 1:20 leverage based on your risk appetite — available on all 250+ stock CFD instruments.",
      svg: leverageSvg,
    },

    {
      title: "Flexible Leverage on Stocks",
      text: "Choose from 1:2 to 1:20 leverage based on your risk appetite — available on all 250+ stock CFD instruments.",
      svg: leverageSvg,
    },
    
  ]),
  faqButtonText: "Open Stocks Account",
  faqButtonLink: REGISTER_LINK,
 faqs: [
  {
    question: "What is stock trading?",
    answer:
      "Stock trading means buying and selling shares of companies to make profits from price changes. With Dollrex Capital Ltd., you can trade popular stocks without owning the actual shares, using Contracts for Difference (CFDs).",
  },
  {
    question: "How do I start trading stocks with Dollrex Capital Ltd.?",
    answer:
      "Simply create an account, deposit funds, choose the stocks you want to trade, and start using our platform’s tools to buy or sell. It’s designed to be beginner-friendly with real-time prices and easy navigation.",
  },
  {
    question: "Can I trade stocks without buying full shares?",
    answer:
      "Yes! Dollrex Capital Ltd. offers CFD trading, which lets you trade on price movements without owning the actual stocks, making it accessible even with small investment amounts.",
  },
  {
    question: "What are the risks of stock trading?",
    answer:
      "Stock trading involves market risks — prices can rise or fall, and you might lose some or all of your invested capital. Always trade responsibly and use risk management tools.",
  },
  {
    question: "What fees does Dollrex Capital Ltd. charge for stock trading?",
    answer:
      "Dollrex Capital Ltd. embeds trading costs within the spreads, so there are no extra commission fees. This transparent pricing helps you keep track of your expenses easily.",
  },
  {
    question: "Can I trade stocks 24/7 with Dollrex Capital Ltd.?",
    answer:
      "While stock markets have specific opening hours, Dollrex Capital Ltd. offers extended trading hours on many stock CFDs, giving you more opportunities beyond regular market times.",
  },
  {
    question: "What tools does Dollrex Capital Ltd. provide for stock trading?",
    answer:
      "Our platform offers real-time pricing, technical analysis tools, customizable charts, and risk management features to help you make informed trading decisions.",
  },
  {
    question: "Can I trade stocks on my mobile device?",
    answer:
      "Yes! Dollrex Capital Ltd. trading platform is fully accessible on mobile devices, allowing you to trade stocks anytime, anywhere, with ease and security.",
  },
  {
    question: "What is leverage in stock trading?",
    answer:
      "Leverage lets you control a larger position than your deposit, amplifying both potential profits and risks. Dollrex Capital Ltd. offers leverage up to 1:50 with built-in risk management.",
  },
  {
    question: "How can I learn more about stock trading?",
    answer:
      "Dollrex Capital Ltd. provides educational resources, webinars, and customer support to help you understand stock trading better and build your skills over time.",
  },
],
};

const blogs = [
  {
    id: 1,
    title: "Why Gold is the Best Investment and Trading Option in 2024",
    description:
      "Why Gold is the Best Investment and Trading Option in 2024",
    image: "/images/blog/gold.jpg",
    link: "/blog/why-gold-is-the-best-investment",
  },

  {
    id: 2,
    title: "Why Forex Trading Is One of the Best Career Options in 2024",
    description:
      "In recent years, forex trading has steadily risen in popularity, drawing in aspiring traders...",
    image: "/images/blog/forex.jpg",
    link: "/blog/forex-trading-career",
  },

  {
    id: 3,
    title: "A Beginner’s Guide to Trading Silver",
    description:
      "Silver, a precious metal with high industrial demand, offers an exciting opportunity for traders...",
    image: "/images/blog/silver.jpg",
    link: "/blog/beginners-guide-to-silver",
  },
];

// ─────────────────────────────────────────────
// Lookup map — keyed by route slug
// ─────────────────────────────────────────────
export const marketDataMap = {
  forex: forexData,
  metals: metalsData,
  commodities: commoditiesData,
  indices: indicesData,
  stocks: stocksData,
  blogs : blogs
};
