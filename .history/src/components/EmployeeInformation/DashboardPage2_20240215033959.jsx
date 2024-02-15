/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { showMsg } from "../../Baseurl";
import { ClipLoader } from "react-spinners";
import { InputMaker, RadioMaker } from "../../Helper/Makers";
import NavWrapper from "../../Helper/NavWrapper";

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
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.React_App_Baseurl}employee/addEmployeeEducation`,
        payload,
        Auth
      );
      const msg = res.data.message;
      showMsg("", msg, "success");
      setLoading(false);
      navigate("/employee/dashboard/page-3");
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
      const data = res.data.data;
      setDetail(data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (detail) {
      setHighSchoolGraduate(detail?.highSchoolGraduate);
      setHighSchoolName(detail?.highSchoolName);
      setCompleteAddress(detail?.completeAddress);
      setLastYearCompleted(detail?.lastYearCompleted);
      setCollegeGraduate(detail?.collegeGraduate);
      setCollegeSubject(detail?.collegeSubject);
      setCollegeName(detail?.collegeName);
      setCollegeAddress(detail?.collegeAddress);
      setCollegeLastYearCompleted(detail?.collegeLastYearCompleted);
      setYouTradeGraduate(detail?.youTradeGraduate);
      setTradeSubject(detail?.tradeSubject);
      setTradeSchoolName(detail?.tradeSchoolName);
      setTradeAddress(detail?.tradeAddress);
      setTradeLastYearCompleted(detail?.tradeLastYearCompleted);
      setYouOtherGraduate(detail?.youOtherGraduate);
      setOtherSubject(detail?.otherSubject);
      setOtherSchoolName(detail?.otherSchoolName);
      setOtherAddress(detail?.otherAddress);
      setOtherLastYearCompleted(detail?.otherLastYearCompleted);
      setSubject(detail?.subject);
      setConvictedCrime(detail?.convictedCrime);
      setConvictedCrimeExplain(detail?.convictedCrimeExplain);
    }
  }, [detail]);

  return (
    <>
      <NavWrapper
        title={"EDUCATIONAL BACKGROUND"}
        isArrow={true}
        filled={2}
        empty={3}
      />

      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Complete Address</th>
            <th></th>
          </tr>
        </thead>
      </table>

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
              label={"High School Name :"}
              setState={setHighSchoolName}
              placeholder={"Enter Text"}
              type={"text"}
              value={highSchoolName}
            />
            <InputMaker
              label={"Complete Address :"}
              setState={setCompleteAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={completeAddress}
            />

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Last year completed</span>

                <div className="btns">
                  <RadioMaker
                    name={"highschool"}
                    setValue={setLastYearCompleted}
                    value={1}
                    id={"highschool1"}
                    label={1}
                    checked={lastYearCompleted}
                  />
                  <RadioMaker
                    name={"highschool"}
                    setValue={setLastYearCompleted}
                    value={2}
                    id={"highschool2"}
                    label={2}
                    checked={lastYearCompleted}
                  />
                  <RadioMaker
                    name={"highschool"}
                    setValue={setLastYearCompleted}
                    value={3}
                    id={"highschool3"}
                    label={3}
                    checked={lastYearCompleted}
                  />
                  <RadioMaker
                    name={"highschool"}
                    setValue={setLastYearCompleted}
                    value={4}
                    id={"highschool4"}
                    label={4}
                    checked={lastYearCompleted}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Did you graduate?</span>

                <div className="btns">
                  <RadioMaker
                    name={"highschoolGraduate"}
                    setValue={setHighSchoolGraduate}
                    value={true}
                    id={"highschoolGraduate1"}
                    label={"Yes"}
                    checked={highSchoolGraduate}
                  />
                  <RadioMaker
                    name={"highschoolGraduate"}
                    setValue={setHighSchoolGraduate}
                    value={false}
                    id={"highschoolGraduate2"}
                    label={"No"}
                    checked={highSchoolGraduate}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <InputMaker
              label={"Subject(s) studied/Degree(s) received"}
              setState={setCollegeSubject}
              placeholder={"Enter Text"}
              type={"text"}
              value={collegeSubject}
            />

            <InputMaker
              label={"College Name :"}
              setState={setCollegeName}
              placeholder={"Enter Text"}
              type={"text"}
              value={collegeName}
            />
            <InputMaker
              label={"Complete Address :"}
              setState={setCollegeAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={collegeAddress}
            />

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Last year completed</span>

                <div className="btns">
                  <RadioMaker
                    name={"college"}
                    setValue={setCollegeLastYearCompleted}
                    value={1}
                    id={"college1"}
                    label={1}
                    checked={collegeLastYearCompleted}
                  />
                  <RadioMaker
                    name={"college"}
                    setValue={setCollegeLastYearCompleted}
                    value={2}
                    id={"college2"}
                    label={2}
                    checked={collegeLastYearCompleted}
                  />
                  <RadioMaker
                    name={"college"}
                    setValue={setCollegeLastYearCompleted}
                    value={3}
                    id={"college3"}
                    label={3}
                    checked={collegeLastYearCompleted}
                  />
                  <RadioMaker
                    name={"college"}
                    setValue={setCollegeLastYearCompleted}
                    value={4}
                    id={"college4"}
                    label={4}
                    checked={collegeLastYearCompleted}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Did you graduate?</span>

                <div className="btns">
                  <RadioMaker
                    name={"collegeGraduate"}
                    setValue={setCollegeGraduate}
                    value={true}
                    id={"collegeGraduate1"}
                    label={"Yes"}
                    checked={collegeGraduate}
                  />
                  <RadioMaker
                    name={"collegeGraduate"}
                    setValue={setCollegeGraduate}
                    value={false}
                    id={"collegeGraduate2"}
                    label={"No"}
                    checked={collegeGraduate}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <InputMaker
              label={"Subject(s) studied/Degree(s) received "}
              setState={setTradeSubject}
              placeholder={"Enter Text"}
              type={"text"}
              value={tradeSubject}
            />

            <InputMaker
              label={"Trade School Name :"}
              setState={setTradeSchoolName}
              placeholder={"Enter Text"}
              type={"text"}
              value={tradeSchoolName}
            />

            <InputMaker
              label={" Complete Address :"}
              setState={setTradeAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={tradeAddress}
            />

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Last year completed</span>

                <div className="btns">
                  <RadioMaker
                    name={"tradeComplete"}
                    setValue={setTradeLastYearCompleted}
                    value={1}
                    id={"tradeComplete1"}
                    label={1}
                    checked={tradeLastYearCompleted}
                  />
                  <RadioMaker
                    name={"tradeComplete"}
                    setValue={setTradeLastYearCompleted}
                    value={2}
                    id={"tradeComplete2"}
                    label={2}
                    checked={tradeLastYearCompleted}
                  />
                  <RadioMaker
                    name={"tradeComplete"}
                    setValue={setTradeLastYearCompleted}
                    value={3}
                    id={"tradeComplete3"}
                    label={3}
                    checked={tradeLastYearCompleted}
                  />
                  <RadioMaker
                    name={"tradeComplete"}
                    setValue={setTradeLastYearCompleted}
                    value={4}
                    id={"tradeComplete4"}
                    label={4}
                    checked={tradeLastYearCompleted}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Did you graduate?</span>

                <div className="btns">
                  <RadioMaker
                    name={"tradeGraduate"}
                    setValue={setYouTradeGraduate}
                    value={true}
                    id={"tradeGraduate1"}
                    label={"Yes"}
                    checked={youTradeGraduate}
                  />

                  <RadioMaker
                    name={"tradeGraduate"}
                    setValue={setYouTradeGraduate}
                    value={false}
                    id={"tradeGraduate2"}
                    label={"No"}
                    checked={youTradeGraduate}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <InputMaker
              label={"Subject(s) studied/Degree(s) received "}
              setState={setOtherSubject}
              placeholder={"Enter Text"}
              type={"text"}
              value={otherSubject}
            />
            <InputMaker
              label={"Other :"}
              setState={setOtherSchoolName}
              placeholder={"Enter Text"}
              type={"text"}
              value={otherSchoolName}
            />
            <InputMaker
              label={"Complete Address :"}
              setState={setOtherAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={otherAddress}
            />

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Last year completed</span>

                <div className="btns">
                  <RadioMaker
                    name={"lastothercomplteed"}
                    setValue={setOtherLastYearCompleted}
                    value={1}
                    id={"lastothercomplteed1"}
                    label={1}
                    checked={otherLastYearCompleted}
                  />
                  <RadioMaker
                    name={"lastothercomplteed"}
                    setValue={setOtherLastYearCompleted}
                    value={2}
                    id={"lastothercomplteed2"}
                    label={2}
                    checked={otherLastYearCompleted}
                  />
                  <RadioMaker
                    name={"lastothercomplteed"}
                    setValue={setOtherLastYearCompleted}
                    value={3}
                    id={"lastothercomplteed3"}
                    label={3}
                    checked={otherLastYearCompleted}
                  />
                  <RadioMaker
                    name={"lastothercomplteed"}
                    setValue={setOtherLastYearCompleted}
                    value={4}
                    id={"lastothercomplteed4"}
                    label={4}
                    checked={otherLastYearCompleted}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Did you graduate?</span>

                <div className="btns">
                  <RadioMaker
                    name={"otherGraduate"}
                    setValue={setYouOtherGraduate}
                    value={true}
                    id={"otherGraduate1"}
                    label={"Yes"}
                    checked={youOtherGraduate}
                  />

                  <RadioMaker
                    name={"otherGraduate"}
                    setValue={setYouOtherGraduate}
                    value={false}
                    id={"otherGraduate2"}
                    label={"No"}
                    checked={youOtherGraduate}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <InputMaker
              label={"Subject(s) studied/Degree(s) received "}
              setState={setSubject}
              placeholder={"Enter Text"}
              type={"text"}
              value={subject}
            />

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>
                  Have you been convicted of a crime, other than minor traffic
                  violations?
                </span>

                <div className="btns">
                  <RadioMaker
                    name={"convictCrime"}
                    setValue={setConvictedCrime}
                    value={true}
                    id={"convictCrime1"}
                    label={"Yes"}
                    checked={convictedCrime}
                  />
                  <RadioMaker
                    name={"convictCrime"}
                    setValue={setConvictedCrime}
                    value={false}
                    id={"convictCrime2"}
                    label={"No"}
                    checked={convictedCrime}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <InputMaker
              label={"  If yes, please explain :"}
              setState={setConvictedCrimeExplain}
              placeholder={"Enter Text"}
              type={"text"}
              value={convictedCrimeExplain}
            />

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
