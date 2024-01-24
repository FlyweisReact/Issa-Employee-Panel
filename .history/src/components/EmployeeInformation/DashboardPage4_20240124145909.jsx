import React from "react";
import { Form } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const DashboardPage4 = () => {
  const navigate = useNavigate();
  const [militaryExperience, setMilitaryExperience] = useState("");
  const [ifYesSpecialty, setIfYesSpecialty] = useState("");
  const [dateEntered, setDateEntered] = useState("date_value_for_dateEntered");
  const [dateDischarged, setDateDischarged] = useState("date_value_for_dateDischarged");
  const [nationalGuard, setNationalGuard] = useState(true);
  const [validLicense, setValidLicense] = useState(true);
  const [driverLicenseNumber, setDriverLicenseNumber] = useState("value_or_variable_for_driverLicenseNumber");
  const [driverLicenseClass, setDriverLicenseClass] = useState("value_or_variable_for_driverLicenseClass");
  const [driverLicenseStatusIssued, setDriverLicenseStatusIssued] = useState("value_or_variable_for_driverLicenseStatusIssued");
  const [typingSkill, setTypingSkill] = useState(true);
  const [wordsPerMinute, setWordsPerMinute] = useState(125);
  const [familiarWithMicrosoft, setFamiliarWithMicrosoft] = useState(true);
  const [otherSkill, setOtherSkill] = useState("value_or_variable_for_otherSkill");



  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/dashboard/page-3")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            OTHER INFORMATION <br />
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
              <span style={{ fontSize: ".5rem" }}>🔵</span>
              <span style={{ fontSize: ".5rem" }}>🔵</span>
              <span style={{ fontSize: ".5rem" }}>🔵</span>
              <span style={{ fontSize: ".5rem" }}>
                <FaRegCircle />
              </span>
            </span>
          </p>
        </div>
      </div>

      <div
        style={{
          width: "78%",
          marginBottom: "1rem",
          borderRadius: "0rem",
          padding: "0",
          margin: "auto",
          paddingLeft: "3rem",
        }}
      >
        {" "}
        <div className="top-div-personal2">
          <Form
            id="form-appendix"
            className="employee1"
            style={{ width: "100%" }}
          >
            <p style={{ fontSize: "1rem", textDecoration: "underline" }}>
              MILITARY EXPERIENCE
            </p>
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
                  Have you ever served in the armed forces?
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
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                If yes, which speciality?
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date Entered:
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date Discharged :
              </Form.Label>
              <Form.Control
                type="date"
                format={"mm-dd-yyyy"}
                placeholder="Enter  text"
              />
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
                  Are you currently a member of the national guard?
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
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  Do you have a Valid Driver’s License
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
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Driver’s License Number:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Class:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                State Issued:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p style={{ fontSize: "1rem" }}>FOR OFFICE POSITIONS ONLY</p>
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
                  Do you have typing skills on the computer?{" "}
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
                        Are you currently a member of the national guard?
                      </span>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Form.Check
                          type={"radio"}
                          id={`check-api-night-sweats-yes`}
                        >
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
                        <Form.Check
                          type={"radio"}
                          id={`check-api-night-sweats-no`}
                        >
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
              <Form.Label>Words Per Minute</Form.Label>
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
                        Are you familiar with using Microsoft Word, Microsoft
                        Excel, etc?
                      </span>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Form.Check
                          type={"radio"}
                          id={`check-api-night-sweats-yes`}
                        >
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
                        <Form.Check
                          type={"radio"}
                          id={`check-api-night-sweats-no`}
                        >
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
                </span>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Other skills:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p style={{ fontSize: "1rem" }}>3 PROFESSIONAL REFERENCES</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Full Name:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Address:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p style={{ fontSize: "1rem" }}>Salary:</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Company :
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Phone Number:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                How long have you known him/her?:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

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
                onClick={() => navigate("/employee/dashboard/page-5")}
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

export default DashboardPage4;
