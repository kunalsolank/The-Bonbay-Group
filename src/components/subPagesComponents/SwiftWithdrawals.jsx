import React from "react";
import { motion } from "framer-motion";

const withdrawalMethods = [
  {
    number: "01",
    name: "Bank Transfer",
    image:
      "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/dw/dw-01.webp",
    minimum: "$50",
    currencies: "USD, EUR, GBP",
  },
  {
    number: "02",
    name: "Credit/Debit Card",
    image:
      "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/dw/dw-02.webp",
    minimum: "5 USD/EUR/GBP",
    currencies: "USD, EUR, GBP",
  },
  {
    number: "03",
    name: "Bitcoin",
    image:
      "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/dw/dw-03.webp",
    minimum: "0.00037000 BTC",
    currencies: "USD, USDT",
  },
  {
    number: "04",
    name: "USDT",
    image:
      "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/dw/dw-04.webp",
    minimum: "$50",
    currencies: "USD, USDT",
  },
  {
    number: "05",
    name: "Skrill",
    image:
      "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/dw/dw-05.webp",
    minimum: "$50",
    currencies: "USD, EUR, GBP",
  },
  {
    number: "06",
    name: "Neteller",
    image:
      "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/dw/dw-06.webp",
    minimum: "$50",
    currencies: "USD, EUR, GBP",
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SwiftWithdrawals = () => {
  return (
    <section className="relative overflow-hidden bg-[#080908] py-28 text-white md:py-36">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-lime-300/[0.025] blur-[160px]" />

        <div className="absolute right-[-150px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#20a46a]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-[#20a46a]">
                Withdrawals
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-[88px]">
              Swift
              <br />
              <span className="text-[#20a46a]">Withdrawals.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:pb-2"
          >
            <p className="max-w-2xl text-base leading-8 text-white/45 md:text-lg">
              Withdrawing your money is just as simple. Make a request in a few
              clicks, and we’ll process it within{" "}
              <span className="text-white/80">1 working day</span>—no long
              waits, no hidden steps.
            </p>
          </motion.div>
        </div>

        {/* Withdrawal Journey */}
        <div className="relative mt-28 md:mt-36">
          {/* Central line */}
          <div className="absolute bottom-0 left-[18px] top-0 w-px bg-white/[0.08] md:left-1/2 md:-translate-x-1/2">
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
              }}
              className="w-full bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6]"
            />
          </div>

          <div className="space-y-20 md:space-y-28">
            {withdrawalMethods.map((method, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={method.name}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[11px] top-10 z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-lime-200/50 bg-[#080908] md:left-1/2 md:-translate-x-1/2">
                    <span className="h-[4px] w-[4px] rounded-full bg-lime-200" />
                  </div>

                  <div
                    className={`grid items-center md:grid-cols-2 ${
                      isEven ? "" : "md:[direction:rtl]"
                    }`}
                  >
                    {/* Main content */}
                    <div
                      className={`pl-14 md:pl-0 md:[direction:ltr] ${
                        isEven ? "md:pr-20 lg:pr-28" : "md:pl-20 lg:pl-28"
                      }`}
                    >
                      <div className="group relative">
                        {/* Number */}
                        <span className="text-[11px] tracking-[0.3em] text-white/20 transition-colors duration-500 group-hover:text-lime-200/60">
                          {method.number}
                        </span>

                        {/* Title */}
                        <h3 className="mt-3 text-3xl font-light tracking-[-0.03em] md:text-4xl">
                          {method.name}
                        </h3>

                        {/* Animated underline */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: 55 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.7,
                            delay: 0.25,
                          }}
                          className="mt-5 h-px bg-lime-200/60"
                        />

                        {/* Details */}
                        <div className="mt-8 grid max-w-xl grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-3">
                          <Info label="Minimum Amount" value={method.minimum} />

                          <Info label="Currencies" value={method.currencies} />

                          <Info label="Commissions" value="Free" highlight />
                        </div>

                        {/* Processing time */}
                        <div className="mt-7 border-l border-white/[0.10] pl-4">
                          <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                            Processing Time
                          </p>

                          <p className="mt-2 max-w-md text-xs leading-6 text-white/55">
                            1–3 hours to approve the withdrawal and up to 5
                            minutes to transfer the funds.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div
                      className={`mt-10 flex pl-14 md:mt-0 md:[direction:ltr] ${
                        isEven
                          ? "md:justify-end md:pr-10 lg:pr-20"
                          : "md:justify-start md:pl-10 lg:pl-20"
                      }`}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: isEven ? 2 : -2,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        className="relative flex h-36 w-52 items-center justify-center"
                      >
                        {/* Glow */}
                        <div className="absolute inset-8 rounded-full bg-lime-200/[0.04] blur-3xl transition-all duration-700 group-hover:bg-lime-200/[0.10]" />

                        <img
                          src={method.image}
                          alt={method.name}
                          className="relative max-h-28 max-w-44 object-contain  transition-all duration-700 hover:opacity-100 hover:grayscale-0"
                        />

                        {/* Corner details */}
                        <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white/20" />
                        <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white/20" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 border-t border-white/[0.08] pt-10 md:mt-36"
        >
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-lime-200/50">
                Simple. Transparent. Swift.
              </p>

              <p className="mt-3 text-sm text-white/35">
                Your funds, moving when you need them.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-lime-200/70" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                Zero Withdrawal Fees
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Info = ({ label, value, highlight }) => {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
        {label}
      </p>

      <p
        className={`mt-2 text-xs leading-5 md:text-sm ${
          highlight ? "text-lime-200/80" : "text-white/65"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default SwiftWithdrawals;
