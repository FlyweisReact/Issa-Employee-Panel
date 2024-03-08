/** @format */

import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateNav = ({ title, link }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="header">
        <p className="heading"> {title} </p>

        <button onClick={() => navigate(link)}>+ Create New</button>
      </div>
    </Container>
  );
};

export default CreateNav;
