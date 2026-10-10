import React from "react";
import { motion } from "framer-motion";

/**
 * AmbientShadowBackground
 *
 * Classical animated ambient shadow layer:
 * 1. Primary drifting emerald orb
 * 2. Counter-drifting teal/mint orb
 * 3. Center breathing spotlight aura
 * 4. Orbital meridian rings
 * 5. Theatrical vignette edge shadow
 *
 * Usage:
 *   <AmbientShadowBackground />
 *
 * Memoized — never re-renders when parent state changes.
 */
const AmbientShadowBackground = React.memo(function AmbientShadowBackground() {
  return (
    <>
      {/* 1. Primary drifting emerald-shadow orb */}
      <motion.div
        animate={{
          x: [0, 45, -35, 0],
          y: [0, -35, 25, 0],
          scale: [1, 1.18, 0.94, 1],
          opacity: [0.18, 0.32, 0.16, 0.18],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-1/4 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#1fa864]/25 via-[#258d87]/15 to-transparent blur-[140px] will-change-transform"
        aria-hidden="true"
      />

      {/* 2. Secondary counter-drifting teal & mint shadow orb */}
      <motion.div
        animate={{
          x: [0, -45, 35, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.92, 1.16, 1],
          opacity: [0.14, 0.26, 0.12, 0.14],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="pointer-events-none absolute -right-32 bottom-1/4 h-[580px] w-[580px] translate-y-1/3 rounded-full bg-gradient-to-bl from-[#34d399]/20 via-[#1fa864]/10 to-transparent blur-[150px] will-change-transform"
        aria-hidden="true"
      />

      {/* 3. Center classical breathing spotlight aura */}
      <motion.div
        animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[680px] w-[750px] rounded-full bg-gradient-to-r from-[#1fa864]/12 via-[#258d87]/8 to-[#3959a6]/6 blur-[130px] will-change-transform"
        aria-hidden="true"
      />

      {/* 4. Classical faint orbital meridian shadow rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[820px] w-[820px] rounded-full border border-white/[0.025]"
        aria-hidden="true"
      >
        <div className="absolute inset-16 rounded-full border border-white/[0.015]" />
        <div className="absolute inset-32 rounded-full border border-white/[0.01]" />
      </motion.div>

      {/* 5. Classical theatrical vignette shadow framing the edges */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_35%,#05040b_95%)]"
        aria-hidden="true"
      />
    </>
  );
});

export default AmbientShadowBackground;
