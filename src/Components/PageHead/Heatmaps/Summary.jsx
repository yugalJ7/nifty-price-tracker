import React from "react";
import { FiInfo } from "react-icons/fi";
const Summary = ({ pointerPosition }) => {
  return (
    <div className="summary_container bg-white px-5 py-4 rounded-md">
      <div className="flex justify-between">
        <p className="text-sm font-semibold">Summary</p>
        <FiInfo className="text-greyCustColor" />
      </div>
      <div className="mx-14 flex flex-col items-center gap-7">
        <div className="mt-5 flex flex-col items-center relative">
          <img className="w-80" src="/red-green_bar.svg" alt="heatmapOne" />
          <img
            className={` w-5 top-[27px] left-${pointerPosition} absolute max-[1024px]:top-5 max-[800px]:top-3 max-[762px]:top-[27px] max-[479px]:top-4`}
            src="/pointer-blue.svg"
            alt=""
          />
          <div className="color_description flex mt-5 w-full justify-between">
            <div>
              <p className="text-sm text-center">3</p>
              <p className="text-xs mt-2 px-3 py-[2px] rounded bg-[#FFE2EB] text-[#EC2559]">
                Bearish
              </p>
            </div>
            <div>
              <p className="text-sm text-center">10</p>
              <p className="text-xs mt-2 px-3 py-[2px] rounded bg-[#EBEFF6] text-[#868D96]">
                Neutral
              </p>
            </div>
            <div>
              <p className="text-sm text-center">14</p>
              <p className="text-xs mt-2 px-3 py-[2px] rounded bg-[#E4FFD1] text-[#69D84F]">
                Bullish
              </p>
            </div>
          </div>
        </div>
        <div className="numbers grid grid-cols-[170px_minmax(170px,_1fr)_100px] grid-rows-2 ml-6 max-[1024px]:grid-cols-[140px_minmax(140px,_1fr)_70px]">
          <div className="mt-2.5">
            <p className="text-[13px] font-normal">22076.49</p>
            <p className="text-xs text-greyCustColor">EMA (20)</p>
          </div>
          <div className="mt-2.5">
            <p className="text-[13px] font-normal">22159.61</p>
            <p className="text-xs text-greyCustColor">SMA(20)</p>
          </div>
          <div className="mt-2.5">
            <p className="text-[13px] font-normal">51.48</p>
            <p className="text-xs text-greyCustColor">RSI(14)</p>
          </div>
          <div className="mt-2.5">
            <p className="text-[13px] font-normal">-96.92</p>
            <p className="text-xs text-greyCustColor">Awesome Osc.</p>
          </div>
          <div className="mt-2.5">
            <p className="text-[13px] font-normal">14.42</p>
            <p className="text-xs text-greyCustColor">Macd (12, 26, 9)</p>
          </div>
          <div className="mt-2.5">
            <p className="text-[13px] font-normal">-43.90</p>
            <p className="text-xs text-greyCustColor">CCI (20)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
