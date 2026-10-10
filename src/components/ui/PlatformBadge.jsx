import React, { memo } from "react";
import { motion } from "framer-motion";
import { Badge } from "./badge";

/**
 * MetaTrader 3-Dot Clover Icon
 */
export const MetaTraderIcon = memo(function MetaTraderIcon({ className = "w-5 h-5" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <span className="absolute top-0 w-2 h-2 rounded-full bg-[#1877F2] shadow-xs" />
      <span className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-[#10B981] shadow-xs" />
      <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#F59E0B] shadow-xs" />
    </div>
  );
});

/**
 * PlatformBadge
 *
 * Floating showcase badge utilizing the existing shadcn Badge component from './badge.jsx'
 * with animated gradient border, live pulse indicator, and shimmer sweep effect.
 */
export const PlatformBadge = memo(function PlatformBadge({
  reduce = false,
  label = "All-in-One Platform",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`absolute -top-3 sm:-top-5 left-3 sm:left-6 z-20 ${className}`}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        className="rounded-full p-[1.5px] bg-gradient-to-r from-[#1877F2] via-[#10B981] to-[#F59E0B] shadow-[0_12px_40px_rgba(16,185,129,0.35)]"
      >
        <Badge
          variant="secondary"
          className="relative flex items-center gap-2.5 overflow-hidden rounded-full border-0 bg-[#0b101c]/95 px-3.5 sm:px-4 py-2 backdrop-blur-xl hover:bg-[#0b101c]"
        >
          {/* Live pulse dot */}
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
          </span>

          <MetaTraderIcon className="w-4 h-4 sm:w-5 sm:h-5" />

          <span className="bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-transparent">
            {label}
          </span>

          {/* Shimmer sweep */}
          {!reduce && (
            <motion.span
              className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-150%" }}
              animate={{ x: "450%" }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            />
          )}
        </Badge>
      </motion.div>
    </motion.div>
  );
});

export default PlatformBadge;
