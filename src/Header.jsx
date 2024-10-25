"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo2 from './img/meni logo.png';

export default function SlideableMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setBgColor("bg-black");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <div className={`flex justify-between items-center ${bgColor} text-white p-2 fixed w-full z-40 transition-colors duration-300`}>
        {/* Logo */}
        <div className="text-lg font-bold px-4 md:px-10">
          <img 
            src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/sushmagroup-whitelogo.b2c4b297.png" 
            alt="Logo" 
            className="w-[100px] sm:w-[120px] md:w-[150px]" 
          />
        </div>
        {/* Call Now and Menu Button */}
        <div className="flex space-x-3 px-4 md:px-10">
          <button className="bg-white text-blue-700 rounded-2xl py-1 px-3 text-[10px] sm:text-[11px] md:text-[12px] lg:px-4">
            CALL NOW
          </button>
          <button onClick={() => setIsOpen(true)} className="text-white text-2xl">
            <FaBars className="text-[26px] sm:text-[30px]" />
          </button>
        </div>
      </div>

      {/* Slideable Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#1E6EA5] transform transition-transform duration-500 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Left Image Section */}
          <div className="w-full md:w-[50%] flex justify-center items-center p-6 sm:p-8">
            <Image src={logo2} className="max-w-[80%] sm:max-w-[70%] md:max-w-[60%]" alt="Menu Logo" />
          </div>
          {/* Right Menu Section */}
          <div className="w-full md:w-[50%] bg-white p-6 sm:p-8 relative overflow-y-auto">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-5 text-2xl">
              <FaTimes className="text-[32px] md:text-[40px] font-light" />
            </button>
            <ul className="text-[#1E6DA4] text-[18px] sm:text-[22px] md:text-[25px] lg:text-[27px] space-y-4 md:space-y-5 lg:space-y-6 mt-10">
              <li className="py-2 border-b">ABOUT US</li>
              <li className="py-2 border-b">WHY SUSHMA GROUP</li>
              <li className="py-2 border-b">OUR PROJECT</li>
              <li className="py-2 border-b">OUR STORY</li>
              <li className="py-2 border-b">MEDIA</li>
              <li className="py-2 border-b">SUSHMA SERVICE PARTNER</li>
              <li className="py-2 border-b">FAQ's</li>
              <li className="py-2 border-b">CONTACT US</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
