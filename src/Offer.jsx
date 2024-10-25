"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Image from "next/image";
import t1 from "./img/t1.png";
import t2 from "./img/star.png";
import t3 from "./img/t3.png";
import { CiFacebook } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { RiTelegramLine } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="py-3 border-y border-gray-300 flex justify-between no-underline"
        >
          <Tab label="RESIDENTIAL" {...a11yProps(0)} className="mx-2 md:mx-6" />
          <Tab label="COMMERCIAL" {...a11yProps(1)} className="mx-2 md:mx-6" />
          <Tab label="SEE ALL PROJECT" {...a11yProps(2)} className="mx-2 md:mx-6" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="w-full grid grid-cols-1 md:grid-cols-[60%,32%,8%] h-auto md:h-[80vh] mb-[200px]">
          <div className="relative">
            <img src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/sushmacrescentPH-2.4cd90ec7.png" alt="" className="h-full w-full"/>
            <Image src={t2} className="absolute bottom-[68%] left-[75%] star hidden md:block" />
          </div>
          <div className="p-5 md:p-[40px] shadow-xl">
            <img src="https://staging.adiyogitechnology.com/sushmagroup/_next/static/media/shushmalogoupcominfg.4690fab1.png" alt="" className="w-[150px] md:w-[200px]"/>
            <h1 className="uppercase text-[20px] md:text-[30px] font-bold my-2 md:my-3">
              sushma belleza
            </h1>
            <h1 style={{ color: "#1E6DA4" }} className="font-semibold text-[18px] md:text-[22px]">Rera Number</h1>
            <p className="text-[16px] md:text-[20px] mb-2 md:mb-3">41125151584215482</p>
            <h1 style={{ color: "#1E6DA4" }} className="font-semibold text-[18px] md:text-[22px]">Offerings</h1>
            <p className="text-[16px] md:text-[20px] mb-2 md:mb-3">41125151584215482</p>
            <h1 style={{ color: "#1E6DA4" }} className="font-semibold text-[18px] md:text-[22px]">Configuration</h1>
            <p className="text-[16px] md:text-[20px] mb-2 md:mb-3">G+17</p>
            <h1 style={{ color: "#1E6DA4" }} className="font-semibold text-[18px] md:text-[22px]">Size Available</h1>
            <p className="text-[16px] md:text-[20px] mb-2 md:mb-3">500 Sqft - 1000 Sqft</p>
            <div className="flex space-x-3 md:space-x-5 text-[30px] md:text-[50px]" style={{ color: "rgb(30, 109, 164)" }}>
              <CiFacebook />
              <RiTelegramLine />
              <PiWhatsappLogoThin />
            </div>
            <button className="py-1 px-3 border mt-3 md:mt-5 text-[rgb(30, 109, 164)] rounded" style={{ borderColor: "rgb(30, 109, 164)" }}>
              Explore Now
            </button>
          </div>
          <div className="w-full text-center p-3 flex flex-col" style={{ backgroundColor: "rgb(30, 109, 164)" }}>
            <h1 className="rotate-90 text-white whitespace-nowrap pt-10 text-[16px] md:text-[20px] uppercase pb-3 tracking-[5px] md:tracking-[10px]">
              Residential
            </h1>
            <div className="text-white mt-5 md:mt-[150px]">
              <FaRegBuilding className="text-[20px] md:text-[30px] ml-5 mb-3" />
              <h1 className="font-semibold text-[14px] md:text-[18px]">Type Fully Furnished</h1>
              <LiaRupeeSignSolid className="text-[20px] md:text-[30px] ml-5 my-3" />
              <h1 className="font-semibold text-[14px] md:text-[18px]">Start from ₹ 70 Lakhs*</h1>
              <FaRegBuilding className="text-[20px] md:text-[30px] ml-5 mb-3" />
              <h1 className="font-semibold text-[14px] md:text-[18px]">Type Fully Furnished</h1>
            </div>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        item2
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        item3
      </CustomTabPanel>
    </Box>
  );
}
