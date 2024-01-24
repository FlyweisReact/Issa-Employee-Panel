/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { showMsg } from "../../Baseurl";
import { InputMaker } from "../../Helper/Makers";

const DashboardPage4 = () => {
  const navigate = useNavigate();
  const [militaryExperience, setMilitaryExperience] = useState("");
  const [ifYesSpecialty, setIfYesSpecialty] = useState("");
  const [dateEntered, setDateEntered] = useState("");
  const [dateDischarged, setDateDischarged] = useState("");
  const [nationalGuard, setNationalGuard] = useState("");
  const [validLicense, setValidLicense] = useState("");
  const [driverLicenseNumber, setDriverLicenseNumber] = useState("");
  const [driverLicenseClass, setDriverLicenseClass] = useState("");
  const [driverLicenseStatusIssued, setDriverLicenseStatusIssued] =
    useState("");
  const [typingSkill, setTypingSkill] = useState("");
  const [wordsPerMinute, setWordsPerMinute] = useState("");
  const [familiarWithMicrosoft, setFamiliarWithMicrosoft] = useState("");
  const [otherSkill, setOtherSkill] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [howLongYouKnow, setHowLongYouKnow] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    militaryExperience,
    ifYesSpecialty,
    dateEntered,
    dateDischarged,
    nationalGuard,
    validLicense,
    driverLicenseClass,
    driverLicenseNumber,
    typingSkill,
    wordsPerMinute,
    familiarWithMicrosoft,
    otherSkill,
    professionalReferences: {
      name,
      address,
      company,
      phoneNumber,
      howLongYouKnow,
    },
  };
  const Auth = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.React_App_Baseurl}employee/addEmployeeOtherInfo`,
        payload,
        Auth
      );
      setLoading(false);
      const msg = res.data.message;
      showMsg("", msg, "success");
      // navigate("/employee/dashboard/page-2");
    } catch (e) {
      setLoading(false);
      const msg = e?.response?.data?.message;
      showMsg("Error ||", msg, "danger");
    }
  };

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
            onSubmit={handleSubmit}
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
          


            <InputMaker
              label={"Date Entered:"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"date"}
              value={ifYesSpecialty}
            />
            <InputMaker
              label={"If yes, which speciality?"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
            <InputMaker
              label={"Date Discharged :"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"date"}
              value={ifYesSpecialty}
            />

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

            <InputMaker
              label={" Driver’s License Number:"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
            <InputMaker
              label={"Class: "}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
            <InputMaker
              label={"   State Issued: "}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
         
            
         
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
            <InputMaker
              label={" Words Per Minute"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
        


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
            <InputMaker
              label={"    Other skills:"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
            <InputMaker
              label={""}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
            <InputMaker
              label={""}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
            
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
