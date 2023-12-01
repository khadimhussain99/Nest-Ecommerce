import React from "react";
import Home from "../pages/Home";

import { Routes, Route } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<ProductDetail />} />
    </Routes>
  );
};

export default Navigation;
