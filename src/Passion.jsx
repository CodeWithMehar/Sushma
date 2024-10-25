import React from "react";
import Image from "next/image";
import p1 from "./img/passion.png";
import p2 from "./img/passion2.png";

export default function Passion() {
  return (
    <div className="w-full my-12 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8">
        <div className="flex justify-center lg:justify-start">
          <div
            className="border-4 w-full lg:w-[480px] h-[280px] mt-6 text-center align-middle pt-10 bg-white"
            style={{
              borderLeftWidth: "12px",
              borderTopWidth: "4px",
              borderRightWidth: "4px",
              borderBottomWidth: "4px",
              borderColor: "rgb(30, 109, 164)",
            }}
          >
            <h1 className="text-4xl lg:text-[60px] text-gray-500 font-supra font-bold">
              PASSION FOR
            </h1>
            <h1 className="text-5xl lg:text-[80px] font-bold font-supra" style={{ color: "rgb(30, 109, 164)" }}>
              PERFECTION
            </h1>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/685ddec8f310242e1fd0a6a4bc54c0c8.7502ef0c.png"
            alt="Main Passion Image"
            className="rounded w-full"
          />
          <img
            src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/playbutton.c39278f6.png"
            alt="Play Button Overlay"
            className="absolute bottom-[20%] left-[50%] transform -translate-x-1/2 translate-y-1/2 arrow"
          />
        </div>
      </div>
    </div>
  );
}
