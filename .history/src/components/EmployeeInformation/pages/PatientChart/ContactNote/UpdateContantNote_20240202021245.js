/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  InputMaker,
  TextareaMaker,
  CheckBoxMaker,
} from "../../../../../Helper/Makers";
import { postApi } from "../../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../../../Mod/Modal";

const UpdateContantNote = () => {
  const navigate = useNavigate();
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
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getData(setData, "employee/getPatient");
    getData(setDetails, `employee/getContactNoteById/${id]`);
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
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await postApi(setLoading, `employee/createContactNote`, payload);
    navigate(`/employee/patient-chart/contact-chart`);
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
        text={"Digitally Sign by employee name"}
      />
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/patient-chart/contact-chart")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>CONTACT NOTE</p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form className="w-100 text-start" onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Resident’s Name</Form.Label>
              <Form.Select
                required
                onChange={(e) => selectHandler(e.target.value)}
              >
                <option value="">Select</option>
                {data?.data?.map((patient) => (
                  <option key={patient._id} value={JSON.stringify(patient)}>
                    {patient.fullName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <p className="fw-bolder">Person contacted</p>
            <InputMaker
              label={"Guardian"}
              setState={setGuardian}
              placeholder="Enter text"
              type={"text"}
              value={guardian}
            />
            <InputMaker
              label={"Case Manager"}
              setState={setCaseManager}
              placeholder="Enter text"
              type={"text"}
              value={caseManager}
            />
            <InputMaker
              label={"Pharmacy"}
              setState={setPharmacy}
              placeholder="Enter text"
              type={"text"}
              value={pharmacy}
            />
            <InputMaker
              label={"Family member"}
              setState={setFamilyMember}
              placeholder="Enter text"
              type={"text"}
              value={familyMember}
            />
            <InputMaker
              label={"Doctors office"}
              setState={setDoctorsOffice}
              placeholder="Enter text"
              type={"text"}
              value={doctorsOffice}
            />
            <InputMaker
              label={"Other"}
              setState={setPersonContactedOther}
              placeholder="Enter text"
              type={"text"}
              value={personContactedOther}
            />
            <InputMaker
              label={"Contact Name"}
              setState={setContactName}
              placeholder="Enter text"
              type={"text"}
              value={contactName}
            />
            <p className="fw-bolder">Mode of contact</p>
            <InputMaker
              label={"Email"}
              setState={setEmail}
              placeholder="Enter text"
              type={"text"}
              value={email}
            />
            <InputMaker
              label={"Text message"}
              setState={setTextMessage}
              placeholder="Enter text"
              type={"text"}
              value={textMessage}
            />
            <InputMaker
              label={"Phone call"}
              setState={setPhoneCall}
              placeholder="Enter text"
              type={"tel"}
              value={phoneCall}
            />
            <InputMaker
              label={"In person"}
              setState={setInPerson}
              placeholder="Enter text"
              type={"text"}
              value={inPerson}
            />
            <InputMaker
              label={"Other, please specify"}
              setState={setModeOfContactOther}
              placeholder="Enter text"
              type={"text"}
              value={modeOfContactOther}
            />

            <TextareaMaker
              label={"Contact Summary Note"}
              setValue={setContactSummaryNote}
              placeholder="Enter text"
              value={contactSummaryNote}
            />

            <Form.Group className="mb-3 d-flex flex-wrap gap-2 align-items-center">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Emergency issue :
              </Form.Label>
              <div className="d-flex flex-wrap gap-2 align-items-center">
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
            </Form.Group>

            <div className="cluod_save">
              <div className="main">
                <button className="outlined_btn">SAVE AS DRAFT</button>
                <button
                  type="button"
                  className="filled"
                  onClick={() => setOpen(true)}
                >
                  SAVED AND SIGNED
                </button>
              </div>
            </div>

            <div className="save-as-draft-btn123 mb-3">
              <button className="btn1233" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UpdateContantNote;
