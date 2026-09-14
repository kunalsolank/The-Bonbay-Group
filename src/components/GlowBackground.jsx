import React from "react";

const GlowBackground = ({
  color = "rgba(212, 160, 23, 0.55)", // golden tone
  className = "",
}) => {
  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center ${className}`}
    >
      <div
        style={{
          width: "70%",
          maxWidth: "700px",
          height: "300px",
          background: `radial-gradient(ellipse at center, ${color} 0%, rgba(0,0,0,0) 70%)`,
          filter: "blur(10px)",
        }}
      />
    </div>
  );
};

export default GlowBackground;