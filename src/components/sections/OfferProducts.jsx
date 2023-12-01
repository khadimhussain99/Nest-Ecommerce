import React, { useState } from "react";
import DetailCards from "../cards/DetailCards";

//DetailProduct component render max-4 column of discounted 3 products in each column

const DetailProducts = () => {
  const [isWidth, setIsWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setIsWidth(window.innerWidth);
  };

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);

  return (
    <div className="flex flex-col md:flex-row md:gap-5 lg:gap-4 font-Quicksand max-w-[550px] md:max-w-[770px] lg:max-w-[100%] xl:max-w-[100%] mx-auto px-4">
      <DetailCards
        name="Top Selling"
        imageOne="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-1.jpg"
        imageTwo="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-2.jpg"
        imageThree="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
      />
      <DetailCards
        name="Trending Products"
        imageOne="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-1.jpg"
        imageTwo="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-2.jpg"
        imageThree="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
      />
      {isWidth >= 1024 && (
        <DetailCards
          name="Recently Added"
          imageOne="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-1.jpg"
          imageTwo="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-2.jpg"
          imageThree="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
        />
      )}
      {isWidth >= 1280 && (
        <DetailCards
          name="Top Selling"
          imageOne="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-1.jpg"
          imageTwo="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-2.jpg"
          imageThree="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
        />
      )}
    </div>
  );
};

export default DetailProducts;
