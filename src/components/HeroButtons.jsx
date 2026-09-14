import React from "react";
import { Link } from "react-router-dom";

const HeroButtons = ({
  primaryText = "Get Started",
  secondaryText = "Learn More",
  primaryLink = "/login",
  secondaryLink = "/about",
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Light Yellow Button */}
      <Link
        to={primaryLink}
        className="inline-block rounded-full bg-[#ade512] px-10 py-3.5 text-md font-medium  text-black
                   transition-transform duration-300 ease-out
                   hover:scale-110"
      >
        {primaryText}
      </Link>

      {/* Black Button */}
      <Link
        to={secondaryLink}
        className="inline-block rounded-full border border-white bg-black px-10 py-3.5 text-md font-medium text-white
                   transition-transform duration-300 ease-out
                   hover:scale-110 hover:border-[#ade512]"
      >
        {secondaryText}
      </Link>
    </div>
  );
};

export default HeroButtons;
