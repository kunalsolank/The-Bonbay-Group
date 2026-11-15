import { motion } from "framer-motion";

export default function ContactFinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.07] py-24 sm:py-28 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,135,0.09),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto w-[90%] max-w-5xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-white/50">
          Have a question?
        </p>
        <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
          We&apos;re only
          <br />
          <span className="text-[#00ff87]">a message away.</span>
        </h2>
        <a
          href="#contact-form"
          className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/3 px-7 py-4 text-sm font-medium transition-all hover:border-[#00ff87]/50 hover:bg-[#00ff87]/10"
        >
          Contact our team
          <span className="text-[#00ff87]">↗</span>
        </a>
      </motion.div>
    </section>
  );
}
