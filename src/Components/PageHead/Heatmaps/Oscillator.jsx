import React from "react";
import { FiInfo } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
const Oscillator = ({ pointerPosition }) => {
  return (
    <div className="oscillators_container bg-white px-5 py-4 rounded-md">
      <div className="flex justify-between">
        <p className="text-sm font-semibold">Oscillators</p>
        <FiInfo className="text-greyCustColor" />
      </div>
      <div className="mx-14 flex flex-col items-center gap-5 ">
        <div className="mt-5 flex flex-col items-center relative">
          <img className="w-80" src="/red-blue_bar.svg" alt="" />
          <img
            className={`w-5 left-${pointerPosition} top-[27px] absolute max-[1024px]:top-5 max-[800px]:top-3 max-[762px]:top-[27px] max-[479px]:top-4`}
            src="/pointer-blue.svg"
            alt="pointer"
          />
          <div className="color_description flex mt-5 w-full justify-between">
            <div>
              <p className="text-sm text-center">4</p>
              <p className="text-xs mt-2 px-3 py-[2px] rounded bg-[#FFE2EB] text-[#EC2559]">
                Bearish
              </p>
            </div>
            <div>
              <p className="text-sm text-center">6</p>
              <p className="text-xs mt-2 px-3 py-[2px] rounded bg-[#EBEFF6] text-[#868D96]">
                Neutral
              </p>
            </div>
            <div>
              <p className="text-sm text-center">0</p>
              <p className="text-xs mt-2 px-3 py-[2px] rounded bg-[#E4ECFF] text-[#0950E7]">
                Bullish
              </p>
            </div>
          </div>
        </div>

        <div className="numbers grid grid-cols-1 grid-rows-2 w-full gap-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 ">
              <p className="text-[9px] text-[#868D96]   px-[7px] pt-[3px] pb-0.5 rounded-sm text-center bg-[#EBEFF6]">
                N
              </p>
              <p className="text-xs font-[350]">RSI (14)</p>
            </div>
            <p className="text-[13px] font-[350]">40.38</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 ">
              <p className="text-[9px] text-[#868D96]   px-[7px] pt-[3px] pb-0.5 rounded-sm text-center bg-[#EBEFF6]">
                N
              </p>
              <p className="text-xs font-[350]">Stoch.%K (14, 3, 3)</p>
            </div>
            <p className="text-[13px] font-[350]">14.54</p>
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

export default Oscillator;
