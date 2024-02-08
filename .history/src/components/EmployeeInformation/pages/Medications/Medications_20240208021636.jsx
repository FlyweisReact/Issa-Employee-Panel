import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import { IoIosMenu } from "react-icons/io";
import { Offcanvas } from "react-bootstrap";
const Medications = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav-wrap-personal ">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            
            MEDICATIONS
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
            src="/Dashboard2/Medications/Group 17628.png"
            onClick={() => navigate("/employee/medications/mars")}
            alt="Employment"
          />
        </div>
        <div>
          <img
            src="/Dashboard2/Medications/Group 17627.png"
            onClick={() => navigate("/employee/medications/reconciliations")}
            alt="Employment"
          />
        </div>
        <div>
          <img
            src="/Dashboard2/Medications/Group 17626.png"
            onClick={() => navigate("/employee/medications/medication-count")}
            alt="Employment"
          />
        </div>
        <div>
          <img
            src="/Dashboard2/Medications/Group 17625.png"
            onClick={() => navigate("/employee/medications/informed-consent")}
            alt="Employment"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/employee/medications/prn-form")}
            src="/Dashboard2/Medications/Group 17624.png"
            alt="Employment"
          />
        </div>
      </div>
    </>
  );
};

export default HOC2(Medications);
