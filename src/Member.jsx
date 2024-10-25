import React from "react";

export default function Member() {
  return (
    <>
      <div
        className="w-full py-10 px-3 grid grid-cols-1 md:grid-cols-[30%,40%,20%] gap-10 md:gap-20 overflow-hidden"
        style={{ backgroundColor: "#F3F3F3" }}
      >
        {/* 30% grid */}
        <div className="ml-5 md:ml-[40px]">
          <h1
            className="text-[32px] md:text-[40px] font-bold uppercase"
            style={{ color: "rgb(30, 109, 164)" }}
          >
            MEET OUR <br /> BOARD MEMBER
          </h1>
          <p className="text-[16px] md:text-[20px] mt-5">
            Within the premises of the Sushma Township are reputed Schools.
          </p>
        </div>

        {/* 40% grid */}
        <div>
          <div className="flex flex-col md:flex-row">
            <img
              src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/9c49582780f3d13e275ac5566dc36a67.546f523e.png"
              alt=""
              className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full"
            />
            <div className="ml-0 md:ml-5 mt-5 md:mt-0">
              <h1 className="font-bold" style={{ color: "rgb(30, 109, 164)" }}>
                Mr. Mohan Mittal
              </h1>
              <hr />
              <h1 className="font-bold">Director</h1>
            </div>
          </div>

          <div
            className="w-full md:w-[500px] mt-10 rounded p-6 md:p-10 text-white"
            style={{ backgroundColor: "rgb(30, 109, 164)" }}
          >
            <h1 className="text-[14px] md:text-[18px]">
              A type specimen book. It has survived not only five centuries,
              but also the l. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make.
            </h1>
          </div>
        </div>

        {/* 20% grid */}
        <div className="flex flex-col space-y-5">
          <img
            src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/be6c1d6f9d3deceef082d270ecb0fda5.0cf3fc9e.png"
            alt=""
            className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full"
          />
          <img
            src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/9c49582780f3d13e275ac5566dc36a67.546f523e.png"
            alt=""
            className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full"
          />
          <img
            src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/7a42b8662ac197bac9ce33ab327e33ac.c91e4c30.png"
            alt=""
            className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full"
          />
        </div>
      </div>
    </>
  );
}
