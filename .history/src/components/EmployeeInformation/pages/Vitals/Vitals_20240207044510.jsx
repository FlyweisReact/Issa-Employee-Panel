import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import "./Vitals.css";
import { IoIosMenu } from "react-icons/io";
import { Button, Form, Offcanvas } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { Baseurl, Auth, showMsg } from "../../../../Baseurl";

const Vitals = () => {
  const navigate = useNavigate();
  const drColterRef = useRef(null);
  //
  const [showC, setShowC] = useState(false);
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [patientData, setPatientData] = useState({});

  const handleClose = () => setShowC(false);
  const handleShowC = () => setShowC(true);

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
    // console.log(formData);
  };

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
  
  return (
    <>
      {" "}
      <Offcanvas style={{ width: "70%" }} show={showC} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "40px",
            }}
          >
            {sidebarData.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                style={{
                  textDecoration: "none",
                  color: "black",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: window.innerWidth < 768 ? "350px" : "auto",
                  width: "auto",
                  padding: ".5rem",
                }}
              >
                {/* <span style={{ marginRight: "10px" }}>{item.newIcon}</span> */}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="nav-wrap-personal">
        {/* <div className="nav-div-personal1">
            <img
              onClick={() => navigate(-1)}
              src="/back_button2.png"
              alt="da"
            />
          </div> */}
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            {" "}
            <p ref={drColterRef} id="drColter" className="menu-sidebar">
              <IoIosMenu />
            </p>
            VITALS
          </p>
          <p>
            <Button onClick={()=> navigate("/employee/vitals/add")}
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
      <p style={{ textAlign: "center" }}>
        <span style={{ opacity: "60%", fontWeight: "bold" }}>
          LAST UPDATED :
        </span>{" "}
        <span style={{ color: "#1A9FB2" }}> 4 HOURS AGO</span>
      </p>
      <div className="main-div-employment ml-12">
        <Form.Select
          onChange={(e) => getPatitentData(e.target.value)}
          aria-label="Default select example"
        >
          <option>Select Patient</option>
          {patients?.map((patient) => (
            <option value={patient?._id}>{patient?.fullName}</option>
          ))}
        </Form.Select>
      </div>
      <div
        className="main-div-employment vital-grid"
        style={{ width: "90%", margin: "auto", textAlign: "center" }}
      >
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/thermameter.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
            }}
          >
            Body Temp.
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.bodyTemperature}°C
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/heart.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
            }}
          >
            Pulse Rate
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.pulseRate}
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/lungs.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
            }}
          >
            Respiration Rate
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.respirationRate}
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/hand.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
            }}
          >
            Blood Pressure
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.bloodPressure}
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/o2.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
            }}
          >
            Blood Oxygen
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.bloodOxygen}
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/clock.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
            }}
          >
            Weight
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.weight}
          </p>
        </div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: ".5rem 1rem",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "auto",
              maxWidth: "90px",
              margin: "auto",
              height: "auto",
              maxHeight: "70px",
            }}
            // onClick={() => navigate("/employee/training/on-site ")}
            src="/Dashboard2/Vitals/last.png"
            alt="Employment"
          />
          <p
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              lineHeight: ".8rem",
              marginTop: "1rem",
            }}
          >
            Blood Glucose Level
          </p>
          <p style={{ color: "#1A9FB2", fontSize: "1rem", fontWeight: "bold" }}>
            {patientData?.bloodGlucoseLevel}
          </p>
        </div>
      </div>
    </>
  );
};

export default HOC2(Vitals);
