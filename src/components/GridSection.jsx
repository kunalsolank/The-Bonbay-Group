
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Monitor,
  Layers,
  Users,
  Handshake,
} from "lucide-react";

import earthImg from "../assets/pl-img.webp";
import computerimg from "../assets/Computer.avif";

const GridSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#05040b] py-12 sm:py-16 lg:py-20">

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
          className="mb-9 text-center sm:mb-12 lg:mb-14"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00ff87]/30 bg-[#00ff87]/10 px-3 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#00ff87]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00ff87] sm:text-xs">
              Next-Gen Ecosystem
            </span>
          </div>

          <h2 className="mx-auto max-w-4xl bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-3xl font-normal leading-[1.1] tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-[52px]">
            Engineered For Precision,
            <br className="hidden sm:block" />

            <span className="bg-gradient-to-r from-[#00ff87] via-[#00d2ff] to-[#2563eb] bg-clip-text text-transparent">
              Built For Institutional Scale
            </span>
          </h2>
        </motion.div>

        {/* ================= BENTO GRID ================= */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">

          {/* ================= LEFT CARD ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="
              group relative
              flex flex-col justify-between
              overflow-hidden
              rounded-2xl
              border border-white/[0.12]
              bg-[#07090e]/80
              p-5
              backdrop-blur-xl
              transition-all duration-500

              sm:p-6
              lg:col-span-4
              lg:p-7
              lg:min-h-[430px]

              hover:-translate-y-1
              hover:border-[#00ff87]/40
              hover:shadow-[0_15px_40px_rgba(0,255,135,0.12)]
            "
          >

            {/* Hover Line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff87]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">

              <div className="mb-3 flex w-full items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono text-[#00ff87] backdrop-blur-md sm:text-xs">
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

              <p className="mt-3 max-w-md text-xs leading-relaxed text-white/60 sm:text-sm">
                Experience award-winning MetaTrader 5 with deep market
                liquidity, custom algorithmic EAs, and cross-device
                synchronization.
              </p>
            </div>

            {/* Globe */}
            <div className="relative mt-5 flex justify-center">
              <div className="pointer-events-none absolute bottom-0 h-20 w-36 rounded-full bg-[#00ff87]/20 blur-2xl transition-all duration-500 group-hover:scale-125" />

              <img
                src={earthImg}
                alt="Platform Globe"
                className="
                  relative z-10
                  h-auto
                  w-[180px]
                  object-contain
                  transition-transform
                  duration-700
                  group-hover:scale-105

                  sm:w-[200px]
                  lg:w-[210px]
                "
              />
            </div>
          </motion.div>

          {/* ================= RIGHT AREA ================= */}
          <div className="flex flex-col gap-4 lg:col-span-8">

            {/* ================= PLATFORM CARD ================= */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="
                group relative
                flex min-h-[250px]
                flex-col justify-between
                overflow-hidden
                rounded-2xl
                border border-white/[0.12]
                bg-[#07090e]/80
                p-5
                backdrop-blur-xl
                transition-all duration-500

                sm:min-h-[270px]
                sm:p-6

                lg:min-h-[290px]
                lg:p-7

                hover:-translate-y-1
                hover:border-[#00d2ff]/40
                hover:shadow-[0_15px_40px_rgba(0,210,255,0.12)]
              "
              style={{
                backgroundImage: `url(${computerimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              {/* Dark Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05040b] via-[#05040b]/85 to-[#05040b]/30" />

              {/* Hover Line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d2ff]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 max-w-lg">

                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono text-[#00d2ff] backdrop-blur-md sm:text-xs">
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

              <div className="relative z-10 mt-5">
                <Link
                  to="/login"
                  className="group/btn inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#00ff87] via-[#00d2ff] to-[#2563eb] p-[1px] text-xs font-semibold text-white shadow-[0_0_18px_rgba(0,255,135,0.2)] transition-all duration-300 hover:scale-105 sm:text-sm"
                >
                  <span className="flex items-center gap-2 rounded-full bg-[#05040b] px-5 py-2.5 transition-colors duration-300 group-hover/btn:bg-transparent">
                    <span className="uppercase tracking-wider">
                      Platform Overview
                    </span>

                    <ArrowUpRight className="h-3.5 w-3.5 text-[#00ff87] transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 group-hover/btn:text-white" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* ================= BOTTOM CARDS ================= */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              {/* REFER CARD */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="
                  group relative
                  flex flex-col justify-between
                  rounded-2xl
                  border border-white/[0.12]
                  bg-[#07090e]/80
                  p-5
                  backdrop-blur-xl
                  transition-all duration-500

                  sm:p-6
                  lg:p-7

                  hover:-translate-y-1
                  hover:border-[#00ff87]/40
                  hover:shadow-[0_15px_35px_rgba(0,255,135,0.1)]
                "
              >

                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff87]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono text-[#00ff87] backdrop-blur-md sm:text-xs">
                    <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    REWARDS // REFER
                  </div>

                  <h4 className="text-lg font-normal text-white sm:text-xl">
                    Refer a Friend
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">
                    Choose your bonus: a direct one-off cash credit or
                    permanently reduced commission spreads on your active
                    trades.
                  </p>
                </div>

                <Link
                  to="/login"
                  className="mt-5 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#00ff87] transition-colors hover:text-white sm:text-xs"
                >
                  Get Started
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>

              {/* PARTNER CARD */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="
                  group relative
                  flex flex-col justify-between
                  rounded-2xl
                  border border-white/[0.12]
                  bg-[#07090e]/80
                  p-5
                  backdrop-blur-xl
                  transition-all duration-500

                  sm:p-6
                  lg:p-7

                  hover:-translate-y-1
                  hover:border-[#00d2ff]/40
                  hover:shadow-[0_15px_35px_rgba(0,210,255,0.1)]
                "
              >

                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d2ff]/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono text-[#00d2ff] backdrop-blur-md sm:text-xs">
                    <Handshake className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    INSTITUTIONAL // IB
                  </div>

                  <h4 className="text-lg font-normal text-white sm:text-xl">
                    Partner With Us
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">
                    Become an Introducing Broker (IB) with competitive tiered
                    rebate schedules, customized sub-affiliate portals, and
                    dedicated RM.
                  </p>
                </div>

                <Link
                  to="/login"
                  className="mt-5 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#00d2ff] transition-colors hover:text-white sm:text-xs"
                >
                  Partner With Us
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;

