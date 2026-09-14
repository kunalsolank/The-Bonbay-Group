import React from "react";

const benefits = [
  {
    number: "01",
    title: "Trust",
    description:
      "Transparent, and guided by trader-first principles since day one.",
    icon: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/n/wc/wc-01.svg",
  },
  {
    number: "02",
    title: "Support",
    description:
      "Get expert assistance 24/5 via WhatsApp, email, and live chat.",
    icon: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/n/wc/wc-02.svg",
  },
  {
    number: "03",
    title: "Access",
    description:
      "Trade global markets with deep liquidity and zero restrictions on strategy.",
    icon: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/n/wc/wc-03.svg",
  },
  {
    number: "04",
    title: "Speed",
    description: "Fast execution. Instant withdrawals. No delays. No excuses.",
    icon: "https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/n/wc/wc-04.svg",
  },
];

const WhyDollrex = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 sm:py-28 lg:py-36">
      {/* Background */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#20a46a]/5 blur-[150px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="Secondary-font text-sm uppercase tracking-[0.2em] text-[#20a46a]">
              [ Why DollreX Capital Ltd? ]
            </span>

            <h2 className="mt-5 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              Built around
              <br />
              <span className="text-white/40">the trader.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#999] lg:pb-2">
            Designed for traders who value{" "}
            <span className="text-white">transparency, flexibility,</span> and
            round-the-clock support.
          </p>
        </div>

        {/* Feature List */}
        <div className="border-t border-white/10">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.number}
              className="
                group relative
                grid grid-cols-[55px_1fr]
                gap-5
                border-b border-white/10
                py-8
                transition-all duration-500
                sm:grid-cols-[80px_70px_1fr_180px]
                sm:items-center
                sm:gap-8
                lg:py-10
              "
            >
              {/* Hover Background */}
              <div
                className="
                  pointer-events-none absolute
                  inset-0
                  -z-10
                  bg-gradient-to-r
                  from-[#20a46a]/[0.06]
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

              {/* Number */}
              <div className="font-mono text-sm tracking-widest text-white/25 transition-colors duration-300 group-hover:text-[#20a46a]">
                {benefit.number}
              </div>

              {/* Icon */}
              <div
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/[0.025]
                  transition-all duration-500
                  group-hover:border-[#20a46a]/40
                  group-hover:bg-[#20a46a]/10
                  sm:h-16 sm:w-16
                "
              >
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="h-7 w-7 object-contain"
                />
              </div>

              {/* Main Content */}
              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-center gap-4">
                  {/* Gold vertical indicator */}
                  <span
                    className="
                      h-8 w-[2px]
                      origin-bottom
                      scale-y-0
                      bg-[#20a46a]
                      transition-transform duration-500
                      group-hover:scale-y-100
                    "
                  />

                  <h3
                    className="
                      Secondary-font
                      text-2xl font-medium
                      text-white
                      transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:text-[#20a46a]
                      sm:text-3xl
                    "
                  >
                    {benefit.title}
                  </h3>
                </div>

                <p className="mt-3 max-w-xl text-sm leading-6 text-[#888] sm:text-base">
                  {benefit.description}
                </p>
              </div>

              {/* Right Arrow / Explore */}
              <div
                className="
                  hidden
                  items-center justify-end
                  gap-3
                  text-xs uppercase
                  tracking-[0.2em]
                  text-white/20
                  transition-all duration-500
                  group-hover:text-[#20a46a]
                  sm:flex
                "
              >
                <span>Discover</span>

                <span
                  className="
                    flex h-8 w-8
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    transition-all duration-500
                    group-hover:translate-x-1
                    group-hover:border-[#20a46a]/40
                  "
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDollrex;
