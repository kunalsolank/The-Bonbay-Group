import React from "react";

const TrustAwards = () => {
  const awards = [
    {
      image:
        "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/awards/award-01.webp",
      alt: "Best Mobile Trading App",
    },
    {
      image:
        "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/awards/award-02.webp",
      alt: "Best Copy Trading Platform",
    },
    {
      image:
        "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/awards/award-03.webp",
      alt: "Best CFD Brokerage",
    },
    {
      image:
        "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/awards/award-04.webp",
      alt: "Most Reliable Broker",
    },
    {
      image:
        "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/awards/award-05.webp",
      alt: "Best Trading Platform",
    },
  ];

  return (
    <section className="bg-black py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-[1650px] px-5 sm:px-8 lg:px-10">
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/[0.12]
            bg-[#090909]
            px-6
            py-8
            sm:px-8
            sm:py-10
            lg:px-10
            lg:py-12
          "
        >
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#a0d311]/[0.025] blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_2fr] lg:gap-8">
            {/* =========================================
                REGULATION
            ========================================== */}
            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
                Regulated by
              </span>

              <p className="mt-5 text-xl font-light leading-relaxed tracking-tight text-white/80 sm:text-2xl lg:text-[27px]">
                ASIC, CMA, FSA, FSC, FSCA
              </p>
            </div>

            {/* =========================================
                AWARDS
            ========================================== */}
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="
                    group
                    relative
                    flex
                    min-h-[105px]
                    items-center
                    justify-center
                    rounded-2xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      rounded-2xl
                      bg-white/[0.025]
                      opacity-0
                      blur-xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <img
                    src={award.image}
                    alt={award.alt}
                    className="
                      relative
                      z-10
                      h-auto
                      max-h-[105px]
                      w-full
                      max-w-[150px]
                      object-contain
                      opacity-90
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:opacity-100
                    "
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom accent */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#a0d311]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TrustAwards;
