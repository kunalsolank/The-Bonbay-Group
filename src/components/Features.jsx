import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import featureImages from "../assets/ringx.png";
import one from "../assets/40 BY 40 (1).png";
import two from "../assets/40 BY 40 (2).png";
import three from "../assets/40 BY 40 (3).png";
import four from "../assets/40 BY 40 (4).png";
import five from "../assets/40 BY 40 (5).png";
import FeatureImg from "../assets/Features_Shape.webp";
import FeatureOne from "../assets/stock.png";
import FeatureTwo from "../assets/Ultimate Security.png";
import FeatureThree from "../assets/Fair Governance.png";
import FeatureFour from "../assets/User Agency.png";
import FeatureFive from "../assets/Reliable Systems.png";
import FeatureSix from "../assets/Seamless Interoperability.png";

const integrationIcons = [one, two, three, four, five];

const featureCards = [
  {
    icon: FeatureOne,
    title: "Money Power",
    description:
      "Ensure complete transparency at every step, so you always know where you stand.",
  },
  {
    icon: FeatureTwo,
    title: "Ultimate Security",
    description:
      "Blockchain's cryptographic security safeguards data integrity, protecting users from fraud and cyber threats.",
  },
  {
    icon: FeatureThree,
    title: "Fair Governance",
    description:
      "Decentralized governance enables fair decision-making, giving communities control over protocols and policies.",
  },
  {
    icon: FeatureFour,
    title: "User Agency",
    description:
      "Users have full control over their digital assets, identities, and interactions without reliance on intermediaries.",
  },
  {
    icon: FeatureFive,
    title: "Reliable Systems",
    description:
      "Blockchain's decentralized nature ensures uptime, preventing single points of failure for uninterrupted services.",
  },
  {
    icon: FeatureSix,
    title: "Seamless Interoperability",
    description:
      "Bridging different blockchain networks, enabling seamless data and asset exchange across multiple platforms.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Features = () => {
  return (
    <section className="bg-black py-14 sm:py-16 lg:py-16 xl:py-20 2xl:py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-[920px] lg:max-w-[960px] xl:max-w-[1150px] 2xl:max-w-[1350px] px-4 sm:px-6 md:px-8 lg:px-6 relative z-10">
        {/* =========================
            TITLE
        ========================== */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-14 xl:mb-16">
          <div className="mb-3 sm:mb-4">
            <span className="inline-block text-xs uppercase tracking-wider text-[#EED85F] sm:text-sm font-medium">
              [ Features ]
            </span>
          </div>

          <h2 className="mx-auto max-w-xl lg:max-w-2xl xl:max-w-3xl bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-3xl font-medium text-transparent sm:text-4xl lg:text-[34px] xl:text-5xl tracking-tight">
            Metaverse is ready – Build the next digital frontier.
          </h2>
        </div>

        {/* =========================
            MOBILE / TABLET ICON GRID
        ========================== */}
        <div className="mb-12 block md:hidden">
          <div className="mx-auto grid max-w-sm grid-cols-5 justify-center gap-4">
            {integrationIcons.map((icon, index) => (
              <div
                key={index}
                className={`features-integrations-icon-wrap-mobile ${
                  index === 4 ? "hidden sm:block" : ""
                }`}
              >
                <img
                  src={icon}
                  alt={`Integration ${index + 1}`}
                  width={32}
                  height={32}
                  className="h-6 w-6"
                />
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            DESKTOP FEATURE VISUAL
        ========================== */}
        <div className="features-integrations-orbit relative mb-12 lg:mb-14 xl:mb-18 2xl:mb-20 hidden items-center justify-center md:flex">
          {/* Main Arc Shape */}
          <img
            src={FeatureImg}
            alt="Features Shape"
            width={1320}
            height={559}
            className="w-full max-w-[600px] lg:max-w-[620px] xl:max-w-[840px] 2xl:max-w-none object-contain pointer-events-none select-none opacity-90 mx-auto"
          />

          {/* Color-Matched Ambient Glow Layers behind X (Cyan -> Neon Green -> Electric Blue) */}
          <div className="pointer-events-none absolute bottom-[-12px] lg:bottom-[-14px] xl:bottom-[-18px] left-1/2 -translate-x-1/2 flex items-center justify-center">
            {/* Broad Atmospheric Diffusion */}
            <div className="absolute h-[200px] w-[290px] lg:h-[210px] lg:w-[300px] xl:h-[300px] xl:w-[420px] -translate-y-6 rounded-full bg-gradient-to-r from-[#00d2ff]/35 via-[#00ff87]/45 to-[#2563eb]/40 blur-[55px] lg:blur-[60px] xl:blur-[75px] opacity-90" />

            {/* Left Cyan Light */}
            <div className="absolute -left-9 lg:-left-10 xl:-left-14 top-2 h-[135px] w-[125px] lg:h-[140px] lg:w-[130px] xl:h-[190px] xl:w-[175px] rounded-full bg-[#00d2ff]/45 blur-[36px] lg:blur-[38px] xl:blur-[50px]" />

            {/* Center Vibrant Green Light (Diagonal Angle) */}
            <div className="absolute left-1/2 top-0 h-[155px] w-[120px] lg:h-[160px] lg:w-[125px] xl:h-[220px] xl:w-[165px] -translate-x-1/2 -rotate-[18deg] rounded-full bg-[#00ff87]/55 blur-[28px] lg:blur-[30px] xl:blur-[40px]" />

            {/* Right Electric Blue Light */}
            <div className="absolute -right-9 lg:-right-10 xl:-right-14 top-6 h-[135px] w-[125px] lg:h-[140px] lg:w-[130px] xl:h-[190px] xl:w-[175px] rounded-full bg-[#2563eb]/50 blur-[36px] lg:blur-[38px] xl:blur-[50px]" />
          </div>

          {/* Center 3D Floating Logo */}
          <div className="absolute bottom-[-20px] lg:bottom-[-22px] xl:bottom-[-34px] left-1/2 max-w-[190px] lg:max-w-[200px] xl:max-w-[260px] -translate-x-1/2 animate-float-bob">
            {/* Core Tight Glow moving with the 3D logo */}
            <div className="pointer-events-none absolute inset-2 -z-10 rounded-full bg-gradient-to-r from-[#00d2ff]/40 via-[#00ff87]/50 to-[#2563eb]/45 blur-[18px] lg:blur-[20px] xl:blur-[26px]" />

            <img
              src={featureImages}
              alt="Features Preview"
              width={316}
              height={316}
              className="relative z-10 w-full h-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] filter brightness-[1.04]"
            />
          </div>

          {/* Integration Orbit Icons */}
          {/* Far Left (Outer Arc) */}
          <div className="features-integrations-icon-wrap seven">
            <div className="animate-float-subtle-a">
              <img
                src={integrationIcons[4]}
                alt="Integration 7"
                width={40}
                height={40}
                className="w-7 h-7 lg:w-7 lg:h-7 xl:w-9 xl:h-9"
              />
            </div>
          </div>

          {/* Top Left (Outer Arc) */}
          <div className="features-integrations-icon-wrap one">
            <div className="animate-float-subtle-b">
              <img
                src={integrationIcons[0]}
                alt="Integration 1"
                width={40}
                height={40}
                className="w-7 h-7 lg:w-7 lg:h-7 xl:w-9 xl:h-9"
              />
            </div>
          </div>

          {/* Top Center (Inner Arc / Center Top) */}
          <div className="features-integrations-icon-wrap two">
            <div className="animate-float-subtle-a">
              <img
                src={integrationIcons[1]}
                alt="Integration 2"
                width={40}
                height={40}
                className="w-7 h-7 lg:w-7 lg:h-7 xl:w-9 xl:h-9"
              />
            </div>
          </div>

          {/* Top Right (Outer Arc) */}
          <div className="features-integrations-icon-wrap three">
            <div className="animate-float-subtle-b">
              <img
                src={integrationIcons[2]}
                alt="Integration 3"
                width={40}
                height={40}
                className="w-7 h-7 lg:w-7 lg:h-7 xl:w-9 xl:h-9"
              />
            </div>
          </div>

          {/* Mid Left (Inner Arc) */}
          <div className="features-integrations-icon-wrap four">
            <div className="animate-float-subtle-a">
              <img
                src={integrationIcons[3]}
                alt="Integration 4"
                width={40}
                height={40}
                className="w-7 h-7 lg:w-7 lg:h-7 xl:w-9 xl:h-9"
              />
            </div>
          </div>

          {/* Mid Right (Inner Arc) */}
          <div className="features-integrations-icon-wrap five">
            <div className="animate-float-subtle-b">
              <img
                src={integrationIcons[4]}
                alt="Integration 5"
                width={40}
                height={40}
                className="w-7 h-7 lg:w-7 lg:h-7 xl:w-9 xl:h-9"
              />
            </div>
          </div>

          {/* Far Right (Outer Arc) */}
          <div className="features-integrations-icon-wrap six">
            <div className="animate-float-subtle-a">
              <img
                src={integrationIcons[0]}
                alt="Integration 6"
                width={40}
                height={40}
                className="w-7 h-7 lg:w-7 lg:h-7 xl:w-9 xl:h-9"
              />
            </div>
          </div>
        </div>

        {/* =========================
            FEATURE CARDS (STAGGERED REVEAL)
        ========================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 lg:gap-6 xl:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featureCards.map((card, index) => (
            <motion.div key={index} variants={cardItemVariants}>
              <FeatureCard
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;