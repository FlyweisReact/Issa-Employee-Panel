import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HOC2 from "../layout/HOC2";
import { Offcanvas } from "react-bootstrap";
import { IoIosMenu } from "react-icons/io";
const Training = () => {
  const navigate = useNavigate();

  return (
    <>
      <Offcanvas style={{ width: "70%" }} show={showC} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "40px",
            }}
          >
            {sidebarData.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: window.innerWidth < 768 ? "350px" : "auto",
                  width: "auto",
                  padding: ".5rem",
                }}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="nav-wrap-personal">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            <p ref={drColterRef} id="drColter" className="menu-sidebar">
              <IoIosMenu />
            </p>
            TRAINING
          </p>
          <p></p>
        </div>
      </div>
      <div
        className="main-div-employment"
        style={{ width: "90%", margin: "auto" }}
      >
        <div>
          <img
            onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Traning/onSite.png"
            alt="Employment"
          />
        </div>
        <div>
          <img
            src="/Dashboard2/Traning/employee.png"
            onClick={() => navigate("/employee/training/employee-in")}
            alt="Employment"
          />
        </div>
        <div>
          <img
            src="/Dashboard2/Traning/skill.png"
            onClick={() => navigate("/employee/training/skills")}
            alt="Employment"
          />
        </div>
      </div>
    </>
  );
};

export default HOC2(Training);
