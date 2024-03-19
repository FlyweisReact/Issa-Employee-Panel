/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";
import {
  BorderlessInput,
  CheckBoxMaker,
  DateFormatter,
  InputMaker,
  MultiSelect,
  TextareaMaker,
} from "../../../Helper/Makers";
import {
  incidentOptions,
  levelSeverityOptions,
} from "../../../Constant/Constant";
import { SignatureModal } from "../../../Mod/Modal";
import { postApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";

const CreateIncident = () => {
  const navigate = useNavigate();
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
  const [notificationDate, setNotificationDate] = useState("");
  const [reportCompletedBy, setReportCompletedBy] = useState("");
  const [modeEmail, setModeEmail] = useState(false);
  const [modePhoneCall, setModePhoneCall] = useState(false);
  const [modeInPerson, setModeInPerson] = useState(false);
  const [modeOther, setModeOther] = useState(false);
  const [savedSignedPartA, setSavedSignaturePartA] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [employees, setEmployees] = useState({});
  const [type, setType] = useState("PartI");

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
    notificationDate,
    reportCompletedBy,
    modeEmail,
    modePhoneCall,
    modeInPerson,
    modeOther,
    savedSignedPartA,
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
        text={"Digitally Sign by employee name"}
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
              <label>Date of Incident:</label>
              <BorderlessInput
                setState={setDateOfIncident}
                type={"date"}
                value={DateFormatter(dateOfIncident)}
              />
            </div>
            <div className="grid-item long-input" />
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


            <div className="grid-item full-wid-input d-block">
              <label>MEDICATION ERRORS:</label>
            </div>


          </div>

          {type === "PartI" && (
            <Form className="w-100 text-start">
              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                  Resident’s Name: :
                </Form.Label>
                <Form.Select
                  required
                  onChange={(e) => setPatientId(e.target.value)}
                >
                  <option value="">Select</option>
                  {patients?.data?.map((patient) => (
                    <option value={patient._id}>{patient?.fullName}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3 ">
                <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                  MEDICATION ERRORS:
                </Form.Label>
                <div
                  className="d-flex "
                  style={{ flexWrap: "wrap", gap: "1rem" }}
                >
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
                </div>
              </Form.Group>
              <Form.Group className="mb-3 ">
                <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                  Action/s taken: (Check all that apply):
                </Form.Label>
                <div
                  className="d-flex "
                  style={{ flexWrap: "wrap", gap: "1rem" }}
                >
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
              </Form.Group>
              {actionsTakenOther && (
                <Form.Group className="mb-3 ">
                  <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                    Other:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    onChange={(e) => setActionTakerOtherComment(e.target.value)}
                    rows={3}
                    placeholder="Enter text"
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-3 ">
                <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                  If Abuse/Neglect Involved, State Contacted:
                </Form.Label>
                <div
                  className="d-flex "
                  style={{ flexWrap: "wrap", gap: "1rem" }}
                >
                  <CheckBoxMaker
                    setValue={setAbuseNeglectInvolved}
                    value={true}
                    label="Yes"
                    id={"yes"}
                    checked={true === abuseNeglectInvolved}
                  />
                  <CheckBoxMaker
                    setValue={setAbuseNeglectInvolved}
                    value={false}
                    label="No"
                    id={"no"}
                    checked={false === abuseNeglectInvolved}
                  />
                </div>
              </Form.Group>
              {false === abuseNeglectInvolved && (
                <Form.Group className="mb-3 ">
                  <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                    If No, Explain:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    onChange={(e) =>
                      setAbuseNeglectInvolvedifYes(e.target.value)
                    }
                    rows={3}
                    placeholder="Enter text"
                  />
                </Form.Group>
              )}

              <Form.Group className="mb-3 ">
                <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                  Notifications:
                </Form.Label>
                <div
                  className="d-flex "
                  style={{ flexWrap: "wrap", gap: "1rem" }}
                >
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
              </Form.Group>
              <p style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Time of Notification:
              </p>

              <Form.Group className="mb-3 ">
                <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                  Mode of communication:
                </Form.Label>
                <div
                  className="d-flex "
                  style={{ flexWrap: "wrap", gap: "1rem" }}
                >
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
              </Form.Group>

              <InputMaker
                label="Report Completed By"
                setState={setReportCompletedBy}
                placeholder=""
                type={"text"}
                value={reportCompletedBy}
              />

              <p style={{ fontWeight: "500" }}>
                INCIDENT REPORTS ARE TO BE COMPLETED AND FORWARDED WITHIN 24
                HOURS OF INCIDENT TO ADMINISTRATOR
              </p>

              <InputMaker
                label="Date"
                setState={setNotificationDate}
                placeholder=""
                type={"date"}
                value={notificationDate}
              />

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

              <div
                style={{ textAlign: "center", width: "100%", margin: "auto" }}
              >
                <button
                  style={{
                    padding: "10px 24px",
                    backgroundColor: "#1A9FB2",
                    color: "white",
                    marginTop: "1rem",
                  }}
                  type="button"
                >
                  PRINT REPORT
                </button>
              </div>
              <div className="save-as-draft-btn123">
                <button className="btn1233" type="submit">
                  {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
                </button>
              </div>
            </Form>
          )}
        </form>
      </Container>
    </>
  );
};

export default HOC(CreateIncident);
