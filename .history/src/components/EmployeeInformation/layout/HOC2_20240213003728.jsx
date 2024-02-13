import React, { useState } from "react";
import Sidebar2 from "./Sidebar2";
import Offcanvas from "react-bootstrap/Offcanvas";
const HOC2 = (Wcomponenet) => {
  return function Component() {
    const [hamb, setHamb] = useState(false);
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    return (
      <>
        <section className="flex overflow-x-hidden">
          {/* Sidebar */}
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Sidebar2 hamb={hamb} setHamb={setHamb} />
            </Offcanvas.Body>
          </Offcanvas>
          <div
            className={
              hamb
                ? " absolute top-0 z-30 md:w-auto shadow-md sm:bg-[#1A9FB2]  w-60 transition-all md:-left-full left duration-150  h-screen  left-0 "
                : " md:w-72 z-30 bg-[#1A9FB2]  shadow-md  md:static absolute top-0 -left-full  h-screen transition-all duration-150 "
            }
          >
            <Sidebar2 hamb={hamb} setHamb={setHamb} />
          </div>
          {/* Components & Navbar */}
          <div
            className={
              hamb
                ? " transition-all px-4 py-2  bg-white duration-150 w-full h-screen"
                : " w-full h-screen  px-4 py-2  bg-white z-50 transition-all duration-150 "
            }
          >
            <div className="my-6 text-[#000] h-[87%] wcomp overflow-y-auto">
              <Wcomponenet />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC2;
