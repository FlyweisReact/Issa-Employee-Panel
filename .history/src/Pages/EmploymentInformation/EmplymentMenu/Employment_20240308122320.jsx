/** @format */

import React from "react";
import "./Employment.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { EmploymentCards } from '../../../Constant/UpdatedContstant'

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

