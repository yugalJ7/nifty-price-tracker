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
      <div className=" time-cont_span h-8 mt-24 flex justify-center">
        <div className="flex gap-5 h-full bg-white items-center text-greyCustColor text-sm font-medium">
          <p
            className={`bg-[${trackElement === 1 ? "#397ED1" : "white"}]`}
            onClick={() => handleOnClick(1)}
          >
            {trackElement === 1 ? "5 Minutes" : "5min"}
          </p>
          <p
            className={`bg-[${trackElement === 2 ? "#397ED1" : "white"}]`}
            onClick={() => handleOnClick(2)}
          >
            {trackElement === 2 ? "10 Minutes" : "10min"}
          </p>
          <p
            className={`bg-[${trackElement === 3 ? "#397ED1" : "white"}]`}
            onClick={() => handleOnClick(3)}
          >
            {trackElement === 3 ? "15 Minutes" : "15min"}
          </p>
          <p
            className={`bg-[${trackElement === 4 ? "#397ED1" : "white"}]`}
            onClick={() => handleOnClick(4)}
          >
            {trackElement === 4 ? "30 Minutes" : "30min"}
          </p>
          <p
            className={`bg-[${trackElement === 5 ? "#397ED1" : "white"}]`}
            onClick={() => handleOnClick(5)}
          >
            {trackElement === 5 ? "1 Hour" : "hour"}
          </p>
          <p
            className={`bg-[${trackElement === 6 ? "#397ED1" : "white"}]`}
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
