/** @format */

import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { getData } from "../../components/api/api";
import HOC from "../../Layout/Outer/HOC";
import { Container } from "react-bootstrap";
import { chart, renewal } from "../../assets";
import { getApi } from "../../Repository/Apis";

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
  const [appointment, setAppointment] = useState({});

  const fetchHandler = () => {
    getData(setPatients, "employee/getPatient");
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    getApi({
      url: "employee/getAllPastAppointments",
      setResponse: setAppointment,
    });
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
              </div>
            </div>
          </Link>

          <div className="item">
            <img src="/Dashboard/dashboard1.png" alt="" />
            <div className="content">
              <p className="number"> 32 </p>
              <p>Appointments</p>
            </div>
          </div>
        </div>

        <div className="patient_chart_container home-page mt-3">
          {data?.map((i, index) =>
            i.link ? (
              <Link to={i?.link} key={index}>
                <img src={i.src} alt="" />
              </Link>
            ) : (
              <img src={i.src} alt="" />
            )
          )}
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
                {appointment?.data?.map((i, index) => (
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
                        {i.name}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HOC({ Wcomponenet: Dashboard });
