/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../Mod/Modal";
import { getData } from "../../../components/api/api";
import {
  TextareaMaker,
  CheckBoxMaker,
  BorderlessInput,
} from "../../../Helper/Makers";
import { postApi, DateInMMDDYY } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";

const CreateContactNote = () => {
  const [data, setData] = useState({});
  const [patientId, setPatientId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [guardian, setGuardian] = useState("");
  const [caseManager, setCaseManager] = useState("");
  const [pharmacy, setPharmacy] = useState("");
  const [familyMember, setFamilyMember] = useState("");
  const [doctorsOffice, setDoctorsOffice] = useState("");
  const [personContactedOther, setPersonContactedOther] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [phoneCall, setPhoneCall] = useState("");
  const [inPerson, setInPerson] = useState("");
  const [modeOfContactOther, setModeOfContactOther] = useState("");
  const [contactSummaryNote, setContactSummaryNote] = useState("");
  const [emergencyIssue, setEmergencyIssue] = useState(true);
  const [loading, setLoading] = useState(false);
  const [savedSigned, setSavedSigned] = useState("");
  const [open, setOpen] = useState(false);
  const [savedTime, setSavedTime] = useState("");
  const [savedDate, setSavedDate] = useState("");

  useEffect(() => {
    getData(setData, "employee/getPatient");
  }, []);

  const payload = {
    patientId,
    residentName,
    guardian,
    caseManager,
    pharmacy,
    familyMember,
    doctorsOffice,
    personContactedOther,
    contactName,
    email,
    textMessage,
    phoneCall,
    contactSummaryNote,
    inPerson,
    modeOfContactOther,
    emergencyIssue,
    savedSigned,
    signedTime: savedTime,
    signedDate: savedDate,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await postApi(setLoading, `employee/createContactNote`, payload);
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
        setValue={setSavedSigned}
        value={savedSigned}
        setDate={setSavedDate}
        setTime={setSavedTime}
      />
      <NavWrapper title={"Contact Note"} isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <div className="grid-container">
            <div className="grid-item">
              <label>Resident’s Name:</label>
              <select
                className="borderlessSelect"
                onChange={(e) => selectHandler(e.target.value)}
                required
              >
                <option value="">Select</option>
                {data?.data?.map((patient) => (
                  <option key={patient._id} value={JSON.stringify(patient)}>
                    {patient.fullName}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid-item third-wid-input" />
            <div className="grid-item full-wid-input">
              <label>Person contacted:</label>
            </div>
            <div className="grid-item">
              <label>Guardian</label>
              <BorderlessInput
                setState={setGuardian}
                value={guardian}
                type="text"
              />
            </div>

            <div className="grid-item">
              <label>Case Manager</label>
              <BorderlessInput
                setState={setCaseManager}
                value={caseManager}
                type="text"
              />
            </div>

            <div className="grid-item">
              <label>Pharmacy</label>
              <BorderlessInput
                setState={setPharmacy}
                value={pharmacy}
                type="text"
              />
            </div>

            <div className="grid-item">
              <label>Family member</label>
              <BorderlessInput
                setState={setFamilyMember}
                value={familyMember}
                type="text"
              />
            </div>

            <div className="grid-item">
              <label>Doctors office</label>
              <BorderlessInput
                setState={setDoctorsOffice}
                value={doctorsOffice}
                type="text"
              />
            </div>

            <div className="grid-item long-input">
              <label>Other</label>
              <BorderlessInput
                setState={setPersonContactedOther}
                value={personContactedOther}
                type="text"
              />
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <label>Contact Name</label>
              <BorderlessInput
                setState={setContactName}
                value={contactName}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Mode of contact:</label>
            </div>
            <div className="grid-item">
              <label>Email</label>
              <BorderlessInput setState={setEmail} value={email} type="email" />
            </div>

            <div className="grid-item">
              <label>Text message</label>
              <BorderlessInput
                setState={setTextMessage}
                value={textMessage}
                type="text"
              />
            </div>

            <div className="grid-item">
              <label>Phone call</label>
              <BorderlessInput
                setState={setPhoneCall}
                value={phoneCall}
                type="text"
              />
            </div>

            <div className="grid-item">
              <label>In person</label>
              <BorderlessInput
                setState={setInPerson}
                value={inPerson}
                type="text"
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Other, please specify</label>
              <BorderlessInput
                setState={setModeOfContactOther}
                value={modeOfContactOther}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input">
              <TextareaMaker
                label={"Contact Summary Note"}
                setValue={setContactSummaryNote}
                value={contactSummaryNote}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Emergency issue</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setEmergencyIssue}
                    value={true}
                    label="yes"
                    id={"yes"}
                    checked={emergencyIssue}
                  />
                  <CheckBoxMaker
                    setValue={setEmergencyIssue}
                    value={false}
                    label="No"
                    id={"no"}
                    checked={!emergencyIssue}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item  full-wid-input d-block">
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
                  {savedSigned && (
                    <p>
                      Digitally Sign by {savedSigned}{" "}
                      {savedDate && DateInMMDDYY(savedDate)} {savedTime}{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button className="employee_create_btn">
            {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
          </button>
        </form>
      </Container>
    </>
  );
};

export default HOC(CreateContactNote);
