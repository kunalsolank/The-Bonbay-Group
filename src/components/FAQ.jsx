import React, { useEffect, useRef } from "react";

const TOP_OFFSET = 96; // distance from viewport top while the left column is pinned
const BOTTOM_GAP = 24; // breathing room at the bottom of the viewport
const LG_BREAKPOINT = 1024;

const defaultFeatures = [
  "Simplify complex tasks and save time with powerful execution",
  "Unlock valuable insights with real-time analytics",
  "Tailor your workspace with widgets and layouts that adapt",
  "Protect your data with advanced encryption & safety protocols",
];

const defaultPowerItems = [
  {
    title: "Unified Data Dashboard",
    text: "Consolidate all your data into one intuitive dashboard. With real-time analytics, customizable widgets, and interactive reports, visualize metrics.",
    svg: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8333 17.5V9.16667H17.5V17.5H10.8333ZM2.5 10.8333V2.5H9.16667V10.8333H2.5ZM7.5 9.16667V4.16667H4.16667V9.16667H7.5ZM2.5 17.5V12.5H9.16667V17.5H2.5ZM4.16667 15.8333H7.5V14.1667H4.16667V15.8333ZM12.5 15.8333H15.8333V10.8333H12.5V15.8333ZM10.8333 2.5H17.5V7.5H10.8333V2.5ZM12.5 4.16667V5.83333H15.8333V4.16667H12.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Personalized User Experience",
    text: "Tailor each user's journey with a platform that adapts based on behavior, preferences, and role. From interface themes to recommended tools.",
    svg: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.16667 1.6665C12.5567 1.6665 15.355 4.1965 15.7783 7.47067L17.6533 10.4198C17.7767 10.614 17.7517 10.9032 17.4658 11.0265L15.8333 11.7248V14.1665C15.8333 15.0873 15.0875 15.8332 14.1667 15.8332H12.5008L12.5 18.3332H5V15.2548C5 14.2715 4.63667 13.3407 3.96333 12.5007C3.0475 11.359 2.5 9.90984 2.5 8.33317C2.5 4.6515 5.485 1.6665 9.16667 1.6665ZM9.16667 3.33317C6.405 3.33317 4.16667 5.5715 4.16667 8.33317C4.16667 9.48734 4.55667 10.5773 5.26333 11.4582C6.175 12.5948 6.66667 13.889 6.66667 15.2548V16.6665H10.8333L10.835 14.1665H14.1667V10.6265L15.4583 10.0732L14.1725 8.05234L14.125 7.684C13.805 5.209 11.6867 3.33317 9.16667 3.33317ZM9.16667 5.83317C9.62667 5.83317 10 6.2065 10 6.6665V7.49984H10.8333C11.2933 7.49984 11.6667 7.87317 11.6667 8.33317C11.6667 8.79317 11.2933 9.1665 10.8333 9.1665H10V9.99984C10 10.4598 9.62667 10.8332 9.16667 10.8332C8.70667 10.8332 8.33333 10.4598 8.33333 9.99984V9.16567L7.5 9.1665C7.04 9.1665 6.66667 8.79317 6.66667 8.33317C6.66667 7.87317 7.04 7.49984 7.5 7.49984L8.33333 7.499V6.6665C8.33333 6.2065 8.70667 5.83317 9.16667 5.83317Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Contextual Collaboration Tools",
    text: "Keep conversations relevant and efficient with in-app comments, real-time mentions, and project-based communication channels.",
    svg: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6667 2.5C17.1267 2.5 17.5 2.87333 17.5 3.33333V16.6667C17.5 17.1267 17.1267 17.5 16.6667 17.5H3.33333C2.87333 17.5 2.5 17.1267 2.5 16.6667V3.33333C2.5 2.87333 2.87333 2.5 3.33333 2.5H16.6667ZM9.32417 10.965L4.16667 11.875V15.8333H10.1817L9.32333 10.965H9.32417ZM15.8333 4.16667H9.8175L11.8742 15.8333H15.8333V4.16667ZM8.125 4.16667H4.16667V10.1817L9.035 9.32333L8.125 4.16667Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Adaptive Performance Scaling",
    text: "Enjoy lightning-fast performance, no matter the user load. Our adaptive scaling feature optimizes server resources dynamically.",
    svg: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0001 9.1665C11.1052 9.1665 12.165 9.60549 12.9464 10.3869C13.7278 11.1683 14.1667 12.2281 14.1667 13.3332V18.3332H12.5001V13.3332C12.5001 12.6955 12.2565 12.0819 11.819 11.618C11.3815 11.154 10.7833 10.8747 10.1467 10.8373L10.0001 10.8332C9.36241 10.8331 8.74882 11.0768 8.28486 11.5142C7.82091 11.9517 7.54166 12.5499 7.50425 13.1865L7.50008 13.3332V18.3332H5.83342V13.3332C5.83342 12.2281 6.2724 11.1683 7.0538 10.3869C7.83521 9.60549 8.89501 9.1665 10.0001 9.1665ZM4.58341 11.6665C4.81591 11.6665 5.04175 11.694 5.25841 11.7448C5.11593 12.169 5.03156 12.6105 5.00758 13.0573L5.00008 13.3332V13.4048C4.90429 13.3706 4.80466 13.3482 4.70341 13.3382L4.58341 13.3332C4.27268 13.3332 3.97309 13.4489 3.74307 13.6579C3.51304 13.8668 3.36908 14.1539 3.33925 14.4632L3.33341 14.5832V18.3332H1.66675V14.5832C1.66675 13.8096 1.97404 13.0678 2.52102 12.5208C3.068 11.9738 3.80987 11.6665 4.58341 11.6665ZM15.4167 11.6665C16.1903 11.6665 16.9322 11.9738 17.4791 12.5208C18.0261 13.0678 18.3334 13.8096 18.3334 14.5832V18.3332H16.6667V14.5832C16.6667 14.2724 16.551 13.9728 16.3421 13.7428C16.1332 13.5128 15.846 13.3688 15.5367 13.339L15.4167 13.3332C15.2709 13.3332 15.1309 13.3582 15.0001 13.404V13.3332C15.0001 12.7782 14.9101 12.2448 14.7426 11.7465C14.9584 11.694 15.1842 11.6665 15.4167 11.6665ZM4.58341 6.6665C5.13595 6.6665 5.66585 6.886 6.05655 7.2767C6.44725 7.6674 6.66675 8.1973 6.66675 8.74984C6.66675 9.30237 6.44725 9.83228 6.05655 10.223C5.66585 10.6137 5.13595 10.8332 4.58341 10.8332C4.03088 10.8332 3.50098 10.6137 3.11028 10.223C2.71957 9.83228 2.50008 9.30237 2.50008 8.74984C2.50008 8.1973 2.71957 7.6674 3.11028 7.2767C3.50098 6.886 4.03088 6.6665 4.58341 6.6665ZM15.4167 6.6665C15.9693 6.6665 16.4992 6.886 16.8899 7.2767C17.2806 7.6674 17.5001 8.1973 17.5001 8.74984C17.5001 9.30237 17.2806 9.83228 16.8899 10.223C16.4992 10.6137 15.9693 10.8332 15.4167 10.8332C14.8642 10.8332 14.3343 10.6137 13.9436 10.223C13.5529 9.83228 13.3334 9.30237 13.3334 8.74984C13.3334 8.1973 13.5529 7.6674 13.9436 7.2767C14.3343 6.886 14.8642 6.6665 15.4167 6.6665ZM4.58341 8.33317C4.47291 8.33317 4.36693 8.37707 4.28879 8.45521C4.21065 8.53335 4.16675 8.63933 4.16675 8.74984C4.16675 8.86034 4.21065 8.96633 4.28879 9.04447C4.36693 9.12261 4.47291 9.1665 4.58341 9.1665C4.69392 9.1665 4.7999 9.12261 4.87804 9.04447C4.95618 8.96633 5.00008 8.86034 5.00008 8.74984C5.00008 8.63933 4.95618 8.53335 4.87804 8.45521C4.7999 8.37707 4.69392 8.33317 4.58341 8.33317ZM15.4167 8.33317C15.3062 8.33317 15.2003 8.37707 15.1221 8.45521C15.044 8.53335 15.0001 8.63933 15.0001 8.74984C15.0001 8.86034 15.044 8.96633 15.1221 9.04447C15.2003 9.12261 15.3062 9.1665 15.4167 9.1665C15.5273 9.1665 15.6332 9.12261 15.7114 9.04447C15.7895 8.96633 15.8334 8.86034 15.8334 8.74984C15.8334 8.63933 15.7895 8.53335 15.7114 8.45521C15.6332 8.37707 15.5273 8.33317 15.4167 8.33317Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

/**
 * Pins `inner` while the user scrolls through `row`, then releases it at the
 * bottom of `row` so the whole section scrolls on. Uses fixed/absolute
 * positioning instead of CSS sticky, so a parent with `overflow: hidden`
 * does not break it. (A parent with `transform` still would.)
 */
function useStickyColumn(rowRef, colRef, innerRef) {
  useEffect(() => {
    const row = rowRef.current;
    const col = colRef.current;
    const inner = innerRef.current;
    if (!row || !col || !inner) return;

    let ticking = false;

    const clear = () => {
      inner.style.position = "";
      inner.style.top = "";
      inner.style.bottom = "";
      inner.style.left = "";
      inner.style.width = "";
      inner.style.maxHeight = "";
      col.style.minHeight = "";
    };

    const update = () => {
      ticking = false;

      // Mobile / tablet: normal stacked layout, no pinning
      if (window.innerWidth < LG_BREAKPOINT) {
        clear();
        return;
      }

      const rowRect = row.getBoundingClientRect();
      const colRect = col.getBoundingClientRect();

      // Keep the pinned column within the viewport on short screens
      inner.style.maxHeight = `${window.innerHeight - TOP_OFFSET - BOTTOM_GAP}px`;
      const innerHeight = inner.offsetHeight;

      // 1) Row hasn't reached the pin line yet: normal flow
      if (rowRect.top >= TOP_OFFSET) {
        inner.style.position = "";
        inner.style.top = "";
        inner.style.bottom = "";
        inner.style.left = "";
        inner.style.width = "";
        col.style.minHeight = "";
        return;
      }

      // Hold the column's height so the row doesn't collapse when inner leaves the flow
      col.style.minHeight = `${innerHeight}px`;

      // 2) Right list finished: release at the bottom of the row
      if (rowRect.bottom - TOP_OFFSET <= innerHeight) {
        inner.style.position = "absolute";
        inner.style.top = "auto";
        inner.style.bottom = "0px";
        inner.style.left = "0px";
        inner.style.width = `${colRect.width}px`;
        return;
      }

      // 3) In between: pinned to the viewport
      inner.style.position = "fixed";
      inner.style.top = `${TOP_OFFSET}px`;
      inner.style.bottom = "auto";
      inner.style.left = `${colRect.left}px`;
      inner.style.width = `${colRect.width}px`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Re-measure when content height changes (images, fonts, etc.)
    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(onScroll);
      ro.observe(row);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (ro) ro.disconnect();
      clear();
    };
  }, [rowRef, colRef, innerRef]);
}

export default function FAQ({
  tag = "Top Features",
  title = "Using the best features to unlock power",
  description = "Utilize our highly regarded features, which are intended to facilitate trading success, to fully realize TradeLogicFX's potential.",
  features = defaultFeatures,
  powerItems = defaultPowerItems,
  buttonText = "Get Started",
  buttonLink = "https://portal.dollrexcapital.com/register-new/",
}) {
  const rowRef = useRef(null);
  const colRef = useRef(null);
  const innerRef = useRef(null);

  useStickyColumn(rowRef, colRef, innerRef);

  return (
    <section className="power-section py-16 sm:py-20 lg:py-24 px-4 sm:px-6 text-white bg-[#05040b]">
      <div className="section-spacing max-w-[1350px] mx-auto">
        {/* Row: relative so the released column can anchor to its bottom */}
        <div
          ref={rowRef}
          className="relative flex flex-col lg:flex-row lg:items-start justify-between gap-10 lg:gap-14"
        >
          {/* Left column placeholder (keeps width/space) */}
          <div ref={colRef} className="w-full lg:max-w-lg text-left">
            {/* Pinned content */}
            <div ref={innerRef} className="lg:overflow-y-auto">
              <div className="mb-4">
                <div className="inline-block border border-white/20 rounded-full px-4 py-2 text-sm font-medium tracking-wide bg-white/5">
                  {tag}
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-white">
                  {title}
                </h2>
              </div>
              <div className="mb-8 lg:mb-10">
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Normal bullet list */}
              <ul className="list-disc marker:text-white/60 space-y-4 sm:space-y-5 pl-5 mb-8 sm:mb-10">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="font-normal text-base sm:text-lg leading-snug text-white/90"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex justify-center lg:justify-start">
                <a
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#1fa864] via-[#258d87] to-[#3959a6] text-white px-7 py-3 font-medium uppercase secondary-font tracking-wide rounded-2xl sm:rounded-full hover:scale-[1.03] hover:shadow-[0_10px_25px_-5px_rgba(31,168,100,0.5)] transition-all duration-300 inline-block cursor-pointer shadow-md text-sm"
                >
                  {buttonText}
                </a>
              </div>
            </div>
          </div>

          {/* Right side power items */}
          <div className="flex flex-col gap-6 w-full lg:max-w-[600px]">
            {powerItems.map(({ title: itemTitle, text, svg }, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-white/20 hover:bg-white/[0.07] transition-all"
              >
                <div className="flex items-center gap-4 mb-4 sm:mb-5">
                  <div className="bg-[#1fa864]/10 border border-[#1fa864]/20 w-11 h-11 rounded-full flex justify-center items-center shrink-0 text-[#1fa864]">
                    <div className="w-5 h-5 flex items-center justify-center">
                      {svg}
                    </div>
                  </div>
                  <h3 className="text-white text-lg sm:text-xl font-semibold leading-normal">
                    {itemTitle}
                  </h3>
                </div>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}