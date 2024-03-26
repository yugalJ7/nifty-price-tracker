import React from "react";
import "./index.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import PageHead from "./Components/PageHead/PageHead";
import Graph from "./Components/Showdata/Graph";

const App = () => {
  return (
    <div>
      <Navbar />
      <PageHead />
      <Graph />
      <Footer />
    </div>
  );
};

export default App;
