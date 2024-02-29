/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Auth, Baseurl, showMsg } from "../../../../../Baseurl";
import axios from "axios";
import NavWrapper from "../../../../../Helper/NavWrapper";
import { fetchApi } from "../../../../../Repository/Apis";

export const JobDescription = () => {
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

  // ---
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApi(setLoading, "employee/getMyJobDescription", setData);
  }, []);

  return (
    <>
      <NavWrapper title="JOB DESCRIPTION" isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.data?.data?.jobDescription,
            }}
          />
        </form>
      </Container>

      <Form onSubmit={submitHandler} className="main-div-personal important">
        <div className="top-div-personal">
          <div className="form-personal offer-letter">
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
