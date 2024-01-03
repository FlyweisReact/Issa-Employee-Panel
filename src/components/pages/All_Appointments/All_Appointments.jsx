import React from "react";
import HOC from "../../layout/HOC";
import { useNavigate } from "react-router-dom";
const All_Appointments = () => {
  const navigate = useNavigate();
  return (
    <div className="main-div-assigned important">
      <div className="upcoming-assigned">
        <h3>All Appointments</h3>
        <div className="upcoming-div-assigned">
          <div className="bottom-div-dashboard11">
            <img
              style={{ width: "20%" }}
              src="/Assigned_Patient/patient.png"
              alt="dashboard"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                padding: "0rem .5rem",
                alignItems: "center",
              }}
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/book-appointment")}
              >
                <h6
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    lineHeight: 1,
                    marginTop: "0.9rem",
                  }}
                >
                  PATIENT 1
                </h6>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="dashboard_para"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src="/Assigned_Patient/id.png" alt="clock" />
                    <span style={{ color: "#787878", paddingRight: "10px" }}>
                      REFERENCE ID :
                    </span>
                    <span></span>
                  </p>
                </div>
              </div>
              <p style={{ paddingTop: "1rem", fontWeight: "bold" }}>
                <h6 id="on-going1">OnGoing</h6>
              </p>
            </div>
          </div>{" "}
          <div className="bottom-div-dashboard11">
            <img
              style={{ width: "20%" }}
              src="/Assigned_Patient/patient.png"
              alt="dashboard"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                padding: "0rem .5rem",
                alignItems: "center",
              }}
            >
              <div>
                <h6
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    lineHeight: 1,
                    marginTop: "0.9rem",
                  }}
                >
                  PATIENT 1
                </h6>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p
                    className="dashboard_para"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img src="/Assigned_Patient/id.png" alt="clock" />
                    <span style={{ color: "#787878", paddingRight: "10px" }}>
                      REFERENCE ID :
                    </span>
                    <span></span>
                  </p>
                </div>
              </div>
              <p style={{ paddingTop: "1rem", fontWeight: "bold" }}>
                <h6 id="on-going1">OnGoing</h6>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOC(All_Appointments);
