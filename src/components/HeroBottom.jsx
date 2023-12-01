import React from "react";
import ServicesBanner from "./cards/ServicesBanner";

//It renders bottom hero card

const HeroBottom = () => {
  return (
    <div className="flex flex-col  md:gap-5 lg:gap-4 font-Quicksand max-w-[550px] md:max-w-[770px] lg:max-w-[100%] xl:max-w-[100%] mx-auto px-4 mt-10">
      <div className="relative flex justify-end items-end w-[100%] h-[300px] md:h-[400px] lg:h-[450px] bg-blue-100 rounded-xl px-10 md:px-16 pt-16 md:pt-14 ">
        <div className="absolute top-10 left-8 md:top-16 md:left-10 lg:top-16 lg:left-20 flex flex-col justify-between">
          <div className="flex flex-col justify-start items-start">
            <h1 className="w-[330px] text-gray-700 text-2xl md:text-4xl lg:text-4xl lg:w-[500px] md:w-[80%] font-bold">
              Stay home & get your daily needs from our shop
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mt-5 text-gray-500 font-medium ">
              Start You'r Daily Shopping with{" "}
              <span className="text-green-500 font-semibold">Nest Mart</span>
            </p>
            <div className="flex bg-white rounded-full mt-5 md:mt-10">
              <div className="flex w-[230px] md:w-[350px] items-center gap-2 md:gap-5 px-3 md:px-6 md:py-5 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={18}
                  width={18}
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.15,2.86a2.89,2.89,0,0,0-3-.71L4,6.88a2.9,2.9,0,0,0-.12,5.47l5.24,2h0a.93.93,0,0,1,.53.52l2,5.25A2.87,2.87,0,0,0,14.36,22h.07a2.88,2.88,0,0,0,2.69-2L21.85,5.83A2.89,2.89,0,0,0,21.15,2.86ZM20,5.2,15.22,19.38a.88.88,0,0,1-.84.62.92.92,0,0,1-.87-.58l-2-5.25a2.91,2.91,0,0,0-1.67-1.68l-5.25-2A.9.9,0,0,1,4,9.62a.88.88,0,0,1,.62-.84L18.8,4.05A.91.91,0,0,1,20,5.2Z"
                    fill="#7e7e7e"
                  />
                </svg>
                <input
                  className="outline-none"
                  type="email"
                  placeholder="Your email address"
                />
              </div>
              <button className="rounded-full bg-green-600 px-3 py-2 md:px-10 md:py-5 text-sm md:text-base font-bold text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <img
          className="w-[220px] md:h-[200px] md:w-[350px] lg:w-[550px] lg:h-[350px]"
          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-9.png"
          alt=""
        />
      </div>
      <div className=" w-[100%] flex flex-col md:flex-row gap-2 lg:gap-4 mt-10 flex-wrap">
        <div className="w-[100%] lg:w-[32%] flex flex-col sm:flex-row lg:flex-row gap-2 lg:gap-4">
          <ServicesBanner
            title="Best prices & offers"
            service="Orders $50 or more"
            image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg"
          />
          <ServicesBanner
            title="Free delivery"
            service="24/7 amazing services"
            image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg"
          />
        </div>
        <div className="w-[100%] lg:w-[32%] flex flex-col sm:flex-row lg:flex-row gap-2 lg:gap-4">
          <ServicesBanner
            title="Great dail deal"
            service="When you sign up"
            image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg"
          />
          <ServicesBanner
            title="Wide assortment"
            service="Mega Discounts"
            image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg"
          />
        </div>
        <div className="w-[100%] lg:w-[32%] flex flex-col sm:flex-row gap-2 lg:gap-4">
          <ServicesBanner
            title="Easy returns"
            service="within 30 days"
            image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg"
          />
          <ServicesBanner
            title="Wide assortment"
            service="Mega Discounts"
            image="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
