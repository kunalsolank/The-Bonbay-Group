import React from "react";
import HeroButtons from "./HeroButtons";
import StepImages from "./StepImages";
import img1 from "../assets/card 1.png";
import img2 from "../assets/card 2.png";
import img3 from "../assets/card 3.png";
import img4 from "../assets/card 4.png";
import img5 from "../assets/card 5.png";

const HeroSection = () => {
  const steps = [
    {
      image: img1,
      title: "Step 1",
      // link: "/step-one",
    },
    {
      image: img2,
      title: "Step 2",
      // link: "/step-two",
    },
    {
      image: img3,
      title: "Step 3",
      // link: "/step-three",
    },
    {
      image: img4,
      title: "Step 4",
      // link: "/step-four",
    },
    {
      image: img5,
      title: "Step 5",
      // link: "/step-five",
    },
  ];
  return (
    <div
      className="w-full sm:h-screen  bg-black pt-30 pb-30"
      style={{
        background:
          "radial-gradient(circle at 90% 90%, rgba(173, 229, 18, 0.35) 0%, rgba(173, 229, 18, 0.12) 20%, transparent 45%), #000000",
      }}
    >
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center text-[2.3rem] md:text-[3.3em] text-white font-semibold sm:w-[100%] md:w-[72%] xl:w-[52%] text-center">
          <h1>Experience Trading with a #1 Rated Broker*</h1>
        </div>
        <div className="sm:w-[50%] text-center text-white text-lg mt-6">
          <p>
            With spreads from 0.0, $0 deposit fees, $0 minimum account size and
            over 16 years of operating, savvy traders like you have already made
            the switch.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center mt-8">
          <HeroButtons
            primaryText="Get Started free"
            secondaryText="Learn More"
            primaryLink="/login"
            secondaryLink="/about"
          />
        </div>

        <StepImages steps={steps} />
      </div>
    </div>
  );
};

export default HeroSection;
