import React from "react";
import { SlCalender } from "react-icons/sl";

export default function Blog() {
  return (
    <>
      <div className="w-full my-[50px] text-center">
        <h1 style={{ color: "rgb(49, 124, 174)" }} className="text-[40px] md:text-[55px] font-bold font-supra">
          BLOGS
        </h1>
        <p className="text-[16px] md:text-[20px] text-gray-600">
          Within the premises of the Sushma Township are reputed Schools.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4 md:p-8">
        <div className="rounded-lg shadow-gray-300 shadow-lg my-[30px] overflow-hidden">
          <img
            src="https://staging.adiyogitechnology.com/sushmagroup/images/07997f165ac6421d4b42a5b0af535e32.png"
            alt=""
            className="rounded-xl hover:scale-105 transition-transform duration-300"
          />
          <div className="flex space-x-3 mt-3 px-4">
            <SlCalender className="text-red-600" />
            <h1 className="text-[12px] text-gray-500">Published on June 20, 2023</h1>
          </div>
          <h1 className="font-bold text-[18px] md:text-[22px] px-4 mt-2 text-gray-800">
            What is a Short-Term Apartment Rentals? | Confident Group
          </h1>
          <p className="text-[14px] text-gray-600 px-4">
            Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top.
          </p>
          <button className="rounded-xl border text-blue-700 py-1 px-5 my-5 ml-4">
            Read More
          </button>
        </div>
        
        {/* Repeat for other blog items */}
        
        <div className="rounded-lg shadow-gray-300 shadow-lg my-[30px] overflow-hidden">
          <img
            src="https://staging.adiyogitechnology.com/sushmagroup/images/eb7d9153fa4d52315788c875591813cd.png"
            alt=""
            className="rounded-xl hover:scale-105 transition-transform duration-300"
          />
          <div className="flex space-x-3 mt-3 px-4">
            <SlCalender className="text-red-600" />
            <h1 className="text-[12px] text-gray-500">Published on June 20, 2023</h1>
          </div>
          <h1 className="font-bold text-[18px] md:text-[22px] px-4 mt-2 text-gray-800">
            What is a Short-Term Apartment Rentals? | Confident Group
          </h1>
          <p className="text-[14px] text-gray-600 px-4">
            Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top.
          </p>
          <button className="rounded-xl border text-blue-700 py-1 px-5 my-5 ml-4">
            Read More
          </button>
        </div>

        <div className="rounded-lg shadow-gray-300 shadow-lg my-[30px] overflow-hidden">
          <img
            src="https://staging.adiyogitechnology.com/sushmagroup/images/a083c685dacc3cc178999bbd2187624d.png"
            alt=""
            className="rounded-xl hover:scale-105 transition-transform duration-300"
          />
          <div className="flex space-x-3 mt-3 px-4">
            <SlCalender className="text-red-600" />
            <h1 className="text-[12px] text-gray-500">Published on June 20, 2023</h1>
          </div>
          <h1 className="font-bold text-[18px] md:text-[22px] px-4 mt-2 text-gray-800">
            What is a Short-Term Apartment Rentals? | Confident Group
          </h1>
          <p className="text-[14px] text-gray-600 px-4">
            Paper-thin veggies, a shower of herbs, a pile of fried crispy red curry rice, and a limey garlicky vinaigrette all over top.
          </p>
          <button className="rounded-xl border text-blue-700 py-1 px-5 my-5 ml-4">
            Read More
          </button>
        </div>
      </div>

      <div className="w-full text-center mx-auto">
        <button
          className="rounded-2xl text-white py-3 my-[30px] px-7"
          style={{ backgroundColor: "rgb(49, 124, 174)" }}
        >
          SEE ALL BLOGS
        </button>
      </div>
      
      <div className="w-full my-[30px]">
        <div
          className="w-full md:w-[70%] mx-auto h-[100px] flex justify-between rounded-xl py-4 px-6"
          style={{ backgroundColor: "#424242" }}
        >
          <h1 className="text-white text-[20px] md:text-[30px] mt-2">
            SCHEDULE YOUR SITE VISIT
          </h1>
          <button className="bg-white rounded-full px-5 text-[14px] md:text-[16px] py-0 h-[40px] mt-3">
            CONNECT WITH US
          </button>
        </div>
      </div>
    </>
  );
}
