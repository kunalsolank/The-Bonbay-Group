import HeroSubSection from "../components/subPagesComponents/HeroSubSection";
import forexImage from "../assets/forexImg.webp";
import MT5Image from "../assets/pl-img.webp";
import marketsImage from "../assets/Computer.avif";
import accountsImage from "../assets/Computer.avif";
import platformImage from "../assets/Computer.avif";
import FeaturePoints from "../components/subPagesComponents/FeaturePoints";
import FeatureList from "../components/subPagesComponents/FeatureList";
import ImageLinksSection from "../components/subPagesComponents/ImageLinksSection";
import GetStartedSteps from "../components/subPagesComponents/GetStartedSteps";
import FAQSection from "../components/subPagesComponents/FAQSection";
import ThreeLinkCards from "../components/subPagesComponents/ThreeLinkCards";
import MarketOverview from "../components/subPagesComponents/MarketOverview";
import TradingSteps from "../components/subPagesComponents/TradingSteps";
import TradingCTA from "../components/TradingCTA";
const Forex = () => {
  const points = [
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
  const FeatureListpoints = [
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
  const forexFAQs = [
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
  return (
    <div>
      <HeroSubSection
        eyebrow="Forex Trading"
        title="Trade Commodities with "
        highlight="Confidence."
        description="Trade gold, silver, and other top commodities - all on one trading platform offering up to 200x leverage for greater flexibility and potential returns."
        image={forexImage}
        buttonText="Start Trading"
        buttonLink="/open-account"
      />
      <FeaturePoints
        eyebrow="Why Trade Forex"
        heading="Built for Real Forex Traders"
        subheading="Get the conditions, support, and platform performance serious traders need to succeed in global currency markets."
        points={points}
      />
      <FeatureList
        heading="Your Forex Edge Starts Here."
        subheading="Whether you’re scalping majors or swing trading minors, our technology and terms help you trade on your terms."
        points={FeatureListpoints}
      />
      <MarketOverview
        eyebrow="Forex Trading"
        heading="The World's Most"
        highlight="Traded Market"
        description="Access one of the world's most liquid and actively traded financial markets with powerful tools and competitive trading conditions."
        stat="$6T+"
        statLabel="Daily Trading Volume"
        statDescription="Traded across the global foreign exchange market every day."
        status="Open 24 / 5"
        markets={["London", "New York", "Tokyo", "Dubai"]}
        image={marketsImage}
        imageAlt="Global forex market trading"
        paragraphs={[
          <>
            Forex trading — also known as foreign exchange or FX — is the global
            marketplace for exchanging national currencies. It operates 24 hours
            a day, five days a week, across major financial hubs like London,
            New York, Tokyo, and Dubai. With daily volume exceeding{" "}
            <span className="text-white font-medium">$6 trillion</span>, the
            forex market offers unmatched liquidity and volatility, making it
            ideal for traders of all experience levels.
          </>,

          <>
            At{" "}
            <span className="text-white font-medium">DollreX Capital Ltd.</span>
            , we provide access to over{" "}
            <span className="text-white font-medium">40 currency pairs</span>,
            including majors, minors, and exotics. With deep liquidity, tight
            spreads, and leverage up to{" "}
            <span className="text-[#a0d311] font-medium">1:1000</span>, our
            clients can capitalise on short- and long-term price movements.
            Whether you're trading the{" "}
            <span className="text-white font-medium">USD/JPY</span> or{" "}
            <span className="text-white font-medium">EUR/USD</span>, our MT5
            platform delivers the precision and power needed to execute
            confidently.
          </>,

          <>
            Combine that with dedicated regional support, fast withdrawals, and
            a trader-first environment — and you'll see why more forex traders
            choose{" "}
            <span className="text-white font-medium">DollreX Capital Ltd.</span>
            .
          </>,
        ]}
        features={[
          {
            value: "40+",
            label: "Currency Pairs",
          },
          {
            value: "1:1000",
            label: "Maximum Leverage",
          },
          {
            value: "24 / 5",
            label: "Market Access",
          },
          {
            value: "MT5",
            label: "Trading Platform",
          },
        ]}
      />
      <ImageLinksSection
        image={MT5Image}
        heading="Trade With MT5 —The Global Standard"
        description="Experience the award-winning MetaTrader 5 platform with full DollreX Capital Ltd integration and mobile/web support."
      />
      <TradingSteps
        eyebrow="Forex Trading"
        heading="Get Started in  "
        highlight="Four Simple Steps."
        points={[
          {
            number: "01",
            title: "Create Your Account",
            description:
              "Sign up securely in minutes using your email or mobile number.",
            icon: "◈",
          },
          {
            number: "02",
            title: "Verify Your Identity",
            description:
              "Upload your KYC documents and get verified fast by our compliance team.",
            icon: "↗",
          },
          {
            number: "03",
            title: "Fund Your Wallet",
            description:
              "Choose from USDT, bank wire, or cash deposit — funding made local and easy.",
            icon: "⌁",
          },
          {
            number: "04",
            title: "Start Trading Forex",
            description:
              "Log in to MT5 and access the full currency market — anytime, anywhere",
            icon: "✓",
          },
        ]}
      />
      <FAQSection
        faqs={forexFAQs}
        eyebrow="Forex FAQ"
        heading="Frequently Asked"
        highlightedHeading=" Forex Questions"
        description="Everything you need to know about Forex trading, currency pairs, leverage, and our platform."
        bottomText="Can't find what you're looking for?"
        bottomLinkText="Talk to our team →"
        onBottomLinkClick={() => {
          console.log("Contact clicked");
        }}
      />
      <ThreeLinkCards
        eyebrow="Discover More"
        heading="Everything you need to trade"
        subheading="Explore our markets, trading tools and account solutions built for a seamless trading experience."
        cards={[
          {
            title: "Our Markets",
            description:
              "Explore Forex, Metals, Indices, Commodities and other global markets.",
            image: marketsImage,
            link: "/markets",
          },
          {
            title: "Trading Accounts",
            description:
              "Choose an account designed around your trading goals and experience.",
            image: accountsImage,
            link: "/accounts",
          },
          {
            title: "Trading Platform",
            description:
              "Access powerful tools and execute trades through the MT5 platform.",
            image: platformImage,
            link: "/platform",
          },
        ]}
      />
      <TradingCTA />
    </div>
  );
};

export default Forex;
