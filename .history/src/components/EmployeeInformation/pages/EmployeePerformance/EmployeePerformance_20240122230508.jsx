import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import { Form, Offcanvas } from "react-bootstrap";
import { IoIosMenu } from "react-icons/io";
const EmployeePerformance = () => {
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
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            <p ref={drColterRef} id="drColter" className="menu-sidebar">
              <IoIosMenu />
            </p>{" "}
            EMPLOYEE PERFORMANCE REVIEW
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
            <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Employee Information:
            </p>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Name:
              </Form.Label>

              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date:
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  dATE" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Job Title:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  Preferred Contact Information"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Manager:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Type of Review
              </Form.Label>
              <Form.Check type={"checkbox"} id={`check-api-yes`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  6 month
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} id={`check-api-yes`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Annual
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} id={`check-api-yes`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Other
                </Form.Check.Label>
              </Form.Check>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Hire Date:
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
            <p>Review Period:</p>
            <p style={{ textAlign: "center" }}>Rating Criteria</p>
            <p style={{ opacity: "60%" }}>
              (5) Outstanding: Performance in this area is far exceeded
              expectations and requirements <br /> (4) Exceed Expectations:
              Accomplished more than expected <br /> (3)Meets Expectations:
              Fully competent, consistently meets requirements and expectations{" "}
              <br /> (2) Needs Improvement: Requires significant amount of
              guidance and supervision <br /> (1) Expectation not met: Improve
              in all areas is needed
            </p>
            <p style={{ fontWeight: "bold" }}>Ratings:</p>
            <p>Factors </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Performance and Quality of work ( work is completed without
                guidance of supervision, work is completed accurately and met
                within deadline)
              </Form.Label>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    5
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    4
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    3
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    2
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    1
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Communication (positive interaction with staff, management, and
                other employees. Communicate essential information relating to
                patient care and employment. Written and oral communications are
                clear and effective.)
              </Form.Label>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    5
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    4
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    3
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    2
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    1
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Professionalism (employee maintains professionalism when dealing
                with staff, residents, and others)
              </Form.Label>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    5
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    4
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    3
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    2
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    1
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Attendance and Punctuality (employee is punctual to work.
                Employee notifies supervisor ahead of time in the case of
                absence. Employee always shows up to work)
              </Form.Label>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    5
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    4
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    3
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    2
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    1
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Time management (time management in completing task and meeting
                deadline)
              </Form.Label>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    5
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    4
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    3
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    2
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    1
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Reliaility/Depedendability (manage workload effectively. Willing
                to assist others. Goes over and beyond to ensure task is
                completed)
              </Form.Label>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    5
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    4
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    3
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    2
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    1
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Overall Rating – Rate employee’s overall performance in
                comparison to position duties and responsibilities.
              </Form.Label>
              <Form.Control type="text" rows="3" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Evaluation:
              </Form.Label>
              <Form.Control type="text" rows="3" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Additional Comments:
              </Form.Label>
              <Form.Control type="text" rows="3" placeholder="Enter  text" />
            </Form.Group>
            <p style={{ fontWeight: "500" }}>
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Verification of Review:
              </span>{" "}
              By signing this form, you confirm that you have discussed this
              review in detail with your supervisor. Signing this form does not
              necessarily indicate that you agree with this evaluation.
            </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employee Name:
              </Form.Label>
              <Form.Control type="text" rows="3" placeholder="Enter  text" />
            </Form.Group>
            <p>Signature</p>
            <div className="save-as-draft-btn-personal">
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
                  SAVED AND SIGNED
                </button>
              </div>
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date:
              </Form.Label>
              <Form.Control type="date" rows="3" placeholder="Enter  text" />
            </Form.Group>

            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "10px",
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

export default HOC2(EmployeePerformance);
