import { useCallback, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
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
      {/* Ambient shadow & lighting layer */}
      <AmbientShadowBackground />

      <div className="relative mx-auto max-w-310 px-4 sm:px-6 lg:px-8 w-full z-10">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
            reverse && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
          )}
        >
          {/* LEFT COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center min-w-0">
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

            {/* Narrative tabs */}
            <NarrativeTabs descriptions={descriptions} reveal={reveal} />

            {/* Stats: horizontal swipeable row on mobile, grid on sm+ */}
            {stats.length > 0 && (
              <motion.div
                {...reveal(0.16)}
                className={cn(
                  "mt-5 flex flex-row flex-nowrap gap-2.5 overflow-x-auto snap-x snap-mandatory",
                  "-mx-4 px-4 pb-1",
                  "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                  "sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-4 sm:gap-3 sm:overflow-visible"
                )}
              >
                {stats.map((s, i) => (
                  <div
                    key={`${s.value}-${i}`}
                    className="shrink-0 w-36 snap-start sm:w-auto"
                  >
                    <StatCard value={s.value} label={s.label} />
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTA */}
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

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-center min-w-0">
            {image && (
              <TerminalCockpit
                title="DOLLREX // EXECUTION ENGINE"
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