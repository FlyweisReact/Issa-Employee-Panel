import React from "react";
import {  Link, useNavigate } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import { IoIosMenu } from "react-icons/io";

const PatientChart = () => {

  const items =  [ 
    {
      src : "/Dashboard2/Patinent Chart/Group 17587.png" , 
      link : "/employee/patient-chart/progress"
    },
    {
      src : "/Dashboard2/Patinent Chart/Group 17689.png" , 
      link : "/employee/patient-chart/discharge"
    },
    {
      src : "/Dashboard2/Patinent Chart/Group 17586.png" , 
      link : "/employee/patient-chart/activities"
    },
    {
      src : "/Dashboard2/Patinent Chart/Group 17688.png" , 
      link : "/employee/patient-chart/financial"
    },
    {
      src : "/Dashboard2/Patinent Chart/Group 17687.png" , 
      link : "/employee/patient-chart/staffing"
    },
    {
      src : "/Dashboard2/Patinent Chart/Group 17933.png" , 
      link : "/employee/patient-chart/authorization"
    },
    {
      src : "/Dashboard2/Patinent Chart/Group 17934.png", 
      link : "/employee/patient-chart/incident"
    },
    {
      src : "/Dashboard2/Patinent Chart/Group 17932.png" , 
      link : "/employee/patient-chart/contact-chart"
    },
    {
      src : "/Dashboard2/Patinent Chart/Group 17935.png" , 
      link : "/employee/patient-chart/upload"
    },
  ]


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

    <div className="patient_chart_container">
      {items?.map((i ,index) => (
        <Link >
        <img src="" alt='' />
        </Link>
      ))}
    </div>
    </>
  );
};

export default HOC2(PatientChart);
