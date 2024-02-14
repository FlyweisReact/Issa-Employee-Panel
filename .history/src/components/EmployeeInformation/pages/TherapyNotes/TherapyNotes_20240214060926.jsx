/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./TherapyNotes.css";
import { TherapyNotesOptions } from "../../../../Constant/Constant";

const TherapyNotes = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>THERAPY NOTES</p>
          <p></p>
        </div>
      </div>

      <Container>
        <div className="patient_chart_container">
          {TherapyNotesOptions?.map((i, index) => (
            <Link to={i?.link} key={index}>
              <img src={i.src} alt="" />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default TherapyNotes;
