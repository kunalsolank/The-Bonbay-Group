import  { useCallback, useMemo } from "react";
import { motion, useReducedMotion, } from "framer-motion";
import { Badge } from "./ui/badge";
import { StatCard } from "./ui/TradingCard";
import { cn } from "../lib/utils";
import AmbientShadowBackground from "./ui/AmbientShadowBackground";
import NarrativeTabs from "./ui/NarrativeTabs";
import TerminalCockpit from "./ui/TerminalCockpit";

const ease = [0.22, 1, 0.36, 1];

export default function GlobalTrading({
  badge,
  title,
  description,
  image,
  imageAlt = "Trading illustration",
  highlights,
  ctaText,
  ctaLink,
  reverse = false,
}) {
  const reduce = useReducedMotion();

  const descriptions = useMemo(
    () => (Array.isArray(description) ? description : description ? [description] : []),
    [description]
  );

  const stats = useMemo(
    () =>
      highlights && highlights.length > 0
        ? highlights
        : [
            { value: "24/5", label: "Live market access" },
            { value: "$6T+", label: "Daily trading volume" },
          ],
    [highlights]
  );

  const hasCta = Boolean(ctaText && ctaLink);

  const reveal = useCallback(
    (delay = 0) => ({
      initial: reduce ? false : { opacity: 0, y: 16 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.15 },
      transition: { duration: 0.6, ease, delay },
    }),
    [reduce]
  );

  return (
    <section className="relative overflow-hidden bg-[#05040b] py-10 sm:py-14 lg:py-16 flex items-center min-h-145 lg:min-h-160">
      {/* ── Classical Animated Ambient Shadow & Lighting Layer ───────────── */}
      <AmbientShadowBackground />

      <div className="relative mx-auto max-w-310 px-4 sm:px-6 lg:px-8 w-full z-10">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
            reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
          )}
        >
          {/* ─────────────────────────────────────────────────────────────
              LEFT COLUMN: Header, Interactive Narrative, Highlights, CTA
             ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Live radar badge with shadcn Badge */}
            {badge && (
              <motion.div {...reveal(0)} className="mb-3">
                <Badge
                  variant="live"
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34d399] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34d399]" />
                  </span>
                  <span>{badge}</span>
                </Badge>
              </motion.div>
            )}

            {/* Headline */}
            <motion.h2
              {...reveal(0.05)}
              className="text-2xl sm:text-3xl lg:text-[2.25rem] font-medium leading-[1.2] tracking-tight text-white"
            >
              {title}
            </motion.h2>

            <motion.div
              {...reveal(0.08)}
              className="mt-3 mb-5 h-0.5 w-12 bg-linear-to-r from-[#1fa864] to-[#258d87]"
              aria-hidden="true"
            />

            {/* Interactive Narrative / Description Tabs (State Colocated) */}
            <NarrativeTabs descriptions={descriptions} reveal={reveal} />

            {/* Highlights / Stats Grid (Data-driven using StatCard) */}
            {stats.length > 0 && (
              <motion.div
                {...reveal(0.16)}
                className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-5"
              >
                {stats.map((s, i) => (
                  <StatCard key={`${s.value}-${i}`} value={s.value} label={s.label} />
                ))}
              </motion.div>
            )}

            {/* CTA Action Row */}
            {hasCta && (
              <motion.div
                {...reveal(0.2)}
                className="mt-6 flex flex-wrap items-center gap-4"
              >
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group inline-flex items-center justify-center gap-2.5 rounded-xl",
                    "bg-linear-to-r from-[#1fa864] to-[#1a9157]",
                    "px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white",
                    "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_10px_25px_-5px_rgba(31,168,100,0.4)]",
                    "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_14px_35px_-5px_rgba(31,168,100,0.6)]",
                    "hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  )}
                >
                  <span>{ctaText}</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
                <div className="hidden sm:flex items-center gap-2 text-xs text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#34d399]" />
                  <span>Instant Setup • MT5 Live Execution</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* ─────────────────────────────────────────────────────────────
              RIGHT COLUMN: Modern Trading Terminal Glass Cockpit
             ───────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {image && (
              <TerminalCockpit
                title='DOLLREX // EXECUTION ENGINE'
                image={image}
                imageAlt={imageAlt}
                reveal={reveal}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}