import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//HeroTop component renders top hero slider which slides in every 1 sec

const HeroTop = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  };

  return (
    <div className="max-w-[550px] bg-transparent border-none md:max-w-[770px] lg:max-w-full h-[320px] lg:h-[420px] xl:h-[480px] mx-auto">
      <Slider
        className="overflow-hidden outline-none border-none"
        {...settings}
      >
        <div className="main-2 rounded-3xl relative px-4 py-6">
          <img
            className="w-[100%] h-[320px]  rounded-3xl lg:h-[420px] xl:h-[480px]"
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-2.png"
            alt=""
          />
          <div className="absolute top-12 lg:top-20 xl:pt-8 left-10 lg:left-20 xl:pl-6 pt-4">
            <h1 className="text-gray-900 text-4xl lg:text-6xl w-[70%] font-bold font-Quicksand">
              Fresh Vegetables Big Discounts
            </h1>
            <p className="text-gray-400 text-xl lg:text-3xl mt-5 xl:mt-8 font-Quicksand font-medium">
              Save upto 50% off on your first order
            </p>
            <div className="slider-search-bar flex justify-between mt-8 lg:mt-12 xl:mt-16 w-[85%] max-w-[450px] bg-white rounded-full ">
              <div className="w-full flex p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  width={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.15,2.86a2.89,2.89,0,0,0-3-.71L4,6.88a2.9,2.9,0,0,0-.12,5.47l5.24,2h0a.93.93,0,0,1,.53.52l2,5.25A2.87,2.87,0,0,0,14.36,22h.07a2.88,2.88,0,0,0,2.69-2L21.85,5.83A2.89,2.89,0,0,0,21.15,2.86ZM20,5.2,15.22,19.38a.88.88,0,0,1-.84.62.92.92,0,0,1-.87-.58l-2-5.25a2.91,2.91,0,0,0-1.67-1.68l-5.25-2A.9.9,0,0,1,4,9.62a.88.88,0,0,1,.62-.84L18.8,4.05A.91.91,0,0,1,20,5.2Z"
                    fill="#7e7e7e"
                  />
                </svg>
                <input
                  className="ml-2 outline-none"
                  type="email"
                  name=""
                  placeholder="Your email address"
                />
              </div>
              <button className="w-[30%] bg-green-600 text-white px-6 rounded-full py-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="main-2 mx-auto my-0 h-[320px] lg:h-[420px] rounded-3xl relative px-4 py-6">
          <img
            className="w-[100%] h-[320px] lg:h-[420px] xl:h-[480px] rounded-3xl"
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-1.png"
            alt=""
          />
          <div className="absolute top-12 lg:top-20 xl:pt-8 left-10 lg:left-20 xl:pl-6  pt-4">
            <h1 className="text-gray-900 text-4xl lg:text-6xl w-[80%] font-bold font-Quicksand">
              Don't Miss Amazing Grocery Deals
            </h1>
            <p className="text-gray-400 text-xl lg:text-3xl mt-5 xl:mt-8 font-Quicksand font-medium">
              Sign Up for the daily newslater
            </p>
            <div className="slider-search-bar flex justify-between mt-8 lg:mt-12 xl:mt-16 w-[85%] max-w-[450px] bg-white rounded-full ">
              <div className="w-[full] flex p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={24}
                  width={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.15,2.86a2.89,2.89,0,0,0-3-.71L4,6.88a2.9,2.9,0,0,0-.12,5.47l5.24,2h0a.93.93,0,0,1,.53.52l2,5.25A2.87,2.87,0,0,0,14.36,22h.07a2.88,2.88,0,0,0,2.69-2L21.85,5.83A2.89,2.89,0,0,0,21.15,2.86ZM20,5.2,15.22,19.38a.88.88,0,0,1-.84.62.92.92,0,0,1-.87-.58l-2-5.25a2.91,2.91,0,0,0-1.67-1.68l-5.25-2A.9.9,0,0,1,4,9.62a.88.88,0,0,1,.62-.84L18.8,4.05A.91.91,0,0,1,20,5.2Z"
                    fill="#7e7e7e"
                  />
                </svg>
                <input
                  className="ml-2 outline-none"
                  type="email"
                  name=""
                  placeholder="Your email address"
                />
              </div>
              <button className="w-[30%] bg-green-600 text-white px-6 rounded-full py-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroTop;
