import React from "react";
import { FaMobileRetro } from "react-icons/fa6";

export default function Grid() {
  return (
    <>
      <div className="w-full bg-[#3279AB] grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 md:mt-20">
        <div className="py-6 px-4 md:px-10 border border-white">
          <div className="flex items-center">
            <FaMobileRetro className="text-white text-4xl md:text-5xl mt-2 md:mt-5" />
            <div className="text-white ml-4">
              <h1 className="text-2xl md:text-4xl font-bold">100+</h1>
              <p className="text-xs md:text-base">
                DELIVERY OF HOMES AND BUSINESS SPACES/MONTH
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 px-4 md:px-10 border border-white">
          <div className="flex items-center">
            <FaMobileRetro className="text-white text-4xl md:text-5xl mt-2 md:mt-5" />
            <div className="text-white ml-4">
              <h1 className="text-2xl md:text-4xl font-bold">
                6000 <span className="text-xl md:text-2xl">+sqft</span>
              </h1>
              <p className="text-xs md:text-base">
                DELIVERY OF HOMES AND BUSINESS SPACES/MONTH
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#3279AB] grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:mb-20">
        <div className="py-6 px-4 md:px-10 border border-white">
          <div className="flex items-center">
            <FaMobileRetro className="text-white text-4xl md:text-5xl mt-2 md:mt-5" />
            <div className="text-white ml-4">
              <h1 className="text-2xl md:text-4xl font-bold">
                14 <span className="text-xl md:text-2xl">PROJECTS</span>
              </h1>
              <p className="text-xs md:text-base">DELIVERED IN 13 YEARS</p>
            </div>
          </div>
        </div>
        <div className="py-6 px-4 md:px-10 border border-white">
          <div className="flex items-center">
            <FaMobileRetro className="text-white text-4xl md:text-5xl mt-2 md:mt-5" />
            <div className="text-white ml-4">
              <h1 className="text-lg md:text-2xl font-bold">COMPANY OF THE YEAR</h1>
              <p className="text-xs md:text-base">TRICITY BUSINESS 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
