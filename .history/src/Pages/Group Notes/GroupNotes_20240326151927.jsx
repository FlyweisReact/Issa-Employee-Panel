/** @format */

import React from "react";
import { NotesOptions } from "../../Constant/Constant";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import HOC from "../../Layout/Inner/HOC";
import NavWrapper from "../../Helper/NavWrapper";

const GroupNotes = () => {
  return (
    <>
    <NavWrapper title={"Group Notes"} />
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

export default HOC(GroupNotes);
