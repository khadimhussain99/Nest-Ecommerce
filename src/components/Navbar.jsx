import React from "react";
// import './Navbar.css'

const Navbar = () => {
  return (
    <div className="flex flex-col border-b border-gray-200 w-full">
      {/* Top bar */}
      <div className="hidden sm:flex justify-between w-full h-8 text-xs border-gray-200 border-b">
        <ul className="left hidden lg:flex justify-start items-center">
          <li className="text-gray-500 px-2 border-gray-400 h-3 leading-none  border-r text-xs">
            About Us
          </li>
          <li className="text-gray-500 px-2 border-gray-400 h-3 leading-none  border-r text-xs">
            My Account
          </li>
          <li className="text-gray-500 px-2 border-gray-400 h-3 leading-none  border-r text-xs">
            Wishlist
          </li>
          <li className="text-gray-500 px-2 h-3 leading-none  text-xs ">
            Order Tracking
          </li>
        </ul>
        <div className="res-top lg:hidden w-full h-full bg-green-600 px-2 py-3 text-sm text-white flex justify-center items-center">
          Grand opening, <span className="font-bold mx-1">up to 15%</span> off
          all items. Only
          <span className="font-bold mx-1"> 3 days </span> left
        </div>
        <ul className="right hidden lg:flex justify-start items-center">
          <li className="text-gray-500 px-2 h-3 leading-none " id="diff-help">
            Need help? Call Us:
          </li>
          <li
            className="text-green-500 font-semibold px-2 border-gray-400 h-3 leading-none  border-r text-xs"
            id="diff-phone"
          >
            +1800900
          </li>
          <li className="text-gray-500 px-2 border-gray-400 h-3 leading-none  border-r text-xs">
            English
          </li>
          <li className="text-gray-500 px-2 h-3 leading-none  text-xs">Usd</li>
        </ul>
      </div>

      {/* navbar */}
      <div className="w-full max-w-[550px] md:max-w-[770px] lg:max-w-full  mx-auto px-3 flex justify-between lg:justify-start items-center py-3 lg:py-7">
        <svg
          className="nav-res-burger w-12 h-8 lg:hidden"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 11a1 1 0 1 0 0 2zm14 2a1 1 0 1 0 0-2zM5 6a1 1 0 0 0 0 2zm14 2a1 1 0 1 0 0-2zM5 16a1 1 0 1 0 0 2zm14 2a1 1 0 1 0 0-2zM5 13h14v-2H5zm0-5h14V6H5zm0 10h14v-2H5z"
            fill="currentColor"
          />
        </svg>

        <div>
          <img
            className="w-[120px] md:w-[130px] lg:w-[200px]"
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
            alt=""
          />
        </div>

        <div className="flex lg:hidden">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-heart.svg"
            alt=""
            className="mr-4"
          />
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-cart.svg"
            alt=""
          />
        </div>

        <div className="w-full hidden lg:flex ml-10 xl:justify-between">
          <div className="w-[60%] lg:w-[90%] xl:w-[60%] border-green-300 border rounded lg:flex items-center px-4 py-6 h-12">
            <div className="w-[20%] min-w-[130px]">
              <button className="flex items-center font-semibold text-sm border-gray-300 border-r pr-2">
                All Categories
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 14.5a.74.74 0 0 1 -.53-.22l-3.47-3.5a.75.75 0 0 1 1-1.06l3 3 3-3a.75.75 0 0 1 1 1.06l-3.5 3.5a.74.74 0 0 1 -.5.22z" />
                </svg>
              </button>
            </div>
            <div className="w-[80%] flex justify-between">
              <input
                type="text"
                placeholder="search for items..."
                className="placeholder-gray-600 px-4 border-none outline-none bg-transparent"
              />
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#7e7e7e" stroke-linejoin="round" stroke-width="1.5">
                  <path d="m17.5 17.5 4.5 4.5" stroke-linecap="round" />
                  <path d="m20 11c0-4.97056-4.0294-9-9-9-4.97056 0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9 4.9706 0 9-4.0294 9-9z" />
                </g>
              </svg>
            </div>
          </div>

          <ul className="lg:hidden xl:flex items-center justify-between">
            <li className="flex items-end ml-6 ">
              {" "}
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-compare.svg"
                alt=""
                className="w-[20px] h-[20px]"
              />
              Compare
            </li>
            <li className="flex items-end ml-6 gap-2">
              {" "}
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-heart.svg"
                alt=""
                className="w-[20px] h-[20px]"
              />
              Wishlist
            </li>
            <li className="flex items-end ml-6 gap-2">
              {" "}
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-cart.svg"
                alt=""
                className="w-[20px] h-[20px]"
              />
              Cart
            </li>
            <li className="flex items-end ml-6">
              {" "}
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-user.svg"
                alt=""
                className="w-[20px] h-[20px]"
              />
              Account
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
