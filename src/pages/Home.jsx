import React from "react";
import HeroTop from "../components/sections/HeroTop";
import Featured from "../components/sections/Featured";
import Popular from "../components/sections/Popular";
import Sells from "../components/sections/Sells";
import Deals from "../components/sections/Deals";
import OfferProducts from "../components/sections/OfferProducts";

//home component render sections between header and footer

const Home = () => {
  return (
    <div>
      <HeroTop />
      <Featured />
      <Popular />
      <Sells />
      <Deals />
      <OfferProducts />
    </div>
  );
};

export default Home;
