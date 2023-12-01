import React from "react";

const Poster = ({ title, image }) => {
  return (
    <div className="w-[100%] max-w-[100%] md:max-w-[100%] h-[240px] max-h-[240px] md:h-[180px] md:max-h-[180px] lg:h-[250px] lg:max-h-[350px] relative mb-2 md:mb-10 rounded-lg">
      <img className="rounded-lg w-[100%] h-[100%]" src={image} alt="" />
      <div className="absolute flex flex-col justify-between top-20 md:top-10 lg:top-16 left-10 md:left-14 lg:left-10 w-[200px] md:w-[180px] lg:w-[210px]">
        <h4 className="w-[100%] text-gray-700 text-xl md:text-base lg:text-2xl font-bold leading-none md:leading-tight lg:leading-none">
          {title}
        </h4>
        <a
          href="#"
          className="bg-green-600 text-xs text-white text-left font-semibold px-2 py-2 w-[100px] hover:w-[110px] hover:bg-yellow-400 rounded mt-4"
        >
          Shop Now
          <svg
            className="inline ml-1"
            viewBox="0 0 24 24"
            width={15}
            height={15}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m0 0h24v24h-24z"
              fill="#fff"
              opacity="0"
              transform="matrix(0 -1 1 0 0 24)"
            />
            <path
              d="m5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13a1 1 0 0 0 .07-.36 1 1 0 0 0 -.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0 -.09-.15l-5-6a1 1 0 0 0 -.77-.36 1 1 0 0 0 -.64.23 1 1 0 0 0 -.13 1.41l3.63 4.36h-11.86a1 1 0 0 0 0 2z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Poster;
