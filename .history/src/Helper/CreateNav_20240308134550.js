/** @format */

import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateNav = ({ title, link }) => {
  const navigate = useNavigate();
  return (
    <div className="nav-wrap-personal">
      <div
        className="nav-div-personal"
        style={{
          width: "80%",
          marginBottom: "1rem",
          display: "flex",
          paddingRight: "1rem",
        }}
      >
        <p style={{ fontWeight: "bold", flex: "1" }}> {title} </p>
        <p>
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
    </div>
  );
};

export default CreateNav;
