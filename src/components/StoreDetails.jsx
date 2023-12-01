import React from "react";

//Store details and contact

const StoreDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row md:gap-5 lg:gap-4 font-Quicksand max-w-[550px] md:max-w-[770px] lg:max-w-[100%] xl:max-w-[100%] mx-auto px-4 my-10">
      <div className="flex">
        <div className="flex flex-col w-[250px]">
          <img
            className="w-[140px]"
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
            alt=""
          />
          <p className="py-6 text-lg font-medium text-gray-900 leading-6">
            Awsome grocery store website template
          </p>
          <div className="space-y-4">
            <div className="flex items-start leading-none gap-2">
              <img
                className="w-[15px] h-[15px]"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-location.svg"
                alt=""
              />
              <strong className="hidden">Address:</strong>
              <p className="text-gray-900 leading-6">
                5171W Campbell Ave undefined Kent, Utah 53127 United States
              </p>
            </div>
            <div className="flex items-start leading-none gap-2">
              <img
                className="w-[15px] h-[15px]"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-contact.svg"
                alt=""
              />
              <strong className="hidden">Call Us:</strong>
              <p className="text-gray-900">(+91)-540-025-126553</p>
            </div>
            <div className="flex items-start leading-none gap-2">
              <img
                className="w-[15px] h-[15px]"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-email-2.svg"
                alt=""
              />
              <strong className="hidden">Email:</strong>
              <p className="text-gray-900">sale@Nest.com</p>
            </div>
            <div className="flex items-start leading-none gap-2">
              <img
                className="w-[15px] h-[15px]"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-clock.svg"
                alt=""
              />
              <strong className="hidden">Hours:</strong>
              <p className="text-gray-900">10:00 - 18:00, Mon - Sat</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 text-base text-gray-900">
          <div className="text-sm text-gray-600">Company</div>
          <div>About Us </div>
          <div>Delivery Information </div>
          <div>Privacy Policy </div>
          <div>Terms & Condition </div>
          <div>Contact Us </div>
          <div>Support Center </div>
          <div>Careers </div>
        </div>
      </div>

      <div className="lg:w-[55%] flex flex-col justify-between mt-8 lg:-mt-4 lg:flex-row">
        <div className="lg:w-[100%] flex flex-col justify-center md:flex-row">
          <div className="md:w-[50%] flex flex-col items-start space-y-2 text-base ">
            <h4 className="text-2xl text-gray-700 font-bold py-4">Account</h4>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Sign In{" "}
            </div>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              View Cart{" "}
            </div>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Wish List{" "}
            </div>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Track My Order{" "}
            </div>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Help Ticket{" "}
            </div>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Shipping Details{" "}
            </div>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Compare Products{" "}
            </div>
          </div>

          <div className="md:w-[50%] flex flex-col items-start space-y-2 text-base ">
            <h4 className="text-2xl text-gray-700 font-bold py-4">Corporate</h4>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Becom{" "}
            </div>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Affiliate Program{" "}
            </div>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Farm Business{" "}
            </div>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Farm careers{" "}
            </div>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Out Supliers{" "}
            </div>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Accessibility{" "}
            </div>
            <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
              Promotions{" "}
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] flex flex-col items-start space-y-2 text-base">
          <h4 className="text-2xl text-gray-700 font-bold py-4">Popular</h4>
          <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
            Milk & Flavoured Milk{" "}
          </div>
          <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
            Butter and Margarine{" "}
          </div>
          <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
            Eggs Substitutes{" "}
          </div>
          <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
            Marmalades{" "}
          </div>
          <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
            Sour Cream and Dips{" "}
          </div>
          <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
            Tea & Kombucha{" "}
          </div>
          <div className="hover:text-green-600 hover:font-semibold cursor-pointer">
            Cheese{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
