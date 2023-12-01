import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [home, setHome] = useState(false);
  const [shop, setShop] = useState(false);
  const [vendors, setVendors] = useState(false);
  const [megaMenu, setMegaMenu] = useState(false);
  const [blog, setBlog] = useState(false);
  const [pages, setPages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeaderFixed(scrollPosition > 220);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`${
          isHeaderFixed && "fixed top-0 z-50 bg-white"
        } w-full border-gray-200 border-b hidden lg:flex justify-between py-4 px-4 `}
      >
        <div className="flex w-[80%] justify-start items-centerw-[11%]">
          <button className="header-btn min-w-[210px] w-[17%] bg-green-600 text-white text-xs flex items-center px-5 py-3 rounded font-semibold">
            <svg
              viewBox="0 0 1024 1024"
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="#fff" stroke-linejoin="round" stroke-width="1.5">
                <path
                  d="m464 144h-304c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16v-304c0-8.8-7.2-16-16-16zm-52 268h-200v-200h200zm452-268h-304c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16v-304c0-8.8-7.2-16-16-16zm-52 268h-200v-200h200zm-348 132h-304c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16v-304c0-8.8-7.2-16-16-16zm-52 268h-200v-200h200zm452-268h-304c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16v-304c0-8.8-7.2-16-16-16zm-52 268h-200v-200h200z"
                  fill="#fff"
                />
              </g>
            </svg>
            Browse All Categories
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m12 14.5a.74.74 0 0 1 -.53-.22l-3.47-3.5a.75.75 0 0 1 1-1.06l3 3 3-3a.75.75 0 0 1 1 1.06l-3.5 3.5a.74.74 0 0 1 -.5.22z"
                fill="#fff"
              />
            </svg>
          </button>
          <ul className="header-menu w-[83%]  flex items-center justify-between text-base font-semibold px-5">
            <li className="li-svg flex items-center justify-start hover:text-green-700 w-[11%] mr-2">
              <img
                className="mr-2"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-hot.svg"
                alt=""
              />
              Deal
            </li>

            <li
              className="relative cursor-pointer flex items-center justify-center hover:text-green-700 w-[11%]"
              onMouseEnter={() => setHome(true)}
              onMouseLeave={() => setHome(false)}
            >
              Home
              <svg
                viewBox="0 0 24 24"
                height="16"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 14.5a.74.74 0 0 1 -.53-.22l-3.47-3.5a.75.75 0 0 1 1-1.06l3 3 3-3a.75.75 0 0 1 1 1.06l-3.5 3.5a.74.74 0 0 1 -.5.22z" />
              </svg>
              {home && (
                <div className="absolute w-[100px] flex flex-col items-center p-5 text-gray-700 top-6 bg-white z-50 border rounded-lg">
                  <div className="border-b">Item 1</div>
                  <div className="border-b">Item 2</div>
                  <div className="border-b">Item 3</div>
                </div>
              )}
            </li>

            <li className=" flex justify-center w-[11%]">About</li>

            <li
              className="relative cursor-pointer flex items-center justify-center hover:text-green-700 w-[11%]"
              onMouseEnter={() => setShop(true)}
              onMouseLeave={() => setShop(false)}
            >
              Shop
              <svg
                viewBox="0 0 24 24"
                height="16"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 14.5a.74.74 0 0 1 -.53-.22l-3.47-3.5a.75.75 0 0 1 1-1.06l3 3 3-3a.75.75 0 0 1 1 1.06l-3.5 3.5a.74.74 0 0 1 -.5.22z" />
              </svg>
              {shop && (
                <div className="absolute w-[100px] flex flex-col items-center p-5 text-gray-700 top-6 bg-white z-50 border rounded-lg">
                  <div className="border-b">Item 1</div>
                  <div className="border-b">Item 2</div>
                  <div className="border-b">Item 3</div>
                </div>
              )}
            </li>

            <li
              className="relative cursor-pointer flex items-center justify-center hover:text-green-700 w-[11%]"
              onMouseEnter={() => setVendors(true)}
              onMouseLeave={() => setVendors(false)}
            >
              Vendors
              <svg
                viewBox="0 0 24 24"
                height="16"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 14.5a.74.74 0 0 1 -.53-.22l-3.47-3.5a.75.75 0 0 1 1-1.06l3 3 3-3a.75.75 0 0 1 1 1.06l-3.5 3.5a.74.74 0 0 1 -.5.22z" />
              </svg>
              {vendors && (
                <div className="absolute w-[100px] flex flex-col items-center p-5 text-gray-700 top-6 bg-white z-50 border rounded-lg">
                  <div className="border-b">Item 1</div>
                  <div className="border-b">Item 2</div>
                  <div className="border-b">Item 3</div>
                </div>
              )}
            </li>

            <li
              className="relative cursor-pointer flex items-center justify-center hover:text-green-700 w-[130px]"
              onMouseEnter={() => setMegaMenu(true)}
              onMouseLeave={() => setMegaMenu(false)}
            >
              Mega Menu
              <svg
                viewBox="0 0 24 24"
                height="16"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 14.5a.74.74 0 0 1 -.53-.22l-3.47-3.5a.75.75 0 0 1 1-1.06l3 3 3-3a.75.75 0 0 1 1 1.06l-3.5 3.5a.74.74 0 0 1 -.5.22z" />
              </svg>
              {megaMenu && (
                <div className="absolute lg:-right-80 xl:-right-96  xl:w-[1150px]  w-[950px] flex items-center p-5 text-gray-700 top-6 bg-white z-50 border rounded-lg">
                  <div className="w-[100%] flex">
                    <div className=" w-[100%] flex gap-1 justify-between">
                      <div className="flex text-xs flex-col text-gray-500 space-y-4">
                        <h4 className="text-base text-green-600 hover:text-yellow-400">
                          Fruit & Vegetables
                        </h4>
                        <div className="hover:text-green-500 hover:text-bold">
                          Meat & Poultry
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Fresh Vegetables
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Herbs & Seasonings
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Cuts and Sprouts
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Exotic Fruits & Veggies
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Pakaged Produce
                        </div>
                      </div>

                      <div className="flex text-xs flex-col text-gray-500 space-y-4">
                        <h4 className="text-base text-green-600 hover:text-yellow-400">
                          Breakfast & Dairy
                        </h4>
                        <div className="hover:text-green-500 hover:text-bold">
                          Milk & Flavoured Milk
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Butter and Margarine
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Eggs Substitutes
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Marmalades
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Sour Cream and Dips
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Tea & Kombucha
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Cheese
                        </div>
                      </div>

                      <div className="flex text-xs flex-col text-gray-500 space-y-4">
                        <h4 className="text-base text-green-600 hover:text-yellow-400">
                          Meat & Seafood
                        </h4>
                        <div className="hover:text-green-500 hover:text-bold">
                          Breakfast & Suasage
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Dinner sausage
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Dinner Sausage
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Chicken
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Sliced Deli Meat
                        </div>
                        <div className="hover:text-green-500 hover:text-bold">
                          Wild Caught and Shellfish
                        </div>
                      </div>

                      <div className="relative ">
                        <img
                          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                          alt=""
                        />
                        <div className="absolute top-5 left-5 space-y-4">
                          <span className="text-lg font-light">HOT DEALS</span>
                          <p className="text-2xl w-[150px] leading-6">
                            Don't miss Trending
                          </p>
                          <p className="text-3xl text-lime-600 font bold">
                            Save to 50%
                          </p>
                          <button className="text-white bg-green-500 hover:bg-red-400 px-6 py-2 rounded-full">
                            Shop now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li
              className="relative cursor-pointer flex items-center justify-center hover:text-green-700 w-[11%]"
              onMouseEnter={() => setBlog(true)}
              onMouseLeave={() => setBlog(false)}
            >
              Blog
              <svg
                viewBox="0 0 24 24"
                height="16"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 14.5a.74.74 0 0 1 -.53-.22l-3.47-3.5a.75.75 0 0 1 1-1.06l3 3 3-3a.75.75 0 0 1 1 1.06l-3.5 3.5a.74.74 0 0 1 -.5.22z" />
              </svg>
              {blog && (
                <div className="absolute w-[100px] flex flex-col items-center p-5 text-gray-700 top-6 bg-white z-50 border rounded-lg">
                  <div className="border-b">Item 1</div>
                  <div className="border-b">Item 2</div>
                  <div className="border-b">Item 3</div>
                </div>
              )}
            </li>

            <li
              className="relative cursor-pointer flex items-center justify-center hover:text-green-700 w-[11%]"
              onMouseEnter={() => setPages(true)}
              onMouseLeave={() => setPages(false)}
            >
              Pages
              <svg
                viewBox="0 0 24 24"
                height="16"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 14.5a.74.74 0 0 1 -.53-.22l-3.47-3.5a.75.75 0 0 1 1-1.06l3 3 3-3a.75.75 0 0 1 1 1.06l-3.5 3.5a.74.74 0 0 1 -.5.22z" />
              </svg>
              {pages && (
                <div className="absolute w-[100px] flex flex-col items-center p-5 text-gray-700 top-6 bg-white z-50 border rounded-lg">
                  <div className="border-b">Item 1</div>
                  <div className="border-b">Item 2</div>
                  <div className="border-b">Item 3</div>
                </div>
              )}
            </li>

            <li>Contact</li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center justify-end gap-4 w-[20%]  h-full text-green-600 ">
          <svg
            height="35"
            viewBox="0 0 16 16"
            width="35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m14.82 8c-.309-.851-.969-1.511-1.799-1.813l-.021-1.687c0-2.5-2.47-4.5-5.5-4.5s-5.5 2-5.5 4.5v1.68c-1.173.423-1.996 1.525-2 2.82v1c0 1.657 1.343 3 3 3h1v-7h-1v-1.5c0-1.93 2-3.5 4.5-3.5s4.5 1.57 4.5 3.5v1.5h-1v7h1c1.657 0 3-1.343 3-3v1.73c0 1.806-1.464 3.27-3.27 3.27h-1.73c0-.552-.448-1-1-1h-1c-.552 0-1 .448-1 1s.448 1 1 1h3.73c2.358 0 4.27-1.912 4.27-4.27v-3.73z"
              fill="#444"
            />
          </svg>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">1900-888</h2>
            <span className="text-xs font-medium text-gray-500">
              24/7 Support Centre
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
