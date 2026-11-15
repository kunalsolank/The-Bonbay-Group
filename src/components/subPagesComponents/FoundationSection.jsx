import { motion, useReducedMotion } from "framer-motion";
import { Globe2, Rocket } from "lucide-react";

const defaultCards = [
  {
    number: "01",
    label: "Mandate",
    title: "Our Mission",
    description:
      "We make online trading more accessible through transparent pricing, reliable execution, and technology built around traders. Our priority is to put client confidence and responsible growth first.",
    Icon: Rocket,
    tags: ["Trader First", "Transparent Pricing", "Reliable Execution"],
  },
  {
    number: "02",
    label: "Horizon",
    title: "Our Vision",
    description:
      "We see a more open global market where traders can access the tools and support they need. By combining modern technology with a human-first experience, we aim to raise the standard of online trading.",
    Icon: Globe2,
    tags: ["Global Access", "Modern Technology", "Ethical Growth"],
  },
];

export default function FoundationSection({
  eyebrow = "Our Foundation",
  title = "Purpose-Built for Sustainable Performance",
  cards = defaultCards,
  accent = "#00ff87",
  className = "",
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`relative overflow-hidden bg-[#080908] px-4 py-20 text-white sm:px-6 md:py-28 ${className}`}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[min(80vw,52rem)] -translate-x-1/2 rounded-full opacity-[0.08] blur-[120px]"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10 text-center sm:mb-12"
        >
          <p
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-xs"
            style={{ color: accent }}
          >
            {eyebrow}
          </p>
          <h2 className="mx-auto max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            {title}
          </h2>
        </motion.header>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {cards.map(({ number, label, title: cardTitle, description, Icon, tags = [] }, index) => (
            <motion.article
              key={`${number ?? index}-${cardTitle}`}
              initial={{
                opacity: 0,
                x: shouldReduceMotion ? 0 : index % 2 === 0 ? -24 : 24,
                y: shouldReduceMotion ? 0 : 28,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.65,
                delay: shouldReduceMotion ? 0 : index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-xl border border-white/6 bg-[#111411] p-6 transition-colors duration-300 hover:border-white/12 hover:bg-[#151a15] sm:p-8"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-lg border"
                  style={{
                    color: accent,
                    backgroundColor: `${accent}12`,
                    borderColor: `${accent}24`,
                  }}
                >
                  {Icon && <Icon size={19} strokeWidth={2} aria-hidden="true" />}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#62685f]">
                  {number} // {label}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">
                {cardTitle}
              </h3>
              <p className="max-w-2xl text-sm leading-6 text-[#a4aaa1] sm:text-[15px] sm:leading-7">
                {description}
              </p>

              {tags.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${cardTitle} principles`}>
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm border border-white/4 bg-white/4 px-2 py-1 font-mono text-[9px] tracking-wide text-[#92998f] sm:text-[10px]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
