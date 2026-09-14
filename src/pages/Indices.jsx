import HeroSubSection from "../components/subPagesComponents/HeroSubSection";
import forexImage from "../assets/forexImg.webp";
import MT5Image from "../assets/pl-img.webp";
import marketsImage from "../assets/Computer.avif";
import accountsImage from "../assets/Computer.avif";
import platformImage from "../assets/Computer.avif";
import FeaturePoints from "../components/subPagesComponents/FeaturePoints";
import FeatureList from "../components/subPagesComponents/FeatureList";
import ImageLinksSection from "../components/subPagesComponents/ImageLinksSection";
import FAQSection from "../components/subPagesComponents/FAQSection";
import MarketOverview from "../components/subPagesComponents/MarketOverview";
import TradingSteps from "../components/subPagesComponents/TradingSteps";
import ThreeLinkCards from "../components/subPagesComponents/ThreeLinkCards";
import TradingCTA from "../components/TradingCTA";
const Indices = () => {
  const points = [
    {
      title: "Instant Market Exposure",
      description:
        "Gain access to entire markets like tech or industrials through one index.",
      image: forexImage,
    },
    {
      title: "Lower Risk than Single Stocks",
      description:
        "Reduce risk by trading a basket of stocks rather than just one.",
      image: forexImage,
    },
    {
      title: "Global Economic Insight",
      description:
        "Indices reflect economic health, offering strong trading signals.",
      image: forexImage,
    },
    {
      title: "Flexibility with CFDs",
      description:
        "Trade both rising and falling markets with contract-based trading.",
      image: forexImage,
    },
  ];
  const FeatureListpoints = [
    {
      title: "US Wall Street 30",
      description:
        "Tracks 30 major US companies — a pulse on America’s economy.",
      // image: forexIcon,
    },
    {
      title: "Germany 40 (DAX)",
      description:
        "Reflects the strength of Europe’s leading industrial powerhouse.",
      // image: marketIcon,
    },
    {
      title: "NASDAQ 100",
      description: "Tech-heavy index with big names like Apple and Microsoft.",
      // image: chartIcon,
    },
    {
      title: "UK FTSE 100",
      description:
        "Covers 100 top UK firms — ideal for those eyeing the British market.",
      // image: strategyIcon,
    },
  ];
  const forexFAQs = [
    {
      question: " What is indices trading?  ",
      answer:
        " Indices trading means speculating on the price movement of a group of stocks that make up a stock market index, like the NASDAQ or DAX. You don’t own the stocks—just trade on whether the index will rise or fall. ",
    },
    {
      question: " How is indices trading different from stock trading? ",
      answer:
        " In stock trading, you buy or sell individual company shares. In indices trading, you trade an entire group of stocks through a single index, which gives broader market exposure and helps reduce single-stock risk. ",
    },
    {
      question: " Which indices can I trade? ",
      answer:
        "Dollrex Capital Ltd. offers access to major global indices including the US Wall Street 30, NASDAQ 100, Germany’s DAX 40, and UK’s FTSE 100. These indices reflect large economies and sectors, giving you great variety. ",
    },
    {
      question: " Do I need a large investment to start? ",
      answer:
        " No, you don’t. Dollrex Capital Ltd. allows trading with low entry capital and flexible leverage options. This makes it accessible for beginners and helps experienced traders manage risk efficiently. ",
    },
    {
      question: " Can I trade indices 24/5 like forex? ",
      answer: ` Indices trading is available during specific market hours depending on the index. While it’s not 24/5 like forex, Dollrex Capital Ltd. provides extended hours and live market access when indices are most active.  `,
    },
    {
      question: " Is indices trading suitable for beginners? ",
      answer:
        "  Yes, indices trading can be a good choice for beginners. It offers broader exposure, lower volatility compared to individual stocks, and is easier to follow through market trends and news.  ",
    },
    {
      question: " What are the risks in indices trading? ",
      answer:
        " Like any form of trading, indices involve risk due to price fluctuations. Markets can react to economic news, political events, and global developments. Always trade with a strategy and risk management in place. ",
    },
    {
      question: " Can I trade both rising and falling indices? ",
      answer:
        "  Yes, with Dollrex Capital Ltd. you can go long (buy) or short (sell) an index. This means you can potentially profit whether the market is moving up or down, depending on your trade direction. ",
    },
    {
      question: " Are there any hidden fees or swaps? ",
      answer:
        " Dollrex Capital Ltd. is transparent with pricing. Many index trades come with 0 swap and no expiry, allowing you to hold positions without extra overnight charges. Always check contract details for specifics. ",
    },
    {
      question: " How do I start trading indices on Dollrex Capital Ltd.? ",
      answer:
        " Just create an account, explore available indices, use our advanced tools for analysis, and place your trade. Our platform is designed to support all levels—from first-timers to seasoned traders. ",
    },
  ];
  return (
    <div>
      <HeroSubSection
        eyebrow="Indices"
        title="Access Global Indices for  "
        highlight="Smarter Trading"
        description="Tap into the power of the world’s most influential stock indices like US Wall Street 30, NASDAQ 100, and Germany’s DAX with Dollrex Capital Ltd."
        image={forexImage}
        buttonText="Start Trading"
        buttonLink="/open-account"
      />
      <FeaturePoints
        eyebrow="Why Indices?"
        heading="Why Trade Indices with Dollrex Capital Ltd."
        subheading="Indices trading gives you a broader view of market performance without focusing on individual stocks. Here’s why it’s worth considering."
        points={points}
      />
      <FeatureList
        heading="Most Popular Indices"
        subheading="These indices are among the most actively traded in global markets, representing major economic regions and sectors."
        points={FeatureListpoints}
      />
      <MarketOverview
        eyebrow="Indices Trading"
        heading="Trade the Market"
        highlight="Through Leading Indices"
        description="Gain exposure to groups of leading companies through some of the world's most recognised stock indices."
        stat="100+"
        statLabel="Global Companies"
        statDescription="Leading companies represented across major global stock indices."
        status="Global Access"
        markets={["NASDAQ 100", "S&P 500", "Dow Jones", "FTSE 100"]}
        image={marketsImage}
        imageAlt="Global indices trading"
        paragraphs={[
          <>
            Imagine keeping an eye on an entire group of companies at once —
            that's what index trading allows you to do. Instead of buying
            individual stocks, you trade on the performance of a group of stocks
            bundled together as an index.
          </>,

          <>
            For example, the{" "}
            <span className="text-white font-medium">NASDAQ 100</span> includes
            some of the world's leading technology companies. If you believe
            technology stocks will rise, trading this index allows you to
            participate in the overall movement of the sector.
          </>,

          <>
            Indices trading is popular because it can provide diversification,
            broader market exposure, and insight into overall market direction.
            With{" "}
            <span className="text-white font-medium">DollreX Capital Ltd.</span>
            , you get access to powerful trading tools, real-time market data,
            and a simple platform designed to help both new and experienced
            traders navigate global indices.
          </>,
        ]}
        features={[
          {
            value: "NASDAQ",
            label: "Technology Exposure",
          },
          {
            value: "S&P",
            label: "US Market",
          },
          {
            value: "DOW",
            label: "US Blue Chips",
          },
          {
            value: "FTSE",
            label: "UK Market",
          },
        ]}
      />
      <ImageLinksSection
        image={MT5Image}
        heading="Trade With MT5 —The Global Standard"
        description="Experience the award-winning MetaTrader 5 platform with full DollreX Capital Ltd integration and mobile/web support."
      />
      <TradingSteps
        eyebrow="Indices Trading"
        heading="How to Start Trading with"
        highlight="Dollrex Capital Ltd."
        points={[
          {
            number: "01",
            title: "Create Your Account",
            description:
              "Sign up with Dollrex Capital Ltd. in minutes — fast, secure, and beginner-friendly.",
            icon: "◈",
          },
          {
            number: "02",
            title: "Explore Markets",
            description:
              "Access global indices, commodities like gold or oil, and more.",
            icon: "↗",
          },
          {
            number: "03",
            title: "Use Our Tools",
            description:
              "Analyze market trends and access real-time insights with Dollrex Capital Ltd.'s trading platform.",
            icon: "⌁",
          },
          {
            number: "04",
            title: "Start Trading",
            description:
              "Open your first trade with flexible trading conditions and powerful market access.",
            icon: "✓",
          },
        ]}
      />
      <FAQSection
        faqs={forexFAQs}
        eyebrow="Indices FAQ"
        heading="Frequently Asked"
        highlightedHeading=" Indices Questions"
        bottomLinkText="Talk to our team →"
        onBottomLinkClick={() => {
          console.log("Contact clicked");
        }}
      />
      <ThreeLinkCards
        eyebrow="Discover More"
        heading="Everything you need to trade"
        subheading="Explore guides, insights, and market tips designed to support smarter trading decisions."
        cards={[
          {
            title: "Why Gold is the Best Investment and Trading Option in 2024",
            description:
              "Why Gold is the Best Investment and Trading Option in 2024.",
            image: marketsImage,
            link: "/markets",
          },
          {
            title:
              "Why Forex Trading Is One of the Best Career Options in 2024",
            description:
              "In recent years, forex trading has steadily risen in popularity, drawing in aspiring traders...",
            image: accountsImage,
            link: "/accounts",
          },
          {
            title: "A Beginner’s Guide to Trading Silver",
            description:
              "Silver, a precious metal with high industrial demand, offers an exciting opportunity for traders....",
            image: platformImage,
            link: "/platform",
          },
        ]}
      />
      <TradingCTA />
    </div>
  );
};

export default Indices;
