/**
 * Reveal.jsx — reusable scroll-triggered reveal wrapper.
 *
 * Props:
 *   children     — content to animate
 *   delay        — stagger offset in seconds (default 0)
 *   y            — vertical travel distance in px (default 30)
 *   once         — animate only once (default true)
 *   amount       — viewport intersection threshold (default 0.3)
 *   duration     — transition duration in seconds (default 0.6)
 *   className    — extra classes passed to the wrapper div
 *
 * Usage:
 *   <Reveal delay={0.2}>
 *     <h2>Section heading</h2>
 *   </Reveal>
 */
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 30,
  once = true,
  amount = 0.3,
  duration = 0.6,
  className = "",
}) {
  // Respect OS "reduce motion" preference — skip movement, keep fade
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
