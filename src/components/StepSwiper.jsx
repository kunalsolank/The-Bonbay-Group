import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import step1 from "../assets/flexible liverage.png";
import step2 from "../assets/Lower Spreads.png";
import step3 from "../assets/faster withdrawals.png";
import step4 from "../assets/low larency.png";
import step5 from "../assets/no fees to deposit.png";
import step6 from "../assets/$0 minimum account size.png";
import step7 from "../assets/7 support.png";
import step8 from "../assets/step8.avif";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Flexible Leverage",
    image: step1,
    subheading: "Maximum Leverage 1:1000",
    subdesc:
      "Adjust your leverage between 1:30 and 1:1000 to suit your trading style.",
  },
  {
    id: 2,
    title: "Lower Spreads",
    image: step2,
    subheading: "Trade from 0.0 pips",
    subdesc:
      "Reduce your trading costs with our spread on majors from 0.0 pips, low commissions, and deep interbank liquidity.",
  },
  {
    id: 3,
    title: "Faster Withdrawals",
    image: step3,
    subheading: "Simplified",
    subdesc:
      "The majority of withdrawals are now being completed in as little as under 2 hours, with a median processing time of approximately 2 hours.",
  },
  {
    id: 4,
    title: "Low Larency",
    image: step4,
    subheading: "Built For Speed",
    subdesc:
      "X-Connected low latency servers within the NY4 datacentre execute your trades with fast execution speeds from as low as 10ms.",
  },
  {
    id: 5,
    title: "No Fees to Deposit",
    image: step5,
    subheading: "Deposit with no fees",
    subdesc:
      "We cover all your deposit fees on all 20+ funding methods. Fund with Visa, MasterCard, PayPal, Neteller, Skrill and more.",
  },
  {
    id: 6,
    title: "$0 Minimum Account Size",
    image: step6,
    subheading: "Start with $0",
    subdesc:
      "We don’t believe in teasing you with lower costs and then making you pay extra for it. With Global Prime, you can start with as little or as much as you like.",
  },
  {
    id: 7,
    title: "24/7 Support",
    image: step7,
    subheading: "Support around the clock",
    subdesc:
      "The market never sleeps, so neither does our team. We’re here to help you on your trading journey all day, every day.",
  },
  {
    id: 8,
    title: "Range of Markets",
    image: step8,
    subheading: "250+ global markets",
    subdesc:
      "Trade our 250+ range of global CFD markets covering FX, Indices, Commodities, Cryptocurrency, and more.",
  },
];

const StepSwiper = () => {
  const [openCard, setOpenCard] = useState(null);
  return (
    <div className="relative w-full px-6 py-10 pt-40">
      <div className="flex items-center justify-between mb-8 mx-auto max-w-7xl">
        <h1 className="text-[30px] xl:text-[55px] text-white font-semibold">
          Why We're a Top Rated Broker
        </h1>
        <div className="flex items-center gap-2 rounded-full p-1">
          <div className="flex items-center gap-2 border border-[#ccc] rounded-full p-1">
            <button
              className="step-prev flex h-11 w-11 items-center justify-center rounded-full border border-black text-white text-xl transition hover:bg-[#ade512] hover:text-black"
              aria-label="Previous"
            >
              <MdOutlineKeyboardArrowLeft />
            </button>

            <button
              className="step-next flex h-11 w-11 items-center justify-center rounded-full bg-black text-xl text-white transition hover:bg-[#ade512] hover:text-black"
              aria-label="Next"
            >
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
          <div className="hidden md:block">
            <Link
              to="/login"
              className="inline-block rounded-full bg-[#ade512] px-10 py-3.5 text-md font-medium text-black
               transition-transform duration-300 ease-out
               hover:scale-110"
            >
              See accounts
            </Link>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Mousewheel]}
        navigation={{
          prevEl: ".step-prev",
          nextEl: ".step-next",
        }}
        allowTouchMove={false}
        simulateTouch={false}
        mousewheel={false}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="step-swiper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="relative h-[610px] overflow-hidden rounded-[20px] border border-white/10 bg-[#090909]">
              {/* Title */}
              <div className="relative z-10 px-10 pt-12">
                <h3 className="max-w-[280px] text-[32px] font-semibold leading-[1.35] tracking-[-1.5px] text-white">
                  {card.title}
                </h3>
              </div>

              {/* Image */}
              <div className="absolute inset-x-0 top-[140px] bottom-0 flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Subheading */}
              <div
                className={`
        absolute left-10 right-[110px] z-30
        transition-all duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          openCard === card.id
            ? "bottom-[275px] translate-y-[20px] opacity-0"
            : "bottom-8 translate-y-0 opacity-100"
        }
      `}
              >
                <p className="text-[18px] font-medium leading-[1.4] text-white">
                  {card.subheading}
                </p>
              </div>

              {/* Green Button */}
              <button
                onClick={() =>
                  setOpenCard(openCard === card.id ? null : card.id)
                }
                className={`
        absolute right-10 z-40
        flex h-[54px] w-[54px]
        items-center justify-center
        rounded-full
        bg-[#ade512]
        text-black
        transition-all duration-500
        hover:scale-105
        hover:bg-white
        ${openCard === card.id ? "bottom-[265px]" : "bottom-8"}
      `}
              >
                <MdKeyboardArrowDown
                  size={28}
                  className={`
          transition-transform duration-500
          ${openCard === card.id ? "rotate-180" : ""}
        `}
                />
              </button>

              {/* Bottom Panel */}
              <div
                className={`
        absolute bottom-0 left-0 right-0 z-20
        rounded-t-[20px]
        bg-[#151515]
        px-10 py-10
        transition-all duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          openCard === card.id
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }
      `}
              >
                <p className="text-[20px] leading-[1.8] text-[#c5c5c5]">
                  {card.subdesc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StepSwiper;
