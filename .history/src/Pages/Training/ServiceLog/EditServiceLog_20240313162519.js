/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Select from "react-select";
import NavWrapper from "../../../Helper/NavWrapper.js";
import HOC from "../../../Layout/Inner/HOC.js";
import { BorderlessInput, DateFormatter, MultiSelect } from "../../../Helper/Makers.js";
import { SignatureModal } from "../../../Mod/Modal.js";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis.js";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { getData } from "../../../components/api/api.js";

const EditServiceLog = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [dateOfTraining, setDateOfTraining] = useState("");
  const [trainingSubject, setTrainingSubject] = useState([]);
  const [administratorSignature, setAdministratorSignature] = useState("");
  const [hoursOrUnits, setHoursOrUnits] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [open, setOpen] = useState(false);
  const [employeeDate, setEmployeeDate] = useState("");
  const [employeeTime, setEmployeeTime] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  let payload;
  payload = {
    employeeName,
    dateOfTraining,
    trainingSubject: trainingSubject?.map((i) => i.value),
    administratorSignature: administratorSignature?.value,
    hoursOrUnits,
    employeeSignature,
  };
  if (!trainingSubject || trainingSubject.length === 0) {
    delete payload.trainingSubject;
  }
  if (!setAdministratorSignature || setAdministratorSignature.length === 0) {
    delete payload.administratorSignature;
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    await postApi(
      setLoading,
      `employee/updateEmployeeInServiceLog/${id}`,
      payload
    );
    setEmployeeName("");
    setDateOfTraining("");
    setTrainingSubject([]);
    setAdministratorSignature({});
    setHoursOrUnits("");
    setEmployeeSignature("");
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

  const [details, setDetails] = useState({});
  const fetchHandler = () => {
    getData(setDetails, `employee/getEmployeeInServiceLogById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, [id]);

  useEffect(() => {
    if (details) {
      const item = details?.data;
      setEmployeeName(item?.employeeName);
      setDateOfTraining(item?.dateOfTraining);
      const items = item?.trainingSubject?.map((i) => ({
        value: i,
        label: i,
      }));
      setTrainingSubject(items);
      const adminSign = {
        value: item?.administratorSignature,
        label: item?.administratorSignature,
      };
      setAdministratorSignature(adminSign);
      setHoursOrUnits(item?.hoursOrUnits);
      setEmployeeSignature(item?.employeeSignature);
    }
  }, [details]);

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
        <form onSubmit={submitHandler} className="text-start">
          <div className="grid-container">
            <div className="grid-item long-input">
              <label>Employee Name: </label>
              <BorderlessInput
                setState={setEmployeeName}
                value={employeeName}
                type="text"
              />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <label>Date of Training: </label>
              <BorderlessInput
                setState={setDateOfTraining}
                value={DateFormatter(dateOfTraining)}
                type="date"
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Training Subject: </label>
              <Select
                isMulti
                options={options}
                onChange={(e) => setTrainingSubject(e)}
                required
                value={trainingSubject}
              />
            </div>
            <div className="grid-item">
              <label>Hours of Unit: </label>
              <BorderlessInput
                setState={setHoursOrUnits}
                value={hoursOrUnits}
                type="text"
              />
            </div>
            <div className="grid-item third-wid-input">
              <label>Administrator/ BHP/Registered Nures Signature: </label>
              <Select
                options={option2}
                onChange={(e) => setAdministratorSignature(e)}
                required
                value={administratorSignature}
              />
              <MultiSelect options={opt} />
            </div>
            <div className=" grid-input full-wid-input d-block">
              <label>Employee Signature: </label>
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
          <button className="employee_create_btn" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
          </button>
        </form>
      </Container>
    </>
  );
};

export default HOC(EditServiceLog);
