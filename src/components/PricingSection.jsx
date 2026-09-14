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
    buttonLink: "/product/standard-plan",
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
    buttonLink: "/product/premium-plan",
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
    buttonLink: "/product/deluxe-plan",
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
    buttonLink: "/product/deluxe-plan",
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
      className="relative overflow-hidden bg-[#05040b] pt-10 sm:pt-12 lg:pt-14 xl:pt-16 pb-6 sm:pb-8 lg:pb-10"
    >
      {/* Background Circle */}
      <div className="section-circle absolute inset-0 pointer-events-none" />

      {/* Bottom Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#05040b]/80 to-[#05040b] z-0" />

      {/* Background Image */}
      <img
        src={pricingBg}
        alt=""
        className="pointer-events-none absolute left-1/2 top-[15%] sm:top-[14%] lg:top-[16%] xl:top-[15%] z-0 w-full max-w-[240px] sm:max-w-xs lg:max-w-sm xl:max-w-md -translate-x-1/2 object-contain opacity-35"
      />

      <div className="container relative z-10 mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}
        <div
          className={`relative mb-8 text-center sm:mb-10 lg:mb-12 xl:mb-14 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="relative z-10 mt-2 bg-linear-to-r from-white to-gray-400 bg-clip-text text-2xl font-medium leading-tight text-transparent sm:text-3xl lg:text-4xl xl:text-5xl">
            Choose the Account That Suits You
          </h2>

          {/* Decorative Line */}
          <div className="pointer-events-none absolute inset-x-0 top-full z-0 mt-1 flex justify-center opacity-35">
            <div className="relative h-10 w-full max-w-xs sm:h-12 sm:max-w-sm lg:h-16 lg:max-w-md xl:h-20 xl:max-w-lg">
              <img
                src={pricingLineBg}
                alt=""
                className="absolute inset-0 h-full w-full object-contain"
              />

              <img
                src={pricingLineActive}
                alt=""
                className={`absolute inset-0 h-full w-full object-contain transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-75"
                }`}
                style={{
                  transformOrigin: "center",
                }}
              />
            </div>
          </div>
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
        className={`relative flex flex-1 flex-col overflow-hidden rounded-2xl p-5 sm:p-6 lg:p-5 xl:p-6 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:-translate-y-2 ${
          isPopular
            ? "border-2 border-[#00ff87]/50 bg-[#07060f]/98 shadow-[0_10px_40px_-15px_rgba(0,255,135,0.15)]"
            : "border border-white/10 bg-[#07060f]/95 hover:border-[#00ff87]/35 hover:shadow-[0_20px_50px_-15px_rgba(0,255,135,0.2)]"
        }`}
      >
        {/* Top Shimmer */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00ff87]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Content */}
        <div className="flex flex-col flex-1">
          {/* ================= TOP ================= */}
          <div className="relative z-10 mb-4 flex items-center justify-between gap-3 sm:mb-5">
            {/* Icon */}
            <img
              src={plan.imageSrc}
              alt={`${plan.name} logo`}
              className="h-9 w-9 sm:h-10 sm:w-10 lg:h-9 lg:w-9 xl:h-11 xl:w-11 object-contain transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-3"
            />

            {/* Tag */}
            <div
              className={`whitespace-nowrap rounded-full px-3.5 py-1 sm:px-4 sm:py-1.5 lg:px-3.5 lg:py-1 text-[11px] sm:text-xs font-medium transition-all duration-300 ${
                isPopular
                  ? "bg-[#00ff87]/20 text-[#baffdf]"
                  : "bg-gray-800/80 text-gray-300 group-hover:bg-[#00ff87]/15 group-hover:text-[#baffdf]"
              }`}
            >
              {plan.tag}
            </div>
          </div>

          {/* ================= ACCOUNT INFO ================= */}
          <div className="relative z-10 mb-4 border-b border-white/10 pb-4 sm:mb-5 sm:pb-5">
            <h3 className="mb-1.5 text-lg font-normal text-white transition-colors duration-300 sm:text-xl xl:text-2xl group-hover:text-[#baffdf]">
              {plan.name}
            </h3>

            <p className="text-[11px] leading-5 text-white/70 sm:text-xs sm:leading-5">
              {plan.description}
            </p>
          </div>

          {/* ================= FEATURES ================= */}
          <ul className="relative z-10 mb-5 flex list-none flex-col gap-2 sm:gap-2.5 p-0">
            {plan.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-2 border-b border-white/[0.04] pb-1.5 sm:pb-2 last:border-none"
              >
                <div className="flex min-w-0 items-center gap-2 sm:gap-2.5">
                  {/* Check Icon */}
                  <svg
                    className="h-3.5 w-3.5 shrink-0 text-[#EED85F] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  {/* Label */}
                  <span className="truncate text-[11px] leading-5 text-white/80 sm:text-xs">
                    {feature.label}
                  </span>
                </div>

                {/* Value */}
                <span className="shrink-0 text-[11px] font-semibold tracking-wide text-white sm:text-xs">
                  {feature.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= BUTTON ================= */}
        <Link
          to={plan.buttonLink}
          className="group/btn relative z-10 mt-auto inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] px-5 py-3 text-[11px] font-medium uppercase tracking-wide text-white transition-all duration-300 sm:px-6 sm:py-3.5 sm:text-xs xl:px-7 xl:py-3.5 hover:shadow-[0_10px_30px_-8px_rgba(0,255,135,0.45)]"
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