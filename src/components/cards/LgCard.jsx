import React from "react";
// import './lgcard.css'

const MdCard = ({ image }) => {
  return (
    <div className="w-[100%] h-[400px] md:h-[300px] lg:h-[250px] lg:w-[280px] lg:flex-grow relative flex mt-24 md:mt-4 justify-center">
      <img
        className="w-[100%] md:w-[340px] h-[100%] rounded-2xl"
        src={image}
        alt=""
      />
      <div className="w-[100%] md:w-[320px] lg:w-[280px] absolute top-56 md:top-28 lg:top-20 flex flex-col gap-4">
        <div className="flex justify-center items-center gap-1">
          <div className="w-[60px] h-[70px] lg:w-[50px] lg:h-[60px] bg-white rounded-md  flex flex-col justify-center items-center">
            <h4 className="text-green-500 text-xl leading-none font-bold">
              130
            </h4>
            <p className="text-gray-500 text-sm font-semimedium">Days</p>
          </div>
          <div className="w-[60px] h-[70px] lg:w-[50px] lg:h-[60px] bg-white rounded-md  flex flex-col justify-center items-center">
            <h4 className="text-green-500 text-xl leading-none font-bold">
              19
            </h4>
            <p className="text-gray-500 text-sm font-semimedium">Hours</p>
          </div>
          <div className="w-[60px] h-[70px] lg:w-[50px] lg:h-[60px] bg-white rounded-md  flex flex-col justify-center items-center">
            <h4 className="text-green-500 text-xl leading-none font-bold">
              13
            </h4>
            <p className="text-gray-500 text-sm font-semimedium">Minutes</p>
          </div>
          <div className="w-[60px] h-[70px] lg:w-[50px] lg:h-[60px] bg-white rounded-md  flex flex-col justify-center items-center">
            <h4 className="text-green-500 text-xl leading-none font-bold">
              50
            </h4>
            <p className="text-gray-500 text-sm font-semimedium">Sec</p>
          </div>
        </div>
        <div className="min-w-[96%] md:min-w-[90%] mx-auto h-[170px] md:h-[190px] lg:h-[210px] bg-white rounded-2xl px-8 py-6 shadow-lg">
          <p className="text-gray-700 font-bold text-lg">
            All Natural Italian-Style Chicken Meatballs
          </p>
          <div className="flex items-center my-1 gap-2">
            <div className="flex">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Star 1"
                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                  fill="#FFE033"
                />
              </svg>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Star 1"
                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                  fill="#FFE033"
                />
              </svg>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Star 1"
                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                  fill="#FFE033"
                />
              </svg>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Star 1"
                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                  fill="#FFE033"
                />
              </svg>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Star 1"
                  d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z"
                  fill="#FFE033"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-400">(4.0)</span>
          </div>
          <div className="text-gray-500 text-sm md:text-xs lg:text-sm">
            By <span className="text-green-600 font-bold">Stouffer</span>
          </div>
          <div className="flex justify-between items-center text-green-500 text-lg md:text-base lg:text-lg lg:mt-4 font-bold">
            <div>
              $52.85{" "}
              <span className="text-gray-400 text-sm md:text-xs lg:text-sm line-through">
                $55.0
              </span>
            </div>
            <button className="bg-green-100 hover:bg-green-500 hover:text-white px-4 py-1 rounded-md md:text-sm lg:text-base">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-cart.svg"
                style={{
                  width: "15px",
                  height: "24px",
                  display: "inline-block",
                  marginRight: "5px",
                }}
                alt=""
              />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MdCard;
