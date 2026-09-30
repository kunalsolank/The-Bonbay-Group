import React from "react";
import FeatureCard from "./FeatureCard";
import RetroGrid from "./ui/RetroGrid";

import FeatureOne from "../assets/stock.png";
import FeatureTwo from "../assets/Ultimate Security.png";
import FeatureThree from "../assets/Fair Governance.png";
import FeatureFour from "../assets/User Agency.png";
import FeatureFive from "../assets/Reliable Systems.png";
import FeatureSix from "../assets/Seamless Interoperability.png";

const getFeatureCards = (category) => {
  const baseCards = [
    {
      icon: FeatureOne,
      metric: "0.0",
      title: "Effortless Trading",
      description: "A seamless trading experience built for speed.",
      detail: "Trade with Ease",
    },
    {
      icon: FeatureTwo,
      metric: "0.0",
      title: "Ultra-Low Spreads",
      description: "Competitive spreads designed to maximise your edge.",
      detail: "Trade with Precision",
    },
    {
      icon: FeatureThree,
      metric: "90%",
      title: "Fast Withdrawals",
      description: "Access your funds quickly whenever you need them.",
      detail: "Withdraw with Ease",
    },
    {
      icon: FeatureFour,
      metric: "1:2000",
      title: "Powerful Leverage",
      description: "Flexible leverage to match your trading strategy.",
      detail: "Take Control",
    },
    {
      icon: FeatureFive,
      metric: "300+",
      title: "Global Instruments",
      description: "Explore a wide range of markets from one platform.",
      detail: "Explore Markets",
    },
    {
      icon: FeatureSix,
      metric: "24/7",
      title: "Dedicated Support",
      description: "Expert assistance whenever you need it, day or night.",
      detail: "Get Expert Support",
      featured: true,
    },
  ];

  if (category === "METALS") {
    return [
      {
        icon: FeatureTwo,
        metric: "0.0",
        title: "Ultra-Low Spreads",
        description: "Institutional raw spreads on gold and silver starting from 0.0 pips.",
        detail: "Trade with Precision",
      },
      {
        icon: FeatureFour,
        metric: "1:500",
        title: "High Leverage",
        description: "Amplify capital efficiency with flexible leverage up to 1:500 on precious metals.",
        detail: "Take Control",
      },
      {
        icon: FeatureThree,
        metric: "90%",
        title: "Fast Withdrawals",
        description: "Access your funds quickly whenever you need them.",
        detail: "Withdraw with Ease",
      },
      {
        icon: FeatureFive,
        metric: "4+",
        title: "Precious Metals",
        description: "Gold, Silver, Platinum, and Palladium quoted live against USD.",
        detail: "Explore Markets",
      },
      {
        icon: FeatureOne,
        metric: "23/5",
        title: "Extended Hours",
        description: "Precious metals trade 23 hours a day, 5 days a week with seamless execution.",
        detail: "Trade with Ease",
      },
      {
        icon: FeatureSix,
        metric: "24/7",
        title: "Dedicated Support",
        description: "Expert assistance whenever you need it, day or night.",
        detail: "Get Expert Support",
        featured: true,
      },
    ];
  }

  if (category === "INDEX CFDS") {
    return [
      {
        icon: FeatureOne,
        metric: "4+",
        title: "Global Indices",
        description: "Trade US Wall Street 30, NASDAQ 100, DAX 40, and FTSE 100 from one platform.",
        detail: "Explore Markets",
      },
      {
        icon: FeatureTwo,
        metric: "0.0",
        title: "Ultra-Low Spreads",
        description: "Institutional raw spreads on major indices for maximum trading efficiency.",
        detail: "Trade with Precision",
      },
      {
        icon: FeatureFour,
        metric: "1:2000",
        title: "Powerful Leverage",
        description: "Flexible leverage to match your index trading strategy and risk appetite.",
        detail: "Take Control",
      },
      {
        icon: FeatureFive,
        metric: "100+",
        title: "Global Companies",
        description: "Access leading companies from major economic regions around the world.",
        detail: "Explore Markets",
      },
      {
        icon: FeatureThree,
        metric: "90%",
        title: "Fast Withdrawals",
        description: "Access your funds quickly whenever you need them.",
        detail: "Withdraw with Ease",
      },
      {
        icon: FeatureSix,
        metric: "24/7",
        title: "Dedicated Support",
        description: "Expert assistance whenever you need it, day or night.",
        detail: "Get Expert Support",
        featured: true,
      },
    ];
  }

  if (category === "US STOCKS") {
    return [
      {
        icon: FeatureOne,
        metric: "1000+",
        title: "Global Equities",
        description: "Trade CFDs on Apple, Tesla, Amazon, Microsoft, and more major brands.",
        detail: "Explore Markets",
      },
      {
        icon: FeatureTwo,
        metric: "0.0",
        title: "Zero Commission",
        description: "No hidden commission fees — what you see is what you pay.",
        detail: "Trade with Precision",
      },
      {
        icon: FeatureFour,
        metric: "1:50",
        title: "Flexible Leverage",
        description: "Advanced risk management tools with leverage up to 1:50 on stock CFDs.",
        detail: "Take Control",
      },
      {
        icon: FeatureFive,
        metric: "24/7",
        title: "Extended Hours",
        description: "Extended trading hours on many stock CFDs beyond regular market times.",
        detail: "Trade with Ease",
      },
      {
        icon: FeatureThree,
        metric: "90%",
        title: "Fast Withdrawals",
        description: "Access your funds quickly whenever you need them.",
        detail: "Withdraw with Ease",
      },
      {
        icon: FeatureSix,
        metric: "24/7",
        title: "Dedicated Support",
        description: "Expert assistance whenever you need it, day or night.",
        detail: "Get Expert Support",
        featured: true,
      },
    ];
  }

  return baseCards;
};

const Features = ({ category, title = "Designed for Better Trading", eyebrow = "[ Why DollarX ]" }) => {
  const cards = getFeatureCards(category);

  return (
    <section
      className="relative z-0 min-h-180 overflow-hidden py-16 text-[#10131b] sm:py-20 lg:py-28 bg-[#05040b]"
    >
      <RetroGrid />
      <div className="mx-auto max-w-360 px-4 sm:px-8 lg:px-12">
        <div className="relative z-10 mb-12 max-w-2xl sm:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#1fa864]">{eyebrow}</p>
          <h2 className="max-w-xl text-4xl font-medium leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h2>
        </div>

        <div
          className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-12"
        >
          {cards.map((card) => (
            <div key={card.title}>
              <FeatureCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;