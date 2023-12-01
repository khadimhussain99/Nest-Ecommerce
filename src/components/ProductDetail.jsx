import React from "react";
import SmallCard from "./cards/SmCard";

const ProductDetail = () => {
  return (
    <div className="flex flex-col font-Quicksand max-w-[550px] md:max-w-[770px] lg:max-w-[100%] xl:max-w-[100%] mx-auto px-4">
      <div className="w-full flex gap-2 text-xs font-bold text-green-500 py-6 border-b">
        <a href="/" className="flex gap-1 cursor-pointer">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.336 2.253a1 1 0 0 1 1.328 0l9 8a1 1 0 0 1-1.328 1.494L20 11.45V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.55l-.336.297a1 1 0 0 1-1.328-1.494l9-8zM6 9.67V19h3v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3V9.671l-6-5.333-6 5.333zM13 19v-4h-2v4h2z"
              fill="#3bb77e"
            />
          </svg>
          Home {">"}
        </a>
        <a className=" cursor-pointer">Vegetabls & Tubers {">"}</a>
        <a className="text-gray-500 cursor-pointer">Seeds of Change Organic</a>
      </div>
      <div className="w-full flex gap-8">
        <div className="w-full lg:w-[75%] flex flex-col">
          <div className="flex flex-col md:flex-row md:justify-between lg:justify-center lg: gap-20 py-5">
            <div className="flex flex-col gap-5">
              <div className="w-[450px] md:w-[300px] h-[450px] md:h-[300px] flex flex-col justify-center items-center border rounded-xl">
                <img
                  className="w-[100%] h-[100%] rounded-xl"
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
                  alt=""
                />
              </div>
              <div className="flex w-[100%] gap-4">
                <img
                  className="w-[100px] h-[100px] md:w-[60px] md:h-[60px] rounded-xl"
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-1.jpg"
                  alt=""
                />
                <img
                  className="w-[100px] h-[100px] md:w-[60px] md:h-[60px] rounded-xl"
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-2.jpg"
                  alt=""
                />
                <img
                  className="w-[100px] h-[100px] md:w-[60px] md:h-[60px] rounded-xl"
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
                  alt=""
                />
                <img
                  className="w-[100px] h-[100px] md:w-[60px] md:h-[60px] rounded-xl"
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col sm:mt-8">
              <a className="w-[80px] flex justify-center items-center py-1 rounded-md text-red-500 font-bold text-sm bg-red-100 ">
                Sale Off
              </a>
              <p className="md:w-[300px] text-3xl  md:text-2xl font-bold text-gray-700 my-2 cursor-pointer hover:text-green-600 lg:leading-tight">
                Seeds of Change Organic Quinoa, Brown
              </p>

              <div className="flex justify-start items-center gap-2 mt-5 md:mt-1">
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
                <span className="text-gray-500 text-sm lg:text-xs font-medium">
                  (32 reviews)
                </span>
              </div>

              <div className="flex justify-start items-end gap-2 text-5xl lg:text-base font-bold text-green-500 mt-5">
                $38
                <span className="text-gray-400 text-xl sm:text-xs  line-through">
                  $52
                </span>
              </div>

              <p className="w-[400px] md:w-[250px] my-8 text-base text-gray-500 font-medium leading-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate, quis a fugiat deserunt cupiditate nobis repellat
                maxime? Aliquid quidem, et obcaecati,
              </p>

              <div className="flex gap-4 md:gap-2 items-center text-gray-500">
                <strong className="text-sm">Size/Weight:</strong>
                <div className="flex gap-1 justify-center items-center">
                  <a className="hover:bg-green-600 hover:text-white cursor-pointer px-2 py-1 rounded-md">
                    50g
                  </a>
                  <a className="hover:bg-green-600 hover:text-white cursor-pointer px-2 py-1 rounded-md">
                    60g
                  </a>
                  <a className="hover:bg-green-600 hover:text-white cursor-pointer px-2 py-1 rounded-md">
                    80g
                  </a>
                  <a className="hover:bg-green-600 hover:text-white cursor-pointer px-2 py-1 rounded-md">
                    100g
                  </a>
                  <a className="hover:bg-green-600 hover:text-white cursor-pointer px-2 py-1 rounded-md">
                    150g
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:mt-4">
                <select className="border border-green-600 px-2 py-2 outline-none rounded-md">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <button className="bg-green-600 px-3 py-2 rounded-md text-sm font-semibold text-white">
                  Add to cart
                </button>
                <a className="border p-3 text-gray-500 hover:text-white rounded-md hover:bg-green-600">
                  <svg
                    width="15"
                    height="15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a className="border p-3 text-gray-500 hover:text-white rounded-md hover:bg-green-600">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.3536 1.14645C12.1583 0.951184 11.8417 0.951184 11.6464 1.14645C11.4512 1.34171 11.4512 1.65829 11.6464 1.85355L12.7929 3H12C10.7037 3 9.71111 3.58423 8.87248 4.38931C8.20065 5.03427 7.59349 5.85684 6.99461 6.6682C6.86287 6.84668 6.73154 7.02462 6.6 7.2C5.10874 9.18835 3.49037 11 0.5 11C0.223858 11 0 11.2239 0 11.5C0 11.7761 0.223858 12 0.5 12C4.00963 12 5.89126 9.81165 7.4 7.8C7.54367 7.60845 7.6832 7.41962 7.81996 7.23454L7.82005 7.23443L7.82006 7.23441C8.41674 6.42695 8.96069 5.69085 9.56502 5.11069C10.2889 4.41577 11.0463 4 12 4H12.7929L11.6464 5.14645C11.4512 5.34171 11.4512 5.65829 11.6464 5.85355C11.8417 6.04882 12.1583 6.04882 12.3536 5.85355L14.3536 3.85355C14.5488 3.65829 14.5488 3.34171 14.3536 3.14645L12.3536 1.14645ZM0.5 3C3.35278 3 5.12992 4.44588 6.50548 6.06746L6.3762 6.24266C6.2483 6.4161 6.12293 6.58609 6 6.75C5.96397 6.79804 5.92798 6.84581 5.892 6.89331C4.57348 5.29306 3.02637 4 0.5 4C0.223858 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3ZM8.87248 10.6107C8.37284 10.131 7.90897 9.55314 7.45767 8.95468C7.64688 8.71693 7.82704 8.48061 8 8.25L8.08987 8.12987C8.58412 8.79402 9.05288 9.39766 9.56502 9.88931C10.2889 10.5842 11.0463 11 12 11H12.7929L11.6464 9.85355C11.4512 9.65829 11.4512 9.34171 11.6464 9.14645C11.8417 8.95118 12.1583 8.95118 12.3536 9.14645L14.3536 11.1464C14.5488 11.3417 14.5488 11.6583 14.3536 11.8536L12.3536 13.8536C12.1583 14.0488 11.8417 14.0488 11.6464 13.8536C11.4512 13.6583 11.4512 13.3417 11.6464 13.1464L12.7929 12H12C10.7037 12 9.71111 11.4158 8.87248 10.6107Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>

              <div className="flex md:flex-col md:justify-center text-sm text-gray-600 py-10 justify-start gap-8">
                <div className="space-y-2">
                  <p>
                    Type: <span className="text-green-600">Organic</span>{" "}
                  </p>
                  <p>
                    MFG: <span className="text-green-600">Jun 4.2022</span>{" "}
                  </p>
                  <p>
                    LiFE: <span className="text-green-600">70 days</span>{" "}
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    SKU: <span className="text-green-600">FWM15VKT</span>{" "}
                  </p>
                  <p>
                    Tags:{" "}
                    <span className="text-green-600">
                      Snack, Organic, Brown
                    </span>{" "}
                  </p>
                  <p>
                    Stock:{" "}
                    <span className="text-green-600">8 items in Stock</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-8 md:p-12 border rounded-xl ">
            <div className="text-gray-500 text-base font-bold space-x-1 space-y-1">
              <button className="border rounded-full px-5 py-2 shadow-sm hover:text-green-600">
                Description
              </button>
              <button className="border rounded-full px-5 py-2 shadow-sm hover:text-green-600">
                Additional info
              </button>
              <button className="border rounded-full px-5 py-2 shadow-sm hover:text-green-600">
                Vendor
              </button>
              <button className="border rounded-full px-5 py-2 shadow-sm hover:text-green-600">
                Reviews (3)
              </button>
            </div>
            <div className=" flex flex-col my-8 text-sm leading-5 text-gray-500 ">
              <div>
                Uninhibited carnally hired played in whimpered dear gorilla
                koala depending and much yikes off far quetzal goodness and from
                for grimaced goodness unaccountably and meadowlark near
                unblushingly crucial scallop tightly neurotic hungrily some and
                dear furiously this apart.
              </div>
              <div className="mt-1">
                Spluttered narrowly yikes left moth in yikes bowed this that
                grizzly much hello on spoon-fed that alas rethought much
                decently richly and wow against the frequent fluidly at
                formidable acceptably flapped besides and much circa far over
                the bucolically hey precarious goldfinch mastodon goodness
                gnashed a jellyfish and one however because.
              </div>
            </div>
            <ul className="list-disc text-sm leading-7 text-gray-500 ml-5 border-b pb-4">
              <li>Type Of Packing: Bottle</li>
              <li>Color: Green, Pink, Powder Blue, Purple</li>
              <li>Quantity Per Case: 100ml</li>
              <li>Ethyl Alcohol: 70%</li>
              <li>Piece In One: Carton</li>
            </ul>
            <div className="text-sm leading-5 pt-4 text-gray-500">
              Laconic overheard dear woodchuck wow this outrageously taut beaver
              hey hello far meadowlark imitatively egregiously hugged that yikes
              minimally unanimous pouted flirtatiously as beaver beheld above
              forward energetic across this jeepers beneficently cockily less a
              the raucously that magic upheld far so the this where crud then
              below after jeez enchanting drunkenly more much wow callously
              irrespective limpet.
            </div>
            <div className="flex flex-col pt-6">
              <h1 className="text-xl md:text-2xl font-bold text-gray-700 border-b pb-3">
                Packaging & delivery
              </h1>
              <p className="text-sm mt-2 text-gray-500">
                Less lion goodness that euphemistically robin expeditiously
                bluebird smugly scratched far while thus cackled sheepishly
                rigid after due one assenting regarding censorious while
                occasional or this more crane went more as this less much amid
                overhung anathematic because much held one exuberantly sheep
                goodness so where rat wry well concomitantly.
              </p>
              <p className="text-sm mt-2 text-gray-500">
                Scallop or far crud plain remarkably far by thus far iguana lewd
                precociously and and less rattlesnake contrary caustic wow this
                near alas and next and pled the yikes articulate about as less
                cackled dalmatian in much less well jeering for the thanks
                blindly sentimental whimpered less across objectively fanciful
                grimaced wildly some wow and rose jeepers outgrew lugubrious
                luridly irrationally attractively dachshund.
              </p>
            </div>
            <div className="flex flex-col mt-5">
              <h1 className="text-xl md:text-2xl font-bold text-gray-700 my-5">
                Suggested Use
              </h1>
              <p className="text-gray-500 text-sm pl-2 leading-7">
                Refrigeration not necessary
              </p>
              <p className="text-gray-500 text-sm pl-2 leading-7">
                Stir before serving
              </p>

              <h1 className="text-xl md:text-2xl font-bold text-gray-700 my-5">
                Other Ingredients
              </h1>
              <p className="text-gray-500 text-sm pl-2 leading-7">
                Organic raw pecans, organic raw cashews
              </p>
              <p className="text-gray-500 text-sm pl-2 leading-7">
                This butter was produced using a LTG (Low Temperature Grinding)
                process
              </p>
              <p className="text-gray-500 text-sm pl-2 leading-7">
                Made in machinery that processes tree nuts but does not process
                peanuts, gluten, dairy or soy
              </p>

              <h1 className="text-xl md:text-2xl font-bold text-gray-700 my-5">
                Warnings
              </h1>
              <p className="text-gray-500 text-sm pl-2 leading-7">
                Oil separation occurs naturally. May contain pieces of shell.
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <div className="border-b">
              <h4 className="text-lg md:text-xl inline-block text-gray-700 font-bold border-b-2 border-gray-300 py-2">
                Related Products
              </h4>
            </div>
            <div className="w-[100%] sm:h-[320px] md:h-[400px] lg:h-[430px] py-5 flex flex-col sm:flex-row gap-4">
              <div className="flex justify-center items-center flex-col w-[100%] sm:h-[100%] sm:w-[33%] sm:py-5 group border rounded-2xl hover:shadow-lg gap-5">
                <div className=" w-[100%] h-[100%] sm:h-[50%] lg:w-[170px] lg:h-[170px] flex justify-center items-center">
                  <img
                    className=" w-[100%] h-[100%] group-hover:hidden rounded-t-2xl"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
                    alt=""
                  />

                  <img
                    className=" w-[100%] h-[100%] hidden  group-hover:flex rounded-t-2xl"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg"
                    alt=""
                  />
                </div>
                <div className="p-4 flex items-start flex-col">
                  <p className="text-base md:py-4   lg:text-sm font-bold text-gray-800 my-2 cursor-pointer hover:text-green-600 lg:leading-tight">
                    HomeSpeak 12UEA Goole
                  </p>
                  <div className="flex ">
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
                  <div className="flex lg:flex-col md:py-4 items-center gap-2 text-lg sm:text-sm lg:text-base font-bold text-green-600">
                    $138
                    <span className="text-gray-400 text-sm sm:text-xs  line-through">
                      $145
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col w-[100%] sm:h-[100%] sm:w-[33%] sm:py-5 group border rounded-2xl hover:shadow-lg gap-5">
                <div className=" w-[100%] h-[100%] sm:h-[50%] lg:w-[170px] lg:h-[170px] flex justify-center items-center">
                  <img
                    className=" w-[100%] h-[100%]  group-hover:hidden rounded-t-2xl"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg"
                    alt=""
                  />

                  <img
                    className=" w-[100%] h-[100%] hidden  group-hover:flex rounded-t-2xl"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg"
                    alt=""
                  />
                </div>
                <div className="p-4 flex items-start flex-col">
                  <p className="text-base  md:py-4  lg:text-sm font-bold text-gray-800 my-2 cursor-pointer hover:text-green-600 lg:leading-tight">
                    HomeSpeak 12UEA Goole
                  </p>
                  <div className="flex ">
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
                  <div className="flex lg:flex-col md:py-4 items-center gap-2 text-lg sm:text-sm lg:text-base font-bold text-green-600">
                    $138
                    <span className="text-gray-400 text-sm sm:text-xs  line-through">
                      $145
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-col w-[100%] sm:h-[100%] sm:w-[33%] sm:py-5 group border rounded-2xl hover:shadow-lg gap-5">
                <div className=" w-[100%] h-[100%] sm:h-[50%] lg:w-[170px] lg:h-[170px] flex justify-center items-center">
                  <img
                    className=" w-[100%] h-[100%]  group-hover:hidden rounded-t-2xl"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg"
                    alt=""
                  />

                  <img
                    className=" w-[100%] h-[100%] hidden  group-hover:flex rounded-t-2xl"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg"
                    alt=""
                  />
                </div>
                <div className="p-4 flex items-start flex-col">
                  <p className="text-base  md:py-4  lg:text-sm font-bold text-gray-800 my-2 cursor-pointer hover:text-green-600 lg:leading-tight">
                    HomeSpeak 12UEA Goole
                  </p>
                  <div className="flex ">
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
                  <div className="flex lg:flex-col md:py-4 items-center gap-2 text-lg sm:text-sm lg:text-base font-bold text-green-600">
                    $138
                    <span className="text-gray-400 text-sm sm:text-xs  line-through">
                      $145
                    </span>
                  </div>
                </div>
              </div>
              <div className="justify-center items-center hidden md:flex flex-col w-[100%] sm:h-[100%] sm:w-[33%] sm:py-5 group border rounded-2xl hover:shadow-lg gap-5">
                <div className=" w-[100%] h-[100%] sm:h-[50%] lg:w-[170px] lg:h-[170px] flex justify-center items-center">
                  <img
                    className=" w-[100%] h-[100%]  group-hover:hidden rounded-t-2xl"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg"
                    alt=""
                  />

                  <img
                    className=" w-[100%] h-[100%] hidden  group-hover:flex rounded-t-2xl"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg"
                    alt=""
                  />
                </div>
                <div className="p-4 flex items-start flex-col">
                  <p className="text-base  md:py-4  lg:text-sm font-bold text-gray-800 my-2 cursor-pointer hover:text-green-600 lg:leading-tight">
                    HomeSpeak 12UEA Goole
                  </p>
                  <div className="flex ">
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
                  <div className="flex lg:flex-col md:py-4 items-center gap-2 text-lg sm:text-sm lg:text-base font-bold text-green-600">
                    $138
                    <span className="text-gray-400 text-sm sm:text-xs  line-through">
                      $145
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col w-[25%]">
          <div className="border rounded-xl py-8 px-6 mt-8 shadow-md flex flex-col gap-4 items-start">
            <div className="border-b mb-5">
              <h4 className="text-lg md:text-xl inline-block text-gray-700 font-bold border-b-2 border-gray-300 py-2">
                Related Products
              </h4>
            </div>
            <div className="flex justify-between items-center border text-sm text-gray-500 h-[70px] px-8 rounded-lg">
              <img
                className="w-[30px] h-[30px]"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
              />
              <p>Milks & Dairies</p>
              <span className="bg-green-300 p-2 rounded-full">12</span>
            </div>
            <div className="flex justify-between items-center border text-sm text-gray-500 h-[70px] px-8 rounded-lg">
              <img
                className="w-[30px] h-[30px]"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
              />
              <p>Milks & Dairies</p>
              <span className="bg-green-300 p-2 rounded-full">12</span>
            </div>
            <div className="flex justify-between items-center border text-sm text-gray-500 h-[70px] px-8 rounded-lg">
              <img
                className="w-[30px] h-[30px]"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg"
              />
              <p>Milks & Dairies</p>
              <span className="bg-green-300 p-2 rounded-full">12</span>
            </div>
            <div className="flex justify-between items-center border text-sm text-gray-500 h-[70px] px-8 rounded-lg">
              <img
                className="w-[30px] h-[30px]"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg"
              />
              <p>Milks & Dairies</p>
              <span className="bg-green-300 p-2 rounded-full">12</span>
            </div>
            <div className="flex justify-between items-center border text-sm text-gray-500 h-[70px] px-8 rounded-lg">
              <img
                className="w-[30px] h-[30px]"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg"
              />
              <p>Milks & Dairies</p>
              <span className="bg-green-300 p-2 rounded-full">12</span>
            </div>
            <div className="flex justify-between items-center border text-sm text-gray-500 h-[70px] px-8 rounded-lg">
              <img
                className="w-[30px] h-[30px]"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg"
              />
              <p>Milks & Dairies</p>
              <span className="bg-green-300 p-2 rounded-full">12</span>
            </div>
          </div>
          <div className=" border rounded-xl py-8 px-6 mt-8 shadow-md flex flex-col gap-4 items-start">
            <div className="w-full border-b mb-5">
              <h4 className="text-lg md:text-xl inline-block text-gray-700 font-bold border-b-2 border-gray-300 py-2">
                Fill by price
              </h4>
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                type="range"
                class="w-full h-1 rounded-lg bg-gray-200 cursor-pointer"
                min="0"
                max="100"
                value="50"
              ></input>
              <div className="flex justify-between text-gray-700 text-xs font-semibold">
                <span>
                  Fom: <span className="text-green-600">$001</span>
                </span>
                <span>
                  To: <span className="text-green-600">$1500</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <h2 className="font-bold">Color</h2>
              <div className="w-[100px] flex justify-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  className="border-gray-500 checked:bg-green-600 cursor-pointer"
                  id="checkbox-1"
                />
                <label htmlFor="checkbox-1">Red (54)</label>
              </div>
              <div className="w-[100px] flex justify-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  className="border-gray-500 checked:bg-green-600 cursor-pointer"
                  id="checkbox-3"
                />
                <label htmlFor="checkbox-2">Green (76)</label>
              </div>{" "}
              <div className="w-[100px] flex justify-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  className="border-gray-500 checked:bg-green-600 cursor-pointer"
                  id="checkbox-3"
                />
                <label htmlFor="checkbox-3">Blue (75)</label>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <h2 className="font-bold">Item Condition</h2>
              <div className="w-[140px] flex justify-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  className="border-gray-500 checked:bg-green-600 cursor-pointer"
                  id="checkbox-1"
                />
                <label htmlFor="checkbox-1">New (1300)</label>
              </div>
              <div className="w-[140px] flex justify-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  className="border-gray-500 checked:bg-green-600 cursor-pointer"
                  id="checkbox-3"
                />
                <label htmlFor="checkbox-2">Refurbished (76)</label>
              </div>{" "}
              <div className="w-[140px] flex justify-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  className="border-gray-500 checked:bg-green-600 cursor-pointer"
                  id="checkbox-3"
                />
                <label htmlFor="checkbox-3">Used (35)</label>
              </div>
            </div>
            <button className="bg-green-500 hover:bg-yellow-400 px-5 py-2 rounded-md text-white text-xs font-semibold">
              Filter
            </button>
          </div>
          <div className="border rounded-xl py-8 px-6 mt-8 shadow-md flex flex-col gap-4 items-start">
            <div className="border-b">
              <h4 className="text-lg md:text-xl inline-block text-gray-700 font-bold border-b-2 border-gray-300 py-2">
                New Products
              </h4>
            </div>
            <div className="flex flex-col gap-4 md:gap-1">
              <SmallCard
                title="Chen Cardigan"
                img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-1.jpg"
              />
              <SmallCard
                title="Chen sweater"
                img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-2.jpg"
              />
              <SmallCard
                title="Colorful Jacket"
                img="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
