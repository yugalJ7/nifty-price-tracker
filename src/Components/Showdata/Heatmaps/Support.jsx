import React from "react";
import { FiInfo } from "react-icons/fi";
const Support = () => {
  return (
    <div className="support&resist_container bg-white px-5 py-4 rounded-md">
      <div className="flex justify-between">
        <p className="text-sm font-semibold">Support & Resistance</p>
        <FiInfo className="text-greyCustColor" />
      </div>
      <div className="mx-14 flex flex-col items-center gap-16">
        <div className="mt-5 relative">
          <img className="w-80" src="/straight-blue_bar.svg" alt="" />
          <img
            className=" w-5 left-2/4 top-[27px] absolute "
            src="/pointer-greenn.svg"
            alt="pointer"
          />
          <div className="color_description flex flex-row mt-3 justify-between">
            <div className="flex gap-10">
              <p className="text-xs">S3</p>
              <p className="text-xs">S2</p>
              <p className="text-xs">S1</p>
            </div>
            <div className="flex gap-10">
              <p className="text-xs">R1</p>
              <p className="text-xs">R2</p>
              <p className="text-xs">R3</p>
            </div>
          </div>
        </div>

        <div className="numbers grid grid-cols-[170px_minmax(170px,_1fr)_100px] grid-rows-2 ml-6 max-[1024px]:grid-cols-[140px_minmax(140px,_1fr)_70px]">
          <div className="mt-2.5">
            <p className="text-[13px] font-normal">21576.17</p>
            <p className="text-xs text-greyCustColor">S1</p>
          </div>
          <div className="mt-2.5">
            <p className="text-[13px] font-normal">21169.53</p>
            <p className="text-xs text-greyCustColor">S2</p>
          </div>
          <div className="mt-2.5">
            <p className="text-[13px] font-normal">20402.23</p>
            <p className="text-xs text-greyCustColor">S3</p>
          </div>
          <div className="mt-2.5">
            <p className="text-[13px] font-normal">22343.47</p>
            <p className="text-xs text-greyCustColor">R1</p>
          </div>
          <div className="mt-2.5">
            <p className="text-[13px] font-normal">22704.13</p>
            <p className="text-xs text-greyCustColor">R2</p>
          </div>
          <div className="mt-2.5">
            <p className="text-[13px] font-normal">23471.43</p>
            <p className="text-xs text-greyCustColor">R3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
