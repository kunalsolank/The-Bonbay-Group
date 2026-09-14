
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are CFDs?",
    answer:
      "Contracts for Difference (CFDs) allow you to speculate on the price movement of financial markets without owning the underlying asset.",
  },
  {
    question: "What markets can I trade?",
    answer:
      "You can trade a wide range of global markets, including Forex, Metals, Indices, Commodities, and other financial instruments.",
  },
  {
    question: "How much do I need to start trading?",
    answer:
      "The amount required depends on your account type, instrument, and applicable margin requirements. Check your account conditions for more details.",
  },
  {
    question: "Are CFDs suitable for beginners?",
    answer:
      "CFDs involve leverage and can carry significant risk. Beginners should understand how CFDs work and carefully consider whether trading is appropriate for them.",
  },
  {
    question: "How do I open a trading account?",
    answer:
      "Simply complete the registration process, provide the required information, and follow the verification steps to get your account ready.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#05040b] py-14 sm:py-20 lg:py-24">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#05040b] via-[#05040b]/90 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#05040b]/80 to-[#05040b]" />

      {/* Green Glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-[#00ff87]/8 blur-[120px]" />

      {/* Blue Glow */}
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-[#00d2ff]/8 blur-[120px]" />

      {/* ================================================= */}
      {/* CONTAINER */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================================================= */}
        {/* TWO COLUMN */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* ================================================= */}
          {/* LEFT SIDE - STICKY */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:relative"
          >
            <div className="lg:sticky lg:top-24">

              {/* Badge */}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00ff87]/30 bg-[#00ff87]/10 px-3 py-1.5 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#00ff87]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00ff87] sm:text-xs">
                  Knowledge Hub
                </span>
              </motion.div>

              {/* Heading */}

              <h2 className="max-w-xl text-4xl font-normal leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[52px]">
                Frequently
                <br />

                <span className="bg-gradient-to-r from-[#00ff87] via-[#00d2ff] to-[#2563eb] bg-clip-text text-transparent">
                  Asked Questions
                </span>
              </h2>

              {/* Description */}

              <p className="mt-5 max-w-md text-sm font-light leading-7 text-white/55 sm:text-base">
                Find answers to the most common questions about trading,
                accounts, markets, and our platform.
              </p>

              {/* Animated Line */}

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 90 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="mt-8 h-px bg-gradient-to-r from-[#00ff87] to-transparent"
              />

              {/* Supporting Text */}

              <p className="mt-5 hidden max-w-sm text-xs leading-6 text-white/30 lg:block">
                Everything you need to know before getting started with
                DollreX Capital.
              </p>

            </div>
          </motion.div>

          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="w-full"
          >

            {/* FAQ LIST */}

            <div className="space-y-3">

              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <motion.div
                    key={faq.question}
                    layout
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 25,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    transition={{
                      layout: {
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    className={`
                      group
                      overflow-hidden
                      rounded-2xl
                      border
                      transition-colors
                      duration-300

                      ${
                        isOpen
                          ? "border-[#00ff87]/30 bg-[#0b110f]"
                          : "border-white/[0.08] bg-[#0a0b0f] hover:border-white/[0.16]"
                      }
                    `}
                  >

                    {/* ================================================= */}
                    {/* QUESTION */}
                    {/* ================================================= */}

                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                    >

                      <div className="flex min-w-0 items-center gap-4 sm:gap-5">

                        {/* Number */}

                        <motion.span
                          animate={{
                            color: isOpen
                              ? "#00ff87"
                              : "rgba(255,255,255,0.25)",
                          }}
                          transition={{ duration: 0.25 }}
                          className="flex-shrink-0 font-mono text-[10px] sm:text-xs"
                        >
                          0{index + 1}
                        </motion.span>

                        {/* Question */}

                        <motion.h3
                          animate={{
                            x: isOpen ? 3 : 0,
                            color: isOpen
                              ? "#ffffff"
                              : "rgba(255,255,255,0.75)",
                          }}
                          transition={{
                            duration: 0.25,
                            ease: "easeOut",
                          }}
                          className="text-sm font-normal leading-6 sm:text-base lg:text-lg"
                        >
                          {faq.question}
                        </motion.h3>

                      </div>

                      {/* ================================================= */}
                      {/* PLUS ICON */}
                      {/* ================================================= */}

                      <motion.div
                        animate={{
                          rotate: isOpen ? 45 : 0,
                          backgroundColor: isOpen
                            ? "#00ff87"
                            : "transparent",
                          borderColor: isOpen
                            ? "#00ff87"
                            : "rgba(255,255,255,0.1)",
                          color: isOpen ? "#05040b" : "#ffffff",
                          scale: isOpen ? 1.05 : 1,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border sm:h-10 sm:w-10"
                      >
                        <span className="text-xl font-light leading-none">
                          +
                        </span>
                      </motion.div>

                    </button>

                    {/* ================================================= */}
                    {/* ANSWER */}
                    {/* ================================================= */}

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            height: {
                              duration: 0.35,
                              ease: [0.16, 1, 0.3, 1],
                            },
                            opacity: {
                              duration: 0.2,
                              delay: 0.05,
                            },
                          }}
                          className="overflow-hidden"
                        >

                          <div className="px-5 pb-5 sm:px-6 sm:pb-6">

                            {/* Divider */}

                            <motion.div
                              initial={{ scaleX: 0, opacity: 0 }}
                              animate={{
                                scaleX: 1,
                                opacity: 1,
                              }}
                              transition={{
                                duration: 0.4,
                                delay: 0.08,
                              }}
                              style={{
                                transformOrigin: "left",
                              }}
                              className="mb-4 h-px w-full bg-gradient-to-r from-[#00ff87]/30 via-white/[0.06] to-transparent"
                            />

                            {/* Answer */}

                            <motion.p
                              initial={{
                                opacity: 0,
                                y: 8,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: -5,
                              }}
                              transition={{
                                duration: 0.3,
                                delay: 0.08,
                              }}
                              className="max-w-2xl text-xs leading-6 text-white/50 sm:text-sm sm:leading-7"
                            >
                              {faq.answer}
                            </motion.p>

                          </div>

                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                );
              })}

            </div>

            {/* ================================================= */}
            {/* SUPPORT BOX */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
              className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 sm:px-6"
            >
              <p className="text-xs text-white/45 sm:text-sm">
                Still have questions?

                <span className="ml-2 cursor-pointer text-[#00ff87] transition-colors hover:text-white hover:underline">
                  Contact our support team →
                </span>
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

