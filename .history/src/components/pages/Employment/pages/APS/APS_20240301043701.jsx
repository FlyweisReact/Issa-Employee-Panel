/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sign from "../../../../../Loader/Sign";
import { Auth, Baseurl, postData, showMsg } from "../../../../../Baseurl";
import axios from "axios";
import NavWrapper from "../../../../../Helper/NavWrapper";

export const APS = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeSignature: "",
    administratorName: "",
    administratorSignature: "",
    date: "",
  });

  const handleChange = (name, value) => {
    // const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getProfile = async () => {
    try {
      const res = await axios.get(`${Baseurl}employee/getProfile`, Auth());
      console.log(res?.data?.data?._id);
      if (res?.data?.data?._id) {
        const res2 = await axios.get(
          `${Baseurl}employee/getApsConsentById/${res?.data?.data?._id}`,
          Auth()
        );
        setData(res2?.data?.data);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    setFormData({
      ...formData,
      employeeName: data?.employeeName,
      employeeSignature: data?.employeeSignature,
      administratorName: data?.administratorName,
      administratorSignature: data?.administratorSignature,
      date: data?.date,
    });
  }, [data]);

  const submitHandler = (e) => {
    e.preventDefault();
    // return console.log(formData);
    postData("employee/createApsConsent", formData)
      .then((res) => {
        console.log(res);
        showMsg("Success", res.data.message, "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <NavWrapper title="APS Search Consent Form" isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start">
          <p className="fw-bold text-start">
            Company Name conducts adult protective service search through the
            department of health services APS search registry. These searches
            are conducted randomly and also yearly thereafter.
          </p>
          <p className="fw-bold text-start">
            a. Administrator will conduct a search on the APS registry through
            he department of health services AZ Care Check using employee’s
            first name, last name and date of birth. Search results will fall
            into the following categories:
          </p>
          <div className="grid-container">
            <div className="grid-item full-wid-input">
              
            </div>
          </div>
        </form>
      </Container>

      <Form onSubmit={submitHandler} className="main-div-personal important">
        <div className="top-div-personal">
          <Form
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <p style={{ fontWeight: "500" }}>
              Company Name conducts adult protective service search through the
              department of health services APS search registry. These searches
              are conducted randomly and also yearly thereafter.
            </p>
            <p style={{ fontWeight: "500" }}>
              <li>
                Administrator will conduct a search on the APS registry through
                he department of health services AZ Care Check using employee’s
                first name, last name and date of birth. Search results will
                fall into the following categories:
              </li>
            </p>
            <p>i.Record Found With</p>
            <p style={{ fontWeight: "500" }}>(a) Classification </p>
            <p style={{ fontWeight: "500" }}>(b) Date of the incident</p>
            <p>ii. No APS Registry Record Found.</p>
            <p style={{ fontWeight: "500" }}>
              <li>
                Employees or subcontractors shall be prohibited from providing
                services to Company Name residents if the search of the APS
                Registry contains any substantiated report of abuse, neglect, or
                exploitation of vulnerable adults or children.
              </li>
            </p>
            <p style={{ fontWeight: "500" }}>
              By Signing this, Employee gives Company Name consent to conduct a
              search on the AZ Department of Health APS search registry
            </p>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employee Name:
              </Form.Label>
              <Form.Control
                required
                onChange={(e) => handleChange("employeeName", e.target.value)}
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employer Signature:
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  handleChange("employeeSignature", e.target.value)
                }
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <div className="save-as-draft-btn-personal">
              <div>
                <img
                  style={{ height: "80%", width: "100%", border: "1px " }}
                  src="/Dashboard/save.png"
                  alt=""
                />
              </div>
              <div className="save-as-draft-btn">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  SAVE AS DRAFT
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    console.log("Clicked");
                    <Sign />;
                  }}
                  style={{ backgroundColor: "#0C5C75", color: "white" }}
                >
                  SAVED AND SIGNED
                </button>
              </div>
            </div>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Company Administrator Name:
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  handleChange("administratorName", e.target.value)
                }
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Company Administrator Signature:
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  handleChange("administratorSignature", e.target.value)
                }
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <div className="save-as-draft-btn-personal">
              <div>
                <img
                  style={{ height: "80%", width: "100%", border: "1px " }}
                  src="/Dashboard/save.png"
                  alt=""
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

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date:
              </Form.Label>
              <Form.Control
                required
                onChange={(e) => handleChange("date", e.target.value)}
                type="Date"
                placeholder="Enter  text"
              />
            </Form.Group>

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
          </Form>
        </div>
      </Form>
    </>
  );
};
