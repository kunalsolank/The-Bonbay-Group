import React from "react";

const FeatureCard = ({ icon, metric, title, description, detail, featured = false }) => (
  <article
    className={`group relative isolate min-h-[238px] overflow-visible px-6 pt-6 transition-all duration-300 hover:-translate-y-2 sm:min-h-[252px] sm:px-7 sm:pt-7 lg:min-h-[264px] ${
      featured
        ? "rounded-[1.5rem] border border-transparent bg-gradient-to-br from-[#1fa864] via-[#258d87] to-[#3959a6] px-7 pt-7 text-white shadow-[0_18px_45px_rgba(31,168,100,0.24)] sm:px-8 sm:pt-8 hover:shadow-[0_24px_60px_rgba(31,168,100,0.42),0_0_35px_rgba(57,89,166,0.28)]"
        : "rounded-2xl border border-white/10 border-t-[#ffffff2b] bg-[#0d1114] text-white shadow-[0_14px_35px_rgba(0,0,0,0.28)] hover:border-[#1fa864]/60 hover:bg-[#111b1b] hover:shadow-[0_22px_55px_rgba(31,168,100,0.3),0_0_30px_rgba(37,141,135,0.2)]"
    }`}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-2 -z-10 rounded-[1.7rem] bg-gradient-to-r from-[#1fa864]/0 via-[#258d87]/0 to-[#3959a6]/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:from-[#1fa864]/40 group-hover:via-[#258d87]/30 group-hover:to-[#3959a6]/40 group-hover:opacity-100"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1fa864]/0 via-[#258d87]/0 to-[#3959a6]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#1fa864]/10 group-hover:via-[#258d87]/[0.06] group-hover:to-[#3959a6]/10 group-hover:opacity-100" />
    <div className="relative z-10">
      <div className="flex items-start justify-between gap-4">
        <h3 className="max-w-[13ch] text-3xl font-medium leading-[0.98] tracking-tight text-white sm:text-4xl">
          {metric}
          <span className="block">{title}</span>
        </h3>
      <img
  src={icon}
  alt=""
  width={400}
  height={400}
  loading="lazy"
  decoding="async"
  className={`h-16 w-16 shrink-0 object-contain opacity-80 transition-all duration-300 group-hover:scale-115 group-hover:drop-shadow-[0_0_16px_rgba(31,168,100,0.7)] sm:h-20 sm:w-20 ${
    featured ? "brightness-0 invert" : ""
  }`}
/> </div>
      <p className="mt-5 text-base leading-relaxed text-white/70">{description}</p>
      <div className={`mt-6 border-t pt-5 text-sm font-semibold text-white mb-5 ${featured ? "border-white/30" : "border-white/15 group-hover:border-[#1fa864]/45"}`}>
        <span className="mr-3 text-xs">›</span>
        {detail}
      </div>
    </div>
    {featured && <div className="pointer-events-none absolute -bottom-20 -right-8 h-44 w-44 rounded-full bg-white/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />}
  </article>
);

export default FeatureCard;
