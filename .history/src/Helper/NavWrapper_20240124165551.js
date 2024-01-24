/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";

const NavWrapper = ({ title, filled, empty, isArrow }) => {
  const navigate = useNavigate();

  const filledArr = Array.from({ length: filled });
  const emptyArr = Array.from({ length: empty });

  return (
    <div className="nav-wrap-personal">
      {isArrow && (
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
      )}

      <div
        className="nav-div-personal"
        style={{ width: "80%", marginBottom: "1rem" }}
      >
        <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
          {title}
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
            {filledArr?.map((i) => (
              <span key={`filled${i}`} style={{ fontSize: ".5rem" }}>
                🔵
              </span>
            ))}
            {emptyArr?.map((i) => (
              <span key={`emptyArr${i}`} style={{ fontSize: ".5rem" }}>
                {" "}
                <FaRegCircle />{" "}
              </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
};

export default NavWrapper;
