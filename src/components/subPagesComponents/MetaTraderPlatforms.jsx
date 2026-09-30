import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Monitor, Smartphone, Globe, Download } from "lucide-react";

const platforms = [
  {
    number: "01",
    title: "MT5 Desktop",
    icon: Monitor,
    description:
      "Experience powerful trading with MetaTrader 5 on your desktop. Analyze the markets with advanced charting tools, manage your orders smoothly, and enjoy fast execution - all in one professional platform designed for serious traders.",
    buttons: ["Download for Windows", "Download for macOS"],
  },
  {
    number: "02",
    title: "MT5 Mobile",
    icon: Smartphone,
    description:
      "Stay connected to the markets wherever you go. With MT5 on your Android or iOS device, you can trade with full functionality, including one-click trading and access to real-time price feeds, right at your fingertips.",
    buttons: ["App Store", "Google Play"],
  },
  {
    number: "03",
    title: "MT5 Web",
    icon: Globe,
    description:
      "No downloads or installations required - MetaTrader 5 Web gives you instant access to your trading account from any internet browser. It's fast, secure, and fully synced with your desktop and mobile accounts.",
    buttons: ["Launch Web Terminal"],
  },
];

const MetaTraderPlatforms = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080a09] py-20 sm:py-28"
    >
      {/* Background effects (matching TradingSteps) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-64 -right-64 w-[700px] h-[700px] rounded-full " />
        <div className="absolute -bottom-72 -left-72 w-[650px] h-[650px] rounded-full " />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#ffffff 1px, transparent 1px),
              linear-gradient(90deg, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          style={{ y, opacity }}
          className="mb-14 sm:mb-18"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#20a46a]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#20a46a]">
              Trading Platforms
            </span>
          </div>

          <h2 className="max-w-2xl text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Download{" "}
            <span className="text-[#20a46a]">MetaTrader 5</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
            Access global markets from wherever you are. Choose the platform
            that fits the way you trade.
          </p>
        </motion.div>

        {/* Cards row */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0a0b0a] p-7 sm:p-8 transition-all duration-500 hover:border-[#20a46a]/30 hover:shadow-[0_0_40px_rgba(32,164,106,0.1)]"
              >
                {/* Top glow line on hover */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-[#20a46a]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <span className="mb-5 block font-mono text-xs font-medium tracking-[0.25em] text-white/20">
                  {platform.number}
                </span>

                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#20a46a]/10 transition-all duration-500 group-hover:border-[#20a46a]/40 group-hover:bg-[#20a46a]/15">
                  <Icon size={20} className="text-[#20a46a]" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-medium text-white sm:text-2xl">
                  {platform.title}
                </h3>

                {/* Divider */}
                <div className="mb-4 h-px w-8 bg-[#20a46a]/40 transition-all duration-500 group-hover:w-14 group-hover:bg-[#20a46a]" />

                {/* Description */}
                <p className="flex-1 text-sm leading-7 text-white/50 sm:text-base">
                  {platform.description}
                </p>

                {/* Download buttons */}
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {platform.buttons.map((label) => (
                    <button
                      key={label}
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60 transition-all duration-300 hover:border-[#20a46a]/50 hover:bg-[#20a46a]/10 hover:text-[#20a46a]"
                    >
                      <Download size={11} />
                      {label}
                    </button>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetaTraderPlatforms;
