/** @format */

import React from "react";
import { Link } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import { IoIosMenu } from "react-icons/io";

const PatientChart = () => {

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
        {items?.map((i, index) => (
          <Link to={i?.link} key={index}>
            <img src={i.src} alt="" />
          </Link>
        ))}
      </div>
    </>
  );
};

export default HOC2(PatientChart);
