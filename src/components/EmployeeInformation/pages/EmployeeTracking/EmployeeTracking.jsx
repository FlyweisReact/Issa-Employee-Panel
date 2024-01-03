import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import { Form, Offcanvas, ProgressBar } from "react-bootstrap";
import { IoIosMenu } from "react-icons/io";
const EmployeeTracking = () => {
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
      <div className="nav-wrap-personal ">
        <div className="nav-div-personal" style={{ width: "100%" }}>
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            <p ref={drColterRef} id="drColter" className="menu-sidebar">
              <IoIosMenu />
            </p>{" "}
            EMPLOYEE TRCKING / UPLOAD
          </p>
          <p></p>
        </div>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <div>
          <Form
            style={{ width: "100%" }}
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                CPR/First Aid :
              </Form.Label>
              <Form.Control type="file" placeholder="Enter text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                TB Test/Chest Xray :
              </Form.Label>
              <Form.Control type="file" placeholder="Enter text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                TB test Questionnaire :
              </Form.Label>
              <Form.Control type="file" placeholder="Enter text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Fingerprint Clearance Card :
              </Form.Label>
              <Form.Control type="file" placeholder="Enter text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Infectious Control Training:
              </Form.Label>
              <Form.Control type="file" placeholder="Enter text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                TB Annual Education :
              </Form.Label>
              <Form.Control type="file" placeholder="Enter text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Fall Prevention and Fall Recovery:
              </Form.Label>
              <Form.Control type="file" placeholder="Enter text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                APS Search :
              </Form.Label>
              <Form.Control type="file" placeholder="Enter text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                CPI/Prevention and Control :
              </Form.Label>
              <Form.Control type="file" placeholder="Enter text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Annual abuse and neglect training :
              </Form.Label>
              <Form.Control type="file" placeholder="Enter text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>

            <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
              <div>
                <img
                  style={{ height: "80%", width: "100%", border: "1px " }}
                  src="/Dashboard/save.png"
                  alt=""
                />
              </div>
              <div className="save-as-draft-btn">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  SAVE AS DRAFT
                </button>
                <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                  SAVED AND SAVED
                </button>
              </div>
            </div>
            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "2px",
                }}
                type="submit"
              >
                PRINT REPORT
              </button>
            </div>
            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                SUBMIT
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default HOC2(EmployeeTracking);
