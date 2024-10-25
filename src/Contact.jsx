import React from "react";
import Image from "next/image";
import c from "./img/ccc.png";
import c1 from "./img/hand.png";
import { BsDownload } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      <div
        className="w-full bg-cover bg-center h-[400px] md:h-[500px] lg:h-[600px]"
        style={{
          backgroundImage: `url('https://staging.adiyogitechnology.com/sushmagroup/images/50a47ae02fe827cace4cb04eece57bc8.png')`,
        }}
      >
        <div className="w-full h-full bg-black opacity-60 flex flex-col items-center justify-center text-white">
          <h1 className="text-[32px] md:text-[50px] font-bold font-supra">CONTACT US</h1>
          <p className="text-center md:text-lg">Within the premises of the Sushma Township are reputed Schools.</p>
        </div>
      </div>

      <div className="relative w-[95%] mx-auto h-auto md:h-[150px] mb-10">
        <div className="w-full h-auto bg-[rgb(49,124,174)] p-5">
          <div className="flex flex-col md:flex-row justify-center items-center text-center space-x-0 md:space-x-5">
            <input
              type="text"
              placeholder="Your Name"
              className="border-b bg-transparent placeholder:text-white placeholder:text-[16px] md:placeholder:text-[20px] w-full mb-3 md:mb-0"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-b bg-transparent placeholder:text-white placeholder:text-[16px] md:placeholder:text-[20px] w-full mb-3 md:mb-0"
            />
            <input
              type="text"
              placeholder="Mobile"
              className="border-b bg-transparent placeholder:text-white placeholder:text-[16px] md:placeholder:text-[20px] w-full mb-3 md:mb-0"
            />
            <input
              type="text"
              placeholder="Message"
              className="border-b bg-transparent placeholder:text-white placeholder:text-[16px] md:placeholder:text-[20px] w-full mb-3 md:mb-0"
            />
            <button className="bg-white text-blue-700 w-full md:w-[150px] h-[40px] rounded-2xl mt-4">
              SUBMIT
            </button>
          </div>
        </div>
        <div className="w-full h-auto mx-auto text-black bg-[rgb(214,212,212)]">
          <Image src={c} />
        </div>
      </div>

      <div className="w-full mt-[130px] mb-[50px] grid grid-cols-1 md:grid-cols-[60%_40%] gap-5 px-5 md:px-[50px]">
        <div>
          <h1 className="text-[40px] md:text-[60px] uppercase font-bold font-supra" style={{ color: "#1E6DA4" }}>
            Presentation of
            <br />
            the sushma group
          </h1>
          <button className="bg-white border-2 btn2 rounded-lg w-full md:w-[270px] mt-5 h-[90px] text-center p-5 text-[24px] md:text-[30px] font-bold" style={{ color: "#1E6DA4" }}>
            <div className="flex gap-3 justify-center">
              <BsDownload className="mt-1 font-bold" /> Broucher
            </div>
          </button>
        </div>
        <div>
          <img
            className="w-full h-auto"
            src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/5c38dd308d0409a102cb3be9838ca36a.a8fda1f4.png"
            alt=""
          />
        </div>
      </div>

      <div className="w-full text-center">
        <h1 className="text-[35px] md:text-[45px] font-bold my-[30px] uppercase font-supra" style={{ color: "rgb(30, 109, 164)" }}>
          Corporate office
        </h1>
        <div className="w-full h-[250px] mb-[30px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>

      <div className="w-full p-5 md:p-10">
        <div className="my-5">
          <h1 className="text-[20px] font-bold uppercase text-gray-600">Sushma</h1>
          <h1 className="text-[20px] font-bold uppercase border-b" style={{ color: "rgb(30, 109, 164)" }}>
            RESIDENTIAL
          </h1>
          <p className="flex flex-wrap justify-center gap-4 font-bold text-gray-600">
            {Array.from({ length: 6 }, (_, index) => (
              <span key={index} className="border-r-2 border-gray-600 pr-2 last:border-0">
                SUSHMA BELLEZA
              </span>
            ))}
          </p>
        </div>
        {/* Repeat the residential section for more entries if needed */}
      </div>
    </>
  );
}
