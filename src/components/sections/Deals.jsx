import { useState } from "react";
import React from "react";
// import "./deals.css";
import LgCard from "../cards/LgCard";

//Deals component render 4 products that have amazing offers

const SectionDeals = () => {
  const [isScreen, setIsScreen] = useState(window.innerWidth);

  const handleResize = () => {
    setIsScreen(window.innerWidth);
  };

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);

  return (
    <div className="flex flex-col font-Quicksand max-w-[550px] md:max-w-[770px] lg:max-w-full mx-auto px-4">
      <div className="flex justify-between items-end">
        <h3 className="text-gray-700 text-3xl font-bold">Deals of The Day</h3>
        <button className="flex items-center gap-2 text-gray-500 text-bold">
          All Deals
          <svg
            viewBox="0 0 24 24"
            width={15}
            height={15}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m0 0h24v24h-24z"
              fill="gray"
              opacity="0"
              transform="matrix(0 -1 1 0 0 24)"
            />
            <path
              d="m5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13a1 1 0 0 0 .07-.36 1 1 0 0 0 -.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0 -.09-.15l-5-6a1 1 0 0 0 -.77-.36 1 1 0 0 0 -.64.23 1 1 0 0 0 -.13 1.41l3.63 4.36h-11.86a1 1 0 0 0 0 2z"
              fill="gray"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:gap-2 lg:gap-6 justify-center">
        <LgCard image="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-5.png" />
        <LgCard image="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-6.png" />
        {isScreen >= 1024 && (
          <LgCard image="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-7.png" />
        )}
        {isScreen >= 1280 && (
          <LgCard image="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-8.png" />
        )}
      </div>
    </div>
  );
};

export default SectionDeals;
