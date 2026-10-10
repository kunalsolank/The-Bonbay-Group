import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSubSection = ({
  eyebrow,
  title,
  highlight,
  description,
  video, // background video URL (mp4/webm)
  image, // optional poster / fallback image
  buttonText,
  buttonLink = "#",
}) => {
  const sectionRef = useRef(null);

  /* ---------------------------------------------------
     SCROLL PARALLAX
  --------------------------------------------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] sm:min-h-[80vh] overflow-hidden bg-[#080808] text-white flex items-center justify-center"
    >
      {/* =====================================================
          BACKGROUND VIDEO (falls back to image)
      ====================================================== */}
      {(video || image) && (
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ y: mediaY, scale: mediaScale }}
          className="absolute inset-0 will-change-transform transform-gpu"
        >
          {video ? (
            <video
              className="absolute inset-0 w-full h-full object-cover brightness-125 contrast-105"
              src={video}
              poster={image}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            />
          ) : (
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-center brightness-125"
            />
          )}
        </motion.div>
      )}

      {/* Light overlay only, so the video stays clear */}
      <div className="absolute inset-0 bg-black/20" />

      {/* =====================================================
          CONTENT — centered
      ====================================================== */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-[90%] max-w-7xl mx-auto py-24 sm:py-28 md:py-32 lg:py-40"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* EYEBROW */}
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <span className="w-10 h-0.5 bg-[#20a46a]" />
                <p className="uppercase tracking-[0.3em] text-[#20a46a] text-sm font-semibold drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
                  {eyebrow}
                </p>
                <span className="w-10 h-0.5 bg-[#20a46a]" />
              </motion.div>
            )}

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-center drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
            >
              {title}
              {highlight && (
                <>
                  <br />
                  <span className="text-[#00ff87] drop-shadow-[0_0_25px_rgba(0,255,135,0.45)]">{highlight}</span>
                </>
              )}
            </motion.h1>

            {/* DESCRIPTION */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="text-white/90 text-base md:text-lg leading-8 max-w-xl mx-auto mt-7 text-center drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)]"
              >
                {description}
              </motion.p>
            )}

            {/* BUTTON */}
            {buttonText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-9"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Link
                    to={buttonLink}
                    className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#00ff87] via-[#10b981] to-[#1fa864] text-black font-semibold rounded-none sm:rounded-none transition-all duration-300 hover:shadow-[0_0_45px_rgba(0,255,135,0.45)] shadow-[0_0_25px_rgba(0,255,135,0.25)]"
                  >
                    {buttonText}
                    <span className="w-8 h-8 rounded-full bg-black text-[#00ff87] flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 font-bold">
                      →
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSubSection;