import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import plImg from "../../assets/pl-img.webp";
import RippleOrbitBackground from "./RippleOrbitBackground";
import PlatformBadge, { MetaTraderIcon } from "./PlatformBadge";

export { MetaTraderIcon };

/**
 * Mt5MockupShowcase
 *
 * Showcases the official MetaTrader 5 desktop & mobile interface (`pl-img.webp`).
 * Architecture:
 * - Code-split animation layer via `RippleOrbitBackground`
 * - Code-split floating badge via `PlatformBadge` (using existing `Badge` component)
 * - Entrance reveal + gentle levitation float using Framer Motion
 *
 * Memoized for high performance and zero unnecessary parent re-renders.
 */
const Mt5MockupShowcase = memo(function Mt5MockupShowcase() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full max-w-[640px] mx-auto lg:max-w-[720px] flex items-center justify-center select-none overflow-visible">
      {/* ── Ripple + Orbit Animation Behind the Image ── */}
      <RippleOrbitBackground reduce={reduce} />

      {/* ── Modern Floating Badge (uses shadcn Badge) ── */}
      <PlatformBadge reduce={reduce} />

      {/* ── Image: outer = entrance, inner = levitation ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full flex items-center justify-center"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.02 }}
          className="w-full flex items-center justify-center cursor-pointer"
        >
          <img
            src={plImg}
            alt="MetaTrader 5 Desktop and Mobile Trading Platform"
            width={720}
            height={580}
            loading="lazy"
            decoding="async"
            className="w-full h-auto max-h-[520px] sm:max-h-[580px] object-contain drop-shadow-[0_24px_55px_rgba(0,0,0,0.55)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
});

export default Mt5MockupShowcase;