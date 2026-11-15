import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
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
  stats = [
    { value: "150+", label: "In product launches" },
    { value: "$1.35B", label: "Startup funding raised" },
    { value: "10x ROI", label: "UX/UI Product Revamp" },
    { value: "25K+", label: "Funds and syndicates" },
  ], // pass stats={[]} to hide, or your own array to override
}) => {
  const sectionRef = useRef(null);
  const videoRef   = useRef(null);

  /* ---------------------------------------------------
     DETECT MOBILE — disable parallax on small screens
     to prevent media from shifting out of frame
  --------------------------------------------------- */
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const parallaxDisabled = isMobile || prefersReducedMotion;

  /* ---------------------------------------------------
     ENSURE CONTINUOUS SEAMLESS PLAYBACK (incl. iOS)
  --------------------------------------------------- */
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.muted    = true;
    videoElement.volume   = 0;
    videoElement.setAttribute("playsinline", "");
    videoElement.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      videoElement.play().catch((err) => {
        console.warn("Autoplay was prevented:", err);
      });
    };

    videoElement.addEventListener("canplay", tryPlay, { once: true });
    tryPlay(); // attempt immediately if already ready

    return () => {
      videoElement.removeEventListener("canplay", tryPlay);
    };
  }, [video]);

  /* ---------------------------------------------------
     SCROLL PARALLAX  (skipped on mobile)
  --------------------------------------------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // On mobile we pass static fallback values so transforms are no-ops
  const mediaY       = useTransform(scrollYProgress, [0, 1], parallaxDisabled ? ["0%", "0%"]  : ["0%", "18%"]);
  const mediaScale   = useTransform(scrollYProgress, [0, 1], parallaxDisabled ? [1, 1]         : [1, 1.08]);
  const contentY     = useTransform(scrollYProgress, [0, 1], parallaxDisabled ? ["0%", "0%"]  : ["0%", "40%"]);
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
          /* On mobile: no y-shift / scale so media never drifts off-screen */
          style={parallaxDisabled ? {} : { y: mediaY, scale: mediaScale }}
          className="absolute inset-0 will-change-transform transform-gpu pointer-events-none"
        >
          {video ? (
            <video
              ref={videoRef}
              className={
                [
                  "absolute inset-0 w-full h-full object-cover",
                  /* centre-top keeps the subject visible on portrait mobile */
                  "object-[center_top] sm:object-center",
                  /* slightly less aggressive brightness on small screens */
                  "brightness-110 sm:brightness-125 contrast-105",
                ].join(" ")
              }
              src={video}
              poster={image}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              /* iOS-specific attributes (set via ref in useEffect too) */
              webkit-playsinline="true"
              x-webkit-airplay="allow"
            />
          ) : (
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className={
                [
                  "absolute inset-0 w-full h-full object-cover",
                  "object-[center_top] sm:object-center",
                  "brightness-110 sm:brightness-125",
                ].join(" ")
              }
            />
          )}
        </motion.div>
      )}

      {/* Ambient background overlay for unified aesthetic */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* =====================================================
          CONTENT — centered
      ====================================================== */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-[92%] sm:w-[90%] max-w-7xl mx-auto mt-16 sm:mt-10 lg:mt-0 py-16 sm:py-24 md:py-32 lg:py-40"
      >
        <div className="w-full max-w-[92vw] sm:max-w-[940px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center gap-5 sm:gap-8"
          >
            {/* EYEBROW / SUBHEADING PILL */}
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center border border-white/10 rounded-full py-1.5 px-3.5 sm:py-3 sm:px-5 max-w-[95vw] sm:max-w-max mx-auto"
              >
                <img
                  src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/68821a3faca8d79d3b4e7810_star.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="flex-shrink-0 sm:w-5 sm:h-5"
                  loading="lazy"
                />
                <span className="text-[11px] sm:text-sm text-white text-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">
                  {eyebrow}
                </span>
              </motion.div>
            )}

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white  text-2xl sm:text-4xl lg:text-6xl leading-snug sm:leading-tight lg:leading-[1.2] font-normal max-w-[95vw] sm:max-w-192.25 mx-auto text-center drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
            >
              {title}
              {highlight && (
                <>
                  <br className="hidden sm:inline" />{" "}
                  <span className="text-[#00ff87] drop-shadow-[0_0_25px_rgba(0,255,135,0.45)]">
                    {highlight}
                  </span>
                </>
              )}
            </motion.h1>

            {/* DESCRIPTION */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="text-white text-sm sm:text-lg max-w-[92vw] sm:max-w-[550px] mx-auto text-center drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] leading-relaxed"
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
                className="flex justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <Link
                    to={buttonLink}
                    className="inline-block px-6 py-3 sm:px-8 sm:py-3.5 bg-gradient-to-r from-[#00ff87] via-[#10b981] to-[#1fa864] text-black font-semibold uppercase tracking-wider rounded-xl sm:rounded-full transition-all duration-300 hover:shadow-[0_0_45px_rgba(0,255,135,0.45)] shadow-[0_0_25px_rgba(0,255,135,0.25)] text-xs sm:text-sm"
                  >
                    {buttonText}
                  </Link>
                </motion.div>
              </motion.div>
            )}

            {/* STATS GRID */}
            {stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.7 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full max-w-full sm:max-w-[920px] mt-8 sm:mt-16 mx-auto px-2"
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start text-left"
                  >
                    <div className="bg-[#00ff87]/60 w-[32px] sm:w-[46px] h-[2px] mb-2 sm:mb-3" />
                    <div className="text-xl sm:text-3xl md:text-4xl text-white mb-1 sm:mb-2 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] font-semibold">
                      {stat.value}
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-white/70 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSubSection;