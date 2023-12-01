import React from "react";
import SmCard from "./SmCard";

const OPCard = ({ name, imageOne, imageTwo, imageThree }) => {
  return (
    <div className="flex flex-col mt-32 w-[100%]">
      <div className="border-b">
        <h4 className="text-lg md:text-xl inline-block text-gray-700 font-bold border-b-2 border-gray-300 py-2">
          {name}
        </h4>
      </div>
      <div className="flex flex-col gap-4 md:gap-1">
        <SmCard title="Nestle Original Coffee-Mate Creamer" img={imageOne} />
        <SmCard
          title="Organic Cage-Free Grade A Large Brown Eggs"
          img={imageTwo}
        />
        <SmCard
          title="Naturally Flavoured Cinnamon Vannila Light Roast Coffee"
          img={imageThree}
        />
      </div>
    </div>
  );
};

export default OPCard;
