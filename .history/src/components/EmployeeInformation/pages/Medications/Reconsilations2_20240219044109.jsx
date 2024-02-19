/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { SignatureModal } from "../../../../Mod/Modal";

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
    name , dose , route , frequency , startDate , stop
  };

  const addData = () => {
    setArr((prev) => [...prev, medications]);
  };

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        // setValue={setSignature}
        // value={signature}
        text={"Digitally Sign by employee name"}
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
        <div className="top-div-personal">
          <Form.Group
            style={{ fontWeight: "bold", fontSize: ".9rem" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Resident’s Name
            </Form.Label>
            <Form.Select
              onChange={(e) => handleInputChange("patientId", e.target.value)}
              aria-label="Default select example"
              required
            >
              <option value="">Select Resident Name</option>
              {patients?.data?.map((patient) => (
                <option value={patient._id}>{patient.fullName}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group
            style={{ fontWeight: "bold", fontSize: ".9rem" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Allergies and reaction
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setPatientData({
                  ...patientData,
                  allergiesAndReactions: e.target.value,
                })
              }
              required
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group
            style={{ fontWeight: "bold", fontSize: ".9rem" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Name of Medication
            </Form.Label>
            <Form.Control
              required
              name="medicationsName"
              onChange={(e) =>
                handleMedicationChange(0, "name", e.target.value)
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group
            style={{ fontWeight: "bold", fontSize: ".9rem" }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Dose
            </Form.Label>
            <Form.Control
              required
              name="medicationsDose"
              onChange={(e) =>
                handleMedicationChange(0, "dose", e.target.value)
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Route:
            </Form.Label>
            <Form.Control
              name="medicationsRoute"
              onChange={(e) =>
                handleMedicationChange(0, "route", e.target.value)
              }
              required
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Frequency:
            </Form.Label>
            <Form.Control
              name="medicationsFrequency"
              onChange={(e) =>
                handleMedicationChange(0, "frequency", e.target.value)
              }
              required
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Start Date:
            </Form.Label>
            <Form.Control
              name="medicationsStartDate"
              onChange={(e) =>
                handleMedicationChange(0, "startDate", e.target.value)
              }
              required
              type="date"
              placeholder="Enter text"
            />
          </Form.Group>
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
