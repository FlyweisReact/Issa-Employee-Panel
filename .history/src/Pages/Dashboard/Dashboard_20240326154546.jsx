/** @format */

import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../../components/api/api";
import HOC from "../../Layout/Outer/HOC";
import { Container } from "react-bootstrap";
import { chart, renewal } from "../../assets";

const data = [
  {
    src: chart,
    link: "/employee/patient-chart",
  },
  {
    src: renewal,
  },
];

const Dashboard = () => {
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
          <Link to={"/patient-list"}>
            <div className="item">
              <img src="/Dashboard/dashboard1.png" alt="" />
              <div className="content">
                <p className="number"> {patients?.data?.length} </p>
                <p>Total Patients</p>
                {/* <p>This Month</p> */}
              </div>
            </div>
          </Link>

          <div className="item">
            <img src="/Dashboard/dashboard1.png" alt="" />
            <div className="content">
              <p className="number"> 32 </p>
              <p>Appointments</p>
              {/* <p>Today</p> */}
            </div>
          </div>
        </div>

        <div className="patient_chart_container">
          {data?.map((i, index) => (
            i.link ? 
            <Link to={i?.link} key={index}>
              <img src={i.src} alt="" />
            </Link>
          ))}
        </div>

        <div className="main-div-dashboard important">
          <div className="left-div-dashboard">
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
          </div>
        </div>
      </Container>
    </>
  );
};

export default HOC({ Wcomponenet: Dashboard });
