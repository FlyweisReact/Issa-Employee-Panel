/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { showNotification } from "../../Repository/Apis";
import { InputMaker } from "../../Helper/Makers";
import NavWrapper from "../../Helper/NavWrapper";
import HOC from "../../Layout/Inner/HOC";

const Acknowledgement = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [skill, setSkill] = useState("");
  const [nameOfApplicant, setNameOfApplicant] = useState("");
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});
  const [open, setOpen] = useState(false);

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
      showNotification({ message: msg });
      navigate("/dashboard");
    } catch (e) {
      setLoading(false);
      const msg = e?.response?.data?.message;
      showNotification({ message: msg , type : "danger" });
    }
  };

  const fetchHandler = async () => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/viewEmployeeSkillAndQualification`,
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
      setCompanyName(detail?.companyName);
      setSkill(detail?.skill);
      setNameOfApplicant(detail?.nameOfApplicant);
    }
  }, [detail]);

  return (
    <>
      <NavWrapper isArrow={true} title={"ACKNOWLEDGEMENT"} filled={5} />
      <Container className="full-width-container">
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
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="single_bordered mb-3"
              placeholder="Company Name"
            />
            <input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="single_bordered mb-5"
              placeholder="Skills "
            />

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

            <InputMaker
              label={"Name of Applicant"}
              setState={setNameOfApplicant}
              placeholder={"Enter Text"}
              type={"text"}
              value={nameOfApplicant}
            />
            <div
              className="save-as-draft-btn-personal"
              style={{ maxWidth: "370px", width: "auto" }}
            >
              <div className="save-as-draft-btn d-flex w-100">
                <button
                  type="button"
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  SAVE AS DRAFT
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  style={{ backgroundColor: "#0C5C75", color: "white" }}
                >
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
                type="button"
              >
                PRINT REPORT
              </button>
            </div>

            <div className="employee_btn_div">
              <button className="employee_create_btn" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </Container>{" "}
    </>
  );
};

export default HOC(Acknowledgement);
