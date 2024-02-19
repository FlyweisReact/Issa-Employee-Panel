/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { SignatureModal } from "../../../../Mod/Modal";
import {
  DateFormatter,
  InputMaker,
  SelectMaker,
} from "../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";

const Reconciliations2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const initialPatientState = {
    patientId: "",
    residentName: "",
    allergiesAndReactions: "",
    medications: [
      {
        name: "",
        dose: "",
        route: "",
        frequency: "",
        startDate: "",
        stopChangeDate: "",
        reasonForStopChange: "",
      },
    ],
    providerName: "",
    providerSignature: "",
    date: "",
  };

  const [patientData, setPatientData] = useState(initialPatientState);

  const handleInputChange = (field, value) => {
    if (field === "patientId") {
      const selectedPatient = patients?.data?.find(
        (patient) => patient._id === value
      );
      setPatientData({
        ...patientData,
        patientId: value,
        residentName: selectedPatient?.fullName || "",
      });
    } else {
      setPatientData({
        ...patientData,
        [field]: value,
      });
    }
  };

  const handleMedicationChange = (index, field, value) => {
    const updatedMedications = [...patientData.medications];
    updatedMedications[index][field] = value;

    setPatientData({
      ...patientData,
      medications: updatedMedications,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postData("employee/createMedicationReconciliation", patientData);
    setPatientData(initialPatientState);
  };

  // ---
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

  const medications = {
    name,
    dose,
    route,
    frequency,
    startDate,
    stopChangeDate,
    reasonForStopChange,
  };

  const addData = () => {
    setArr((prev) => [...prev, medications]);
  };

  console.log(arr)

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setProviderSignature}
        value={providerSignature}
        text={"Digitally Sign by"}
      />
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            MEDICATION RECONCILIATION
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <Container className="full-width-container">
          <form onSubmit={submitHandler} className="employee1">
            <SelectMaker
              setValue={setPatientId}
              options={patients?.data?.map((i) => ({
                label: i.fullName,
                value: i._id,
              }))}
              label="Resident’s Name:"
              value={patientId}
            />
            <InputMaker
              label="Allergies and reaction:"
              setState={setAllergiesAndReactions}
              placeholder=""
              type="text"
              value={allergiesAndReactions}
            />
            <InputMaker
              label="Name of Medication:"
              setState={setName}
              placeholder=""
              type="text"
              value={name}
            />
            <InputMaker
              label="Dose:"
              setState={setDose}
              placeholder=""
              type="text"
              value={dose}
            />
            <InputMaker
              label="Route:"
              setState={setRoute}
              placeholder=""
              type="text"
              value={route}
            />
            <InputMaker
              label="Frequency:"
              setState={setFrequency}
              placeholder=""
              type="text"
              value={frequency}
            />
            <InputMaker
              label="Start Date:"
              setState={setStartDate}
              placeholder=""
              type="date"
              value={DateFormatter(startDate)}
            />
            <InputMaker
              label="Stop/Change Date:"
              setState={setStopChangeDate}
              placeholder=""
              type="date"
              value={DateFormatter(stopChangeDate)}
            />
            <InputMaker
              label="Reason for Stop/Change:"
              setState={setReasonForStopChange}
              placeholder=""
              type="text"
              value={reasonForStopChange}
            />
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

            <InputMaker
              label="Provider Name:"
              setState={setProviderName}
              placeholder=""
              type="text"
              value={providerName}
            />
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
                {providerSignature && (
                  <p>Digitally Sign by {providerSignature} </p>
                )}
              </div>
            </div>

            <InputMaker
              label="Date:"
              setState={setDate}
              placeholder=""
              type="date"
              value={DateFormatter(date)}
            />

            <div
              className="print_btn"
              style={{ maxWidth: "200px", textAlign: "center" }}
            >
              PRINT REPORT
            </div>

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

export default Reconciliations2;
