/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { getData, postData } from "../../../../../api/api";
import { SignatureModal } from "../../../../../../Mod/Modal";
import { ClipLoader } from "react-spinners";
import NavWrapper from '../../../../../../Helper/'

const Staffing2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [open, setOpen] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const [beginTime, setBeginTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [participantsPresent, setParticipantsPresent] = useState("");
  const [presentingIssues, setPresentingIssues] = useState("");
  const [progress, setProgress] = useState("");
  const [barriers, setBarriers] = useState("");
  const [recommendations, setRecommendations] = useState("");
  const [staffSignature, setStaffSignature] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    patientId,
    residentName,
    dateOfBirth,
    todayDate,
    beginTime,
    endTime,
    participantsPresent,
    presentingIssues,
    progress,
    barriers,
    recommendations,
    staffSignature,
  };

  useEffect(() => {
    getData(setPatients, `employee/getPatient`);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    postData(setLoading, "employee/createStaffingNote", payload);
  };

  const selectHandler = (e) => {
    const obj = JSON.parse(e);
    setPatientId(obj?._id);
    setResidentName(obj?.fullName);
  };

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setStaffSignature}
        value={staffSignature}
        text={"Digitally Sign by employee name"}
      />
         <NavWrapper title={"BASIC INFORMATION"} filled={1} empty={4} />
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
      <Container className="full-width-container">
        <div className="top-div-personal">
          <Form onSubmit={submitHandler} className="w-100 text-start">
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Resident Name:
              </Form.Label>
              <Form.Select
                required
                onChange={(e) => selectHandler(e.target.value)}
              >
                <option value={JSON.stringify("")}>Select Patient</option>
                {patients?.data?.map((i) => (
                  <option value={JSON.stringify(i)}>{i.fullName}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                DOB
              </Form.Label>
              <Form.Control
                onChange={(e) => setDateOfBirth(e.target.value)}
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
                onChange={(e) => setTodayDate(e.target.value)}
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
                onChange={(e) => setBeginTime(e.target.value)}
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
                onChange={(e) => setEndTime(e.target.value)}
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
                onChange={(e) => setParticipantsPresent(e.target.value)}
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
                onChange={(e) => setPresentingIssues(e.target.value)}
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
                onChange={(e) => setProgress(e.target.value)}
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
                onChange={(e) => setBarriers(e.target.value)}
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
                onChange={(e) => setRecommendations(e.target.value)}
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
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Staffing2;
