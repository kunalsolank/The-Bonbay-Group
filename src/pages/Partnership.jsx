import React from "react";
import { motion } from "framer-motion";
import PartnershipResults from "../components/PartnershipResults";
import FAQSection from "../components/subPagesComponents/FAQSection";
import ParaxEffectHeroSubSection from "#/components/subPagesComponents/ParaxEffectHeroSubSection.jsx";
import video from '../assets/Partnership/partnership.mp4';
import CardGrid from '../components/subPagesComponents/ThreeLinkCards';
import TabSection from "#/components/TabSection.jsx";
import { pernerShipDataTab, partnerSteps , parnershipBenefits} from '../data/partnershipData';
import FourStepSection from "#/components/FourStepSection.jsx";

const scrollAnimationProps = {
  initial: { opacity: 0, y: 45 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const Partnership = () => {
  const forexFAQs = [
    {
      question: " What is MetaTrader 5 (MT5)? ",
      answer:
        " MetaTrader 5 is a powerful trading platform used worldwide for trading forex, stocks, futures, and more. It offers fast execution and advanced tools to help traders make better decisions. ",
    },
    {
      question: " How is MT5 different from MT4? ",
      answer:
        " MT5 is the newer version of MT4, offering more asset types, improved charts, extra timeframes, and better tools. It supports multi-asset trading on one platform, unlike MT4. ",
    },
    {
      question: " Can beginners use MT5? ",
      answer:
        " Yes, MT5 is designed for all skill levels. Beginners can use its simple interface to start trading, while advanced traders can access sophisticated features and tools. ",
    },
    {
      question: " What devices can I use MT5 on? ",
      answer:
        " You can use MT5 on Windows and Mac computers, as well as on smartphones and tablets with iOS or Android. This lets you trade anytime, anywhere. ",
    },
    {
      question: " What are Expert Advisors (EAs) on MT5? ",
      answer:
        " Expert Advisors are automated trading robots that follow preset rules to trade for you. They allow you to trade 24/7 without needing to constantly watch the market. ",
    },
    {
      question: " Does MT5 support demo accounts? ",
      answer:
        " Yes, MT5 offers free demo accounts so you can practice trading with virtual money. This helps you learn the platform and test strategies before risking real money. ",
    },
    {
      question: " What is hedging in MT5? ",
      answer:
        " Hedging lets you open opposite trades on the same asset to reduce risk. It’s a useful feature to protect your investments in volatile markets. ",
    },
    {
      question: " Can I customize charts and indicators on MT5? ",
      answer:
        " Absolutely! MT5 provides many technical indicators and chart types. You can customize these to suit your trading style and analyze the markets more effectively. ",
    },
    {
      question: " Is MT5 safe and secure? ",
      answer:
        " Yes, MT5 uses strong encryption to protect your data and transactions. It follows strict security standards to ensure a safe trading environment. ",
    },
    {
      question: " How do I get started with MT5 on Dollrex Capital Ltd.? ",
      answer:
        " Sign up for a Dollrex Capital Ltd. account, download the MT5 app on your device, log in using your details, and you’re ready to start trading with all the platform’s features. ",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#080908]">
      {/* Hero Section */}
      <ParaxEffectHeroSubSection
        title="Partner with Dollrex Capital Ltd."
        highlight="Earn More, Every Day."
        highlightClassName="bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] bg-clip-text text-transparent font-bold drop-shadow-[0_0_30px_rgba(31,168,100,0.35)]"
        description="Enjoy fast payouts, and track your success in real-time. It’s simple, transparent, and built for your growth."
        video={video}
        eyebrow="Benefits"
        badges={[
          {
            label: "Benefits",
            href: "https://www.dollrexcapital.com/partnership/#Benefits",
            icon: "🎯",
            tone: "gradient",
            className: "bottom-[15%] left-[2%] sm:bottom-auto sm:top-[60%] sm:left-[8%]",
            rotate: 7,
            exitX: -70,
            exitY: 30,
          },
          {
            label: "Requirements",
            href: "https://www.dollrexcapital.com/partnership/#Requirements",
            icon: "📋",
            tone: "gradient",
            className: "bottom-[5%] right-[2%] sm:bottom-auto sm:top-[70%] sm:right-[8%]",
            rotate: -8,
            exitX: 70,
            exitY: 20,
          },
          {
            label: "Sponsorship Plans",
            href: "https://www.dollrexcapital.com/partnership/#Sponsorship_plans",
            icon: "🤝",
            tone: "dark",
            className: "hidden sm:block sm:top-[40%] sm:left-[2%]",
            rotate: -6,
            exitX: -80,
            exitY: 10,
          },
          {
            label: "How To",
            href: "https://www.dollrexcapital.com/partnership/#How_to",
            icon: "🚀",
            tone: "gold",
            className: "hidden sm:block sm:top-[42%] sm:right-[2%]",
            rotate: 6,
            exitX: 80,
            exitY: -10,
          },
          {
            label: "FAQs",
            href: "https://www.dollrexcapital.com/partnership/#FAQs",
            icon: "❓",
            tone: "gradient",
            className: "hidden sm:block sm:top-[25%] sm:right-[15%]",
            rotate: -4,
            exitX: 60,
            exitY: -20,
          },
        ]}
        buttonLink="https://portal.dollrexcapital.com/register-new/"
        buttonText="Become A IB"
        buttonClassName="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white uppercase font-bold tracking-wider px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm rounded-lg shadow-[0_0_24px_rgba(31,168,100,0.35)] hover:opacity-95 hover:scale-[1.03] transition-all cursor-pointer"
      />

      {/* Benefits Card Grid */}
      <motion.div {...scrollAnimationProps}>
        <CardGrid
          eyebrow="Partnership Benefits"
          heading="More than a partnership. A platform for growth."
          subheading="Everything you need to turn your network into a scalable, rewarding and long-term partnership with Dollrex Capital Ltd."
          accent="#1fa864"
          secondary="#3959a6"
          cards={parnershipBenefits}
        />
      </motion.div>

      {/* Tabs Section: Customer Benefits & Partner Benefits */}
      <motion.div {...scrollAnimationProps}>
        <TabSection
          heading="Partner With Us"
          title="In Our Partners"
          tabs={pernerShipDataTab}
        />
      </motion.div>

      {/* Results Bento Grid */}
      <motion.div {...scrollAnimationProps}>
        <PartnershipResults />
      </motion.div>

      {/* 4 Step Registration Process */}
      <motion.div {...scrollAnimationProps}>
        <FourStepSection
          heading="Steps to Become a Dollrex Capital Ltd Partner."
          steps={partnerSteps}
          theme="partnership"
          buttonText="Become A Partner"
          buttonLink="https://portal.dollrexcapital.com/register-new/"
        />
      </motion.div>

      {/* FAQ Section */}
      <motion.div {...scrollAnimationProps}>
        <FAQSection
          faqs={forexFAQs}
          eyebrow="FAQ"
          heading="Frequently Asked"
          highlightedHeading=" Questions"
          theme="partnership"
          description="Everything you need to know about Forex trading, currency pairs, leverage, and our platform."
          bottomText="Can't find what you're looking for?"
          bottomLinkText="Talk to our team →"
          ctaText="Become A Partner"
          ctaLink="https://portal.dollrexcapital.com/register-new/"
          onBottomLinkClick={() => {
            console.log("Contact clicked");
          }}
        />
      </motion.div>
    </div>
  );
};

export default Partnership;
