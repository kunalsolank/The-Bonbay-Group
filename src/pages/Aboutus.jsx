import React from "react";

import HeroSubSection from "#/components/subPagesComponents/HeroSubSection.jsx";
import HeroVideo from "../assets/about/about.mp4"
import StatsSection from "#/components/ui/Statssection.jsx";
import SideChartLayout from "#/components/subPagesComponents/Sidechartlayout.jsx";
import FoundationSection from "#/components/subPagesComponents/FoundationSection.jsx";
import TradingCTA from "#/components/TradingCTA.jsx";
import { Globe2, Rocket } from "lucide-react";
import ThreeLinkCards from "../components/subPagesComponents/ThreeLinkCards";
import a1 from "../assets/about/a1.webp"
import a2 from "../assets/about/a2.webp"
import a3 from "../assets/about/a3.webp"
const stats = [
  {
    value: "250+",
    label: "Trading Instruments",
  },
  {
    value: "24/5",
    label: "Market Access",
  },
  {
    value: "50+",
    label: "Global Markets",
  },
  {
    value: "0.0*",
    label: "Spreads From",
  },
];
const MissionVision = [
  {
    number: "01",
    label: "Mandate",
    title: "Our Mission",
    description:
      "Our mission is to redefine online trading with a modern, inclusive approach. We aim to be the first name people think of when they want to trade—because they know we put them first. Every product we build, every update we launch, and every decision we make is guided by one core purpose: to serve and support our traders.\n\nWe are committed to building better tools, breaking down barriers, and staying ahead of the curve—so our traders always have the edge they need.",
    Icon: Rocket,
    tags: ["Trader First", "Better Tools", "Inclusive Trading"],
  },
  {
    number: "02",
    label: "Horizon",
    title: "Our Vision",
    description:
      "We envision a future where online trading is no longer reserved for the few—but open, fair, and thriving for all. We strive to lead this transformation by eliminating outdated systems, modernizing the trading experience, and growing alongside our community.\n\nWe’re not just growing a company—we’re growing a movement. A movement of empowered traders, ethical practices, and global progress. With every new partnership, every new market, and every new trader, Dollrex Capital Ltd. is proud to stand at the frontlines of that change.",
    Icon: Globe2,
    tags: ["Global Access", "Ethical Practices", "Market Innovation"],
  },

];



const AboutUs = () => {
  return (
    <main className="overflow-hidden bg-[#10120d] text-white ">
      {/* =====================================================
          HERO
      ====================================================== */}

      <HeroSubSection
        align="left"
        accent="#20a46a"
        decor
        scrollHint
        video={HeroVideo}
        eyebrow="About Us"
        title="Dollrex Capital Ltd. Trade Bold."
        highlight="Trade Smart."
        description="Explore the Global Currency Market Traded by Millions Daily with Us."
        buttonText="Start Trading"
        buttonLink="/signup"
        secondaryButtonText="Explore Markets"
        secondaryButtonLink="/markets"
        stats={[]}
      />

      {/* =====================================================
          STATS - LIGHT SECTION
      ====================================================== */}

      <StatsSection stats={stats} />

      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <SideChartLayout
        reverse
        accent="#00ff87"
        eyebrow="Our Results"
        title={<>Growth that <span style={{ color: "#00ff87" }}>compounds.</span></>}
        paragraphs={["Dollrex Capital Ltd. is a globally accessible, trader-first ECN financial broker, proudly serving clients across Asia, the Middle East, and beyond. From first-time traders to seasoned professionals, we offer a fair and reliable space to grow, backed by cutting-edge technology and a human approach."]}
        footerText="Trusted worldwide"
        chart={{
          chartLabel: "Account Growth",
          statusLabel: "Real-time",
          growthLabel: "Yearly Return",
          growthValue: "+41.8%",
          metaLabel: "Support",
          metaValue: "24 / 7",
          floatingLabel: "Verified",
          path: "M20 250 L100 200 L180 220 L260 120 L340 150 L420 60 L480 40",
          endPoint: { x: 480, y: 40 },
        }}
      />

      <FoundationSection cards={MissionVision} />
      <ThreeLinkCards

        heading="What Drives Us"
        subheading=""
        cards={[
          {
            title: "Transparency",
            description:
              "Clear pricing structures, execution statistics, and regulatory disclosures build trust through verifiable operational standards and institutional-grade reporting accessible to all clients.",
            image: a3,
            link: "/markets",
          },
          {
            title: "Reliability",
            description:
              "Consistent platform uptime, segregated banking custody, and 24/5 multilingual support ensure dependable trading infrastructure for professional market participants worldwide.",
            image:a2,
            link: "/accounts",
          },
          {
            title: "Innovation",
            description:
              "Continuous platform upgrades, liquidity aggregation expansion, and educational resource development drive technological advancement and enhanced trader capability across asset classes.",
            image:a1,
            link: "/platform",
          },
        ]}
      />


      <TradingCTA />
    </main>
  );
};

export default AboutUs;
