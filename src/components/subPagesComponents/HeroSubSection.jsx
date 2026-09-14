import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";

const HeroSubSection = ({
  eyebrow,
  title,
  highlight,
  description,
  image,
  buttonText,
  buttonLink = "#",
}) => {
  const sectionRef = useRef(null);

  /* ---------------------------------------------------
     SCROLL PARALLAX — image drifts + scales as the hero
     scrolls out of view (Apple-style depth effect)
  --------------------------------------------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Reduced intensity for better mobile behaviour
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  /* ---------------------------------------------------
     MOUSE / TOUCH PARALLAX — decorative circles drift
     toward the cursor/finger slightly, springs for smoothness
  --------------------------------------------------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const circleXSlow = useTransform(springX, [-1, 1], [-10, 10]);
  const circleYSlow = useTransform(springY, [-1, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Touch support so parallax also works on mobile devices
  const handleTouchMove = (e) => {
    if (!sectionRef.current) return;
    const touch = e.touches[0];
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((touch.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative min-h-[85vh] sm:min-h-[80vh] overflow-hidden bg-[#080808] text-white flex items-center"
    >
      {/* =====================================================
          FULL BACKGROUND IMAGE — mobile-optimized
      ====================================================== */}
      {image && (
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 will-change-transform transform-gpu"
        >
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="
              absolute inset-0
              w-full h-full
              object-cover
              object-[center_30%]
              sm:object-[center_center]
              md:object-center
              scale-105 sm:scale-100
            "
          />
        </motion.div>
      )}

      {/* =====================================================
          BACKGROUND OVERLAYS
      ====================================================== */}

      {/* Main dark overlay */}
      <div className="absolute inset-0" />

      {/* Left dark gradient for text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/75 to-black/20" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-black/20" />

      {/* Green atmospheric glow — smaller on mobile to avoid overflow/scroll */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ x: circleXSlow, y: circleYSlow }}
        className="absolute -top-20 -left-20 w-60 h-60 md:-top-40 md:-left-40 md:w-125 md:h-125 rounded-full bg-[#20a46a] blur-[120px] md:blur-[160px]"
      />

      {/* Right glow — smaller on mobile to avoid overflow/scroll */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-20 -bottom-24 w-60 h-60 md:-right-40 md:-bottom-50 md:w-125 md:h-125 rounded-full bg-[#20a46a]/10 blur-[100px] md:blur-[150px]"
      />

      {/* =====================================================
          CONTENT — fades/lifts away as user scrolls
      ====================================================== */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-[90%] max-w-7xl mx-auto py-24 sm:py-28 md:py-32 lg:py-40"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* =================================================
                EYEBROW
            ================================================== */}
            {eyebrow && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.6,
                }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="w-10 h-0.5 bg-[#20a46a]" />
                <p className="uppercase tracking-[0.3em] text-[#20a46a] text-sm font-semibold">
                  {eyebrow}
                </p>
              </motion.div>
            )}

            {/* =================================================
                HEADING
            ================================================== */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tight"
            >
              {title}
              {highlight && (
                <>
                  <br />
                  <span className="text-[#20a46a]">{highlight}</span>
                </>
              )}
            </motion.h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            {description && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.7,
                }}
                className="text-white/65 text-base md:text-lg leading-8 max-w-xl mt-7"
              >
                {description}
              </motion.p>
            )}

            {/* =================================================
                BUTTON
            ================================================== */}
            {buttonText && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                className="mt-9"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Link
                    to={buttonLink}
                    className="group inline-flex items-center gap-4 px-7 py-4 bg-linear-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_45px_rgba(32,164,106,0.35)]"
                  >
                    {buttonText}
                    <span className="w-8 h-8 rounded-full bg-white text-[#20a46a] flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSubSection;