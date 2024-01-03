import React from "react";
import { useNavigate } from "react-router-dom";
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
      <div className="main-div-employment1">
        <div>
          <img
            onClick={() => navigate("/employee/therapy-notes/1")}
            src="/Dashboard2/GroupNotes/Group 17546.png"
            alt="Employment1"
          />
        </div>
        <div>
          <img
            src="/Dashboard2/GroupNotes/Tharapy Notes/Group 385.png"
            onClick={() => navigate("/employee/therapy-notes/visitor-log")}
            alt="Employment31"
          />
        </div>
        <div>
          <img
            src="/Dashboard2/GroupNotes/Tharapy Notes/Group 386.png"
            onClick={() => navigate("/employee/therapy-notes/staff-schedule")}
            alt="Employmen2t"
          />
        </div>
        <div>
          <img
            src="/Dashboard2/GroupNotes/Tharapy Notes/Group 387.png"
            onClick={() => navigate("/employee/therapy-notes/milage-log")}
            alt="Employment3"
          />
        </div>
      </div>
    </>
  );
};

export default TherapyNotes;
