"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import bluebg from "./img/bluebg.png";

export default function Slider1() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="slider-container overflow-hidden relative">
        <Slider {...settings}>
          {/* Slider 1 */}
          <div>
            <div className="w-full grid lg:grid-cols-[40%_60%] grid-cols-1">
              <div className="flex flex-col justify-center">
                <div
                  className="bg-cover h-screen lg:h-[100vh] text-center flex items-center justify-center"
                  style={{ backgroundImage: `url(${bluebg.src})` }}
                >
                  <div className="flex flex-col mt-10 lg:mt-20 p-4">
                    <h1 className="text-white text-3xl lg:text-[50px] font-semibold">
                      Designing <br />
                      Homes With <br /> You In Mind
                    </h1>
                    <button className="bg-transparent z-[99999] mt-5 text-white rounded-3xl py-2 px-4 lg:py-3 lg:px-3 lg:w-[300px] w-full border-white border">
                      SEE ALL PROJECTS
                    </button>
                    <img
                      src="https://staging.adiyogitechnology.com/sushmagroup/images/50a47ae02fe827cace4cb04eece57bc8.png"
                      alt=""
                      className="w-[300px] lg:w-[450px] h-[150px] lg:h-[200px] mt-[-10px] lg:mt-[-15px] z-[999]"
                    />
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://staging.adiyogitechnology.com/sushmagroup/images/edffdb6cad0937fc0c25eb85cfd9bd5c.png"
                  alt=""
                  className="h-screen lg:h-[100vh] w-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other sliders */}
        </Slider>
      </div>

      {/* Floating Picture and Text */}
      <div className="absolute right-5 top-[70%] text-center">
        <img
          src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/agenticon.fd54840f.png"
          alt=""
          className="w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] absolute bottom-[30%] left-[12%]"
        />
        <h1 className="text-blue-700 text-sm lg:text-base">Pawan Kumar</h1>
      </div>
    </>
  );
}
