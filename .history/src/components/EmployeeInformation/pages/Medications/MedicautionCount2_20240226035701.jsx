/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../api/api";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  DefaultInput,
  InputMaker,
  SelectMaker,
} from "../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../../Mod/Modal";
import { postApi } from "../../../../Repository/Apis";

const MedicautionCount2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

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
  const [initials, setInitials] = useState("");
  const [loading, setLoading] = useState(false);
  const [multipleTable, setMultipleTable] = useState([]);

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
    initials,
  };

  const mergedData = { ...table, ...staffTabler };

  const dateOfBirth = patients?.data?.filter((i) => i._id === patientId);

  const addTable = () => {
    setMultipleTable((prev) => [...prev, mergedData]);
  };

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const removeOne = (index) => {
    setMultipleTable((prev) => prev.filter((_, i) => i !== index));
  };

  const payload = {
    patientId,
    location,
    medicationName,
    dose,
    prescriptionInstruction,
    prescribingProvider,
    beginningMedCount,
    monthYear,
    data: multipleTable?.map((i) => ({
      date: i.date,
      shift: i.shift,
      painLevel: i.painLevel,
      beginningCount: i.beginningCount,
      numberOfTabsGiven: i.numberOfTabsGiven,
      endingCount: i.endingCount,
      currentStaffOnShiftSignature: i.currentStaffOnShiftSignature,
      relievingStaffSignature: i.relievingStaffSignature,
    })),
    staff: multipleTable?.map((i) => ({
      name: i.name,
      initials: i.initials,
    })),
    countType,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createMedicationOpioidCount", payload);
  };

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setCurrentStaffOnShiftSignature}
        value={currentStaffOnShiftSignature}
      />
      <SignatureModal
        show={open1}
        onHide={() => setOpen1(false)}
        setValue={setRelievingStaffSignature}
        value={relievingStaffSignature}
      />
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
          <form onSubmit={submitHandler} className="w-100 text-start">
            <div className="grid-container mb-3">
              <div className="grid-item">
                <label>Patient Name:</label>
                <BorderlessSelect
                  options={patients?.data?.map((i) => ({
                    value: i._id,
                    label: i.fullName,
                  }))}
                  setState={setPatientId}
                  value={patientId}
                />
              </div>
              <div className="grid-item">
                <label>DOB:</label>
                <DefaultInput
                  value={DateFormatter(
                    dateOfBirth?.[0]?.dateOfBirth?.slice(0, 10)
                  )}
                  isBots={false}
                />
              </div>
              <div className="grid-item">
                <label>Month/Year:</label>
                <BorderlessInput
                  setState={setMonthYear}
                  placeholder=""
                  type={"date"}
                  value={DateFormatter(monthYear)}
                />
              </div>
              <div className="grid-item">
                <label>Location:</label>
                <BorderlessInput
                  setState={setLocation}
                  placeholder=""
                  type={"text"}
                  value={location}
                />
              </div>
              <div className="grid-item long-input">
                <label>Medication Name:</label>
                <BorderlessInput
                  setState={setMedicationName}
                  placeholder=""
                  type={"text"}
                  value={medicationName}
                />
              </div>
              <div className="grid-item">
                <label>Dose:</label>
                <BorderlessInput
                  setState={setDose}
                  placeholder=""
                  type={"text"}
                  value={dose}
                />
              </div>
              <div className="grid-item"></div>
              <div className="grid-item full-wid-input">
                <label>Prescription Instruction:</label>
                <BorderlessInput
                  setState={setPrescriptionInstruction}
                  placeholder=""
                  type={"text"}
                  value={prescriptionInstruction}
                />
              </div>
              <div className="grid-item long-input">
                <label>Prescribing provider:</label>
                <BorderlessInput
                  setState={setPrescribingProvider}
                  placeholder=""
                  type={"text"}
                  value={prescribingProvider}
                />
              </div>
              <div className="grid-item"> </div>
              <div className="grid-item">
                <label>Beginning med count:</label>
                <BorderlessInput
                  setState={setBeginningMedCount}
                  placeholder=""
                  type={"text"}
                  value={beginningMedCount}
                />
              </div>
              <div className="grid-item full-wid-input"></div>
              <div className="grid-item">
                <label>Date:</label>
                <BorderlessInput
                  setState={setDate}
                  placeholder=""
                  type="date"
                  value={DateFormatter(date)}
                />
              </div>
              <div className="grid-item">
                <label>Shift:</label>
                <BorderlessInput
                  setState={setShift}
                  placeholder=""
                  type="date"
                  value={shift}
                />
              </div>
              <div className="grid-item">
                <label>Shift:</label>
                <BorderlessInput
                  setState={setShift}
                  placeholder=""
                  type="date"
                  value={shift}
                />
              </div>
              <div className="grid-item">
                <label>Pain Lavel:</label>
                <BorderlessInput
                  setState={setPainLevel}
                  placeholder=""
                  type="date"
                  value={painLevel}
                />
              </div>
              <div className="grid-item">
                <label>Number of Tab given:</label>
                <BorderlessInput
                  setState={setNumberOfTabsGiven}
                  placeholder=""
                  type="date"
                  value={painLevel}
                />
              </div>
            </div>
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
                  onClick={() => addTable()}
                >
                  + Add
                </Button>
              </div>
            </Form.Group>
           
          
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
                  <button
                    type="button"
                    className="signed"
                    onClick={() => setOpen(true)}
                  >
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
                  <button
                    type="button"
                    className="signed"
                    onClick={() => setOpen1(true)}
                  >
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

            <InputMaker
              label="Staff Name and Last Name:"
              setState={setName}
              placeholder=""
              type="text"
              value={name}
            />
            <InputMaker
              label="Staff Initials:"
              setState={setInitials}
              placeholder=""
              type="text"
              value={initials}
            />

            {multipleTable?.map((i, index) => (
              <div key={index}>
                <DefaultInput
                  value={DateFormatter(i.date)}
                  isBots={true}
                  label={"Date:"}
                />
                <DefaultInput value={i.shift} isBots={true} label={"Shift:"} />
                <DefaultInput
                  value={i.painLevel}
                  isBots={true}
                  label={"Pain Lavel:"}
                />
                <DefaultInput
                  value={i.numberOfTabsGiven}
                  isBots={true}
                  label={"Number of Tab given:"}
                />
                <DefaultInput
                  value={i.beginningCount}
                  isBots={true}
                  label={"Beginning Count:"}
                />
                <DefaultInput
                  value={i.endingCount}
                  isBots={true}
                  label={"Ending Count:"}
                />
                <DefaultInput
                  value={i.currentStaffOnShiftSignature}
                  isBots={true}
                  label={"Current Staff on shift Signature:"}
                />
                <DefaultInput
                  value={i.relievingStaffSignature}
                  isBots={true}
                  label={"Relieving Staff on shift Signature:"}
                />
                <DefaultInput
                  value={i.name}
                  isBots={true}
                  label={"Staff Name and Last Name:"}
                />
                <DefaultInput
                  value={i.initials}
                  isBots={true}
                  label={"Staff Initials"}
                />

                <button
                  className="remove_this"
                  type="button"
                  onClick={() => removeOne(index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </form>
        </Container>
      </div>
    </>
  );
};

export default MedicautionCount2;
