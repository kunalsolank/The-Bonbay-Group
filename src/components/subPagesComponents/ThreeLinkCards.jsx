import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import { Badge } from "../ui/badge";

const GREEN = "#20a46a";
const NAVY = "#1a3a5c";

const DEFAULT_ICONS = [
  "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/n/wc/wc-01.svg",
  "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/n/wc/wc-02.svg",
  "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/n/wc/wc-03.svg",
];

/* ─── Automatic grid (behaviour unchanged, 4 cards now = 2×2) ── */
const GRID_BY_COUNT = {
  1: "grid-cols-1 max-w-md mx-auto",
  2: "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2",
};
const GRID_DEFAULT = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"; // 5+ cards

const GRID_BY_COLUMNS = {
  1: "grid-cols-1 max-w-md mx-auto",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const getGridClass = (count, columns) => {
  if (columns && GRID_BY_COLUMNS[columns]) return GRID_BY_COLUMNS[columns];
  return GRID_BY_COUNT[count] || GRID_DEFAULT;
};

/* ─── Animation variants ─────────────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/* ─── Per-card artwork variants (cycled automatically) ───────── */
const ART = [
  {
    beam: (c) =>
      `radial-gradient(ellipse 65% 110% at 15% -15%, ${c}66, ${c}1a 45%, transparent 72%)`,
    tile: { right: "15%", top: "24%" },
    dots: [[66, 20], [80, 9], [91, 38], [46, 62]],
    grid: 0.0,
  },
  {
    beam: (c) =>
      `radial-gradient(ellipse 40% 75% at 62% -20%, ${c}77, ${c}1a 50%, transparent 75%)`,
    tile: { right: "8%", top: "42%" },
    dots: [[58, 38], [74, 24], [88, 52], [30, 22]],
    grid: 0.0,
  },
  {
    beam: (c) =>
      `radial-gradient(ellipse 55% 60% at 30% 100%, ${c}33, transparent 70%)`,
    tile: { right: "6%", top: "46%" },
    dots: [[26, 55], [64, 22], [36, 18], [78, 60]],
    grid: 1,
  },
  {
    beam: (c) =>
      `radial-gradient(ellipse 60% 70% at 70% 0%, ${c}44, transparent 70%)`,
    tile: { right: "16%", top: "28%" },
    dots: [[20, 12], [52, 10], [34, 40], [90, 30]],
    grid: 0.0,
  },
];

/* ─── Card artwork (top half of the card) ────────────────────── */
const CardArt = ({ iconSrc, imageSrc, alt, accent, secondary, index }) => {
  const v = ART[index % ART.length];

  if (imageSrc) {
    return (
      <div className="relative h-[220px] w-full overflow-hidden">
        {/* Card image with subtle hover zoom */}
        <div className="flex items-center justify-center align-middle">
          <img
            src={imageSrc}
            alt={alt}
            className="h-44 w-44 mt-5 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-44 lg:w-44 object-contain transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            loading="lazy"
          />
        </div>

        {/* Ambient theme beam overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen transition-opacity duration-500 group-hover:opacity-50"
          style={{ background: v.beam(accent) }}
        />

        {/* Vignette gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101312] via-[#101312]/30 to-black/40" />

        {/* Number badge */}
        <span className="absolute left-5 top-5 rounded-md border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[11px] font-medium tracking-[0.2em] text-white/70 backdrop-blur-md transition-colors duration-300 group-hover:border-[#20a46a]/40 group-hover:text-[#20a46a]">
          0{index + 1}
        </span>

        {/* Floating corner arrow indicator */}
        <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-sm text-white/70 backdrop-blur-md transition-all duration-300 group-hover:border-[#20a46a] group-hover:text-[#20a46a] group-hover:rotate-45">
          ↗
        </div>

        {/* Fade artwork into the card body */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#101312]" />
      </div>
    );
  }

  return (
    <div className="relative h-[220px] w-full overflow-hidden" aria-hidden={false}>
      {/* light beam / glow */}
      <div className="absolute inset-0" style={{ background: v.beam(accent) }} />

      {/* faint grid */}
      {v.grid ? (
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `linear-gradient(${accent}1f 1px, transparent 1px), linear-gradient(90deg, ${accent}1f 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 95%)",
            maskImage: "linear-gradient(to bottom, black 20%, transparent 95%)",
          }}
        />
      ) : null}

      {/* glowing particles */}
      {v.dots.map(([x, y], i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            background: accent,
            boxShadow: `0 0 12px 3px ${accent}99, 0 0 0 4px ${accent}1f`,
          }}
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{
            duration: 3 + i * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* isometric platform + floating icon tile */}
      <div className="absolute" style={v.tile}>
        <div
          className="absolute left-1/2 top-[58px] h-[110px] w-[110px] -translate-x-1/2 rounded-2xl"
          style={{
            transform: "translateX(-50%) perspective(600px) rotateX(62deg) rotateZ(45deg)",
            background: `linear-gradient(135deg, ${accent}40, ${secondary}33)`,
            border: `1px solid ${accent}55`,
            boxShadow: `0 0 40px ${accent}33`,
          }}
        />
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-[84px] w-[84px] items-center justify-center rounded-[22px] backdrop-blur-md transition-transform duration-500 group-hover:scale-105"
          style={{
            background: `linear-gradient(145deg, ${accent}2e, rgba(8,9,8,0.75))`,
            border: `1px solid ${accent}59`,
            boxShadow: `0 10px 40px -8px ${accent}66, inset 0 1px 0 rgba(255,255,255,0.12)`,
          }}
        >
          <img
            src={iconSrc}
            alt={alt}
            className="h-10 w-10 select-none object-contain"
            draggable={false}
          />
        </motion.div>
      </div>

      {/* fade artwork into the card body */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#101312]" />
    </div>
  );
};

/* ─── Single card (reusable on its own) ──────────────────────── */
export const LinkCard = ({
  card,
  index = 0,
  accent = GREEN,
  secondary = NAVY,
}) => {
  const imageSrc = card.image || card.imageSrc || card.img;
  const iconSrc = card.icon || card.iconSrc || DEFAULT_ICONS[index % DEFAULT_ICONS.length];
  const alt = card.title || `feature-${index + 1}`;

  return (
    <motion.div variants={cardVariants} className="group relative h-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#101312] to-[#0a0c0b] transition-colors duration-500 group-hover:border-white/[0.16]">
        <CardArt
          imageSrc={imageSrc}
          iconSrc={iconSrc}
          alt={alt}
          accent={accent}
          secondary={secondary}
          index={index}
        />

        <div className="relative flex flex-1 flex-col px-7 pb-7 pt-1">
          <h3 className="mb-2.5 text-[22px] font-medium leading-snug tracking-tight text-white">
            {card.title}
          </h3>

          <p className="flex-1 text-sm leading-[1.75] text-[#7b827d]">
            {card.description}
          </p>

        </div>

        {/* bottom sweep on hover */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
          style={{ background: `linear-gradient(90deg, ${accent}, ${secondary})` }}
        />
      </div>
    </motion.div>
  );
};

/* ─── Section component (props unchanged) ──────────────────────
   <LinkCardsGrid
     eyebrow="Explore"
     heading="Explore Our Services"
     subheading="..."
     cards={[{ title, description, link, cta, icon }, ...]}
     columns={3}          // optional, otherwise automatic
   />
─────────────────────────────────────────────────────────────── */
const LinkCardsGrid = ({
  eyebrow = "Explore",
  heading = "Explore Our Services",
  subheading = "Discover the tools and opportunities designed for modern traders.",
  cards = [],
  columns,
  accent = GREEN,
  secondary = NAVY,
  className = "",
}) => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.4 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });

  if (!cards.length) return null;

  return (
    <section
      className={`relative overflow-hidden bg-[#080908] pb-28 pt-10 text-white md:pb-36 ${className}`}
    >

      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-200px] top-[-200px] h-[520px] w-[520px] rounded-full blur-[160px]"
        style={{ background: `${accent}0d` }}
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-[-200px] left-[-200px] h-[520px] w-[520px] rounded-full blur-[160px]"
        style={{ background: `${secondary}1a` }}
      />

      <div className="relative mx-auto w-[90%] max-w-6xl">
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <Badge
            variant="success"
            className="mb-6 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] bg-gradient-to-r from-[#1fa864]/20 via-[#258d87]/20 to-[#3959a6]/20 border border-[#1fa864]/40 text-[#20d882]"
          >
            {eyebrow}
          </Badge>

          {/* Radiant glow behind the title */}
          <div className="relative inline-block w-full">
            {/* Glow blob */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              style={{
                width: "110%",
                height: "200%",
                background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${accent}28, ${secondary}12 55%, transparent 75%)`,
                filter: "blur(28px)",
              }}
            />

            <h2 className="relative z-10 mt-4 text-balance text-4xl font-semibold leading-[1.07] tracking-tight md:text-[3.5rem]">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${accent} 0%, #ffffff 40%, #ffffff 60%, ${secondary} 100%)`,
                }}
              >
                {heading}
              </span>
            </h2>
          </div>


          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#777c73] md:text-lg">
            {subheading}
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className={`grid items-stretch gap-5 ${getGridClass(
            cards.length,
            columns
          )}`}
        >
          {cards.map((card, index) => (
            <LinkCard
              key={card.id || card.title || index}
              card={card}
              index={index}
              accent={accent}
              secondary={secondary}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LinkCardsGrid