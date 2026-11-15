import { motion } from "framer-motion";
import ContactFormCard from "./ContactFormCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const content = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const contactDetails = [
  {
    number: "01",
    label: "Email",
    value: "support@dollrexcapital.com",
    href: "mailto:support@dollrexcapital.com",
  },
  {
    number: "02",
    label: "Phone",
    value: "+971 52 302 4973",
    href: "tel:+971523024973",
  },
  {
    number: "03",
    label: "Office",
    value: "Oilaji Trade Centre, 1st Floor, Victoria, Mahe, Seychelles",
    href: "#",
  },
];

export default function ContactInquirySection() {
  return (
    <section
      id="contact-form"
      className="relative border-t border-white/[0.07] py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={content}
          >
            <motion.div variants={fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00ff87]">
                Get in touch
              </p>
              <h2 className="mt-6 text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                Tell us
                <br />
                <span className="text-white/50">what you need.</span>
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/60 md:text-base">
                Fill in the form and our team will get back to you as soon as
                possible. Whether you&apos;re an existing client or exploring
                our services, we&apos;d be happy to hear from you.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 border-t border-white/10"
            >
              {contactDetails.map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  className="group flex items-start gap-5 border-b border-white/10 py-6"
                >
                  <span className="font-mono text-[10px] text-white/20">
                    {item.number}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/70 transition-colors group-hover:text-[#00ff87]">
                      {item.value}
                    </p>
                  </div>
                  <span className="ml-auto text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[#00ff87]">
                    ↗
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <ContactFormCard />
        </div>
      </div>
    </section>
  );
}
