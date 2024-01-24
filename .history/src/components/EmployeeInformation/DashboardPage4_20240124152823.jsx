/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { showMsg } from "../../Baseurl";
import { InputMaker, RadioMaker } from "../../Helper/Makers";

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
      // navigate("/employee/dashboard/page-2");
    } catch (e) {
      setLoading(false);
      const msg = e?.response?.data?.message;
      showMsg("Error ||", msg, "danger");
    }
  };


  function dateFormation(date) {
    if (date) {
      const formattedDate = new Date(date).toISOString().split("T")[0];
      return formattedDate;
    }
  }



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
            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>
                  Do you have a Valid Driver’s License
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
              label={" Driver’s License Number"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
            <InputMaker
              label={"Class"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
            <InputMaker
              label={"State Issued"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
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
              label={" Words Per Minute"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>
                  Are you familiar with using Microsoft Word, Microsoft Excel,
                  etc?
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
              label={"Other skills"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />

            <p style={{ fontSize: "1rem", textDecoration: "underline" }}>
              3 PROFESSIONAL REFERENCES
            </p>
            <InputMaker
              label={"Full Name"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
            <InputMaker
              label={"Address"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
            <InputMaker
              label={"Company"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
            <InputMaker
              label={"Phone Number"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />
            <InputMaker
              label={"How long have you known him/her?"}
              setState={setIfYesSpecialty}
              placeholder={"Enter Text"}
              type={"text"}
              value={ifYesSpecialty}
            />

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

export default DashboardPage4;
