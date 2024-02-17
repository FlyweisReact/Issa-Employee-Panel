/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { showMsg } from "../../../../Baseurl";
import {
  DateFormatter,
  InputMaker,
  SelectMaker,
} from "../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";

const InformedConsent2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const initialMedicationState = {
    patientId: "",
    dob: "",

    admitDate: "",

    tableDate: [
      {
        medicationInstructions: "",
        medicationStartDate: "",
        fewDaysOnly: 0,
        dischargeDate: "",
        residentGuardianInitial: "",
        staffInitial: "",
      },
    ],
    staff: [
      {
        initial: "",
        title: "",
        signature: "",
      },
    ],
    residentGuardianSignature: "",
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
    {
      label: "Medication/Instructions",
      name: "medicationInstructions",
      type: "text",
      placeholder: "Enter text",
    },
    {
      label: "Medication Start Date",
      name: "medicationStartDate",
      type: "date",
      placeholder: "Enter text",
    },
    {
      label: "Few Days Only",
      name: "fewDaysOnly",
      type: "number",
      placeholder: "Enter text",
    },
    {
      label: "D/C Date",
      type: "date",
      name: "dischargeDate",
      placeholder: "Enter text",
    },
    {
      label: "Resident / Guardian Initial",
      name: "residentGuardianInitial",
      type: "text",
      placeholder: "Enter text",
    },
    {
      label: "Staff Initial",
      name: "staffInitial",
      type: "text",
      placeholder: "Enter text",
    },
  ];

  const [formData, setFormData] = useState(initialFormData);
  const [numberOfFields, setNumberOfFields] = useState(initialFormData.length);

  const addField = () => {
    setNumberOfFields(initialFormData.length);
    setFormData([
      ...formData,
      {
        label: "Medication/Instructions",
        name: "medicationInstructions",
        type: "date",
        placeholder: "Enter text",
      },
      {
        label: "Medication Start Date",
        name: "medicationStartDate",
        type: "text",
        placeholder: "Enter text",
      },
      {
        label: "Few Days Only",
        name: "fewDaysOnly",
        type: "number",
        placeholder: "Enter text",
      },
      {
        label: "D/C Date",
        type: "date",
        name: "dischargeDate",
        placeholder: "Enter text",
      },
      {
        label: "Resident / Guardian Initial",
        name: "residentGuardianInitial",
        type: "text",
        placeholder: "Enter text",
      },
      {
        label: "Staff Initial",
        name: "staffInitial",
        type: "text",
        placeholder: "Enter text",
      },
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
    return console.log(medicationData);
    const emptyValues = Object.keys(medicationData).filter(
      (key) => medicationData[key] === ""
    );
    if (emptyValues.length > 0) {
      return showMsg(
        "Error",
        `${emptyValues.join(",")}  cannot be empty`,
        "danger"
      );
    }
    postData("employee/createMedicationOpioidCount", medicationData);
    setMedicationData(medicationData);
  };

  // New Feilds
  const [patientId, setPatientId] = useState("");
  const [dob, setDob] = useState("");
  const [admitDate, setAdminDate] = useState("");
  const [open, setOpen] = useState(false);
  const [medicationInstructions, setMedicationInstructions] = useState("");
  const [medicationStartDate, setMedicationStartDate] = useState("");
  const [fewDaysOnly, setFewDaysOnly] = useState(4);
  const [dischargeDate, setDischargeDate] = useState("");
  const [residentGuardianInitial, setResidentGuardianInitial] = useState("");
  const [staffInitial, setStaffInitial] = useState("");
  const [initial, setInitital] = useState("");
  const [title, setTitle] = useState("");
  const [signature, setSignature] = useState("");
  const [residentGuardianSignature, setResidentGuradianSignature] =
    useState("");
  const [open1, setOpen1] = useState(false);
  const [loading, setLoading] = useState(false);

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
          <p
            style={{
              fontSize: ".9rem",
              fontWeight: "bold",
              flex: "1",
              textTransform: "uppercase",
            }}
          >
            Informed Consent for Medications
          </p>
        </div>
      </div>

      <Container className="full-width-container">
        <form className="employee1" onSubmit={submitHandler}>
          <SelectMaker
            setValue={setPatientId}
            options={patients?.data?.map((i) => ({
              value: i._id,
              label: i.fullName,
            }))}
            label="Patient Name"
            value={patientId}
          />
          <InputMaker
            label={"Date of Birth"}
            setState={setDob}
            placeholder=""
            type={"date"}
            value={DateFormatter(dob)}
          />
          <InputMaker
            label={"Admit Date"}
            setState={setAdminDate}
            placeholder=""
            type={"date"}
            value={DateFormatter(admitDate)}
          />

          <Form.Group
            style={{
              fontWeight: "bold",
              fontSize: ".9rem",
              display: "flex",
              justifyContent: "space-between",
            }}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Informed consent for medications
            </Form.Label>

            <Button style={{ paddingRight: "1rem" }} variant="primary">
              + Add
            </Button>
          </Form.Group>

          <InputMaker
            label={"Medication/Instructions"}
            setState={setMedicationInstructions}
            placeholder=""
            type={"text"}
            value={medicationInstructions}
          />
          <InputMaker
            label={"Medication Start Date"}
            setState={setMedicationStartDate}
            placeholder=""
            type={"date"}
            value={DateFormatter(medicationStartDate)}
          />
          <InputMaker
            label={"Few Days Only"}
            setState={setFewDaysOnly}
            placeholder=""
            type={"text"}
            value={fewDaysOnly}
          />
          <InputMaker
            label={"D/C Date"}
            setState={setDischargeDate}
            placeholder=""
            type={"date"}
            value={DateFormatter(dischargeDate)}
          />
          <InputMaker
            label={"Resident/Guardian Initial"}
            setState={setResidentGuardianInitial}
            placeholder=""
            type={"text"}
            value={residentGuardianInitial}
          />
          <InputMaker
            label={"Staff Initial"}
            setState={setStaffInitial}
            placeholder=""
            type={"text"}
            value={staffInitial}
          />
          <p className="fw-bold">
            I, the resident/Guardian, have received instruction in the use of
            the above listed medication(s) including the medication anticipated
            results, and potential side effect that maybe result from not taking
            the medication.
          </p>
          <InputMaker
            label={"Staff Name, Title"}
            setState={setTitle}
            placeholder=""
            type={"text"}
            value={title}
          />

          <Form.Group>
            <Form.Label className="fw-bold">Signature of Staff</Form.Label>
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
              <div>{signature && <p>Digitally Sign by {signature} </p>}</div>
            </div>
          </Form.Group>

          <InputMaker
            label={"Initials"}
            setState={setInitital}
            placeholder=""
            type={"text"}
            value={initial}
          />

          <Form.Group>
            <Form.Label className="fw-bold">
              Resident/Guardian/Public Fiduciary Signature
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
                {residentGuardianSignature && (
                  <p>Digitally Sign by {residentGuardianSignature} </p>
                )}
              </div>
            </div>
          </Form.Group>

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

export default InformedConsent2;
