import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

/**
 * Reusable card.
 * icon     -> image URL string OR a lucide-react component (e.g. Monitor)
 * metric   -> first line of the heading (e.g. "MT5")
 * title    -> second line of the heading (e.g. "Desktop")
 * detail   -> bottom line with the › marker (used when no buttons are given)
 * buttons  -> optional array of labels, shown instead of detail
 * featured -> gradient highlighted card
 * index    -> stagger order for the bottom-up scroll animation
 */
const FeatureCard = ({
  icon,
  metric,
  title,
  description,
  detail,
  buttons = [],
  featured = false,
  index = 0,
}) => {
  const Icon = typeof icon === "string" ? null : icon;
  const iconSize =
    "h-16 w-16 shrink-0 sm:h-20 sm:w-20 transition-all duration-300 group-hover:scale-110";

  return (
    // Wrapper handles the scroll animation, so it never clashes with the hover effect on the card
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      <article
        className={`group relative isolate h-full min-h-59.5 overflow-visible px-6 pt-6 transition-all duration-300 hover:-translate-y-2 sm:min-h-63 sm:px-7 sm:pt-7 lg:min-h-[264px] ${
          featured
            ? "rounded-3xl border border-[#00ff87]/40 bg-gradient-to-br from-[#00ff87] via-[#10b981] to-[#047857] px-7 pt-7 text-white shadow-[0_18px_45px_rgba(0,255,135,0.25)] sm:px-8 sm:pt-8 hover:shadow-[0_24px_60px_rgba(0,255,135,0.45),0_0_35px_rgba(16,185,129,0.3)]"
            : "rounded-2xl border border-white/10 border-t-[#ffffff2b] bg-[#0d1114] text-white shadow-[0_14px_35px_rgba(0,0,0,0.28)] hover:border-[#00ff87]/60 hover:bg-[#111b1b] hover:shadow-[0_22px_55px_rgba(0,255,135,0.25),0_0_30px_rgba(16,185,129,0.2)]"
        }`}
      >
        {/* Outer glow on hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-2 -z-10 rounded-[1.7rem] bg-gradient-to-r from-[#00ff87]/0 via-[#10b981]/0 to-[#1fa864]/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:from-[#00ff87]/40 group-hover:via-[#10b981]/30 group-hover:to-[#1fa864]/40 group-hover:opacity-100"
        />
        {/* Inner tint on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#00ff87]/0 via-[#10b981]/0 to-[#1fa864]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#00ff87]/10 group-hover:via-[#10b981]/[0.06] group-hover:to-[#1fa864]/10 group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <h3 className="max-w-[13ch] text-3xl font-medium leading-[0.98] tracking-tight text-white sm:text-4xl">
              {metric}
              <span className="block">{title}</span>
            </h3>

            {Icon ? (
              <Icon
                strokeWidth={1.5}
                className={`${iconSize} p-2 group-hover:drop-shadow-[0_0_16px_rgba(0,255,135,0.7)] ${
                  featured ? "text-white" : "text-[#00ff87]"
                }`}
              />
            ) : (
              icon && (
                <img
                  src={icon}
                  alt=""
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className={`${iconSize} object-contain opacity-80 group-hover:drop-shadow-[0_0_16px_rgba(31,168,100,0.7)] ${
                    featured ? "brightness-0 invert" : ""
                  }`}
                />
              )
            )}
          </div>

          <p className="mt-5 text-base leading-relaxed text-white/70">
            {description}
          </p>

          <div
            className={`mb-5 mt-6 border-t pt-5 text-sm font-semibold text-white ${
              featured
                ? "border-white/30"
                : "border-white/15 group-hover:border-[#1fa864]/45"
            }`}
          >
            {buttons.length > 0 ? (
              <div className="flex flex-wrap gap-2.5">
                {buttons.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/80 transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:text-white"
                  >
                    <Download size={11} />
                    {label}
                  </button>
                ))}
              </div>
            ) : (
              <>
                <span className="mr-3 text-xs">›</span>
                {detail}
              </>
            )}
          </div>
        </div>

        {featured && (
          <div className="pointer-events-none absolute -bottom-20 -right-8 h-44 w-44 rounded-full bg-white/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />
        )}
      </article>
    </motion.div>
  );
};

export default FeatureCard;