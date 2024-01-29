/** @format */

import { useNavigate } from "react-router-dom";

const TimeSheet = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            <p id="drColter" className="menu-sidebar"></p> EMPLOYEE SCHEDULE
          </p>
          <p
            onClick={() => navigate("/employee/employee-schedule")}
            style={{
              paddingRight: "3px",
              color: "#0C5C75",
              textDecoration: "underline",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            TIME SHEET{" "}
          </p>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default TimeSheet;
