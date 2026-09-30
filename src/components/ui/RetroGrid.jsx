import React from "react";
import { cn } from "../../lib/utils";

const RetroGrid = ({
  className = "",
  angle = 65,
  cellSize = 60,
  opacity = 0.45,
  lineColor = "31 168 100",
}) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "retro-grid pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      style={{
        "--retro-grid-angle": `${angle}deg`,
        "--retro-grid-cell-size": `${cellSize}px`,
        "--retro-grid-opacity": opacity,
        "--retro-grid-line-color": lineColor,
      }}
    />
  );
};

export default RetroGrid;