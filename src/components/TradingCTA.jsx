
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Shield, Globe } from "lucide-react";
import { ShineBorder } from "./ui/ShineBorder";

const TradingCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#05040b] py-10 sm:py-14 lg:py-16">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#00ff87]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#00d2ff]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= MAIN CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-2xl
            border border-white/[0.12]
            bg-[#07090e]/90
            shadow-[0_15px_40px_rgba(0,0,0,0.45)]
            backdrop-blur-lg

            sm:rounded-3xl
          "
        >

          {/* Shine Border */}
          <ShineBorder
            borderWidth={1.5}
            duration={12}
            shineColor={["#00ff87", "#00d2ff", "#2563eb"]}
          />

          <div className="grid lg:grid-cols-2">

            {/* ================================================= */}
            {/* VIDEO */}
            {/* ================================================= */}

            <div
              className="
                relative
                h-[230px]
                overflow-hidden

                sm:h-[280px]

                lg:h-[420px]
              "
            >
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src="https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/n/bg-chart.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Desktop Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-[#07090e] lg:block" />

              {/* Mobile Bottom Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent lg:hidden" />

              {/* Live Badge */}
              <div className="absolute bottom-4 left-4 z-10 sm:bottom-6 sm:left-6">
                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] font-mono text-[#00ff87] backdrop-blur-md sm:text-xs">
                  <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#00ff87]" />
                  LIVE EXECUTION FEED
                </span>
              </div>
            </div>

            {/* ================================================= */}
            {/* CONTENT */}
            {/* ================================================= */}

            <div
              className="
                relative
                flex
                items-center
                bg-[#07090e]/95

                px-5
                py-8

                sm:px-7
                sm:py-10

                lg:px-10
                lg:py-10

                xl:px-12
              "
            >

              {/* Internal Glow */}
              <div className="pointer-events-none absolute -right-32 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[#00ff87]/8 blur-[110px]" />

              <div className="relative z-10 w-full">

                {/* Eyebrow */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00ff87]/25 bg-[#00ff87]/10 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00ff87]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00ff87] sm:text-xs">
                    Start Trading
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="
                    max-w-xl
                    text-3xl
                    font-normal
                    leading-[1.08]
                    tracking-tight
                    text-white

                    sm:text-4xl

                    lg:text-[42px]

                    xl:text-5xl
                  "
                >
                  Start Trading in Minutes
                  <br />

                  <span className="bg-gradient-to-r from-[#00ff87] via-[#00d2ff] to-[#2563eb] bg-clip-text text-transparent">
                    — Zero Delay
                  </span>
                </h2>

                {/* Description */}
                <p
                  className="
                    mt-4
                    max-w-lg
                    text-sm
                    leading-relaxed
                    text-white/60

                    sm:text-base
                  "
                >
                  Open your DollreX Capital Ltd account in under 3 minutes,
                  select your preferred terminal, and access 100+ global
                  liquid markets with true ultra-tight raw spreads.
                </p>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    to="/register"
                    className="
                      group/btn
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      overflow-hidden
                      rounded-full
                      bg-gradient-to-r
                      from-[#00ff87]
                      via-[#00d2ff]
                      to-[#2563eb]
                      p-[1px]
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_0_22px_rgba(0,255,135,0.2)]
                      transition-all
                      duration-300
                      hover:scale-[1.03]
                      hover:shadow-[0_0_35px_rgba(0,255,135,0.35)]
                    "
                  >
                    <span
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#05040b]
                        px-6
                        py-3
                        transition-colors
                        duration-300
                        group-hover/btn:bg-transparent
                      "
                    >
                      <span className="uppercase tracking-wider">
                        Create Account
                      </span>

                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          text-[#00ff87]
                          transition-transform
                          duration-300
                          group-hover/btn:-translate-y-1
                          group-hover/btn:translate-x-1
                          group-hover/btn:text-white
                        "
                      />
                    </span>
                  </Link>
                </div>

                {/* Trust Points */}
                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    gap-x-5
                    gap-y-2
                    text-[10px]
                    font-mono
                    text-white/55

                    sm:text-xs
                  "
                >
                  <span className="flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-[#00ff87]" />
                    100+ Global Instruments
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-[#00d2ff]" />
                    Sub-ms Execution
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Shield className="h-3.5 w-3.5 text-[#2563eb]" />
                    Tier-1 Custody
                  </span>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingCTA;

