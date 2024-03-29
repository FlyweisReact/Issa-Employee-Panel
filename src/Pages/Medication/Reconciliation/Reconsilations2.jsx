/** @format */

import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { SignatureModal } from "../../../Mod/Modal";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
} from "../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Inner/HOC";
import { DateforInput } from "../../../utils/utils";

const Reconciliations2 = () => {
  const [patients, setPatients] = useState([]);
  const [open, setOpen] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [allergiesAndReactions, setAllergiesAndReactions] = useState("");
  const [name, setName] = useState("");
  const [dose, setDose] = useState("");
  const [route, setRoute] = useState("");
  const [frequency, setFrequency] = useState("");
  const [startDate, setStartDate] = useState("");
  const [stopChangeDate, setStopChangeDate] = useState("");
  const [reasonForStopChange, setReasonForStopChange] = useState("");
  const [providerName, setProviderName] = useState("");
  const [providerSignature, setProviderSignature] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [arr, setArr] = useState([]);
  const [signedTime, setSignedTime] = useState("");
  const [providerSignatureDate, setProviderSignatureDate] = useState("");
  const [providerSignatureSaveAsDraft, setProviderSignatureSaveAsDraft] =
    useState(false);

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const medications = {
    name,
    dose,
    route,
    frequency,
    startDate,
    stopChangeDate,
    reasonForStopChange,
  };

  const payload = {
    patientId,
    residentName,
    allergiesAndReactions,
    medications: arr?.map((i) => ({
      name: i.name,
      dose: i.dose,
      route: i.route,
      frequency: i.frequency,
      startDate: i.startDate,
      stopChangeDate: i.stopChangeDate,
      reasonForStopChange: i.reasonForStopChange,
    })),
    providerName,
    providerSignature,
    providerSignatureDate,
    date,
    providerSignatureTime: signedTime,
    providerSignatureSaveAsDraft,
  };

  const addData = () => {
    setArr((prev) => [...prev, medications]);
  };

  const removeOne = (index) => {
    setArr((prev) => prev.filter((_, i) => i !== index));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createMedicationReconciliation", payload);
  };

  useEffect(() => {
    if (patients) {
      const filtered = patients?.data?.filter((i) => i._id === patientId);
      setResidentName(filtered?.[0]?.fullName);
    }
  }, [patientId]);

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setProviderSignature}
        value={providerSignature}
        setDate={setProviderSignatureDate}
        setTime={setSignedTime}
      />
      <NavWrapper isArrow={true} title={"Medication Reconciliation"} />
      <Container className="full-width-container">
        <form onSubmit={submitHandler} className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Resident Name:</label>
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
              <label>Date:</label>
              <BorderlessInput
                setState={setDate}
                placeholder=""
                type={"date"}
                value={DateforInput(date)}
              />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item long-input">
              <label>Allergies and reactions:</label>
              <BorderlessInput
                setState={setAllergiesAndReactions}
                placeholder=""
                type="text"
                value={allergiesAndReactions}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item">
              <label>Name of Medication:</label>
              <BorderlessInput
                setState={setName}
                placeholder=""
                type="text"
                value={name}
              />
            </div>
            <div className="grid-item">
              <label>Dose:</label>
              <BorderlessInput
                setState={setDose}
                placeholder=""
                type="text"
                value={dose}
              />
            </div>
            <div className="grid-item">
              <label>Route:</label>
              <BorderlessInput
                setState={setRoute}
                placeholder=""
                type="text"
                value={route}
              />
            </div>
            <div className="grid-item">
              <label>Frequency:</label>
              <BorderlessInput
                setState={setFrequency}
                placeholder=""
                type="text"
                value={frequency}
              />
            </div>
            <div className="grid-item">
              <label>Start Date:</label>
              <BorderlessInput
                setState={setStartDate}
                placeholder=""
                type="date"
                value={DateFormatter(startDate)}
              />
            </div>
            <div className="grid-item">
              <label>Stop/Change Date:</label>
              <BorderlessInput
                setState={setStopChangeDate}
                placeholder=""
                type="date"
                value={DateFormatter(stopChangeDate)}
              />
            </div>
            <div className="grid-item long-input">
              <label>Reason for Stop/Change:</label>
              <BorderlessInput
                setState={setReasonForStopChange}
                placeholder=""
                type="text"
                value={reasonForStopChange}
              />
            </div>
          </div>
          <Form.Group className="mb-3 ">
            <Button
              style={{ backgroundColor: "#0C5C75" }}
              variant="primary"
              type="button"
              onClick={() => addData()}
            >
              + Add
            </Button>
          </Form.Group>

          <table className="mb-3 color-full">
            <thead>
              <tr>
                <th>Name of Medication</th>
                <th>Dose</th>
                <th>Route</th>
                <th>Frequency</th>
                <th>Start Date</th>
                <th>Stop/Change Date</th>
                <th>Reason for Stop/Change</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {arr?.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.dose} </td>
                  <td> {i.route} </td>
                  <td> {i.frequency} </td>
                  <td> {i.startDate} </td>
                  <td> {i.stopChangeDate} </td>
                  <td> {i.reasonForStopChange} </td>
                  <td>
                    <i
                      onClick={() => removeOne(index)}
                      className="fa-solid fa-trash"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Provider Name:</label>
              <BorderlessInput
                setState={setProviderName}
                placeholder=""
                type={"text"}
                value={providerName}
              />
            </div>
            <div className="grid-item"></div>
          </div>

          <div className="custome-cloud-btn">
            <div className="btns">
              <button
                className="draft"
                onClick={() =>
                  setProviderSignatureSaveAsDraft(!providerSignatureSaveAsDraft)
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
              {providerSignature && (
                <p>
                  Digitally Sign by {providerSignature}{" "}
                  {date && DateInMMDDYY(date)}
                  {signedTime}
                </p>
              )}
            </div>
          </div>

          <div className="save-as-draft-btn123 mb-3">
            <button className="btn1233" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default HOC(Reconciliations2);
