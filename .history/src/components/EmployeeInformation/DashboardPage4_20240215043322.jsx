/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { showMsg } from "../../Baseurl";
import { InputMaker, RadioMaker } from "../../Helper/Makers";
import NavWrapper from "../../Helper/NavWrapper";

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
  const [detail, setDetail] = useState({});

  const payload = {
    militaryExperience,
    ifSpecialty: ifYesSpecialty,
    dateEntered,
    dateDischarged,
    nationalGuard,
    validLicense,
    driverLicenseClass,
    driverLicenseNumber,
    driverLicenseStatusIssued,
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
      navigate("/employee/dashboard/page-5");
    } catch (e) {
      setLoading(false);
      const msg = e?.response?.data?.message;
      showMsg("Error ||", msg, "danger");
    }
  };

  const fetchHandler = async () => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/viewEmployeeOtherInfo`,
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
      setMilitaryExperience(detail?.militaryExperiance);
      setIfYesSpecialty(detail?.ifSpecialty);
      setDateEntered(detail?.dateEntered);
      setDateDischarged(detail?.dateDischarged);
      setNationalGuard(detail?.nationalGuard);
      setValidLicense(detail?.validLicence);
      setDriverLicenseNumber(detail?.driverLicenseNumber);
      setDriverLicenseClass(detail?.driverLicenseClass);
      setDriverLicenseStatusIssued(detail?.driverLicenseStatusIssued);
      setTypingSkill(detail?.typingSkill);
      setWordsPerMinute(detail?.wordsPerMinute);
      setFamiliarWithMicrosoft(detail?.familiarWithMicroSoft);
      setOtherSkill(detail?.otherSkill);
      setName(detail?.professionalReferences?.[0]?.name);
      setAddress(detail?.professionalReferences?.[0]?.address);
      setCompany(detail?.professionalReferences?.[0]?.company);
      setPhoneNumber(detail?.professionalReferences?.[0]?.phoneNumber);
      setHowLongYouKnow(detail?.professionalReferences?.[0]?.howLongYouKnow);
    }
  }, [detail]);

  function dateFormation(date) {
    if (date) {
      const formattedDate = new Date(date).toISOString().split("T")[0];
      return formattedDate;
    }
  }

  return (
    <>
      <NavWrapper
        isArrow={true}
        title={"OTHER INFORMATION"}
        filled={4}
        empty={1}
      />

      <Container className="full-width-container">
        <form className="employee1" onSubmit={handleSubmit}>
          <p className="mb-3 fw-bold mt-3 ">MILITARY EXPERIENCE </p>
          <div className="grid-container">
            <div class="grid-item">
              <label>Today's Date:</label>
              <BorderlessInput
                setState={setToday}
                placeholder={""}
                type={"date"}
                value={dateFormation(today)}
              />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <label>Hire Date:</label>
              <BorderlessInput
                setState={setHireDate}
                placeholder={""}
                type={"date"}
                value={dateFormation(hireDate)}
              />
            </div>
          </div>
        </form>
      </Container>

      <Form
        id="form-appendix"
        className="employee1 w-100"
        onSubmit={handleSubmit}
      >
        <p style={{ fontSize: "1rem", textDecoration: "underline" }}>
          MILITARY EXPERIENCE
        </p>

        <Form.Group className="mb-3">
          <Form.Label className="Radio_btns">
            <span style={{ marginRight: "10px" }}>
              Have you ever served in the armed forces?
            </span>
            <div className="btns">
              <RadioMaker
                name={"militaryExperience"}
                setValue={setMilitaryExperience}
                value={true}
                id={"militaryExperience1"}
                label={"Yes"}
                checked={militaryExperience}
              />
              <RadioMaker
                name={"militaryExperience"}
                setValue={setMilitaryExperience}
                value={false}
                id={"militaryExperience2"}
                label={"No"}
                checked={militaryExperience}
              />
            </div>
          </Form.Label>
        </Form.Group>

        <InputMaker
          label={"If yes, which speciality?"}
          setState={setIfYesSpecialty}
          placeholder={"Enter Text"}
          type={"text"}
          value={ifYesSpecialty}
        />

        <InputMaker
          label={"Date Entered:"}
          setState={setDateEntered}
          placeholder={"Enter Text"}
          type={"date"}
          value={dateFormation(dateEntered)}
        />

        <InputMaker
          label={"Date Discharged :"}
          setState={setDateDischarged}
          placeholder={"Enter Text"}
          type={"date"}
          value={dateFormation(dateDischarged)}
        />

        <Form.Group className="mb-3">
          <Form.Label className="Radio_btns">
            <span style={{ marginRight: "10px" }}>
              Are you currently a member of the national guard?
            </span>
            <div className="btns">
              <RadioMaker
                name={"nationalGuard"}
                setValue={setNationalGuard}
                value={true}
                id={"nationalGuard1"}
                label={"Yes"}
                checked={nationalGuard}
              />
              <RadioMaker
                name={"nationalGuard"}
                setValue={setNationalGuard}
                value={false}
                id={"nationalGuard2"}
                label={"No"}
                checked={nationalGuard}
              />
            </div>
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="Radio_btns">
            <span style={{ marginRight: "10px" }}>
              Do you have a Valid Driver’s License
            </span>
            <div className="btns">
              <RadioMaker
                name={"validLicense"}
                setValue={setValidLicense}
                value={true}
                id={"validLicense1"}
                label={"Yes"}
                checked={validLicense}
              />
              <RadioMaker
                name={"validLicense"}
                setValue={setValidLicense}
                value={false}
                id={"validLicense2"}
                label={"No"}
                checked={validLicense}
              />
            </div>
          </Form.Label>
        </Form.Group>

        <InputMaker
          label={" Driver’s License Number"}
          setState={setDriverLicenseNumber}
          placeholder={"Enter Text"}
          type={"text"}
          value={driverLicenseNumber}
        />
        <InputMaker
          label={"Class"}
          setState={setDriverLicenseClass}
          placeholder={"Enter Text"}
          type={"text"}
          value={driverLicenseClass}
        />
        <InputMaker
          label={"State Issued"}
          setState={setDriverLicenseStatusIssued}
          placeholder={"Enter Text"}
          type={"text"}
          value={driverLicenseStatusIssued}
        />

        <p
          className=""
          style={{ fontSize: "1rem", textDecoration: "underline" }}
        >
          FOR OFFICE POSITIONS ONLY
        </p>

        <Form.Group className="mb-3">
          <Form.Label className="Radio_btns">
            <span style={{ marginRight: "10px" }}>
              Do you have typing skills on the computer?
            </span>
            <div className="btns">
              <RadioMaker
                name={"typingSkill"}
                setValue={setTypingSkill}
                value={true}
                id={"typingSkill1"}
                label={"Yes"}
                checked={typingSkill}
              />
              <RadioMaker
                name={"typingSkill"}
                setValue={setTypingSkill}
                value={false}
                id={"typingSkill2"}
                label={"No"}
                checked={typingSkill}
              />
            </div>
          </Form.Label>
        </Form.Group>

        <InputMaker
          label={" Words Per Minute"}
          setState={setWordsPerMinute}
          placeholder={"Enter Text"}
          type={"text"}
          value={wordsPerMinute}
        />

        <Form.Group className="mb-3">
          <Form.Label className="Radio_btns">
            <span style={{ marginRight: "10px" }}>
              Are you familiar with using Microsoft Word, Microsoft Excel, etc?
            </span>
            <div className="btns">
              <RadioMaker
                name={"familiarWithMicrosoft"}
                setValue={setFamiliarWithMicrosoft}
                value={true}
                id={"familiarWithMicrosoft1"}
                label={"Yes"}
                checked={familiarWithMicrosoft}
              />
              <RadioMaker
                name={"familiarWithMicrosoft"}
                setValue={setFamiliarWithMicrosoft}
                value={false}
                id={"familiarWithMicrosoft2"}
                label={"No"}
                checked={familiarWithMicrosoft}
              />
            </div>
          </Form.Label>
        </Form.Group>

        <InputMaker
          label={"Other skills"}
          setState={setOtherSkill}
          placeholder={"Enter Text"}
          type={"text"}
          value={otherSkill}
        />

        <p style={{ fontSize: "1rem", textDecoration: "underline" }}>
          3 PROFESSIONAL REFERENCES
        </p>
        <InputMaker
          label={"Full Name"}
          setState={setName}
          placeholder={"Enter Text"}
          type={"text"}
          value={name}
        />
        <InputMaker
          label={"Address"}
          setState={setAddress}
          placeholder={"Enter Text"}
          type={"text"}
          value={address}
        />
        <InputMaker
          label={"Company"}
          setState={setCompany}
          placeholder={"Enter Text"}
          type={"text"}
          value={company}
        />
        <InputMaker
          label={"Relationship/Phone No"}
          setState={setPhoneNumber}
          placeholder={"Enter Text"}
          type={"text"}
          value={phoneNumber}
        />
        <InputMaker
          label={"How long have you known him/her?"}
          setState={setHowLongYouKnow}
          placeholder={"Enter Text"}
          type={"text"}
          value={howLongYouKnow}
        />

        <div className="employee_btn_div">
          <button className="employee_create_btn" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "NEXT"}
          </button>
        </div>
      </Form>
    </>
  );
};

export default DashboardPage4;