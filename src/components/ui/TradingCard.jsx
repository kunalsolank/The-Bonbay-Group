import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const ease = [0.22, 1, 0.36, 1];

/**
 * TradingCard — Reusable container with subtle 3D elevation,
 * specular edge highlights, and soft multi-layer shadow depth.
 */
export const TradingCard = React.forwardRef(function TradingCard(
  {
    children,
    className,
    variant = "default",
    style,
    ...props
  },
  ref
) {
  const baseStyles =
    "relative rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 transition-all duration-300";

  const variantStyles = {
    default:
      "bg-gradient-to-b from-white/[0.035] to-white/[0.015] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_12px_32px_-8px_rgba(0,0,0,0.7)]",
    terminal:
      "bg-[#090b14]/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_25px_60px_-15px_rgba(0,0,0,0.85)]",
    metric:
      "rounded-xl bg-gradient-to-b from-white/[0.04] to-white/[0.015] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_8px_20px_-6px_rgba(0,0,0,0.6)] hover:border-[#1fa864]/40 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_14px_30px_-8px_rgba(0,0,0,0.8),0_0_24px_rgba(31,168,100,0.16)]",
    description:
      "rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.015] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_12px_35px_-10px_rgba(0,0,0,0.7),0_0_25px_rgba(31,168,100,0.08)]",
  };

  return (
    <div
      ref={ref}
      className={cn(baseStyles, variantStyles[variant] || variantStyles.default, className)}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
});

/**
 * StatCard — Data-driven metric card with subtle 3D bevel and hover elevation.
 */
export const StatCard = React.memo(function StatCard({ value, label, className }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.015 }}
      transition={{ duration: 0.25, ease }}
      className={cn(
        "group/stat relative rounded-xl p-3 sm:p-3.5",
        "bg-gradient-to-b from-white/[0.04] to-white/[0.015]",
        "border border-white/10 hover:border-[#1fa864]/40",
        "backdrop-blur-md",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_8px_20px_-6px_rgba(0,0,0,0.6)]",
        "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18),0_14px_30px_-8px_rgba(0,0,0,0.8),0_0_24px_rgba(31,168,100,0.16)]",
        "transition-all duration-300",
        className
      )}
    >
      <div className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover/stat:text-[#34d399] transition-colors">
        {value}
      </div>
      <div className="text-[11px] text-white/60 mt-0.5 truncate font-medium">
        {label}
      </div>
      {/* Specular corner highlight */}
      <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-white/[0.06] to-transparent rounded-tr-xl pointer-events-none" />
    </motion.div>
  );
});

export default TradingCard;
