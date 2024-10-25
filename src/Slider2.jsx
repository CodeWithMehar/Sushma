"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function Slider2() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // for large tablets and desktops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // for small tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // for mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden mb-[100px] py-[30px]">
      <Slider {...settings}>
        <div className="shadow-2xl py-5 relative mr-5 slider2">
          <img
            src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/JoynestAEROCITY.ac3a66a3.png"
            alt=""
            className="rounded-lg h-[250px] w-full object-cover"
          />
          <div className="w-[120px] h-[60px] p-3 z-50 bg-white absolute bottom-[28%]">
            <img src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/c14334e5e2fd343ccc75a74621dff2fb.cb75ef02.png" alt="" className="w-[150px] h-[30px]"/>
          </div>
          <h1 className="font-semibold text-[25px] my-5 pl-3" style={{ color: "rgb(30, 109, 164)" }}>
            SUSHMA BALLIZA
          </h1>
          <div className="flex space-x-3 pl-3" style={{ color: "rgb(30, 109, 164)" }}>
            <HiOutlineMapPin className="text-[20px]" />
            <h1>Zirakpur</h1>
          </div>
        </div>
        
        {/* Repeat each slider item structure for other slides */}
        {/* ... other slide items */}
        
      </Slider>
    </div>
  );
}
