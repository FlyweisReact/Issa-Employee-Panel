/** @format */

import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { showMsg } from "../../Baseurl";
import { InputMaker } from "../../Helper/Makers";

const DashboardPage5 = () => {
  const navigate = useNavigate();

  // Form UseStates
  const [companyName, setCompanyName] = useState("");
  const [skill, setSkill] = useState("");
  const [nameOfApplicant, setNameOfApplicant] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    companyName,
    skill,
    nameOfApplicant,
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
        `${process.env.React_App_Baseurl}employee/addEmployeeSkillAndQualification`,
        payload,
        Auth
      );
      setLoading(false);
      const msg = res.data.message;
      showMsg("", msg, "success");
      // navigate("/employee/dashboard/page-5");
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
            onClick={() => navigate("/employee/dashboard/page-4")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            ACKNOWLEDGEMENT
            <br />
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
              <span style={{ fontSize: ".5rem" }}>🔵</span>
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
            <p
              style={{
                fontSize: "1rem",
                textDecoration: "underline",
                textAlign: "center",
              }}
            >
              SKILLS AND QUALIFICATIONS
            </p>
            <p style={{ fontWeight: "500" }}>
              Summarize special skills and qualifications acquired from
              employment or other experiences that may qualify you for work with
              COMPANY NAME.
            </p>
            <hr style={{ marginTop: "3rem" }} />
            <hr style={{ marginTop: "3rem" }} />
            <hr style={{ marginTop: "3rem" }} />


              <input type='text' onChange={(e) => set}  />


            <p style={{ fontWeight: "500" }}>
              By singing below, I acknowledge that all the information I have
              provided is accurate and true. I understand that, if employed,
              falsified statement on this application shall be ground to
              dismissal. I understand and agree that if employed, my employment
              will be “at will” and can be terminated with or without cause and
              with or without notice, at any time of COMPANY NAME.or myself.
              Furthermore, I authorize COMPANY NAME to thoroughly investigate my
              work, education and other matters related to my suitability for
              employment.
            </p>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Name of Applicant
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>
            <div
              className="save-as-draft-btn-personal"
              style={{ maxWidth: "370px", width: "auto" }}
            >
              <div>
                <img
                  style={{
                    height: "80%",
                    width: "100%",
                    border: "1px ",
                  }}
                  src="/Dashboard/save.png"
                  alt="asds"
                />
              </div>
              <div className="save-as-draft-btn">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  SAVE AS DRAFT
                </button>
                <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                  SAVED AND SIGNED
                </button>
              </div>
            </div>
            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "10px",
                }}
                type="submit"
              >
                PRINT REPORT
              </button>
            </div>
            <div
              className="save-as-draft-btn123"
              style={{ marginBottom: "5rem" }}
            >
              <button
                className="btn1233"
                onClick={() => navigate("/dashboard/")}
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default DashboardPage5;
