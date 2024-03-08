/** @format */

import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateNav = ({ title, link }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="navbar">
        <p className="heading"> {title} </p>
        
          <Button
            style={{
              fontSize: ".9rem",
              fontWeight: "bold",
              backgroundColor: "#1A9FB2",
              padding: ".5rem 1.5rem",
              border: "none",
            }}
            onClick={() => navigate(link)}
          >
            + Create New
          </Button>
        </p>
      </div>
    </Container>
  );
};

export default CreateNav;
