/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { getData, postData } from "../../../components/api/api";
import { showMsg } from "../../../Baseurl";
import { MultiSelect } from "react-multi-select-component";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";

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
  const [ name , setName ] = useState("")
  const [ title ,setTitle ] = useState("")
  const [ initials ,setInitials ] = useState("")

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

  return (
    <>
    <NavWrapper title={ />
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            MEDICATION ADMINISTRATION RECORD
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Patient Name:
            </Form.Label>
            <Form.Select
              onChange={(e) =>
                setFormData({ ...formData, patientId: e.target.value })
              }
              aria-label="Default select example"
            >
              <option>Name</option>
              {patients?.data?.map((patient) => (
                <option value={patient._id}>{patient.fullName}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Allergies:
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormData({ ...formData, allergies: e.target.value })
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Psychiatric Provider:
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormData({
                  ...formData,
                  psychiatricProvider: e.target.value,
                })
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              PCP Provider:
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormData({
                  ...formData,
                  pcpProvider: e.target.value,
                })
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Diet:
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormData({ ...formData, diet: e.target.value })
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Fluid restrictions:
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormData({ ...formData, fluidRestriction: e.target.value })
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
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
              Admit Date:
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormData({ ...formData, admitDate: e.target.value })
              }
              type="date"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Month:
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormData({ ...formData, month: e.target.value })
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Year:
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Location:
            </Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              type="text"
              placeholder="Enter text"
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
