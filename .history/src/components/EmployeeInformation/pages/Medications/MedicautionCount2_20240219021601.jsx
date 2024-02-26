/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { showMsg } from "../../../../Baseurl";
import {
  DateFormatter,
  DefaultInput,
  InputMaker,
  SelectMaker,
} from "../../../../Helper/Makers";
const MedicautionCount2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);
  const initialMedicationState = {
    patientId: "",
    location: "",
    medicationName: "",
    dose: "",
    prescriptionInstruction: "",
    prescribingProvider: "",
    beginningMedCount: "",
    monthYear: "",
    data: [
      {
        date: "",
        shift: "",
        painLevel: "",
        numberOfTabsGiven: "",
        beginningCount: "",
        endingCount: "",
        currentStaffOnShiftSignature: "",
        relievingStaffSignature: "",
      },
    ],
    staff: [
      {
        name: "",
        signature: "",
        initials: "",
      },
    ],
    countType: "",
  };

  const [medicationData, setMedicationData] = useState(initialMedicationState);

  const handleInputChange = (field, value) => {
    setMedicationData({
      ...medicationData,
      [field]: value,
    });
  };

  const handleDataChange = (index, field, value) => {
    const updatedData = [...medicationData.data];
    updatedData[index][field] = value;

    setMedicationData({
      ...medicationData,
      data: updatedData,
    });
  };
  const initialFormData = [
    { label: "Date", type: "date", placeholder: "Enter text" },
    { label: "Shift", type: "text", placeholder: "Enter text" },
    { label: "Pain Level", type: "text", placeholder: "Enter text" },
    { label: "Number of Tab given", type: "text", placeholder: "Enter text" },
    { label: "Beginning Count", type: "text", placeholder: "Enter text" },
    { label: "Ending Count", type: "text", placeholder: "Enter text" },
  ];

  const [formData, setFormData] = useState(initialFormData);
  const [numberOfFields, setNumberOfFields] = useState(initialFormData.length);

  const addField = () => {
    setNumberOfFields(initialFormData.length);
    setFormData([
      ...formData,
      { label: "Date", type: "date", placeholder: "Enter text" },
      { label: "Shift", type: "text", placeholder: "Enter text" },
      { label: "Pain Level", type: "text", placeholder: "Enter text" },
      { label: "Number of Tab given", type: "text", placeholder: "Enter text" },
      { label: "Beginning Count", type: "text", placeholder: "Enter text" },
      { label: "Ending Count", type: "text", placeholder: "Enter text" },
    ]);
  };

  const handleStaffChange = (index, field, value) => {
    const updatedStaff = [...medicationData.staff];
    updatedStaff[index][field] = value;

    setMedicationData({
      ...medicationData,
      staff: updatedStaff,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    postData("employee/createMedicationOpioidCount", medicationData);
  };

  // -----
  const [patientId, setPatientId] = useState("");
  const [location, setLocation] = useState("");
  const [medicationName, setMedicationName] = useState("");
  const [dose, setDose] = useState("");
  const [prescriptionInstruction, setPrescriptionInstruction] = useState("");
  const [prescribingProvider, setPrescribingProvider] = useState("");
  const [beginningMedCount, setBeginningMedCount] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [countType, setCountType] = useState("medication");

  // --- Prescribing provider data
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");
  const [painLevel, setPainLevel] = useState("");
  const [numberOfTabsGiven, setNumberOfTabsGiven] = useState("");
  const [beginningCount, setBeginningCount] = useState("");
  const [endingCount, setEndingCount] = useState("");
  const [currentStaffOnShiftSignature, setCurrentStaffOnShiftSignature] =
    useState("");
  const [relievingStaffSignature, setRelievingStaffSignature] = useState("");
  // -- Staff
  const [name, setName] = useState("");
  const [signature, setSignature] = useState("");
  const [initials, setInitials] = useState("");

  const table = {
    date,
    shift,
    painLevel,
    numberOfTabsGiven,
    beginningCount,
    endingCount,
    currentStaffOnShiftSignature,
    relievingStaffSignature,
  };
  const staffTabler = {
    name,
    signature,
    initials,
  };

  const mergedData = { ...table, ...staffTabler };

  const dateOfBirth = patients?.data?.filter((i) => i._id === patientId);

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{
            width: "80%",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            <Form.Group
              style={{ border: "none", textAlign: "center" }}
              className="mb-3"
            >
              <Form.Select
                style={{ border: "none" }}
                className="fw-bold"
                value={countType}
                onChange={(e) => setCountType(e.target.value)}
              >
                <option value="Opioid">OPIOID COUNT CONTROL </option>
                <option value="medication">MEDICATION COUNT</option>
              </Form.Select>
            </Form.Group>
          </p>
        </div>
      </div>
      <div>
        <Container className="full-width-container">
          <form onSubmit={submitHandler} className="employee1">
            <SelectMaker
              setValue={setPatientId}
              value={patientId}
              options={patients?.data?.map((i) => ({
                label: i.fullName,
                value: i._id,
              }))}
              label={"Patient Name:"}
            />
            <DefaultInput
              value={DateFormatter(dateOfBirth?.[0]?.dateOfBirth?.slice(0, 10))}
              isBots={true}
              label="Date of Birth:"
            />
            <InputMaker
              label="Location:"
              setState={setLocation}
              placeholder=""
              type="text"
              value={location}
            />
            <InputMaker
              label="Medication Name:"
              setState={setMedicationName}
              placeholder=""
              type="text"
              value={medicationName}
            />
            <InputMaker
              label="Dose:"
              setState={setDose}
              placeholder=""
              type="text"
              value={dose}
            />
            <InputMaker
              label="Prescription Instruction:"
              setState={setPrescriptionInstruction}
              placeholder=""
              type="text"
              value={prescriptionInstruction}
            />
            <InputMaker
              label="Prescribing provider:"
              setState={setPrescribingProvider}
              placeholder=""
              type="text"
              value={prescribingProvider}
            />
            <InputMaker
              label="Month/Year:"
              setState={setMonthYear}
              placeholder=""
              type="text"
              value={monthYear}
            />
            <InputMaker
              label="Beginning med count:"
              setState={setBeginningMedCount}
              placeholder=""
              type="text"
              value={beginningMedCount}
            />

            <Form.Group
              style={{ display: "flex", justifyContent: "space-between" }}
              className="mb-3 "
            >
              <Form.Label style={{ fontWeight: "bold", fontSize: "1rem" }}>
                Medication Count
              </Form.Label>
              <div>
                <Button
                  style={{ backgroundColor: "#0C5C75" }}
                  variant="primary"
                  type="button"
                >
                  + Add
                </Button>
              </div>
            </Form.Group>
            <InputMaker
              label="Date:"
              setState={setDate}
              placeholder=""
              type="date"
              value={DateFormatter(date)}
            />
            <InputMaker
              label="Shift:"
              setState={setShift}
              placeholder=""
              type="text"
              value={shift}
            />
            <InputMaker
              label="Pain Lavel:"
              setState={setPainLevel}
              placeholder=""
              type="text"
              value={painLevel}
            />
            <InputMaker
              label="Number of Tab given:"
              setState={setNumberOfTabsGiven}
              placeholder=""
              type="text"
              value={numberOfTabsGiven}
            />
            <InputMaker
              label="Beginning Count:"
              setState={setBeginningCount}
              placeholder=""
              type="text"
              value={beginningCount}
            />
            <InputMaker
              label="Ending Count:"
              setState={setEndingCount}
              placeholder=""
              type="text"
              value={endingCount}
            />
            <Form.Group>
              <Form.Label className="fw-bold">
                Current Staff on shift Signature
              </Form.Label>
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button className="draft"> SAVE AS DRAFT</button>
                  <button type="button" className="signed">
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {currentStaffOnShiftSignature && (
                    <p>Digitally Sign by {currentStaffOnShiftSignature} </p>
                  )}
                </div>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-bold">
                Relieving staff Name and Signature
              </Form.Label>
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button className="draft"> SAVE AS DRAFT</button>
                  <button type="button" className="signed">
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {relievingStaffSignature && (
                    <p>Digitally Sign by {relievingStaffSignature} </p>
                  )}
                </div>
              </div>
            </Form.Group>
          </form>
        </Container>

        <div className="top-div-personal">
          <div>
            {formData.map((field, index) => (
              <Form.Group key={index} className="mb-3">
                <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                  {field.label}
                </Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setMedicationData({
                      ...medicationData,
                      data: {
                        ...medicationData.data,
                        [field.label]: e.target.value,
                      },
                    })
                  }
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </Form.Group>
            ))}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="primary"
                style={{ backgroundColor: "#0C5C75" }}
                onClick={addField}
              >
                + Add
              </Button>
            </div>
          </div>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Current Staff on shift Signature
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
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
              Releveling staff name and Signature
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
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
              Staff Name and Last Name
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setMedicationData({
                  ...medicationData,
                  staff: { name: e.target.value },
                })
              }
              type="text"
              name="medicationsDate"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Staff Initials
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setMedicationData({
                  ...medicationData,
                  staff: { initials: e.target.value },
                })
              }
              type="text"
              name="medicationsDate"
              placeholder="Enter text"
            />
          </Form.Group>

          <div
            style={{ textAlign: "center", width: "100%", margin: "auto" }}
          ></div>
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

export default MedicautionCount2;