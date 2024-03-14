/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { showMsg } from "../../../components/api/ShowMsg";
import { getData, postData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  DefaultInput,
  MultiSelect,
} from "../../../Helper/Makers";

const options = [
  {
    value: "Protect resident rights",
    label: "Protect resident rights",
  },
  {
    value:
      "Provide treatment that promotes resident dignity, independence, individuality, strengths, privacy and choice",
    label:
      "Provide treatment that promotes resident dignity, independence, individuality, strengths, privacy and choice",
  },
  {
    value:
      "Recognize obvious symptoms of a mental disorder, personality disorder, or substance abuse",
    label:
      "Recognize obvious symptoms of a mental disorder, personality disorder, or substance abuse",
  },
  {
    value:
      "Provide the behavioral health services that the agency is authorized to provide and that the staff member is qualified to provide",
    label:
      "Provide the behavioral health services that the agency is authorized to provide and that the staff member is qualified to provide",
  },
  {
    value:
      "Meet the unique needs of the resident populations served by the agency or the staff member, adults age18 and older, individuals who have substance abuse problems, individuals who are seriously mentally ill, or individuals who have co-occurring disorders",
    label:
      "Meet the unique needs of the resident populations served by the agency or the staff member, adults age18 and older, individuals who have substance abuse problems, individuals who are seriously mentally ill, or individuals who have co-occurring disorders",
  },
  {
    value:
      "Protect and maintain the confidentiality of resident records and information",
    label:
      "Protect and maintain the confidentiality of resident records and information",
  },
  {
    value: "Recognize and respect cultural differences",
    label: "Recognize and respect cultural differences",
  },
  {
    value: "Recognize, prevent, and respond to a situation in which a resident",
    label: "Recognize, prevent, and respond to a situation in which a resident",
  },
  {
    value: "May be a danger to self or a danger to others",
    label: "May be a danger to self or a danger to others",
  },
  {
    value: "Read and implement a resident’s treatment plan",
    label: "Read and implement a resident’s treatment plan",
  },
  {
    value: "Assist a resident in accessing community services and resources",
    label: "Assist a resident in accessing community services and resources",
  },
  {
    value: "Record and document resident information",
    label: "Record and document resident information",
  },
  {
    value:
      "Demonstrate ethical behavior, such as by respecting staff member and resident boundaries and recognizing the inappropriateness of receiving gratuities from a resident",
    label:
      "Demonstrate ethical behavior, such as by respecting staff member and resident boundaries and recognizing the inappropriateness of receiving gratuities from a resident",
  },
  {
    value:
      "Identify types of medications commonly prescribed for mental disorders, personality disorders, and substance abuse and the common side effects and adverse reactions of the medications",
    label:
      "Identify types of medications commonly prescribed for mental disorders, personality disorders, and substance abuse and the common side effects and adverse reactions of the medications",
  },
  {
    value:
      "Recognize and respond to a fire, disaster, hazard, and medical emergency",
    label:
      "Recognize and respond to a fire, disaster, hazard, and medical emergency",
  },
  {
    value:
      "Provide the activities or behavioral health services identified in the staff member’s job description or the agency’s policies and procedures",
    label:
      "Provide the activities or behavioral health services identified in the staff member’s job description or the agency’s policies and procedures",
  },
  {
    value: "Conduct group counseling",
    label: "Conduct group counseling",
  },
  {
    value:
      "Visual observation of the staff member interacting with another individual, such as through role playing exercises",
    label:
      "Visual observation of the staff member interacting with another individual, such as through role playing exercises",
  },
  {
    value:
      "Verbal interaction with the staff member, such as interviewing, discussion, or question and answer",
    label:
      "Verbal interaction with the staff member, such as interviewing, discussion, or question and answer",
  },
];

const Skills2 = () => {
  const initialTrainingState = {
    employeeName: "",
    dateOfTraining: "",
    trainingSubject: [""],
    hoursOrUnits: 2,
    administratorSignature: "",
    employeeSignature: "",
  };

  const [formData, setFormData] = useState(initialTrainingState);

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
  const [profile, setProfile] = useState({});
  const [companyDetail, setCompanyDetail] = useState({});

  const fetchHandler = () => {
    getData(setProfile, "employee/getProfile");
    getData(setCompanyDetail, "employee/getMyOfferLetter");
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const payload = {
    
  }

  return (
    <>
      <NavWrapper title={"SKILLS AND KNOWLEDGE TRAINING"} isArrow={true} />
      <Container className="full-width-container">
        <div className="grid-container mb-3">
          <div className="grid-item">
            <label>I,</label>
            <DefaultInput value={profile?.data?.fullName} isBots={false} />
            <label>attest I have received</label>
          </div>
          <div className="grid-item full-wid-input">
            <BorderlessInput
              setState={setHoursCompleted}
              type="text"
              value={hoursCompleted}
            />
            <label>
              hours of Skills and Knowledge training at{" "}
              {companyDetail?.data?.companyName} completed to perform the job
              duties as consistent with my job description.
            </label>
          </div>
        </div>

        <MultiSelect
          options={options}
          setValue={setSelectedTrainingTopics}
          value={selectedTrainingTopics}
        />
        <p className="text-desc fw-bold mt-3">
          The above listed skills and knowledge were verified by:
        </p>
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
