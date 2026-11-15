import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import contact from "../../assets/contact/contact.png"
export default function ContactVisualStrip() {
  return (
    <section className="relative border-y border-white/[0.07]">
      <div className="grid min-h-105 lg:grid-cols-2">
        <div className="relative min-h-105 overflow-hidden">
          <ScrollReveal
            direction="left"
            className="absolute inset-0"
            amount={0.2}
          >
            <img
              src={contact}
              alt="Dollrex Capital workspace"
              className="h-full w-full object-cover grayscale opacity-60 transition duration-700 hover:scale-105 hover:opacity-75"
            />
          </ScrollReveal>

          <div className="absolute inset-0 bg-linear-to-r from-[#080908]/30 via-transparent to-[#080908]" />
          <div className="absolute bottom-8 left-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#00ff87]">
              Dollrex Capital
            </span>
            <p className="mt-2 text-xl font-medium">
              Built around your journey.
            </p>
          </div>
        </div>

        <div className="flex items-center bg-[#0d1114] px-[8%] py-20 lg:px-[12%]">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[#00ff87]">
              Why reach out?
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              The right support
              <br />
              <span className="text-white/50">makes a difference.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">
              Trading should feel clear, informed and supported. Our team is
              here to help you navigate the platform, understand our services
              and get the answers you need.
            </p>
            <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/45">
              <span className="h-px w-10 bg-[#00ff87]" />
              Professional support
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
