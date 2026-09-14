import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

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
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  /* ----------------------------------------------------------------
     SCROLL TRACKING — kept only for the small "scroll to read"
     indicator fade.
  ---------------------------------------------------------------- */
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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#080808] py-24"
    >
      {/* Background ambient glows — clipped in their own wrapper,
          since overflow-hidden was removed from the section itself
          (it breaks sticky positioning below) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-40 top-40 w-96 h-96 bg-[#20a46a]/10 rounded-full blur-[140px]" />
        <div className="absolute -right-40 bottom-20 w-96 h-96 bg-[#20a46a]/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative w-[90%] max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-14 lg:gap-24 items-start">

          {/* =====================================================
              LEFT — TITLE BLOCK
              Sticky only on desktop (lg+). On mobile it's a plain,
              normal static block that just flows above the FAQ list.
          ====================================================== */}
          <div className="lg:sticky lg:top-24 lg:self-start h-fit overflow-visible">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-[#20a46a]" />
                <p className="uppercase tracking-[0.25em] text-[#20a46a] text-xs font-semibold">
                  {eyebrow}
                </p>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white leading-[1.06] tracking-tight">
                {heading}
                <span className="text-[#20a46a]">{highlightedHeading}</span>
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
                  className="inline-flex items-center justify-center mt-8 px-7 py-3.5 rounded-full bg-[#20a46a] text-black font-semibold text-sm shadow-[0_0_30px_rgba(32,164,106,0.25)] hover:shadow-[0_0_48px_rgba(32,164,106,0.42)] transition-shadow duration-300"
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
                      className="text-[#20a46a] cursor-pointer hover:underline"
                    >
                      {bottomLinkText}
                    </span>
                  </p>
                </div>
              )}

              {/* Subtle scroll indicator — only on desktop, fades once user scrolls */}
              <motion.div
                style={{ opacity: useTransform(smoothProgress, [0, 0.15], [1, 0]) }}
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

          {/* =====================================================
              RIGHT — SCROLLABLE FAQ ACCORDION
          ====================================================== */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
                  onClick={() => toggleFAQ(index)}
                  className={`
                    group relative cursor-pointer rounded-2xl border
                    transition-all duration-500 overflow-hidden will-change-transform
                    ${
                      isOpen
                        ? "border-[#20a46a]/40 bg-[#111111] shadow-[0_0_40px_rgba(32,164,106,0.08)]"
                        : "border-[#1c1c1c] bg-[#0d0d0d] hover:-translate-y-1 hover:border-[#20a46a]/35 hover:bg-[#101411] hover:shadow-[0_16px_40px_rgba(32,164,106,0.14)]"
                    }
                  `}
                >
                  <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00d2ff]/15 via-[#00ff87]/20 to-[#2563eb]/15 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-[#00ff87]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Question row */}
                  <div className="relative z-10 flex items-center justify-between gap-6 px-6 py-5 md:px-8 md:py-6">
                    <div className="flex items-center gap-5">
                      <span
                        className={`
                          text-sm font-mono flex-shrink-0 transition-colors duration-300
                          ${isOpen ? "text-[#20a46a]" : "text-[#444] group-hover:text-[#666]"}
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3
                        className={`
                          text-base md:text-lg font-medium transition-colors duration-300
                          ${isOpen ? "text-white" : "text-[#ccc] group-hover:text-white"}
                        `}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    {/* +/× toggle icon */}
                    <div
                      className={`
                        flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full
                        border flex items-center justify-center
                        transition-all duration-500
                        ${
                          isOpen
                            ? "rotate-45 bg-[#20a46a] border-[#20a46a]"
                            : "border-[#2e2e2e] group-hover:border-[#555]"
                        }
                      `}
                    >
                      <span
                        className={`text-xl leading-none transition-colors ${
                          isOpen ? "text-black" : "text-white"
                        }`}
                      >
                        +
                      </span>
                    </div>
                  </div>

                  {/* Collapsible answer */}
                  <div
                    className={`relative z-10 grid transition-[grid-template-rows] duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-7 pl-[68px] md:pl-[76px]">
                        <div className="h-px w-full bg-[#1c1c1c] mb-5" />
                        <p className="text-[#858585] text-sm md:text-base leading-7 max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          FLOATING CHAT BUTTON — fixed, always accessible
      ====================================================== */}
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
        className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full bg-[#20a46a] flex items-center justify-center shadow-[0_8px_30px_rgba(32,164,106,0.4)]"
        aria-label="Chat with support"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </motion.a>
    </section>
  );
};

export default FAQSection;