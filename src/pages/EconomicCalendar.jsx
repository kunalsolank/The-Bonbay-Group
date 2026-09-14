import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ThreeLinkCards from "../components/subPagesComponents/ThreeLinkCards";
import marketsImage from "../assets/Computer.avif";
import accountsImage from "../assets/Computer.avif";
import platformImage from "../assets/Computer.avif";
import TradingCTA from "../components/TradingCTA";

const EconomicCalendar = () => {
  const calendarRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: calendarRef,
    offset: ["start end", "end start"],
  });

  // Calendar drifts up as the section scrolls through the viewport
  const calendarY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Tilt-to-flat 3D effect: starts tilted back, straightens as it reaches center of viewport
  const { scrollYProgress: tiltProgress } = useScroll({
    target: calendarRef,
    offset: ["start end", "center center"],
  });
  const rotateX = useTransform(tiltProgress, [0, 1], [35, 0]);
  const scale = useTransform(tiltProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(tiltProgress, [0, 0.6], [0, 1]);

  return (
    <section className="relative overflow-hidden bg-[#080908] py-24 sm:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#d9b85c]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-10 max-w-4xl"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#20a46a]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#20a46a]">
              Economic Calendar
            </span>

            <span className="h-px w-12 bg-[#20a46a]" />
          </div>

          <h2 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Know the News
            <br />
            <span className="text-[#20a46a]">That Moves Money</span>
          </h2>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl px-6"
        >
          <div className="mb-12">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
              Economic Calendar
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Know what moves
              <br />
              <span className="text-[#20a46a]">the market.</span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              "An economic calendar shows important dates when big financial news or data will be shared — like reports on jobs, prices, or interest rates. These events can make the markets move up or down.",

              "For example, if the government announces a rise in unemployment, it might affect stock prices or currency values. By checking the calendar, traders and investors know when these events are coming and can get ready to make smart decisions.",

              "Using an economic calendar helps you stay informed and spot opportunities to trade or invest before others do.",
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="text-lg leading-8 text-white/55 sm:text-xl sm:leading-9"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* TradingView Calendar — Device Frame */}
        <div
          className="relative mx-auto mt-16 w-full max-w-5xl"
          style={{ perspective: "1400px" }}
        >
          <motion.div
            ref={calendarRef}
            style={{
              y: calendarY,
              rotateX,
              scale,
              opacity,
              transformStyle: "preserve-3d",
              transformOrigin: "center bottom",
            }}
            className="relative w-full"
          >
            {/* Device Bezel */}
            <div className="relative rounded-[28px] border-[10px] border-[#111211] bg-[#111211] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] sm:rounded-[32px] sm:border-[14px]">
              {/* Camera notch dot */}
              <div className="absolute left-1/2 top-0 z-20 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2a2b2a]" />

              {/* Screen */}
              <div className="relative z-10 min-h-[600px] w-full overflow-hidden rounded-[16px] border border-white/5 bg-[#0d0e0d] sm:rounded-[20px]">
                {/* Screen top bar */}
                <div className="flex items-center gap-2 border-b border-white/10 bg-[#111211] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-[10px] uppercase tracking-[0.25em] text-white/30">
                    economic-calendar
                  </span>
                </div>

                <iframe
                  src="https://www.tradingview-widget.com/embed-widget/events/#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A600%2C%22isTransparent%22%3Afalse%2C%22utm_source%22%3A%22www.dollrexcapital.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22events%22%2C%22page-uri%22%3A%22www.dollrexcapital.com%2Feconomic-calendar%2F%22%7D"
                  title="TradingView Economic Calendar"
                  className="block h-[600px] w-full min-w-[320px] border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Bottom Label */}
            <div className="relative z-10 mt-6 flex w-full items-center justify-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#20a46a]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Live Economic Events
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                TradingView
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <ThreeLinkCards
          eyebrow="Discover More"
          heading="Everything you need to trade"
          subheading="Explore our markets, trading tools and account solutions built for a seamless trading experience."
          cards={[
            {
              title: "Trading Guides for Beginners",
              description:
                "Step-by-step guides to help you learn the basics of trading, from placing your first trade to understanding the markets.",
              image: marketsImage,
              link: "/markets",
            },
            {
              title: "Market News & Updates",
              description:
                "Stay updated with the latest financial news, expert analysis, and key events that could impact your trades.",
              image: accountsImage,
              link: "/accounts",
            },
            {
              title: "Video Tutorials & Webinars",
              description:
                "Watch easy-to-follow videos and attend live sessions to sharpen your trading skills at your own pace.",
              image: platformImage,
              link: "/platform",
            },
          ]}
        />
      </div>

      <TradingCTA />
    </section>
  );
};

export default EconomicCalendar;