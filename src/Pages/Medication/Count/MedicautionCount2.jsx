/** @format */

import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  DefaultInput,
} from "../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../Mod/Modal";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";

const MedicautionCount2 = () => {
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
  const [beginningMedCount, setBeginningMedCount] = useState(0);
  const [monthYear, setMonthYear] = useState("");
  const [countType, setCountType] = useState("medication");

  // --- Prescribing provider data
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");
  const [painLevel, setPainLevel] = useState("");
  const [numberOfTabsGiven, setNumberOfTabsGiven] = useState(0);
  const [beginningCount, setBeginningCount] = useState(0);
  const [endingCount, setEndingCount] = useState(0);
  const [currentStaffOnShiftSignature, setCurrentStaffOnShiftSignature] =
    useState("");
  const [relievingStaffSignature, setRelievingStaffSignature] = useState("");
  const [relievingDate, setRelievingDate] = useState("");
  const [relievingTime, setRelievingTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  // -- Staff
  const [name, setName] = useState("");
  const [initials, setInitials] = useState("");
  const [loading, setLoading] = useState(false);
  const [multipleTable, setMultipleTable] = useState([]);
  const [
    currentStaffOnShiftSignatureSaveAsDraft,
    setCurrentStaffOnShiftSignatureAsDraft,
  ] = useState(false);
  const [ relievingStaffSignatureSaveAsDraft , setRelievingStaffSignatureSaveAsDraft] = useState(false)

  const table = {
    date,
    shift,
    painLevel,
    numberOfTabsGiven,
    beginningCount,
    endingCount,
    currentStaffOnShiftSignature,
    relievingStaffSignature,
    relievingDate,
    relievingTime,
    currentDate,
    currentTime,
  };
  const staffTabler = {
    name,
    initials,
  };

  const mergedData = { ...table, ...staffTabler };

  const dateOfBirth = patients?.data?.filter((i) => i._id === patientId);

  const addTable = async () => {
    await setMultipleTable((prev) => [...prev, mergedData]);
    setDate("");
    setShift("");
    setPainLevel("");
    setNumberOfTabsGiven("");
    setBeginningCount("");
    setEndingCount("");
    setCurrentStaffOnShiftSignature("");
    setRelievingStaffSignature("");
    setName("");
    setInitials("");
    setRelievingDate("");
    setRelievingTime("");
    setCurrentDate("");
    setCurrentTime("");
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
      numberOfTabsGiven: i.numberOfTabsGiven,
      beginningCount: i.beginningCount,
      endingCount: i.endingCount,
      currentStaffOnShiftSignature: i.currentStaffOnShiftSignature,
      relievingStaffSignature: i.relievingStaffSignature,
      currentStaffOnShiftSignatureDate: i.currentDate,
      currentStaffOnShiftSignatureTime: i.currentTime,
      currentStaffOnShiftSignatureSaveAsDraft,
      relievingStaffSignatureDate : i.relievingDate ,
      relievingStaffSignatureTime : i.relievingTime ,
      relievingStaffSignatureSaveAsDraft
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

  const countOptions = [
    {
      value: "Opioid",
      label: "OPIOID COUNT CONTROL",
    },
    {
      value: "medication",
      label: "MEDICATION COUNT",
    },
  ];

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setCurrentStaffOnShiftSignature}
        value={currentStaffOnShiftSignature}
        setDate={setCurrentDate}
        setTime={setCurrentTime}
      />
      <SignatureModal
        show={open1}
        onHide={() => setOpen1(false)}
        setValue={setRelievingStaffSignature}
        value={relievingStaffSignature}
        setDate={setRelievingDate}
        setTime={setRelievingTime}
      />
      <NavWrapper title={"Medication Count"} isArrow={true} />

      <Container className="full-width-container">
        <form onSubmit={submitHandler} className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Opioid Count Controlled:</label>
              <BorderlessSelect
                options={countOptions}
                setState={setCountType}
                value={countType}
              />
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <label>Month/Year:</label>
              <BorderlessInput
                setState={setMonthYear}
                placeholder=""
                type={"date"}
                value={DateFormatter(monthYear)}
              />
            </div>
            <div className="grid-item long-input">
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
                value={
                  dateOfBirth?.[0]?.dateOfBirth &&
                  DateInMMDDYY(dateOfBirth?.[0]?.dateOfBirth)
                }
                isBots={false}
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
            <div className="grid-item" />
            <div className="grid-item">
              <label>Dose:</label>
              <BorderlessInput
                setState={setDose}
                placeholder=""
                type={"text"}
                value={dose}
              />
            </div>
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
            <div className="grid-item long-input">
              <label>Beginning med count:</label>
              <BorderlessInput
                setState={setBeginningMedCount}
                placeholder=""
                type={"number"}
                value={beginningMedCount}
              />
            </div>
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
                type="text"
                value={shift}
              />
            </div>

            <div className="grid-item">
              <label>Pain Lavel:</label>
              <BorderlessInput
                setState={setPainLevel}
                placeholder=""
                type="text"
                value={painLevel}
              />
            </div>
            <div className="grid-item">
              <label>Number of Tab given:</label>
              <BorderlessInput
                setState={setNumberOfTabsGiven}
                placeholder=""
                type="number"
                value={numberOfTabsGiven}
              />
            </div>
            <div className="grid-item">
              <label>Beginning Count:</label>
              <BorderlessInput
                setState={setBeginningCount}
                placeholder=""
                type="number"
                value={beginningCount}
              />
            </div>
            <div className="grid-item">
              <label>Ending Count:</label>
              <BorderlessInput
                setState={setEndingCount}
                placeholder=""
                type="number"
                value={endingCount}
              />
            </div>
          </div>

          <Form.Group>
            <Form.Label className="fw-bold" style={{ fontSize: "14px" }}>
              Current Staff on shift Signature
            </Form.Label>
            <div className="custome-cloud-btn">
              <div className="btns">
                <button
                  className="draft"
                  onClick={() =>
                    setCurrentStaffOnShiftSignatureAsDraft(
                      !currentStaffOnShiftSignatureSaveAsDraft
                    )
                  }
                >
                  {" "}
                  SAVE AS DRAFT
                </button>
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
                  <p>
                    Digitally Sign by {currentStaffOnShiftSignature}
                    {currentDate && DateInMMDDYY(currentDate)}
                    {currentTime}
                  </p>
                )}
              </div>
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label className="fw-bold" style={{ fontSize: "14px" }}>
              Relieving staff Name and Signature
            </Form.Label>
            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft" 
                onClick={() => setRelievingStaffSignatureSaveAsDraft(!relievingStaffSignatureSaveAsDraft)}
                > SAVE AS DRAFT</button>
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
                  <p>
                    Digitally Sign by {relievingStaffSignature}{" "}
                    {relievingDate && DateInMMDDYY(relievingDate)}{" "}
                    {relievingTime}{" "}
                  </p>
                )}
              </div>
            </div>
          </Form.Group>

          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Staff Name and Last Name:</label>
              <BorderlessInput
                setState={setName}
                placeholder=""
                type={"text"}
                value={name}
              />
            </div>
            <div className="grid-item long-input">
              <label>Staff Initials:</label>
              <BorderlessInput
                setState={setInitials}
                placeholder=""
                type={"text"}
                value={initials}
              />
            </div>
          </div>
          <button
            className="add_more mb-3"
            type="button"
            onClick={() => addTable()}
          >
            Add More{" "}
          </button>
          {multipleTable?.length > 0 && (
            <div className="overflow_table">
              <table className="mb-3 color-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Shift</th>
                    <th>Pain Lavel</th>
                    <th>Number of Tab given</th>
                    <th>Beginning Count</th>
                    <th>Ending Count</th>
                    <th>Current Staff on shift Signature</th>
                    <th>Relieving staff Name and Signature</th>
                    <th>Staff Name and Last Name</th>
                    <th>Staff Initials</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {multipleTable?.map((i, index) => (
                    <tr key={index}>
                      <td> {i.date?.slice(0, 10)} </td>
                      <td> {i.shift} </td>
                      <td> {i.painLevel} </td>
                      <td> {i.numberOfTabsGiven} </td>
                      <td> {i.beginningCount} </td>
                      <td> {i.endingCount} </td>
                      <td> {i.currentStaffOnShiftSignature} </td>
                      <td> {i.relievingStaffSignature} </td>
                      <td> {i.name} </td>
                      <td> {i.initials} </td>
                      <td>
                        {" "}
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => removeOne(index)}
                        />{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default HOC(MedicautionCount2);
