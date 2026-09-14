import React from "react";
import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Users } from "lucide-react";

import video1 from "../assets/home_average_reviews.mp4";
import video2 from "../assets/globe.png";

const GlobalTrustSection = () => {
  const countries = [
    { code: "us", name: "USA" },
    { code: "gb", name: "UK" },
    { code: "ca", name: "Canada" },
    { code: "au", name: "Australia" },
    { code: "de", name: "Germany" },
    { code: "fr", name: "France" },
    { code: "it", name: "Italy" },
    { code: "es", name: "Spain" },
    { code: "ae", name: "UAE" },
    { code: "in", name: "India" },
    { code: "sg", name: "Singapore" },
    { code: "jp", name: "Japan" },
    { code: "br", name: "Brazil" },
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#05040b]
        pt-8
        pb-14
        sm:pt-10
        sm:pb-16
        lg:pt-12
        lg:pb-18
        xl:pt-14
        xl:pb-20
      "
    >
      {/* ================= TOP BLEND ================= */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-[#05040b] via-[#05040b]/90 to-transparent" />

      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="pointer-events-none absolute -left-40 top-10 z-0 h-[350px] w-[350px] rounded-full bg-[#00ff87]/8 blur-[130px]" />

      <div className="pointer-events-none absolute -right-32 top-1/3 z-0 h-[350px] w-[350px] rounded-full bg-[#00d2ff]/8 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-100px] left-1/3 z-0 h-[320px] w-[420px] rounded-full bg-[#2563eb]/8 blur-[140px]" />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          justify-center
          px-4
          sm:px-5
          lg:px-6
          xl:px-8
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            margin: "-40px",
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex max-w-2xl flex-col items-center justify-center text-center"
        >
          {/* Badge */}
          <div
            className="
              mb-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#00ff87]/30
              bg-[#00ff87]/10
              px-3
              py-1
              backdrop-blur-md
              shadow-[0_0_16px_rgba(0,255,135,0.12)]
            "
          >
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#00ff87]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#00ff87] sm:text-xs">
              Global Regulation &amp; Trust
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              bg-gradient-to-b
              from-white
              via-white/95
              to-white/60
              bg-clip-text
              text-3xl
              font-normal
              leading-[1.08]
              tracking-tight
              text-transparent
              sm:text-4xl
              md:text-[42px]
              lg:text-[48px]
              xl:text-[52px]
            "
          >
            Global Trust,{" "}
            <span className="bg-gradient-to-r from-[#00ff87] to-[#00d2ff] bg-clip-text text-transparent">
              Verified
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-3
              max-w-xl
              text-center
              text-xs
              font-light
              leading-relaxed
              text-white/65
              sm:text-sm
              lg:text-base
            "
          >
            <span className="font-medium text-white">
              DollreX Capital
            </span>{" "}
            is a regulated trading platform recognized by top tier-1
            regulatory bodies, empowering hundreds of thousands of
            institutional and retail traders globally.
          </p>
        </motion.div>

        {/* ==================================================
            BENTO GRID
        ================================================== */}

        <div
          className="
            mt-8
            grid
            w-full
            gap-4
            sm:mt-10
            sm:grid-cols-2
            sm:gap-4
            lg:mt-12
            lg:grid-cols-3
            lg:gap-5
          "
        >
          {/* ==================================================
              CARD 1 - REVIEW VIDEO
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-40px",
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              group
              relative
              flex
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.1]
              bg-[#07090e]/80
              p-1
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#00ff87]/40
              hover:shadow-[0_18px_40px_rgba(0,255,135,0.1)]
            "
          >
            {/* Top Glow */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                z-20
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#00ff87]/50
                to-transparent
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <div
              className="
                relative
                h-full
                min-h-[270px]
                w-full
                overflow-hidden
                rounded-[18px]
                sm:min-h-[290px]
                lg:min-h-[300px]
                xl:min-h-[320px]
              "
            >
              <video
                src={video1}
                autoPlay
                loop
                muted
                playsInline
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Bottom Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05040b] via-transparent to-transparent opacity-85" />

              {/* Information */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between gap-2">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-white/15
                    bg-black/60
                    px-2.5
                    py-1
                    text-[10px]
                    font-mono
                    text-[#00ff87]
                    backdrop-blur-md
                  "
                >
                  <ShieldCheck className="h-3 w-3" />
                  4.9 / 5.0 RATED
                </span>

                <span className="text-[9px] font-mono text-white/50">
                  VERIFIED AUDIT
                </span>
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              CARD 2 - GLOBE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-40px",
            }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              group
              relative
              flex
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.1]
              bg-[#07090e]/80
              p-1
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-[#00d2ff]/40
              hover:shadow-[0_18px_40px_rgba(0,210,255,0.1)]
            "
          >
            {/* Top Glow */}
            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                z-20
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#00d2ff]/50
                to-transparent
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <div
              className="
                relative
                h-full
                min-h-[270px]
                w-full
                overflow-hidden
                rounded-[18px]
                sm:min-h-[290px]
                lg:min-h-[300px]
                xl:min-h-[320px]
              "
            >
              <img
                src={video2}
                alt="Global coverage"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Bottom Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05040b] via-transparent to-transparent opacity-85" />

              {/* Information */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between gap-2">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-white/15
                    bg-black/60
                    px-2.5
                    py-1
                    text-[10px]
                    font-mono
                    text-[#00d2ff]
                    backdrop-blur-md
                  "
                >
                  <Globe2 className="h-3 w-3" />
                  MULTI-REGION
                </span>

                <span className="text-[9px] font-mono text-white/50">
                  LATENCY &lt;1ms
                </span>
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              CARD 3 - METRICS
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-40px",
            }}
            transition={{
              duration: 0.6,
              delay: 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-1 gap-4 sm:col-span-2 lg:col-span-1"
          >
            {/* ================= ACTIVE TRADERS ================= */}

            <div
              className="
                group
                relative
                flex
                min-h-[155px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.1]
                bg-[#07090e]/80
                p-5
                text-center
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#00ff87]/45
                hover:bg-[#00ff87]/5
                hover:shadow-[0_0_35px_rgba(0,255,135,0.12)]
                sm:min-h-[170px]
                lg:min-h-[145px]
                xl:min-h-[155px]
              "
            >
              {/* Top Line */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#00ff87]/40
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Label */}
              <div className="mb-1.5 flex items-center gap-2 text-[9px] font-mono uppercase tracking-wider text-white/45 sm:text-[10px]">
                <Users className="h-3 w-3 text-[#00ff87]" />
                Global Community
              </div>

              {/* Number */}
              <p
                className="
                  bg-gradient-to-b
                  from-white
                  via-white
                  to-[#00ff87]
                  bg-clip-text
                  text-4xl
                  font-normal
                  leading-none
                  tracking-tight
                  text-transparent
                  sm:text-5xl
                "
              >
                700K+
              </p>

              <p className="mt-1.5 text-xs font-medium text-white/75 sm:text-sm">
                Active Verified Traders
              </p>
            </div>

            {/* ================= COUNTRIES ================= */}

            <div
              className="
                group
                relative
                flex
                min-h-[190px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.1]
                bg-[#07090e]/80
                px-4
                py-5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#00ff87]/45
                hover:shadow-[0_0_40px_rgba(0,255,135,0.12)]
                sm:min-h-[205px]
                lg:min-h-[155px]
                xl:min-h-[170px]
              "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#00ff87]/10 blur-[70px]" />

              {/* Top Line */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#00ff87]/40
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10 flex flex-col items-center">
                {/* Number */}
                <p
                  className="
                    bg-gradient-to-b
                    from-white
                    via-white
                    to-[#00ff87]
                    bg-clip-text
                    text-[42px]
                    font-normal
                    leading-none
                    tracking-tight
                    text-transparent
                    sm:text-[48px]
                  "
                >
                  100+
                </p>

                {/* Label */}
                <p className="mt-2 text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-white/65 sm:text-[10px]">
                  Countries Supported
                </p>

                {/* Flags */}
                <div className="relative mt-5 h-9 w-[250px] overflow-hidden sm:w-[280px]">
                  {/* Left Fade */}
                  <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-8 bg-gradient-to-r from-[#07090e] to-transparent" />

                  {/* Right Fade */}
                  <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-8 bg-gradient-to-l from-[#07090e] to-transparent" />

                  {/* Track */}
                  <div className="absolute left-1/2 top-0 flex -translate-x-1/2 animate-[countriesScroll_14s_linear_infinite]">
                    {[...countries, ...countries].map(
                      (country, index) => (
                        <div
                          key={`${country.code}-${index}`}
                          className="
                            relative
                            -ml-1.5
                            h-8
                            w-8
                            flex-shrink-0
                            overflow-hidden
                            rounded-full
                            border-2
                            border-[#05040b]
                            bg-[#111]
                            shadow-[0_2px_8px_rgba(0,0,0,0.5)]
                            transition-transform
                            duration-300
                            first:ml-0
                            hover:z-30
                            hover:scale-110
                          "
                          title={country.name}
                        >
                          <img
                            src={`https://flagcdn.com/w80/${country.code}.png`}
                            alt={country.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= BOTTOM BLEND ================= */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-b from-transparent via-[#05040b]/80 to-[#05040b]" />
    </section>
  );
};

export default GlobalTrustSection;