/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../Mod/Modal";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  DateFormatter,
  BorderlessSelect,
} from "../../../Helper/Makers";
import { getData } from "../../../components/api/api";

const CreateDischarge = () => {
  const [patientId, setPatientId] = useState("");
  const [loading, setLoading] = useState(false);
  const [clientName, setClientName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfAdmission, setDateOfAdmission] = useState("");
  const [dateOfDischarge, setDateOfDischarge] = useState("");
  const [presentingIssue, setPresentingIssue] = useState("");
  const [treatmentProvided, setTreatmentProvided] = useState("");
  const [progress, setProgress] = useState("");
  const [medicationUponDischarge, setMedicationUponDischarge] = useState("");
  const [fundsPropertiesUponDischarge, setFundsPropertiesUponDischarge] =
    useState("");
  const [reasonForDischarge, setReasonForDischarge] = useState("");
  const [
    dischargePlanReferralAftercarePlan,
    setDischargePlanReferralAftercarePlan,
  ] = useState("");
  const [patientGuardianSignature, setPatientGuardianSignature] = useState("");
  const [patientGuardianSignatureDate, setPatientGuardianSignatureDate] =
    useState("");
  const [staffNameAndTitle, setStaffNameAndTitle] = useState("");
  const [staffSignature, setStaffSignature] = useState("");
  const [staffSignatureDate, setStaffSignatureDate] = useState("");
  const [bhpNameAndCredentials, setBhpNameAndCredentials] = useState("");
  const [bhpSignature, setBhpSignature] = useState("");
  const [bhpSignatureDate, setBhpSignatureDate] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [patientTime, setPatientTime] = useState("");
  const [staffTime, setStaffTime] = useState("");
  const [bhpTime, setBhpTime] = useState("");
  const [detail, setDetail] = useState({});
  const [ staffSignatureTime , setStaffSignatureTime ] = useState("")
  const [staffSignatureSaveAsDraft ,setStaffSignatureSa]

  useEffect(() => {
    getData(setDetail, "employee/getPatient");
  }, []);

  const initialFormData = {
    patientId,
    clientName,
    dateOfBirth,
    dateOfAdmission,
    dateOfDischarge,
    presentingIssue,
    treatmentProvided,
    progress,
    medicationUponDischarge,
    fundsPropertiesUponDischarge,
    reasonForDischarge,
    dischargePlanReferralAftercarePlan,
    patientGuardianSignature,
    patientGuardianSignatureDate,
    staffNameAndTitle,
    staffSignature,
    staffSignatureDate,
    bhpNameAndCredentials,
    bhpSignature,
    bhpSignatureDate,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createDischargeSummary", initialFormData);
  };

  const patientData = detail?.data?.map((i) => ({
    value: i._id,
    label: i.fullName,
  }));

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setPatientGuardianSignature}
        value={patientGuardianSignature}
        setDate={setPatientGuardianSignatureDate}
        setTime={setPatientTime}
      />
      <SignatureModal
        show={open2}
        onHide={() => setOpen2(false)}
        setValue={setStaffSignature}
        value={staffSignature}
        setDate={setStaffSignatureDate}
        setTime={setStaffTime}
      />
      <SignatureModal
        show={open3}
        onHide={() => setOpen3(false)}
        setValue={setBhpSignature}
        value={bhpSignature}
        setTime={setBhpTime}
        setDate={setBhpSignatureDate}
      />

      <NavWrapper title={"Discharge Summary"} />

      <Container className="full-width-container">
        <form onSubmit={submitHandler} className="text-start w-100">
          <div className="grid-container">
            <div className="grid-item long-input">
              <label>Client Name:</label>
              <BorderlessInput
                setState={setClientName}
                value={clientName}
                type="text"
              />
            </div>
            <div className="grid-item">
              <label>Patient:</label>
              <BorderlessSelect
                options={patientData}
                setState={setPatientId}
                value={patientId}
              />
            </div>

            <div className="grid-item">
              <label>DOB:</label>
              <BorderlessInput
                setState={setDateOfBirth}
                value={DateFormatter(dateOfBirth)}
                type="date"
              />
            </div>

            <div className="grid-item">
              <label>Date of Admission:</label>
              <BorderlessInput
                setState={setDateOfAdmission}
                value={DateFormatter(dateOfAdmission)}
                type="date"
              />
            </div>
            <div className="grid-item third-wid-input" />
            <div className="grid-item">
              <label>Date of Discharge:</label>
              <BorderlessInput
                setState={setDateOfDischarge}
                value={DateFormatter(dateOfDischarge)}
                type="date"
              />
            </div>
            <div className="grid-item third-wid-input" />
            <div className="grid-item">
              <label>Presenting issue:</label>
              <BorderlessInput
                setState={setPresentingIssue}
                value={presentingIssue}
                type="text"
              />
            </div>
            <div className="grid-item third-wid-input" />
            <div className="grid-item long-input">
              <label>Treatment Provided:</label>
              <BorderlessInput
                setState={setTreatmentProvided}
                value={treatmentProvided}
                type="text"
              />
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item long-input">
              <label>Progress:</label>
              <BorderlessInput
                setState={setProgress}
                value={progress}
                type="text"
              />
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item long-input">
              <label>Medication Upon Discharge:</label>
              <BorderlessInput
                setState={setMedicationUponDischarge}
                value={medicationUponDischarge}
                type="text"
              />
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item long-input">
              <label>Funds/Properties Upon Discharge:</label>
              <BorderlessInput
                setState={setFundsPropertiesUponDischarge}
                value={fundsPropertiesUponDischarge}
                type="text"
              />
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item long-input">
              <label>Reason for Discharge:</label>
              <BorderlessInput
                setState={setReasonForDischarge}
                value={reasonForDischarge}
                type="text"
              />
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item long-input">
              <label>Discharge Plan, Referral, and Aftercare Plan:</label>
              <BorderlessInput
                setState={setDischargePlanReferralAftercarePlan}
                value={dischargePlanReferralAftercarePlan}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Patient/Guardian Signature:</label>
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button className="draft">SAVE AS DRAFT</button>
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="signed"
                  >
                    {" "}
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {patientGuardianSignature && (
                    <p>
                      Digitally Sign by {patientGuardianSignature}{" "}
                      {patientGuardianSignatureDate &&
                        DateInMMDDYY(patientGuardianSignatureDate)}{" "}
                      {patientTime}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid-item long-input">
              <label>Staff’s Name and Title:</label>
              <BorderlessInput
                setState={setStaffNameAndTitle}
                value={staffNameAndTitle}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Signature:</label>
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button className="draft">SAVE AS DRAFT</button>
                  <button
                    type="button"
                    onClick={() => setOpen2(true)}
                    className="signed"
                  >
                    {" "}
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {staffSignature && (
                    <p>
                      Digitally Sign by {staffSignature}{" "}
                      {staffSignatureDate && DateInMMDDYY(staffSignatureDate)}
                      {staffTime}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid-item long-input">
              <label>BHP’s Name and Credentials:</label>
              <BorderlessInput
                setState={setBhpNameAndCredentials}
                value={bhpNameAndCredentials}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Signature:</label>
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button className="draft">SAVE AS DRAFT</button>
                  <button
                    type="button"
                    onClick={() => setOpen3(true)}
                    className="signed"
                  >
                    {" "}
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {bhpSignature && (
                    <p>
                      Digitally Sign by {bhpSignature}{" "}
                      {bhpSignatureDate && DateInMMDDYY(bhpSignatureDate)}
                      {bhpTime}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button className="employee_create_btn hidePrint" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
          </button>
        </form>
      </Container>
    </>
  );
};

export default HOC(CreateDischarge);
