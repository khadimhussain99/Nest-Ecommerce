import React from "react";
import HeroBottom from "./HeroBottom";
import StoreDetails from "./StoreDetails";

const Footer = () => {
  return (
    <>
      <HeroBottom />
      <StoreDetails />
      <footer className="flex justify-between font-Quicksand max-w-[550px] md:max-w-[770px] lg:max-w-full mx-auto px-4 border-t">
        <div className="py-8">
          <p className="text-gray-500 text-sm">
            © 2023, <spann className="text-green-500 font-bold">Nest</spann>{" "}
            -HTML Ecommerce Template <br /> All rights reserved
          </p>
        </div>

        <div className="hidden lg:flex lg:gap-5 xl:gap-0 xl:flex-col">
          <div className="flex items-center gap-5">
            <img
              className="w-[30px]"
              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/phone-call.svg"
              alt=""
            />
            <div>
              <p className="text-2xl font-bold leading-none text-green-500">
                1900 - 6666
              </p>
              <span className="text-gray-500 text-sm">
                working 8:00 - 22:00
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img
              className="w-[30px]"
              src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/phone-call.svg"
              alt=""
            />
            <div>
              <p className="text-2xl font-bold leading-none  text-green-500">
                1900 - 8888
              </p>
              <spa className="text-gray-500 text-sm" n>
                24/7 Support Center
              </spa>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <h5 className="text-base font-bold text-gray-700">Follow Us</h5>
            <div className="flex justify-start items-center]">
              <div className="flex justify-center items-center w-[30px] h-[30px] bg-green-500 cursor-pointer rounded-full">
                <img
                  className="w-[20px]"
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-facebook-white.svg"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center w-[30px] h-[30px] bg-green-500 cursor-pointer rounded-full">
                <img
                  className="w-[20px]"
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-twitter-white.svg"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center w-[30px] h-[30px] bg-green-500 cursor-pointer rounded-full">
                <img
                  className="w-[20px]"
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-instagram-white.svg"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center w-[30px] h-[30px] bg-green-500 cursor-pointer rounded-full">
                <img
                  className="w-[20px]"
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-pinterest-white.svg"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center w-[30px] h-[30px] bg-green-500 cursor-pointer rounded-full">
                <img
                  className="w-[20px]"
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-youtube-white.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Upto 50% discount on your first subscribe
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
