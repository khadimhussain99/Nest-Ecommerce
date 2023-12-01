import React, { useState } from "react";
import Product from "../cards/Product";
import ProductData from "../../pages/product";

// Popular component renders product cards

const SectionPopularProducts = () => {
  const data = ProductData.slice(0, 9);

  const [isScreen, setIsScreen] = useState(window.innerWidth);

  const handleResize = () => {
    setIsScreen(window.innerWidth);
  };

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);

  const products = data.map((prod) => {
    return (
      <Product
        title={prod.title}
        type={prod.cat}
        price={prod.price1}
        redprice={prod.price2}
        by={prod.by}
        imageOne={prod.img1}
        imageTwo={prod.img2}
      />
    );
  });

  return (
    <div className="flex flex-col px-4 mt-4 font-Quicksand max-w-[550px] md:max-w-[770px] lg:max-w-full mx-auto">
      <div className="flex flex-col justify-between md:flex-row items-start">
        <h1 className="font-bold text-2xl text-gray-800">Popular Products</h1>
        <div className="flex justify-start text-gray-500 text-xs font-bold gap-2 my-4">
          <a className="cursor-pointer hover:text-green-600 hover:font-bold">
            All
          </a>
          <a className="cursor-pointer hover:text-green-600 hover:font-bold">
            Milk & Dairies
          </a>
          <a className="cursor-pointer hover:text-green-600 hover:font-bold">
            Coffe & Teas
          </a>
          <a className="cursor-pointer hover:text-green-600 hover:font-bold">
            Pet Foods
          </a>
          <a className="cursor-pointer hover:text-green-600 hover:font-bold">
            Meats
          </a>
          <a className="cursor-pointer hover:text-green-600 hover:font-bold">
            Vegetables
          </a>
          <a className="cursor-pointer hover:text-green-600 hover:font-bold">
            Fruits
          </a>
        </div>
      </div>
      <div className="flex flex-wrap w-full items-center justify-center gap-5">
        {products}
        {isScreen >= 1024 && (
          <Product
            name="Haagen-Dazs Caramel Cone Ice Cream Ketchup"
            type="Creams"
            price="$22"
            redprice="$24"
            by="Tyson"
            imageOne="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg"
            imageTwo="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-2.jpg"
          />
        )}
      </div>
    </div>
  );
};

export default SectionPopularProducts;
