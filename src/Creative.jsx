import React from "react";
import Image from "next/image";
import img2 from "./img/science.png";
import img1 from './img/img1.png';
import main from './img/mainimg.png';

export default function Creative() {
  return (
    <>
      <div className="w-full text-center my-[40px]">
        <h1 className="text-[20px] md:text-[25px] font-semibold uppercase text-gray-500">
          We blend creativity with intelligence to craft homes
          <br />
          that enhance your living experience and deliver on our promises
        </h1>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 my-16">
        <div className="w-full relative group">
          <img 
            src="https://staging.adiyogitechnology.com/sushmagroup/images/908591d6ce0a9de4cc9885a71d34cf63.png" 
            alt="" 
            className="h-[250px] md:h-[370px] rounded-xl"
          />
          <div
            className="w-full absolute bottom-[30%] text-center py-3 cursor-pointer opacity-80"
            style={{ backgroundColor: "rgb(63, 128, 174)" }}
          >
            <h1 className="text-white text-[20px] md:text-[30px] head">
              The Science of CONSTRUCTION TECHNOLOGY
            </h1>
            <p className="text-white opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[300px] para transition-all duration-500 ease-in-out">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
              voluptatem! Dolor quo voluptatum consequuntur dolores. Veniam
              eligendi iusto, ad obcaecati quae error ducimus consectetur
              distinctio aliquam consequatur quod blanditiis quam.
            </p>
          </div>
        </div>

        <div className="w-full relative group">
          <img 
            src="https://staging.adiyogitechnology.com/sushmagroup/images/a083c685dacc3cc178999bbd2187624d.png" 
            alt="" 
            className="h-[250px] md:h-[370px] rounded-xl"
          />
          <div
            className="w-full absolute bottom-[30%] text-center py-3 cursor-pointer opacity-80"
            style={{ backgroundColor: "rgb(63, 128, 174)" }}
          >
            <h1 className="text-white text-[20px] md:text-[30px] head">
              The Art of CUSTOMER<br />
              CENTRIC DESIGN
            </h1>
            <p className="text-white opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[300px] para transition-all duration-500 ease-in-out">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
              voluptatem! Dolor quo voluptatum consequuntur dolores. Veniam
              eligendi iusto, ad obcaecati quae error ducimus consectetur
              distinctio aliquam consequatur quod blanditiis quam.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full my-[40px] md:my-[70px]">
        <img 
          src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/3e8b373a6df6547a50ae2cb382d18a16.e61544fb.png" 
          alt="" 
          className="w-full h-auto"
        />
      </div>
    </>
  );
}
