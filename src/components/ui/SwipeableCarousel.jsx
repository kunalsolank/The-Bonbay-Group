import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Generic mobile carousel: tabs to jump to an item, a swipeable card for the
 * active item, and prev/next + dot pagination. Has zero knowledge of what an
 * "item" actually is — you tell it how to render everything.
 *
 * Props:
 * - items: any[]
 * - getKey(item): string          — unique key per item
 * - getLabel(item): string        — text shown in the tab pill
 * - isFeatured(item): boolean     — (optional) highlights tab/card in green
 * - initialIndex: number          — (optional) which item starts active
 * - renderCard(item, index): ReactNode  — full content of the card body
 * - footerText: string            — (optional) hint line under pagination
 */
const SwipeableCarousel = ({
  items,
  getKey,
  getLabel,
  isFeatured = () => false,
  initialIndex = 0,
  renderCard,
  footerText,
}) => {
  const [activeIndex, setActiveIndex] = useState(
    Math.min(Math.max(initialIndex, 0), items.length - 1)
  );
  const activeItem = items[activeIndex];

  const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goNext = () => setActiveIndex((i) => Math.min(items.length - 1, i + 1));

  return (
    <div className="lg:hidden">
      {/* Tabs */}
      <div className="mb-5 flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        {items.map((item, index) => (
          <button
            key={getKey(item)}
            onClick={() => setActiveIndex(index)}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
              index === activeIndex
                ? "border-[#20a46a] bg-[#20a46a]/10 text-[#20a46a]"
                : "border-white/10 text-white/40"
            }`}
          >
            {getLabel(item)}
          </button>
        ))}
      </div>

      {/* Swipeable card */}
      <motion.div
        key={getKey(activeItem)}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragEnd={(e, info) => {
          if (info.offset.x < -60) goNext();
          else if (info.offset.x > 60) goPrev();
        }}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
        className={`overflow-hidden rounded-3xl border shadow-2xl shadow-black/30 ${
          isFeatured(activeItem)
            ? "border-[#20a46a]/40 bg-yellow-400/4.5"
            : "border-white/10 bg-white/2.5"
        }`}
      >
        {renderCard(activeItem, activeIndex)}
      </motion.div>

      {/* Prev / dots / next */}
      <div className="mt-5 flex items-center justify-between">
        <button
          onClick={goPrev}
          disabled={activeIndex === 0}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 disabled:opacity-30"
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex gap-1.5">
          {items.map((item, i) => (
            <span
              key={getKey(item)}
              className={`h-1.5 rounded-full transition-all ${
                i === activeIndex ? "w-5 bg-[#20a46a]" : "w-1.5 bg-white/15"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={activeIndex === items.length - 1}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 disabled:opacity-30"
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {footerText && (
        <p className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-white/25">
          {footerText}
        </p>
      )}
    </div>
  );
};

export default SwipeableCarousel;