import React from "react";
import Summary from "./Heatmaps/Summary";
import Support from "./Heatmaps/Support";
import Moving from "./Heatmaps/Moving";
import Oscillator from "./Heatmaps/Oscillator";

const Graph = ({ pointerPosition }) => {
  return (
    <div className="grid gap-5 grid-cols-2 grid-rows-[330px_minmax(300px,_1fr)] mx-32  max-[768px]:grid-cols-1 max-[1024px]:mx-14 max-[768px]:mx-28 max-[590px]:mx-9 max-[329px]:mx-4">
      <Summary pointerPosition={pointerPosition} />
      <Support pointerPosition={pointerPosition} />
      <Moving pointerPosition={pointerPosition} />
      <Oscillator pointerPosition={pointerPosition} />
    </div>
  );
};

export default Graph;
