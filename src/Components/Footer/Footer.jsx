import React from "react";
import { PiCopyrightThin } from "react-icons/pi";
const Footer = () => {
  return (
    <div className="bg-[#F3F3F8] mt-4 px-20 pb-16 pt-7">
      <div className="flex items-center gap-1">
        <PiCopyrightThin size={10} className="text-[#9BABC6]" />
        <p className="text-xs tracking-normal text-[#9BABC6] font-light">
          Powered by
        </p>
        <img className="w-13 h-4 ml-1" src="/streak-icon.png" alt="streak" />
      </div>
      <div className="flex flex-col items-start gap-1">
        <img
          className="h-4 mt-10 grayscale"
          src="/zerodha-icon.svg"
          alt="zerodha"
        />
        <p className="text-xs tracking-normal text-[#9BABC6] font-light">
          NSE &BSE-SEBI Registration No: INZO00031633 CDSL SEBI Registration No:
          IN-DP-431-2019
        </p>
      </div>
    </div>
  );
};

export default Footer;
