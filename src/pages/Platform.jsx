import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSubSection from "../components/subPagesComponents/HeroSubSection";
import AboutSection from "../components/AboutSection";
import MetaTraderPlatforms from "../components/subPagesComponents/MetaTraderPlatforms";
import FourStepSection from "../components/FourStepSection";
import FAQSection from "../components/subPagesComponents/FAQSection";
import TradingCTA from "../components/TradingCTA";
import ScrollProgress from "../components/ui/ScrollProgress";
import ScrollReveal from "../components/ui/ScrollReveal";
import mt5 from "../assets/platform/mt5.png";
import HeroVideo from "../assets/heroSection.mp4";
import { platformFAQs, platforms, steps } from "../data/PlatformData";
import CardGridSection from "#/components/subPagesComponents/CardGridSection.jsx";


const Platform = () => {
  // Smooth scroll tracking for subtle ambient parallax lighting
  const { scrollYProgress } = useScroll();
  const glowY1 = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#05040b] text-white selection:bg-[#00ff87]/30 selection:text-white">
      {/* ── 1. Top Scroll Progress Indicator (Green Theme) ── */}
      <ScrollProgress />

      {/* ── 2. Ambient Parallax Background Glow Orbs (Pure Emerald/Green) ── */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: glowY1 }}
          className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-[#00ff87]/8 blur-[120px] sm:-top-40 sm:-left-40 sm:h-[450px] sm:w-[450px] sm:blur-[150px]"
        />
        <motion.div
          style={{ y: glowY2 }}
          className="absolute top-1/2 -right-32 h-64 w-64 rounded-full bg-[#1fa864]/[0.07] blur-[120px] sm:-right-40 sm:h-[450px] sm:w-[450px] sm:blur-[150px]"
        />
        <div className="absolute bottom-20 left-1/3 h-56 w-56 rounded-full bg-[#00ff87]/5 blur-[100px] sm:h-95 sm:w-95 sm:blur-[140px]" />
      </div>

      {/* ── 3. Hero Section ── */}
      <HeroSubSection
        eyebrow="Next-Gen Multi-Asset Platform"
        title="Accelerate Your Trading with "
        highlight="MT5 Platform"
        description="Join millions of traders worldwide using MetaTrader 5 for ultra-fast execution, advanced analytics, and institutional reliability."
        video={HeroVideo}
        image="/images/hero-poster.jpg"
        buttonText="Get Started"
        buttonLink="https://portal.dollrexcapital.com/register-new/"
      />

      {/* ── 4. About MT5 Section (Green UI & Reveal) ── */}
      <ScrollReveal direction="up" delay={0.05}>
        <AboutSection
          tag="Seamless Experience"
          heading="What is MetaTrader 5 (MT5)?"
          description="Experience a smarter and more seamless way to manage your financial journey. From your first deposit to your next market opportunity, everything is engineered around institutional speed, transparency, and multi-asset control."
          stat1Value="1000+"
          stat1Label="Tradable Instruments"
          stat2Value="< 30ms"
          stat2Label="Execution Latency"
          buttonText="Get Started"
          buttonLink="https://portal.dollrexcapital.com/register-new/"
          image={mt5}
          imageAlt="MetaTrader 5 platform"
        />
      </ScrollReveal>

      {/* ── 5. Platform Download Options (Desktop, Mobile, Web) ── */}
      <ScrollReveal direction="up" delay={0.05}>
        <MetaTraderPlatforms />
      </ScrollReveal>

      {/* ── 6. Four Step Setup Guide (Brand Theme & Reveal) ── */}
      <ScrollReveal direction="up" delay={0.05}>
        <FourStepSection
          heading="Start Trading on MT5 in 4 Simple Steps"
          steps={steps}
          buttonText="Get Started"
          buttonLink="https://portal.dollrexcapital.com/register-new/"
          theme="brand"
        />
      </ScrollReveal>

      {/* ── 7. Tradable Markets Section (Vibrant Green UI) ── */}
      <section className="relative z-10 overflow-hidden bg-[#05040b] py-14 sm:py-24 lg:py-32">
        {/* Ambient Brand Green Glow */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-56 w-56 rounded-full bg-[#00ff87]/10 blur-[100px] sm:-left-40 sm:h-96 sm:w-96 sm:blur-[150px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-56 w-56 rounded-full bg-[#10b981]/10 blur-[100px] sm:-right-40 sm:h-96 sm:w-96 sm:blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Centered Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10 max-w-3xl text-center sm:mb-16"
          >
            {/* Pill Eyebrow Badge (Green Theme) */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00ff87]/35 bg-[#00ff87]/10 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,135,0.18)]">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#00ff87]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#00ff87] sm:text-[11px]">
                Multi-Asset Liquidity
              </span>
            </div>

            {/* Title (Pure Vibrant Green Gradient) */}
            <h2 className="text-2xl font-medium tracking-tight text-white leading-[1.12] sm:text-4xl md:text-5xl lg:text-6xl sm:leading-[1.08]">
              Trade What Moves{" "}
              <br className="hidden sm:inline" />
              <span className="bg-linear-to-r from-[#00ff87] via-[#10b981] to-[#1fa864] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,255,135,0.35)]">
                The Global Market
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65 font-normal sm:mt-5 sm:text-lg">
              Access deep institutional liquidity and ultra-fast execution across global asset classes, engineered natively for MetaTrader 5.
            </p>
          </motion.div>

          {/* Platform Cards Grid with Staggered Scroll Reveal & Green Accents */}
          <CardGridSection
            items={platforms}
            minItemWidth="250px"
            gap="1.5rem"
          />
        </div>
      </section>

      {/* ── 8. Platform FAQ Accordion (Sticky Header, No Extra Overflow) ── */}
      <FAQSection
        faqs={platformFAQs}
        eyebrow="Platform FAQ"
        heading="Frequently Asked"
        highlightedHeading=" Questions"
        description="Everything you need to know about MetaTrader 5, multi-asset trading, setup, and Dollrex tools."
        bottomText="Can't find what you're looking for?"
        bottomLinkText="Talk to our team →"
        onBottomLinkClick={() => {
          window.location.href = "/contact";
        }}
      />

      {/* ── 9. Final Trading CTA Banner (Green Theme) ── */}
      <ScrollReveal direction="up" delay={0.05}>
        <TradingCTA theme="green" />
      </ScrollReveal>
    </main>
  );
};

export default Platform;
