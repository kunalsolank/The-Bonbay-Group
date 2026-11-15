/**
 * Marquee.jsx — infinite horizontal scroll marquee with fade edges.
 *
 * Props:
 *   children      — items to scroll (will be duplicated for seamless loop)
 *   speed         — loop duration in seconds (default 40)
 *   direction     — "left" | "right" (default "left")
 *   pauseOnHover  — pause animation when mouse enters (default true)
 *   gap           — Tailwind gap class between items (default "gap-6")
 *   className     — extra classes on the outer wrapper
 *
 * Usage:
 *   <Marquee speed={35} pauseOnHover>
 *     {logos.map(l => <img key={l} src={l} />)}
 *   </Marquee>
 */
import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Marquee({
  children,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  gap = "gap-6",
  className = "",
}) {
  const shouldReduce = useReducedMotion();
  const containerRef = useRef(null);

  // direction: "left" scrolls toward -50% (children duplicated so it loops)
  const xFrom = direction === "left" ? "0%" : "-50%";
  const xTo   = direction === "left" ? "-50%" : "0%";

  // When reduced-motion is on, render static — no scrolling
  if (shouldReduce) {
    return (
      <div className={`overflow-hidden relative ${className}`}>
        <div className={`flex ${gap}`}>{children}</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      // Fade masks on left and right edges
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <motion.div
        className={`flex w-max ${gap}`}
        animate={{ x: [xFrom, xTo] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        // Pause on hover by stopping the animation
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
        style={{ willChange: "transform" }}
        // CSS pause-on-hover fallback (framer-motion whileHover stops the transition cleanly)
        onMouseEnter={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = "running";
          }
        }}
      >
        {/* Original + duplicate for seamless loop */}
        <div className={`flex flex-shrink-0 ${gap}`}>{children}</div>
        <div className={`flex flex-shrink-0 ${gap}`} aria-hidden="true">{children}</div>
      </motion.div>
    </div>
  );
}
