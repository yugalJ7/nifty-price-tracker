import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const Moving = () => {
  return (
    <div className="movin&averages_container bg-white px-5 py-4 rounded-md">
      <div className="flex justify-between">
        <p className="text-sm font-semibold">Moving averages</p>
      </div>
      <div className="mx-14 flex flex-col items-center gap-5 ">
        <div className="mt-5 flex flex-col items-center">
          <img className="w-80" src="orange-blue_bar.svg" alt="" />
          <div className="color_description flex mt-5 w-full justify-between">
            <div>
              <p className="text-sm text-center">10</p>
              <p className="text-xs mt-2 px-3 py-[2px] rounded bg-[#FFF5E6] text-[#FF9C1A]">
                Bearish
              </p>
            </div>
            <div>
              <p className="text-sm text-center">2</p>
              <p className="text-xs mt-2 px-3 py-[2px] rounded bg-[#EBEFF6] text-[#868D96]">
                Neutral
              </p>
            </div>
            <div>
              <p className="text-sm text-center">5</p>
              <p className="text-xs mt-2 px-3 py-[2px] rounded bg-[#E1F3FF] text-[#2396EA]">
                Bullish
              </p>
            </div>
          </div>
        </div>

        <div className="numbers grid grid-cols-1 grid-rows-2 w-full gap-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 ">
              <p className="text-[9px] text-[#EC2559]   px-[7px] pt-[3px] pb-0.5 rounded-sm text-center bg-[#FFE2EB]">
                S
              </p>
              <p className="text-xs font-[350]">EMA (5)</p>
            </div>
            <p className="text-[13px] font-[350]">22091.28</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 ">
              <p className="text-[9px] text-[#2396EA]   px-[7px] pt-[3px] pb-0.5 rounded-sm text-center bg-[#E1F3FF]">
                B
              </p>
              <p className="text-xs font-[350]">SMA (5)</p>
            </div>
            <p className="text-[13px] font-[350]">21953.99</p>
          </div>
        </div>
        <div className=" w-full flex flex-row justify-end items-center text-greyCustColor hover:text-[#2396EA] ">
          <p className="text-sm font-light ">View Details</p>
          <IoIosArrowDown className=" ml-1 cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default Moving;
