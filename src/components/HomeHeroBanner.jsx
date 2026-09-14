import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import EarthImage from "../assets/Experience Trading.png";
import lines from "../assets/banner-image-bg.webp";
import featherleft from "../assets/feather-left.webp";
import featherright from "../assets/feather-right.webp";

const HomeHeroBanner = () => {
  const sectionRef = useRef(null);

  /* ---------------------------------------------------
     SCROLL PARALLAX — Multi-layer depth as user scrolls
  --------------------------------------------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const linesY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const earthScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const earthScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);

  /* ---------------------------------------------------
     MOUSE & TOUCH PARALLAX — 3D responsiveness
  --------------------------------------------------- */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });

  const earthShiftX = useTransform(springX, [-1, 1], [-22, 22]);
  const earthShiftY = useTransform(springY, [-1, 1], [-22, 22]);
  const linesShiftX = useTransform(springX, [-1, 1], [-10, 10]);
  const linesShiftY = useTransform(springY, [-1, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleTouchMove = (e) => {
    if (!sectionRef.current || !e.touches[0]) return;
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
      className="relative lg:h-[680px] xl:h-[800px] 2xl:h-[921px] h-full border-b border-white/5 px-3 sm:px-5 lg:px-5 overflow-hidden"
    >
      <div className="relative lg:h-[680px] xl:h-[800px] 2xl:h-[920px] h-full overflow-hidden bg-[#080908]">
        {/* Top Left Glowing Parallax Gradient */}
        <motion.div
          style={{ scale: glowScale }}
          className="absolute -top-[150px] -left-[150px] w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:-top-[200px] lg:-left-[200px] lg:w-[550px] lg:h-[550px] 2xl:-top-[250px] 2xl:-left-[250px] 2xl:w-[650px] 2xl:h-[650px] rounded-full bg-gradient-to-br from-[#1fa864]/30 via-[#258d87]/15 to-transparent blur-[100px] 2xl:blur-[120px] pointer-events-none"
        />

        <div className="flex flex-col lg:flex-row mx-4 sm:mx-8 lg:mx-[32px] xl:mx-[48px] 2xl:mx-[61.5px] px-[15px] justify-between relative overflow-hidden h-full items-center pt-30 sm:pt-16 lg:pt-[50px] xl:pt-[70px] 2xl:pt-[84px] pb-8 lg:pb-0">
          {/* Left Content with scroll parallax */}
          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="w-full lg:max-w-[440px] xl:max-w-[560px] 2xl:max-w-[690px] text-center lg:text-left mb-8 lg:mb-0 lg:items-center z-10"
          >
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-4 lg:mb-2.5"
            >
              <img
                src={featherleft}
                alt="no1"
                width={20}
                height={40}
                className="w-5 h-8 sm:w-6 sm:h-10 lg:w-5 lg:h-9 xl:w-6 xl:h-10 2xl:w-[25px] 2xl:h-[50px]"
              />

              <h2 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-[40px] lg:leading-4 font-medium text-white seconday-font">
                №1
              </h2>

              <h1 className="text-white tracking-tight text-xs sm:text-sm lg:max-w-12 lg:text-xs xl:text-sm seconday-font">
                Broker&apos;s choice
              </h1>

              <img
                src={featherright}
                alt="no1"
                width={20}
                height={40}
                className="w-5 h-8 sm:w-6 sm:h-10 lg:w-5 lg:h-9 xl:w-6 xl:h-10 2xl:w-[25px] 2xl:h-[50px]"
              />
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[46px] lg:leading-[48px] xl:text-[64px] xl:leading-[64px] 2xl:text-[92px] 2xl:leading-[90px] font-medium text-white tracking-tighter leading-tight sm:leading-tight md:leading-tight"
            >
              Experience Trading with a #1 Rated Broker*
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="text-sm sm:text-base md:text-lg lg:text-sm lg:leading-6 xl:text-base xl:leading-7 2xl:text-[20px] 2xl:leading-[30px] font-normal text-[#bebec1] mt-4 lg:mt-3 2xl:mt-[15px] leading-6 sm:leading-7 md:leading-8"
            >
              With spreads from 0.0, $0 deposit fees, $0 minimum account size
              and over 16 years of operating, savvy traders like you have
              already made the switch.
            </motion.p>

            {/* CTA Button with hover & tap physics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 35px rgba(31,168,100,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] px-6 py-3 lg:px-7 lg:py-3 2xl:px-8 2xl:py-3.5 font-medium uppercase tracking-wide text-white transition-shadow duration-300 secondary-font rounded-2xl mt-6 cursor-pointer text-sm 2xl:text-base"
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Parallax Multi-Plane Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:max-w-[380px] xl:max-w-[480px] 2xl:max-w-[605px] flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[300px] xl:max-w-[380px] 2xl:max-w-[480px]">
              {/* Layer 1: Background lines with mouse and scroll shift */}
              <motion.div
                style={{
                  x: linesShiftX,
                  y: linesY,
                }}
              >
                <img
                  src={lines}
                  alt="Hero Banner"
                  width={1000}
                  height={1000}
                  className="w-full lg:max-w-[300px] xl:max-w-[380px] 2xl:max-w-[480px] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[500px] xl:min-h-[650px] 2xl:min-h-[826px] relative select-none pointer-events-none"
                />
              </motion.div>

              {/* Layer 2: 3D Box rotating continuously on the Z-axis */}
              <motion.div
                style={{
                  x: earthShiftX,
                  y: earthScrollY,
                  scale: earthScale,
                }}
                className="absolute inset-0 flex items-center justify-center lg:max-w-[440px] xl:max-w-[560px] 2xl:max-w-[700px] lg:w-full"
              >
                {/* Floating Bob Container */}
                <div className="animate-float-bob flex items-center justify-center">
                  {/* 3D Box */}
                  <img
                    src={EarthImage}
                    alt="DollarX 3D Box"
                    width={500}
                    height={500}
                    className="w-full sm:w-4/5 md:w-full lg:w-auto lg:h-auto max-w-full sm:max-w-[250px] md:max-w-[500px] lg:max-w-[280px] xl:max-w-[360px] 2xl:max-w-[500px] drop-shadow-[0_25px_65px_rgba(32,164,106,0.35)] select-none pointer-events-none"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroBanner;