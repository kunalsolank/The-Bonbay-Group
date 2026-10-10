import React, { useEffect, useState, useRef } from "react";

const defaultSteps = [
  {
    number: 1,
    title: "REGISTER",
    description: "Open a live account and start trading in just minutes.",
    delay: 0,
  },
  {
    number: 2,
    title: "FUND",
    description: "Fund your account using a wide range of funding methods.",
    delay: 300,
  },
  {
    number: 3,
    title: "TRADE",
    description: "Access 1000+ instruments across all asset classes",
    delay: 600,
  },
];

export default function FourStepSection({
  heading = "Start Trading in 3 Simple Steps",
  steps = defaultSteps,
  buttonText = "get started",
  buttonLink = "https://portal.dollrexcapital.com/register-new/",
  theme = "brand", // "brand" or "gold"
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const isBrand = theme === "brand";
  const numberGradient = isBrand
    ? "linear-gradient(208deg, #00ff87 25%, #10b981 65%, #1fa864 100%)"
    : "linear-gradient(208deg, #d8c359 42%, #cda720 75%)";
  const dividerClass = isBrand
    ? "bg-gradient-to-r from-[#00ff87] via-[#10b981] to-transparent"
    : "bg-gradient-to-r from-[#d8c359] to-transparent";
  const cardHoverBorder = isBrand
    ? "hover:border-[#00ff87]/50 hover:shadow-[0_12px_40px_rgba(0,255,135,0.22)]"
    : "hover:border-[#d8c359]/40 hover:shadow-[0_12px_40px_rgba(205,167,32,0.15)]";
  const arrowColor = isBrand ? "text-[#00ff87]" : "text-[#d8c359]/70";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <React.Fragment>
      <div
        ref={sectionRef}
        className="three-step-wrap relative py-20 md:py-28 lg:py-32 bg-cover bg-center bg-no-repeat overflow-hidden bg-[#05040b]"
      
      >
        {/* dark overlay so text stays readable over the glowing background lines */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05040b]/70 via-[#05040b]/40 to-[#05040b]/70 pointer-events-none" />

        <div className="inner relative max-w-[1196px] mx-auto px-5 z-10">
          {/* Main heading */}
          <h2
            className={`text-center text-3xl sm:text-5xl md:text-[54px] lg:text-[64px] font-semibold leading-tight mb-12 sm:mb-16 md:mb-20 transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-8"
              }`}
            style={{
              background:
                "linear-gradient(136deg, #FFF 60%, rgba(147, 153, 173, 0.4) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {heading}
          </h2>

          {/* Steps grid: 1 col mobile, 2 col tablet, 4 equal cols desktop */}
          <div className="step-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`step-list relative transition-all duration-700 ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                  }`}
                style={{ transitionDelay: `${step.delay}ms` }}
              >
                {/* Card */}
                <div className={`group h-full rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${cardHoverBorder}`}>
                  {/* Step number */}
                  <div
                    className="num-wrap text-[72px] md:text-[84px] font-semibold leading-none mb-4 select-none"
                    style={{
                      background: numberGradient,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Divider */}
                  <div className={`h-[2px] w-10 rounded-full ${dividerClass} mb-4 transition-all duration-300 group-hover:w-16`} />

                  {/* Text content */}
                  <div className="text-wrap">
                    <h3 className="text-white text-lg md:text-[20px] font-semibold leading-snug mb-2 uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-[#9399AD] text-sm md:text-[15px] font-normal leading-relaxed mb-0">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow connector between cards (desktop only) */}
                {index < steps.length - 1 && (
                  <div
                    className={`hidden lg:block absolute top-1/2 -right-[34px] -translate-y-1/2 w-[28px] h-[11px] bg-contain bg-center bg-no-repeat transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"
                      }`}
                    style={{ backgroundImage: `url(/tbg/arrow.png)` }}
                  />
                )}

                {/* Down arrow connector (mobile only) */}
                {index < steps.length - 1 && (
                  <div className={`sm:hidden flex justify-center mt-5 -mb-1 ${arrowColor} text-xl leading-none`}>
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12 sm:mt-16">
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block bg-gradient-to-r from-[#00ff87] via-[#10b981] to-[#1fa864] rounded-2xl sm:rounded-full px-8 sm:px-12 py-3.5 text-black text-base sm:text-lg text-center font-semibold cursor-pointer z-10 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(0,255,135,0.45)] capitalize tracking-wide shadow-lg"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
