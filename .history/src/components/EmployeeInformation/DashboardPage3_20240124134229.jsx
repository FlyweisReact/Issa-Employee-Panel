/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { showMsg } from "../../Baseurl";
import { InputMaker } from "../../Helper/Makers";

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
  const [loading, setLoading] = useState(false);

  const payload = {
    streetAddress,
    city,
    state,
    zipCode,
    phoneNumber,
    supervisorNameAndTitle,
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
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
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
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
            />
            <InputMaker
              label={"State :"}
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
            />
            <InputMaker
              label={"ZipCode :"}
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
            />
            <InputMaker
              label={"Phone Number :"}
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
            />
            <InputMaker
              label={"Supervisor Name and Title :"}
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
            />
            <p className="form-middle_heading">Employment Date :</p>
            <InputMaker
              label={"From :"}
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
            />
            <InputMaker
              label={"To :"}
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
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
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
            />
            <InputMaker
              label={
                "Duties performed and advancements or promotions earned while with this employer:"
              }
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
            />
            <InputMaker
              label={" Reason(s) for leaving :"}
              setState={setStreetAddress}
              placeholder={"Enter Text"}
              type={"text"}
              value={streetAddress}
            />
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
                onClick={() => navigate("/employee/dashboard/page-4")}
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

export default DashboardPage3;