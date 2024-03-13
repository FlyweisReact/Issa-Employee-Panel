/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateNav = ({ title, link }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <img
        onClick={() => navigate(-1)}
        src="/back_button2.png"
        alt=""
        className="arrow cursor-pointer hidePrint"
      />
      <div className="header">
        <p className="heading"> {title} </p>
        <button onClick={() => navigate(link)}> + Create New</button>
      </div>
    </Container>
  );
};

export default CreateNav;
