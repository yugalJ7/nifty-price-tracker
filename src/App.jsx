import React from "react";
import "./index.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import PageHead from "./Components/PageHead/PageHead";
import Graph from "./Components/Showdata/Graph";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <PageHead />
      <Graph />
    </div>
  );
};

export default App;
