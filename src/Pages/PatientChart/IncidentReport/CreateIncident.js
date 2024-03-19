/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";
import {
  BorderlessInput,
  BorderlessSelect,
  CheckBoxMaker,
  DateFormatter,
  MultiSelect,
  TextareaMaker,
} from "../../../Helper/Makers";
import {
  incidentOptions,
  levelSeverityOptions,
} from "../../../Constant/Constant";
import { SignatureModal } from "../../../Mod/Modal";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";

const CreateIncident = () => {
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [dateOfIncident, setDateOfIncident] = useState("");
  const [timeOfIncident, setTimeOfIncident] = useState("");
  const [employeesInvolved, setEmployeesInvolved] = useState([]);
  const [residentsInvolved, setResidentsInvolved] = useState([]);
  const [personObservingReporting, setPersonObservingReporting] = useState("");
  const [incidents, setIncidents] = useState([]);
  const [severityLevel, setSeverityLevel] = useState([]);
  const [eventDetails, setEventDetails] = useState("");
  const [medicationErrorsMissedDose, setMedicationErrorsMissedDose] =
    useState(true);
  const [
    medicationErrorsRefusedMedication,
    setMedicationErrorsRefusedMedication,
  ] = useState(false);
  const [medicationErrorsWrongClient, setMedicationErrorsWrongClient] =
    useState(false);
  const [medicationErrorsWrongTime, setMedicationErrorsWrongTime] =
    useState(false);
  const [medicationErrorsWrongMed, setMedicationErrorsWrongMed] =
    useState(false);
  const [medicationErrorsNone, setMedicationErrorsNone] = useState(false);

  const [actionsTakenSenttoERHospital, setActionsTakenSenttoERHospital] =
    useState(false);
  const [actionsTakenFirstAid, setActionsTakenFirstAid] = useState(false);
  const [
    actionsTakenNoMedicalCareRequired,
    setActionsTakenNoMedicalCareRequired,
  ] = useState(false);
  const [careRefused, setCareRefused] = useState(false);
  const [
    actionsTakenFireDepartmentCalled,
    setActionsTakenFireDepartmentCalled,
  ] = useState(false);
  const [actionsTakenPoliceCalled, setActionsTakenPoliceCalled] =
    useState(true);
  const [
    actionsTakenReferredtoAdministratorRiskManagement,
    setActionsTakenReferredtoAdministratorRiskManagement,
  ] = useState(false);
  const [
    actionsTakenMaintenanceCalledWorkOrderCompleted,
    setActionsTakenMaintenanceCalledWorkOrderCompleted,
  ] = useState(false);

  const [actionsTakenOther, setActionsTakenOther] = useState(false);
  const [actionsTakenOtherComment, setActionTakerOtherComment] = useState("");
  const [abuseNeglectInvolved, setAbuseNeglectInvolved] = useState(false);
  const [abuseNeglectInvolvedifYes, setAbuseNeglectInvolvedifYes] =
    useState("");
  const [notificationsFamily, setNotificationsFamily] = useState(false);
  const [notificationsGuardian, setNotificationsGuardian] = useState(false);
  const [notificationsCaseManager, setNotificationsCaseManager] =
    useState(false);
  const [reportCompletedBy, setReportCompletedBy] = useState("");
  const [modeEmail, setModeEmail] = useState(false);
  const [modePhoneCall, setModePhoneCall] = useState(false);
  const [modeInPerson, setModeInPerson] = useState(false);
  const [modeOther, setModeOther] = useState(false);
  const [savedSignedPartA, setSavedSignaturePartA] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [employees, setEmployees] = useState({});
  const [signedDate, setSignedDate] = useState("");
  const [signedTime, setSignedTime] = useState("");

  const payload = {
    patientId,
    dateOfIncident,
    timeOfIncident,
    employeesInvolved: employeesInvolved?.map((i) => i.value),
    residentsInvolved: residentsInvolved?.map((i) => i.value),
    personObservingReporting,
    incidents: incidents?.map((i) => i.value),
    levelOfSeverity: severityLevel?.map((i) => i.value),
    eventDetails,
    medicationErrorsMissedDose,
    medicationErrorsRefusedMedication,
    medicationErrorsWrongClient,
    medicationErrorsWrongTime,
    medicationErrorsWrongMed,
    actionsTakenSenttoERHospital,
    actionsTakenFirstAid,
    actionsTakenNoMedicalCareRequired,
    careRefused,
    actionsTakenFireDepartmentCalled,
    actionsTakenPoliceCalled,
    actionsTakenReferredtoAdministratorRiskManagement,
    actionsTakenMaintenanceCalledWorkOrderCompleted,
    actionsTakenOther,
    actionsTakenOtherComment,
    abuseNeglectInvolved,
    abuseNeglectInvolvedifYes,
    notificationsFamily,
    notificationsCaseManager,
    notificationsGuardian,
    reportCompletedBy,
    modeEmail,
    modePhoneCall,
    modeInPerson,
    modeOther,
    savedSignedPartA,
    medicationErrorsNone,
    signedDatePartA: signedDate,
    signedTimePartA: signedTime,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await postApi(setLoading, `employee/createIncidentReportPartA`, payload);
  };

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
    getData(setEmployees, "employee/getEmployee");
  }, []);

  const employeeOptions = employees?.data?.map((i) => ({
    label: i.fullName,
    value: i._id,
  }));
  const residentOptions = patients?.data?.map((i) => ({
    label: i.fullName,
    value: i._id,
  }));

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSavedSignaturePartA}
        value={savedSignedPartA}
        setDate={setSignedDate}
        setTime={setSignedTime}
      />
      <NavWrapper title={"INCIDENT REPORT"} isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <p
            className="fw-bold text-desc"
            style={{ color: "red", textDecoration: "underline" }}
          >
            {" "}
            Part I – Description of Incident
          </p>

          <div className="grid-container">
            <div className="grid-item">
              <label>Resident’s Name:</label>

              <BorderlessSelect
                setState={setPatientId}
                value={patientId}
                options={residentOptions}
              />
            </div>
            <div className="grid-item " />
            <div className="grid-item">
              <label>Date of Incident:</label>
              <BorderlessInput
                setState={setDateOfIncident}
                type={"date"}
                value={DateFormatter(dateOfIncident)}
              />
            </div>

            <div className="grid-item">
              <label>Time:</label>
              <BorderlessInput
                setState={setTimeOfIncident}
                type={"time"}
                value={timeOfIncident}
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Name of Employee/s Involved:</label>
              <MultiSelect
                options={employeeOptions}
                setValue={setEmployeesInvolved}
                value={employeesInvolved}
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Name Resident/s Involved:</label>
              <MultiSelect
                options={residentOptions}
                setValue={setResidentsInvolved}
                value={residentsInvolved}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Name/Title of Person Observing/Reporting Incident:</label>
              <BorderlessInput
                setState={setPersonObservingReporting}
                type={"text"}
                value={personObservingReporting}
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>INCIDENTS:</label>
              <MultiSelect
                options={incidentOptions}
                setValue={setIncidents}
                value={incidents}
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>LEVEL OF SEVERITY:</label>
              <MultiSelect
                options={levelSeverityOptions}
                setValue={setSeverityLevel}
                value={severityLevel}
              />
            </div>

            <div className="grid-item full-wid-input">
              <TextareaMaker
                label={
                  "Describe the event in detail: What happened before, during, and after the incident"
                }
                setValue={setEventDetails}
                value={eventDetails}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>MEDICATION ERRORS:</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setMedicationErrorsMissedDose}
                    value={!medicationErrorsMissedDose}
                    label="Missed Dose"
                    id={"MissedOne"}
                    checked={medicationErrorsMissedDose}
                  />
                  <CheckBoxMaker
                    setValue={setMedicationErrorsRefusedMedication}
                    value={!medicationErrorsRefusedMedication}
                    label="Refused Medication"
                    id={"RefusedMedication"}
                    checked={medicationErrorsRefusedMedication}
                  />
                  <CheckBoxMaker
                    setValue={setMedicationErrorsWrongClient}
                    value={!medicationErrorsWrongClient}
                    label="Wrong Client"
                    id={"WrongClient"}
                    checked={medicationErrorsWrongClient}
                  />
                  <CheckBoxMaker
                    setValue={setMedicationErrorsWrongTime}
                    value={!medicationErrorsWrongTime}
                    label="Wrong Time"
                    id={"WrongTime"}
                    checked={medicationErrorsWrongTime}
                  />
                  <CheckBoxMaker
                    setValue={setMedicationErrorsWrongMed}
                    value={!medicationErrorsWrongMed}
                    label="Wrong Med"
                    id={"WrongMed"}
                    checked={medicationErrorsWrongMed}
                  />
                  <CheckBoxMaker
                    setValue={setMedicationErrorsNone}
                    value={!medicationErrorsNone}
                    label="None"
                    id={"ErrorNone"}
                    checked={medicationErrorsNone}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Action/s taken: (Check all that apply):</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setActionsTakenSenttoERHospital}
                    value={!actionsTakenSenttoERHospital}
                    label="Sent to ER/Hospital"
                    id={"SenttoERHospital"}
                    checked={actionsTakenSenttoERHospital}
                  />
                  <CheckBoxMaker
                    setValue={setActionsTakenFirstAid}
                    value={!actionsTakenFirstAid}
                    label="First Aid"
                    id={"FirstAid"}
                    checked={actionsTakenFirstAid}
                  />
                  <CheckBoxMaker
                    setValue={setActionsTakenNoMedicalCareRequired}
                    value={!actionsTakenNoMedicalCareRequired}
                    label="No Medical Care Required"
                    id={"NoMedicalCareRequired"}
                    checked={actionsTakenNoMedicalCareRequired}
                  />
                  <CheckBoxMaker
                    setValue={setCareRefused}
                    value={!careRefused}
                    label="Care Refused"
                    id={"CareRefused"}
                    checked={careRefused}
                  />
                  <CheckBoxMaker
                    setValue={setActionsTakenFireDepartmentCalled}
                    value={!actionsTakenFireDepartmentCalled}
                    label="Fire Department Called"
                    id={"FireDepartmentCalled"}
                    checked={actionsTakenFireDepartmentCalled}
                  />
                  <CheckBoxMaker
                    setValue={setActionsTakenPoliceCalled}
                    value={!actionsTakenPoliceCalled}
                    label="Police Called"
                    id={"PoliceCalled"}
                    checked={actionsTakenPoliceCalled}
                  />
                  <CheckBoxMaker
                    setValue={
                      setActionsTakenReferredtoAdministratorRiskManagement
                    }
                    value={!actionsTakenReferredtoAdministratorRiskManagement}
                    label="Referred to Administrator/Risk Management"
                    id={"ReferredtoAdministrator/RiskManagement"}
                    checked={actionsTakenReferredtoAdministratorRiskManagement}
                  />
                  <CheckBoxMaker
                    setValue={
                      setActionsTakenMaintenanceCalledWorkOrderCompleted
                    }
                    value={!actionsTakenMaintenanceCalledWorkOrderCompleted}
                    label="Maintenance Called/Work Order Completed"
                    id={"MaintenanceCalled/WorkOrderCompleted"}
                    checked={actionsTakenMaintenanceCalledWorkOrderCompleted}
                  />
                  <CheckBoxMaker
                    setValue={setActionsTakenOther}
                    value={!actionsTakenOther}
                    label="Other"
                    id={"Other"}
                    checked={actionsTakenOther}
                  />
                </div>
              </div>
            </div>

            {actionsTakenOther && (
              <div className="grid-item full-wid-input">
                <label>Other:</label>
                <BorderlessInput
                  setState={setActionTakerOtherComment}
                  type={"text"}
                  value={actionsTakenOtherComment}
                />
              </div>
            )}

            <div className="grid-item full-wid-input">
              <label>If Abuse/Neglect Involved, State Contacted:</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setAbuseNeglectInvolved}
                    value={true}
                    label="Yes"
                    id={"yes"}
                    checked={abuseNeglectInvolved === true}
                  />
                  <CheckBoxMaker
                    setValue={setAbuseNeglectInvolved}
                    value={false}
                    label="No"
                    id={"no"}
                    checked={abuseNeglectInvolved === false}
                  />
                </div>
              </div>
            </div>

            {!abuseNeglectInvolved && (
              <div className="grid-item full-wid-input">
                <label>If No, Explain:</label>
                <BorderlessInput
                  setState={setAbuseNeglectInvolvedifYes}
                  type={"text"}
                  value={abuseNeglectInvolvedifYes}
                />
              </div>
            )}

            <div className="grid-item full-wid-input">
              <label>Notifications:</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setNotificationsFamily}
                    value={!notificationsFamily}
                    label="Family"
                    id={"Family"}
                    checked={notificationsFamily}
                  />
                  <CheckBoxMaker
                    setValue={setNotificationsGuardian}
                    value={!notificationsGuardian}
                    label="Guardian"
                    id={"Guardian"}
                    checked={notificationsGuardian}
                  />
                  <CheckBoxMaker
                    setValue={setNotificationsCaseManager}
                    value={!notificationsCaseManager}
                    label="Case Manage"
                    id={"CaseManager"}
                    checked={notificationsCaseManager}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Time of Notification:</label>
            </div>

            <div className="grid-item full-wid-input">
              <label> Mode of communication:</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setModeEmail}
                    value={!modeEmail}
                    label="Email"
                    id={"Email"}
                    checked={modeEmail}
                  />
                  <CheckBoxMaker
                    setValue={setModePhoneCall}
                    value={!modePhoneCall}
                    label="Phone Call"
                    id={"PhoneCall"}
                    checked={modePhoneCall}
                  />
                  <CheckBoxMaker
                    setValue={setModeInPerson}
                    value={!modeInPerson}
                    label="In Person"
                    id={"InPerson"}
                    checked={modeInPerson}
                  />
                  <CheckBoxMaker
                    setValue={setModeOther}
                    value={!modeOther}
                    label="Other"
                    id={"Other_mode"}
                    checked={modeOther}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Report Completed By:</label>
              <BorderlessInput
                setState={setReportCompletedBy}
                type={"text"}
                value={reportCompletedBy}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>
                INCIDENT REPORTS ARE TO BE COMPLETED AND FORWARDED WITHIN 24
                HOURS OF INCIDENT TO ADMINISTRATOR
              </label>
            </div>

            <div className="grid-item full-wid-input d-block">
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
                  {savedSignedPartA && (
                    <p>
                      Digitally Sign by {savedSignedPartA}{" "}
                      {signedDate && DateInMMDDYY(signedDate)} {signedTime}{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button className="employee_create_btn" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
          </button>
        </form>
      </Container>
    </>
  );
};

export default HOC(CreateIncident);
