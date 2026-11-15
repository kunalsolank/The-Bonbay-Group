import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * FeatureGridSection – reusable section: heading + auto-sizing grid of cards.
 * Cards animate in one by one (bottom -> up) when the grid scrolls into view.
 *
 * <FeatureGridSection
 *   title="Hassle-Free Deposits"
 *   description="We partner with visionary teams..."
 *   items={deposits}
 *   minItemWidth="320px"
 * />
 *
 * Each item: {
 *   id?, icon?, image?, number?, title, color?,
 *   details?: [{ label, value }]
 * }
 *
 * Props:
 *  - title, description : section heading
 *  - items              : cards data
 *  - minItemWidth       : smallest card width before a column drops (default "320px")
 *  - gap                : grid gap (default "2rem")
 *  - mode               : "fit" (stretch) | "fill" (keep empty tracks)
 *  - withBackground     : navy-blue background + green glow (default false = plain site theme)
 *  - maxWidth           : container max width (default "1350px")
 *  - className          : extra classes for <section>
 *  - stagger            : delay between each card in seconds (default 0.15)
 */

// Parent: controls the order/timing of the children
const makeContainerVariants = (stagger) => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: stagger, // one card after another
            delayChildren: 0.1,
        },
    },
});

// Child: each card slides up from the bottom and fades in
const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function FeatureGridSection({
    title,
    description,
    items = [],
    minItemWidth = "320px",
    gap = "2rem",
    mode = "fit",
    withBackground = false,
    maxWidth = "1350px",
    className,
    stagger = 0.15,
}) {
    const repeat = mode === "fill" ? "auto-fill" : "auto-fit";

    return (
        <section
            className={cn(
                "relative isolate overflow-hidden py-24",
                withBackground && "bg-[#060b1f]",
                className,
            )}
        >
            {withBackground && (
                <>
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-[#0a1230] via-[#060b1f] to-[#04070f]" />
                    <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#00ff87]/15 blur-[140px]" />
                    <div className="pointer-events-none absolute -bottom-40 -right-20 -z-10 h-[360px] w-[520px] rounded-full bg-[#0b6b46]/30 blur-[140px]" />
                </>
            )}

            <div className="container mx-auto px-4" style={{ maxWidth }}>
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16 text-center"
                >
                    <h2 className="mx-auto mb-6 max-w-3xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-4xl font-medium text-transparent md:text-5xl">
                        {title}
                    </h2>
                    {description && (
                        <p className="mx-auto max-w-[550px] text-lg text-white/80">
                            {description}
                        </p>
                    )}
                </motion.div>

                {/* Auto grid – animates its children one by one */}
                <motion.div
                    className="grid"
                    variants={makeContainerVariants(stagger)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    style={{
                        gridTemplateColumns: `repeat(${repeat}, minmax(min(${minItemWidth}, 100%), 1fr))`,
                        gap,
                    }}
                >
                    {items.map((item, index) => (
                        <FeatureCard key={item.id ?? `${item.title}-${index}`} item={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function FeatureCard({ item }) {
    const { icon, image, number, title, details = [], color = "#00ff87" } = item;

    return (
        <motion.div
            variants={cardVariants} // inherits hidden/visible from the grid parent
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group relative h-full w-full rounded-2xl border border-white/10 bg-[#0d0c16]/70 p-6 backdrop-blur-xl transition-colors duration-500 hover:bg-white/[0.06]"
        >
            {/* Top subtle colored gradient line */}
            <div
                className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
            />

            {/* Hover colored ambient glow */}
            <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    boxShadow: `inset 0 0 0 1px ${color}40, 0 18px 45px -15px ${color}35`,
                }}
            />

            {/* Top row: icon / image on left, number on right */}
            {(icon || image || number) && (
                <div className="relative mb-5 flex items-start justify-between gap-3">
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            width={160}
                            height={48}
                            className="h-12 w-auto max-w-[60%] object-contain object-left"
                        />
                    ) : icon ? (
                        <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110"
                            style={{
                                background: `${color}18`,
                                borderColor: `${color}45`,
                                boxShadow: `0 0 20px ${color}20`,
                            }}
                        >
                            <img src={icon} alt="" width={26} height={26} className="object-contain" />
                        </div>
                    ) : (
                        <span />
                    )}

                    {number && (
                        <div
                            className="select-none text-right text-xl font-bold leading-none tabular-nums tracking-tight sm:text-2xl"
                            style={{ color }}
                        >
                            {number}
                        </div>
                    )}
                </div>
            )}

            {/* Title */}
            <h3 className="relative mb-2 text-lg font-semibold text-white sm:text-xl">
                {title}
            </h3>

            {/* Details */}
            {details.length > 0 && (
                <div className="relative space-y-1">
                    {details.map(
                        (row) =>
                            row.value && (
                                <p key={row.label} className="text-sm leading-relaxed text-white/60">
                                    <span className="text-white/60">{row.label}:</span>{" "}
                                    <span className="font-semibold" style={{ color }}>
                                        {row.value}
                                    </span>
                                </p>
                            ),
                    )}
                </div>
            )}

            {/* Bottom subtle line on hover */}
            <div
                className="absolute inset-x-6 bottom-0 h-0.5 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
            />
        </motion.div>
    );
}