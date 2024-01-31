/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../api/api";
import {
  CheckBoxMaker,
  InputMaker,
  MultiSelect,
} from "../../../../Helper/Makers";
import {
  incidentOptions,
  levelSeverityOptions,
} from "../../../../Constant/Constant";

const Incident2 = () => {
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

  const payload = {
    patientId,
    dateOfIncident,
    timeOfIncident,
    employeesInvolved,
    residentsInvolved,
    personObservingReporting,
    incidents: incidents,
    levelOfSeverity: severityLevel,
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
    savedSignedPartA
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            INCIDENT REPORT
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form className="w-100 text-start">
            <p style={{ fontWeight: "bold" }}>
              Part I – Description of Incident
            </p>
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

            <InputMaker
              label={"Date of Incident"}
              setState={setDateOfIncident}
              placeholder=""
              type={"date"}
              value={dateOfIncident}
            />
            <InputMaker
              label={"Time"}
              setState={setTimeOfIncident}
              placeholder=""
              type={"text"}
              value={timeOfIncident}
            />

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Name of Employee/s Involved:
              </Form.Label>
              <MultiSelect
                options={incidentOptions}
                setValue={setEmployeesInvolved}
                value={employeesInvolved}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Name Resident/s Involved:
              </Form.Label>
              <MultiSelect
                options={incidentOptions}
                setValue={setResidentsInvolved}
                value={residentsInvolved}
              />
            </Form.Group>

            <InputMaker
              label={"Name/Title of Person Observing/Reporting Inciden"}
              setState={setPersonObservingReporting}
              placeholder=""
              type={"text"}
              value={personObservingReporting}
            />

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                INCIDENTS:
              </Form.Label>
              <MultiSelect
                options={incidentOptions}
                setValue={setIncidents}
                value={incidents}
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                LEVEL OF SEVERITY:
              </Form.Label>
              <MultiSelect
                options={levelSeverityOptions}
                setValue={setSeverityLevel}
                value={severityLevel}
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Describe the event in detail: What happened before, during, and
                after the incident
              </Form.Label>
              <Form.Control
                onChange={(e) => setEventDetails(e.target.value)}
                as={"textarea"}
                rows={3}
                placeholder="Enter text"
              />
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
                  setValue={setActionsTakenMaintenanceCalledWorkOrderCompleted}
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
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                If No, Explain:
              </Form.Label>
              <Form.Control
                as="textarea"
                onChange={(e) => setAbuseNeglectInvolvedifYes(e.target.value)}
                rows={3}
                placeholder="Enter text"
              />
            </Form.Group>

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
              INCIDENT REPORTS ARE TO BE COMPLETED AND FORWARDED WITHIN 24 HOURS
              OF INCIDENT TO ADMINISTRATOR
            </p>

            <InputMaker
              label="Date"
              setState={setNotificationDate}
              placeholder=""
              type={"date"}
              value={notificationDate}
            />


<div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
              <div className="save-as-draft-btn w-100">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  SAVE AS DRAFT
                </button>
                <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                  SAVED AND SIGNED
                </button>
              </div>
            </div>


            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
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
                SUBMIT
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Incident2;
