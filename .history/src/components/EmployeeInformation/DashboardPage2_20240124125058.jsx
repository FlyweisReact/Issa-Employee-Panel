/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { showMsg } from "../../Baseurl";
import { ClipLoader } from "react-spinners";
import { InputMaker } from "../../Helper/Makers";

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
      const msg = res.data.message;
      showMsg("", msg, "success");
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
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  function RadioMaker(name, setValue, value, id, label) {
    return (
      <Form.Check type={"radio"}>
        <Form.Check.Input
          type={"radio"}
          name={name}
          value={value}
          onChange={() => setValue(value)}
          isValid
          id={id}
          required
        />
        <Form.Check.Label htmlFor={id}> {label} </Form.Check.Label>
      </Form.Check>
    );
  }

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

            <InputMaker
              label={"High School Name:"}
              setState={setHighSchoolName}
              placeholder={"Enter Text"}
              type={"text"}
              value={highSchoolName}
            />

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
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Last year completed</span>

                <div className="btns">
                  {RadioMaker(
                    "highschool",
                    setLastYearCompleted,
                    1,
                    "highschool1",
                    1
                  )}
                  {RadioMaker(
                    "highschool",
                    setLastYearCompleted,
                    2,
                    "highschool2",
                    2
                  )}
                  {RadioMaker(
                    "highschool",
                    setLastYearCompleted,
                    3,
                    "highschool3",
                    3
                  )}
                  {RadioMaker(
                    "highschool",
                    setLastYearCompleted,
                    4,
                    "highschool4",
                    4
                  )}
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Did you graduate?</span>

                <div className="btns">
                  {RadioMaker(
                    "highschoolGraduate",
                    setHighSchoolGraduate,
                    true,
                    "highschoolGraduate1",
                    "Yes"
                  )}
                  {RadioMaker(
                    "highschoolGraduate",
                    setHighSchoolGraduate,
                    false,
                    "highschoolGraduate2",
                    "No"
                  )}
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
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Last year completed</span>

                <div className="btns">
                  {RadioMaker(
                    "college",
                    setCollegeLastYearCompleted,
                    1,
                    "college1",
                    1
                  )}

                  {RadioMaker(
                    "college",
                    setCollegeLastYearCompleted,
                    2,
                    "college2",
                    2
                  )}

                  {RadioMaker(
                    "college",
                    setCollegeLastYearCompleted,
                    3,
                    "college3",
                    3
                  )}

                  {RadioMaker(
                    "college",
                    setCollegeLastYearCompleted,
                    4,
                    "college4",
                    4
                  )}
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Did you graduate?</span>

                <div className="btns">
                  {RadioMaker(
                    "collegeGraduate",
                    setCollegeGraduate,
                    true,
                    "collegeGraduate1",
                    "Yes"
                  )}
                  {RadioMaker(
                    "collegeGraduate",
                    setCollegeGraduate,
                    false,
                    "collegeGraduate2",
                    "No"
                  )}
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
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Last year completed</span>

                <div className="btns">
                  {RadioMaker(
                    "tradeComplete",
                    setTradeLastYearCompleted,
                    1,
                    "tradeComplete1",
                    1
                  )}
                  {RadioMaker(
                    "tradeComplete",
                    setTradeLastYearCompleted,
                    2,
                    "tradeComplete2",
                    2
                  )}
                  {RadioMaker(
                    "tradeComplete",
                    setTradeLastYearCompleted,
                    3,
                    "tradeComplete3",
                    3
                  )}
                  {RadioMaker(
                    "tradeComplete",
                    setTradeLastYearCompleted,
                    4,
                    "tradeComplete4",
                    4
                  )}
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Did you graduate?</span>

                <div className="btns">
                  {RadioMaker(
                    "tradeGraduate",
                    setYouTradeGraduate,
                    true,
                    "tradeGraduate1",
                    "Yes"
                  )}
                  {RadioMaker(
                    "tradeGraduate",
                    setYouTradeGraduate,
                    false,
                    "tradeGraduate2",
                    "No"
                  )}
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
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Last year completed</span>

                <div className="btns">
                  {RadioMaker(
                    "lastothercomplteed",
                    setYouOtherGraduate,
                    1,
                    "lastothercomplteed1",
                    1
                  )}
                  {RadioMaker(
                    "lastothercomplteed",
                    setYouOtherGraduate,
                    2,
                    "lastothercomplteed2",
                    2
                  )}
                  {RadioMaker(
                    "lastothercomplteed",
                    setYouOtherGraduate,
                    3,
                    "lastothercomplteed3",
                    3
                  )}
                  {RadioMaker(
                    "lastothercomplteed",
                    setYouOtherGraduate,
                    4,
                    "lastothercomplteed4",
                    4
                  )}
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Did you graduate?</span>

                <div className="btns">
                  {RadioMaker(
                    "otherGraduate",
                    setYouOtherGraduate,
                    true,
                    "otherGraduate1",
                    "Yes"
                  )}

                  {RadioMaker(
                    "otherGraduate",
                    setYouOtherGraduate,
                    false,
                    "otherGraduate2",
                    "No"
                  )}
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
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>
                  Have you been convicted of a crime, other than minor traffic
                  violations?
                </span>

                <div className="btns">
                  {RadioMaker(
                    "convictCrime",
                    setConvictedCrime,
                    true,
                    "convictCrime1",
                    "Yes"
                  )}
                  {RadioMaker(
                    "convictCrime",
                    setConvictedCrime,
                    false,
                    "convictCrime2",
                    "No"
                  )}
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
