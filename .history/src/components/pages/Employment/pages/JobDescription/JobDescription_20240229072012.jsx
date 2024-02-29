/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Auth, Baseurl, showMsg } from "../../../../../Baseurl";
import axios from "axios";

export const JobDescription = () => {
  const navigate = useNavigate();
  const [JobDescription, setJobDescription] = useState({});
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [employeeDate, setEmployeeDate] = useState("");
  const getEmployeeId = async () => {
    try {
      const res = await axios.get(`${Baseurl}employee/getProfile`, Auth());
      console.log(res?.data?.data?._id);

      if (res?.data?.data?._id) {
        try {
          const jobDescriptionResponse = await axios.get(
            `${Baseurl}admin/getJobDescriptionById/${res?.data?.data?._id}`,
            Auth()
          );
          console.log(jobDescriptionResponse);
          setJobDescription(jobDescriptionResponse?.data?.data);
        } catch (error) {
          console.log(error);
          if (error.response && error.response.status === 404) {
            setJobDescription({});
            showMsg("Error", error?.response?.data?.message, "danger");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployeeId();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(employeeSignature, employeeDate);
    if (!JobDescription) {
      return;
    }
    try {
      const res = axios.post(`${Baseurl}employee/updateJobDescription`, {
        employeeInfoSignature: employeeSignature,
        employeeInfoDate: employeeDate,
      });
      showMsg("Success", res?.data?.message, "success");
    } catch (error) {
      if (error.res.status === 403) {
        return;
      }
      showMsg("Error", error?.response?.data?.message, "danger");
      console.log(error);
    }
  };

  return (
    <>
  

      <Form onSubmit={submitHandler} className="main-div-personal important">
        <div className="nav-wrap-personal">
          <div className="nav-div-personal1">
            <img
              onClick={() => navigate(-1)}
              src="/back_button2.png"
              alt="da"
            />
          </div>
          <div className="nav-div-personal">
            <p
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{ cursor: "pointer", textAlign: "center", flex: "1" }}
              >
                JOB DESCRIPTION
              </span>
              <span>
                <img
                  style={{
                    width: "1.5rem",
                    cursor: "pointer",
                    marginRight: "1rem",
                    height: "1.5rem",
                  }}
                  src="/Dashboard/edit_icon.png"
                  alt=""
                />
              </span>
            </p>
            <p> </p>
          </div>
        </div>
        <div className="top-div-personal">
          <div className="form-personal offer-letter">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  lineHeight: "1rem",
                }}
              >
                <p>JOB DISCRIPTION - {JobDescription?.jobDescription}</p>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  lineHeight: ".5rem",
                }}
              >
                <p>
                  POSITIONS SUPERVISED: {JobDescription?.positionSupervised}
                </p>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  lineHeight: "0rem",
                }}
              >
                <p>PRIMARY FUNCTION OR RESPONSIBILITIES:.</p>
              </Form.Label>
              <div>
                {JobDescription?.responsibilities?.map((res, index) => (
                  <li style={{ fontSize: ".8rem" }}>{res}</li>
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  lineHeight: "0rem",
                }}
              >
                <p>CORE COMPETENCIES:</p>
              </Form.Label>
              <div>
                {JobDescription?.coreCompetencies?.map((res, index) => (
                  <li style={{ fontSize: ".8rem" }}>{res}</li>
                ))}
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  lineHeight: "0rem",
                }}
              >
                <p>MINIMUM QUALIFICATIONS:</p>
              </Form.Label>

              <div>
                {JobDescription?.minimumQualifications?.map((res, index) => (
                  <li style={{ fontSize: ".8rem" }}>{res}</li>
                ))}
              </div>
            </Form.Group>

            <p style={{ fontWeight: "500", fontSize: ".8rem" }}>
              Upon a successfully hiring process, my signature below indicates
              that I understand and agree to the duties of BEHAVIORAL HEALTH
              TECHNICIAN(BHT), and I have meet the stated qualifications,
              experience requirements, and can adequately perform duties
              prescribed or as stated in this job descriptions.
            </p>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employee Name : {JobDescription?.employeeInfoName}
              </Form.Label>
              <Form.Control
                disabled
                type="text"
                placeholder="Enter First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employer Signature :
              </Form.Label>
              <Form.Control
                required
                type="text"
                onChange={(e) => setEmployeeSignature(e.target.value)}
                placeholder="Employee Signature"
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-2">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date :
              </Form.Label>
              <Form.Control
                required
                type="date"
                onChange={(e) => setEmployeeDate(e.target.value)}
                placeholder="Enter Date"
              />
            </Form.Group>
            <div className="save-as-draft-btn-personal">
              <div style={{ maxWidth: "100px" }}>
                <img
                  style={{ height: "80%", width: "100%", border: "1px " }}
                  src="/Dashboard/save.png"
                  alt="images"
                />
              </div>
              <div
                className="save-as-draft-btn"
                style={{ flex: "1", marginLeft: "10px" }}
              >
                {" "}
                <button
                  style={{
                    border: "1px solid #0C5C75",
                    color: "#0C5C75",
                    marginBottom: "5px",
                  }}
                >
                  SAVE AS DRAFT
                </button>
                <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                  SAVED AND SIGNED
                </button>
              </div>
            </div>

            <p style={{ fontWeight: "bold", fontSize: ".8rem" }}>
              Please note:
            </p>
            {JobDescription?.pleaseNote}

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
            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};
