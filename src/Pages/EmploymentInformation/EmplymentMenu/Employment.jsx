/** @format */

import React from "react";
import "./Employment.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import HOC from "../../../Layout/Outer/HOC";
import { EmploymentCards } from "../../../assets/Constant/UpdatedContstant.ts";

const Employment = () => {
  return (
    <Container>
      <div className="patient_chart_container">
        {EmploymentCards?.map((i, index) => (
          <Link to={i?.link} key={index}>
            <img src={i.src} alt="" />
          </Link>
        ))}
      </div>
    </Container>
  );
};
export default HOC({ Wcomponenet: Employment });
