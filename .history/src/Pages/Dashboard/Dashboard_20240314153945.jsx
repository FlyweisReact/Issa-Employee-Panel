/** @format */

import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { getData } from "../../components/api/api";
import HOC from "../../Layout/Outer/HOC";
import { Container } from "react-bootstrap";

const Dashboard = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState({});

  const fetchHandler = () => {
    getData(setPatients, "employee/getPatient");
  };

  useEffect(() => {
    fetchHandler();
  }, []);
  return (
    <>
      <Container className="full-width-container">
        <div className="grid-dashboard-container">
          <div className="item">
            <img src="/Dashboard/dashboard1.png" alt="" />
            <div className="content">
              <p className="number"> {patients?.data?.length} </p>
              <p>Total Patients</p>
            </div>
          </div>
        </div>

        <div className="main-div-dashboard important">
          <div className="left-div-dashboard">
            <div
              className="top-div-dashboard topleft-div-dashboard111"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <div className="topleft-div-dashboard ">
                <div
                  className="topleft1-div-dashboard"
                  style={{
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    style={{ width: "60%", height: "60%" }}
                    src="/Dashboard/dashboard1.png"
                    alt="dashboard"
                  />
                </div>
                <div className="topleft2-div-dashboard">
                  <p> {patients?.data?.length} </p>
                  <p>Total Patients</p>
                  <p>This Month</p>
                </div>
              </div>
              <div className="topleft-div-dashboard">
                <div
                  className="topleft1-div-dashboard"
                  style={{
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    style={{ width: "60%", height: "60%" }}
                    src="/Dashboard/dashboard2.png"
                    alt="dashboard"
                  />
                </div>
                <div className="topleft2-div-dashboard">
                  <p>32</p>
                  <p>Appointments</p>
                  <p>Today</p>
                </div>
              </div>
            </div>

            <div className="bottom-div-dashboard">
              <h6
                style={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: "1.5rem",
                }}
              >
                Today Appointments
              </h6>{" "}
              <div className="bottom-div-dashboard1">
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
                          <span
                            style={{ color: "#787878", paddingRight: "10px" }}
                          >
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
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
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
                          <span
                            style={{ color: "#787878", paddingRight: "10px" }}
                          >
                            REFERENCE ID :
                          </span>
                          <span></span>
                        </p>
                      </div>
                    </div>
                    <p style={{ marginLeft: "auto" }}>
                      <h6 id="on-going1">OnGoing</h6>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-div-dashboard">
            <div
              style={{ visibility: "hidden" }}
              className="right-div-dashboard1"
            >
              <h6 style={{ fontWeight: "bold" }}> Appointment Requests</h6>{" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "100px",
                }}
              >
                <div
                  className="bottom-div-dashboard11"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <img
                    style={{ maxHeight: "70px", maxWidth: "70px" }}
                    src="/Assigned_Patient/patient.png"
                    alt="dashboard"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p>
                      <h6
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: "700",
                          marginTop: "0.9rem",
                        }}
                      >
                        PATIENT 1
                      </h6>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <p
                          className="dashboard_para"
                          style={{ maxWidth: "190px", width: "auto" }}
                        >
                          <img src="/Assigned_Patient/id.png" alt="clock" />

                          <span style={{ color: "#787878" }}>
                            REFERENCE ID :
                          </span>
                          <span>12CD342</span>
                        </p>
                      </div>
                    </p>
                    <p
                      className="accept-reject-dashboard1"
                      style={{
                        display: "flex",
                        gap: ".5rem",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <img
                        style={{ maxWidth: "30px", width: "auto" }}
                        src="/Dashboard\accept.png"
                        alt="clock"
                      />
                      <img
                        style={{ maxWidth: "32px", width: "auto" }}
                        src="/Dashboard\reject.png"
                        alt="clock"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-div-dashboard1">
              <h6
                style={{
                  fontWeight: "900",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                {" "}
                Next Patient Details
              </h6>{" "}
            </div>
            <div className="right-div-dashboard123">
              <div>
                <img
                  onClick={() => navigate("/employee/patient-chart")}
                  style={{ cursor: "pointer" }}
                  src="/Dashboard/Chart.png"
                  alt="dashboard"
                />
              </div>
              <div>
                <img src="/Dashboard/Renewal.png" alt="dashboard" />
              </div>
              <div>
                <img
                  onClick={() => navigate("/employee/patient-tracking")}
                  src="/Dashboard/Tracking.png"
                  alt="dashboard"
                />
              </div>
            </div>{" "}
          </div>
        </div>
      </Container>
    </>
  );
};

export default HOC({ Wcomponenet: Dashboard });
