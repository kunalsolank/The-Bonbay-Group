import { Fragment } from "react";
import { motion } from "framer-motion";

// Default animation variants (override via props if you already have your own)
const defaultStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const defaultFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cn = (...classes) => classes.filter(Boolean).join(" ");

/* ------------------------------------------------------------------
   Ambient glow blobs (background decoration)
------------------------------------------------------------------- */
function AmbientGlow({ accent }) {
  return (
    <>
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-180px] top-20 w-[450px] h-[450px] rounded-full blur-[140px]"
        style={{ backgroundColor: accent, opacity: 0.08 }}
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-200px] bottom-[-200px] w-[450px] h-[450px] rounded-full blur-[150px]"
        style={{ backgroundColor: accent, opacity: 0.05 }}
      />
    </>
  );
}

/* ------------------------------------------------------------------
   Chart card (the left / right visual)
------------------------------------------------------------------- */
export function ChartCard({
  accent = "#00ff87",
  chartLabel = "Market Performance",
  statusLabel = "Live",
  growthLabel = "Market Growth",
  growthValue = "+28.42%",
  metaLabel = "Markets",
  metaValue = "24 / 5",
  floatingLabel = "Global Markets",
  path = "M20 240 L80 210 L120 220 L170 160 L220 180 L270 110 L320 130 L370 70 L420 95 L480 35",
  endPoint = { x: 480, y: 35 },
  gridLines = [20, 40, 60, 80],
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.4 }}
      className="relative aspect-square max-w-[550px] mx-auto"
    >
      {/* Outer technical frame */}
      <div className="absolute inset-5 md:inset-8 border border-white/10 rounded-[40px]" />

      {/* Corner details */}
      <div
        className="absolute top-0 left-16 w-16 h-px"
        style={{ backgroundColor: accent }}
      />
      <div
        className="absolute bottom-0 right-16 w-16 h-px"
        style={{ backgroundColor: accent }}
      />

      {/* Chart area */}
      <div className="absolute inset-14 md:inset-16 bg-[#0d0f0c] border border-white/10 rounded-[28px] overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.08]">
          {gridLines.map((position) => (
            <Fragment key={position}>
              <div
                className="absolute left-0 w-full h-px bg-white"
                style={{ top: `${position}%` }}
              />
              <div
                className="absolute top-0 h-full w-px bg-white"
                style={{ left: `${position}%` }}
              />
            </Fragment>
          ))}
        </div>

        {/* Top labels */}
        <div className="absolute top-5 left-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#62665e]">
            {chartLabel}
          </p>
        </div>

        <div className="absolute top-5 right-6 flex items-center gap-2">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: accent }}
          />
          <span className="text-[10px] uppercase tracking-widest text-[#62665e]">
            {statusLabel}
          </span>
        </div>

        {/* Animated line */}
        <svg
          viewBox="0 0 500 300"
          className="absolute inset-0 w-full h-full p-8 md:p-10"
          fill="none"
        >
          <motion.path
            d={path}
            stroke={accent}
            strokeWidth="10"
            opacity="0.08"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d={path}
            stroke={accent}
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.circle
            cx={endPoint.x}
            cy={endPoint.y}
            r="6"
            fill={accent}
            animate={{ r: [5, 9, 5], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>

        {/* Bottom stats */}
        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#62665e]">
              {growthLabel}
            </p>
            <p
              className="text-2xl md:text-3xl font-semibold mt-1"
              style={{ color: accent }}
            >
              {growthValue}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#62665e]">
              {metaLabel}
            </p>
            <p className="text-white font-medium mt-1">{metaValue}</p>
          </div>
        </div>
      </div>

      {/* Floating indicator */}
      {floatingLabel && (
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 right-0 md:right-[-10px] flex items-center gap-3"
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: accent }}
          />
          <span className="text-xs uppercase tracking-[0.2em] text-[#777c73]">
            {floatingLabel}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Main reusable section
------------------------------------------------------------------- */
export default function SideChartLayout({
  eyebrow,
  title, // ReactNode, so you can add <br /> and colored spans
  paragraphs = [],
  footerText,
  chart = {}, // props forwarded to <ChartCard />
  accent = "#00ff87",
  reverse = false, // true = chart on the right
  glow = true,
  containerVariants = defaultStagger,
  itemVariants = defaultFadeUp,
  className = "bg-[#080908] text-white",
}) {
  return (
    <section
      className={cn(
        "relative py-28 md:py-36 overflow-hidden",
        className
      )}
    >
      {glow && <AmbientGlow accent={accent} />}

      <div className="relative w-[90%] max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
        {/* CHART */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className={cn("relative", reverse && "lg:order-2")}
        >
          <ChartCard accent={accent} {...chart} />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className={cn(reverse && "lg:order-1")}
        >
          {eyebrow && (
            <motion.p
              variants={itemVariants}
              className="uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-6"
              style={{ color: accent }}
            >
              {eyebrow}
            </motion.p>
          )}

          {title && (
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
            >
              {title}
            </motion.h2>
          )}

          {paragraphs.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="space-y-5 mt-8 text-[#858a82] leading-7 max-w-xl text-base md:text-lg"
            >
              {paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </motion.div>
          )}

          {footerText && (
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-4"
            >
              <div className="w-12 h-px" style={{ backgroundColor: accent }} />
              <span className="text-xs uppercase tracking-[0.25em] text-[#5f645b]">
                {footerText}
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}