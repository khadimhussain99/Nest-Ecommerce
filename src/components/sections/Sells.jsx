import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MdCard from "../cards/MdCard";
import Product from "../../pages/product";

//Sells component render poster and swiper of 3 products in mobile screen and 4 products in tab or laptop screen

const Sells = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth);

  const handleResize = () => {
    setIsMobile(window.innerWidth);
  };

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);

  const slides = isMobile < 768 ? 3 : 4;

  return (
    <div className="px-4 mt-6 pt-14 font-Quicksand max-w-[550px] md:max-w-[770px] lg:max-w-full mx-auto">
      <div className="flex justify-between items-end">
        <h2 className="w-[180px] md:w-[250px] text-gray-700 text-3xl font-bold">
          Daily Best Sells
        </h2>
        <div className="flex gap-4 text-xs text-gray-700 font-bold">
          <button className="cursor-pointer hover:text-green-600">
            Featured
          </button>
          <button className="cursor-pointer hover:text-green-600">
            Popular
          </button>
          <button className="cursor-pointer hover:text-green-600">
            New Added
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="hidden lg:flex items-center relative rounded-lg w-[30%] max-w-[500px]">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-4.png"
            className="w-[100%] h-[480px] rounded-lg"
            alt=""
          />
          <div className=" absolute top-14 left-10">
            <h2 className="text-4xl text-gray-700  font-bold">
              Bring nature into your home
            </h2>
            <button className="flex items-center w-[130px] px-4 py-2 rounded-md gap-1 text-white text-sm font-bold bg-green-600 hover:bg-yellow-400 mt-20">
              Shop Now
              <svg
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
            </button>
          </div>
        </div>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={slides}
          className="my-8 lg:w-[70%] md:h-[470px]"
          spaceBetween={"10px"}
        >
          <SwiperSlide className="bs-swiper-slider">
            {/* <Product
              cardFor="deals-card"
              name="Seeds of Change Organic Quinoa, Brown, & Red Rice"
              type="Snack"
              price="32"
              redprice="28"
              imageOne="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
            /> */}
            <MdCard
              name="Seeds of Change Organic Quinoa, Brown, & Red Rice"
              type="Snack"
              price="32"
              redPrice="28"
              image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="bs-swiper-slider">
            {/* <Product
              cardFor="display-card"
              name="Seeds of Change Organic Quinoa, Brown, & Red Rice"
              type="Snack"
              price="32"
              redprice="28"
              imageOne="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
            /> */}
            <MdCard
              name="All Natural Italian-Style Chicken Meatballs"
              type="Hodo Foods"
              price="55"
              redPrice="52"
              image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="bs-swiper-slider">
            {/* <Product
              cardFor="deals-card"
              name="Seeds of Change Organic Quinoa, Brown, & Red Rice"
              type="Snack"
              price="32"
              redprice="28"
              imageOne="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg"
            /> */}
            <MdCard
              name="Angie's Boomchickapop Sweet & Salty Kettle"
              type="Snack"
              price="52"
              redPrice="48"
              image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="bs-swiper-slider">
            <MdCard
              name="Foster Farms Takeout Crispy Classic Buffalo"
              type="Vegetables"
              price="19"
              redPrice="17"
              image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="bs-swiper-slider">
            <MdCard
              name="Blue Diamonds Almonds Lighty Salted Vegetables"
              type="Pet Foods"
              price="25"
              redPrice="23"
              image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide className="bs-swiper-slider">
            <MdCard
              name="Chobani Complete Vanilla Greek Yogurt"
              type="Hodo Foods"
              price="25"
              redPrice="24"
              image="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Sells;
