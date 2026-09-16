import React from "react";
import FeatureCard from "./FeatureCard";
import RetroGrid from "./ui/RetroGrid";

import FeatureOne from "../assets/stock.png";
import FeatureTwo from "../assets/Ultimate Security.png";
import FeatureThree from "../assets/Fair Governance.png";
import FeatureFour from "../assets/User Agency.png";
import FeatureFive from "../assets/Reliable Systems.png";
import FeatureSix from "../assets/Seamless Interoperability.png";

const featureCards = [
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



const Features = () => (
    <section
        className="relative z-0 min-h-[720px] overflow-hidden py-16 text-[#10131b] sm:py-20 lg:py-28"
        style={{ backgroundColor: "#080908" }}
    >
        <RetroGrid
            className="inset-x-[-20%] bottom-[-18%] h-[72%] w-[140%]"
            angle={65}
            cellSize={60}
            opacity={0.45}
            lineColor="31 168 100"
        />
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
            <div className="relative z-10 mb-12 max-w-2xl sm:mb-16">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#1fa864]">[ Why DollarX ]</p>
                <h2 className="max-w-xl text-4xl font-medium leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl">
                   Designed for Better Trading
                </h2>
            </div>

            <div
                className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-12"
            >
                {featureCards.map((card) => (
                    <div key={card.title}>
                        <FeatureCard {...card} />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Features;
