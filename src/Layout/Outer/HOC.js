/** @format */

import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar";

const HOC = ({ Wcomponenet, isNavbar = true }) => {
  return function Component() {
    const [hamb, setHamb] = useState(false);
    return (
      <>
        <section className="flex" style={{ overflow: "hidden" }}>
          {/* Sidebar */}
          <div
            className={
              hamb
                ? " absolute top-0 z-30 md:w-auto shadow-md sm:bg-[#1A9FB2]  w-60 transition-all md:-left-full left duration-150  h-screen  left-0 "
                : " md:w-72 z-30 bg-[#1A9FB2]  shadow-md  md:static absolute top-0 -left-full  h-screen transition-all duration-150 "
            }
          >
            <Sidebar hamb={hamb} setHamb={setHamb} />
          </div>
          {/* Components & Navbar */}
          <div
            className={
              hamb
                ? " transition-all px-4 py-2  bg-white duration-150 w-full h-screen"
                : " w-full h-screen  px-4 py-2  bg-white z-50 transition-all duration-150 "
            }
          >
            {isNavbar && <Navbar hamb={hamb} setHamb={setHamb} />}
            <div className="my-6 text-[#000] h-[87%] wcomp overflow-y-auto">
              <Wcomponenet />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
