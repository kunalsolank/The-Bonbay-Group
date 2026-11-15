 import forex from '../assets/platform/forex.png'
import indices from '../assets/platform/indices.png'
import stocks from '../assets/platform/stocks.png'
import commodities from '../assets/platform/commodities.png'
 export const platforms = [
    {
      number: "01",
      title: "Forex",
      description:
        "Access major, minor, and exotic currency pairs with ultra-low spreads and high leverage.",
      image:forex,
      link: "/forex",
    },
    {
      number: "02",
      title: "Commodities",
      description:
        "Speculate on gold, silver, crude oil, and natural gas with competitive margins and zero hidden fees.",
      image:commodities,
      link: "/commodities",
    },
    {
      number: "03",
      title: "Indices",
      description:
        "Trade global benchmark indices like US30, NAS100, and DAX40 with minimal slippage and deep liquidity.",
      image:indices,
      link: "/indices",
    },
    {
      number: "04",
      title: "Stocks",
      description:
        "Explore CFD trading on top global shares like Apple, Tesla, and Nvidia without owning the underlying asset.",
      image:stocks,
      link: "/stocks",
    },
  ];

  export const platformFAQs = [
    {
      question: "What is MetaTrader 5 (MT5)?",
      answer:
        "MetaTrader 5 is a next-generation multi-asset trading platform engineered for speed, deep analytical precision, and institutional reliability. It supports trading in Forex, Stocks, Indices, and Commodities with cutting-edge tools and algorithmic capabilities.",
    },
    {
      question: "How is MT5 different from MT4?",
      answer:
        "MT5 is the modernized successor to MT4, offering true multi-asset trading from a single account, 21 timeframes, 38 technical indicators, an integrated economic calendar, a 64-bit multi-threaded strategy tester, and advanced Depth of Market (DOM).",
    },
    {
      question: "Can beginners trade on MT5?",
      answer:
        "Yes, MT5 is designed for traders of all experience levels. Beginners can trade with an intuitive user interface, quick one-click orders, and practice risk-free with free demo accounts before transitioning to live capital.",
    },
    {
      question: "What devices and platforms does MT5 support?",
      answer:
        "You can run MT5 across Windows and macOS desktop applications, in any browser via MetaTrader 5 WebTrader, and on mobile through dedicated iOS and Android apps with full account synchronization.",
    },
    {
      question: "What are Expert Advisors (EAs) on MT5?",
      answer:
        "Expert Advisors are automated trading algorithms that execute trades based on programmed rules. MT5 allows you to build, test, and deploy EAs 24/7 with ultra-low latency execution via VPS integration.",
    },
    {
      question: "Does MT5 support free demo trading?",
      answer:
        "Yes, Dollrex Capital Ltd. provides complimentary demo accounts with real-time price feeds, allowing you to master the platform, backtest indicators, and refine trading strategies without financial risk.",
    },
    {
      question: "What is hedging mode in MT5?",
      answer:
        "Hedging enables traders to hold opposing long and short positions simultaneously on the same financial instrument, allowing advanced risk mitigation and flexible tactical execution during high-volatility events.",
    },
    {
      question: "Can I customize charts, indicators, and timeframes?",
      answer:
        "Absolutely. MT5 features completely customizable workspaces with 21 timeframes, detachable chart windows, unlimited indicator overlays, and access to thousands of community indicators via the MQL5 market.",
    },
    {
      question: "Is MT5 secure and reliable?",
      answer:
        "Yes. MT5 implements 128-bit encryption, strict server authorization, and multi-factor security. Combined with Dollrex's segregated tier-1 accounts and negative balance protection, your funds and trading data remain secure.",
    },
    {
      question: "How do I get started with MT5 on Dollrex Capital Ltd.?",
      answer:
        "Simply create your account with Dollrex Capital Ltd., complete our swift digital KYC verification, download the MT5 app on your preferred device, and start trading with spreads from 0.0 pips.",
    },
  ];

export const steps = [
    {
      number: 1,
      title: "Sign Up with Dollrex",
      description: "Create your free Dollrex Capital Ltd. trading account in just a few quick clicks.",
      delay: 0,
    },
    {
      number: 2,
      title: "Download MT5",
      description: "Install MetaTrader 5 on Windows, macOS, iOS, Android, or launch directly in your browser.",
      delay: 200,
    },
    {
      number: 3,
      title: "Log in & Explore",
      description: "Use your Dollrex credentials to explore 1000+ instruments, live charts, and institutional tools.",
      delay: 400,
    },
    {
      number: 4,
      title: "Start Trading Smart",
      description: "Pick your asset, place orders with sub-millisecond execution, and trade with raw spreads.",
      delay: 600,
    },
  ];
