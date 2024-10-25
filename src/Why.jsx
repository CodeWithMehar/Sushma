import React from "react";

export default function Why() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-[30%_70%] h-auto lg:h-[90vh] mb-[100px]">
      <div className="h-full w-full">
        <video
          src="https://staging.adiyogitechnology.com/sushmagroup/videos/whysushmavideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="py-10 px-5 text-center text-white flex flex-col items-center justify-center"
        style={{ backgroundColor: "rgb(30, 109, 164)" }}
      >
        <h1 className="font-bold uppercase font-supra text-2xl lg:text-4xl mb-6">
          Why Sushma Group
        </h1>
        <p className="text-[16px] lg:text-[18px] font-semibold mb-8">
          Within the premises of the Sushma Township are reputed Schools.
        </p>
        
        <div className="space-y-6 w-full">
          {[...Array(5)].map((_, index) => (
            <div className="flex flex-col lg:flex-row justify-around" key={index}>
              <div className="flex items-center space-x-4 lg:space-x-5 border-b py-5">
                <img
                  src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/building_icon.d3942250.png"
                  alt="Building Icon"
                  className="w-10 h-10"
                />
                <h1 className="font-bold text-[16px] lg:text-[20px]">
                  Quality Construction
                </h1>
              </div>
              <div className="flex items-center space-x-4 lg:space-x-5 border-b py-5 mt-4 lg:mt-0">
                <img
                  src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/building_icon.d3942250.png"
                  alt="Building Icon"
                  className="w-10 h-10"
                />
                <h1 className="font-bold text-[16px] lg:text-[20px]">
                  Quality Construction
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
