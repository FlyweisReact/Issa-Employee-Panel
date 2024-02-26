/** @format */

import React from "react";

const CreateNav = () => {
  return (
    <div className="nav-wrap-personal">
      <div className="nav-div-personal1">
        <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
      </div>
      <div
        className="nav-div-personal"
        style={{
          width: "80%",
          marginBottom: "1rem",
          display: "flex",
          paddingRight: "1rem",
        }}
      >
        <p style={{ fontWeight: "bold", flex: "1" }}>STAFFING NOTE</p>
        <p>
          <Button
            style={{
              fontSize: ".9rem",
              fontWeight: "bold",
              backgroundColor: "#1A9FB2",
              padding: ".5rem 1.5rem",
              border: "none",
            }}
            onClick={() => navigate("/employee/patient-chart/staffing2")}
          >
            + NEW
          </Button>
        </p>
      </div>
    </div>
  );
};

export default CreateNav;
