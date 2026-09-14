import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ThreeLinkCards = ({
  eyebrow = "Explore",
  heading = "Explore Our Services",
  subheading = "Discover the tools and opportunities designed for modern traders.",
  cards = [],
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
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

  return (
    <section className="relative py-28 md:py-36 bg-[#080908] text-white overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-180px] top-[-180px] w-[500px] h-[500px] rounded-full bg-[#20a46a]/7 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-200px] bottom-[-200px] w-[450px] h-[450px] rounded-full bg-[#20a46a]/5 blur-[140px]"
      />

      <div className="relative w-[90%] max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="max-w-3xl mb-16"
        >
          <motion.p
            variants={cardVariants}
            className="uppercase tracking-[0.3em] text-[#20a46a] text-xs md:text-sm font-semibold mb-5"
          >
            {eyebrow}
          </motion.p>

          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-6xl font-semibold leading-[1.05] tracking-tight"
          >
            {heading}
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="mt-6 text-[#777c73] text-base md:text-lg leading-8 max-w-2xl"
          >
            {subheading}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {cards.slice(0, 3).map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <Link
                to={card.link}
                className="
                  group
                  relative
                  block
                  overflow-hidden
                  rounded-3xl
                  bg-[#0d0e0d]
                  border
                  border-white/[0.08]
                  transition-all
                  duration-500
                  hover:border-[#20a46a]/40
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                "
              >
                {/* IMAGE */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#080908]
                      via-[#080908]/20
                      to-transparent
                      opacity-80
                      group-hover:opacity-60
                      transition-opacity
                      duration-500
                    "
                  />

                  {/* Number */}
                  <span
                    className="
                      absolute
                      top-5
                      left-5
                      text-xs
                      font-mono
                      tracking-[0.2em]
                      text-white/60
                      group-hover:text-[#20a46a]
                      transition-colors
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* Arrow */}
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="
                      absolute
                      top-5
                      right-5
                      w-10
                      h-10
                      rounded-full
                      border
                      border-white/20
                      bg-black/20
                      backdrop-blur-sm
                      flex
                      items-center
                      justify-center
                      text-white
                      group-hover:border-[#20a46a]
                      group-hover:text-[#20a46a]
                      transition-all
                      duration-300
                    "
                  >
                    ↗
                  </motion.div>
                </div>

                {/* CONTENT */}
                <div className="relative p-7">
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-white
                      group-hover:text-[#20a46a]
                      transition-colors
                      duration-300
                    "
                  >
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm md:text-base leading-7 text-[#70756d]">
                    {card.description}
                  </p>

                  {/* Learn More */}
                  <div className="mt-6 flex items-center gap-3 text-sm font-medium text-[#888d84] group-hover:text-[#20a46a] transition-colors">
                    <span>Explore</span>

                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="text-lg"
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#20a46a]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeLinkCards;
