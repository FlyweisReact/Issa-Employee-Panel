/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { showMsg } from "../../../components/api/ShowMsg";
import { postData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { BorderlessInput, DefaultInput } from "../../../Helper/Makers";

const Skills2 = () => {
  const navigate = useNavigate();

  const initialTrainingState = {
    employeeName: "",
    dateOfTraining: "",
    trainingSubject: [""],
    hoursOrUnits: 2,
    administratorSignature: "",
    employeeSignature: "",
  };

  const [formData, setFormData] = useState(initialTrainingState);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyValues = Object.keys(formData).filter(
      (key) => formData[key] === ""
    );
    if (emptyValues.length > 0) {
      return showMsg(
        "Error",
        `${emptyValues.join(",")}  cannot be empty`,
        "danger"
      );
    }
    postData("employee/createSkillAndKnowledge", formData);
    setFormData(initialTrainingState);
  };

  const [hoursCompleted, setHoursCompleted] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [selectedTrainingTopics, setSelectedTrainingTopics] = useState([]);
  const [verificationMethod, setVerificationMethod] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [employeeTitle, setEmployeeTitle] = useState("");
  const [employeeDate, setEmployeeDate] = useState("");
  const [verifiedBySignature, setVerifiedBySignature] = useState("");
  const [verifiedByTitle, setVerifiedByTitle] = useState("");
  const [verifiedByDate, setVerifiedByDate] = useState("");

  const fetchHandler = () => {
    getD
  }

  return (
    <>
      <NavWrapper title={"SKILLS AND KNOWLEDGE TRAINING"} isArrow={true} />
      <Container className="full-width-container">
        <div>
          <p>
            <span>I,</span>
            <span> <DefaultInput  /> </span>
          </p>
        </div>
      </Container>
      <div>
        <div className="top-div-personal">
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Employee’s Title:
            </Form.Label>
            <Form.Control
              name="employeeName"
              onChange={(e) =>
                setFormData({ ...formData, employeeName: e.target.value })
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Employee’s Signature:
            </Form.Label>
            <Form.Control
              name="employeeSignature"
              onChange={(e) =>
                setFormData({ ...formData, employeeSignature: e.target.value })
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <div
            style={{ maxWidth: "370px", width: "auto" }}
            className="save-as-draft-btn-personal"
          >
            <div>
              <img
                style={{ height: "80%", width: "100%", border: "1px " }}
                src="/Dashboard/save.png"
                alt=""
              />
            </div>
            <div className="save-as-draft-btn">
              <button style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}>
                SAVE AS DRAFT
              </button>
              <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                SAVED AND SIGNED
              </button>
            </div>
          </div>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date:
            </Form.Label>
            <Form.Control
              name="dateOfTraining"
              onChange={(e) =>
                setFormData({ ...formData, dateOfTraining: e.target.value })
              }
              type="date"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Verified by Director/BHP/BHT title:
            </Form.Label>
            <Form.Control
              name="administratorSignature"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  administratorSignature: e.target.value,
                })
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Verified by Director/BHP/BHT Signature:
            </Form.Label>
            <Form.Control
              name="employeeSignature"
              onChange={(e) =>
                setFormData({ ...formData, employeeSignature: e.target.value })
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Hours or Units:
            </Form.Label>
            <Form.Control
              name="hoursOrUnits"
              onChange={(e) =>
                setFormData({ ...formData, hoursOrUnits: e.target.value })
              }
              type="number"
              placeholder="Enter text"
            />
          </Form.Group>
          <div
            style={{ maxWidth: "370px", width: "auto" }}
            className="save-as-draft-btn-personal"
          >
            <div>
              <img
                style={{ height: "80%", width: "100%", border: "1px " }}
                src="/Dashboard/save.png"
                alt=""
              />
            </div>
            <div className="save-as-draft-btn">
              <button style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}>
                SAVE AS DRAFT
              </button>
              <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                SAVED AND SIGNED
              </button>
            </div>
          </div>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Traning Subjects
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="trainingSubject"
              onChange={(e) =>
                setFormData({ ...formData, trainingSubject: e.target.value })
              }
            >
              <option>Select</option>
              <option value="Infectious Control">Infectious Control</option>
              <option value="Fall prevention and fall recovery">Two</option>
            </Form.Select>
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
            <button onClick={handleSubmit} className="btn1233" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(Skills2);
