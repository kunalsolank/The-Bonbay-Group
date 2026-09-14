import React from "react";
import { cn } from "@/lib/utils";

/**
 * ShineBorder
 *
 * An animated glowing background border effect component with configurable theme shine colors.
 */
export function ShineBorder({
  borderWidth = 1.5,
  duration = 8,
  shineColor = ["#00ff87", "#00d2ff", "#2563eb"],
  className,
  style,
  ...props
}) {
  const colorStr = Array.isArray(shineColor) ? shineColor.join(",") : shineColor;

  return (
    <div
      style={{
        "--border-width": `${borderWidth}px`,
        "--duration": `${duration}s`,
        backgroundImage: `radial-gradient(transparent, transparent, ${colorStr}, transparent, transparent)`,
        backgroundSize: "300% 300%",
        mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
        WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        padding: "var(--border-width)",
        ...style,
      }}
      className={cn(
        "motion-safe:animate-shine pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]",
        className
      )}
      {...props}
    />
  );
}

export default ShineBorder;
