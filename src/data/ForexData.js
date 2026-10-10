import forexImage from "../assets/forexImg.webp";
import {ICONS} from '../lib/icon'
  export const points = [
    {
      title: "Spreads",
      description: "Tight, transparent spreads from as low as 0.0 pips.",
      image: forexImage,
    },
    {
      title: "Leverage",
      description:
        "Flexible leverage options up to 1:1000 available on all pairs.",
      image: forexImage,
    },
    {
      title: "Execution",
      description: "Fast and reliable order execution with minimal slippage.",
      image: forexImage,
    },
    {
      title: "Support",
      description:
        "Forex-savvy assistance available 24/5 via WhatsApp, live chat & email.",
      image: forexImage,
    },
  ];
 export const FeatureListpoints = [
    {
      title: "Ultra-Low Spreads",
      description:
        "Trade with competitive spreads from 0.0 pips on major pairs.",
      image: forexImage,
    },
    {
      title: "High Leverage Access",
      description:
        "Up to 1:1000 leverage available to amplify opportunity responsibly.",
      image: forexImage,
    },
    {
      title: "Reliable Liquidity Flow",
      description:
        "Execute trades without delays or requotes, even during peak volatility.",
      image: forexImage,
    },
    {
      title: "Built-In Risk Controls",
      description:
        "Integrated SL/TP tools, margin alerts, and negative balance protection.",
      image: forexImage,
    },
  ];
  export const forexFAQs = [
    {
      question: "What is Forex trading?",
      answer:
        "Forex trading means buying and selling currencies in pairs, like EUR/USD, to make a profit from price changes. It’s the world’s biggest market, open 24/5. ",
    },
    {
      question: " How do I start trading Forex? ",
      answer:
        "With DollreX Capital Ltd, you just have to sign up, verify your identity, fund your account, and log in to MT5. You’ll be ready to trade in minutes with full access to currency markets.",
    },
    {
      question: " What is the minimum deposit required? ",
      answer:
        "DollreX Capital Ltd offers flexible funding options, and minimum deposit amounts may vary. You can start with what suits your trading goals and preferred plan.",
    },
    {
      question: " What’s the maximum leverage I can use? ",
      answer:
        "You can trade with leverage up to 1:1000, giving you greater market exposure. Use it wisely to manage risk while boosting your trading potential.",
    },
    {
      question: "What currency pairs can I trade with DollreX Capital Ltd ?",
      answer:
        "DollreX Capital Ltd offer over 40 pairs including majors like EUR/USD, minors, and exotic pairs. You’ll find a wide range of options to match your strategy.",
    },
    {
      question: "What trading platform does DollreX Capital Ltd use?",
      answer:
        "DollreX Capital Ltd support MetaTrader 5 (MT5), a powerful and fast platform known for its advanced tools, smart charts, and access on web, desktop, or mobile. ",
    },
    {
      question: " Are spreads really from 0.0 pips? ",
      answer:
        "Yes! We offer ultra-low spreads starting at 0.0 pips on major pairs. This helps lower your trading costs and maximize your potential profits. ",
    },
    {
      question: "How fast is the order execution at DollreX Capital Ltd ?",
      answer:
        " We provide lightning-fast execution with minimal slippage and no requotes—even during high market activity—so you never miss an opportunity. ",
    },
    {
      question: " Is my money safe with DollreX Capital Ltd? ",
      answer:
        " Absolutely. Your funds are stored securely, and we follow strict compliance protocols to protect your trading account and personal data. ",
    },
    {
      question: " Can I get help if I have questions while trading? ",
      answer:
        " Yes, our support team is available 24/5 via WhatsApp, live chat, and email. We’re here to assist you with everything from platform help to account queries. ",
    },
  ];



// ─────────────────────────────────────────────────────────────────────────────
// Market Configurations (Commodities, Indices, Stocks, Metals, Forex)
// ─────────────────────────────────────────────────────────────────────────────

export const MARKET_CONFIGS = {
  commodities: {
    key: "commodities",
    badge: "Commodities Market",
    title: "Most Traded Commodities",
    description:
      "Commodities are the backbone of global trade, and some stand out for their high demand and liquidity. Here are a few top-traded assets that attract traders worldwide.",
    ctaText: "Start Trading Commodities",
    items: [
      {
        icon: ICONS.gold,
        title: "Gold",
        desc: "A timeless safe-haven asset, especially in uncertain times.",
        stat: "XAU/USD",
        statLabel: "Safe-haven asset",
        color: "#e6c76a",
      },
      {
        icon: ICONS.oil,
        title: "Crude Oil",
        desc: "Closely linked with global growth and energy trends.",
        stat: "WTI / BRENT",
        statLabel: "Energy liquid",
        color: "#ef5b6b",
      },
      {
        icon: ICONS.silver,
        title: "Silver",
        desc: "Combines industrial demand with investment appeal.",
        stat: "XAG/USD",
        statLabel: "Industrial metal",
        color: "#9399ad",
      },
      {
        icon: ICONS.gas,
        title: "Natural Gas",
        desc: "High in volatility, ideal for active traders.",
        stat: "NATGAS",
        statLabel: "High volatility",
        color: "#258d87",
      },
    ],
  },

  indices: {
    key: "indices",
    badge: "Most Popular Indices",
    title: "Most Popular Indices",
    description:
      "These indices are among the most actively traded in global markets, representing major economic regions and sectors",
    ctaText: "Start Trading Indices",
    items: [
      {
        icon: ICONS.us30,
        title: "US Wall Street 30",
        desc: "Tracks 30 major US companies — a pulse on America’s economy.",
        stat: "US30",
        statLabel: "Blue-chip index",
        color: "#1fa864",
      },
      {
        icon: ICONS.nas100,
        title: "NASDAQ 100",
        desc: "Tech-heavy index with big names like Apple and Microsoft.",
        stat: "NAS100",
        statLabel: "Tech powerhouse",
        color: "#3959a6",
      },
      {
        icon: ICONS.ger40,
        title: "Germany 40 (DAX)",
        desc: "Reflects the strength of Europe’s leading industrial powerhouse.",
        stat: "GER40",
        statLabel: "Europe leader",
        color: "#e6c76a",
      },
      {
        icon: ICONS.uk100,
        title: "UK FTSE 100",
        desc: "Covers 100 top UK firms — ideal for those eyeing the British market.",
        stat: "UK100",
        statLabel: "British market",
        color: "#258d87",
      },
    ],
  },

  stocks: {
    key: "stocks",
    badge: "Top Global Equities",
    title: "Top Traded Stocks in 2025",
    description:
      "Here are some of the top stocks attracting traders in 2025, valued for their market strength and growth potential:",
    ctaText: "Start Trading Stocks",
    items: [
      {
        icon: ICONS.apple,
        title: "Apple (AAPL)",
        desc: "A tech giant with constant innovation and global demand.",
        stat: "AAPL",
        statLabel: "Consumer tech",
        color: "#9399ad",
      },
      {
        icon: ICONS.tesla,
        title: "Tesla (TSLA)",
        desc: "Leading the electric vehicle revolution and high on volatility.",
        stat: "TSLA",
        statLabel: "EV revolution",
        color: "#ef5b6b",
      },
      {
        icon: ICONS.nvda,
        title: "NVIDIA (NVDA)",
        desc: "Driving AI and chip market growth in 2025.",
        stat: "NVDA",
        statLabel: "AI compute",
        color: "#1fa864",
      },
      {
        icon: ICONS.amazon,
        title: "Amazon (AMZN)",
        desc: "E-commerce and cloud powerhouse with global reach.",
        stat: "AMZN",
        statLabel: "Cloud giant",
        color: "#e6c76a",
      },
    ],
  },

  metals: {
    key: "metals",
    badge: "Precious Metals Edge",
    title: "Most Traded Precious Metals",
    description:
      "Precious metals have stood the test of time as safe-haven assets and industrial cornerstones. Explore our most liquid metals traded worldwide.",
    ctaText: "Start Trading Metals",
    items: [
      {
        icon: ICONS.gold,
        title: "Gold (XAU/USD)",
        desc: "A timeless safe-haven asset, especially in uncertain times and inflation periods.",
        stat: "XAU/USD",
        statLabel: "Safe-haven asset",
        color: "#e6c76a",
      },
      {
        icon: ICONS.silver,
        title: "Silver (XAG/USD)",
        desc: "Combines industrial demand with investment appeal in expanding green tech.",
        stat: "XAG/USD",
        statLabel: "Industrial metal",
        color: "#9399ad",
      },
      {
        icon: ICONS.platinum,
        title: "Platinum (XPT/USD)",
        desc: "Crucial for green hydrogen tech and automotive catalysts with dynamic price action.",
        stat: "XPT/USD",
        statLabel: "Clean tech catalyst",
        color: "#258d87",
      },
      {
        icon: ICONS.palladium,
        title: "Palladium (XPD/USD)",
        desc: "Ultra-scarce noble metal with rapid price movements and high trading interest.",
        stat: "XPD/USD",
        statLabel: "Rare noble metal",
        color: "#3959a6",
      },
    ],
  },

  forex: {
    key: "forex",
    badge: "Forex Trading Edge",
    title: "Your Forex Edge Starts Here",
    description:
      "Whether you're scalping majors or swing trading minors, our technology and terms help you trade on your terms.",
    ctaText: "Start Trading Forex",
    items: [
      {
        icon: ICONS.spread,
        title: "Ultra-Low Spreads",
        desc: "Trade with competitive spreads — from 0.0 pips on major pairs.",
        stat: "0.0",
        statLabel: "pips from",
        color: "#1fa864",
      },
      {
        icon: ICONS.liquidity,
        title: "Reliable Liquidity Flow",
        desc: "Execute trades without delays or requotes, even during peak volatility.",
        stat: "0",
        statLabel: "requotes",
        color: "#258d87",
      },
      {
        icon: ICONS.leverage,
        title: "High Leverage Access",
        desc: "Up to 1:1000 leverage available to amplify opportunity responsibly.",
        stat: "1:1000",
        statLabel: "up to",
        color: "#3959a6",
      },
      {
        icon: ICONS.risk,
        title: "Built-In Risk Controls",
        desc: "Integrated SL/TP tools, margin alerts, and negative balance protection.",
        stat: "SL/TP",
        statLabel: "built in",
        color: "#1fa864",
      },
    ],
  },
};