import React from "react";

const Footer = () => {
  return (
    <nav className="flex justify-between bg-white shadow-md h-16">
      <div className="navbar-cont_logo flex items-center ml-32 max-sm:ml-7 ">
        <img
          className=" h-3 object-contain max-sm:w-16"
          src="/zerodha-icon.svg"
          alt="Zerodha Icon"
        />
        <span className="block mx-2 w-px h-7 bg-lightGreyBdColor max-sm:h-6 max-sm:mx-1"></span>
        <img
          className="w-14 h-8 max-sm:w-12 max-sm:h-7"
          src="/poweredByStreak-icon.png"
          alt="Streak Icon"
        />
      </div>
      <div className="mr-32 flex items-center gap-3 font-openSans max-sm:mr-4 max-sm:gap-1 ">
        <button className="text-xs px-6 py-2 font-normal tracking-wide rounded-md hover:bg-[#F7F7FA] max-sm:px-4">
          Home
        </button>
        <button className="bg-cyanBlueColor text-white font-light tracking-wide text-xs px-6 py-2 rounded-md max-sm:w-20 max-sm:px-4 ">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Footer;
