/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import { Auth, showMsg } from "../../../Baseurl.js";
import NavWrapper from "../../../Helper/NavWrapper.js";
import HOC from "../../../Layout/Inner/HOC.js";
import { BorderlessInput, DateFormatter } from "../../../Helper/Makers.js";
import { SignatureModal } from "../../../Mod/Modal.js";
import { DateInMMDDYY } from "../../../Repository/Apis.js";

const CreateServiceLog = () => {
  const navigate = useNavigate();
  const [employeeName, setEmployeeName] = useState("");
  const [dateOfTraining, setDateOfTraining] = useState("");
  const [trainingSubject, setTrainingSubject] = useState([]);
  const [administratorSignature, setAdministratorSignature] = useState("");
  const [hoursOrUnits, setHoursOrUnits] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [open, setOpen] = useState(false);
  const [employeeDate, setEmployeeDate] = useState("");
  const [employeeTime, setEmployeeTime] = useState("");

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
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setEmployeeSignature}
        value={employeeSignature}
        setTime={setEmployeeTime}
        setDate={setEmployeeDate}
      />
      <NavWrapper title={"EMPLOYEE IN-SERVICE LOG"} isArrow={true} />
      <Container className="full-width-container">
        <form onSubmit={submitHandler}>
          <div className="grid-container">
            <div className="grid-item long-input">
              <label>Employee Name</label>
              <BorderlessInput
                setState={setEmployeeName}
                value={employeeName}
                type="text"
              />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <label>Date of Training</label>
              <BorderlessInput
                setState={setDateOfTraining}
                value={DateFormatter(dateOfTraining)}
                type="date"
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Training Subject</label>
              <Select
                isMulti
                options={options}
                onChange={(e) => setTrainingSubject(e)}
                required
              />
            </div>
            <div className="grid-item">
              <label>Hours of Unit</label>
              <BorderlessInput
                setState={setHoursOrUnits}
                value={hoursOrUnits}
                type="text"
              />
            </div>
            <div className="grid-item third-wid-input">
              <label>Administrator Signature</label>
              <Select
                options={option2}
                onChange={(e) => setAdministratorSignature(e)}
                required
              />
            </div>
            <div className=" grid-input full-wid-input d-block">
              <label>Employee Signature</label>
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
                  {employeeSignature && (
                    <p>
                      Digitally Sign by {employeeSignature}{" "}
                      {employeeDate && DateInMMDDYY(employeeDate)}{" "}
                      {employeeTime}{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          
        </form>

        <div>
          <div className="top-div-personal">
            <Form style={{ textAlign: "left", width: "100%" }}>
              <div className="employee_btn_div">
                <button className="employee_create_btn" type="submit">
                  SUBMIT
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HOC(CreateServiceLog);
