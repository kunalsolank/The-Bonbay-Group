import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Monitor,
  Layers,
  Handshake,
  Check,
  Percent,
  Headset,
  Network,
} from "lucide-react";

import earthImg from "../assets/pl-img.webp";
import computerimg from "../assets/Computer.avif";

const cardBase =
  "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-[#07090e]/80 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 sm:p-6";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const HoverLine = ({ color }) => (
  <div
    className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${color} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
  />
);

const devices = ["Windows", "MacOS", "iOS", "Android"];

const ibPerks = [
  { icon: Percent, text: "Tiered rebate schedules" },
  { icon: Network, text: "Sub-affiliate portals" },
  { icon: Headset, text: "Dedicated RM" },
];

const cashbackTiers = [
  { lots: "5 Lots", amount: "$30" },
  { lots: "10 Lots", amount: "$60" },
  { lots: "20 Lots", amount: "$120" },
];

const GridSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#05040b] py-12 sm:py-14 lg:py-16">
      {/* Ambient Theme Lighting */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[350px] w-[350px] rounded-full bg-[#00ff87]/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[350px] w-[350px] rounded-full bg-[#00d2ff]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-100px] left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#2563eb]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:mb-10"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00ff87]/30 bg-[#00ff87]/10 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#00ff87]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00ff87] sm:text-xs">
              Next-Gen Ecosystem
            </span>
          </div>

          <h2 className="mx-auto max-w-4xl bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-3xl font-normal leading-[1.1] tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-[48px]">
            Engineered For Precision,
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#00ff87] via-[#00d2ff] to-[#2563eb] bg-clip-text text-transparent">
              Built For Institutional Scale
            </span>
          </h2>
        </motion.div>

        {/* ================= BENTO GRID ================= */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* ===== ROW 1 — MT5 CARD ===== */}
          <motion.div
            {...fadeUp(0)}
            className={`${cardBase} lg:col-span-4 lg:min-h-[340px] hover:border-[#00ff87]/40 hover:shadow-[0_15px_40px_rgba(0,255,135,0.12)]`}
          >
            <HoverLine color="via-[#00ff87]/50" />

            <div className="relative z-10">
              <div className="mb-3 flex w-full items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-[#00ff87] backdrop-blur-md sm:text-xs">
                  <Monitor className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  PLATFORM // MT5
                </span>
                <span className="font-mono text-[10px] text-white/40 sm:text-xs">
                  TIER-1
                </span>
              </div>

              <h3 className="text-xl font-normal leading-tight text-white sm:text-2xl">
                Trade With MT5 — The Global Standard
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">
                Award-winning MetaTrader 5 with deep market liquidity, custom
                algorithmic EAs, and cross-device synchronization.
              </p>
            </div>

            <div className="relative mt-5 flex flex-1 items-end justify-center">
              <div className="pointer-events-none absolute bottom-0 h-16 w-40 rounded-full bg-[#00ff87]/20 blur-2xl transition-all duration-500 group-hover:scale-125" />
              <img
                src={earthImg}
                alt="MT5 Platform"
                loading="lazy"
                className="relative z-10 h-auto w-[250px] max-w-full object-contain transition-transform duration-700 group-hover:scale-105 sm:w-[300px] lg:w-[270px] xl:w-[300px]"
              />
            </div>
          </motion.div>

          {/* ===== ROW 1 — PLATFORM CARD ===== */}
          <motion.div
            {...fadeUp(0.1)}
            className={`${cardBase} min-h-[240px] justify-between lg:col-span-8 lg:min-h-[340px] hover:border-[#00d2ff]/40 hover:shadow-[0_15px_40px_rgba(0,210,255,0.12)]`}
            style={{
              backgroundImage: `url(${computerimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05040b] via-[#05040b]/85 to-[#05040b]/30" />
            <HoverLine color="via-[#00d2ff]/50" />

            <div className="relative z-10 max-w-lg">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-[#00d2ff] backdrop-blur-md sm:text-xs">
                <Layers className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                MULTI-DEVICE SUITE
              </div>

              <h3 className="text-xl font-normal leading-tight text-white sm:text-2xl lg:text-3xl">
                Choose Your Trading Platform
              </h3>

              <p className="mt-2 max-w-md text-xs leading-relaxed text-white/65 sm:text-sm">
                Trade on institutional-grade infrastructure with
                sub-millisecond execution across Windows, MacOS, iOS, and
                Android.
              </p>
            </div>

            <div className="relative z-10 mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                to="/platform"
                className="group/btn inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#00ff87] via-[#00d2ff] to-[#2563eb] p-[1px] text-xs font-semibold text-white shadow-[0_0_18px_rgba(0,255,135,0.2)] transition-all duration-300 hover:scale-105 sm:text-sm"
              >
                <span className="flex items-center gap-2 rounded-full bg-[#05040b] px-5 py-2.5 transition-colors duration-300 group-hover/btn:bg-transparent">
                  <span className="uppercase tracking-wider">
                    Platform Overview
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#00ff87] transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 group-hover/btn:text-white" />
                </span>
              </Link>

              <div className="hidden items-center gap-2 sm:flex">
                {devices.map((d) => (
                  <span
                    key={d}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-white/55"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ===== ROW 2 — CASHBACK CARD (HORIZONTAL LAYOUT) ===== */}
          <motion.div
            {...fadeUp(0.15)}
            className={`${cardBase} lg:col-span-8 hover:border-[#00ff87]/40 hover:shadow-[0_15px_35px_rgba(0,255,135,0.1)]`}
          >
            <HoverLine color="via-[#00ff87]/40" />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {/* Col 1 — Offer */}
              <div className="flex flex-col">
                <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-[#00ff87]/20 bg-[#00ff87]/5 px-2.5 py-1 font-mono text-[10px] text-[#00ff87] backdrop-blur-md sm:text-xs">
                  <span className="text-sm">🔥</span>
                  REWARDS // CASHBACK
                </div>

                <h4 className="text-lg font-normal text-white sm:text-xl">
                  Trade More. Get More Rewards!
                </h4>

                <div className="mt-3 rounded-xl border border-[#00ff87]/15 bg-[#00ff87]/5 p-3.5">
                  <p className="text-sm font-medium uppercase tracking-wide text-[#00ff87]">
                    💰 Get $6 Cashback
                  </p>
                  <p className="mt-1 text-base font-medium text-white">
                    On Every 1 Lot Round Trip
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-xs font-medium text-white sm:text-sm">
                    What does 1 Lot Round Trip mean?
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/60 sm:text-sm">
                    Open a trade + Close the trade = 1 Round Trip
                  </p>
                </div>
              </div>

              {/* Col 2 — Example */}
              <div className="flex flex-col justify-center">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-white/40 sm:text-xs">
                    Example // XAUUSD Gold
                  </p>
                  <div className="space-y-1.5 text-xs sm:text-sm">
                    <p className="text-white/80">
                      <span className="mr-1">🟢</span>Open BUY — 1 Lot
                    </p>
                    <p className="text-white/80">
                      <span className="mr-1">🔴</span>Close BUY — 1 Lot
                    </p>
                    <p className="mt-2 border-t border-white/10 pt-2 font-medium text-[#00ff87]">
                      ✅ Together = 1 Lot Round Trip
                    </p>
                  </div>
                </div>
              </div>

              {/* Col 3 — Tiers + CTA */}
              <div className="flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
                  {cashbackTiers.map((t) => (
                    <div
                      key={t.lots}
                      className="flex flex-col items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center lg:flex-row lg:justify-between lg:px-3.5 lg:text-left"
                    >
                      <p className="text-sm font-medium text-white sm:text-base">
                        {t.lots}
                      </p>
                      <p className="mt-0.5 text-[10px] text-[#00ff87] sm:text-xs lg:mt-0">
                        {t.amount} Cashback*
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#00ff87] transition-colors hover:text-white sm:text-xs"
                  >
                    Start Trading & Earn Cashback
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <p className="mt-1.5 text-[9px] leading-relaxed text-white/35">
                    *Terms and conditions apply. Cashback eligibility may vary.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== ROW 2 — PARTNER CARD ===== */}
          <motion.div
            {...fadeUp(0.2)}
            className={`${cardBase} lg:col-span-4 hover:border-[#00d2ff]/40 hover:shadow-[0_15px_35px_rgba(0,210,255,0.1)]`}
          >
            <HoverLine color="via-[#00d2ff]/40" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#00d2ff]/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-[#00d2ff] backdrop-blur-md sm:text-xs">
                <Handshake className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                INSTITUTIONAL // IB
              </div>

              <h4 className="text-lg font-normal text-white sm:text-xl">
                Partner With Us
              </h4>

              <p className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">
                Become an Introducing Broker (IB) and grow with a partnership
                program built for scale.
              </p>

              <ul className="mt-4 space-y-2">
                {ibPerks.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#00d2ff]" />
                    <span className="text-xs text-white/75 sm:text-sm">
                      {text}
                    </span>
                    <Check className="ml-auto h-3.5 w-3.5 shrink-0 text-[#00ff87]" />
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/partnership"
              className="relative z-10 mt-auto inline-flex items-center gap-2 pt-4 font-mono text-[10px] uppercase tracking-wider text-[#00d2ff] transition-colors hover:text-white sm:text-xs"
            >
              Partner With Us
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;