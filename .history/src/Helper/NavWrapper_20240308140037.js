/** @format */

import React from "react";
import { Container } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";

const NavWrapper = ({ title, filled, empty }) => {
  const filledArr = Array.from({ length: filled });
  const emptyArr = Array.from({ length: empty });

  return (
    <Container>
      <div className="nav-wrap-personal">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem" }}
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
    </Container>
  );
};

export default NavWrapper;
