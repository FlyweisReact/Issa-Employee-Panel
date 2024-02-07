/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import "./Vitals.css";
import { IoIosMenu } from "react-icons/io";
import { Button, Form, Offcanvas } from "react-bootstrap";
import axios from "axios";
import { Baseurl, Auth, showMsg } from "../../../../Baseurl";

const Vitals = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [patientData, setPatientData] = useState({});

  const getAllpatients = () => {
    axios.get(`${Baseurl}employee/getPatient`, Auth()).then((res) => {
      // console.log(res.data);
      setPatients(res.data?.data);
    });
  };

  useEffect(() => {
    getAllpatients();
  }, []);

  const getPatitentData = (id) => {
    axios
      .get(`${Baseurl}employee/getPatientVitalsByPatientId/${id}`, Auth())
      .then((res) => {
        console.log(res.data);
        setPatientData(res.data?.data?.[0]);
        console.log(res.data?.data?.[0]);
        if (res.data?.data?.length === 0) {
          showMsg("Error", "No data found", "error");
        }
      })
      .catch((err) => {
        console.log(err);
        showMsg("Error", err.response.data.message, "error");
      });
  };


  console.log(patients)

  return (
    <>
      <div className="nav-wrap-personal">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            VITALS
          </p>
          <p>
            <Button
              onClick={() => navigate("/employee/vitals/add")}
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                marginRight: "1rem",
              }}
              variant="primary"
            >
              + NEW
            </Button>
          </p>
        </div>
      </div>

              <SelectMaker


      {/* <div className="main-div-employment ml-12">
        <Form.Select
          onChange={(e) => getPatitentData(e.target.value)}
          aria-label="Default select example"
        >
          <option>Select Patient</option>
          {patients?.map((patient) => (
            <option value={patient?._id}>{patient?.fullName}</option>
          ))}
        </Form.Select>
      </div> */}

      <div className="vital_container">
        <div className="main">
          <img src="/Dashboard2/Vitals/thermameter.png" alt="" />
          <h6>Body Temp</h6>
          <h5>37°C</h5>
        </div>
        <div className="main">
          <img src="/Dashboard2/Vitals/heart.png" alt="" />
          <h6>Pulse Rate</h6>
          <h5>74 RPM</h5>
        </div>
        <div className="main">
          <img src="/Dashboard2/Vitals/lungs.png" alt="" />
          <h6>Respiration Rate</h6>
          <h5>74 RPM</h5>
        </div>
        <div className="main">
          <img src="/Dashboard2/Vitals/hand.png" alt="" />
          <h6>Blood Pressure</h6>
          <h5>80mm/hg</h5>
        </div>
        <div className="main">
          <img src="/Dashboard2/Vitals/o2.png" alt="" />
          <h6>Blood Oxygen</h6>
          <h5>37°C</h5>
        </div>
        <div className="main">
          <img src="/Dashboard2/Vitals/clock.png" alt="" />
          <h6>Weight</h6>
          <h5>56 Kg</h5>
        </div>
        <div className="main">
          <img src="/hieght.png" alt="" />
          <h6>Height</h6>
          <h5>162 cm</h5>
        </div>
        <div className="main">
          <img src="/Dashboard2/Vitals/last.png" alt="" />
          <h6>Blood Glucose Level</h6>
          <h5>37°C</h5>
        </div>
      </div>
    </>
  );
};

export default HOC2(Vitals);
