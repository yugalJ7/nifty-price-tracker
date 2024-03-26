import React, { useState } from "react";
import NiftyPrice from "./NiftyPrice";

const PageHead = () => {
  const [trackElement, setTrackElement] = useState(null);

  const handleOnClick = (btnIndex) => {
    console.log(trackElement);
    setTrackElement(btnIndex);
  };

  return (
    <>
      <div className=" time-cont_span h-8 mt-24 z-30 flex justify-center max-[760px]:fixed bottom-0 w-full">
        <div className="flex gap-5 h-full bg-white items-center text-greyCustColor text-sm font-medium px-2.5 rounded">
          <p
            className={`bg-[${trackElement === 1 ? "#397ED1" : "white"}] text-${
              trackElement === 1 ? "white" : "greyCustColor"
            } rounded p-1.5`}
            onClick={() => handleOnClick(1)}
          >
            {trackElement === 1 ? "5 Minutes" : "5min"}
          </p>
          <p
            className={`bg-[${trackElement === 2 ? "#397ED1" : "white"}] text-${
              trackElement === 2 ? "white" : "greyCustColor"
            } rounded p-1.5`}
            onClick={() => handleOnClick(2)}
          >
            {trackElement === 2 ? "10 Minutes" : "10min"}
          </p>
          <p
            className={`bg-[${trackElement === 3 ? "#397ED1" : "white"}] text-${
              trackElement === 3 ? "white" : "greyCustColor"
            } rounded p-1.5`}
            onClick={() => handleOnClick(3)}
          >
            {trackElement === 3 ? "15 Minutes" : "15min"}
          </p>
          <p
            className={`bg-[${trackElement === 4 ? "#397ED1" : "white"}] text-${
              trackElement === 4 ? "white" : "greyCustColor"
            } rounded p-1.5`}
            onClick={() => handleOnClick(4)}
          >
            {trackElement === 4 ? "30 Minutes" : "30min"}
          </p>
          <p
            className={`bg-[${trackElement === 5 ? "#397ED1" : "white"}] text-${
              trackElement === 5 ? "white" : "greyCustColor"
            } rounded p-1.5`}
            onClick={() => handleOnClick(5)}
          >
            {trackElement === 5 ? "1 Hour" : "hour"}
          </p>
          <p
            className={`bg-[${trackElement === 6 ? "#397ED1" : "white"}] text-${
              trackElement === 6 ? "white" : "greyCustColor"
            } rounded p-1.5`}
            onClick={() => handleOnClick(6)}
          >
            {trackElement === 6 ? "1 Day" : "day"}
          </p>
        </div>
      </div>
      <NiftyPrice />
    </>
  );
};

export default PageHead;
