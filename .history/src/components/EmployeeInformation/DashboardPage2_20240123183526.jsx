/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { showMsg } from "../../Baseurl";
import { ClipLoader } from "react-spinners";

const DashboardPage2 = () => {
  const navigate = useNavigate();
  const [highSchoolGraduate, setHighSchoolGraduate] = useState("");
  const [highSchoolName, setHighSchoolName] = useState("");
  const [completeAddress, setCompleteAddress] = useState("");
  const [lastYearCompleted, setLastYearCompleted] = useState("");
  const [collegeGraduate, setCollegeGraduate] = useState("");
  const [collegeSubject, setCollegeSubject] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [collegeAddress, setCollegeAddress] = useState("");
  const [collegeLastYearCompleted, setCollegeLastYearCompleted] = useState("");
  const [youTradeGraduate, setYouTradeGraduate] = useState("");
  const [tradeSubject, setTradeSubject] = useState("");
  const [tradeSchoolName, setTradeSchoolName] = useState("");
  const [tradeAddress, setTradeAddress] = useState("");
  const [tradeLastYearCompleted, setTradeLastYearCompleted] = useState("");
  const [youOtherGraduate, setYouOtherGraduate] = useState("");
  const [otherSubject, setOtherSubject] = useState("");
  const [otherSchoolName, setOtherSchoolName] = useState("");
  const [otherAddress, setOtherAddress] = useState("");
  const [otherLastYearCompleted, setOtherLastYearCompleted] = useState("");
  const [subject, setSubject] = useState("");
  const [convictedCrime, setConvictedCrime] = useState("");
  const [convictedCrimeExplain, setConvictedCrimeExplain] = useState("");
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});

  const payload = {
    highSchoolGraduate,
    highSchoolName,
    completeAddress,
    lastYearCompleted,
    collegeGraduate,
    collegeSubject,
    collegeName,
    collegeAddress,
    collegeLastYearCompleted,
    youTradeGraduate,
    tradeSubject,
    tradeSchoolName,
    tradeAddress,
    tradeLastYearCompleted,
    youOtherGraduate,
    otherSubject,
    otherSchoolName,
    otherAddress,
    otherLastYearCompleted,
    subject,
    convictedCrime,
    convictedCrimeExplain,
  };

  const Auth = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.React_App_Baseurl}employee/addEmployeeEducation`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      const msg = e?.response?.data?.message;
      showMsg("Error ||", msg, "danger");
    }
  };

  const fetchHandler = async () => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/viewEmployeeEducation`,
        Auth
      );
      console.log(res);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/Dashboard")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            EDUCATIONAL BACKGROUND <br />
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
            onSubmit={submitHandler}
          >
            <p>Level</p>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                High School Name:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter text"
                required
                onChange={(e) => setHighSchoolName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Complete Address:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                required
                onChange={(e) => setCompleteAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gender:</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  id="male"
                  label="Male"
                  name="gender"
                  value="male"
                  inline
                  required
                />
                <Form.Check
                  type="radio"
                  id="female"
                  label="Female"
                  name="gender"
                  value="female"
                  inline
                  required
                />
                <Form.Check
                  type="radio"
                  id="other"
                  label="Other"
                  name="gender"
                  value="other"
                  inline
                  required
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Last year completed</span>

                <div className="btns">
                  <Form.Check type={"radio"} >
                    <Form.Check.Input type={type} isValid />
                    <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                  </Form.Check>
                  <Form.Check
                    type="radio"
                    label="1"
                    name="highscholl"
                    value="1"
                    inline
                    required
                    onChange={(e) => setLastYearCompleted(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label="2"
                    name="highscholl"
                    value="2"
                    inline
                    required
                    onChange={(e) => setLastYearCompleted(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label="3"
                    name="highscholl"
                    value="3"
                    inline
                    required
                    onChange={(e) => setLastYearCompleted(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    label="4"
                    name="highscholl"
                    value="4"
                    inline
                    required
                    onChange={(e) => setLastYearCompleted(e.target.value)}
                  />
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
                <span style={{ marginRight: "10px" }}>Did you graduate?</span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      required
                      value={true}
                      onChange={(e) => setHighSchoolGraduate(e.target.value)}
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
                      value={false}
                      onChange={(e) => setHighSchoolGraduate(e.target.value)}
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
                Subject:
              </Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter  text"
                onChange={(e) => setCollegeSubject(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                College Name:
              </Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter  text "
                onChange={(e) => setCollegeName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Complete Address:
              </Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter  text"
                onChange={(e) => setCollegeAddress(e.target.value)}
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
                <span style={{ marginRight: "10px" }}>Last year completed</span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check
                    required
                    type={"radio"}
                    id={`check-api-night-sweats-yes`}
                  >
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      required
                      value={"1"}
                      onChange={(e) =>
                        setCollegeLastYearCompleted(e.target.value)
                      }
                    />
                    <Form.Check.Label
                      style={{
                        marginLeft: "5px",
                        marginRight: "15px",
                        marginBottom: "0",
                      }}
                    >
                      1
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      value={"2"}
                      onChange={(e) =>
                        setCollegeLastYearCompleted(e.target.value)
                      }
                    />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      2
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      value={"3"}
                      onChange={(e) =>
                        setCollegeLastYearCompleted(e.target.value)
                      }
                    />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      3
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      value={"4"}
                      onChange={(e) =>
                        setCollegeLastYearCompleted(e.target.value)
                      }
                    />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      4
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
                <span style={{ marginRight: "10px" }}>Did you graduate?</span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      required
                      value={true}
                      onChange={(e) => setCollegeGraduate(e.target.value)}
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
                      value={false}
                      onChange={(e) => setCollegeGraduate(e.target.value)}
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
                Subject:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                required
                onChange={(e) => setTradeSubject(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Trade School Name:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                required
                onChange={(e) => setTradeSchoolName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Complete Address:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                required
                onChange={(e) => setTradeAddress(e.target.value)}
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
                <span style={{ marginRight: "10px" }}>Last Year Completed</span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      required
                      value={"1"}
                      onChange={(e) =>
                        setTradeLastYearCompleted(e.target.value)
                      }
                    />
                    <Form.Check.Label
                      style={{
                        marginLeft: "5px",
                        marginRight: "15px",
                        marginBottom: "0",
                      }}
                    >
                      1
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      value={"2"}
                      onChange={(e) =>
                        setTradeLastYearCompleted(e.target.value)
                      }
                    />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      2
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
                <span style={{ marginRight: "10px" }}>Did you graduate?</span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      required
                      value={true}
                      onChange={(e) => setYouTradeGraduate(e.target.value)}
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
                      value={false}
                      onChange={(e) => setYouTradeGraduate(e.target.value)}
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
                Subject:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                required
                onChange={(e) => setOtherSubject(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Other:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                required
                onChange={(e) => setOtherSchoolName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Complete Address:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                required
                onChange={(e) => setOtherAddress(e.target.value)}
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
                <span style={{ marginRight: "10px" }}>Last Year Completed</span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      required
                      value={"1"}
                      onChange={(e) =>
                        setOtherLastYearCompleted(e.target.value)
                      }
                    />
                    <Form.Check.Label
                      style={{
                        marginLeft: "5px",
                        marginRight: "15px",
                        marginBottom: "0",
                      }}
                    >
                      1
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      value={"2"}
                      onChange={(e) =>
                        setOtherLastYearCompleted(e.target.value)
                      }
                    />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      2
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
                <span style={{ marginRight: "10px" }}>Did you graduate?</span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      value={true}
                      required
                      onChange={(e) => setYouOtherGraduate(e.target.value)}
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
                      value={false}
                      onChange={(e) => setYouOtherGraduate(e.target.value)}
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
                Subject:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                required
                onChange={(e) => setSubject(e.target.value)}
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
                  Have you been convicted of a crime, other than minor traffic
                  violations?
                </span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      required
                      value={true}
                      onChange={(e) => setConvictedCrime(e.target.value)}
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
                      value={false}
                      onChange={(e) => setConvictedCrime(e.target.value)}
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
                If yes, please explain:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                required
                onChange={(e) => setConvictedCrimeExplain(e.target.value)}
              />
            </Form.Group>
            <p style={{ fontWeight: "500" }}>
              Please note: No applicant will be denied employment solely on the
              grounds of conviction of a criminal offense. The nature, date,
              surrounding circumstances and relevance of the offense to the
              position for which you are applying will be taken into
              consideration. False information could be grounds for termination
            </p>

            <div className="employee_btn_div">
              <button className="employee_create_btn" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "NEXT"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default DashboardPage2;
