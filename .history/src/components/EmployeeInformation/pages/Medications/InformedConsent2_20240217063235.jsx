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
const InformedConsent2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [data, setData] = useState([]);

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

  // table Data
  const [medicationInstructions, setMedicationInstructions] = useState("");
  const [medicationStartDate, setMedicationStartDate] = useState("");
  const [fewDaysOnly, setFewDaysOnly] = useState(4);
  const [dischargeDate, setDischargeDate] = useState("");
  const [residentGuardianInitial, setResidentGuardianInitial] = useState("");
  const [staffInitial, setStaffInitial] = useState("");

  // staff multiple
  const [initial, setInitital] = useState("");
  const [title, setTitle] = useState("");
  const [signature, setSignature] = useState("");
  // ---
  const [residentGuardianSignature, setResidentGuradianSignature] =
    useState("");

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
            type={"date"}
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
            type={"date"}
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
            type={"date"}
            value={residentGuardianInitial}
          />
          <InputMaker
            label={"Staff Initial"}
            setState={setStaffInitial}
            placeholder=""
            type={"date"}
            value={staffInitial}
          />
          <p className="fw-bold" >
            I, the resident/Guardian, have received instruction in the use of
            the above listed medication(s) including the medication anticipated
            results, and potential side effect that maybe result from not taking
            the medication.
          </p>
        </form>
      </Container>

      <div>
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
                      tableDate: {
                        ...medicationData.data,
                        [field.name]: e.target.value,
                      },
                    })
                  }
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </Form.Group>
            ))}
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              {" "}
              I,the resident/Gurdian have recieved instruction in the use of
              above listed medications(s) inclding the med
            </Form.Label>
          </div>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Staff Name , Title
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Signature Of Staff
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
              Initials
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

export default InformedConsent2;
