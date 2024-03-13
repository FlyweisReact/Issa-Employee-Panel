/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import { Auth, showMsg } from "../../../Baseurl.js";
import NavWrapper from "../../../Helper/NavWrapper.js";

const CreateServiceLog = () => {
  const navigate = useNavigate();
  const [employeeName, setEmployeeName] = useState("");
  const [dateOfTraining, setDateOfTraining] = useState("");
  const [trainingSubject, setTrainingSubject] = useState([]);
  const [administratorSignature, setAdministratorSignature] = useState("");
  const [hoursOrUnits, setHoursOrUnits] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");

  const payload = {
    employeeName,
    dateOfTraining,
    trainingSubject: trainingSubject?.map((i) => i.value),
    administratorSignature: administratorSignature?.value,
    hoursOrUnits,
    employeeSignature,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.React_App_Baseurl}employee/createEmployeeInServiceLog`,
        payload,
        Auth()
      );
      const msg = res.data.message;
      showMsg("", msg, "success");
      navigate("/employee/training/employee-in");
    } catch {}
  };

  const options = [
    { value: "Infectious Control", label: "Infectious Control" },
    {
      value: "Fall prevention and fall recovery",
      label: "Fall prevention and fall recovery",
    },
  ];

  const option2 = [
    { value: "Administrator", label: "Administrator" },
    { value: "BHP", label: "BHP" },
    { value: "Registered Nures", label: " Registered Nures" },
  ];

  return (
    <>
    <NavWrapper title={"EMPLOYEE IN-SERVICE LOG"} />
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/training/on-site")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{
            width: "80%",
            marginBottom: "1rem",
            display: "flex",
            paddingRight: "1rem",
          }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            EMPLOYEE IN-SERVICE LOG
          </p>
          <p>
            <Button onClick={() => navigate("/employee/training/on-site")}>
              Data
            </Button>
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form
            style={{ textAlign: "left", width: "100%" }}
            onSubmit={submitHandler}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                name="text"
                onChange={(e) => setEmployeeName(e.target.value)}
                required
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date of Training </Form.Label>
              <Form.Control
                name="date"
                onChange={(e) => setDateOfTraining(e.target.value)}
                required
                type="date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Training Subject </Form.Label>
              <Select
                isMulti
                options={options}
                onChange={(e) => setTrainingSubject(e)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Hours of Unit</Form.Label>
              <Form.Control
                type="number"
                min={0}
                onChange={(e) => setHoursOrUnits(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Administrator Signature </Form.Label>

              <Select
                options={option2}
                onChange={(e) => setAdministratorSignature(e)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Employee Signature</Form.Label>
              <Form.Control
                name="trainerSignature"
                onChange={(e) => setEmployeeSignature(e.target.value)}
                required
                type="text"
              />
            </Form.Group>

            <div className="employee_btn_div">
              <button className="employee_create_btn" type="submit">
                SUBMIT
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateServiceLog;
