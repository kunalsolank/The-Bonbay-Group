import React from "react";
import HeroSubSection from "../components/subPagesComponents/HeroSubSection";
import forexImage from "../assets/forexImg.webp";
import AccountComparison from "../components/subPagesComponents/AccountComparison";
import FAQSection from "../components/subPagesComponents/FAQSection";
import TradingCTA from "../components/TradingCTA";
const AccountCompare = () => {
  const forexFAQs = [
    {
      question: " What is a trading account? ",
      answer:
        " A trading account is a platform where you can buy and sell financial instruments like forex, stocks, or commodities. It holds your funds, tracks your trades, and helps you manage your market activity in one place.  ",
    },
    {
      question: " How do I open a trading account? ",
      answer:
        " Opening an account is simple. Just sign up online, fill in your details, upload ID proof for verification, and add funds using your preferred method. Once approved, you can start trading right away. ",
    },
    {
      question: " Do I need to choose between different account types? ",
      answer:
        " No, there’s only one powerful account with all the features you need. You don’t have to worry about selecting from multiple types—it’s built to suit every kind of trader. ",
    },
    {
      question: " Is this account good for beginners? ",
      answer:
        " Yes, it’s ideal for beginners. The setup is simple, the interface is user-friendly, and helpful resources are available to guide you step-by-step as you begin trading. ",
    },
    {
      question: " Can experienced traders use the same account? ",
      answer:
        " Definitely. The account comes with advanced tools, fast execution, and real-time data—perfect for experienced traders who want performance and simplicity in one place. ",
    },
    {
      question: " What markets can I trade with this account? ",
      answer:
        " You get access to a variety of markets including forex, commodities, indices, and stocks. It’s all available under one login, with no need for separate accounts. ",
    },
    {
      question: " Are there any hidden charges or fees? ",
      answer:
        " No, we believe in full transparency. All fees are clearly shown before you trade, so there are no surprises—just fair and open pricing. ",
    },
    {
      question: " How do I deposit or withdraw money? ",
      answer:
        " You can deposit or withdraw easily using cards, bank transfers, or e-wallets. The process is secure and quick, with most transactions processed in a short time. ",
    },
    {
      question: " Is my money safe in this account? ",
      answer:
        " Yes, your funds are protected with high-level encryption and stored securely. We follow strict safety and compliance standards to keep your money and data safe. ",
    },
    {
      question: " Can I get help if I face any issues?  ",
      answer:
        " Yes, our support team is always here to help. Whether you need assistance by chat, email, or phone, you’ll get fast, friendly, and reliable support whenever you need it.. ",
    },
  ];
  return (
    <div className="account-compare-page">
      <HeroSubSection
        eyebrow="Account Compare"
        title="Your All-in-One  "
        highlight="Trading Account."
        description="Say goodbye to confusing options. With just one simple and smart trading account, you get everything you need in one place. Easy access, clear features, and full control, so you can focus on what matters most: Trading with Confidence.Whether you're just starting or already experienced, this account is built to support you every step of the way."
        image={forexImage}
        buttonText="Start Trading"
        buttonLink="/open-account"
      />
      <AccountComparison />
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
      <TradingCTA />
    </div>
  );
};

export default AccountCompare;
