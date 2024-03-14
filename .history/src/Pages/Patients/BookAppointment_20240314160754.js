/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import HOC from "../../Layout/Outer/HOC";
import { BorderlessInput, TextareaMaker } from "../../Helper/Makers";

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
  const [status, setStatus] = useState("Pending");
  return (
    <>
      <Container className="full-width-container">
        <p className="title-heading">Book Appointment</p>
        <div className="grid-container">
          <div className="grid-item">
            <label>Name: </label>
            <BorderlessInput setState={setName} type="text" value={name} />
          </div>
          <div className="grid-item"> </div>
          <div className="grid-item">
            <label>Contact Number: </label>
            <BorderlessInput
              setState={setContactNumber}
              type="tel"
              value={contactNumber}
            />
          </div>
          <div className="grid-item"></div>
        </div>
        <TextareaMaker
          label={"Reason for Visit"}
          setValue={setReasonForVisit}
          value={reasonForVisit}
        />
      </Container>

      <div>
        <div className="top-div-personal">
          <Form
            style={{ width: "100%" }}
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Choose Your Slot
            </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Appointment Date
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Time Slot
              </Form.Label>
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </Form.Group>

            <div style={{ padding: "1.5rem" }} className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                SUBMIT DETAilS
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default HOC({ Wcomponenet: BookAppointment });
