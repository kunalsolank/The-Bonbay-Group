import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ParticlesBackground = ({
  count = 40,
  color = "#ffffff",
  area = { top: 0, left: 0, width: 100, height: 100 }, // percentages
  className = "",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [];

    for (let i = 0; i < count; i++) {
      const dot = document.createElement("div");
      const size = gsap.utils.random(1, 3);

      dot.style.position = "absolute";
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.borderRadius = "50%";
      dot.style.background = color;
      dot.style.top = `${gsap.utils.random(area.top, area.top + area.height)}%`;
      dot.style.left = `${gsap.utils.random(area.left, area.left + area.width)}%`;
      dot.style.opacity = gsap.utils.random(0.2, 0.8);
      dot.style.pointerEvents = "none";
      dot.style.willChange = "transform, opacity";

      container.appendChild(dot);
      particles.push(dot);

      // Twinkle
      gsap.to(dot, {
        opacity: gsap.utils.random(0.1, 1),
        duration: gsap.utils.random(1.5, 3.5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: gsap.utils.random(0, 2),
      });

      // Float
      gsap.to(dot, {
        y: gsap.utils.random(-15, 15),
        x: gsap.utils.random(-10, 10),
        duration: gsap.utils.random(4, 8),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: gsap.utils.random(0, 2),
      });
    }

    return () => {
      particles.forEach((p) => {
        gsap.killTweensOf(p);
        p.remove();
      });
    };
  }, [count, color, area]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default ParticlesBackground;