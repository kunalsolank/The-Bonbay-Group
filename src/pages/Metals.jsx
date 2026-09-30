import React from "react";
import { useNavigate } from "react-router-dom";
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
import LivePricingTable from "../components/LivePricingTable";

const Metals = () => {
  const navigate = useNavigate();
  const handleAssetClick = (asset) => {
    navigate("/metals");
  };
  const points = [
    {
      title: "Safe-Haven Security",
      description:
        "Gold and silver historically preserve purchasing power during inflation and market turbulence.",
      image: forexImage,
    },
    {
      title: "Ultra-Raw Spreads",
      description:
        "Trade spot gold (XAU/USD) with institutional raw spreads starting from as low as 0.0 pips.",
      image: forexImage,
    },
    {
      title: "Deep Tier-1 Liquidity",
      description:
        "Execute high-volume orders seamlessly with rapid millisecond fills and zero requotes.",
      image: forexImage,
    },
    {
      title: "Flexible Leverage",
      description:
        "Amplify capital efficiency with flexible leverage options up to 1:500 on precious metals.",
      image: forexImage,
    },
  ];

  const FeatureListpoints = [
    {
      title: "Gold (XAU/USD)",
      description:
        "The world's preeminent safe-haven asset, offering deep liquidity and sharp technical price action.",
    },
    {
      title: "Silver (XAG/USD)",
      description:
        "Combines powerful investment hedging with strong demand from global green energy & electronics.",
    },
    {
      title: "Platinum (XPT/USD)",
      description:
        "A highly prized industrial and investment metal with tight global supply and dynamic price swings.",
    },
    {
      title: "Palladium (XPD/USD)",
      description:
        "Essential for modern automotive catalytic converters, providing high volatility for active traders.",
    },
  ];

  const metalsFAQs = [
    {
      question: "What does trading spot metals mean?",
      answer:
        "Spot metals trading involves speculating on the price movements of physical precious metals like Gold (XAU) and Silver (XAG) quoted against currencies like the U.S. Dollar (USD) through CFDs without taking physical delivery.",
    },
    {
      question: "Why should I trade Gold (XAU/USD)?",
      answer:
        "Gold is recognized as the ultimate safe-haven hedge against geopolitical turmoil, currency devaluation, and inflation. Its heavy global trading volume ensures tight spreads, high liquidity, and clear technical trading setups.",
    },
    {
      question: "What leverage is available for metals trading?",
      answer:
        "The Bombay Group offers flexible leverage up to 1:500 on gold and silver trading, allowing you to maximize your capital efficiency while utilizing built-in negative balance protection.",
    },
    {
      question: "What are the typical spreads on Gold and Silver?",
      answer:
        "We provide institutional raw spreads starting from 0.0 pips on gold and ultra-competitive fractional spreads on silver, backed by tier-1 liquidity providers.",
    },
    {
      question: "Can I trade precious metals on MetaTrader 5 (MT5)?",
      answer:
        "Yes, all spot metal contracts (Gold, Silver, Platinum, Palladium) are fully accessible on our MetaTrader 5 desktop, web, and mobile platforms with live streaming quotes and advanced charting tools.",
    },
    {
      question: "What are the trading hours for precious metals?",
      answer:
        "Precious metals trade 23 hours a day, 5 days a week, opening Sunday evening and closing Friday afternoon (EST), with a brief 1-hour daily maintenance roll break.",
    },
  ];

  return (
    <div className="bg-[#05040b] text-white">
      {/* Hero Section */}
      <HeroSubSection
         eyebrow="Metals Trading"
         title="Trade Precious Metals with "
         highlight="Institutional Precision."
         description="Access spot Gold (XAU/USD), Silver, Platinum, and Palladium with ultra-tight raw spreads, up to 1:500 leverage, and lightning-fast MT5 execution."
         image={forexImage}
         buttonText="Start Trading Metals"
         buttonLink="https://portal.dollrexcapital.com/register-new/"
       />

<LivePricingTable category="METALS" onAssetClick={handleAssetClick} />

      {/* Steps to Trade */}
      <TradingSteps
        eyebrow="Start Trading"
        heading="How to Start Metals Trading in "
        highlight="4 Simple Steps"
        points={[
          {
            number: "01",
            title: "Open Your Account",
            description:
              "Complete your registration and quick digital KYC in minutes to get your MT5 trading credentials.",
            icon: "◈",
          },
          {
            number: "02",
            title: "Fund Seamlessly",
            description:
              "Choose from flexible zero-fee deposit options including bank wires, cards, and crypto.",
            icon: "↗",
          },
          {
            number: "03",
            title: "Select Your Metal",
            description:
              "Choose XAU/USD, XAG/USD, or other precious metal pairs to trade with live charting.",
            icon: "⌁",
          },
          {
            number: "04",
            title: "Execute & Manage",
            description:
              "Place market or limit orders with integrated stop-loss and take-profit risk controls.",
            icon: "✓",
          },
        ]}
      />

      {/* Core Advantages */}
       <FeaturePoints
         eyebrow="Why Trade Metals?"
         heading="Why Choose Precious Metals Trading"
         subheading="Precious metals provide an essential hedge against macroeconomic uncertainty while creating high-liquidity opportunities for both day traders and long-term portfolio allocators."
         points={points}
       />

       {/* Most Traded Metals */}
       <FeatureList
         heading="Most Traded Precious Metals"
         subheading="Diversify your capital across the world's most liquid and volatile precious metals markets."
         points={FeatureListpoints}
       />

       {/* Market Overview */}
       <MarketOverview
         eyebrow="Precious Metals Market"
         heading="Access the World's Most"
         highlight="Liquid Safe-Haven Assets"
         description="Trade price movements in precious metals without the logistical costs and storage fees of physical metal ownership."
         stat="4+"
         statLabel="Precious Metals"
         statDescription="Gold, Silver, Platinum, and Palladium quoted live against USD."
         status="Global Access"
         markets={["Gold (XAU)", "Silver (XAG)", "Platinum (XPT)", "Palladium (XPD)"]}
         image={marketsImage}
         imageAlt="Global precious metals trading"
         paragraphs={[
           <>
             Precious metals such as{" "}
             <span className="text-white font-medium">Gold (XAU) and Silver (XAG)</span>{" "}
             have held recognized intrinsic value for millennia. In modern financial markets, they serve as the foremost defense against currency debasement and geopolitical turbulence.
           </>,
           <>
             Unlike physical bullion which incurs high transport, vaulting, and assay fees, trading spot metals via CFDs with{" "}
             <span className="text-white font-medium">The Bombay Group</span> allows you to capitalize on both rising (long) and falling (short) markets with millisecond speed and zero storage costs.
           </>,
           <>
             Benefit from institutional price aggregation, competitive margins, and powerful analytical indicators directly inside the MetaTrader 5 trading ecosystem.
           </>,
         ]}
         features={[
           {
             value: "Gold",
             label: "XAU/USD",
           },
           {
             value: "Silver",
             label: "XAG/USD",
           },
           {
             value: "Platinum",
             label: "XPT/USD",
           },
           {
             value: "Palladium",
             label: "XPD/USD",
           },
         ]}
       />

{/* MT5 Platform Showcase */}
        <ImageLinksSection
          image={MT5Image}
          heading="Trade Metals on MT5 — The Industry Standard"
          description="Experience MetaTrader 5 with advanced depth of market (DOM), comprehensive candlestick charting, and automated Expert Advisors (EAs)."
        />

        {/* FAQs */}
       <FAQSection
         faqs={metalsFAQs}
         eyebrow="Metals FAQs"
         heading="Frequently Asked"
         highlightedHeading=" Precious Metals Questions"
         description="Everything you need to know about spot gold, silver spreads, leverage, and MT5 trading conditions."
         bottomText="Have more questions about trading metals?"
         bottomLinkText="Speak with our trading desk →"
         onBottomLinkClick={() => {
           window.location.href = "/contactus";
         }}
       />

       {/* Related Resources */}
       <ThreeLinkCards
         eyebrow="Market Insights"
         heading="Enhance Your Trading Knowledge"
         subheading="Read expert analysis, macroeconomic updates, and strategies for precious metals."
         cards={[
           {
             title: "Understanding Safe-Haven Flows in Gold (XAU/USD)",
             description:
               "How interest rates, central bank reserves, and inflation expectations dictate gold trends.",
             image: marketsImage,
             link: "/forex",
           },
           {
             title: "Silver Trading: Balancing Industrial Demand and Volatility",
             description:
               "Explore why silver often outperforms gold during commodity bull cycles.",
             image: accountsImage,
             link: "/commodities",
           },
           {
             title: "Managing Risk and Position Sizing on MetaTrader 5",
             description:
               "Best practices for stop-loss management and leverage optimization on metals.",
             image: platformImage,
             link: "/platform",
           },
         ]}
       />

       {/* CTA */}
       <TradingCTA />
    </div>
  );
};

export default Metals;