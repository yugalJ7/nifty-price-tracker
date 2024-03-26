import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { LuIndianRupee } from "react-icons/lu";
import { BiUpArrowAlt } from "react-icons/bi";

const NiftyPrice = () => {
  return (
    <div className="nifty-cont_price flex mx-32 gap-2 pt-5 pb-4">
      <IoIosArrowBack size={22} className="mt-1" />
      <div className="flex flex-col">
        <div className="flex gap-2">
          <img className="w-6" src="/NSE-icon.svg" alt="nse-icon" />
          <p className="text-xl font-medium tracking-tight">NIFTY 50</p>
        </div>
        <div className="flex items-center pl-1">
          <LuIndianRupee size={12} />
          <p className="text-[13px] font-[370]">22096.75</p>
          <BiUpArrowAlt
            size={22}
            className="text-[#4CBB17] ml-[4px] mb-[3px]"
          />
          <p className="text-[#4CBB17] text-[11px] font-[350] text-center">
            (0.00%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default NiftyPrice;
