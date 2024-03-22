/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { getData, postData } from "../../../components/api/api";
import { showMsg } from "../../../Baseurl";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  MultiSelect,
} from "../../../Helper/Makers";
import { postApi } from "../../../Repository/Apis";

const CreateMars = () => {
  const [patients, setPatients] = useState({});
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
  const [medicationsId, setMedicationsId] = useState([]);
  const [instruction, setInstruction] = useState([]);
  const [time, setTime] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [initials, setInitials] = useState("");
  const [medicationArr, setMedicationArr] = useState({});
  const [profile, setProfile] = useState({});
  const [ loading , setLoading ] = useState()

  const payload = {
    employeeId,
    patientId,
    admitDate,
    month,
    year,
    location,
    psychiatricProvider,
    pcpProvider,
    diet,
    fluidRestriction,
    allergies,
    medicationsId: medicationsId?.map((i) => i.value),
    instruction: instruction?.map((i) => i.value),
    time: time?.map((i) => i.value),
    staffDetails: [
      {
        name,
        title,
        initials,
      },
    ],
  };

  const [formData, setFormData] = useState({});

  const getEmployeeData = () => {
    getData(setProfile, "employee/getProfile");
  };

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
    getEmployeeData();
  }, []);

  useEffect(() => {
    if (profile) {
      setEmployeeId(profile?.data?._id);
    }
  }, [profile]);

  const submitHandler = (e) => {
    e.preventDefault();
    postApi()
    postData("employee/createMars", formData);
  };

  const patientOptions = patients?.data?.map((i) => ({
    value: i._id,
    label: i.fullName,
  }));

  useEffect(() => {
    getData(setMedicationArr, "employee/getAllMedicationEmployee");
  }, []);

  const medicationOptions = medicationArr?.data?.flatMap((item) =>
    item?.medication?.map((i) => ({
      value: i._id,
      label: i.name,
    }))
  );

  const instructionOptions = [
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

  const timeOptions = [
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
            <BorderlessInput setState={setYear} value={year} type={"number"} />
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
            <BorderlessInput setState={setDiet} value={diet} type={"text"} />
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
          <div className="grid-item full-wid-input">
            <label>Staff Details:</label>
          </div>
          <div className="grid-item">
            <label>Name:</label>
            <BorderlessInput setState={setName} value={name} type={"text"} />
          </div>
          <div className="grid-item">
            <label>Title:</label>
            <BorderlessInput setState={setTitle} value={title} type={"text"} />
          </div>
          <div className="grid-item">
            <label>Initials:</label>
            <BorderlessInput
              setState={setInitials}
              value={initials}
              type={"text"}
            />
          </div>

          <div className="grid-item full-wid-input d-block">
            <label>Medication name:</label>
            <MultiSelect
              setValue={setMedicationsId}
              value={medicationsId}
              options={medicationOptions}
            />
          </div>

          <div className="grid-item full-wid-input d-block">
            <label>Instructions:</label>
            <MultiSelect
              setValue={setInstruction}
              value={instruction}
              options={instructionOptions}
            />
          </div>
          <div className="grid-item full-wid-input d-block">
            <label>Time:</label>
            <MultiSelect
              setValue={setTime}
              value={time}
              options={timeOptions}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HOC(CreateMars);
