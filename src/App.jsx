import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StepSwiper from "./components/StepSwiper";
import GlobalTrustSection from "./components/GlobalTrustSection";
import AllTrade from "./components/AllTrade";
import GridSection from "./components/GridSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import AboutUs from "./pages/Aboutus";
import Forex from "./pages/Forex";
import Contactus from "./pages/Contactus";
import Commodities from "./pages/Commodities";
import Indices from "./pages/Indices";
import Stocks from "./pages/Stocks";
import AccountCompare from "./pages/AccountCompare";
import DipositWithdrawal from "./pages/DipositWithdrawal";
import Platform from "./pages/Platform";
import EconomicCalendar from "./pages/EconomicCalendar";
import Partnership from "./pages/Partnership";
import HomeHeroBanner from "./components/HomeHeroBanner";
import PricingSection from "./components/PricingSection";
import TradingCTA from "./components/TradingCTA";
import Streamline from "./components/Streamline";
import Features from "./components/Features";
import QuickWithdrawals from "./components/QuickWithdrawals";
import Header from "./components/Header";
import TabSection from "./components/TabSection";
import WhyDollrex from "./components/WhyDollrex";
import SlideUpCards from "./components/SlideUpCards";
import IntegrationsShowcase from "./components/IntegrationsShowcase";
import IntegrationSection from "./components/IntegrationSection";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ui/ScrollProgress";
import ScrollReveal from "./components/ui/ScrollReveal";

function Home() {
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

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-black">
        <BrowserRouter>
          <div className="w-full min-h-screen bg-black">
            {/* <Navbar /> */}
            <Header />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/forex" element={<Forex />} />
              <Route path="/commodities" element={<Commodities />} />
              <Route path="/indices" element={<Indices />} />
              <Route path="/stocks" element={<Stocks />} />
              <Route path="/account-compare" element={<AccountCompare />} />
              <Route
                path="/deposit-withdrawals"
                element={<DipositWithdrawal />}
              />
              <Route path="/platform" element={<Platform />} />
              <Route path="/economic-calendar" element={<EconomicCalendar />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/contactus" element={<Contactus />} />
            </Routes>

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
