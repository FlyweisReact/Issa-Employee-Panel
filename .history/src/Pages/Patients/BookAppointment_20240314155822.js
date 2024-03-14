/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import HOC from "../../Layout/Outer/HOC";

const BookAppointment = () => {
  const navigate = useNavigate();
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
  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            BOOK NEW APPOINTMENT
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form
            style={{ width: "100%" }}
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              Booking Details
            </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Name: :
              </Form.Label>

              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Contact Number
              </Form.Label>
              <Form.Control type="text" placeholder="Type here" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Reason For Visit
              </Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Type here" />
            </Form.Group>

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

export default HOC(BookAppointment);

export default HOC({ Wcomponenet: PatientList });
