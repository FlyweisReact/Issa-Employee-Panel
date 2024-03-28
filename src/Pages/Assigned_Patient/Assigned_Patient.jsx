/** @format */

import React, { useEffect, useState } from "react";
import "./Assigned.css";
import { useNavigate } from "react-router-dom";
import { getData } from "../../components/api/api";
import HOC from "../../Layout/Outer/HOC";

const Assigned_Patient = () => {
  const [upcommmingPatients, setUpcommingPatients] = useState([]);
  const [pastPatients, setPastPatients] = useState([]);

  const getAllUpcomingPatients = () => {
    getData(setUpcommingPatients, "employee/getAllUpcomingAppointments");

    getData(setPastPatients, "employee/getAllPastAppointments");
  };

  useEffect(() => {
    getAllUpcomingPatients();
  }, []);
  return (
    <div className="main-div-assigned important">
      <div className="upcoming-assigned">
        <h3>Upcoming Patient</h3>
        <div className="upcoming-div-assigned">
          {upcommmingPatients?.data?.length > 0 &&
            upcommmingPatients?.data?.map((i, index) => (
              <div className="img-div-assigned" key={index}>
                <div>
                  <img src="/Assigned_Patient/patient.png" alt="51" />
                </div>
                <div>
                  <p style={{ color: "#0C5C75", lineHeight: 1 }}>Patient 1</p>
                  <p className="para-assigned">
                    <img src="/Assigned_Patient/calender.png" alt="clock" />

                    <span style={{ color: "#787878", paddingRight: "10px" }}>
                      FROM :
                    </span>
                    <span>6 June-21 June</span>
                  </p>
                  <p className="para-assigned">
                    <img src="/Assigned_Patient/location.png" alt="clock" />

                    <span style={{ color: "#787878", paddingRight: "10px" }}>
                      AGE :
                    </span>
                    <span>32 YEARS</span>
                  </p>
                  <p className="para-assigned">
                    <img src="/Assigned_Patient/id.png" alt="clock" />

                    <span style={{ color: "#787878", paddingRight: "10px" }}>
                      REFERENCE ID :
                    </span>
                    <span>6 June-21 June</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="upcoming-assigned">
        <h3>Past Patient</h3>
        <div className="upcoming-div-assigned">
          {pastPatients?.data?.length > 0 &&
            pastPatients?.data?.map((item, index) => (
              <div className="img-div-assigned" key={index}>
                <div>
                  <img src="/Assigned_Patient/patient.png" alt="51" />
                </div>
                <div>
                  <p style={{ color: "#0C5C75", lineHeight: 1 }}>{item.name}</p>
                  <p className="para-assigned">
                    <img src="/Assigned_Patient/calender.png" alt="clock" />

                    <span style={{ color: "#787878", paddingRight: "10px" }}>
                      FROM :
                    </span>
                    <span>6 June-21 June</span>
                  </p>
                  <p className="para-assigned">
                    <img src="/Assigned_Patient/location.png" alt="clock" />

                    <span style={{ color: "#787878", paddingRight: "10px" }}>
                      AGE :
                    </span>
                    <span>32 YEARS</span>
                  </p>
                  <p className="para-assigned">
                    <img src="/Assigned_Patient/id.png" alt="clock" />

                    <span style={{ color: "#787878", paddingRight: "10px" }}>
                      REFERENCE ID :
                    </span>
                    <span>6 June-21 June</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HOC({ Wcomponenet: Assigned_Patient });
