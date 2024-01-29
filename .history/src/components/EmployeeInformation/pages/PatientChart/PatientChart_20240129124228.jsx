import React, { useEffect, useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import { IoIosMenu } from "react-icons/io";

const PatientChart = () => {
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
            <p id="drColter" className="menu-sidebar">
              <IoIosMenu />
            </p>
            PATIENT CHART
          </p>
          <p></p>
        </div>
      </div>
      <div
        className="main-div-employment "
        style={{ width: "90%", margin: "auto", rowGap: "1rem" }}
      >
        <div>
          <img
            onClick={() => navigate("/employee/patient-chart/progress")}
            src="/Dashboard2/Patinent Chart/Group 17587.png"
            alt="Employment"
          />
        </div>

        <div>
          <img
            onClick={() => navigate("/employee/patient-chart/discharge")}
            src="/Dashboard2/Patinent Chart/Group 17689.png"
            alt="Employment"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/employee/patient-chart/activities")}
            src="/Dashboard2/Patinent Chart/Group 17586.png"
            alt="Employment"
          />
        </div>

        <div>
          <img
            onClick={() => navigate("/employee/patient-chart/financial")}
            src="/Dashboard2/Patinent Chart/Group 17688.png"
            alt="Employment"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/employee/patient-chart/staffing")}
            src="/Dashboard2/Patinent Chart/Group 17687.png"
            alt="Employment"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/employee/patient-chart/authorization")}
            src="/Dashboard2/Patinent Chart/Group 17933.png"
            alt="Employment"
          />
        </div>

        <div>
          <img
            onClick={() => navigate("/employee/patient-chart/incident")}
            src="/Dashboard2/Patinent Chart/Group 17934.png"
            alt="Employment"
          />
        </div>

        <div>
          <img
            onClick={() => navigate("/employee/patient-chart/contact-chart")}
            src="/Dashboard2/Patinent Chart/Group 17932.png"
            alt="Employment"
          />
        </div>
        <div>
          <img
            onClick={() => navigate("/employee/patient-chart/upload")}
            src="/Dashboard2/Patinent Chart/Group 17935.png"
            alt="Employment"
          />
        </div>
      </div>
    </>
  );
};

export default HOC2(PatientChart);
