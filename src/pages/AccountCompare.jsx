import HeroSubSection from "../components/subPagesComponents/HeroSubSection";
import AccountComparison from "../components/subPagesComponents/AccountComparison";
import FAQSection from "../components/subPagesComponents/FAQSection";
import TradingCTA from "../components/TradingCTA";
import AccountCompareVideo from '../assets/AccountCompare.mp4'
import {forexFAQs} from '../data/AccountComparison'
const AccountCompare = () => {

  return (
    <div className="account-compare-page">
      <HeroSubSection
        eyebrow="Account Compare"
        title="Your All-in-One  "
        highlight="Trading Account."
        description="Say goodbye to confusing options. With just one simple and smart trading account, you get everything you need in one place. Easy access, clear features, and full control, so you can focus on what matters most: Trading with Confidence.Whether you're just starting or already experienced, this account is built to support you every step of the way."
        video={AccountCompareVideo}
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
