/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { showMsg } from "../../../api/ShowMsg";

const ContactChart2 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [patientId, setPatientId] = useState("patient_id_value");
  const [residentName, setResidentName] = useState("resident_name_value");
  const [guardian, setGuardian] = useState("guardian_value");
  const [caseManager, setCaseManager] = useState("case_manager_value");
  const [pharmacy, setPharmacy] = useState("pharmacy_value");
  const [familyMember, setFamilyMember] = useState("family_member_value");
  const [doctorsOffice, setDoctorsOffice] = useState("doctors_office_value");
  const [personContactedOther, setPersonContactedOther] = useState(
    "person_contacted_other_value"
  );
  const [contactName, setContactName] = useState("contact_name_value");
  const [email, setEmail] = useState("email_value");
  const [textMessage, setTextMessage] = useState("text_message_value");
  const [phoneCall, setPhoneCall] = useState("phone_call_value");
  const [inPerson, setInPerson] = useState("in_person_value");
  const [modeOfContactOther, setModeOfContactOther] = useState(
    "mode_of_contact_other_value"
  );
  const [contactSummaryNote, setContactSummaryNote] = useState(
    "contact_summary_note_value"
  );
  const [emergencyIssue, setEmergencyIssue] = useState(true);

  useEffect(() => {
    getData(setData, "employee/getPatient");
  }, []);

  const initialData = {
    patientId: "6572c1ffd4a09e03c1c57f50",
    residentName: "resident_name_value",
    guardian: "guardian_value",
    caseManager: "case_manager_value",
    pharmacy: "pharmacy_value",
    familyMember: "family_member_value",
    doctorsOffice: "doctors_office_value",
    personContactedOther: "person_contacted_other_value",
    contactName: "contact_name_value",
    email: "email_value",
    textMessage: "text_message_value",
    phoneCall: "phone_call_value",
    inPerson: "in_person_value",
    modeOfContactOther: "mode_of_contact_other_value",
    contactSummaryNote: "contact_summary_note_value",
    emergencyIssue: false,
  };

  const [contactData, setContactData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "patientId") {
      setContactData((prevData) => ({
        ...prevData,
        residentName: data?.data?.find((patient) => patient._id === value)
          ?.fullName,
      }));
    }
    if (type === "checkbox") {
      setContactData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setContactData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(contactData);
    const emptyValues = Object.keys(contactData).filter(
      (key) => contactData[key] === ""
    );
    if (emptyValues.length > 0) {
      return showMsg(
        "Error",
        `${emptyValues.join(",")}  cannot be empty`,
        "danger"
      );
    }
    postData("employee/createContactNote", contactData);
  };
  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/patient-chart/contact-chart")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>CONTACT NOTE</p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <p style={{ fontWeight: "bold" }}>Part I – Description of Incident</p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Resident’s Name:
            </Form.Label>
            <Form.Select name="patientId" onChange={handleChange}>
              <option>Select Patient</option>
              {data?.data?.map((patient) => (
                <option value={patient._id}>{patient.fullName}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <p>Person contacted:</p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Guardian :
            </Form.Label>
            <Form.Control
              name="guardian"
              onChange={handleChange}
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Case Manager:
            </Form.Label>
            <Form.Control
              name="caseManager"
              onChange={handleChange}
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Pharmacy:
            </Form.Label>
            <Form.Control
              name="pharmacy"
              onChange={handleChange}
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Family member
            </Form.Label>
            <Form.Control
              type="number"
              onChange={handleChange}
              name="familyMember"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Doctors office
            </Form.Label>
            <Form.Control
              name="doctorsOffice"
              onChange={handleChange}
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Other
            </Form.Label>
            <Form.Control
              name="personContactedOther"
              onChange={handleChange}
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Contact Name:
            </Form.Label>
            <Form.Control
              name="contactName"
              onChange={handleChange}
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <p>Mode of contact:</p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Email
            </Form.Label>
            <Form.Control
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Text message
            </Form.Label>
            <Form.Control
              type="text"
              name="textMessage"
              onChange={handleChange}
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Phone call
            </Form.Label>
            <Form.Control
              type="text"
              name="phoneCall"
              onChange={handleChange}
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              In person
            </Form.Label>
            <Form.Control
              type="text"
              name="inPerson"
              onChange={handleChange}
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Other, please specify:
            </Form.Label>
            <Form.Control
              type="text"
              name="modeOfContactOther"
              onChange={handleChange}
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Contact Summary Note:
            </Form.Label>
            <Form.Control
              as="textarea"
              name="contactSummary"
              onChange={handleChange}
              rows={3}
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Emergency issue:
            </Form.Label>
            <div className="d-flex">
              <Form.Group className="mb-3 ">
                <Form.Check
                  type="radio"
                  name="emergencyIssue"
                  checked={contactData.emergencyIssue === true}
                  label="Yes"
                  onClick={(e) => {
                    setContactData((prevData) => ({
                      ...prevData,
                      emergencyIssue: true,
                    }));
                  }}
                  value={true}
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  name="emergencyIssue"
                  onClick={(e) => {
                    setContactData((prevData) => ({
                      ...prevData,
                      emergencyIssue: false,
                    }));
                  }}
                  checked={contactData.emergencyIssue === false}
                  label="No"
                  value={false}
                  id="formHorizontalRadios2"
                />
              </Form.Group>
            </div>
          </Form.Group>

          {/* <div
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
          </div> */}

          <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
            <button
              style={{
                padding: "10px 24px",
                backgroundColor: "#1A9FB2",
                color: "white",
                marginTop: "1rem",
              }}
              type="submit"
            >
              PRINT REPORT
            </button>
          </div>
          <div className="save-as-draft-btn123">
            <button onClick={submitHandler} className="btn1233" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactChart2;
