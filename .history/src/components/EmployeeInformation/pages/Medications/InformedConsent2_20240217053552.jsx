/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { showMsg } from "../../../../Baseurl";
import { SelectMaker } from "../../../../Helper/Makers";
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
  const [ patientId  , setPatientId] = useState('')

  
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
      {/* <SelectMaker /> */}
      </form>
      </Container>
      <div>
        <div className="top-div-personal">
          <Form.Group
            style={{ fontWeight: "bold", fontSize: ".9rem" }}
            className="mb-3"
            controlId="formBasicPatientName"
          >
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Patient Name
            </Form.Label>
            <Form.Select
              name="patientId"
              onChange={(e) => handleInputChange("patientId", e.target.value)}
              aria-label="Select Resident Name"
            >
              <option>Select Resident Name</option>
              {patients?.data?.map((patient) => (
                <option key={patient._id} value={patient._id}>
                  {patient.fullName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group
            style={{ fontWeight: "bold", fontSize: ".9rem" }}
            className="mb-3"
            controlId="formBasicDOB"
          >
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date of Birth
            </Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter text"
              onChange={(e) => handleInputChange("dob", e.target.value)}
            />
          </Form.Group>

          <Form.Group
            style={{ fontWeight: "bold", fontSize: ".9rem" }}
            className="mb-3"
            controlId="formBasicLocation"
          >
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Admit Date
            </Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter text"
              onChange={(e) => handleInputChange("admitDate", e.target.value)}
            />
          </Form.Group>
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

            <div>
              {" "}
              <Button
                onClick={addField}
                style={{ paddingRight: "1rem" }}
                variant="primary"
              >
                + Add
              </Button>
            </div>
          </Form.Group>

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