import React from "react";

const defaultCompanyLogos = [
  "/company-logo1.svg",
  "/company-logo2.svg",
  "/company-logo3.svg",
  "/company-logo4.svg",
  "/company-logo5.svg",
];

export default function AboutSection({
  tag = "Trusted by 150+ tech-driven teams.",
  heading = "We design with purpose. We build with intelligence.",
  description = "We create future-ready brands, smart SaaS interfaces, and high-converting websites that leave a lasting impact.",
  stat1Value = "$10.7B",
  stat1Label = "In product launches",
  stat2Value = "13K+",
  stat2Label = "Active global traders",
  buttonText = "Get Started",
  buttonLink = "/about",
  companyLogos = defaultCompanyLogos,
  image=''
}) {
  return (
    <section className="relative pt-12 pb-14 bg-[#05040b]">
      {/* Subtle blur div */}
      <div className="absolute inset-0 top-[30%] h-[60px] bg-gradient-to-r from-transparent via-[#1fa864]/15 to-transparent blur-2xl pointer-events-none" />

      <div className="container mx-auto max-w-[1350px] px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1fr] items-center gap-x-6 md:gap-x-12 gap-y-10 mb-10">
          {/* Left side - text and stats */}
          <div className="text-center md:text-left">
            <div className="flex flex-col gap-8 md:gap-10 pt-4 pb-5">
              {/* Client images and subtitle */}
              <div>
                <div className="inline-flex flex-wrap justify-center md:justify-start items-center gap-3 border border-[#00ff87]/30 rounded-full px-4 py-2 max-w-full md:max-w-max mb-6 mx-auto md:mx-0 bg-[#00ff87]/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,135,0.12)]">
                  <span className="text-[#00ff87] tracking-widest uppercase text-xs sm:text-sm font-semibold">
                    {tag}
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight max-w-full md:max-w-lg leading-tight mb-4">
                  {heading}
                </h2>

                {/* Paragraph */}
                <p className="text-gray-400 max-w-full md:max-w-lg text-base sm:text-lg leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Stats */}
              {(stat1Value || stat2Value) && (
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center md:justify-start">
                  {stat1Value && (
                    <div className="flex flex-col items-center md:items-start">
                      <h3 className="font-mono text-3xl sm:text-4xl mb-1 font-semibold bg-gradient-to-r from-[#00ff87] to-[#10b981] bg-clip-text text-transparent">
                        {stat1Value}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base">
                        {stat1Label}
                      </p>
                    </div>
                  )}
                  {stat2Value && (
                    <div className="flex flex-col items-center md:items-start">
                      <h3 className="font-mono text-3xl sm:text-4xl mb-1 font-semibold bg-gradient-to-r from-[#00ff87] to-[#10b981] bg-clip-text text-transparent">
                        {stat2Value}
                      </h3>
                      <p className="text-white/70 text-sm sm:text-base">
                        {stat2Label}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Learn about us button */}
              <div className="flex justify-center md:justify-start">
                <a
                  href={buttonLink}
                  className="bg-gradient-to-r from-[#00ff87] via-[#10b981] to-[#1fa864] text-black px-7 py-3 font-semibold uppercase secondary-font tracking-wide rounded-xl sm:rounded-2xl hover:scale-[1.03] hover:shadow-[0_10px_25px_-5px_rgba(0,255,135,0.45)] transition-all duration-300 inline-block cursor-pointer shadow-md text-sm"
                >
                  {buttonText}
                </a>
              </div>
            </div>
          </div>

          {/* Right side - About Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={image}
                alt="About TradeLogicFX"
                width={940}
                height={650}
                className="rounded-2xl object-cover w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Company logos */}
        {/* <div className="flex flex-col items-center gap-4 text-center mt-12 sm:mt-16">
          <span className="text-white/70 text-sm font-normal">
            Trusted by +160,000 companies and clients
          </span>
          <div className="flex gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center items-center mt-2">
            {companyLogos.map((logoUrl, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 flex justify-center items-center hover:border-white/20 transition-colors"
              >
                <img
                  src={logoUrl}
                  alt={`Company logo ${idx + 1}`}
                  width={80}
                  height={32}
                  className="w-16 sm:w-20 md:w-24 h-7 sm:h-8 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
