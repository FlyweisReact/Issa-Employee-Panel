/** @format */

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HOC from "../../Layout/Outer/HOC";
import {
  BorderlessInput,
  TextareaMaker,
  DateFormatter,
  BorderlessSelect,
} from "../../Helper/Makers";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { postApi } from "../../Repository/Apis";
import NavWrapper from "../../Helper/NavWrapper";

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
const BookAppointment = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    patientId: id,
    name,
    contactNumber,
    reasonForVisit,
    appointmentDate,
    appointmentTime,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await postApi(setLoading, "employee/createAppointment", payload);
    setName("");
    setContactNumber("");
    setReasonForVisit("");
    setAppointmentDate("");
    setAppointmentTime("");
  };

  return (
    <>
      <NavWrapper title="Book Appointment" isArrow={true} />

      <Container className="full-width-container">
        <form className="text-start" onSubmit={submitHandler}>
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
          <div className="save-as-draft-btn123 hidePrint">
            <button className="btn1233" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default HOC({ Wcomponenet: BookAppointment, isNavbar: false });
