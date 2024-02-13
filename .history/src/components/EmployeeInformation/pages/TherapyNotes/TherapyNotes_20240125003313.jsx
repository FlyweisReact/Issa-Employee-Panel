/** @format */

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TherapyNotes.css";
const TherapyNotes = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>THERAPY NOTES</p>
          <p></p>
        </div>
      </div>

      <div className="dashboard_notes">
        <Link to="/employee/therapy-notes/1">
          <img src="/Dashboard2/GroupNotes/Group 17546.png" alt="" />
        </Link>
        <Link to="/employee/therapy-notes/visitor-log">
          <img
            src="/Dashboard2/GroupNotes/Tharapy Notes/Group 385.png"
            alt=""
          />
        </Link>
        <Link to="/employee/therapy-notes/staff-schedule">
          <img
            src="/Dashboard2/GroupNotes/Tharapy Notes/Group 386.png"
            alt=""
          />
        </Link>
        <Link to="/employee/therapy-notes/milage-log">
          <img
            src="/Dashboard2/GroupNotes/Tharapy Notes/Group 387.png"
            alt=""
          />
        </Link>
      </div>
    </>
  );
};

export default TherapyNotes;
