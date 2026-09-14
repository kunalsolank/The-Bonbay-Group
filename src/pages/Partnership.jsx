import React from "react";
import PartnershipHero from "../components/PartnershipHero";
import PartnershipBenefits from "../components/PartnershipBenefits";
import PartnershipAudience from "../components/PartnershipAudience";
import PartnershipResults from "../components/PartnershipResults";
import TradingSteps from "../components/subPagesComponents/TradingSteps";
import FAQSection from "../components/subPagesComponents/FAQSection";
const Partnership = () => {
  const forexFAQs = [
    {
      question: " What is MetaTrader 5 (MT5)? ",
      answer:
        " MetaTrader 5 is a powerful trading platform used worldwide for trading forex, stocks, futures, and more. It offers fast execution and advanced tools to help traders make better decisions. ",
    },
    {
      question: " How is MT5 different from MT4?  ",
      answer:
        " MT5 is the newer version of MT4, offering more asset types, improved charts, extra timeframes, and better tools. It supports multi-asset trading on one platform, unlike MT4. ",
    },
    {
      question: " Can beginners use MT5?  ",
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
        " Yes, MT5 offers free demo accounts so you can practice trading with virtual money. This helps you learn the platform and test strategies before risking real money.  ",
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
        "  Sign up for a Dollrex Capital Ltd. account, download the MT5 app on your device, log in using your details, and you’re ready to start trading with all the platform’s features.  ",
    },
  ];
  return (
    <div>
      <PartnershipHero />
      <PartnershipBenefits />
      <PartnershipAudience />
      <PartnershipResults />
      <TradingSteps
        eyebrow="Partnership"
        heading="Steps to Become a Dollrex Capital Ltd.   "
        highlight="Partner"
        points={[
          {
            number: "01",
            title: "Sign Up",
            description:
              "Fill out a short form to create your partner account - quick and easy.",
            icon: "◈",
          },
          {
            number: "02",
            title: "Choose Your Plan",
            description:
              "Pick the commission model that fits your audience and goals.",
            icon: "↗",
          },
          {
            number: "03",
            title: "Share Your Referral Link",
            description:
              "Use your custom link across websites, blogs, or social media to attract leads or clients.",
            icon: "⌁",
          },
          {
            number: "04",
            title: "Earn and Get Paid",
            description:
              "Earn as your leads or clients engage. Track everything live and enjoy quick payouts.",
            icon: "✓",
          },
        ]}
      />
      <FAQSection
        faqs={forexFAQs}
        eyebrow=" FAQ"
        heading="Frequently Asked"
        highlightedHeading=" Questions"
        description="Everything you need to know about Forex trading, currency pairs, leverage, and our platform."
        bottomText="Can't find what you're looking for?"
        bottomLinkText="Talk to our team →"
        onBottomLinkClick={() => {
          console.log("Contact clicked");
        }}
      />
    </div>
  );
};

export default Partnership;
