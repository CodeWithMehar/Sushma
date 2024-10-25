"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export default function Client() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Slider settings with responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default for mobile
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Desktop
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (index) => setActiveIndex(index),
  };

  return (
    <>
      <div className="w-full text-center my-[30px]">
        <h1
          className="text-[30px] md:text-[50px] uppercase font-bold font-supra"
          style={{ color: "rgb(30, 109, 164)" }}
        >
          What Our Clients Say
        </h1>
        <p className="text-[20px] md:text-[25px] text-gray-500">
          Within the premises of the Sushma Township are reputed Schools.
        </p>
      </div>
      <Slider
        {...settings}
        className="w-full overflow-hidden my-[30px] py-[50px]"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className={`relative ${activeIndex === idx ? "scale-110" : ""} transition-all duration-300 transform text-center`}
          >
            <div
              style={{
                backgroundColor: activeIndex === idx ? "rgb(30, 109, 164)" : "white",
              }}
              className={`px-5 py-14 rounded-xl`}
            >
              <h1
                className={`text-[16px] md:text-[18px] ${activeIndex === idx ? "text-white" : "text-black"}`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                ullam id minima aut soluta suscipit sint at? Nostrum praesentium
                pariatur illo ad distinctio laborum ipsam
              </h1>
            </div>
            <div className="relative flex flex-col items-center">
              <img
                src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/karantestimonal.6ef5bd40.png"
                alt=""
                className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] absolute bottom-[-40px] mb-10"
              />
              <h1
                className={`font-bold text-[18px] md:text-[22px] mt-10 ${activeIndex === idx ? "text-black" : "text-[rgb(30, 109, 164)]"}`}
              >
                MUKESH
              </h1>
              <p className="text-black">Lorem ipsum dolor</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
