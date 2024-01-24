/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const NavWrapper = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-wrap-personal">
      <div className="nav-div-personal1">
        <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
      </div>
      <div
        className="nav-div-personal"
        style={{ width: "80%", marginBottom: "1rem" }}
      >
        <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
          ACKNOWLEDGEMENT
          <br />
          <span
            style={{
              alignItems: "center",
              justifyContent: "center",
              fontSize: ".7rem",
              gap: ".3rem",
              display: "flex",
            }}
          >
            <span style={{ fontSize: ".5rem" }}>🔵</span>
            <span style={{ fontSize: ".5rem" }}>🔵</span>
            <span style={{ fontSize: ".5rem" }}>🔵</span>
            <span style={{ fontSize: ".5rem" }}>🔵</span>
            <span style={{ fontSize: ".5rem" }}>🔵</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default NavWrapper;
