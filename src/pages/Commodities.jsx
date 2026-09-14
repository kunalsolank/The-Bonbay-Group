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
import ThreeLinkCards from "../components/subPagesComponents/ThreeLinkCards";
import TradingSteps from "../components/subPagesComponents/TradingSteps";
import MarketOverview from "../components/subPagesComponents/MarketOverview";
import TradingCTA from "../components/TradingCTA";

const Commodities = () => {
  const points = [
    {
      title: "Inflation-Resistant",
      description:
        "Commodities often keep their value even when inflation rises.",
      image: forexImage,
    },
    {
      title: "Global Economic Relevance",
      description:
        "Commodities like oil reflect major shifts in the global economy.",
      image: forexImage,
    },
    {
      title: "Portfolio Balance",
      description:
        "Commodity trading helps reduce overall risk by diversifying investments.",
      image: forexImage,
    },
    {
      title: "Low Entry Barriers",
      description:
        "Get started with minimal capital and tap into high-demand markets.",
      image: forexImage,
    },
  ];
  const FeatureListpoints = [
    {
      title: "Gold",
      description:
        "A timeless safe-haven asset, especially in uncertain times.",
      // image: forexIcon,
    },
    {
      title: "Silver",
      description: "Combines industrial demand with investment appeal.",
      // image: marketIcon,
    },
    {
      title: "Crude Oil",
      description: "Closely linked with global growth and energy trends.",
      // image: chartIcon,
    },
    {
      title: "Natural Gas",
      description: "High in volatility, ideal for active traders.",
      // image: strategyIcon,
    },
  ];
  const forexFAQs = [
    {
      question: " What are commodities in trading? ",
      answer:
        " Commodities are natural or raw materials like gold, oil, silver, and natural gas that are traded in global markets. You can buy or sell them based on price changes to earn profits, just like stocks or currencies.  ",
    },
    {
      question: " Is commodity trading safe for beginners? ",
      answer:
        " Yes, but like all trading, it carries risks. Dollrex Capital Ltd. offers tools, support, and educational resources to help beginners understand the market and trade more confidently. ",
    },
    {
      question: " How do I start trading commodities? ",
      answer:
        " Just create a free account on Dollrex Capital Ltd. choose your commodity, and begin trading. The platform is beginner-friendly with low barriers to entry and expert support available anytime. ",
    },
    {
      question: " What is the minimum amount I need to start trading? ",
      answer:
        " Dollrex Capital Ltd. allows you to start with a small deposit. The minimum can vary based on your trading instrument and leverage settings, but it’s designed to be accessible for everyone. ",
    },
    {
      question: " Why is gold considered a popular commodity to trade? ",
      answer: `Gold is seen as a "safe-haven" asset. It often holds value during economic uncertainty, making it a preferred choice for both new and experienced traders. `,
    },
    {
      question: " Can I trade commodities 24/7 like forex? ",
      answer:
        " Commodity markets have specific trading hours depending on the product and exchange. However, with Dollrex Capital Ltd. you can access many commodities during extended market hours with flexibility. ",
    },
    {
      question: " What tools are provided for commodity trading? ",
      answer:
        " Dollrex Capital Ltd. offers real-time price charts, technical analysis tools, market news, and risk management features like stop-loss and leverage control to help you trade smarter. ",
    },
    {
      question: " Do I need to physically own the commodities I trade? ",
      answer:
        " No. With CFDs (Contracts for Difference), you only speculate on the price movement without actually owning the physical asset. It’s faster and more flexible. ",
    },
    {
      question: " How risky is commodity trading? ",
      answer:
        " Commodity prices can be volatile, meaning they change quickly. While this creates opportunities, it also involves risks. It’s important to use proper risk management strategies, which Dollrex Capital Ltd. helps you learn and apply. ",
    },
    {
      question: " Are there any hidden charges or swap fees? ",
      answer:
        " Dollrex Capital Ltd. offers 0 Swap* on selected instruments and transparent pricing. All fees are clearly displayed, so you know exactly what you’re paying — no hidden surprises. ",
    },
  ];
  return (
    <div>
      <HeroSubSection
        eyebrow="Commodities"
        title="Trade Commodities with "
        highlight="Confidence."
        description="Trade gold, silver, and other top commodities - all on one trading platform offering up to 200x leverage for greater flexibility and potential returns."
        image={forexImage}
        buttonText="Start Trading"
        buttonLink="/open-account"
      />
      <FeaturePoints
        eyebrow="Why Commodities?"
        heading="Why Choose Commodity Trading"
        subheading="Commodity trading opens doors to a dynamic market where price movements create real opportunities. It’s a smart choice for traders looking to grow, hedge, or balance their portfolios with real-world assets."
        points={points}
      />
      <FeatureList
        heading="Most Traded Commodities"
        subheading="Commodities are the backbone of global trade, and some stand out for their high demand and liquidity. Here are a few top-traded assets that attract traders worldwide."
        points={FeatureListpoints}
      />
      <MarketOverview
        eyebrow="Commodities Trading"
        heading="Trade the World's"
        highlight="Essential Commodities"
        description="Gain exposure to essential raw materials and natural resources through a simple, powerful, and accessible trading environment."
        stat="4+"
        statLabel="Major Commodities"
        statDescription="Access some of the world's most important precious metals and energy markets."
        status="Global Access"
        markets={["Gold", "Silver", "Oil", "Natural Gas"]}
        image={marketsImage}
        imageAlt="Global commodities trading"
        paragraphs={[
          <>
            Commodities trading is the process of buying and selling raw
            materials or natural resources — such as{" "}
            <span className="text-white font-medium">
              gold, silver, oil, and natural gas
            </span>{" "}
            — with the aim of making a profit from changes in their prices.
            These materials are essential to the global economy, and their
            values are influenced by factors such as supply and demand,
            geopolitical events, weather conditions, and market sentiment.
          </>,

          <>
            Think of it like a shopkeeper buying goods at a lower price and
            selling them at a higher one. Similarly, traders seek to benefit
            from commodity price movements. When the price of{" "}
            <span className="text-white font-medium">gold rises</span> or demand
            for <span className="text-white font-medium">oil increases</span>,
            traders who identified opportunities at lower prices may benefit
            from subsequent price movements.
          </>,

          <>
            With{" "}
            <span className="text-white font-medium">DollreX Capital Ltd.</span>
            , getting started in commodity trading is simple and accessible.
            Whether you're new to the market or an experienced trader, DollreX
            Capital Ltd. provides powerful trading tools, competitive leverage,
            and a user-friendly platform. You don't need a large investment to
            begin — just the right strategy and support, which{" "}
            <span className="text-white font-medium">DollreX Capital Ltd.</span>{" "}
            is here to offer.
          </>,
        ]}
        features={[
          {
            value: "Gold",
            label: "Precious Metal",
          },
          {
            value: "Silver",
            label: "Precious Metal",
          },
          {
            value: "Oil",
            label: "Energy Market",
          },
          {
            value: "Gas",
            label: "Energy Market",
          },
        ]}
      />
      <ImageLinksSection
        image={MT5Image}
        heading="Trade With MT5 —The Global Standard"
        description="Experience the award-winning MetaTrader 5 platform with full DollreX Capital Ltd integration and mobile/web support."
      />
      <TradingSteps
        eyebrow="Commodities Trading"
        heading="Steps to Start Commodity Trading with "
        highlight="Dollrex Capital Ltd."
        points={[
          {
            number: "01",
            title: "Sign Up Easily",
            description:
              "Open your free Dollrex Capital Ltd. trading account in just minutes — no paperwork, no hassle.",
            icon: "◈",
          },
          {
            number: "02",
            title: "Choose Your Commodity",
            description:
              "Pick from gold, oil, silver, and more — whatever suits your market outlook.",
            icon: "↗",
          },
          {
            number: "03",
            title: "Start Trading Smart",
            description:
              "Use real-time tools, charts, and analysis to enter or exit trades with confidence.",
            icon: "⌁",
          },
          {
            number: "04",
            title: "Monitor & Grow",
            description:
              "Track your trades, adjust your strategy, and grow your skills with expert support.",
            icon: "✓",
          },
        ]}
      />
      <FAQSection
        faqs={forexFAQs}
        eyebrow="Commodities FAQ"
        heading="Frequently Asked"
        highlightedHeading=" Commodities Questions"
        description="Everything you need to know about commodities, currency pairs, leverage, and our platform."
        bottomText="Can't find what you're looking for?"
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

export default Commodities;
