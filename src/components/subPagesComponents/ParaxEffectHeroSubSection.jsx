import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "../ui/card";

/**
 * Exactly 4 badges, one per corner, so they stay far from the title.
 * Override via the `badges` prop (keep it to 4).
 */
const DEFAULT_BADGES = [
  {
    label: "FOMC Rate Decision",
    icon: "🏦",
    tone: "green",
    className: "top-[5%] left-[3%] sm:top-[8%] sm:left-[4%]",
    rotate: -10,
    exitX: -70,
    exitY: -30,
  },
  {
    label: "Non-Farm Payrolls",
    icon: "💼",
    tone: "gold",
    className: "top-[5%] right-[3%] sm:top-[8%] sm:right-[4%]",
    rotate: 10,
    exitX: 70,
    exitY: -20,
  },
  {
    label: "CPI Inflation",
    icon: "📈",
    tone: "dark",
    className: "bottom-[5%] left-[3%] sm:bottom-[8%] sm:left-[4%]",
    rotate: 8,
    exitX: -70,
    exitY: 30,
  },
  {
    label: "GDP Growth",
    icon: "🌍",
    tone: "green",
    className: "bottom-[5%] right-[3%] sm:bottom-[8%] sm:right-[4%]",
    rotate: -8,
    exitX: 70,
    exitY: 20,
  },
];

const TONES = {
  green: "bg-[#20a46a] text-white shadow-[0_12px_30px_-8px_rgba(32,164,106,0.5)]",
  gold: "bg-[#d9b85c] text-[#080908] shadow-[0_12px_30px_-8px_rgba(217,184,92,0.45)]",
  dark: "bg-[#111211] text-white border border-white/10 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.8)]",
};

const Badge = ({ badge, progress }) => {
  const {
    label,
    icon,
    tone = "green",
    className = "",
    rotate = 0,
    exitX = 0,
    exitY = 0,
  } = badge;

  const x = useTransform(progress, [0, 0.9], ["0vw", `${exitX}vw`]);
  const y = useTransform(progress, [0, 0.9], [0, exitY]);
  const rot = useTransform(progress, [0, 0.9], [rotate, rotate * 1.8]);
  const scale = useTransform(progress, [0, 0.9], [1, 1.05]);
  const opacity = useTransform(progress, [0, 0.6, 0.95], [1, 1, 0]);

  return (
    <div className={`pointer-events-none absolute z-10 ${className}`}>
      <motion.div
        style={{ x, y, rotate: rot, scale, opacity }}
        initial={false}
        className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] sm:gap-2 sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.16em] ${TONES[tone] || TONES.green
          }`}
      >
        <span className="text-xs sm:text-lg">{icon}</span>
        {label}
      </motion.div>
    </div>
  );
};

const ParaxEffectHeroSubSection = ({
  eyebrow = "Economic Calendar",
  title = "Know the News",
  highlight = "That Moves Money",
  description = "Track the jobs, prices and interest-rate events that move the markets — and be ready before everyone else.",
  buttonText = "View Calendar",
  buttonLink = "#calendar",
  onButtonClick,
  badges = DEFAULT_BADGES,
}) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#080908] px-4 py-32 sm:px-6 sm:py-36"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b85c]/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />

      {/* Floating badges (max 4) */}
      {badges.slice(0, 4).map((badge, index) => (
        <Badge key={badge.label || index} badge={badge} progress={scrollYProgress} />
      ))}

      {/* Centered content */}
      <div className="relative z-20 mx-auto max-w-4xl text-center">
        <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6 sm:gap-4">
          <span className="h-px w-8 bg-[#20a46a] sm:w-12" />
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#20a46a] sm:text-xs sm:tracking-[0.3em]">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-[#20a46a] sm:w-12" />
        </div>

        <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-white min-[400px]:text-5xl sm:text-6xl lg:text-8xl">
          {title}
          <br />
          <span className="text-[#20a46a]">{highlight}</span>
        </h2>

        {/* Description: accepts a string or an array of paragraphs */}


        <div className="mx-auto mt-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {(Array.isArray(description)
              ? description
              : String(description).split(/\n\s*\n/)
            ).map((para, i) => {
              const metrics = [
                { value: "01", label: "STAY INFORMED" },
                { value: "02", label: "TRACK EVENTS" },
                { value: "03", label: "PLAN AHEAD" },
              ];

              return (
                <Card
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.10] bg-[#0b0b12]/90 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff87]/30"
                >
                  <CardContent className="relative p-6">
                    {/* Top row */}
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#00ff87]/20 bg-[#00ff87]/[0.07] text-[#00ff87]">
                        <span className="text-lg font-semibold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#00ff87]">
                          {metrics[i]?.value}
                        </div>
                        <div className="mt-1 text-[10px] font-semibold tracking-widest text-white/40">
                          {metrics[i]?.label}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {[
                        "Stay Ahead of Market News",
                        "Understand Market Impact",
                        "Make Informed Decisions",
                      ][i]}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-6 text-white/55">
                      {para.trim()}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>






        {buttonText && (
          <a
            href={buttonLink}
            onClick={onButtonClick}
            className="mt-8 inline-block rounded-full bg-[#20a46a] px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#1b8c5a] sm:mt-10 sm:px-8 sm:py-3.5 sm:text-sm"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
};

export default ParaxEffectHeroSubSection;