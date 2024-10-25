import React from "react";
import Image from "next/image";
import g from "./img/group1.png";
import g2 from './img/gimg2.png';

export default function Group() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:space-x-16 px-4 lg:px-0">
      <div className="w-full lg:w-[35%] mb-8 lg:mb-0 flex justify-center">
        {/* Using next/image component for better image handling */}
        <Image src={g} alt="Group image" className="object-contain" width={500} height={400} />
      </div>
      <div className="w-full lg:w-[35%] text-center lg:text-left">
        <h1 className="text-[#1E6DA4] text-4xl lg:text-[55px] font-bold mb-5 font-supra">
          ABOUT <br /> SUSHMA GROUP
        </h1>
        <p className="text-lg lg:text-[20px] font-semibold text-gray-700 leading-relaxed mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum
        </p>
        <h2 className="text-xl lg:text-[33px] font-semibold text-gray-500 mb-6">
          WE PROVIDE YOU THE BEST <span className="font-bold text-gray-600">EXPERIENCE</span>
        </h2>
        <Image src={g2} alt="Second group image" className="object-contain" width={500} height={300} />
      </div>
    </div>
  );
}
