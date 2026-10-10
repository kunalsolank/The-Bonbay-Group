import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import MarketPlaceHeroSection from "../components/MarketPlaceHeroSection";
import BuiltForex from "../components/BuiltForex";
import ForexEdge from "../components/ForexEdge";
import FourStepSection from "../components/FourStepSection";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/subPagesComponents/FAQSection";
import GlobalTrading from "../components/GlobalTrading";
import Mt5Product from "#/components/Mt5Product.jsx";
import TradingCTA from "#/components/TradingCTA.jsx";
import BlogCardGrid from "#/components/blog/BlogCardGrid.jsx";

// ─────────────────────────────────────────────────────────────────────────────
// Animation Variants for Scroll Reveals
// ─────────────────────────────────────────────────────────────────────────────
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AnimatedSection = ({ children, className = "", delay = 0 }) => (
  <motion.div
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px 0px" }}
    transition={{
      duration: 0.85,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
    className={`w-full relative z-10 ${className}`}
  >
    {children}
  </motion.div>
);

/**
 * MarketPageTemplate — single reusable page template for all market pages
 * (Forex, Metals, Commodities, Indices, Stocks).
 *
 * Includes:
 * 1. Global scroll progress indicator bar (smooth gradient tracking).
 * 2. Subtle ambient background parallax glow drift on scroll.
 * 3. Smooth section-by-section scroll reveal animations.
 * 4. Floating Back-to-Top scroll trigger button.
 */
const MarketPageTemplate = ({
  marketType,
  category,
  // ── Hero Section ──────────────────────────────────────────────────────────
  heroTag,
  heroTitle,
  heroDescription,
  heroButtonText,
  heroButtonLink,
  heroStats,

  // ── Built / Features Section ──────────────────────────────────────────────
  builtTag,
  builtTitle,
  builtDescription,
  builtFeatures,
  builtCompliance,

  // ── Streamline / Edge Section ─────────────────────────────────────────────
  edgeSubtitle,
  edgeTitle,
  edgeDescription,

  // ── Global Trading Section ────────────────────────────────────────────────
  globalBadge,
  globalTitle,
  globalDescription,
  globalImage,
  globalImageAlt,
  globalHighlights,
  globalCtaText,
  globalCtaLink,
  globalReverse,

  // ── Three-Step Section ────────────────────────────────────────────────────
  stepsHeading,
  steps,
  stepsButtonText,
  stepsButtonLink,

  // ── About Section ─────────────────────────────────────────────────────────
  aboutTag,
  aboutHeading,
  aboutDescription,
  aboutStat1Value,
  aboutStat1Label,
  aboutStat2Value,
  aboutStat2Label,
  aboutButtonText,
  aboutButtonLink,
  aboutCompanyLogos,

  // ── FAQ / Power Section ───────────────────────────────────────────────────
  faqTag,
  faqTitle,
  faqDescription,
  faqFeatures,
  faqPowerItems,
  faqButtonText,
  faqButtonLink,

  // ── FAQ Accordion (FAQSection) ────────────────────────────────────────────
  faqs,
}) => {
  // ── Scroll progress tracking
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // ── Parallax drift for ambient glow orbs
  const glowY1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [0, -250]);

  // ── Scroll to top visibility toggle
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setShowScrollTop(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#05040b]" style={{ clipPath: "inset(0 0 0 0)" }}>
      {/* ── Scroll Progress Bar ───────────────────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.75 bg-linear-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] origin-left z-50 pointer-events-none"
        style={{
          scaleX,
          boxShadow:
            "0 0 12px rgba(31, 168, 100, 0.7), 0 0 24px rgba(37, 141, 135, 0.4)",
        }}
      />

      {/* ── Ambient Background Parallax Glow Orbs ─────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <motion.div
          style={{ y: glowY1 }}
          className="absolute -top-32 -left-32 w-137.5 h-137.5 rounded-full bg-linear-to-br from-[#1fa864]/10 to-transparent blur-[140px]"
        />
        <motion.div
          style={{ y: glowY2 }}
          className="absolute top-1/2 -right-32 w-125 h-125 rounded-full bg-linear-to-bl from-[#3959a6]/10 to-transparent blur-[150px]"
        />
      </div>

      {/* ── 1. Hero Section (Immediate entrance animation) ────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full"
      >
        <MarketPlaceHeroSection
          tag={heroTag}
          title={heroTitle}
          description={heroDescription}
          buttonText={heroButtonText}
          buttonLink={heroButtonLink}
          stats={heroStats}
        />
      </motion.div>

      {/* ── 2. Built / Features Section (Scroll reveal) ───────────────────── */}
       <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full"
      >
        <BuiltForex
          tag={builtTag}
          title={builtTitle}
          description={builtDescription}
          features={builtFeatures}
          compliance={builtCompliance}
        />
      </motion.div>

      {/* ── 3. Edge / Laptop Showcase Section (Scroll reveal) ─────────────── */}
      <AnimatedSection>
        <ForexEdge
          marketType={marketType || category}
          subtitle={edgeSubtitle}
          title={edgeTitle}
          description={edgeDescription}
        />
      </AnimatedSection>

      <AnimatedSection>
        <GlobalTrading
          badge={globalBadge}
          title={globalTitle}
          description={globalDescription}
          image={globalImage}
          imageAlt={globalImageAlt}
          highlights={globalHighlights}
          ctaText={globalCtaText}
          ctaLink={globalCtaLink}
          reverse={globalReverse}
        />
      </AnimatedSection>
      {/* Mt5  Product Section   */}
      <AnimatedSection>
        <Mt5Product/>
      </AnimatedSection>

      {/* ── 4. Three/Four Step Section (Scroll reveal) ────────────────────── */}
      <AnimatedSection>
        <FourStepSection
          heading={stepsHeading}
          steps={steps}
          buttonText={stepsButtonText}
          buttonLink={stepsButtonLink}
        />
      </AnimatedSection>

      {/* ── 5. About / Trust Section (Scroll reveal) ──────────────────────── */}
      {/* <AnimatedSection>
        <AboutSection
          tag={aboutTag}
          heading={aboutHeading}
          description={aboutDescription}
          stat1Value={aboutStat1Value}
          stat1Label={aboutStat1Label}
          stat2Value={aboutStat2Value}
          stat2Label={aboutStat2Label}
          buttonText={aboutButtonText}
          buttonLink={aboutButtonLink}
          companyLogos={aboutCompanyLogos}
        />
      </AnimatedSection> */}

      {/* ── 6. FAQ Accordion Section — no AnimatedSection wrapper so lg:sticky works ── */}
      <FAQSection
        faqs={faqs || []}
        eyebrow={faqTag || "FAQ"}
        heading={"Frequently Asked"}
        highlightedHeading={" Questions"}
        description={
          faqDescription ||
          "Find answers to the most common questions about trading, accounts, markets, and our platform."
        }
        ctaText={faqButtonText || "Get Started"}
        ctaLink={faqButtonLink || "/open-account"}
        bottomText="Still have questions?"
        bottomLinkText="Contact our support team →"
        reachOutLink="https://wa.me/"
      />

      {/* ── Floating Scroll-To-Top Button ──────────────────────────────────── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px rgba(31, 168, 100, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-40 w-11 h-11 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
        {/* <BlogCardGrid/> */}
      <TradingCTA />
    </div>
  );
};

export default MarketPageTemplate;
