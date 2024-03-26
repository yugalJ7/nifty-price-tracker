import React, { useState, createContext } from "react";
import NiftyPrice from "./NiftyPrice";
import Graph from "./Graph";

const timeData = [
  {
    id: 1,
    shorTime: "5min",
    time: "5 Minutes",
    pointer: "8",
  },
  {
    id: 2,
    shorTime: "10min",
    time: "10 Minutes",
    pointer: "9",
  },
  {
    id: 3,
    shorTime: "15min",
    time: "15 Minutes",
    pointer: "7",
  },
  {
    id: 4,
    shorTime: "30min",
    time: "30 Minutes",
    pointer: "4",
  },
  {
    id: 5,
    shorTime: "hour",
    time: "1 Hour",
    pointer: "5",
  },
  {
    id: 6,
    shorTime: "day",
    time: "1 Day",
    pointer: "6",
  },
];

const PageHead = () => {
  const [trackElement, setTrackElement] = useState(null);
  const [pointerPosition, setPointerPosition] = useState(0);

  const handleOnClick = (btnIndex, position) => {
    console.log(pointerPosition);
    setTrackElement(btnIndex);
    setPointerPosition(position);
  };

  return (
    <>
      <div className=" time-cont_span h-8 mt-24 z-30 flex justify-center max-[760px]:fixed bottom-0 w-full">
        <div className="flex gap-5 h-full bg-white items-center text-greyCustColor text-sm font-medium px-2.5 rounded">
          {timeData.map((item, index) => {
            return (
              <p
                key={index}
                className={`bg-[${
                  trackElement === index ? "#397ED1" : "white"
                }] text-${
                  trackElement === index ? "white" : "greyCustColor"
                } rounded p-1.5`}
                onClick={() => handleOnClick(index, item.pointer)}
              >
                {trackElement === index ? item.time : item.shorTime}
              </p>
            );
          })}
        </div>
      </div>
      <NiftyPrice />
      <Graph pointerPosition={pointerPosition} />
    </>
  );
};

export default PageHead;
