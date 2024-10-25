import React from "react";
import Image from "next/image";
import logo from "./img/flogo.png";
import logo1 from "./img/flogo2.png";
import { FaPhoneAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function Foter() {
  return (
    <>
      <div className="text-center py-10 bg-[#104367]">
        <div className="flex justify-center gap-5 border-b pb-7">
          {/* <Image src={logo} /> */}
          <img src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/footerlogo.1084f886.png" alt="Footer Logo" className="max-w-full h-auto" />
        </div>
        <div className="my-8 border-b">
          <ul className="uppercase text-white flex flex-wrap justify-center gap-10 text-[18px] my-5">
            <li>About Us</li>
            <li>Products</li>
            <li>Location map</li>
            <li>Floor plans</li>
            <li>Price</li>
            <li>Amenities</li>
            <li>Gallery</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
          <ul className="uppercase text-white flex flex-wrap justify-center gap-10 text-[18px] my-5">
            <li>
              <FaPhoneAlt />
            </li>
            <li>+91 1234567890</li>
            <li>
              <FaPhoneAlt />
            </li>
            <li>+91 1234567890</li>
            <li>
              <CiFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <CiFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
        <p className="text-white text-[20px]">
          <span className="font-bold uppercase">Sales Partner</span>
          <span className="text-orange-600"> Reality </span>
          <span className="text-blue-500"> Nivesh: </span>
          <span>
            Showroom No. 12 level 2, UPTOWN INSIGNIA PR-7 Airport Road,
            Zirakpur, Punjab
          </span>
        </p>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center px-5 py-5 bg-white">
        <div>
          <ul className="flex gap-5 font-bold text-gray-800">
            <li>Disclaimer</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="mt-3 sm:mt-0">
          <h1 className="font-bold text-center sm:text-left">© Copyright 2024 Sushma GROUP. REALTY NIVESH. All Rights Reserved</h1>
        </div>
      </div>
    </>
  );
}
