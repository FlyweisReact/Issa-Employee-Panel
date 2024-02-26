/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { getData, postData } from "../../../../../api/api";
import { SignatureModal } from "../../../../../../Mod/Modal";
import { ClipLoader } from "react-spinners";
import NavWrapper from "../../../../../../Helper/NavWrapper";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  TextareaMaker,
} from "../../../../../../Helper/Makers";

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

  function filteredResident() {
    const data = patients?.data?.filter((i) => i._id === patientId);
    setResidentName(data?.[0]?.fullName);
  }

  useEffect(() => {
    if (patientId) {
      filteredResident();
    }
  }, [patientId]);

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setStaffSignature}
        value={staffSignature}
        text={"Digitally Sign by employee name"}
      />
      <NavWrapper isArrow={true} title={"STAFFING NOTE"} />
      <Container className="full-width-container">
        <Form onSubmit={submitHandler} className="w-100 text-start">
          <div className="grid-container mb-3">
            <div class="grid-item long-input ">
              <label>Resident Name:</label>
              <BorderlessSelect
                options={patients?.data?.map((i) => ({
                  value: i._id,
                  label: i.fullName,
                }))}
                setState={setPatientId}
                value={patientId}
              />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <label>DOB:</label>
              <BorderlessInput
                setState={setDateOfBirth}
                placeholder=""
                type={"date"}
                value={DateFormatter(dateOfBirth)}
              />
            </div>
            <div className="grid-item">
              <label>Today’s Date:</label>
              <BorderlessInput
                setState={setTodayDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(todayDate)}
              />
            </div>
            <div className="grid-item">
              <label> Begin Time:</label>
              <BorderlessInput
                setState={setBeginTime}
                placeholder=""
                type={"time"}
                value={beginTime}
              />
            </div>
            <div className="grid-item">
              <label> End Time:</label>
              <BorderlessInput
                setState={setEndTime}
                placeholder=""
                type={"time"}
                value={endTime}
              />
            </div>
          </div>

          <TextareaMaker
            label={"Participants Present/Role:"}
            setValue={setParticipantsPresent}
            value={participantsPresent}
            placeholder=""
            row={2}
          />
          <TextareaMaker
            label={"PRESENTING ISSUE(S):"}
            setValue={setPresentingIssues}
            value={presentingIssues}
            placeholder=""
            row={2}
          />
          <TextareaMaker
            label={"PROGRESS:"}
            setValue={setProgress}
            value={progress}
            placeholder=""
            row={2}
          />
          <TextareaMaker
            label={"BARRIER(S):"}
            setValue={setBarriers}
            value={barriers}
            placeholder=""
            row={2}
          />
          <TextareaMaker
            label={"RECOMMENDATIONS:"}
            setValue={setRecommendations}
            value={recommendations}
            placeholder=""
            row={2}
          />

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
              {staffSignature && <p>Digitally Sign by {staffSignature} </p>}
            </div>
          </div>

          <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Staffing2;
