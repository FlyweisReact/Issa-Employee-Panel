/** @format */

import React from "react";
import HOC2 from "../../components/EmployeeInformation/layout/HOC2";
import { NotesOptions } from "../../Constant/Constant";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const GroupNotes = () => {
  return (
    <>
      <div className="nav-wrap-personal ">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>GROUP NOTES</p>
          <p></p>
        </div>
      </div>

      <Container>
        <div className="patient_chart_container">
          {NotesOptions?.map((i, index) => (
            <Link to={i?.link} key={index}>
              <img src={i.src} alt="" />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default HOC2(GroupNotes);
