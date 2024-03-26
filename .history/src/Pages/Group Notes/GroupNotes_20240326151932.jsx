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
