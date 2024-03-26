import React from "react";
import Summary from "./Heatmaps/Summary";
import Support from "./Heatmaps/Support";
import Moving from "./Heatmaps/Moving";
import Oscillator from "./Heatmaps/Oscillator";

const Graph = () => {
  return (
    <div className="grid gap-5 grid-cols-2 grid-rows-[330px_minmax(300px,_1fr)] ml-32 mr-32">
      <Summary />
      <Support />
      <Moving />
      <Oscillator />
    </div>
  );
};

export default Graph;
