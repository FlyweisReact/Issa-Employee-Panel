/** @format */

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Inner/HOC";
import { BorderlessInput ,DateFormatter } from "../../../Helper/Makers";

const CreateMilegaLog = () => {
  const [date, setDate] = useState("");
  const [residentInitials, setResidentInitials] = useState("");
  const [beginningMileage, setBeginningMileaga] = useState("");
  const [endingMileage, setEndingMilega] = useState("");
  const [totalMileage, setTotalMilega] = useState("");
  const [driverSignature, setDriverSignature] = useState("");
  const [anyIssues, setAnyIssue] = useState("");
  const [signedDate, setSignedDate] = useState("");
  const [signedTime, setSignedTime] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <NavWrapper title={"Milega Log"} isArrow={true} />

      <Container className="full-width-container">
        <form onSubmit={submitHandler} className="w-100 text-start">
          <div className="grid-container">
            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setDate}
                value={DateFormatter(date)}
                type="date"
              />
            </div>
            <div className="grid-item">
              <label>Resident Initials</label>
              <BorderlessInput
                setState={setResidentInitials}
                value={residentInitials}
                type="text"
              />
            </div>
            <div className="grid-item">
              <label>Resident</label>
              <BorderlessInput
                setState={setResidentInitials}
                value={residentInitials}
                type="text"
              />
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default HOC(CreateMilegaLog);
