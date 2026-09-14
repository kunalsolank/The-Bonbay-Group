import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import binance from "../assets/payment-binance.svg";
import binanceAlt from "../assets/payment-binance-alt.svg";
import skrill from "../assets/payment-skrill.svg";
import neteller from "../assets/payment-neteller.svg";
import gpay from "../assets/payment-gpay.svg";
import cryptoAlt from "../assets/payment-crypto-alt.svg";
import bankTransfer from "../assets/payment-bank-transfer.svg";
import mastercard from "../assets/payment-mastercard-light.svg";
import applePay from "../assets/payment-applepay-light.svg";
import visa from "../assets/payment-visa.svg";
import crypto from "../assets/payment-crypto.svg";
import pix from "../assets/payment-pix.svg";

const row1 = [
  { icon: visa, name: "Visa", size: "small", tag: "CARD" },
  { icon: mastercard, name: "Mastercard", size: "large", tag: "CARD" },
  { icon: skrill, name: "Skrill", size: "small", tag: "WALLET" },
  { icon: neteller, name: "Neteller", size: "large", tag: "WALLET" },
  { icon: binance, name: "Binance", size: "featured", tag: "CRYPTO" },
  { icon: gpay, name: "Google Pay", size: "large", tag: "WALLET" },
];

const row2 = [
  { icon: applePay, name: "Apple Pay", size: "small", tag: "WALLET" },
  { icon: bankTransfer, name: "Bank Transfer", size: "large", tag: "BANK" },
  { icon: pix, name: "Pix", size: "small", tag: "BANK" },
  { icon: crypto, name: "Crypto", size: "large", tag: "CRYPTO" },
  { icon: binanceAlt, name: "Binance Pay", size: "small", tag: "CRYPTO" },
  { icon: cryptoAlt, name: "Crypto Wallet", size: "featured", tag: "CRYPTO" },
];

const IntegrationCard = ({ item }) => {
  const isFeatured = item.size === "featured";
  const isLarge = item.size === "large";

  return (
    <div
      className={`group relative flex flex-shrink-0 items-center justify-center rounded-2xl md:rounded-3xl border transition-all duration-500 hover:scale-110 hover:z-30 cursor-pointer ${isFeatured
        ? "h-20 w-20 lg:h-24 lg:w-24 xl:h-36 xl:w-36 border-[#00ff87]/60 bg-[#07090e] shadow-[0_0_35px_rgba(0,255,135,0.3)] xl:shadow-[0_0_50px_rgba(0,255,135,0.35)]"
        : isLarge
          ? "h-16 w-16 lg:h-20 lg:w-20 xl:h-28 xl:w-28 border-white/15 bg-[#0a0c14]/80 shadow-[0_8px_24px_rgba(0,0,0,0.45)] hover:border-[#00d2ff]/50 hover:shadow-[0_0_35px_rgba(0,210,255,0.25)]"
          : "h-14 w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 border-white/10 bg-[#07090e]/70 shadow-[0_6px_20px_rgba(0,0,0,0.35)] hover:border-[#00ff87]/40 hover:shadow-[0_0_30px_rgba(0,255,135,0.2)]"
        } backdrop-blur-xl`}
    >
      {/* Top Border Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff87]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Center Icon */}
      <img
        src={item.icon}
        alt={item.name}
        className={`object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${isFeatured
            ? "h-[68%] w-[82%] xl:h-[74%] xl:w-[86%]"
            : isLarge
              ? "h-[62%] w-[78%] xl:h-[68%] xl:w-[82%]"
              : "h-[58%] w-[76%] xl:h-[64%] xl:w-[80%]"
          }`}
      />

      {/* Hover Floating Tag */}
      <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/80 px-2 py-0.5 text-[10px] font-mono tracking-wider text-[#00ff87] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1 z-40 shadow-lg">
        {item.tag}
      </div>
    </div>
  );
};

const IntegrationSection = () => {
  const containerRef = useRef(null);

  // Track scroll position across the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // GSAP-style smooth scroll physics via Framer Motion transforms:
  // Row 1 drifts from left to right as the user scrolls down
  const xRow1 = useTransform(scrollYProgress, [0, 1], [-180, 180]);
  // Row 2 drifts inversely from right to left
  const xRow2 = useTransform(scrollYProgress, [0, 1], [180, -180]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#05040b] pt-10 sm:pt-14 lg:pt-16 xl:pt-20 pb-14 sm:pb-20 lg:pb-24 xl:pb-28"
    >
      {/* Top & Bottom seamless blend gradients */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#05040b] via-[#05040b]/90 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-[#05040b]/80 to-[#05040b] z-10" />

      {/* Ambient Lighting & Mesh Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[560px] xl:h-[500px] xl:w-[800px] rounded-full bg-gradient-to-r from-[#00d2ff]/10 via-[#00ff87]/12 to-[#2563eb]/10 blur-[130px] xl:blur-[170px] z-0" />
      <div className="pointer-events-none absolute left-[-80px] top-1/3 h-56 w-56 xl:h-72 xl:w-72 rounded-full bg-[#00ff87]/15 blur-[100px] xl:blur-[120px] z-0" />
      <div className="pointer-events-none absolute right-[-80px] bottom-1/3 h-56 w-56 xl:h-72 xl:w-72 rounded-full bg-[#00d2ff]/15 blur-[100px] xl:blur-[120px] z-0" />

      {/* Section Header */}
      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center mb-8 sm:mb-12 lg:mb-14 xl:mb-16">
        <div className="mb-3 xl:mb-4 inline-flex items-center gap-2 rounded-full border border-[#00ff87]/30 bg-[#00ff87]/10 px-3 xl:px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,135,0.15)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00ff87] animate-ping" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00ff87]">
            Seamless Ecosystem Connectivity
          </span>
        </div>

        <h2 className="bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-2xl font-normal tracking-tight text-transparent sm:text-3xl lg:text-4xl xl:text-5xl leading-[1.15]">
          Integrated Across Global Trading Networks
        </h2>
      </div>

      {/* Left/Right Vignette Edge Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#05040b] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#05040b] to-transparent z-20" />

      {/* Kinetic Interactive Tracks */}
      <div className="relative z-10 flex flex-col gap-4 lg:gap-6 xl:gap-10 py-3 lg:py-4 overflow-hidden">

        {/* ROW 1: Scrolls from Left to Right */}
        <motion.div
          style={{ x: xRow1 }}
          className="flex items-center gap-3 lg:gap-5 xl:gap-8 will-change-transform"
        >
          {/* Multiply array so it creates an infinite continuous visual band */}
          {[...row1, ...row1].map((item, idx) => (
            <IntegrationCard key={`r1-${idx}`} item={item} />
          ))}
        </motion.div>

        {/* ROW 2: Scrolls from Right to Left */}
        <motion.div
          style={{ x: xRow2 }}
          className="flex items-center gap-3 lg:gap-5 xl:gap-8 will-change-transform"
        >
          {[...row2, ...row2].map((item, idx) => (
            <IntegrationCard key={`r2-${idx}`} item={item} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default IntegrationSection;
