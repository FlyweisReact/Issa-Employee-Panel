/** @format */

import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  DefaultInput,
  TextareaMaker,
} from "../../../Helper/Makers";
import HOC from "../../../Layout/Inner/HOC";
import { useParams } from "react-router-dom";

const ViewStaffNote = () => {
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
  const [signedDate, setSignedDate] = useState("");
  const [signedTime, setSignedTime] = useState("");
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
    signedTime,
    signedDate,
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

  function filteredResident() {
    const data = patients?.data?.filter((i) => i._id === patientId);
    setResidentName(data?.[0]?.fullName);
  }

  useEffect(() => {
    if (patientId) {
      filteredResident();
    }
  }, [patientId]);

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
      setSignedDate(item?.signedDate);
      setSignedTime(item?.signedTime);
    }
  }, [details]);

  console.log(details);

  return (
    <>
      <NavWrapper isArrow={true} title={"STAFFING NOTE"} />
      <Container className="full-width-container">
        <Form className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item">
              <label>Resident Name:</label>
              <DefaultInput
                value={details?.data?.residentName}
                isBots={false}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item">
              <label>DOB:</label>
              <DefaultInput
                value={DateInMMDDYY(details?.data?.dateOfBirth)}
                isBots={false}
              />
            </div>
            <div className="grid-item">
              <label>Today’s Date:</label>
              <DefaultInput
                value={DateInMMDDYY(details?.data?.todayDate)}
                isBots={false}
              />
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <label> Begin Time:</label>
              <DefaultInput value={details?.data?.beginTime} isBots={false} />
            </div>
            <div className="grid-item">
              <label> End Time:</label>
              <DefaultInput value={details?.data?.endTime} isBots={false} />
            </div>
            <div className="grid-item  full-wid-input">
              <label>Participants Present:</label>
              <DefaultInput
                value={details?.data?.participantsPresent}
                isBots={false}
              />
            </div>
            <div className="grid-item  full-wid-input">
              <label>PRESENTING ISSUE(S):</label>
              <DefaultInput
                value={details?.data?.presentingIssues}
                isBots={false}
              />
            </div>
            <div className="grid-item  full-wid-input">
              <label>PROGRESS:</label>
              <DefaultInput value={details?.data?.progress} isBots={false} />
            </div>
            <div className="grid-item  full-wid-input">
              <label>BARRIER:</label>
              <DefaultInput value={details?.data?.barriers} isBots={false} />
            </div>
            <div className="grid-item  full-wid-input">
              <label>RECOMMENDATIONS:</label>
              <DefaultInput
                value={details?.data?.recommendations}
                isBots={false}
              />
            </div>
            <div className="grid-item  full-wid-input">
              <label>
                Staff Signature:
                {details?.data?.staffSignature && (
                  <p>
                    {details?.data?.staffSignature}{" "}
                    {details?.data?.signedDate &&
                      DateInMMDDYY(details?.data?.signedDate)}{" "}
                    {details?.data?.signedTime}{" "}
                  </p>
                )}
              </label>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default HOC(ViewStaffNote);
