import HeroSubSection from "../components/subPagesComponents/HeroSubSection";
import forexImage from "../assets/forexImg.webp";
import HassleFreeDeposits from "../components/subPagesComponents/HassleFreeDeposits";
import SwiftWithdrawals from "../components/subPagesComponents/SwiftWithdrawals";
import TradingCTA from "../components/TradingCTA";
import DepositeHero from '../assets/DepositeHero.mp4'
const DipositWithdrawal = () => {
  return (
    <div>
      <HeroSubSection
        eyebrow="Deposit & Withdrawals"
        title="Quick & Easy Deposits and Withdrawals"
       
        description="Get instant access to your funds, whenever and wherever you need them—no stress, no delays."
        video={DepositeHero}
        buttonText="Start Trading"
        buttonLink="https://portal.dollrexcapital.com/register-new/"
      />
      <HassleFreeDeposits />
      <SwiftWithdrawals />
      <TradingCTA />
    </div>
  );
};

export default DipositWithdrawal;
