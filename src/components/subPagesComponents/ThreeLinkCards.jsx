import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// ── Reusable UI components from existing library ──
import { Badge } from "../ui/badge";
import { ShineBorder } from "../ui/ShineBorder";

const GREEN = "#20a46a";
const NAVY  = "#1a3a5c";

/* Default illustration images per card position */
const DEFAULT_ICONS = [
  "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/n/wc/wc-01.svg",
  "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/n/wc/wc-02.svg",
  "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/n/wc/wc-03.svg",
];

/* ─── animation variants ─────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      /* cards pop in one-by-one, bottom → up */
      staggerChildren: 0.18,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],   /* custom spring-like ease */
    },
  },
};

const headerVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Single card ──────────────────────────────────────────── */
const FeatureCard = ({ card, index }) => {
  const isCenter    = index === 1;
  const shineColors = isCenter
    ? [GREEN, NAVY, GREEN]
    : [NAVY, GREEN, NAVY];

  const iconSrc = card.icon || DEFAULT_ICONS[index];

  return (
    <motion.div variants={cardVariants} className="relative group h-full">
      {/* ShineBorder — animated glowing border (existing UI lib) */}
      <ShineBorder
        shineColor={shineColors}
        borderWidth={1.5}
        duration={6}
        className="rounded-2xl"
      />

      {/* Card shell */}
      <div className="relative flex flex-col h-full rounded-2xl bg-[#0d0e0d] border border-white/[0.07] p-7 overflow-hidden transition-all duration-500 group-hover:border-white/[0.14] group-hover:bg-[#101110]">

        {/* Top row: illustration image + number badge */}
        <div className="flex items-start justify-between mb-7">

          {/* SVG illustration image */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
            style={{
              background: `${GREEN}0f`,
              border: `1px solid ${GREEN}25`,
            }}
          >
            <img
              src={iconSrc}
              alt={card.title || `feature-${index + 1}`}
              className="w-8 h-8 object-contain select-none"
              draggable={false}
            />
          </div>

          {/* Number badge — existing Badge component */}
          <Badge
            variant="outline"
            className="text-[10px] font-mono tracking-[0.18em] text-white/25 border-white/[0.08] px-2.5 py-0.5"
          >
            0{index + 1}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-[22px] font-semibold leading-snug tracking-tight text-white mb-4 transition-colors duration-300 group-hover:text-[#20a46a]">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-[1.8] text-[#6b7068] flex-1">
          {card.description}
        </p>

        {/* Divider */}
        <div className="my-6 h-px bg-white/[0.06]" />

        {/* CTA link */}
        <Link
          to={card.link || "#"}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/55 group-hover:text-white transition-colors duration-300"
        >
          <span>{card.cta || "Explore"}</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 text-[15px]">
            →
          </span>
        </Link>

        {/* Bottom gradient sweep on hover */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
          style={{
            background: `linear-gradient(90deg, ${isCenter ? GREEN : NAVY}, ${isCenter ? NAVY : GREEN})`,
          }}
        />

        {/* Corner radial glow on hover */}
        <div
          className="absolute top-0 right-0 w-28 h-28 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at top right, ${isCenter ? GREEN : NAVY}1a, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

/* ─── Section wrapper ──────────────────────────────────────── */
const ThreeLinkCards = ({
  eyebrow    = "Explore",
  heading    = "Explore Our Services",
  subheading = "Discover the tools and opportunities designed for modern traders.",
  cards      = [],
}) => {
  /* trigger once the section is 15% in view */
  const sectionRef  = useRef(null);
  const headerRef   = useRef(null);
  const gridRef     = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });
  const gridInView   = useInView(gridRef,   { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-36 bg-[#080908] text-white overflow-hidden"
    >
      {/* Ambient glows */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-200px] top-[-200px] w-[520px] h-[520px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: `${GREEN}0d` }}
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-200px] bottom-[-200px] w-[520px] h-[520px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: `${NAVY}1a` }}
      />

      <div className="relative w-[90%] max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          {/* Eyebrow — existing Badge component */}
          <Badge
            variant="success"
            className="mb-6 tracking-[0.22em] uppercase text-[11px] font-semibold px-4 py-1.5"
          >
            {eyebrow}
          </Badge>

          <h2 className="mt-4 text-4xl md:text-[3.5rem] font-semibold leading-[1.07] tracking-tight text-balance">
            {heading}
          </h2>

          <p className="mt-6 text-[#777c73] text-base md:text-lg leading-8 max-w-2xl mx-auto">
            {subheading}
          </p>
        </motion.div>

        {/* ── Card grid — staggered one-by-one bottom-up ── */}
        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-5 items-stretch"
        >
          {cards.slice(0, 3).map((card, index) => (
            <FeatureCard key={index} card={card} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeLinkCards;
