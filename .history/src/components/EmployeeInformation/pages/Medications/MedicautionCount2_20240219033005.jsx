/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import {
  DateFormatter,
  DefaultInput,
  InputMaker,
  SelectMaker,
} from "../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../../Mod/Modal";

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
    patientId , 
    location
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postData(setLoading, "employee/createMedicationOpioidCount", payload);
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
                  onClick={() => addTable()}
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
