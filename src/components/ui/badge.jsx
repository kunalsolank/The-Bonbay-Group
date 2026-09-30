import * as React from "react";
import { cn } from "../../lib/utils";

function Badge({ className, variant = "default", ...props }) {
  const variantStyles = {
    default: "border-transparent bg-[#20a46a] text-white shadow hover:bg-[#20a46a]/80",
    secondary: "border-transparent bg-white/10 text-white hover:bg-white/20",
    destructive: "border-transparent bg-rose-500/20 text-rose-400 border border-rose-500/40",
    outline: "border border-white/20 text-white/60",
    success: "border-[#20a46a]/40 bg-[#20a46a]/10 text-[#20a46a]",
    live: "border-[#20a46a]/30 bg-[#20a46a]/10 text-[#20a46a] font-bold",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantStyles[variant] || variantStyles.default,
        className
      )}
      {...props}
    />
  );
}

export { Badge };
