import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Col, Container, Form, Image, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard2.css";
import HOC2 from "./layout/HOC2";
import { IoIosMenu } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";


const Dashboard2 = () => {
  const navigate = useNavigate();
  const drColterRef = useRef(null);
  //
  const [showC, setShowC] = useState(false);

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
  //
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
      <div className="main-div-personal important" style={{ height: "100%" }}>
        <div className="nav-wrap-personal">
          {/* <div className="nav-div-personal1">
            <img
              onClick={() => navigate(-1)}
              src="/back_button2.png"
              alt="da"
            />
          </div> */}
          <div className="nav-div-personal" style={{ width: "100%" }}>
            <p ref={drColterRef} id="drColter" className="menu-sidebar">
              <IoIosMenu />
            </p>
            <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
              BASIC INFORMATION <br />
              <span
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: ".7rem",
                  gap: ".3rem",
                  display: "flex",
                }}
              >
                <span style={{ fontSize: ".5rem" }}>🔵</span>
                <span style={{ fontSize: ".5rem" }}>
                  <FaRegCircle />
                </span>
                <span style={{ fontSize: ".5rem" }}>
                  <FaRegCircle />
                </span>
                <span style={{ fontSize: ".5rem" }}>
                  <FaRegCircle />
                </span>
                <span style={{ fontSize: ".5rem" }}>
                  <FaRegCircle />
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="top-div-personal2">
          <Form id="form-appendix" className="employee1">
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Today's Date :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  dATE" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Hire Date :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  dATE" />
            </Form.Group>
            <p>Name</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Last:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                First:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Middle:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Maiden:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p>Current Address</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                House No.:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Street Address:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                City:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                State:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                ZipCode:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                How long have you lived at this address?
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Primary Phone Number{" "}
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Alternative Phone Number{" "}
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  Are you under the age of 18?
                </span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                    />
                    <Form.Check.Label
                      style={{
                        marginLeft: "5px",
                        marginRight: "15px",
                        marginBottom: "0",
                      }}
                    >
                      Yes
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                    />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      No
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>SSN</Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  Are you legally eligible to work in the US?
                </span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                    />
                    <Form.Check.Label
                      style={{
                        marginLeft: "5px",
                        marginRight: "15px",
                        marginBottom: "0",
                      }}
                    >
                      Yes
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                    />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      No
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              </Form.Label>
            </Form.Group>
            <p style={{ fontWeight: "500" }}>
              (Proof of U.S. citizenship will be required upon hire)
            </p>
            <Form.Group className="mb-3">
              <Form.Label>Desired Positions</Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Desired Salary</Form.Label>
              <Form.Control type="text" placeholder=" ________$" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Date available to start</Form.Label>
              <Form.Control type="date" placeholder=" ________$" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> How many hours can you work weekly?</Form.Label>
              <Form.Control type="text" placeholder=" ________$" />
            </Form.Group>
            <p>How many hours can you work weekly?</p>
            <Form.Group className="mb-3">
              <Form.Label> Full time ONLY</Form.Label>
              <Form.Control type="text" placeholder=" ________$" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Part time ONLY</Form.Label>
              <Form.Control type="text" placeholder=" ________$" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Full time or Part time </Form.Label>
              <Form.Control type="text" placeholder=" ________$" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> On Call </Form.Label>
              <Form.Control type="text" placeholder=" ________$" />
            </Form.Group>
            <p className="dashboard2-ptag">
              <p>Hours Available to Work</p>{" "}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Monday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                />
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Tuesday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                />
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Wednesday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                />
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Thursday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                />
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Friday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                />
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Saturday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                />
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Sunday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                />
              </span>
            </p>

            <div
              style={{
                textAlign: "center",
                width: "100%",
                margin: "auto",
                marginTop: "3rem",
              }}
            >
              <button
                style={{
                  padding: "10px 114px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
                type="submit"
                onClick={() => navigate("/employee/dashboard/page-2")}
              >
                NEXT
              </button>
            </div>
            {/* <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                SUBMIT
              </button>
            </div> */}
          </Form>
        </div>
      </div>
    </>
  );
};

export default HOC2(Dashboard2);
