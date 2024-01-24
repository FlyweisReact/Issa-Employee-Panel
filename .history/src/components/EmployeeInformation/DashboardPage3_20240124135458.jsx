/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { showMsg } from "../../Baseurl";
import { InputMaker, RadioMaker } from "../../Helper/Makers";

const DashboardPage3 = () => {
  const navigate = useNavigate();
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [supervisorNameAndTitle, setSupervisorNameAndTitle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [dutiesPerformed, setDutiesPerformed] = useState("");
  const [reasonForLeaving, setReasonForLeaving] = useState("");
  const [mayContactWithEmployee, setMayContactWithEmployee] = useState("");
  const [ employeeName  , setEmployeeName ] = useState("")
  const [ start , setStart ] = useState("")
  const [ end , setEnd ] = useState("")
  const [loading, setLoading] = useState(false);

  const payload = {
    streetAddress,
    city,
    state,
    zipCode,
    phoneNumber,
    supervisorNameAndTitle,
    employeeName
    previousCompany: {
      from,
      to,
      jobTitle,
      dutiesPerformed,
      reasonForLeaving,
      mayContactWithEmployee,
    },
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
        `${process.env.React_App_Baseurl}employee/addEmployeeHistory`,
        payload,
        Auth
      );
      const msg = res.data.message;
      showMsg("", msg, "success");
      setLoading(false);
      // navigate("/employee/dashboard/page-3");
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
            onClick={() => navigate("/employee/dashboard/page-2")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            EMPLOYMENT HISTORY <br />
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
            <p style={{ fontWeight: "500" }}>
              Please list your work experience in the past five (5) years,
              beginning with the most recent job held. If you were
              self-employed, give firm name. Attach additional sheets if
              necessary. Please do not write “see resume”.
            </p>

            <InputMaker
              label={"Employer Name :"}
              setState={setEmployeeName}
              placeholder={"Enter Text"}
              type={"text"}
              value={employeeName}
            />
            <InputMaker
              label={"Street Address :"}
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
            />
            <InputMaker
              label={"City :"}
              setState={setCity}
              placeholder={"Enter Text"}
              type={"text"}
              value={city}
            />
            <InputMaker
              label={"State :"}
              setState={setState}
              placeholder={"Enter Text"}
              type={"text"}
              value={state}
            />
            <InputMaker
              label={"ZipCode :"}
              setState={setZipCode}
              placeholder={"Enter Text"}
              type={"text"}
              value={zipCode}
            />
            <InputMaker
              label={"Phone Number :"}
              setState={setPhoneNumber}
              placeholder={"Enter Text"}
              type={"tel"}
              value={phoneNumber}
            />
            <InputMaker
              label={"Supervisor Name and Title :"}
              setState={setSupervisorNameAndTitle}
              placeholder={"Enter Text"}
              type={"text"}
              value={supervisorNameAndTitle}
            />
            <p className="form-middle_heading">Employment Date :</p>
            <InputMaker
              label={"From :"}
              setState={setFrom}
              placeholder={"Enter Text"}
              type={"text"}
              value={from}
            />
            <InputMaker
              label={"To :"}
              setState={setTo}
              placeholder={"Enter Text"}
              type={"text"}
              value={to}
            />
            <p className="form-middle_heading">Salary :</p>

            <InputMaker
              label={"Start :"}
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
            />
            <InputMaker
              label={"End :"}
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
            />

            <InputMaker
              label={"Your Job Title(s) :"}
              setState={setJobTitle}
              placeholder={"Enter Text"}
              type={"text"}
              value={jobTitle}
            />
            <InputMaker
              label={
                "Duties performed and advancements or promotions earned while with this employer:"
              }
              setState={setDutiesPerformed}
              placeholder={"Enter Text"}
              type={"text"}
              value={dutiesPerformed}
            />
            <InputMaker
              label={" Reason(s) for leaving :"}
              setState={setReasonForLeaving}
              placeholder={"Enter Text"}
              type={"text"}
              value={reasonForLeaving}
            />
            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>
                  {" "}
                  May we contact this employer?
                </span>

                <div className="btns">
                  <RadioMaker
                    name={"contactEmployer"}
                    setValue={setMayContactWithEmployee}
                    value={true}
                    id={"contactEmployer1"}
                    label={"Yes"}
                    checked={mayContactWithEmployee}
                  />
                  <RadioMaker
                    name={"contactEmployer"}
                    setValue={setMayContactWithEmployee}
                    value={false}
                    id={"contactEmployer2"}
                    label={"No"}
                    checked={mayContactWithEmployee}
                  />
                </div>
              </Form.Label>
            </Form.Group>

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

export default DashboardPage3;
