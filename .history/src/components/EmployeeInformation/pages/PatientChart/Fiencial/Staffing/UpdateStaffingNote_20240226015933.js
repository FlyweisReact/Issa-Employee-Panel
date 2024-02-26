/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../../../api/api";
import { SignatureModal } from "../../../../../../Mod/Modal";
import { ClipLoader } from "react-spinners";
import { DateFormatter } from "../../../../../../Helper/Makers";
import { editApi } from "../../../../../../Repository/Apis";
import NavWrapper from "../../../../../../Helper/NavWrapper";

const UpdateStaffingNote = () => {
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
  const { id } = useParams();
  const [details, setDetails] = useState({});

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

  const fetchHandler = () => {
    getData(setDetails, `employee/getStaffingNoteById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    getData(setPatients, `employee/getPatient`);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    editApi(setLoading, `employee/editStaffingNoteById/${id}`, payload);
  };

  const selectHandler = (e) => {
    const obj = JSON.parse(e);
    setPatientId(obj?._id);
    setResidentName(obj?.fullName);
  };

  useEffect(() => {
    if (details) {
      const item = details?.data;
      setPatientId(item?.patientId);
      setResidentName(item?.residentName);
      setDateOfBirth(item?.dateOfBirth);
      setTodayDate(item?.todayDate);
      setBeginTime(item?.beginTime);
      setEndTime(item?.endTime);
      setParticipantsPresent(item?.participantsPresent);
      setPresentingIssues(item?.presentingIssues);
      setProgress(item?.progress);
      setBarriers(item?.barriers);
      setRecommendations(item?.recommendations);
      setStaffSignature(item?.staffSignature);
    }
  }, [details]);

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setStaffSignature}
        value={staffSignature}
        text={"Digitally Sign by employee name"}
      />{" "}
      <NavWrapper isArrow={true} title={"STAFFING NOTE"} />
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
              value={DateFormatter(dateOfBirth)}
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
              value={DateFormatter(todayDate)}
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
              value={beginTime}
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
              value={endTime}
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
              value={participantsPresent}
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
              value={presentingIssues}
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
              value={progress}
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
              value={barriers}
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
              value={recommendations}
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
    </>
  );
};

export default UpdateStaffingNote;