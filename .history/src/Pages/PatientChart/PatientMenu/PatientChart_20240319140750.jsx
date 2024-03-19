/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { patient_chart } from "../../../Constant/Constant";
import { Container } from "react-bootstrap";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";

const PatientChart = () => {
  return (
    <>
    <NavWrapper title={"PATIENT CHART"} />

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
