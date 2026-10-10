import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import React, { useState, useCallback, useMemo, useId } from "react";
import TradingCard from "./TradingCard";

const defaultTabTitles = [
  "Overview",
  "Execution & MT5",
  "Trader Advantage",
  "Key Highlights",
];
const ease = [0.22, 1, 0.36, 1];

// 1. Memoized tab button: only re-renders when its own `active` state changes
const TabButton = React.memo(function TabButton({
  idx,
  active,
  onClick,
  title,
  pillId,
}) {
  const handleClick = useCallback(() => {
    onClick(idx);
  }, [onClick, idx]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors duration-200",
        active ? "text-white" : "text-white/60 hover:text-white hover:bg-white/[0.04]"
      )}
    >
      {/* Shared pill: slides between buttons instead of flashing on/off */}
      {active && (
        <motion.span
          layoutId={pillId}
          transition={{ duration: 0.25, ease }}
          className="absolute inset-0 rounded-lg bg-[#1fa864] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_4px_12px_rgba(31,168,100,0.4)]"
        />
      )}
      <span className="relative font-mono text-[10px] opacity-70">
        {String(idx + 1).padStart(2, "0")}
      </span>
      <span className="relative">{title}</span>
    </button>
  );
});

// 2. Memoized pagination dot: same idea, so dots don't all re-render
const PaginationDot = React.memo(function PaginationDot({ idx, active, onClick }) {
  const handleClick = useCallback(() => {
    onClick(idx);
  }, [onClick, idx]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
        active ? "w-6 bg-[#34d399]" : "w-1.5 bg-white/20 hover:bg-white/40"
      )}
      aria-label={`Go to slide ${idx + 1}`}
    />
  );
});

// 3. Main NarrativeTabs component
const NarrativeTabs = React.memo(function NarrativeTabs({ descriptions, reveal }) {
  const [activeTab, setActiveTab] = useState(0);

  // Unique layoutId so multiple NarrativeTabs on one page don't share a pill
  const pillId = useId();

  // Stable tab switcher reference
  const handleTabClick = useCallback((index) => {
    setActiveTab(index);
  }, []);

  // Compute reveal props whether reveal is a function or an object
  const revealProps = useMemo(() => {
    if (typeof reveal === "function") {
      return reveal(0.12);
    }
    return reveal || {};
  }, [reveal]);

  if (!descriptions || descriptions.length === 0) return null;

  if (descriptions.length === 1) {
    return (
      <motion.div {...revealProps}>
        <TradingCard
          variant="description"
          className="p-4 sm:p-5 border-l-2 border-l-[#1fa864]"
        >
          <p className="text-[14px] sm:text-[15px] leading-[1.75] text-white/80">
            {descriptions[0]}
          </p>
        </TradingCard>
      </motion.div>
    );
  }

  return (
    <motion.div {...revealProps} className="relative">
      {/* Segment tab buttons */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] w-fit mb-3">
        {descriptions.map((_, idx) => (
          <TabButton
            key={idx}
            idx={idx}
            active={activeTab === idx}
            onClick={handleTabClick}
            title={defaultTabTitles[idx] || `Point ${idx + 1}`}
            pillId={pillId}
          />
        ))}
      </div>

      {/* Animated active description card */}
      <div className="relative min-h-[115px] sm:min-h-[105px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease }}
            className="w-full"
          >
            <TradingCard
              variant="description"
              className="p-4 sm:p-5 border-l-2 border-l-[#1fa864]"
            >
              <p className="text-[14px] sm:text-[15px] leading-[1.75] text-white/80">
                {descriptions[activeTab]}
              </p>
            </TradingCard>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Micro pagination indicator */}
      <div className="flex items-center justify-between mt-2.5 px-1">
        <div className="flex items-center gap-1.5">
          {descriptions.map((_, idx) => (
            <PaginationDot
              key={idx}
              idx={idx}
              active={activeTab === idx}
              onClick={handleTabClick}
            />
          ))}
        </div>
        <span className="font-mono text-[11px] text-white/40">
          {String(activeTab + 1).padStart(2, "0")} /{" "}
          {String(descriptions.length).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
});

export default NarrativeTabs;