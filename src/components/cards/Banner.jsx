import React from "react";

const Mdbanner = ({ name, img, quantity }) => {
  return (
    <div className="flex flex-col justify-center items-center border rounded-lg bg-green-50 py-4 px-2 text-center  max-w-[px150px] h-[180px] text-gray-800 hover:text-green-600 hover:border hover:border-green-300">
      <img className="w-[75px]" src={img} alt="" />
      <p className="font-bold">{name}</p>
      <span className="text-gray-500">{quantity} items</span>
    </div>
  );
};

export default Mdbanner;
