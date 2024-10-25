import React from "react";
import img1 from "./img/news1.png";
import img2 from "./img/news2.png";
import img3 from "./img/news3.png";
import Image from "next/image";

export default function News() {
  return (
    <>
      <div className="w-full my-[50px] text-center bg-gray-100 py-10">
        <h1
          style={{ color: "rgb(49, 124, 174)" }}
          className="text-[45px] font-bold font-supra"
        >
          NEWS & EVENTS
        </h1>
        <p className="text-[20px] text-gray-600">
          Within the premises of the Sushma Township are reputed Schools.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full my-8 px-4 gap-5">
          <div>
            <img
              src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/1eba12b64ff6cb579cb2bbe2ee8be3ed.6b9aea51.png"
              alt=""
              className="rounded-xl h-[300px] w-full hover:scale-110 ease-in duration-300"
            />
            <h1
              style={{ color: "rgb(49, 124, 174)" }}
              className="font-bold my-2 text-left"
            >
              Nov 11, 2023
            </h1>
            <h1 className="text-[18px] text-gray-800 font-bold text-left">
              What is a Short-Term Apartment <br />
              Rentals? | Confident Group
            </h1>
          </div>
          <div>
            <img
              src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/d6f6aa4c4f06df6944abb75e19b2c7f8.0795742e.png"
              alt=""
              className="rounded-xl h-[300px] w-full hover:scale-110 ease-in duration-300"
            />
            <h1
              style={{ color: "rgb(49, 124, 174)" }}
              className="font-bold my-2 text-left"
            >
              Nov 11, 2023
            </h1>
            <h1 className="text-[18px] text-gray-800 font-bold text-left">
              What is a Short-Term Apartment <br />
              Rentals? | Confident Group
            </h1>
          </div>
          <div>
            <img
              src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/8c9ce481accd7d4dfac53828d66669a1.f7e4bb50.png"
              alt=""
              className="rounded-xl h-[300px] w-full hover:scale-110 ease-in duration-300"
            />
            <h1
              style={{ color: "rgb(49, 124, 174)" }}
              className="font-bold my-2 text-left"
            >
              Nov 11, 2023
            </h1>
            <h1 className="text-[18px] text-gray-800 font-bold text-left">
              What is a Short-Term Apartment <br />
              Rentals? | Confident Group
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
