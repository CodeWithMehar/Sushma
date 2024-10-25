"use client";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Brand() {
  const [slidesToShow, setSlidesToShow] = useState(7);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setSlidesToShow(7);
      } else if (width >= 768) {
        setSlidesToShow(5);
      } else if (width >= 480) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    speed: 5000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  return (
    <>
      <div className="w-full my-[50px] text-center">
        <h1 style={{ color: "rgb(49, 124, 174)" }} className="text-[55px] font-supra font-bold">
          SUSHMA PROJECTS BRANDS ON BOARD
        </h1>
        <p className="text-[20px] text-gray-600">Within the premises of the Sushma Township are reputed Schools.</p>
      </div>
      <Slider {...settings} className="w-full overflow-hidden">
        {[
          "https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/8-150x150.926ea7c5.png",
          "https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/10-150x150.fc3c09bc.png",
          "https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/12-150x150.e4b33a85.png",
          "https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/8-150x150.926ea7c5.png",
          "https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/6-150x150.9a77b9ac.png",
        ].map((src, index) => (
          <div key={index}>
            <img src={src} alt="" />
          </div>
        ))}
      </Slider>
    </>
  );
}
