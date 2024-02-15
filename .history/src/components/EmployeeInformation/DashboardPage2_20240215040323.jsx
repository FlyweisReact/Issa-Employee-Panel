/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { showMsg } from "../../Baseurl";
import { ClipLoader } from "react-spinners";
import { BorderlessInput, InputMaker, RadioMaker } from "../../Helper/Makers";
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

      <Container className="full-width-container">
      <form onSubmit={submitHandler} >

      </form>
       
      </Container>

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
