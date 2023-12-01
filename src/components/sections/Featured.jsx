import React from "react";
// import "./featuredcategories.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Banner from "../cards/Banner";
import Poster from "../cards/Poster";

//Fetured component render belt of swiper and posters of products

const SectionFeaturedCategories = () => {
  const [isWidth, setIsWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setIsWidth(window.innerWidth);
  };

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);

  const slides =
    isWidth < 700
      ? 3
      : isWidth < 800
      ? 4
      : isWidth < 950
      ? 5
      : isWidth < 1100
      ? 7
      : 10;

  return (
    <div className="px-4 mt-6 pt-14 font-Quicksand max-w-[550px] md:max-w-[770px] lg:max-w-full mx-auto">
      <div className="flex justify-start md:items-end">
        <h3 className="text-3xl text-gray-800 font-bold w-[200px] lg:w-[350px]">
          Featured Categories
        </h3>
        <div className=" md:w-[380px] flex justify-center items-center flex-col md:flex-row md:justify-between leading-none font-medium lg:font-bold text-gray-700 text-sm ">
          <div className="flex flex-col sm:flex-row justify-between items-center w-[190px]">
            <a className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Cake & Milk
            </a>
            <a className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Coffe & Teas
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center w-[170px]">
            <a className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Pet Foods
            </a>
            <a className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Vegetables
            </a>
          </div>
        </div>
      </div>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={slides}
        className="my-10"
        spaceBetween={isWidth > 700 ? "10px" : "20px"}
      >
        <SwiperSlide>
          <Banner
            name="Vegetables"
            quantity="72"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Strawberry"
            quantity="36"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Snak"
            quantity="56"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Black Palm"
            quantity="134"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Custard Apple"
            quantity="34"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Grapes"
            quantity="21"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-6.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Oranges"
            quantity="43"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-7.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Fruit"
            quantity="10"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-8.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Red Apple"
            quantity="54"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Fruit"
            quantity="12"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-10.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Peach"
            quantity="14"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Organic Kiwi"
            quantity="28"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Cake & Milk"
            quantity="26"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Coffe & Tea"
            quantity="86"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            name="Headphones"
            quantity="87"
            img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-15.png"
          />
        </SwiperSlide>
      </Swiper>
      <div className="gap-1 md:gap-5 flex flex-col md:flex-row w-[100%] h-[100%]">
        <Poster
          title="Everyday Fresh & Clean with Our Products"
          image="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png"
        />
        <Poster
          title="Make your Breakfast Healthy and Easy"
          image="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png"
        />
        {isWidth < 768 || isWidth > 1024 ? (
          <Poster
            title="The best Organic Products Online"
            image="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SectionFeaturedCategories;
