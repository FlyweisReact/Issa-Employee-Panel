/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { getData } from "../../../../../api/api";
import { SignatureModal } from "../../../../../../Mod/Modal";
import { ClipLoader } from "react-spinners";
import { BorderlessInput, BorderlessSelect, DateFormatter, TextareaMaker } from "../../../../../../Helper/Makers";
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
      <Container className="full-width-container">
        <Form onSubmit={submitHandler} className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item long-input ">
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

export default UpdateStaffingNote;
