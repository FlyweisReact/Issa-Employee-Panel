/** @format */

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { IoIosMenu } from "react-icons/io";

const GroupNotes = () => {
  const navigate = useNavigate();
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
      <div
        className="main-div-employment "
        style={{ width: "90%", margin: "auto" }}
      >
        <div>
          <img
            onClick={() => navigate("/employee/therapy-notes")}
            src="/Dashboard2/GroupNotes/Group 17546.png"
            alt="Employment"
          />
        </div>
        <div>
          <img
            src="/Dashboard2/GroupNotes/Group 17686.png"
            onClick={() => navigate("/employee/notes-library")}
            alt="Employment"
          />
        </div>
      </div>
    </>
  );
};

export default HOC2(GroupNotes);
