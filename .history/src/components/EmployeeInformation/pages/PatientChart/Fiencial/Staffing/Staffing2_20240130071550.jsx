/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData, postData } from "../../../../../api/api";
import { SignatureModal } from "../../../../../../Mod/Modal";

const Staffing2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [open, setOpen] = useState(false);
  const [signatue, setSignatur] = useState("");

  const [appointmentData, setAppointmentData] = useState({
    patientId: "",
    residentName: "",
    dateOfBirth: "",
    todayDate: "",
    beginTime: "",
    endTime: "",
    participantsPresent: "",
    presentingIssues: "",
    progress: "",
    barriers: "",
    recommendations: "",
    staffSignature: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "patientId") {
      setAppointmentData((prevData) => ({
        ...prevData,
        [name]: value,
        residentName: patients?.data?.find((patient) => patient._id === value)
          ?.fullName,
      }));
    }
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    getData(setPatients, `employee/getPatient`);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    postData("employee/createStaffingNote", appointmentData);
  };

  console.log(signatue);
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
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>STAFFING NOTE</p>
          <p></p>
        </div>
      </div>
      <div>
        <SignatureModal
          show={open}
          onHide={() => setOpen(false)}
          setValue={setSignatur}
          value={signatue}
        />
        <div className="top-div-personal">
          <Form onSubmit={submitHandler} className="w-100 text-start">
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Resident Name:
              </Form.Label>
              <Form.Select required name="patientId" onChange={handleChange}>
                <option value="">Select Patient</option>
                {patients?.data?.map((patient) => (
                  <option value={patient._id}>{patient.fullName}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                DOB
              </Form.Label>
              <Form.Control
                name="dateOfBirth"
                onChange={handleChange}
                type="date"
                required
                placeholder="Enter text"
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Today’s Date
              </Form.Label>
              <Form.Control
                name="todayDate"
                onChange={handleChange}
                type="date"
                required
                placeholder="Enter text"
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Begin Time
              </Form.Label>
              <Form.Control
                name="beginTime"
                onChange={handleChange}
                type="text"
                required
                placeholder="Enter text"
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                End Time
              </Form.Label>
              <Form.Control
                name="endTime"
                onChange={handleChange}
                required
                type="text"
                placeholder="Enter text"
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Participants Present/Role
              </Form.Label>
              <Form.Control
                name="participantsPresent"
                onChange={handleChange}
                as="textarea"
                rows={3}
                required
                placeholder="Enter text"
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                PRESENTING ISSUE(S)
              </Form.Label>
              <Form.Control
                name="presentingIssues"
                onChange={handleChange}
                as="textarea"
                rows={3}
                required
                placeholder="Enter text"
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                PROGRESS
              </Form.Label>
              <Form.Control
                name="progress"
                onChange={handleChange}
                as="textarea"
                rows={3}
                required
                placeholder="Enter text"
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                BARRIER(S)
              </Form.Label>
              <Form.Control
                name="barriers"
                onChange={handleChange}
                as="textarea"
                rows={3}
                required
                placeholder="Enter text"
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                RECOMMENDATIONS
              </Form.Label>
              <Form.Control
                name="recommendations"
                onChange={handleChange}
                as="textarea"
                rows={3}
                required
                placeholder="Enter text"
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Staff Signature
              </Form.Label>
              <Form.Control
                name="staffSignature"
                onChange={handleChange}
                type="text"
                required
                placeholder="Enter text"
              />
            </Form.Group>
            <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
              <div className="save-as-draft-btn w-100">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                  type="button"
                >
                  SAVE AS DRAFT
                </button>
                {console.log(open)}
                <button
                  type="button"
                  style={{ backgroundColor: "#0C5C75", color: "white" }}
                  onClick={() => setOpen(true)}
                >
                  SAVED AND SIGNED
                </button>
              </div>
            </div>

            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                SUBMIT
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Staffing2;
