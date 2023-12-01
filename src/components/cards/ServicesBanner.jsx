import React from "react";
// import "./smallbanner.css";

const SmallBanner = ({ title, service, image }) => {
  return (
    <div className="w-[100%] lg:w-[100px] flex-grow flex gap-4 items-center rounded-lg bg-gray-200 px-5 py-4">
      <img className="w-[50px] lg:w-[30px] rounded-lg" src={image} alt="" />
      <div className="flex flex-col ">
        <h3 className="text-gray-900 text-lg lg:text-sm font-semibold leading-none">
          {title}
        </h3>
        <p className="text-gray-500 text-lg lg:text-sm font-medium ">
          {service}
        </p>
      </div>
    </div>
  );
};

export default SmallBanner;
