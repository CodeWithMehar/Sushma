"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import myimg from "./img/myimg.png";

const faqs = [
  {
    question: "1. What are the ongoing residential Projects by Sushma Group?",
    answer:
      "Sushma Belleza, Sushma Joynest Moh, Sushma Valencia, Sushma Crescent, Sushma Grande NXT & Sushma Grande are the Ongoing Residential Projects in Zirakpur By Sushma Group.",
  },
  {
    question: "2. What are the ongoing Commercial Projects by Sushma Group?",
    answer:
      "Sushma Pristine, Sushma Empiria, Sushma Metropol, Sushma Capital & Sushma Infinium are Commercial Projects by Sushma Group.",
  },
  {
    question: "3. How do I track my order?",
    answer: "You can track your order using the tracking link...",
  },
  {
    question: "4. What are the ongoing Commercial Projects by Sushma Group?",
    answer:
      "Sushma Pristine, Sushma Empiria, Sushma Metropol, Sushma Capital & Sushma Infinium are Commercial Projects by Sushma Group.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full text-center my-[30px]">
        <h1
          className="text-[50px] font-bold font-supra"
          style={{ color: "rgb(30, 109, 164)" }}
        >
          FAQ’s
        </h1>
        <p className="text-[18px] text-gray-500">
          Within the premises of the Sushma Township are reputed Schools.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 h-auto">
        <div className="mx-[10px] md:mx-[50px] mt-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-300 rounded-lg mb-4 transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "bg-blue-800 text-white"
                  : "bg-white text-black"
              }`}
              style={{ borderColor: "rgb(30, 109, 164)" }}
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <h2 className="text-lg font-semibold">{faq.question}</h2>
                <FontAwesomeIcon
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                />
              </div>
              {openIndex === index && (
                <div className="p-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <img
            src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/9500423e943f26118d254c27a17d48bb.7e06bcba.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full my-[30px]">
        <div
          className="w-[90%] mx-auto h-[100px] flex flex-col md:flex-row justify-between items-center rounded-xl py-4 px-6"
          style={{ backgroundColor: "rgb(30, 109, 164)" }}
        >
          <h1 className="text-white text-[30px] mt-2 text-center">
            SCHEDULE YOUR SITE VISIT
          </h1>
          <button className="bg-white rounded-full px-5 text-[16px] py-2 h-[40px] mt-3 md:mt-0">
            CONNECT WITH US
          </button>
        </div>
      </div>
      <div
        className="w-full bg-cover bg-center h-auto md:h-[400px]"
        style={{
          backgroundImage: `url('https://staging.adiyogitechnology.com/sushmagroup/images/f0103bb1d31d8508ebd43af012650f4d.png')`,
        }}
      >
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <div className="bg-[#317CAE] px-[30px] w-[90%] md:w-[500px] h-auto md:h-[400px] opacity-80 flex flex-col justify-center items-center">
            <h1 className="text-[40px] md:text-[60px] font-bold text-white mt-[20px] md:mt-[50px] text-center">
              Project
              <br />
              Walk-through
            </h1>
            <Image src={myimg} className="w-[90%] h-auto md:w-[450px] md:h-[150px]" />
          </div>
          <div className="mt-5 md:mt-[100px]">
            <img
              src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/Group%203824.aab92f35.png"
              alt=""
              className="play"
            />
          </div>
        </div>
      </div>
    </>
  );
}
