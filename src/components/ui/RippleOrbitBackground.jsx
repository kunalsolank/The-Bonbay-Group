import React, { memo } from "react";
import { motion } from "framer-motion";

/**
 * RippleRings
 * Expanding concentric ripple rings radiating outward behind the showcase image
 */
export const RippleRings = memo(function RippleRings({ reduce }) {
  if (reduce) return null;
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10"
      aria-hidden="true"
    >
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="absolute rounded-full border border-[#1fa864]/40"
          style={{
            width: "70%",
            aspectRatio: "1 / 1",
            boxShadow: "0 0 40px rgba(31,168,100,0.12) inset",
          }}
          initial={{ scale: 0.55, opacity: 0 }}
          animate={{ scale: [0.55, 1.45], opacity: [0, 0.55, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
});

/**
 * OrbitRing
 * Slowly rotating dashed orbit ring with glowing colored satellite dots
 */
export const OrbitRing = memo(function OrbitRing({ reduce }) {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-1/2 w-[88%] aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 -z-10"
      animate={reduce ? undefined : { rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      <span className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-[#1877F2] shadow-[0_0_18px_4px_rgba(24,119,242,0.7)]" />
      <span className="absolute bottom-[14%] left-[6%] h-2.5 w-2.5 rounded-full bg-[#10B981] shadow-[0_0_18px_4px_rgba(16,185,129,0.7)]" />
      <span className="absolute bottom-[14%] right-[6%] h-2.5 w-2.5 rounded-full bg-[#F59E0B] shadow-[0_0_18px_4px_rgba(245,158,11,0.7)]" />
    </motion.div>
  );
});

/**
 * RippleOrbitBackground
 *
 * Unified animated background combining:
 * 1. Concentric expanding RippleRings
 * 2. Rotating dashed OrbitRing with glowing satellite beacons
 * 3. Subtle ambient emerald glow orb
 *
 * Memoized for minimal re-renders and smooth 60fps performance.
 */
const RippleOrbitBackground = memo(function RippleOrbitBackground({ reduce }) {
  return (
    <>
      {/* ── 1. Expanding Ripple Rings ── */}
      <RippleRings reduce={reduce} />

      {/* ── 2. Rotating Orbit Ring ── */}
      <OrbitRing reduce={reduce} />

      {/* ── 3. Subtle Ambient Emerald Glow ── */}
      <div
        className="pointer-events-none absolute -top-12 -left-10 sm:-top-16 sm:-left-16 w-[450px] sm:w-[580px] h-[450px] sm:h-[580px] rounded-full bg-gradient-to-tr from-[#1fa864]/20 via-[#258d87]/15 to-[#3959a6]/10 blur-[130px] -z-10"
        aria-hidden="true"
      />
    </>
  );
});

export default RippleOrbitBackground;
