import HeroImage from "../assets/HeroImage.png";
import banner from "../assets/without background.png";
const StepImages = () => {
  return (
    <div className="w-full overflow-hidden flex items-center justify-center  pb-30">
      <div className="flex h-full sm:w-[80%] items-center justify-center gap-2 px-4 py-6 md:gap-4 md:px-6">
        <div className="flex-1 min-w-0">
          <img src={banner} className="block h-auto w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default StepImages;
