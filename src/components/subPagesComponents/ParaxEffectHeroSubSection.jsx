import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import DescriptionBlock from "../ui/DescriptionBlock";

/**
 * Exactly 4 badges, one per corner, so they stay far from the title.
 * Override via the `badges` prop (keep it to 4).
 */
const DEFAULT_BADGES = [
  {
    label: "FOMC Rate Decision",
    icon: "🏦",
    tone: "green",
    className: "top-[110px] left-[3%] sm:top-[125px] sm:left-[4%]",
    rotate: -10,
    exitX: -70,
    exitY: -30,
  },
  {
    label: "Non-Farm Payrolls",
    icon: "💼",
    tone: "gold",
    className: "top-[110px] right-[3%] sm:top-[125px] sm:right-[4%]",
    rotate: 10,
    exitX: 70,
    exitY: -20,
  },
  {
    label: "CPI Inflation",
    icon: "📈",
    tone: "dark",
    className: "bottom-[8%] left-[3%] sm:bottom-[10%] sm:left-[4%]",
    rotate: 8,
    exitX: -70,
    exitY: 30,
  },
  {
    label: "GDP Growth",
    icon: "🌍",
    tone: "green",
    className: "bottom-[14%] right-[3%] sm:bottom-[16%] sm:right-[4%]",
    rotate: -8,
    exitX: 70,
    exitY: 20,
  },
];

const TONES = {
  green: "bg-[#20a46a] text-white shadow-[0_12px_30px_-8px_rgba(32,164,106,0.5)]",
  gradient: "bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white shadow-[0_12px_30px_-8px_rgba(31,168,100,0.5)] border border-white/10",
  gold: "bg-[#d9b85c] text-[#080908] shadow-[0_12px_30px_-8px_rgba(217,184,92,0.45)]",
  dark: "bg-[#111211] text-white border border-white/10 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.8)]",
};

const Badge = ({ badge, progress }) => {
  const {
    label,
    icon,
    tone = "green",
    className = "",
    rotate = 0,
    exitX = 0,
    exitY = 0,
  } = badge;

  const x = useTransform(progress, [0, 0.9], ["0vw", `${exitX}vw`]);
  const y = useTransform(progress, [0, 0.9], [0, exitY]);
  const rot = useTransform(progress, [0, 0.9], [rotate, rotate * 1.8]);
  const scale = useTransform(progress, [0, 0.9], [1, 1.05]);
  const opacity = useTransform(progress, [0, 0.6, 0.95], [1, 1, 0]);

  return (
    <div className={`pointer-events-none absolute z-10 ${className}`}>
      <motion.div
        style={{ x, y, rotate: rot, scale, opacity }}
        initial={false}
        className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] sm:gap-2 sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.16em] ${TONES[tone] || TONES.green
          }`}
      >
        <span className="text-xs sm:text-lg">{icon}</span>
        {label}
      </motion.div>
    </div>
  );
};

/**
 * Seamless looping video.
 * The native `loop` attribute causes a visible jump/stutter when the video
 * restarts. Instead we stack two copies of the same video and, just before the
 * current one ends, fade the second one in from 0:00. The viewer never sees
 * a restart.
 */
const CROSSFADE_SECONDS = 0.8;

const SeamlessLoopVideo = ({ src, poster, className = "" }) => {
  const videoARef = useRef(null);
  const videoBRef = useRef(null);

  useEffect(() => {
    const a = videoARef.current;
    const b = videoBRef.current;
    if (!a || !b) return;

    const videos = [a, b];
    let active = 0; // index of the video currently on top and playing
    let fading = false;
    let rafId = 0;
    let timeoutId = 0;

    videos.forEach((v) => {
      v.muted = true;
      v.loop = false;
    });

    a.style.transition = "none";
    b.style.transition = "none";
    a.style.opacity = "1";
    a.style.zIndex = "2";
    b.style.opacity = "0";
    b.style.zIndex = "1";

    const safePlay = (v) => {
      const p = v.play();
      if (p && p.catch) p.catch(() => { });
    };

    safePlay(a);

    const tick = () => {
      const cur = videos[active];
      const next = videos[1 - active];
      const d = cur.duration;

      if (
        !fading &&
        isFinite(d) &&
        d > CROSSFADE_SECONDS * 3 &&
        d - cur.currentTime <= CROSSFADE_SECONDS + 0.05
      ) {
        fading = true;

        // Put the next video on top, invisible, at the start
        next.currentTime = 0;
        next.style.transition = "none";
        next.style.opacity = "0";
        next.style.zIndex = "3";
        safePlay(next);

        // Force reflow, then fade it in over the ending video
        void next.offsetWidth;
        next.style.transition = `opacity ${CROSSFADE_SECONDS}s linear`;
        next.style.opacity = "1";

        timeoutId = window.setTimeout(() => {
          cur.pause();
          cur.currentTime = 0;
          cur.style.transition = "none";
          cur.style.opacity = "0";
          cur.style.zIndex = "1";
          next.style.zIndex = "2";
          active = 1 - active;
          fading = false;
        }, CROSSFADE_SECONDS * 1000 + 60);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    // If the tab was hidden and the browser paused playback, resume it
    const onVisibility = () => {
      if (!document.hidden) safePlay(videos[active]);
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Fallback: if a clip is too short to crossfade, use a normal loop
    const onMeta = () => {
      if (isFinite(a.duration) && a.duration <= CROSSFADE_SECONDS * 3) {
        a.loop = true;
      }
    };
    a.addEventListener("loadedmetadata", onMeta);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", onVisibility);
      a.removeEventListener("loadedmetadata", onMeta);
    };
  }, [src]);

  const common = {
    src,
    muted: true,
    playsInline: true,
    preload: "auto",
    "aria-hidden": true,
    className: `absolute inset-0 h-full w-full object-cover ${className}`,
  };

  return (
    <>
      <video ref={videoARef} poster={poster} autoPlay {...common} />
      <video ref={videoBRef} {...common} />
    </>
  );
};

const ParaxEffectHeroSubSection = ({
  eyebrow = "Economic Calendar",
  title = "Know the News",
  highlight = "",
  description = "Track the jobs, prices and interest-rate events that move the markets — and be ready before everyone else.",
  descriptionLayout = "cards", // "cards" | "tabs" (used only when description has 2+ items)
  descriptionTitles, // optional string[] for card / tab titles
  descriptionMetrics, // optional {value, label}[] for cards
  video, // optional background video URL (mp4/webm)
  image, // optional background image (also used as video poster)
  buttonText = "View Calendar",
  buttonLink = "#calendar",
  buttonClassName,
  highlightClassName,
  onButtonClick,
  badges = DEFAULT_BADGES,
}) => {
  const sectionRef = useRef(null);
  const ref = React.useRef(null)
  const isInView = useInView(ref,{once:true})
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const hasMedia = Boolean(video || image);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#080908] px-4 py-32 sm:px-6 sm:py-36"
    >
      {/* Background media: video first, else image, else nothing */}
      {hasMedia && (
        <>
          <motion.div
            style={{ y: mediaY, scale: mediaScale }}
            className="pointer-events-none absolute inset-0 transform-gpu will-change-transform"
          >
            {video ? (
              <SeamlessLoopVideo src={video} poster={image} />
            ) : (
              <div className="relative h-full w-full">
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                {/* Dark overlay to soften the background clutter */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
              </div>
            )}
          </motion.div>

          {/* Overlay keeps the text readable over the media */}
          <div className="pointer-events-none absolute inset-0 bg-black/50" />
        </>
      )}

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b85c]/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[180px]" />

      {/* Floating badges (max 4) */}
      {badges.slice(0, 4).map((badge, index) => (
        <Badge key={badge.label || index} badge={badge} progress={scrollYProgress} />
      ))}

      {/* Centered content */}
      <div className="relative z-20 mx-auto flex w-full max-w-[90vw] flex-col items-center gap-6 text-center sm:max-w-[940px] sm:gap-8">
        {/* Subheading pill */}
        {eyebrow && (
          <div className="mx-auto flex max-w-[95vw] flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2 sm:max-w-max sm:gap-3 sm:px-5 sm:py-3">
            <motion.img
              src="https://cdn.prod.website-files.com/6880e261cef3bfa6896ed9d3/68821a3faca8d79d3b4e7810_star.svg"
              alt=""
              width={20}
              height={20}
              className="flex-shrink-0"
              loading="lazy"
              animate={{ opacity: [1, 0.25, 1], scale: [1, 0.8, 1] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-center text-xs text-white sm:text-sm">
              {eyebrow}
            </span>
          </div>
        )}
     <motion.h2
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
    >
        {/* Headline */}
        <h2 className="mx-auto max-w-[95vw] text-3xl font-normal leading-snug text-white sm:max-w-[769px] sm:text-4xl sm:leading-tight lg:text-6xl lg:leading-[1.2]">
          {title}
          {highlight && (
            <>
              <br />
              <span className={highlightClassName || "text-[#20a46a]"}>{highlight}</span>
            </>
          )}
        </h2>

        {/* Description: 1 item -> <p>, 2+ items -> cards (or tabs) */}
        <div className="w-full">
          <DescriptionBlock
            description={description}
            layout={descriptionLayout}
            {...(descriptionTitles ? { titles: descriptionTitles } : {})}
            {...(descriptionMetrics ? { metrics: descriptionMetrics } : {})}
          />
        </div>
        </motion.h2>
        {/* CTA Button */}
        {buttonText && (
          <div className="flex justify-center">
            <a
              href={buttonLink}
              onClick={onButtonClick}
              className={buttonClassName || "inline-block rounded-3xl bg-[#20a46a] px-5 py-2.5 font-medium uppercase tracking-wide text-white transition hover:bg-[#1b8c5a] sm:px-6 sm:py-3"}
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ParaxEffectHeroSubSection;