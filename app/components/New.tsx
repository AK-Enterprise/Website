"use client";
import Image from "next/image";
import First from "../assets/First.png";
import Second from "../assets/Second.png";
import Third from "../assets/Third.png";
import Fourth from "../assets/Fourth.png";
import Fifth from "../assets/Fifth.png";
import Sixth from "../assets/Sixth.png";
import { useState } from "react";

function New() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNavigation = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentIndex((currentIndex + 1) % 6);
      setScrollPosition(scrollPosition + 200); // adjust the scroll position
    } else if (direction === "prev") {
      setCurrentIndex((currentIndex - 1 + 6) % 6);
      setScrollPosition(scrollPosition - 200); // adjust the scroll position
    }
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const scrollDelta = e.deltaX;
    if (scrollDelta > 0) {
      handleNavigation("next");
    } else if (scrollDelta < 0) {
      handleNavigation("prev");
    }
  };

  return (
    <div className="h-screen max-w-[1280px] m-auto flex flex-col md:flex-row justify-center items-center gap-5">
      <div className="w-1/2 flex items-start justify-center flex-col gap-5">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg text-[#C9B18F]">
          Entering In Multiple Categories
        </h1>
        <p className="font-semibold text-gray-400">
          Get The Latest Designs With Best Prices
        </p>
      </div>

      <div
        className="flex gap-4 overflow-x-scroll scroll-smooth"
        onWheel={handleScroll}
      >
        {[First, Second, Third, Fourth, Fifth, Sixth].map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="block w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 sm:w-1/3"
          />
        ))}
      </div>
    </div>
  );
}

export default New;
