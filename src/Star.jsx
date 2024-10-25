import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
// import pawan from "./img/pawan.png";
import pawan2 from "./img/pawan2.png";

export default function Star() {
  return (
    <>
      <div className="w-full text-center mx-auto mb-10">
        <div className="flex justify-center space-x-3 text-yellow-500 mb-3">
          <FaStar className="w-[40px] h-[40px]" />
          <FaStar className="w-[40px] h-[40px]" />
          <FaStar className="w-[40px] h-[40px]" />
          <FaStar className="w-[40px] h-[40px]" />
          <FaStar className="w-[40px] h-[40px]" />
        </div>
        <h1 className="text-[25px] md:text-[35px] font-bold" style={{ color: "rgb(63, 128, 174)" }}>
          SUSHMA SERVICE PARTNER
        </h1>
        <p className="text-[18px] md:text-[20px] text-gray-500">
          Within the premises of the Sushma Township are reputed Schools.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-[35%_60%] px-[5%] my-[50px] gap-5">
        {/* <Image src={pawan} /> */}
        <img 
          src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/705febab1eba783bdb74e0f6f6db3a90.a182caeb.png" 
          alt="" 
          className="w-full h-auto rounded-lg"
        />
        
        <div className="p-5 md:p-10 text-white relative" style={{ backgroundColor: "#3E3C3C" }}>
          <h1 className="text-[16px] md:text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, error!
            Voluptate at ab excepturi modi suscipit exercitationem facere
            laboriosam. Odit porro vel aperiam perferendis voluptatum debitis
            sint alias cum incidunt?
          </h1>
          <br />
          <p className="border-dotted border-b pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, atque.
          </p>
          <h1 className="text-[20px] md:text-[28px] font-bold mt-5">PAWAN KUMAR</h1>
          <p className="text-[18px] md:text-[23px] font-light">FOUNDER REALITY NIVESH</p>
        </div>
        
        <div className="w-full md:w-[690px] mt-[30px] bg-white h-[100px] flex items-center justify-center relative">
          <Image src={pawan2} alt="Pawan Kumar" className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full" />
        </div>
      </div>
    </>
  );
}
