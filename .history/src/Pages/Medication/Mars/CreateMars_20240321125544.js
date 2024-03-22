/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { getData, postData } from "../../../components/api/api";
import { showMsg } from "../../../Baseurl";
import { MultiSelect } from "react-multi-select-component";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
} from "../../../Helper/Makers";

const CreateMars = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState({});
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  //   ---
  const [employeeId, setEmployeeId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [admitDate, setAdmitDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
  const [psychiatricProvider, setPsychiatricProvider] = useState("");
  const [pcpProvider, setPcpProvider] = useState("");
  const [diet, setDiet] = useState("");
  const [fluidRestriction, setFluidRestriction] = useState("");
  const [allergies, setAllergies] = useState("");
  const [medicationsId, setMedicationsId] = useState([""]);
  const [instruction, setInstruction] = useState([]);
  const [time, setTime] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [initials, setInitials] = useState("");

  // --

  const options = [
    {
      label: "Take 1 tab by mouth daily",
      value: "Take 1 tab by mouth daily",
    },
    {
      label: "Take 1 tab twice daily",
      value: "Take 1 tab twice daily",
    },
    {
      label: "Take 1 tab by mouth three times daily",
      value: "Take 1 tab by mouth three times daily",
    },
    {
      label: "Take 1 tab by mouth 4 times daily",
      value: "Take 1 tab by mouth 4 times daily",
    },
    {
      label: "Take 1 tab by mouth at bedtime",
      value: "Take 1 tab by mouth at bedtime",
    },
    {
      label: "Take 1/2 tab by mouth daily",
      value: "Take 1/2 tab by mouth daily",
    },
    {
      label: "Take ½ tab by mouth twice daily",
      value: "Take ½ tab by mouth twice daily",
    },
    {
      label: "Take ½ tab by mouth three times daily",
      value: "Take ½ tab by mouth three times daily",
    },
    {
      label: "Dissolve 1 tab under the tongue daily",
      value: "Dissolve 1 tab under the tongue daily",
    },
    {
      label: "Dissolve 1 tab under the tongue at bedtime",
      value: "Dissolve 1 tab under the tongue at bedtime",
    },
    {
      label:
        "Take 1 tab by mouth on empty stomach one (1) hour before breakfast",
      value:
        "Take 1 tab by mouth on empty stomach one (1) hour before breakfast",
    },
  ];
  const options1 = [
    {
      label: "1:30Hr",
      value: "1:30Hr",
    },
    {
      label: "1:30Hr",
      value: "1:30Hr",
    },
    {
      label: "1:30Hr",
      value: "1:30Hr",
    },
    {
      label: "1:30Hr",
      value: "1:30Hr",
    },
    {
      label: "1:30Hr",
      value: "1:30Hr",
    },
    {
      label: "1:30Hr",
      value: "1:30Hr",
    },
  ];
  const [selectedItem1, setSelectedItem1] = useState([]);

  const [formData, setFormData] = useState({
    employeeId: "",
    patientId: "",
    admitDate: "",
    month: "",
    year: "",
    location: "",
    psychiatricProvider: "",
    pcpProvider: "",
    diet: "",
    fluidRestriction: "",
    allergies: "",
    medicationsId: [],
    instruction: [selectedItems],
    time: selectedItem1,
    staffDetails: [
      {
        name: "",
        title: "",
        initials: "",
      },
    ],
  });

  const getEmployeeData = () => {
    getData(setData, "employee/getProfile");
    setEmployeeId(data?.data?._id);
    setFormData({
      ...formData,
      employeeId: data?.data?._id,
    });
  };

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
    getEmployeeData();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    postData("employee/createMars", formData);
  };

  const patientOptions = patients?.data?.map((i) => ({
    value: i._id,
    label: i.fullName,
  }));

  return (
    <>
      <NavWrapper title={"MEDICATION ADMINISTRATION RECORD"} isArrow={true} />

      <Container className="full-width-container">
        <div className="grid-container">
          <div className="grid-item">
            <label>Patient Name:</label>
            <BorderlessSelect
              setState={setPatientId}
              value={patientId}
              options={patientOptions}
            />
          </div>
          <div className="grid-item long-input"></div>
          <div className="grid-item">
            <label>Admit Date:</label>
            <BorderlessInput
              setState={setAdmitDate}
              value={DateFormatter(admitDate)}
              type={"date"}
            />
          </div>
          <div className="grid-item">
            <label>Month:</label>
            <BorderlessInput
              setState={setMonth}
              value={month}
              type={"number"}
            />
          </div>
          <div className="grid-item">
            <label>Year:</label>
            <BorderlessInput
              setState={setYear}
              value={year}
              type={"number"}
            />
          </div>
          <div className="grid-item">
            <label>Location:</label>
            <BorderlessInput
              setState={setLocation}
              value={location}
              type={"text"}
            />
          </div>
          <div className="grid-item">
            <label>PCP Provider:</label>
            <BorderlessInput
              setState={setPcpProvider}
              value={pcpProvider}
              type={"text"}
            />
          </div>
          <div className="grid-item long-input">
            <label>Psychiatric Provider:</label>
            <BorderlessInput
              setState={setPsychiatricProvider}
              value={psychiatricProvider}
              type={"text"}
            />
          </div>
          <div className="grid-item long-input">
            <label>Diet:</label>
            <BorderlessInput
              setState={setDiet}
              value={diet}
              type={"text"}
            />
          </div>
          <div className="grid-item long-input">
            <label>Fluid restrictions:</label>
            <BorderlessInput
              setState={setFluidRestriction}
              value={fluidRestriction}
              type={"text"}
            />
          </div>
          <div className="grid-item long-input">
            <label>Allergies:</label>
            <BorderlessInput
              setState={setAllergies}
              value={allergies}
              type={"text"}
            />
          </div>

          <div className="grid-item long-input d-block">
            <label>Medication name:</label>
            <MultiSelect
              setState={set}
              value={patientId}
              options={patientOptions}
            />
          </div>
        </div>
      </Container>

      <div>
        <div className="top-div-personal">
   
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Medication name:
            </Form.Label>
            <Form.Select
              onChange={(e) =>
                setFormData({ ...formData, medicationsId: e.target.value })
              }
              aria-label="Default select example"
            >
              <option>Select</option>
              <option value="Medication 1">Medication 1</option>
              <option value="Medication 2">Medication 2</option>
              <option value="Medication 3">Medication 3</option>
              <option value="Medication 4">Medication 4</option>
              <option value="Medication 5">Medication 5</option>
              <option value="Medication 6">Medication 6</option>
              <option value="Medication 7">Medication 7</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Instructions:
            </Form.Label>
            <MultiSelect
              options={options}
              value={selectedItems}
              onChange={(e) => {
                setSelectedItems(e);
                setFormData({ ...formData, medicationInstructions: e });
              }}
              labelledBy="Select"
            />
          </Form.Group>

      
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Staff Name, Title:
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormData({
                  ...formData,
                  staffDetails: {
                    name: e.target.value,
                    title: "",
                    initials: "",
                  },
                })
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Add time:
            </Form.Label>
            <MultiSelect
              options={options1}
              value={selectedItem1}
              onChange={(e) => {
                setSelectedItem1(e);
                setFormData({ ...formData, time: e });
              }}
              labelledBy="Select"
            />
          </Form.Group>

          <div
            style={{
              textAlign: "center",
              width: "100%",
              margin: "auto",
              marginBottom: "1rem",
            }}
          ></div>
          <div className="save-as-draft-btn123">
            <button
              style={{ marginBottom: "1rem" }}
              onClick={submitHandler}
              className="btn1233"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(CreateMars);
