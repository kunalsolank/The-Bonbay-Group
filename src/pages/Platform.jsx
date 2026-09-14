import HeroSubSection from "../components/subPagesComponents/HeroSubSection";
import forexImage from "../assets/forexImg.webp";
import { motion } from "framer-motion";
import MetaTraderPlatforms from "../components/subPagesComponents/MetaTraderPlatforms";
import TradingSteps from "../components/subPagesComponents/TradingSteps";
import FAQSection from "../components/subPagesComponents/FAQSection";
import TradingCTA from "../components/TradingCTA";
const Platform = () => {
  const platforms = [
    {
      number: "01",
      title: "Forex",
      description:
        "Access major, minor, and exotic currency pairs with ultra-low spreads and high leverage.",
      image: forexImage,
    },
    {
      number: "02",
      title: "Commodities",
      description:
        "Speculate on gold, silver, oil, and other essentials — with competitive margins.",
      image: forexImage,
    },
    {
      number: "03",
      title: "Indices",
      description:
        "Trade global indices like US30, FTSE, and DAX with minimal slippage and volatility protection.",
      image: forexImage,
    },
    {
      number: "04",
      title: "Stocks",
      description:
        "Explore CFD trading on top global shares without owning the underlying asset.",
      image: forexImage,
    },
  ];
  const forexFAQs = [
    {
      question: " What is MetaTrader 5 (MT5)? ",
      answer:
        " MetaTrader 5 is a powerful trading platform used worldwide for trading forex, stocks, futures, and more. It offers fast execution and advanced tools to help traders make better decisions. ",
    },
    {
      question: " How is MT5 different from MT4?  ",
      answer:
        " MT5 is the newer version of MT4, offering more asset types, improved charts, extra timeframes, and better tools. It supports multi-asset trading on one platform, unlike MT4. ",
    },
    {
      question: " Can beginners use MT5?  ",
      answer:
        " Yes, MT5 is designed for all skill levels. Beginners can use its simple interface to start trading, while advanced traders can access sophisticated features and tools. ",
    },
    {
      question: " What devices can I use MT5 on? ",
      answer:
        " You can use MT5 on Windows and Mac computers, as well as on smartphones and tablets with iOS or Android. This lets you trade anytime, anywhere. ",
    },
    {
      question: " What are Expert Advisors (EAs) on MT5? ",
      answer:
        " Expert Advisors are automated trading robots that follow preset rules to trade for you. They allow you to trade 24/7 without needing to constantly watch the market. ",
    },
    {
      question: " Does MT5 support demo accounts? ",
      answer:
        " Yes, MT5 offers free demo accounts so you can practice trading with virtual money. This helps you learn the platform and test strategies before risking real money.  ",
    },
    {
      question: " What is hedging in MT5? ",
      answer:
        " Hedging lets you open opposite trades on the same asset to reduce risk. It’s a useful feature to protect your investments in volatile markets. ",
    },
    {
      question: " Can I customize charts and indicators on MT5? ",
      answer:
        " Absolutely! MT5 provides many technical indicators and chart types. You can customize these to suit your trading style and analyze the markets more effectively. ",
    },
    {
      question: " Is MT5 safe and secure? ",
      answer:
        " Yes, MT5 uses strong encryption to protect your data and transactions. It follows strict security standards to ensure a safe trading environment. ",
    },
    {
      question: " How do I get started with MT5 on Dollrex Capital Ltd.? ",
      answer:
        "  Sign up for a Dollrex Capital Ltd. account, download the MT5 app on your device, log in using your details, and you’re ready to start trading with all the platform’s features.  ",
    },
  ];
  return (
    <div>
      <HeroSubSection
        eyebrow="Platform"
        title="Accelerate Your Trading with "
        highlight="MT5"
        description="Join millions of traders using MT5 for faster trades, deeper insights, and reliable performance."
        image={forexImage}
        buttonText="Start Trading on MT5"
        buttonLink="/open-account"
      />
      <section className="relative overflow-hidden bg-[#080908] py-24 sm:py-32">
        {/* Background Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="pointer-events-none absolute -right-40 top-1/2 h-125 w-125 -translate-y-1/2 rounded-full bg-[#e6c76a] blur-[160px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Small Label */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 flex items-center gap-4"
              >
                <span className="h-px w-10 bg-[#20a46a]" />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#20a46a]">
                  Seamless Experience
                </span>
              </motion.div>

              {/* Title */}
              <h2 className="max-w-xl  text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">
                What is MetaTrader 5
                <br />
                <span className="text-[#20a46a]">(MT5)?.</span>
              </h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-7 max-w-lg text-base leading-8 text-white/55 sm:text-lg"
              >
                Experience a smarter and more seamless way to manage your
                financial journey. From your first deposit to your next
                opportunity, everything is designed around simplicity,
                transparency, and speed.
              </motion.p>

              {/* Bottom Accent */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-10 h-px bg-[#20a46a]"
              />
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Decorative Frame */}
              <div className="absolute -right-3 -top-3 h-full w-full border border-[#e6c76a]/20 sm:-right-5 sm:-top-5" />

              {/* Image Wrapper */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85"
                  alt="Premium financial experience"
                  className="h-105 w-full object-cover transition-transform duration-1000 group-hover:scale-105 sm:h-125 lg:h-150"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                {/* Image Corner Detail */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#20a46a]" />

                  <span className="text-xs uppercase tracking-[0.25em] text-white/80">
                    Premium Financial Solutions
                  </span>
                </div>
              </motion.div>

              {/* Floating Number */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute -bottom-8 -left-4 hidden sm:block"
              >
                <span className="font-serif text-7xl font-light text-white/5">
                  01
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <MetaTraderPlatforms />
      <TradingSteps
        eyebrow="Platform Trading"
        heading="How to Get Started with  "
        highlight=" MetaTrader 5 (MT5)"
        points={[
          {
            number: "01",
            title: "Sign Up with Dollrex Capital Ltd.",
            description:
              "Create your free Dollrex Capital Ltd. trading account in just a few clicks.",
            icon: "◈",
          },
          {
            number: "02",
            title: "Download MT5",
            description:
              "Get the MetaTrader 5 app on your phone, tablet, or computer—easy and quick!",
            icon: "↗",
          },
          {
            number: "03",
            title: "Log In & Explore",
            description:
              "Use your Dollrex Capital Ltd. details to log in and check out the tools, charts, and features.",
            icon: "⌁",
          },
          {
            number: "04",
            title: "Start Trading Smart",
            description:
              "Pick your asset, place your trade, and enjoy fast and smooth trading with MT5.",
            icon: "✓",
          },
        ]}
      />
      <section className="relative overflow-hidden bg-[#080908] py-24 sm:py-32">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-1/4 h-112.5 w-112.5 rounded-full bg-[#d9b85c]/10 blur-[160px]" />

        <div className="relative mx-auto  px-6 lg:px-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#20a46a]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#20a46a]">
                Trading Platforms
              </span>
            </div>

            <h2 className="font-serif text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Download
              <br />
              <span className="text-[#20a46a]">MetaTrader 5</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Trade the markets your way with MetaTrader 5 across desktop,
              mobile, and web.
            </p>
          </motion.div>

          {/* Platform Items */}
          {/* Platform Items */}
          <div className="grid gap-6 md:grid-cols-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative h-130 overflow-hidden border border-white/10 bg-[#10110f]"
              >
                {/* IMAGE */}
                <img
                  src={platform.image}
                  alt={platform.title}
                  className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-transform
          duration-1000
          ease-out
          group-hover:scale-110
        "
                />

                {/* DARK GRADIENT */}
                <div
                  className="
          absolute inset-0
          bg-linear-to-t
          from-black
          via-black/20
          to-transparent
        "
                />

                {/* ========================================
          DEFAULT TITLE
      ======================================== */}
                <div
                  className="
          absolute
          bottom-0
          left-0
          z-20
          w-full
          p-7
          transition-all
          duration-500
          group-hover:-translate-y-4
          group-hover:opacity-0
          sm:p-8
        "
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#20a46a]" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                      {platform.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl font-light text-white sm:text-4xl">
                    {platform.title}
                  </h3>
                </div>

                {/* ========================================
          HOVER DESCRIPTION
      ======================================== */}
                <div
                  className="
          absolute
          bottom-0
          left-0
          z-10
          w-full

          translate-y-full

          bg-black/95

          p-7

          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:translate-y-0

          sm:p-8
        "
                >
                  {/* Number */}
                  <div className="mb-5">
                    <span className="font-serif text-5xl font-light text-[#d9b85c]/30">
                      {platform.number}
                    </span>
                  </div>

                  {/* Label */}
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#20a46a]" />

                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#20a46a]">
                      MetaTrader 5
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-3xl font-light text-white sm:text-4xl">
                    {platform.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                    {platform.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-px w-12 bg-[#20a46a]" />

                    <a
                      href="#"
                      className="text-[9px] uppercase tracking-[0.3em] text-white/30"
                    >
                      Trade Anywhere
                    </a>
                  </div>
                </div>

                {/* PREMIUM HOVER BORDER */}
                <div
                  className="
          pointer-events-none
          absolute
          inset-0
          z-30
          border
          border-transparent
          transition-colors
          duration-500
          group-hover:border-[#d9b85c]/50
        "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        faqs={forexFAQs}
        eyebrow=" FAQ"
        heading="Frequently Asked"
        highlightedHeading=" Questions"
        description="Everything you need to know about Forex trading, currency pairs, leverage, and our platform."
        bottomText="Can't find what you're looking for?"
        bottomLinkText="Talk to our team →"
        onBottomLinkClick={() => {
          console.log("Contact clicked");
        }}
      />
      <TradingCTA />
    </div>
  );
};

export default Platform;
