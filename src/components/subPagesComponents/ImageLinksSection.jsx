import React from "react";
import { motion } from "framer-motion";

const ImageLinksSection = ({ image, heading, description, links = [] }) => {
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
        ease: "easeOut",
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section className="relative py-28 md:pt-0 bg-[#080908] text-white overflow-hidden">
      {/* Ambient Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-200px] top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-[#20a46a]/6 blur-[150px]"
      />

      <div className="relative w-[90%] max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.img
                src={image}
                alt={heading}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full object-contain"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080908]/70 via-transparent to-transparent pointer-events-none" />

              {/* Corner Accent */}
              <div className="absolute bottom-0 left-0 w-20 h-px bg-[#20a46a]" />
              <div className="absolute bottom-0 left-0 h-20 w-px bg-[#20a46a]" />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[0.3em] text-[#20a46a] text-xs md:text-sm font-semibold mb-6"
            >
              Explore Our Markets
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight"
            >
              {heading}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-[#858a82] text-base md:text-lg leading-8 max-w-xl"
            >
              {description}
            </motion.p>

            {/* SVG LINKS */}
            <motion.div
              variants={stagger}
              className="mt-12 grid grid-cols-2 gap-5"
            >
              {links.slice(0, 4).map((item, index) => (
                <motion.a
                  key={index}
                  variants={fadeUp}
                  href={item.link}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  {/* SVG */}
                  <div
                    className="
                      relative
                      h-28
                      flex
                      items-center
                      justify-center
                      border
                      border-white/10
                      rounded-2xl
                      overflow-hidden
                      transition-all
                      duration-300
                      group-hover:border-[#20a46a]/50
                      group-hover:bg-white/[0.02]
                    "
                  >
                    <div className="w-[85%] max-w-[169px] text-white transition-transform duration-300 group-hover:scale-105">
                      {item.icon}
                    </div>

                    {/* Arrow */}
                    <span
                      className="
                        absolute
                        right-3
                        top-3
                        w-7
                        h-7
                        rounded-full
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-xs
                        text-[#777c73]
                        transition-all
                        duration-300
                        group-hover:border-[#20a46a]
                        group-hover:text-[#20a46a]
                      "
                    >
                      ↗
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#d7d9d4] group-hover:text-[#20a46a] transition-colors duration-300">
                      {item.title}
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageLinksSection;
