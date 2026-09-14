import React from "react";
import { motion } from "framer-motion";

const paymentMethods = [
  {
    number: "01",
    name: "Bank Transfer",
    image:
      "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/dw/dw-01.webp",
    minimum: "$50",
    currencies: "USD",
    processing: "3–30 Minutes",
    commission: "Zero",
  },
  {
    number: "02",
    name: "Credit/Debit Card",
    image:
      "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/dw/dw-02.webp",
    minimum: "5 USD/EUR/GBP",
    currencies: "USD, EUR, GBP",
    processing: "Instant",
    commission: "Zero",
  },
  {
    number: "03",
    name: "Bitcoin",
    image:
      "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/dw/dw-03.webp",
    minimum: "0.00037000 BTC",
    currencies: "USD, USDT",
    processing: "3–30 Minutes",
    commission: "Zero",
  },
  {
    number: "04",
    name: "USDT",
    image:
      "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/dw/dw-04.webp",
    minimum: "$50",
    currencies: "USD, USDT",
    processing: "Up to 3 business days",
    commission: "Zero",
  },
  {
    number: "05",
    name: "Skrill",
    image:
      "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/dw/dw-05.webp",
    minimum: "$50",
    currencies: "USD, EUR, GBP",
    processing: "Up to 3 business days",
    commission: "Zero",
  },
  {
    number: "06",
    name: "Neteller",
    image:
      "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/dw/dw-06.webp",
    minimum: "$50",
    currencies: "USD, EUR, GBP",
    processing: "Up to 3 business days",
    commission: "Zero",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const HassleFreeDeposits = () => {
  return (
    <section className="relative overflow-hidden bg-[#080908] text-white py-24 md:py-32">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-lime-300/[0.035] blur-[140px]" />
        <div className="absolute -left-40 bottom-20 h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-lime-300/70" />

            <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-lime-200/70">
              Funding Methods
            </span>
          </div>

          <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[92px]">
            Hassle-Free
            <br />
            <span className="text-[#20a46a]">Deposits.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 md:text-lg">
            We’ve teamed up with trusted global payment partners to give you a
            smooth and secure deposit experience. Add funds easily using your
            preferred method—fast, safe, and stress-free.
          </p>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="mt-24"
        >
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.name}
              variants={itemVariants}
              className="group relative border-t border-white/[0.10] py-10 md:py-14"
            >
              <div className="grid items-center gap-8 md:grid-cols-[80px_180px_1fr] lg:grid-cols-[90px_230px_1fr]">
                {/* Number */}
                <div className="self-start">
                  <span className="text-sm font-medium tracking-[0.2em] text-white/25 transition-colors duration-500 group-hover:text-lime-200/70">
                    {method.number}
                  </span>
                </div>

                {/* Payment Image */}
                <div className="relative flex h-28 w-40 items-center justify-start overflow-hidden md:h-32 md:w-44">
                  <motion.img
                    src={method.image}
                    alt={method.name}
                    className="max-h-full max-w-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                    whileHover={{ rotate: 2 }}
                  />

                  {/* Image glow */}
                  <div className="pointer-events-none absolute inset-0 bg-lime-200/0 blur-2xl transition-all duration-700 group-hover:bg-lime-200/[0.04]" />
                </div>

                {/* Content */}
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <h3 className="text-2xl font-light tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                      {method.name}
                    </h3>

                    <div className="mt-4 h-px w-0 bg-lime-200/60 transition-all duration-700 group-hover:w-16" />
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-x-10 gap-y-5 sm:grid-cols-4 lg:min-w-[620px]">
                    <Detail label="Minimum Amount" value={method.minimum} />

                    <Detail label="Currencies" value={method.currencies} />

                    <Detail label="Processing Time" value={method.processing} />

                    <Detail
                      label="Commissions"
                      value={method.commission}
                      highlight
                    />
                  </div>
                </div>
              </div>

              {/* Hover line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-lime-200/50"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col gap-6 border-t border-white/[0.08] pt-10 md:flex-row md:items-center md:justify-between"
        >
          <p className="max-w-xl text-sm leading-7 text-white/35">
            Choose the payment method that works best for you and fund your
            account with confidence.
          </p>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-200 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-200/80" />
            </span>
            Secure Payments
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Detail = ({ label, value, highlight = false }) => {
  return (
    <div>
      <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/25 md:text-[10px]">
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

export default HassleFreeDeposits;
