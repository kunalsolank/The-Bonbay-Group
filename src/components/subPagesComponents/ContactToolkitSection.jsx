import FeatureCardGrid from "./FeatureCardGrid";
import ScrollReveal from "../ui/ScrollReveal";

const toolkitCards = [
  {
    title: "FAQs",
    desc: "Find quick answers to common questions about trading, accounts, and getting started with Dollrex Capital.",
    icon: (
      <img
        src="https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/_cn01.svg"
        alt=""
        className="h-7 w-7 object-contain"
        loading="lazy"
      />
    ),
    color: "#00ff87",
  },
  {
    title: "Help Center",
    desc: "Got questions? Our Help Center has clear, easy-to-follow guidance on platform basics and account queries.",
    icon: (
      <img
        src="https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/_cn02.svg"
        alt=""
        className="h-7 w-7 object-contain"
        loading="lazy"
      />
    ),
    color: "#00ff87",
  },
  {
    title: "Calculators",
    desc: "Quickly work out margin, swaps, and pip value with handy trading calculators—without complicated math.",
    icon: (
      <img
        src="https://www.dollrexcapital.com/wp-content/themes/blankslate-child/assets/images/_cn03.svg"
        alt=""
        className="h-7 w-7 object-contain"
        loading="lazy"
      />
    ),
    color: "#00ff87",
  },
];

export default function ContactToolkitSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28">
      <div className="mx-auto w-[90%] max-w-7xl">
        <ScrollReveal className="mb-10 max-w-3xl sm:mb-14" amount={0.2}>
          <p className="text-xs uppercase tracking-[0.25em] text-[#00ff87]">
            Explore more
          </p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Your Handy Trading Toolkit
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
            Explore these powerful tools designed to support your journey,
            whether you’re just getting started or sharpening your edge.
          </p>
        </ScrollReveal>

        <FeatureCardGrid
          items={toolkitCards}
          columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.12}
          className="gap-4 sm:gap-5"
        />
      </div>
    </section>
  );
}
