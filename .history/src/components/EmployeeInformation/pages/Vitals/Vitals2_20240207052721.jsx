/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  const handleHealthDataChange = (name, value) => {
    setHealthData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const sidebarData = [
    {
      icon: <img src="/Dashboard2/1.png" alt="fdn" />,
      link: "/employee/Dashboard",
      name: "Employment Application ",
      newIcon: <img src="/Dashboard/New folder/home.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/2.png" alt="fdn" />,
      link: "/employee/group-notes",
      name: "Group Notes",
      newIcon: <img src="/Dashboard2/training.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/training.png" alt="fdn" />,
      link: "/employee/training",
      name: "Training",
      newIcon: <img src="/Dashboard/New folder/group.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/patitent-assigned.png" alt="fdn" />,
      link: "/assigned-patient/",
      name: "Assigned Patient",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/time-off.png" alt="fdn" />,
      link: "/employee/time-of-request",
      name: "Time Off Request",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/1.png" alt="fdn" />,
      link: "/employee/time-sheet",
      name: "Time Sheet/Employee Schedule",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/performance.png" alt="fdn" />,
      link: "/employee/employee-performance",
      name: "Employee Performance",
      newIcon: <img src="/public/Dashboard2/performance.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/user.png" alt="fdrn" />,
      link: "/employee/employee-tracking",
      name: "Employee Tracking/ Upload",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/chart.png" alt="fdn" />,
      link: "/employee/patient-chart ",
      name: "Patient Chart",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/vitals.png" alt="fdn" />,
      link: "/employee/vitals",
      name: "Patient Vitals",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/user.png" alt="fdn" />,
      link: "/employee/patient-tracking",
      name: "Patient Tracking",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/medication.png" alt="fdn" />,
      link: "/employee/medications",
      name: "Medications",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
    {
      icon: <img src="/Dashboard2/setting.png" alt="fdn" />,
      link: "/employee/settings",
      name: "Settings",
      newIcon: <img src=" /Dashboard/New folder/user.png" alt="fdn" />,
    },
  ];

  useEffect(() => {
    const handleClick = () => {
      setShowC(true);
    };

    const handleResize = () => {
      if (window.innerWidth < 768 && drColterRef.current) {
        drColterRef.current.addEventListener("click", handleClick);
      } else if (drColterRef.current) {
        drColterRef.current.removeEventListener("click", handleClick);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (drColterRef.current) {
        drColterRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);
  const getAllpatients = () => {
    axios.get(`${Baseurl}employee/getPatient`, Auth()).then((res) => {
      // console.log(res.data);
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
      <div style={{ width: "100%", textAlign: "left" }}>
        <Form
          style={{ width: "90%", textAlign: "left" }}
          onSubmit={submitHandler}
        >
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
            >
              <option>Select Patient</option>
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
