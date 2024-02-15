/** @format */

import React from "react";
import HOC from "../../layout/HOC";
import "./Employment.css";
import { useNavigate } from "react-router-dom";
const Employment = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="patient_chart_container">
        {patient_chart?.map((i, index) => (
          <Link to={i?.link} key={index}>
            <img src={i.src} alt="" />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default HOC(Employment);
