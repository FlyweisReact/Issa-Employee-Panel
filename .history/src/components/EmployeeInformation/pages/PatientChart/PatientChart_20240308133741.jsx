/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { patient_chart } from "../../../../Constant/Constant";
import { Container } from "react-bootstrap";
impo

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

      <Container>
        <div className="patient_chart_container">
          {patient_chart?.map((i, index) => (
            <Link to={i?.link} key={index}>
              <img src={i.src} alt="" />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default HOC(PatientChart);
