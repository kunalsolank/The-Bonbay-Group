import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSubSection from "../components/subPagesComponents/HeroSubSection";
import AboutSection from "../components/AboutSection";
import MetaTraderPlatforms from "../components/subPagesComponents/MetaTraderPlatforms";
import FourStepSection from "../components/FourStepSection";
import FAQSection from "../components/subPagesComponents/FAQSection";
import TradingCTA from "../components/TradingCTA";
import ScrollProgress from "../components/ui/ScrollProgress";
import ScrollReveal from "../components/ui/ScrollReveal";
import mt5 from "../assets/mt5.webp";
import HeroVideo from "../assets/heroSection.mp4";

const Platform = () => {
  // Smooth scroll tracking for subtle ambient parallax lighting
  const { scrollYProgress } = useScroll();
  const glowY1 = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const platforms = [
    {
      number: "01",
      title: "Forex",
      description:
        "Access major, minor, and exotic currency pairs with ultra-low spreads and high leverage.",
      image:
        "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/in-01.webp",
      link: "/markets/forex",
    },
    {
      number: "02",
      title: "Commodities",
      description:
        "Speculate on gold, silver, crude oil, and natural gas with competitive margins and zero hidden fees.",
      image:
        "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/in-02.webp",
      link: "/markets/commodities",
    },
    {
      number: "03",
      title: "Indices",
      description:
        "Trade global benchmark indices like US30, NAS100, and DAX40 with minimal slippage and deep liquidity.",
      image:
        "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/in-03.webp",
      link: "/markets/indices",
    },
    {
      number: "04",
      title: "Stocks",
      description:
        "Explore CFD trading on top global shares like Apple, Tesla, and Nvidia without owning the underlying asset.",
      image:
        "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/in-04.webp",
      link: "/markets/stocks",
    },
  ];

  const platformFAQs = [
    {
      question: "What is MetaTrader 5 (MT5)?",
      answer:
        "MetaTrader 5 is a next-generation multi-asset trading platform engineered for speed, deep analytical precision, and institutional reliability. It supports trading in Forex, Stocks, Indices, and Commodities with cutting-edge tools and algorithmic capabilities.",
    },
    {
      question: "How is MT5 different from MT4?",
      answer:
        "MT5 is the modernized successor to MT4, offering true multi-asset trading from a single account, 21 timeframes, 38 technical indicators, an integrated economic calendar, a 64-bit multi-threaded strategy tester, and advanced Depth of Market (DOM).",
    },
    {
      question: "Can beginners trade on MT5?",
      answer:
        "Yes, MT5 is designed for traders of all experience levels. Beginners can trade with an intuitive user interface, quick one-click orders, and practice risk-free with free demo accounts before transitioning to live capital.",
    },
    {
      question: "What devices and platforms does MT5 support?",
      answer:
        "You can run MT5 across Windows and macOS desktop applications, in any browser via MetaTrader 5 WebTrader, and on mobile through dedicated iOS and Android apps with full account synchronization.",
    },
    {
      question: "What are Expert Advisors (EAs) on MT5?",
      answer:
        "Expert Advisors are automated trading algorithms that execute trades based on programmed rules. MT5 allows you to build, test, and deploy EAs 24/7 with ultra-low latency execution via VPS integration.",
    },
    {
      question: "Does MT5 support free demo trading?",
      answer:
        "Yes, Dollrex Capital Ltd. provides complimentary demo accounts with real-time price feeds, allowing you to master the platform, backtest indicators, and refine trading strategies without financial risk.",
    },
    {
      question: "What is hedging mode in MT5?",
      answer:
        "Hedging enables traders to hold opposing long and short positions simultaneously on the same financial instrument, allowing advanced risk mitigation and flexible tactical execution during high-volatility events.",
    },
    {
      question: "Can I customize charts, indicators, and timeframes?",
      answer:
        "Absolutely. MT5 features completely customizable workspaces with 21 timeframes, detachable chart windows, unlimited indicator overlays, and access to thousands of community indicators via the MQL5 market.",
    },
    {
      question: "Is MT5 secure and reliable?",
      answer:
        "Yes. MT5 implements 128-bit encryption, strict server authorization, and multi-factor security. Combined with Dollrex's segregated tier-1 accounts and negative balance protection, your funds and trading data remain secure.",
    },
    {
      question: "How do I get started with MT5 on Dollrex Capital Ltd.?",
      answer:
        "Simply create your account with Dollrex Capital Ltd., complete our swift digital KYC verification, download the MT5 app on your preferred device, and start trading with spreads from 0.0 pips.",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Sign Up with Dollrex",
      description: "Create your free Dollrex Capital Ltd. trading account in just a few quick clicks.",
      delay: 0,
    },
    {
      number: 2,
      title: "Download MT5",
      description: "Install MetaTrader 5 on Windows, macOS, iOS, Android, or launch directly in your browser.",
      delay: 200,
    },
    {
      number: 3,
      title: "Log in & Explore",
      description: "Use your Dollrex credentials to explore 1000+ instruments, live charts, and institutional tools.",
      delay: 400,
    },
    {
      number: 4,
      title: "Start Trading Smart",
      description: "Pick your asset, place orders with sub-millisecond execution, and trade with raw spreads.",
      delay: 600,
    },
  ];

  return (
    <main
      className="relative min-h-screen bg-[#05040b] text-white selection:bg-[#00ff87]/30 selection:text-white"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      {/* ── 1. Top Scroll Progress Indicator (Green Theme) ── */}
      <ScrollProgress />

      {/* ── 2. Ambient Parallax Background Glow Orbs (Pure Emerald/Green) ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <motion.div
          style={{ y: glowY1 }}
          className="absolute -top-40 -left-40 h-[550px] w-[550px] rounded-full bg-[#00ff87]/[0.08] blur-[150px]"
        />
        <motion.div
          style={{ y: glowY2 }}
          className="absolute top-1/2 -right-40 h-[550px] w-[550px] rounded-full bg-[#1fa864]/[0.07] blur-[150px]"
        />
        <div className="absolute bottom-20 left-1/3 h-[450px] w-[450px] rounded-full bg-[#00ff87]/[0.05] blur-[140px]" />
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
      <section className="relative z-10 overflow-hidden bg-[#05040b] py-20 sm:py-28 lg:py-32">
        {/* Ambient Brand Green Glow */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-[#00ff87]/12 blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[420px] w-[420px] rounded-full bg-[#10b981]/12 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Centered Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
          >
            {/* Pill Eyebrow Badge (Green Theme) */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00ff87]/35 bg-[#00ff87]/10 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,135,0.18)]">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#00ff87]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#00ff87]">
                Multi-Asset Liquidity
              </span>
            </div>

            {/* Title (Pure Vibrant Green Gradient) */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.08]">
              Trade What Moves{" "}
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#00ff87] via-[#10b981] to-[#1fa864] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,255,135,0.35)]">
                The Global Market
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-white/65 leading-relaxed font-normal">
              Access deep institutional liquidity and ultra-fast execution across global asset classes, engineered natively for MetaTrader 5.
            </p>
          </motion.div>

          {/* Platform Cards Grid with Staggered Scroll Reveal & Green Accents */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative h-[480px] sm:h-[500px] overflow-hidden rounded-2xl border border-white/10 bg-[#07090e]/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#00ff87]/60 hover:shadow-[0_20px_50px_rgba(0,255,135,0.22)]"
              >
                {/* Luminous Green Top Hover Line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff87] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-30" />

                {/* Card Background Image */}
                <img
                  src={platform.image}
                  alt={platform.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05040b] via-[#05040b]/60 to-transparent" />

                {/* Default Title State */}
                <div className="absolute bottom-0 left-0 z-20 w-full p-6 sm:p-7 transition-all duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
                  <div className="mb-2.5 flex items-center gap-2.5">
                    <span className="h-px w-6 bg-[#00ff87]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#00ff87]">
                      {platform.number}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                    {platform.title}
                  </h3>
                </div>

                {/* Interactive Hover Drawer (Green Accent) */}
                <div className="absolute bottom-0 left-0 z-20 w-full translate-y-full border-t border-[#00ff87]/25 bg-[#07090e]/95 p-6 sm:p-7 backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                  {/* Watermark Number & Eyebrow */}
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="h-px w-6 bg-[#00ff87]" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00ff87]">
                        MetaTrader 5
                      </span>
                    </div>
                    <span className="font-mono text-3xl font-semibold bg-gradient-to-b from-[#00ff87]/40 to-transparent bg-clip-text text-transparent select-none">
                      {platform.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                    {platform.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {platform.description}
                  </p>

                  {/* Link / CTA */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#00ff87] transition-all">
                    <span>Trade Anywhere</span>
                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
