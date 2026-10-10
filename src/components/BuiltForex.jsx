import React from "react";
import { motion } from "framer-motion";

const defaultFeatures = [
  {
    icon: "/icon112.svg",
    title: "Multilingual by Design",
    description: "Speak to users in 100+ languages - no plugins.",
    image: "/image12.webp",
  },
  {
    icon: "/icon2.svg",
    title: "Intelligent Tool Hooks",
    description: "Connect tools or services to trigger contextual actions.",
    tools: [
      "/image2-1.svg",
      "/image2-2.svg",
      "/image2-3.svg",
      "/image2-4.svg",
      "/image2-5.svg",
    ],
  },
  {
    icon: "/icon3.svg",
    title: "A/B Prompt + UX Testing",
    description: "Optimize what matters. Run real-time experiments.",
    noImage: true,
  },
  {
    icon: "/icon4.svg",
    title: "Custom Model Support",
    description: "Bring your own AI. Use your LLMs models with full design.",
    noImage: true,
  },
  {
    icon: "/icon5.svg",
    title: "Real-Time Prototype",
    description: "Preview, test, and validate designs.",
    image: "/image3.webp",
  },
];

const defaultCompliance = [
  {
    icon: "/compliance-icon1.svg",
    title: "99.9% Uptime",
    description: "Enterprise-grade audio infra built.",
    bgColor: "bg-[#011b20]",
  },
  {
    icon: "/compliance-icon2.svg",
    title: "Launch Support",
    description: "Hands-on help from a dedicated deployment",
    bgColor: "bg-[#200401]",
  },
  {
    icon: "/compliance-icon3.svg",
    title: "AI Guardrails",
    description: "Built-in safeguards reduce hallucinations.",
    bgColor: "bg-[#012003]",
  },
  {
    icon: "/compliance-icon4.svg",
    title: "Compliance",
    description: "Fully SOC 2, HIPAA & PCI-ready for regulated.",
    bgColor: "bg-[#201601]",
  },
];

/* ---------- Animation variants ----------
   The parent grid staggers its children, so cards appear
   one by one, sliding from bottom to top. */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18, // gap between each card (lower = faster)
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80 }, // y = distance travelled from the bottom
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div variants={item} whileHover={{ y: -6 }} className={className}>
      {children}
    </motion.div>
  );
}

const cardClass =
  "flex flex-col justify-between bg-[#121212] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors";

function CardText({ icon, title, description }) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 p-5 sm:p-6">
      <img
        src={icon}
        alt={`${title} icon`}
        width={48}
        height={48}
        loading="lazy"
        className="feature-icon w-12 h-12"
      />
      <div className="feature-heading-div flex flex-col gap-2 sm:gap-3">
        <div className="large-text text-white text-lg font-normal">{title}</div>
        <p className="small-paragraph feature-paragraph text-gray-400 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function BuiltForex({
  tag = "Features",
  title = "Built for founders, Fine-tuned for teams.",
  description = "Smart infrastructure and design flexibility to scale AI experiences, fast.",
  features = defaultFeatures,
  compliance = defaultCompliance,
}) {
  return (
    <section className="section py-20 sm:py-28 lg:py-36 px-4 sm:px-6 bg-[#05040b]">
      <div className="container mx-auto px-0 sm:px-4 max-w-337.5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center flex flex-col items-center gap-3 sm:gap-4 pb-8 lg:pb-10"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-sm">
            <img
              src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/68821a3faca8d79d3b4e7810_star.svg"
              alt=""
              width={20}
              height={20}
              loading="lazy"
            />
            <div className="sub-heading-text text-white uppercase font-medium tracking-widest text-xs sm:text-sm">
              {tag}
            </div>
          </div>
          <h2 className="text-white font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[95vw] sm:max-w-xl mx-auto">
            {title}
          </h2>
          <p className="large-paragraph feature-paragraph text-white/70 max-w-[90vw] sm:max-w-md mx-auto text-center">
            {description}
          </p>
        </motion.div>

        {/* Features grid (parent of the stagger) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-5 mt-10 sm:mt-14"
        >
          {/* First feature */}
          <Reveal className={cardClass}>
            <div className="flex flex-col h-full">
              <CardText {...features[0]} />
              {features[0]?.image && (
                <div className="mt-auto">
                  <img
                    src={features[0].image}
                    alt=""
                    width={305}
                    height={237}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </Reveal>

          {/* Second feature with tools */}
          <Reveal className={cardClass}>
            <div className="feature-card flex flex-col h-full">
              <CardText {...features[1]} />
              <div className="flex justify-center items-center relative h-48 sm:h-56 flex-wrap gap-2 p-4 mt-auto">
                {features[1]?.tools?.map((toolIcon, index) => (
                  <img
                    key={index}
                    src={toolIcon}
                    alt=""
                    width={60}
                    height={60}
                    className={`w-auto feature-tool-icon-0${index}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Third and fourth features in column
              (plain div: variants still propagate to the Reveal children) */}
          <div className="flex flex-col gap-5">
            {features.slice(2, 4).map((f, index) => (
              <Reveal key={index} className={cardClass}>
                <div className="flex flex-col h-full">
                  <CardText {...f} />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Fifth feature */}
          <Reveal className={cardClass}>
            <div className="feature-card flex flex-col h-full">
              <CardText {...features[4]} />
              {features[4]?.image && (
                <div className="mt-auto">
                  <img
                    src={features[4].image}
                    alt=""
                    width={305}
                    height={237}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </Reveal>
        </motion.div>

        {/* Compliance grid (own stagger parent) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 mt-8 sm:mt-10 mx-auto"
        >
          {compliance.map(
            ({ icon, title: cTitle, description: cDesc, bgColor }, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="flex items-center gap-3 p-3 rounded-[17px] bg-white/2 border border-white/5"
              >
                <div
                  className={`flex justify-center items-center w-13.5 h-13.5 sm:w-15.5 sm:h-15.5 min-w-13.5 min-h-[54px] sm:min-w-[62px] sm:min-h-[62px] rounded-lg ${bgColor}`}
                >
                  <img
                    src={icon}
                    alt={`${cTitle} icon`}
                    width={28}
                    height={28}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-white font-medium text-sm sm:text-base">
                    {cTitle}
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">{cDesc}</p>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
} 