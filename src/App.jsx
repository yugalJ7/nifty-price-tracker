import React from "react";
import "./index.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import PageHead from "./Components/PageHead/PageHead";

const App = () => {
  return (
    <div>
      <Navbar />
      <PageHead />
      <Footer />
    </div>
  );
};

export default App;
