/** @format */

import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import HOC from "../../Layout/Outer/HOC";
import {
  BorderlessInput,
  TextareaMaker,
  DateFormatter,
  BorderlessSelect,
} from "../../Helper/Makers";

const BookAppointment = () => {
  const options = [
    {
      label: "9:30am",
      value: "9:30",
    },
    {
      label: "10:00am",
      value: "10:00",
    },
    {
      label: "10:30am",
      value: "10:30",
    },
    {
      label: "11:00am",
      value: "11:00",
    },
    {
      label: "11:30am",
      value: "11:30",
    },
    {
      label: "12:00am",
      value: "12:00",
    },
  ];
  const [selected, setSelected] = useState([]);

  const [patientId, setPatientId] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [reasonForVisit, setReasonForVisit] = useState("gfg");
  const [appointmentDate, setAppointmentDate] = useState("2023-12-31");
  const [appointmentTime, setAppointmentTime] = useState("01:00 Pm");

  return (
    <>
      <Container className="full-width-container">
        <p className="title-heading">Book Appointment</p>
        <form>
          
        </form>
        <div className="grid-container mb-3">
          <div className="grid-item">
            <label>Name: </label>
            <BorderlessInput setState={setName} type="text" value={name} />
          </div>
          <div className="grid-item long-input"></div>
          <div className="grid-item">
            <label>Contact Number: </label>
            <BorderlessInput
              setState={setContactNumber}
              type="tel"
              value={contactNumber}
            />
          </div>
          <div className="grid-item full-wid-input">
            <label>Choose your slot </label>
          </div>
          <div className="grid-item">
            <label>Appointment Date: </label>
            <BorderlessInput
              setState={setAppointmentDate}
              type="date"
              value={DateFormatter(appointmentDate)}
            />
          </div>
          <div className="grid-item">
            <label>Time Slot: </label>
            <BorderlessSelect
              setState={setAppointmentTime}
              options={options}
              value={appointmentTime}
            />
          </div>
        </div>
        <TextareaMaker
          label={"Reason for Visit"}
          setValue={setReasonForVisit}
          value={reasonForVisit}
        />
      </Container>
    </>
  );
};

export default HOC({ Wcomponenet: BookAppointment });
