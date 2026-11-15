import { useState, useRef, useCallback, memo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

/* ------------------------------------------------------------------
   Single FAQ item — memoized so only the items whose `isOpen` prop
   changes (the one closing + the one opening) re-render.
------------------------------------------------------------------- */
const FAQItem = memo(function FAQItem({ faq, index, isOpen, onToggle, theme = "default" }) {
  const isPartnership = theme === "partnership" || theme === "gradient";

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
      onClick={() => onToggle(index)}
      className={`
        group relative cursor-pointer rounded-2xl border
        transition-all duration-500 overflow-hidden will-change-transform
        ${
          isOpen
            ? isPartnership
              ? "border-[#1fa864]/50 bg-[#0c1015] shadow-[0_0_40px_rgba(31,168,100,0.2)]"
              : "border-[#00ff87]/40 bg-[#111111] shadow-[0_0_40px_rgba(0,255,135,0.12)]"
            : isPartnership
            ? "border-[#1c1c1c] bg-[#090b0e] hover:-translate-y-1 hover:border-[#1fa864]/50 hover:bg-[#0e1319] hover:shadow-[0_16px_40px_rgba(31,168,100,0.2)]"
            : "border-[#1c1c1c] bg-[#0d0d0d] hover:-translate-y-1 hover:border-[#00ff87]/40 hover:bg-[#101411] hover:shadow-[0_16px_40px_rgba(0,255,135,0.16)]"
        }
      `}
    >
      <div
        className={`pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 ${
          isPartnership
            ? "bg-gradient-to-r from-[#1fa864]/20 via-[#258d87]/20 to-[#3959a6]/20"
            : "bg-gradient-to-r from-[#00ff87]/20 via-[#10b981]/20 to-[#1fa864]/20"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          isPartnership
            ? "bg-gradient-to-r from-transparent via-[#1fa864]/60 to-transparent"
            : "bg-gradient-to-r from-transparent via-[#00ff87]/60 to-transparent"
        }`}
      />

      {/* Question row */}
      <div className="relative z-10 flex items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6">
        <div className="flex items-center gap-3 sm:gap-5">
          <span
            className={`
              text-xs sm:text-sm font-mono flex-shrink-0 transition-colors duration-300
              ${
                isOpen
                  ? isPartnership
                    ? "text-[#20d882]"
                    : "text-[#00ff87]"
                  : "text-[#444] group-hover:text-[#666]"
              }
            `}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3
            className={`
              text-sm sm:text-base md:text-lg font-medium transition-colors duration-300
              ${isOpen ? "text-white" : "text-[#ccc] group-hover:text-white"}
            `}
          >
            {faq.question}
          </h3>
        </div>

        {/* +/× toggle icon */}
        <div
          className={`
            flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full
            border flex items-center justify-center
            transition-all duration-500
            ${
              isOpen
                ? isPartnership
                  ? "rotate-45 bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] border-transparent text-white shadow-[0_0_16px_rgba(31,168,100,0.4)]"
                  : "rotate-45 bg-[#00ff87] border-[#00ff87]"
                : isPartnership
                ? "border-[#2e2e2e] group-hover:border-[#1fa864]/60"
                : "border-[#2e2e2e] group-hover:border-[#00ff87]/60"
            }
          `}
        >
          <span
            className={`text-lg sm:text-xl leading-none transition-colors ${
              isOpen ? (isPartnership ? "text-white" : "text-black") : "text-white"
            }`}
          >
            +
          </span>
        </div>
      </div>

      {/* Collapsible answer */}
      <div
        className={`relative z-10 grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-5 pl-4 sm:px-6 sm:pb-7 sm:pl-[52px] md:px-8 md:pl-[76px]">
            <div className="h-px w-full bg-[#1c1c1c] mb-4 sm:mb-5" />
            <p className="text-[#858585] text-xs sm:text-sm md:text-base leading-6 sm:leading-7 max-w-3xl">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

/* ------------------------------------------------------------------
   Left title block — memoized so opening an FAQ never touches it.
------------------------------------------------------------------- */
const FAQHeader = memo(function FAQHeader({
  eyebrow,
  heading,
  highlightedHeading,
  description,
  ctaText,
  ctaLink,
  bottomText,
  bottomLinkText,
  onBottomLinkClick,
  hintOpacity,
  theme = "default",
  buttonClassName,
}) {
  const isPartnership = theme === "partnership" || theme === "gradient";

  return (
    <div className="lg:sticky lg:top-24 lg:self-start h-fit overflow-visible">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className={`h-px w-8 ${
              isPartnership
                ? "bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6]"
                : "bg-[#00ff87]"
            }`}
          />
          <p
            className={`uppercase tracking-[0.25em] text-xs font-semibold ${
              isPartnership
                ? "bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] bg-clip-text text-transparent font-bold"
                : "text-[#00ff87]"
            }`}
          >
            {eyebrow}
          </p>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white leading-[1.06] tracking-tight">
          {heading}
          <span
            className={
              isPartnership
                ? "bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(31,168,100,0.35)]"
                : "text-[#00ff87] drop-shadow-[0_0_20px_rgba(0,255,135,0.35)]"
            }
          >
            {highlightedHeading}
          </span>
        </h2>

        {/* Description */}
        <p className="text-[#777] mt-6 text-sm md:text-base leading-7 max-w-xs">
          {description}
        </p>

        {/* CTA button */}
        {ctaText && (
          <motion.a
            href={ctaLink}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={
              buttonClassName ||
              (isPartnership
                ? "inline-flex items-center justify-center mt-8 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_24px_rgba(31,168,100,0.35)] hover:shadow-[0_0_40px_rgba(31,168,100,0.55)] transition-all duration-300 cursor-pointer"
                : "inline-flex items-center justify-center mt-8 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00ff87] via-[#10b981] to-[#1fa864] text-black font-semibold text-sm shadow-[0_0_30px_rgba(0,255,135,0.35)] hover:shadow-[0_0_48px_rgba(0,255,135,0.55)] transition-shadow duration-300")
            }
          >
            {ctaText}
          </motion.a>
        )}

        {/* Still have questions */}
        {bottomText && (
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-[#555] text-sm leading-6">
              {bottomText}
              <br />
              <span
                onClick={onBottomLinkClick}
                className={`cursor-pointer hover:underline font-medium ${
                  isPartnership ? "text-[#20d882]" : "text-[#00ff87]"
                }`}
              >
                {bottomLinkText}
              </span>
            </p>
          </div>
        )}

        {/* Scroll indicator — opacity is a stable motion value from parent */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="hidden lg:flex items-center gap-2 mt-10"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/20 text-lg"
          >
            ↓
          </motion.span>
          <span className="text-[#444] text-xs uppercase tracking-[0.2em]">
            Scroll to read
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
});

const FAQSection = ({
  faqs = [],
  eyebrow = "FAQ",
  heading = "Frequently Asked",
  highlightedHeading = " Questions",
  description = "Find answers to the most common questions about trading, accounts, markets, and our platform.",
  ctaText = "Get Started",
  ctaLink = "/open-account",
  bottomText = "Still have questions?",
  bottomLinkText = "Contact our support team →",
  onBottomLinkClick,
  reachOutLink = "https://wa.me/",
  theme = "default",
  buttonClassName,
}) => {
  const isPartnership = theme === "partnership" || theme === "gradient";
  const [activeIndex, setActiveIndex] = useState(null);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001,
  });

  // Hook called at top level (NOT inline in JSX) so it's created once.
  const hintOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  // Stable function identity so memoized items don't re-render.
  const toggleFAQ = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#080808] py-14 sm:py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -left-40 top-40 w-96 h-96 rounded-full blur-[140px] ${
            isPartnership
              ? "bg-gradient-to-r from-[#1fa864]/15 via-[#258d87]/15 to-[#3959a6]/15"
              : "bg-[#20a46a]/10"
          }`}
        />
        <div
          className={`absolute -right-40 bottom-20 w-96 h-96 rounded-full blur-[140px] ${
            isPartnership
              ? "bg-gradient-to-r from-[#1fa864]/10 via-[#258d87]/10 to-[#3959a6]/10"
              : "bg-[#20a46a]/5"
          }`}
        />
      </div>

      <div className="relative w-[90%] max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-10 lg:gap-24 items-start">
          <FAQHeader
            eyebrow={eyebrow}
            heading={heading}
            highlightedHeading={highlightedHeading}
            description={description}
            ctaText={ctaText}
            ctaLink={ctaLink}
            bottomText={bottomText}
            bottomLinkText={bottomLinkText}
            onBottomLinkClick={onBottomLinkClick}
            hintOpacity={hintOpacity}
            theme={theme}
            buttonClassName={buttonClassName}
          />

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.id ?? faq.question ?? index}
                faq={faq}
                index={index}
                isOpen={activeIndex === index}
                onToggle={toggleFAQ}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating chat button */}
      <motion.a
        href={reachOutLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center ${
          isPartnership
            ? "bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] shadow-[0_8px_30px_rgba(31,168,100,0.4)] text-white"
            : "bg-[#20a46a] shadow-[0_8px_30px_rgba(32,164,106,0.4)]"
        }`}
        aria-label="Chat with support"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isPartnership ? "white" : "black"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </motion.a>
    </section>
  );
};

export default FAQSection;