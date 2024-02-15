/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { showMsg } from "../../../../Baseurl";
import { InputMaker, SelectMaker } from "../../../../Helper/Makers";
const PRNform2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  // Form States
  const [patientId, setPatientId] = useState("");
  const [medicationAndStrength, setMedicationAndStrength] = useState("");
  const [instructions, setInstructions] = useState("");
  const [prescriberName, setPrescriberName] = useState("");
  const [site, setSite] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tabsGiven, setTabsGiven] = useState("");
  const [reason, setReason] = useState("");
  const [residentInitials, setResidentInitials] = useState("");
  const [staffInitials, setStaffInitials] = useState("");
  const [timeReevaluated, setTimeReevaluated] = useState("");
  const [responseCode, setResponseCode] = useState("");
  const [staffReevaluatedInitials, setStaffReevaluatedInitials] = useState("");
  const [staffNameAndSignature, setStaffNameAndSignature] = useState("");
  const [staffInitials1, setStaffInitials1] = useState("");

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const initialMedicationState = {
    patientId: "",
    medicationAndStrength: "",
    instructions: "",
    prescriberName: "",
    site: "",
    tableData: [
      {
        date: "",
        time: "",
        tabsGiven: "",
        reason: "",
        residentInitials: "",
        staffInitials: "",
        timeReevaluated: "",
        responseCode: "",
        staffReevaluatedInitials: "",
      },
    ],
    staff: [
      {
        name: "",
        signature: "",
        initials: "",
      },
    ],
  };

  const [medicationData, setMedicationData] = useState(initialMedicationState);

  const handleInputChange = (field, value) => {
    setMedicationData({
      ...medicationData,
      [field]: value,
    });
  };

  const initialFormData = [
    { label: "Date", name: "date", type: "date", placeholder: "Enter text" },
    { label: "Time", name: "time", type: "text", placeholder: "Enter text" },
    {
      label: "Tabs Given ",
      name: "tabsGiven",
      type: "number",
      placeholder: "Enter text",
    },
    {
      label: "Reason",
      name: "reason",
      type: "text",
      placeholder: "Enter text",
    },
    {
      label: "Resident Initials",
      name: "residentInitials",
      type: "text",
      placeholder: "Enter text",
    },
    {
      label: "Staff Initials",
      name: "staffInitials",
      type: "text",
      placeholder: "Enter text",
    },
    {
      label: "Time Re-evaluated",
      name: "timeReevaluated",
      type: "text",
      placeholder: "Enter text",
    },
    {
      label: "Response Code",
      name: "responseCode",
      type: "text",
      placeholder: "Enter text",
      nextLine:
        "Response Code: A=Relief | B=No relief | C=Sleeping | D=Out of Facility | E=Other ( Please specify)",
    },
  ];

  const [formData, setFormData] = useState(initialFormData);
  const [numberOfFields, setNumberOfFields] = useState(initialFormData.length);

  const addField = () => {
    setNumberOfFields(initialFormData.length);
    setFormData([
      ...formData,
      { label: "Date", type: "date", placeholder: "Enter text" },
      { label: "Time", type: "text", placeholder: "Enter text" },
      { label: "Tabs Given ", type: "text", placeholder: "Enter text" },
      { label: "Reason", type: "text", placeholder: "Enter text" },
      { label: "Resident Initials", type: "text", placeholder: "Enter text" },
      { label: "Staff Initials", type: "text", placeholder: "Enter text" },
      { label: "Time Re-evaluated", type: "text", placeholder: "Enter text" },
      {
        label: "Response Code",
        type: "text",
        placeholder: "Enter text",
        nextLine:
          "Response Code: A=Relief | B=No relief | C=Sleeping | D=Out of Facility | E=Other ( Please specify)",
      },
    ]);
  };

  const submitHandler = (e) => {
    postData("employee/createPrnMedicationLog", medicationData);
  };

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            PRN MEDICATION LOG
          </p>
        </div>
      </div>

      <Container className="full-width-container">
        <form className="employee1">
          <SelectMaker
            setValue={setPatientId}
            options={patients?.data?.map((i) => ({
              label: i.fullName,
              value: i._id,
            }))}
            label={"Resident Name"}
            value={patientId}
          />
          <InputMaker
            label={"Medication and Strength"}
            setState={setMedicationAndStrength}
            placeholder={""}
            type={"text"}
            value={medicationAndStrength}
          />
          <InputMaker
            label={"Medication and Strength"}
            setState={setMedicationAndStrength}
            placeholder={""}
            type={"text"}
            value={medicationAndStrength}
          />

          <Form.Group
            style={{ fontWeight: "bold", fontSize: ".9rem" }}
            className="mb-3"
            controlId="formBasicLocation"
          >
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Instruction
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter text"
              onChange={(e) =>
                handleInputChange("instructions", e.target.value)
              }
            />
          </Form.Group>
          <Form.Group
            style={{ fontWeight: "bold", fontSize: ".9rem" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Prescriber Name{" "}
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                handleInputChange("prescriberName", e.target.value)
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Site:
            </Form.Label>
            <Form.Control
              onChange={(e) => handleInputChange("site", e.target.value)}
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group
            style={{ display: "flex", justifyContent: "space-between" }}
            className="mb-3 "
          >
            <Form.Label style={{ fontWeight: "bold", fontSize: "1rem" }}>
              {" "}
              PRN Medication Log
            </Form.Label>
            <div>
              <Button
                onClick={addField}
                style={{ paddingRight: "1rem" }}
                variant="primary"
              >
                + Add
              </Button>
            </div>
          </Form.Group>
          {formData.map((field, index) => (
            <Form.Group key={index} className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                {field.label}
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  setMedicationData({
                    ...medicationData,
                    tableData: {
                      ...medicationData.tableData,
                      [field.name]: e.target.value,
                    },
                  })
                }
                type={field.type}
                placeholder={field.placeholder}
              />
              {field.nextLine && (
                <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                  {field.nextLine}
                </Form.Label>
              )}
            </Form.Group>
          ))}

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Staff Name and Signature
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setMedicationData({
                  ...medicationData,
                  staff: { name: e.target.value },
                })
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

          <div className="save-as-draft-btn123">
            <button onClick={submitHandler} className="btn1233" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default PRNform2;
