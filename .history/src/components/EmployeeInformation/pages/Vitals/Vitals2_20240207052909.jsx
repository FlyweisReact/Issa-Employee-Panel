/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import "./Vitals.css";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { Baseurl, Auth, showMsg } from "../../../../Baseurl";

const Vitals2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  const [healthData, setHealthData] = useState({
    patientId: "",
    date: "",
    bodyTemperature: "",
    pulseRate: "",
    respirationRate: "",
    bloodPressure: "",
    bloodOxygen: "",
    weight: "",
    bloodGlucoseLevel: "",
    height: "",
  });

  console.log(healthData);

  const handleHealthDataChange = (name, value) => {
    setHealthData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getAllpatients = () => {
    axios.get(`${Baseurl}employee/getPatient`, Auth()).then((res) => {
      setPatients(res.data?.data);
    });
  };

  useEffect(() => {
    getAllpatients();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`${Baseurl}employee/createPatientVitals`, healthData, Auth())
      .then((res) => {
        console.log(res.data);
        navigate("/employee/vitals");
        showMsg("Success", res.data.message, "success");
      })
      .catch((err) => {
        console.log(err);
        showMsg("Error", err.response.data.message, "error");
      });
  };

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
              onClick={() => navigate("/employee/vitals/")}
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                marginRight: "1rem",
              }}
              variant="primary"
            >
              VITALS
            </Button>
          </p>
        </div>
      </div>
      <div style={{ width: "90%", textAlign: "left", margin: "auto" }}>
        <Form onSubmit={submitHandler} className="w-100 text-start">
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Select Patient
            </Form.Label>
            <Form.Select
              name="patient"
              style={{ width: "100%", margin: "auto" }}
              onChange={(e) =>
                handleHealthDataChange("patientId", e.target.value)
              }
              required
            >
              <option value="">Select Patient</option>
              {patients?.map((patient) => (
                <option key={patient._id} value={patient._id}>
                  {patient.fullName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group style={{ width: "100%" }} className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date
            </Form.Label>
            <Form.Control
              onChange={(e) => handleHealthDataChange("date", e.target.value)}
              type="date"
              required
            />
          </Form.Group>
          <Form.Group style={{ width: "100%" }} className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Body Temperature
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                handleHealthDataChange("temperature", e.target.value)
              }
              type="text"
            />
          </Form.Group>
          <Form.Group style={{ width: "100%" }} className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Pulse Rate
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                handleHealthDataChange("pulseRate", e.target.value)
              }
              type="text"
            />
          </Form.Group>
          <Form.Group style={{ width: "100%" }} className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Respirational Rate
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                handleHealthDataChange("respirationRate", e.target.value)
              }
              type="text"
            />
          </Form.Group>
          <Form.Group style={{ width: "100%" }} className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Blood Pressure
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                handleHealthDataChange("bloodPressure", e.target.value)
              }
              type="text"
            />
          </Form.Group>
          <Form.Group style={{ width: "100%" }} className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Blood Oxygen
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                handleHealthDataChange("bloodOxygen", e.target.value)
              }
              type="text"
            />
          </Form.Group>
          <Form.Group style={{ width: "100%" }} className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Weight
            </Form.Label>
            <Form.Control
              onChange={(e) => handleHealthDataChange("weight", e.target.value)}
              type="text"
            />
          </Form.Group>
          <Form.Group style={{ width: "100%" }} className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Blood Glucose Level
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                handleHealthDataChange("bloodGlucoseLevel", e.target.value)
              }
              type="text"
            />
          </Form.Group>
          <Form.Group style={{ width: "100%" }} className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Height
            </Form.Label>
            <Form.Control
              onChange={(e) => handleHealthDataChange("height", e.target.value)}
              type="text"
            />
          </Form.Group>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default HOC2(Vitals2);
