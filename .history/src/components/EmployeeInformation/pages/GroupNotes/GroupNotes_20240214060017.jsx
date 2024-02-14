/** @format */

import React from "react";
import HOC2 from "../../layout/HOC2";
import { IoIosMenu } from "react-icons/io";


const GroupNotes = () => {
  return (
    <>
      <div className="nav-wrap-personal ">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            {" "}
            <p ref={drColterRef} id="drColter" className="menu-sidebar">
              <IoIosMenu />
            </p>
            GROUP NOTES
          </p>
          <p></p>
        </div>
      </div>

      <div className="patient_chart_container">
        {NotesOptions?.map((i, index) => (
          <Link to={i?.link} key={index}>
            <img src={i.src} alt="" />
          </Link>
        ))}
      </div>
    </>
  );
};

export default HOC2(GroupNotes);