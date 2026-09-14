import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = ({ className = "" }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className={`fixed top-0 left-0 right-0 z-[9999] h-[3px] origin-left bg-gradient-to-r from-[#1fa864] via-[#20a46a] to-[#3959a6] shadow-[0_0_12px_rgba(32,164,106,0.8)] pointer-events-none ${className}`}
    />
  );
};

export default ScrollProgress;
