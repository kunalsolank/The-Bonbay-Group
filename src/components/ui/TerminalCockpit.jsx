import React , {useState, useCallback }from 'react'
import {motion} from 'framer-motion'
import { Badge } from "./badge";
import { cn } from "../../lib/utils";
const TerminalCockpit = React.memo(function TerminalCockpit({ title ='' ,  image, imageAlt, reveal }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -3.5;
    const rotY = ((x - centerX) / centerX) * 3.5;
    setTilt({ x: rotX, y: rotY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <motion.div
      {...reveal(0.15)}
      className="relative group perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient glow behind card */}
      <div
        className="absolute -inset-2 rounded-3xl bg-linear-to-tr from-[#1fa864]/20 via-[#258d87]/15 to-[#3959a6]/10 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        animate={{
          boxShadow: [
            "0 20px 50px -15px rgba(0,0,0,0.85), 0 0 35px rgba(31,168,100,0.12)",
            "0 28px 75px -15px rgba(0,0,0,0.95), 0 0 55px rgba(31,168,100,0.28)",
            "0 20px 50px -15px rgba(0,0,0,0.85), 0 0 35px rgba(31,168,100,0.12)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.25s ease-out",
        }}
        className={cn(
          "relative rounded-2xl border border-white/10 bg-[#090b14]/90 backdrop-blur-xl p-4 sm:p-5 overflow-hidden",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_25px_60px_-15px_rgba(0,0,0,0.85)]",
          "will-change-transform"
        )}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80 shadow-[0_0_8px_rgba(255,95,87,0.4)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80 shadow-[0_0_8px_rgba(254,188,46,0.4)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80 shadow-[0_0_8px_rgba(40,200,64,0.4)]" />
            <span className="ml-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
               {title}
            </span>
          </div>
          <Badge
            variant="live"
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#34d399] animate-pulse" />
            <span>LIVE MT5</span>
          </Badge>
        </div>

        {/* Graphic Image */}
        <div className="relative z-10 flex items-center justify-center py-2 sm:py-4">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="mx-auto block h-auto max-h-60 sm:max-h-67.5 w-auto max-w-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Terminal Bottom HUD Badges */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-white/60">
          <Badge
            variant="outline"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] bg-white/2 border-white/10 text-white/70"
          >
            <svg
              className="w-3.5 h-3.5 text-[#34d399]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>Latency &lt; 15ms</span>
          </Badge>

          <Badge
            variant="outline"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] bg-white/2 border-white/10 text-white/70"
          >
            <svg
              className="w-3.5 h-3.5 text-[#34d399]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>Tier-1 Deep Liquidity</span>
          </Badge>
        </div>

        {/* Glowing hairline accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-[#1fa864] to-transparent opacity-80" />
      </motion.div>
    </motion.div>
  );
});

export default TerminalCockpit