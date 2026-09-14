import React from "react";
import HeroSubSection from "../components/subPagesComponents/HeroSubSection";
import FAQSection from "../components/subPagesComponents/FAQSection";
import forexImage from "../assets/forexImg.webp";
import HassleFreeDeposits from "../components/subPagesComponents/HassleFreeDeposits";
import SwiftWithdrawals from "../components/subPagesComponents/SwiftWithdrawals";
import TradingCTA from "../components/TradingCTA";
const DipositWithdrawal = () => {
  return (
    <div>
      <HeroSubSection
        eyebrow="Deposit & Withdrawals"
        title="Quick & Easy Deposits and  "
        highlight="Withdrawals"
        description="Get instant access to your funds, whenever and wherever you need them—no stress, no delays."
        image={forexImage}
        buttonText="Start Trading"
        buttonLink="/open-account"
      />
      <HassleFreeDeposits />
      <SwiftWithdrawals />
      <TradingCTA />
    </div>
  );
};

export default DipositWithdrawal;
