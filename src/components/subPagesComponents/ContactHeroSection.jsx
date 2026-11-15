import { motion } from "framer-motion";
import hero from '../../assets/contact/hero.png'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroContent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function ContactHeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,135,0.12),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(16,185,129,0.08),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-size-[90px_90px] opacity-[0.025]" />

        <motion.div
          animate={{ x: [0, 70, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-60 -top-60 h-175 w-175 rounded-full bg-[#00ff87]/10 blur-[180px]"
        />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] w-[90%] max-w-7xl items-center py-32">
        <div className="grid w-full gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            variants={heroContent}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#00ff87]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#00ff87]">
                Contact Dollrex
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-8 max-w-5xl text-5xl font-medium leading-none tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[88px]"
            >
              Let&apos;s
              <br />
              <span className="bg-linear-to-r from-[#00ff87] via-[#10b981] to-[#1fa864] bg-clip-text text-transparent">
                connect.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-9 max-w-2xl text-base leading-8 text-white/60 md:text-lg"
            >
              Whether you have a question about our trading environment, need
              assistance with your account, or want to learn more about Dollrex
              Capital, our team is here to help.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <a
                href="#contact-form"
                className="inline-flex items-center gap-4 rounded-2xl bg-linear-to-r from-[#00ff87] to-[#1fa864] px-7 py-4 text-sm font-semibold text-[#07110b] shadow-[0_10px_30px_rgba(0,255,135,0.12)] transition hover:scale-[1.03] hover:shadow-[0_15px_50px_rgba(32,164,106,0.18)]"
              >
                Send an enquiry
                <span className="text-lg">↗</span>
              </a>
              <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                We are here to help
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-142.5 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={hero}
                alt="Professional consultation"
                className="absolute inset-0 h-full w-full object-cover grayscale opacity-70"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#080908] via-[#080908]/30 to-[#00ff87]/10" />
              <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-[#00ff87] via-[#00ff87]/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-[#080908]/80 p-5 backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-8 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#00ff87]">
                      Client Support
                    </p>
                    <p className="mt-2 text-xl font-medium">We&apos;re listening.</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00ff87]/30 text-[#00ff87]">
                    ↗
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-8 text-[120px] leading-none tracking-[-0.08em] text-white/2.5">
              24
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
