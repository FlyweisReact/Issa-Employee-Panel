/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import "./Employment.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { EmploymentCards } from './'

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

export default HOC(Employment);
