import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="group relative">
      {/* Ambient Colored Backlight Glow (Behind Card on Hover) */}
      <div className="pointer-events-none absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#00d2ff]/30 via-[#00ff87]/35 to-[#2563eb]/30 opacity-0 blur-2xl transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105" />

      {/* Top Soft Radiant Bloom (Like the glowing light in the reference image) */}
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-32 w-52 rounded-full bg-gradient-to-t from-[#00ff87]/45 via-[#00d2ff]/35 to-transparent opacity-0 blur-2xl transition-all duration-500 ease-out group-hover:opacity-100" />

      {/* Main Card Body */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07060f]/95 p-8 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-[#00ff87]/35 group-hover:shadow-[0_20px_50px_-15px_rgba(0,255,135,0.25)] backdrop-blur-md">
        {/* Top-edge subtle shimmer gradient line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00ff87]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Subtle ambient hover inner background lighting */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-b from-[#00ff87]/[0.05] via-transparent to-transparent" />

        {/* Icon Wrapper */}
        <div className="feature-card-icon-wrapper mb-6 transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-[#00ff87]/40 group-hover:shadow-[0_0_25px_rgba(0,255,135,0.3)]">
          <img
            src={icon}
            alt={title}
            width={40}
            height={40}
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Title */}
        <h4 className="mb-3 text-2xl font-medium tracking-tight text-white transition-colors duration-300">
          {title}
        </h4>

        {/* Description */}
        <p className="text-base leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300 font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
