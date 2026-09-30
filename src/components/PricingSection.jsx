import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import popularPricingIcon from "../assets/x icons.png";
import pricingBg from "../assets/Pricing-table-bg.png";
import pricingLineBg from "../assets/pricing-table-line-bg.svg";
import pricingLineActive from "../assets/pricing-table-line-active.svg";

const plans = [
  {
    id: "standard",
    tag: "STP",
    name: "Standard Account",
    description: "Confidence, Beginner-friendly, Balanced features.",
    price: "$0",
    pricePeriod: "/MONTH",
    imageSrc: popularPricingIcon,
    features: [
      { label: "Minimum Deposit", value: "$100" },
      { label: "Spreads (Metals)", value: "$38 To 42" },
      { label: "Spreads (Major Currency)", value: "$22 To 25" },
      { label: "Max Leverage", value: "1:1000*" },
      { label: "Commission Plan (Per Lot)", value: "$0" },
      { label: "Margin Call / Stop Out (%)", value: "100/30" },
      { label: "Trading Platform", value: "MT5" },
    ],
    buttonLink: "https://portal.dollrexcapital.com/register-new/",
  },
  {
    id: "premium",
    tag: "STP",
    name: "Pro Account",
    description: "Advanced features, Experienced traders, More control.",
    price: "$07.99",
    pricePeriod: "/MONTH",
    imageSrc: popularPricingIcon,
    features: [
      { label: "Minimum Deposit", value: "$500" },
      { label: "Spreads (Metals)", value: "$28 To 32" },
      { label: "Spreads (Major Currency)", value: "$17 To 22" },
      { label: "Max Leverage", value: "1:500*" },
      { label: "Commission Plan (Per Lot)", value: "$0" },
      { label: "Margin Call / Stop Out (%)", value: "100/30" },
      { label: "Trading Platform", value: "MT5" },
    ],
    buttonLink: "https://portal.dollrexcapital.com/register-new/",
    popular: true,
  },
  {
    id: "deluxe",
    tag: "STP",
    name: "RAW Account",
    description:
      "True market access, High-volume traders, Transparency & speed.",
    price: "$11.99",
    pricePeriod: "/MONTH",
    imageSrc: popularPricingIcon,
    features: [
      { label: "Minimum Deposit", value: "$1000" },
      { label: "Spreads (Metals)", value: "$20 To 25" },
      { label: "Spreads (Major Currency)", value: "$9 To 12" },
      { label: "Max Leverage", value: "1:500*" },
      { label: "Commission Plan (Per Lot)", value: "$0" },
      { label: "Margin Call / Stop Out (%)", value: "100/30" },
      { label: "Trading Platform", value: "MT5" },
    ],
    buttonLink: "https://portal.dollrexcapital.com/register-new/",
  },
  {
    id: "custom",
    tag: "STP",
    name: "Zero Spread Account",
    description:
      "True market access, High-volume traders, Transparency & speed.",
    price: "$11.99",
    pricePeriod: "/MONTH",
    imageSrc: popularPricingIcon,
    features: [
      { label: "Minimum Deposit", value: "$10,000" },
      { label: "Spreads (Metals)", value: "$0" },
      { label: "Spreads (Major Currency)", value: "$0" },
      { label: "Max Leverage", value: "1:500*" },
      { label: "Commission Plan (Per Lot)", value: "$0" },
      { label: "Margin Call / Stop Out (%)", value: "100/30" },
      { label: "Trading Platform", value: "MT5" },
    ],
    buttonLink: "https://portal.dollrexcapital.com/register-new/",
  },
];

const PricingSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip bg-[#05040b] pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-16"
    >
      {/* Ambient glow behind heading */}
      <div
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] opacity-25 z-0"
        style={{
          background: "radial-gradient(circle at center, #1fa864 0%, #258d87 50%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER WITH SHOOTING LIGHT ARC ================= */}
        <div
          className={`relative mb-12 sm:mb-16 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Luminous Curved Arc / Light Trail SVG */}
          <div className="relative mx-auto w-full max-w-[500px] h-16 sm:h-20 flex items-center justify-center pointer-events-none">
            {/* Sparkling Star Particles */}
            <span className="absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-white opacity-70" />
            <span className="absolute left-[30%] top-[10%] h-1.5 w-1.5 rounded-full bg-[#baffdf] shadow-[0_0_8px_#1fa864] opacity-90" />
            <span className="absolute left-[40%] top-[45%] h-0.5 w-0.5 rounded-full bg-white opacity-50" />
            <span className="absolute right-[35%] top-[15%] h-1 w-1 rounded-full bg-white opacity-80" />
            <span className="absolute right-[20%] top-[35%] h-1.5 w-1.5 rounded-full bg-[#baffdf] shadow-[0_0_8px_#1fa864] opacity-90" />
            <span className="absolute right-[10%] top-[20%] h-1 w-1 rounded-full bg-white opacity-60" />

            <svg
              viewBox="0 0 600 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
            >
              <defs>
                <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1fa864" stopOpacity="0" />
                  <stop offset="50%" stopColor="#1fa864" stopOpacity="0.3" />
                  <stop offset="80%" stopColor="#baffdf" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                </linearGradient>
                <filter id="glowBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d="M 50,65 Q 300,15 550,45"
                stroke="url(#arcGlow)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#glowBlur)"
              />
              <path
                d="M 50,65 Q 300,15 550,45"
                stroke="url(#arcGlow)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="550" cy="45" r="3" fill="#ffffff" filter="url(#glowBlur)" />
              <circle cx="550" cy="45" r="8" fill="#1fa864" opacity="0.3" />
            </svg>
          </div>

          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#1fa864] mb-3">
            CHOOSE THE PERFECT PLAN TODAY!
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-medium text-white tracking-tight leading-tight">
            Pick A Plan That&apos;s Right For You
          </h2>
        </div>

        {/* ================= PRICING SLIDER ================= */}
        <Swiper
          spaceBetween={14}
          slidesPerView={1}
          breakpoints={{
            480: {
              slidesPerView: 1.1,
              spaceBetween: 14,
            },
            640: {
              slidesPerView: 1.6,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.4,
              spaceBetween: 18,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          modules={[Autoplay, Pagination]}
          loop={true}
          className="pricing-swiper pb-10 sm:pb-12"
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={plan.id} className="h-auto py-1.5">
              <PricingCard
                plan={plan}
                index={index}
                isVisible={isVisible}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

/* ============================================================
   PRICING CARD
============================================================ */

const PricingCard = ({ plan, index, isVisible }) => {
  const isPopular = plan.popular;

  return (
    <div
      className={`group relative h-full flex flex-col transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
      }}
    >
      {/* Ambient Hover Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00d2ff]/15 via-[#00ff87]/20 to-[#2563eb]/15 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

      {/* Top Hover Glow */}
      <div className="pointer-events-none absolute -top-5 left-1/2 h-20 w-40 -translate-x-1/2 rounded-full bg-gradient-to-t from-[#00ff87]/25 via-[#00d2ff]/15 to-transparent opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

      {/* ================= CARD ================= */}
      <div
        className={`relative flex flex-1 flex-col overflow-hidden rounded-[20px] p-6 lg:p-7 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 ${
          isPopular
            ? "bg-gradient-to-b from-[#1fa864]/40 via-[#1fa864]/10 to-[#0a0a0f] border border-[#1fa864]/40 shadow-[0_15px_40px_-10px_rgba(31,168,100,0.2)]"
            : "bg-[#0c0d12] border border-white/5 hover:border-white/10 hover:shadow-xl"
        }`}
      >
        {/* ================= TOP / HEADER ================= */}
        <div className="relative z-10 mb-6 flex items-center justify-between gap-3">
          {/* Brand Icon */}
          <img
            src={plan.imageSrc}
            alt={`${plan.name} logo`}
            className={`h-9 w-9 lg:h-10 lg:w-10 object-contain transition-transform duration-500 group-hover:scale-110 ${
              isPopular ? "brightness-200" : "opacity-80"
            }`}
          />

          {/* Tag Pill */}
          <div
            className={`whitespace-nowrap rounded-full px-5 py-1.5 text-xs font-semibold transition-all duration-300 ${
              isPopular
                ? "bg-white text-[#05040b] shadow-md"
                : "bg-[#1f2230] text-gray-300"
            }`}
          >
            {plan.tag}
          </div>
        </div>

        {/* ================= ACCOUNT INFO ================= */}
        <div className="relative z-10 mb-5 border-b border-white/[0.06] pb-5">
          <h3 className="mb-2 text-xl font-medium text-white transition-colors duration-300 lg:text-2xl group-hover:text-[#baffdf]">
            {plan.name}
          </h3>

          <p className="text-xs leading-5 text-white/60">
            {plan.description}
          </p>
        </div>

        {/* ================= FEATURES ================= */}
        <ul className="relative z-10 mb-8 flex list-none flex-col gap-3 p-0 flex-1">
          {plan.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center justify-between gap-2 border-b border-white/[0.04] pb-2 last:border-none"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                {/* Check Icon */}
                <svg
                  className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    isPopular ? "text-[#1fa864]" : "text-[#EED85F]/70"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                {/* Label */}
                <span className="truncate text-[11px] sm:text-xs text-white/75">
                  {feature.label}
                </span>
              </div>

              {/* Value */}
              <span className="shrink-0 text-[11px] sm:text-xs font-semibold tracking-wide text-white">
                {feature.value}
              </span>
            </li>
          ))}
        </ul>

        {/* ================= BUTTON ================= */}
        <Link
          to={plan.buttonLink}
          className={`group/btn relative z-10 mt-auto inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3.5 text-xs font-medium uppercase tracking-wider text-white transition-all duration-300 ${
            isPopular
              ? "bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] hover:shadow-[0_10px_25px_-5px_rgba(31,168,100,0.4)]"
              : "bg-[#1f2230] hover:bg-[#2a2e40]"
          }`}
        >
          <span className="transition-transform duration-300 group-hover/btn:-translate-x-1">
            Get Started
          </span>
          <span className="translate-x-[-8px] opacity-0 transition-all duration-300 group-hover/btn:translate-x-0 group-hover/btn:opacity-100">
            →
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PricingSection;