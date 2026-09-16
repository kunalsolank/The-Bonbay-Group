import React from "react";

const RetroGrid = ({
  className = "",
  angle = 65,
  cellSize = 60,
  opacity = 0.45,
  lineColor = "31 168 100",
}) => (
  <div
    aria-hidden="true"
    className={`retro-grid pointer-events-none absolute overflow-hidden ${className}`}
    style={{
      "--retro-grid-angle": `${angle}deg`,
      "--retro-grid-cell-size": `${cellSize}px`,
      "--retro-grid-opacity": opacity,
      "--retro-grid-line-color": lineColor,
    }}
  />
);

export default RetroGrid;
