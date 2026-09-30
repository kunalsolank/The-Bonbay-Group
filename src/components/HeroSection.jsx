import React from "react";
import HeroButtons from "./HeroButtons";
import StepImages from "./StepImages";
import img1 from "../assets/card 1.png";
import img2 from "../assets/card 2.png";
import img3 from "../assets/card 3.png";
import img4 from "../assets/card 4.png";
import img5 from "../assets/card 5.png";

const HeroSection = ({
  eyebrow,
  title,
  highlight,
  description,
  buttonText,
  buttonLink,
  secondaryText,
  secondaryLink,
  showStepImages = false,
}) => {
  const steps = [
    { image: img1, title: "Step 1" },
    { image: img2, title: "Step 2" },
    { image: img3, title: "Step 3" },
    { image: img4, title: "Step 4" },
    { image: img5, title: "Step 5" },
  ];
  return (
    <div
      className="w-full sm:h-screen bg-black pt-30 pb-30"
      style={{
        background:
          "radial-gradient(circle at 90% 90%, rgba(173, 229, 18, 0.35) 0%, rgba(173, 229, 18, 0.12) 20%, transparent 45%), #000000",
      }}
    >
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center text-[2.3rem] md:text-[3.3em] text-white font-semibold sm:w-[100%] md:w-[72%] xl:w-[52%] text-center">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#20a46a]">
              {eyebrow}
            </p>
          )}
          <h1>
            {title}
            {highlight && (
              <span className="bg-gradient-to-r from-[#00ff87] via-[#00d2ff] to-[#2563eb] bg-clip-text text-transparent">
                {" "}
                {highlight}
              </span>
            )}
          </h1>
        </div>
        <div className="sm:w-[50%] text-center text-white text-lg mt-6">
          <p>{description}</p>
        </div>
        <div className="flex flex-row items-center justify-center mt-8">
          <HeroButtons
            primaryText={buttonText}
            secondaryText={secondaryText || "Learn More"}
            primaryLink={buttonLink}
            secondaryLink={secondaryLink || "/about"}
          />
        </div>

        {showStepImages && <StepImages steps={steps} />}
      </div>
    </div>
  );
};

export default HeroSection;
