import { motion } from "framer-motion";

// Default animation variants (override via props if you already have your own)
const defaultStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const defaultFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cn = (...classes) => classes.filter(Boolean).join(" ");

/**
 * Single stat cell: big value + label.
 */
export function StatItem({
  value,
  label,
  showDivider = false,
  variants = defaultFadeUp,
  dividerClassName = "border-[#c5c8ba]",
  valueClassName = "text-3xl md:text-5xl font-semibold",
  labelClassName = "text-[#707568] text-sm mt-3",
  className = "",
}) {
  return (
    <motion.div
      variants={variants}
      className={cn(
        "py-12 md:py-16 px-6",
        showDivider && `border-l ${dividerClassName}`,
        className
      )}
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={valueClassName}
      >
        {value}
      </motion.p>
      <p className={labelClassName}>{label}</p>
    </motion.div>
  );
}

/**
 * Reusable animated stats strip.
 *
 * stats: [{ value: "10k+", label: "Customers" }, ...]
 */
export default function StatsSection({
  stats = [],
  containerVariants = defaultStagger,
  itemVariants = defaultFadeUp,
  className = "bg-[#e5e7dc] text-[#10120d]",
  gridClassName = "grid-cols-2 md:grid-cols-4",
  dividerClassName,
  valueClassName,
  labelClassName,
}) {
  return (
    <section className={cn("relative", className)}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={cn("w-[90%] max-w-7xl mx-auto grid", gridClassName)}
      >
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            label={stat.label}
            showDivider={index !== 0}
            variants={itemVariants}
            dividerClassName={dividerClassName}
            valueClassName={valueClassName}
            labelClassName={labelClassName}
          />
        ))}
      </motion.div>
    </section>
  );
}