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
import MarketOverview from "../components/subPagesComponents/MarketOverview";
import TradingSteps from "../components/subPagesComponents/TradingSteps";
import TradingCTA from "../components/TradingCTA";
const Stocks = () => {
  const points = [
    {
      title: "Instant Access to Global Brands",
      description:
        "Trade CFDs on Apple, Microsoft, Tesla, and other market movers without owning actual shares.",
      image: forexImage,
    },
    {
      title: "Low-Cost Trading",
      description:
        "Enjoy tight spreads and no commission fees — what you see is what you pay.",
      image: forexImage,
    },
    {
      title: "Profit in Any Market Direction",
      description:
        "Go long or short depending on how the market moves — capture opportunities both ways.",
      image: forexImage,
    },
    {
      title: "Flexible Leverage Up to 1:50",
      description:
        "Get more exposure while keeping risk under control with our advanced risk management tools.",
      image: forexImage,
    },
  ];
  const FeatureListpoints = [
    {
      title: "Apple (AAPL)",
      description: "A tech giant with constant innovation and global demand.",
      // image: forexIcon,
    },
    {
      title: "NVIDIA (NVDA)",
      description: "Driving AI and chip market growth in 2025.",
      // image: marketIcon,
    },
    {
      title: "Tesla (TSLA)",
      description:
        "Leading the electric vehicle revolution and high on volatility.",
      // image: chartIcon,
    },
    {
      title: "Amazon (AMZN)",
      description: "E-commerce and cloud powerhouse with global reach.",
      // image: strategyIcon,
    },
  ];
  const forexFAQs = [
    {
      question: "  What is stock trading?   ",
      answer:
        " Stock trading means buying and selling shares of companies to make profits from price changes. With Dollrex Capital Ltd. you can trade popular stocks without owning the actual shares, using Contracts for Difference (CFDs). ",
    },
    {
      question: " How do I start trading stocks with Dollrex Capital Ltd.? ",
      answer:
        " Simply create an account, deposit funds, choose the stocks you want to trade, and start using our platform’s tools to buy or sell. It’s designed to be beginner-friendly with real-time prices and easy navigation. ",
    },
    {
      question: " Can I trade stocks without buying full shares? ",
      answer:
        " Yes! Dollrex Capital Ltd. offers CFD trading, which lets you trade on price movements without owning the actual stocks, making it accessible even with small investment amounts. ",
    },
    {
      question: " What are the risks of stock trading? ",
      answer:
        " Stock trading involves market risks — prices can rise or fall, and you might lose some or all of your invested capital. Always trade responsibly and use risk management tools. ",
    },
    {
      question:
        " What fees does Dollrex Capital Ltd. charge for stock trading? ",
      answer: ` Dollrex Capital Ltd. embeds trading costs within the spreads, so there are no extra commission fees. This transparent pricing helps you keep track of your expenses easily.  `,
    },
    {
      question: " Can I trade stocks 24/7 with Dollrex Capital Ltd.? ",
      answer:
        " While stock markets have specific opening hours, Dollrex Capital Ltd. offers extended trading hours on many stock CFDs, giving you more opportunities beyond regular market times. ",
    },
    {
      question:
        " What tools does Dollrex Capital Ltd. provide for stock trading? ",
      answer:
        " Our platform offers real-time pricing, technical analysis tools, customizable charts, and risk management features to help you make informed trading decisions. ",
    },
    {
      question: " Can I trade stocks on my mobile device? ",
      answer:
        " Yes! Dollrex Capital Ltd. trading platform is fully accessible on mobile devices, allowing you to trade stocks anytime, anywhere, with ease and security. ",
    },
    {
      question: " What is leverage in stock trading? ",
      answer:
        " Leverage lets you control a larger position than your deposit, amplifying both potential profits and risks. Dollrex Capital Ltd. offers leverage up to 1:50 with built-in risk management. ",
    },
    {
      question: " How can I learn more about stock trading? ",
      answer:
        " Dollrex Capital Ltd. provides educational resources, webinars, and customer support to help you understand stock trading better and build your skills over time. ",
    },
  ];
  return (
    <div>
      <HeroSubSection
        eyebrow="Stocks"
        title="Stocks Trading Your Gateway to"
        highlight=" Growth"
        description="Explore stock CFDs with top names like Apple, Tesla, and Meta. Start small, diversify fast, and trade with low spreads."
        image={forexImage}
        buttonText="Start Trading"
        buttonLink="/open-account"
      />
      <FeaturePoints
        eyebrow="Why Stocks?"
        heading="Why Trade Stocks with Dollrex Capital Ltd.?"
        subheading="When you choose to trade stocks with Dollrex Capital Ltd. you step into a world of speed, flexibility, and top-tier access to the biggest brands in global finance and tech."
        points={points}
      />
      <FeatureList
        heading="Top Traded Stocks in 2025"
        subheading="Here are some of the top stocks attracting traders in 2025, valued for their market strength and growth potential:"
        points={FeatureListpoints}
      />
      <MarketOverview
        eyebrow="Stocks Trading"
        heading="Trade the World's"
        highlight="Leading Companies"
        description="Gain exposure to popular global companies through stock CFDs, with real-time pricing and flexible trading opportunities."
        stat="100+"
        statLabel="Global Stocks"
        statDescription="Access popular companies from major markets around the world."
        status="Global Access"
        markets={["Apple", "Tesla", "Amazon", "Microsoft"]}
        image={marketsImage}
        imageAlt="Global stocks trading"
        paragraphs={[
          <>
            Stock trading means buying and selling shares of companies with the
            aim of benefiting from changes in their prices. When you believe a
            company like <span className="text-white font-medium">Apple</span>{" "}
            or <span className="text-white font-medium">Tesla</span> will grow,
            you can trade its stock to potentially benefit from a rise in price.
            If the price moves against you, however, you may incur a loss.
          </>,

          <>
            With{" "}
            <span className="text-white font-medium">DollreX Capital Ltd.</span>
            , you can trade popular stocks through{" "}
            <span className="text-white font-medium">Stock CFDs</span> without
            owning the underlying shares. Our platform provides real-time
            prices, intuitive trading tools, and a low entry point, making stock
            CFD trading accessible to both beginners and experienced traders.
          </>,

          <>
            Stock trading gives you the opportunity to participate in the
            performance of well-known companies across global markets. You can
            choose to <span className="text-white font-medium">go long</span>{" "}
            when you expect prices to rise or{" "}
            <span className="text-[#a0d311] font-medium">go short</span> when
            you expect them to fall. This flexibility makes stock CFDs a
            versatile way to gain exposure to global companies and diversify
            your trading strategy.
          </>,
        ]}
        features={[
          {
            value: "Apple",
            label: "Technology",
          },
          {
            value: "Tesla",
            label: "Automotive",
          },
          {
            value: "Amazon",
            label: "E-Commerce",
          },
          {
            value: "Microsoft",
            label: "Technology",
          },
        ]}
      />
      <ImageLinksSection
        image={MT5Image}
        heading="How to Start Trading with Dollrex Capital Ltd."
        description="Experience the award-winning MetaTrader 5 platform with full DollreX Capital Ltd integration and mobile/web support."
      />
      <TradingSteps
        eyebrow="Stocks Trading"
        heading="How to Start Trading with"
        highlight="Dollrex Capital Ltd."
        points={[
          {
            number: "01",
            title: "Create Your Account",
            description:
              "Register with Dollrex Capital Ltd. in minutes and get access to your trading dashboard.",
            icon: "◈",
          },
          {
            number: "02",
            title: "Choose Your Instrument",
            description:
              "Pick from stocks, commodities, indices, and more, all on one platform.",
            icon: "↗",
          },
          {
            number: "03",
            title: "Use Powerful Tools",
            description:
              "Analyze trends and get real-time data with our advanced charting features.",
            icon: "⌁",
          },
          {
            number: "04",
            title: "Place Your Trade",
            description:
              "Buy or sell with just a few clicks. Use leverage wisely and manage your risk smartly.",
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

export default Stocks;
