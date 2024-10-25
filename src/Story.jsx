"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Story() {
  const settings = {
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };

  // Sample data for the stories
  const stories = [
    { year: 2001, title: "Sushma Pristine", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { year: 2002, title: "Sushma Pristine", description: "Ab veniam deserunt tenetur accusamus veritatis." },
    { year: 2003, title: "Sushma Pristine", description: "Odio." },
    { year: 2004, title: "Sushma Pristine", description: "Lorem ipsum dolor sit amet." },
    { year: 2005, title: "Sushma Pristine", description: "Deserunt tenetur accusamus veritatis." },
    { year: 2007, title: "Sushma Pristine", description: "Consectetur adipisicing elit." },
    { year: 2008, title: "Sushma Pristine", description: "Odio." },
    { year: 2009, title: "Sushma Pristine", description: "Lorem ipsum dolor sit amet." },
    { year: 2010, title: "Sushma Pristine", description: "Deserunt tenetur." },
  ];

  return (
    <div>
      <div className="w-full text-center my-[50px]">
        <h1 className="text-[45px] uppercase font-bold font-supra" style={{ color: "rgb(30, 109, 164)" }}>
          Our Success Story
        </h1>
        <p className="text-[20px]">Within the premises of the Sushma Township are reputed Schools.</p>
      </div>
      <Slider {...settings} className="overflow-hidden w-full mb-[50px] mt-[50px]">
        {stories.map((story, index) => (
          <div key={index}>
            <div className="flex space-x-3 uper p-5 relative">
              <img src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/2013villas.28aec025.png" alt="" />
              <div>
                <h1 className="font-bold text-[20px]">{story.year}</h1>
                <h1 className="text-[20px] font-bold" style={{ color: "rgb(30, 109, 164)" }}>
                  {story.title}
                </h1>
                <p className="text-[15px]">{story.description}</p>
              </div>
              <div
                className="w-[15px] h-[15px] rounded-full absolute left-[-20px] bottom-[155px]"
                style={{ backgroundColor: "rgb(30, 109, 164)" }}
              ></div>
            </div>
            <div className="flex space-x-3 flex-row-reverse nichy p-5 relative">
              <img src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/2013villas.28aec025.png" alt="" />
              <div>
                <h1 className="font-bold text-[20px]">{story.year + 1}</h1>
                <h1 className="text-[20px] font-bold" style={{ color: "rgb(30, 109, 164)" }}>
                  {story.title}
                </h1>
                <p className="text-[15px]">{story.description}</p>
              </div>
              <div
                className="w-[15px] h-[15px] rounded-full absolute left-[-20px] top-[155px]"
                style={{ backgroundColor: "rgb(30, 109, 164)" }}
              ></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
