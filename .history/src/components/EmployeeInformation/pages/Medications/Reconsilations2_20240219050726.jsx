/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { SignatureModal } from "../../../../Mod/Modal";
import { InputMaker, SelectMaker } from "../../../../Helper/Makers";

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
              type="text"
              value={startDate}
            />
          </form>
        </Container>

        <div className="top-div-personal">
      
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Stop/Change Date:
            </Form.Label>
            <Form.Control
              name="medicationsStopDate"
              onChange={(e) =>
                handleMedicationChange(0, "stopChangeDate", e.target.value)
              }
              required
              type="date"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Reason for Stop/Change:
            </Form.Label>
            <Form.Control
              name="medicationsReason"
              onChange={(e) =>
                handleMedicationChange(0, "reasonForStopChange", e.target.value)
              }
              required
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Provider Name:
            </Form.Label>
            <Form.Control
              name="medicationsProviderName"
              onChange={(e) =>
                setPatientData({ ...patientData, providerName: e.target.value })
              }
              type="text"
              required
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Provider Signature:
            </Form.Label>
            <Form.Control
              name="medicationsProviderSignature"
              onChange={(e) =>
                setPatientData({
                  ...patientData,
                  providerSignature: e.target.value,
                })
              }
              type="text"
              required
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
              type="date"
              name="medicationsDate"
              onChange={(e) =>
                setPatientData({ ...patientData, date: e.target.value })
              }
              placeholder="Enter text"
            />
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
            <button onClick={submitHandler} className="btn1233" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reconciliations2;
