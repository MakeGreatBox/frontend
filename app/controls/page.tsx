"use client";
import Navbar from "@/components/Navbar/Navbar";
import SlideButton from "@/components/slideButton/slideButton";
import ClickButton from "@/components/clickButton/clickButton";
import Slide from "@/components/forwardsBackwardsSlide/forwardsBackwardsSlide";
import Slider from "@/components/Slider/Slider";

export default function Controls() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return ( 
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-20 md:mt-32">
        <div className="flex flex-wrap justify-center items-center gap-6 text-center mr-32 ml-32">
          {/* Click Button */}
          <div className="flex flex-col items-center p-4 md:p-6 rounded-lg shadow-md w-full sm:w-auto text-center">
            <ClickButton label="Warm me up!" onClick={handleClick} />
          </div>
          {/* SlideButton: Off/On */}
          <div className="flex flex-col items-center p-4 md:p-6 rounded-lg shadow-md w-full sm:w-auto text-center">
            <div className="flex items-center">
              <span className="text-black mr-4">Off</span>
              <SlideButton />
              <span className="text-black ml-4">On</span>
            </div>
          </div>
          {/* SlideButton: Forwards/Backwards */}
          <div className="flex flex-col items-center p-4 md:p-6 rounded-lg shadow-md w-full sm:w-auto text-center">
            <div className="flex items-center">
              <span className="text-black mr-4">Forwards</span>
              <Slide/>
              <span className="text-black ml-4 ">Backwards</span>
            </div>
        
          </div>
          <div className="flex flex-col items-center p-4 md:p-6 rounded-lg shadow-md w-full sm:w-auto text-center">
            <div className="flex items-center">
          <Slider /> {/* Add Slider */}
          </div>
        </div>
        </div>
        
      </div>
    </div>
  );
}
