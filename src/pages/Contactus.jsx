import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contactus = () => {
  const [submitted, setSubmitted] = useState(false);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-[#070807] text-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background */}

        <div className="absolute inset-0">
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_80%_20%,rgba(32,164,106,0.12),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(57,89,166,0.08),transparent_28%)]
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.025]
              [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
              [background-size:90px_90px]
            "
          />

          <motion.div
            animate={{
              x: [0, 70, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-60
              -top-60
              h-[700px]
              w-[700px]
              rounded-full
              bg-[#20a46a]/10
              blur-[180px]
            "
          />
        </div>

        <div className="relative mx-auto flex min-h-[85vh] w-[90%] max-w-7xl items-center py-32">
          <div className="grid w-full gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* LEFT */}

            <motion.div variants={container} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#20a46a]" />

                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#20a46a]">
                  Contact Dollrex
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="
                  mt-8
                  max-w-5xl
                  text-6xl
                  font-medium
                  leading-[0.9]
                  tracking-[-0.055em]
                  sm:text-7xl
                  md:text-8xl
                  lg:text-[110px]
                "
              >
                Let's
                <br />
                <span className="bg-gradient-to-r from-[#20a46a] via-[#39a887] to-[#3959a6] bg-clip-text text-transparent">
                  connect.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="
                  mt-9
                  max-w-2xl
                  text-base
                  leading-8
                  text-white/45
                  md:text-lg
                "
              >
                Whether you have a question about our trading environment, need
                assistance with your account, or want to learn more about
                Dollrex Capital, our team is here to help.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap items-center gap-6"
              >
                <a
                  href="#contact-form"
                  className="
                    inline-flex
                    items-center
                    gap-4
                    rounded-full
                    bg-gradient-to-r
                    from-[#1fa864]
                    to-[#3959a6]
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    transition
                    hover:scale-[1.03]
                    hover:shadow-[0_15px_50px_rgba(32,164,106,0.18)]
                  "
                >
                  Send an enquiry
                  <span className="text-lg">↗</span>
                </a>

                <span className="text-xs uppercase tracking-[0.2em] text-white/25">
                  We are here to help
                </span>
              </motion.div>
            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[570px] overflow-hidden rounded-[2px] border border-white/10">
                {/* Image */}

                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                  alt="Professional consultation"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    grayscale
                    opacity-70
                  "
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#070807] via-[#070807]/30 to-[#20a46a]/10" />

                {/* Green line */}

                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#20a46a] via-[#20a46a]/30 to-transparent" />

                {/* Floating info */}

                <div className="absolute bottom-8 left-8 right-8 border border-white/10 bg-[#070807]/80 p-6 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#20a46a]">
                        Client Support
                      </p>

                      <p className="mt-2 text-xl font-medium">
                        We're listening.
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#20a46a]/30 text-[#20a46a]">
                      ↗
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating number */}

              <div className="absolute -bottom-6 -left-8 text-[120px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025]">
                24
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      <section
        id="contact-form"
        className="relative border-t border-white/[0.07] py-28 md:py-36"
      >
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            {/* LEFT INFORMATION */}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={container}
            >
              <motion.div variants={fadeUp}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#20a46a]">
                  Get in touch
                </p>

                <h2 className="mt-6 text-4xl font-medium leading-[1] tracking-[-0.04em] md:text-6xl">
                  Tell us
                  <br />
                  <span className="text-white/35">what you need.</span>
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/40 md:text-base">
                  Fill in the form and our team will get back to you as soon as
                  possible. Whether you're an existing client or exploring our
                  services, we'd be happy to hear from you.
                </p>
              </motion.div>

              {/* Contact details */}

              <motion.div
                variants={fadeUp}
                className="mt-12 border-t border-white/10"
              >
                {contactDetails.map((item) => (
                  <a
                    key={item.number}
                    href={item.href}
                    className="
                      group
                      flex
                      items-start
                      gap-5
                      border-b
                      border-white/10
                      py-6
                    "
                  >
                    <span className="font-mono text-[10px] text-white/20">
                      {item.number}
                    </span>

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                        {item.label}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-white/70 transition-colors group-hover:text-[#20a46a]">
                        {item.value}
                      </p>
                    </div>

                    <span className="ml-auto text-white/20 transition-all group-hover:translate-x-1 group-hover:text-[#20a46a]">
                      ↗
                    </span>
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* FORM */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                relative
                overflow-hidden
                border
                border-white/10
                bg-[#0c0e0d]
                p-7
                md:p-10
                lg:p-12
              "
            >
              {/* Form glow */}

              <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#20a46a]/8 blur-[100px]" />

              {!submitted ? (
                <form onSubmit={handleSubmit} className="relative space-y-7">
                  {/* Top */}

                  <div className="mb-10 flex items-start justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#20a46a]">
                        Inquiry
                      </p>

                      <h3 className="mt-3 text-2xl font-medium">
                        Start a conversation
                      </h3>
                    </div>

                    <span className="font-mono text-xs text-white/20">
                      01 — 04
                    </span>
                  </div>

                  {/* Name + Email */}

                  <div className="grid gap-7 md:grid-cols-2">
                    <FormField
                      label="Full name"
                      name="name"
                      placeholder="Your name"
                      required
                    />

                    <FormField
                      label="Email address"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* Phone + Subject */}

                  <div className="grid gap-7 md:grid-cols-2">
                    <FormField
                      label="Phone number"
                      name="phone"
                      type="tel"
                      placeholder="+971..."
                    />

                    <div>
                      <label className="mb-3 block text-[10px] uppercase tracking-[0.22em] text-white/35">
                        Subject
                      </label>

                      <select
                        name="subject"
                        required
                        className="
                          h-12
                          w-full
                          border-b
                          border-white/15
                          bg-transparent
                          text-sm
                          text-white
                          outline-none
                          transition-colors
                          focus:border-[#20a46a]
                        "
                        defaultValue=""
                      >
                        <option value="" disabled className="bg-[#0c0e0d]">
                          Select an option
                        </option>

                        <option value="general" className="bg-[#0c0e0d]">
                          General enquiry
                        </option>

                        <option value="trading" className="bg-[#0c0e0d]">
                          Trading
                        </option>

                        <option value="account" className="bg-[#0c0e0d]">
                          Account support
                        </option>

                        <option value="partnership" className="bg-[#0c0e0d]">
                          Partnership
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}

                  <div>
                    <label className="mb-3 block text-[10px] uppercase tracking-[0.22em] text-white/35">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows="5"
                      required
                      placeholder="How can we help?"
                      className="
                        w-full
                        resize-none
                        border-b
                        border-white/15
                        bg-transparent
                        py-3
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-white/20
                        focus:border-[#20a46a]
                      "
                    />
                  </div>

                  {/* Submit */}

                  <div className="flex flex-col gap-5 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-[11px] leading-5 text-white/25">
                      By submitting this form, you agree to be contacted by our
                      team regarding your enquiry.
                    </p>

                    <motion.button
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      type="submit"
                      className="
                        inline-flex
                        shrink-0
                        items-center
                        justify-center
                        gap-4
                        rounded-full
                        bg-gradient-to-r
                        from-[#1fa864]
                        to-[#3959a6]
                        px-7
                        py-4
                        text-sm
                        font-semibold
                        shadow-[0_10px_40px_rgba(32,164,106,0.08)]
                      "
                    >
                      Send message
                      <span>↗</span>
                    </motion.button>
                  </div>
                </form>
              ) : (
                /* SUCCESS STATE */

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="
                    flex
                    min-h-[500px]
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#20a46a]/40
                      bg-[#20a46a]/10
                      text-3xl
                      text-[#20a46a]
                    "
                  >
                    ✓
                  </div>

                  <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#20a46a]">
                    Message received
                  </p>

                  <h3 className="mt-4 text-3xl font-medium">
                    Thank you for reaching out.
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                    Your enquiry has been submitted successfully. A member of
                    our team will get back to you shortly.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm text-white/50 transition-colors hover:text-[#20a46a]"
                  >
                    Send another message →
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISUAL STRIP
      ===================================================== */}

      <section className="relative border-y border-white/[0.07]">
        <div className="grid min-h-[420px] lg:grid-cols-2">
          {/* IMAGE */}

          <div className="relative min-h-[420px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
              alt="Dollrex Capital workspace"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                grayscale
                opacity-60
                transition
                duration-700
                hover:scale-105
                hover:opacity-75
              "
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#070807]/30 via-transparent to-[#070807]" />

            <div className="absolute bottom-8 left-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#20a46a]">
                Dollrex Capital
              </span>

              <p className="mt-2 text-xl font-medium">
                Built around your journey.
              </p>
            </div>
          </div>

          {/* CONTENT */}

          <div className="flex items-center bg-[#0b0d0c] px-[8%] py-20 lg:px-[12%]">
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#20a46a]">
                Why reach out?
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                The right support
                <br />
                <span className="text-white/35">makes a difference.</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
                Trading should feel clear, informed and supported. Our team is
                here to help you navigate the platform, understand our services
                and get the answers you need.
              </p>

              <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white/30">
                <span className="h-px w-10 bg-[#20a46a]" />
                Professional support
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK LINKS
      ===================================================== */}

      <section className="relative py-28 md:py-36">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#20a46a]">
                Explore more
              </p>

              <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
                Need something else?
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/35">
              Explore our markets, tools and resources designed to help you make
              more informed trading decisions.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            <QuickLink
              number="01"
              title="Explore Markets"
              description="Discover the markets available through Dollrex Capital."
              to="/markets"
            />

            <QuickLink
              number="02"
              title="Help Center"
              description="Find answers to common questions about trading and accounts."
              to="/help"
            />

            <QuickLink
              number="03"
              title="Get Started"
              description="Ready to trade? Take the next step with Dollrex Capital."
              to="/register"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden border-t border-white/[0.07] py-32 md:py-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(32,164,106,0.09),transparent_40%)]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mx-auto w-[90%] max-w-5xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/25">
            Have a question?
          </p>

          <h2 className="mt-7 text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
            We're only
            <br />
            <span className="text-[#20a46a]">a message away.</span>
          </h2>

          <a
            href="#contact-form"
            className="
              mt-10
              inline-flex
              items-center
              gap-4
              rounded-full
              border
              border-white/15
              bg-white/[0.03]
              px-7
              py-4
              text-sm
              font-medium
              transition-all
              hover:border-[#20a46a]/50
              hover:bg-[#20a46a]/10
            "
          >
            Contact our team
            <span className="text-[#20a46a]">↗</span>
          </a>
        </motion.div>
      </section>
    </main>
  );
};

/* ============================================================
   FORM FIELD
============================================================ */

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}) => {
  return (
    <div>
      <label className="mb-3 block text-[10px] uppercase tracking-[0.22em] text-white/35">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="
          h-12
          w-full
          border-b
          border-white/15
          bg-transparent
          text-sm
          text-white
          outline-none
          placeholder:text-white/20
          transition-colors
          focus:border-[#20a46a]
        "
      />
    </div>
  );
};

/* ============================================================
   QUICK LINK
============================================================ */

const QuickLink = ({ number, title, description, to }) => {
  return (
    <Link
      to={to}
      className="
        group
        relative
        bg-[#0b0d0c]
        p-7
        transition-all
        duration-500
        hover:bg-[#101411]
        md:p-9
      "
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] text-white/20">{number}</span>

        <span
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            text-white/30
            transition-all
            duration-300
            group-hover:border-[#20a46a]/50
            group-hover:text-[#20a46a]
          "
        >
          ↗
        </span>
      </div>

      <h3 className="mt-14 text-2xl font-medium transition-colors group-hover:text-[#20a46a]">
        {title}
      </h3>

      <p className="mt-4 max-w-sm text-sm leading-7 text-white/35">
        {description}
      </p>

      <div className="mt-8 h-px w-10 bg-[#20a46a]/40 transition-all duration-500 group-hover:w-20 group-hover:bg-[#20a46a]" />
    </Link>
  );
};

export default Contactus;
