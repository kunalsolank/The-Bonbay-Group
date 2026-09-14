import React from "react";
import { cn } from "@/lib/utils";

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  step = 70,
  mobileScale = 0.45,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden select-none [mask-image:linear-gradient(to_bottom,white,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const desktopSize = mainCircleSize + i * step;
        const mobileSize = Math.max(
          80,
          Math.round(mainCircleSize * mobileScale + i * (step * 0.5))
        );
        const sizeValue = `clamp(${mobileSize}px, ${((desktopSize / 1200) * 100).toFixed(2)}vw, ${desktopSize}px)`;
        const opacity = Math.max(0.02, mainCircleOpacity - i * 0.025);
        const animationDelay = `${i * 0.06}s`;

        return (
          <div
            key={i}
            className="animate-ripple absolute rounded-full border shadow-xl bg-white/[0.015]"
            style={{
              "--i": i,
              width: sizeValue,
              height: sizeValue,
              opacity,
              animationDelay,
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "var(--foreground, rgba(255, 255, 255, 0.35))",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)",
            }}
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;