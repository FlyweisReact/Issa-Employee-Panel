/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
import { getData, postData } from "../../../../../api/api";
const Staffing2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [appointmentData, setAppointmentData] = useState({
    patientId: "",
    residentName: "",
    dateOfBirth: "",
    todayDate: "",
    beginTime: "",
    endTime: "",
    participantsPresent: "",
    presentingIssues: "",
    progress: "",
    barriers: "",
    recommendations: "",
    staffSignature: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "patientId") {
      setAppointmentData((prevData) => ({
        ...prevData,
        [name]: value,
        residentName: patients?.data?.find((patient) => patient._id === value)
          ?.fullName,
      }));
    }
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    getData(setPatients, `employee/getPatient`);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    postData("employee/createStaffingNote", appointmentData);
  };
  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>STAFFING NOTE</p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
        <Form onSubmit={submitHandler}></Form>
        
        </div>
      </div>
    </>
  );
};

export default Staffing2;
