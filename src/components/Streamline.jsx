import { Link } from "react-router-dom";

import d1 from "../assets/riskfree .png";
import d2 from "../assets/securedeposits.png";
import d3 from "../assets/balanceprotexction.png";
import stay from "../assets/controlPrecisionTool.png";

import Particles from "./Particles";

const cards = [
  {
    badge: "Trusted",
    title: (
      <>
        Fair &amp;
        <br className="hidden sm:block" />{" "}
        <span className="text-[#20f0a0]">Transparent</span>
        <br className="hidden sm:block" /> Legal Process
      </>
    ),
    description:
      "We ensure complete transparency at every step, so you always know where you stand.",
    image: d1,
    alt: "Trade Protection",
    action: "Learn More",
  },
  {
    badge: "Secured",
    title: (
      <>
        Trade With
        <br className="hidden sm:block" />{" "}
        <span className="text-[#20f0a0]">Risk-Free</span>
        <br className="hidden sm:block" /> Protection
      </>
    ),
    description:
      "Insulate your portfolio from volatility spikes with automated downside protection shields.",
    image: d2,
    alt: "Secured Deposits",
    action: "Learn More",
  },
  {
    badge: "Instant",
    title: (
      <>
        Secured Deposits &amp;
        <br className="hidden sm:block" />{" "}
        <span className="text-[#20f0a0]">Swift Withdrawals</span>
      </>
    ),
    description:
      "Instantaneous liquidity rails allow seamless capital routing without artificial lockup windows.",
    image: d3,
    alt: "Precision Tools",
    action: "Learn More",
  },
  {
    badge: "Analytics",
    title: (
      <>
        Control Every Exit
        <br className="hidden sm:block" /> With{" "}
        <span className="text-[#20f0a0]">Precision Tools</span>
      </>
    ),
    description:
      "Institutional depth charts, real-time spread analysis, and microsecond order execution.",
    image: stay,
    alt: "App",
    action: "Get Started",
    link: "/account-compare",
  },
];

const StreamlineCard = ({
  badge,
  title,
  description,
  image,
  alt,
  action,
  link,
}) => {
  const content = (
    <>
      {/* Badge */}
      {badge && (
        <span className="mb-3 inline-flex w-fit items-center rounded-full border border-[#20f0a0]/50 bg-[#20f0a0]/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-wide text-[#20f0a0]">
          {badge}
        </span>
      )}

      {/* Title */}
      <h3 className="mt-0 max-w-[225px] text-[21px] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-[24px] md:text-[22px] lg:text-[24px]">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="mt-2.5 max-w-[205px] text-[10px] leading-[1.45] text-white/60 sm:text-[11px]">
          {description}
        </p>
      )}

      {/* Action */}
      {action && (
        <span className="mt-auto inline-flex items-center gap-2 pt-4 text-[9px] font-semibold text-[#8ae7ff] sm:text-[10px]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#00d2ff]/60 text-xs transition-all duration-300 group-hover:bg-[#00d2ff] group-hover:text-black">
            &rarr;
          </span>

          {action}
        </span>
      )}
    </>
  );

  return (
    <div className="group relative">
      {/* Outer Glow */}
      <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00d2ff]/25 via-[#00ff87]/30 to-[#2563eb]/25 opacity-0 blur-xl transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100" />

      {/* Top Glow */}
      <div className="pointer-events-none absolute -top-8 left-1/2 h-24 w-44 -translate-x-1/2 rounded-full bg-gradient-to-t from-[#00ff87]/35 via-[#00d2ff]/25 to-transparent opacity-0 blur-2xl transition-all duration-500 ease-out group-hover:opacity-100" />

      {/* ================= CARD ================= */}
      <article
        className="
          relative
          min-h-[220px]
          w-full
          min-w-0
          overflow-hidden
          rounded-[20px]
          border
          border-[#00d2ff]/25
          bg-[linear-gradient(110deg,#02090f_0%,#06151b_42%,#07101d_68%,#020706_100%)]
          p-4
          shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_15px_35px_rgba(0,0,0,0.28)]
          transition-all
          duration-500
          group-hover:-translate-y-1.5
          group-hover:border-[#00ff87]/60
          group-hover:shadow-[0_18px_40px_rgba(0,210,255,0.2)]
          sm:min-h-[235px]
          sm:p-[18px]
          md:min-h-[220px]
          md:p-4
          lg:min-h-[235px]
          lg:p-[18px]
        "
      >
        {/* ================= RIGHT GRADIENT PANEL ================= */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            w-[52%]
            overflow-hidden
            rounded-r-[20px]
            bg-[linear-gradient(90deg,rgba(2,12,10,0.02),rgba(0,210,255,0.18)_48%,rgba(0,255,135,0.42))]
            shadow-[inset_0_0_24px_rgba(0,210,255,0.16),inset_0_0_0_1px_rgba(126,230,255,0.06),0_0_18px_rgba(0,210,255,0.12)]
          "
        >
          {/* Vertical Lines */}
          <div
            className="
              absolute
              inset-y-0
              right-0
              w-[48%]
              opacity-80
              [background-image:repeating-linear-gradient(90deg,rgba(0,210,255,0.75)_0,rgba(0,210,255,0.75)_1.5px,transparent_1.5px,transparent_6px)]
              [mask-image:linear-gradient(90deg,transparent,black_38%,black)]
            "
          />

          {/* Dark Fade */}
          <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#02090f]/85 via-[#02090f]/15 to-transparent" />
        </div>

        {/* Glow Behind Image */}
        <div className="pointer-events-none absolute -right-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#00d2ff]/20 blur-3xl" />

        {/* ================= TEXT CONTENT ================= */}
        <div
          className="
            relative
            z-20
            flex
            h-full
            min-h-[188px]
            max-w-[50%]
            min-w-0
            flex-col
            sm:min-h-[200px]
            md:min-h-[188px]
            lg:min-h-[200px]
          "
        >
          {link ? (
            <Link to={link} className="flex h-full flex-col">
              {content}
            </Link>
          ) : (
            content
          )}
        </div>

        {/* ================= IMAGE ================= */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            z-[1]
            flex
            w-[52%]
            items-center
            justify-center
            overflow-hidden
            rounded-r-[20px]
          "
        >
          <img
            src={image}
            alt={alt}
            className="
              relative
              z-[1]
              h-full
              w-full
              object-cover
              opacity-80
              mix-blend-screen
              drop-shadow-[0_0_10px_rgba(0,210,255,0.4)]
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
            "
          />

          {/* Image Fade */}
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#02090f]/50 via-transparent to-transparent" />
        </div>
      </article>
    </div>
  );
};

/* ============================================================
   STREAMLINE SECTION
============================================================ */

const Streamline = () => (
  <section
    className="
      relative
      overflow-hidden
      bg-[#05040b]
      px-3
      py-10
      sm:px-5
      sm:py-14
      lg:px-8
      lg:py-16
      xl:py-20
    "
  >
    {/* Particles */}
    <Particles
      className="pointer-events-none absolute inset-0 z-0"
      quantity={60}
      ease={80}
      color="#00d2ff"
      size={0.6}
      staticity={40}
      refresh
    />

    {/* Background Glow */}
    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/3
        z-0
        h-[350px]
        w-[600px]
        -translate-x-1/2
        rounded-full
        bg-[#00d2ff]/8
        blur-[130px]
      "
    />

    <div
      className="
        relative
        z-10
        mx-auto
        w-full
        max-w-[900px]
        min-w-0
        xl:max-w-[1000px]
      "
    >
      {/* ================= HEADING ================= */}
      <div className="mb-6 text-center sm:mb-8 lg:mb-10">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8ae7ff] sm:text-xs">
          Built for confident decisions
        </p>

        <h2
          className="
            mx-auto
            max-w-3xl
            bg-gradient-to-b
            from-white
            via-white/90
            to-white/50
            bg-clip-text
            text-2xl
            font-normal
            tracking-tight
            text-transparent
            sm:text-3xl
            md:text-[36px]
            lg:text-[42px]
          "
        >
          Trade With Confidence, Not Hesitation
        </h2>
      </div>

      {/* ================= CARDS ================= */}
      <div
        className="
          grid
          w-full
          min-w-0
          grid-cols-1
          gap-3
          sm:grid-cols-2
          sm:gap-4
          lg:gap-5
        "
      >
        {cards.map((card, i) => (
          <StreamlineCard key={i} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default Streamline;