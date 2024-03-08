/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";
import { Container } from "react-bootstrap";

const NavWrapper = ({ title, filled, empty, isArrow }) => {
  const navigate = useNavigate();

  const filledArr = Array.from({ length: filled });
  const emptyArr = Array.from({ length: empty });

  return (
    <Container>
      {isArrow ? (
        <>
          <div className="headerWithArrow">
            <img
              onClick={() => navigate(-1)}
              src="/back_button2.png"
              alt="da"
            />
          </div>
          <div className="header">
            <p className="">
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
        </>
      ) : (
        <>
          <div className="header">
            <p className="heading">
              {title}
              <br />
              <span className="filled">
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
        </>
      )}
    </Container>
  );
};

export default NavWrapper;
