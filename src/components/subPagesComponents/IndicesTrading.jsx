import React from "react";
import { motion } from "framer-motion";
const IndicesTrading = () => {
  const points = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Sign up with Dollrex Capital Ltd. in minutes—fast, secure, and beginner-friendly.",
      icon: "◈",
    },
    {
      number: "02",
      title: "Explore Markets",
      description:
        "Access global indices, commodities like gold or oil, and more.",
      icon: "↗",
    },
    {
      number: "03",
      title: "Use Our Tools",
      description:
        "Analyze trends and get expert-backed insights with Dollrex Capital Ltd. platform.",
      icon: "⌁",
    },
    {
      number: "04",
      title: "Start Trading",
      description:
        "Open your first trade with low entry costs and flexible leverage.",
      icon: "✓",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants = {
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
    <div>
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
          className="absolute right-[-180px] top-[-150px] w-[500px] h-[500px] rounded-full bg-[#a0d311]/7 blur-[150px]"
        />

        <div className="relative w-[90%] max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="uppercase tracking-[0.3em] text-[#a0d311] text-xs md:text-sm font-semibold mb-6"
            >
              Indices Trading
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight"
            >
              How to Start Trading with
              <br />
              <span className="text-[#a0d311]">Dollrex Capital Ltd.</span>
            </motion.h2>
          </motion.div>

          {/* Key Points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative mt-20"
          >
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-[31px] left-[8%] right-[8%] h-px bg-white/10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  ease: "easeInOut",
                }}
                className="origin-left h-full bg-[#a0d311]"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {points.map((point, index) => (
                <motion.div
                  key={point.number}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: index % 2 === 0 ? 5 : -5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="
                    relative
                    z-10
                    w-16
                    h-16
                    rounded-full
                    border
                    border-white/15
                    bg-[#080908]
                    flex
                    items-center
                    justify-center
                    text-[#a0d311]
                    text-xl
                    transition-all
                    duration-300
                    group-hover:border-[#a0d311]
                    group-hover:shadow-[0_0_30px_rgba(160,211,17,0.15)]
                  "
                  >
                    {point.icon}

                    {/* Pulse */}
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileHover={{
                        opacity: [0, 0.5, 0],
                        scale: [1, 1.5, 1.8],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0 rounded-full border border-[#a0d311]"
                    />
                  </motion.div>

                  {/* Number */}
                  <p className="mt-7 text-[#555a53] text-xs font-mono tracking-widest group-hover:text-[#a0d311] transition-colors">
                    POINT {point.number}
                  </p>

                  {/* Title */}
                  <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight group-hover:text-[#a0d311] transition-colors duration-300">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-[#70756d] leading-7 text-sm md:text-base max-w-xs">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndicesTrading;
