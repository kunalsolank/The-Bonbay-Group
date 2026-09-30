import GlobalTrustSection from "../components/GlobalTrustSection";
import AllTrade from "../components/AllTrade";
import GridSection from "../components/GridSection";
import FAQSection from "../components/FAQSection";
import HomeHeroBanner from "../components/HomeHeroBanner";
import PricingSection from "../components/PricingSection";
import TradingCTA from "../components/TradingCTA";
import Streamline from "../components/Streamline";
import Features from "../components/Features";
import TabSection from "../components/TabSection";
import IntegrationSection from "../components/IntegrationSection";
import ScrollProgress from "../components/ui/ScrollProgress";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="home-page">
      <ScrollProgress />
      <HomeHeroBanner />

      <ScrollReveal direction="up" delay={0.05}>
        <Features />
      </ScrollReveal>

      {/* <WhyDollrex /> */}
      {/* <SlideUpCards /> */}
      {/* <StepSwiper /> */}
      {/* <MarketExperience /> */}

      <ScrollReveal direction="up" delay={0.05}>
        <TabSection />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.05}>
        <PricingSection />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.05}>
        <Streamline />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.05}>
        <GlobalTrustSection />
      </ScrollReveal>

      {/* <ScrollReveal direction="up" delay={0.05}>
        <TrustAwards />
      </ScrollReveal> */}

      <ScrollReveal direction="up" delay={0.05}>
        <AllTrade />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.05}>
        <GridSection />
      </ScrollReveal>

      {/* <QuickWithdrawals /> */}

      <ScrollReveal direction="up" delay={0.05}>
        <TradingCTA />
      </ScrollReveal>

      {/* <IntegrationsShowcase /> */}

      <ScrollReveal direction="up" delay={0.05}>
        <IntegrationSection />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.05}>
        <FAQSection />
      </ScrollReveal>
    </main>
  );
}
