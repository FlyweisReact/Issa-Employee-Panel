/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../api/api";
import { InputMaker, MultiSelect } from "../../../../Helper/Makers";

const incidentOptions = [
  {
    label: "Altercation/Verbal",
    value: "Altercation/Verbal",
  },
  {
    label: "Altercation/Physical",
    value: "Altercation/Physical",
  },
  {
    label: "Violent Threat/Self",
    value: "Violent Threat/Self",
  },
  {
    label: "Violent Threat/Others",
    value: "Violent Threat/Others",
  },
  {
    label: "Violent Action/Self",
    value: "Violent Action/Self",
  },
  {
    label: "Violent Action/Others",
    value: "Violent Action/Others",
  },
  {
    label: "Trespassing",
    value: "Trespassing",
  },
  {
    label: "Cut/Abrasion",
    value: "Cut/Abrasion",
  },
  {
    label: "Property Loss",
    value: "Property Loss",
  },
  {
    label: "Property Damage",
    value: "Property Damage",
  },
  {
    label: "Vehicular Accident",
    value: "Vehicular Accident",
  },
  {
    label: "Medical Problem/911",
    value: "Medical Problem/911",
  },
  {
    label: "Employee Injury",
    value: "Employee Injury",
  },
  {
    label: "Client/Consumer Injury",
    value: "Client/Consumer Injury",
  },
  {
    label: "Procedural Break",
    value: "Procedural Break",
  },
  {
    label: "Pharmacy Error",
    value: "Pharmacy Error",
  },
  {
    label: "Weapon",
    value: "Weapon",
  },
  {
    label: "Contraband",
    value: "Contraband",
  },
  {
    label: "Alcohol/Drug Use",
    value: "Alcohol/Drug Use",
  },
  {
    label: "Equipment/Utility Failure",
    value: "Equipment/Utility Failure",
  },
  {
    label: "Bio-hazardous Material",
    value: "Bio-hazardous Material",
  },
  {
    label: "AMA",
    value: "AMA",
  },
  {
    label: "Slip/Fall",
    value: "Slip/Fall",
  },
  {
    label: "Rule Violation",
    value: "Rule Violation",
  },
  {
    label: "Seizure",
    value: "Seizure",
  },
  {
    label: "",
    value: "Seizure",
  },
];

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
  const [abuseNeglectInvolved, setAbuseNeglectInvolved] = useState(false);
  const [abuseNeglectInvolvedifYes, setAbuseNeglectInvolvedifYes] =
    useState("");
  const [notificationsFamily, setNotificationsFamily] = useState(false);
  const [notificationsGuardian, setNotificationsGuardian] = useState(false);
  const [notificationsCaseManager, setNotificationsCaseManager] =
    useState(false);
  const [notificationsOther, setNotificationsOther] = useState(false);
  const [notificationIfOther, setNotificationIfOther] = useState("");
  const [notificationDate, setNotificationDate] = useState("");
  const [notificationTime, setNotificationTime] = useState("");
  const [reportCompletedBy, setReportCompletedBy] = useState("");

  const handleChange = (e) => {};
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
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Name Resident/s Involved:
              </Form.Label>
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
              <Form.Select
                name="eventDetails"
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option>Select</option>
                <option value="1">Critical/Immediate Attention Required</option>
                <option value="2">Serious/Attention Required</option>
                <option value="3">No Medical Attention Required</option>
              </Form.Select>
              {/* <Form.Control type="text" placeholder="Enter text" /> */}
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Describe the event in detail: What happened before, during, and
                after the incident
              </Form.Label>
              <Form.Control
                name="eventDetails"
                onChange={handleChange}
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
                <Form.Check
                  name="medicationErrorsMissedDose"
                  onChange={handleChange}
                  checked={FormData.medicationErrorsMissedDose}
                  type="checkbox"
                  id={`Outings`}
                  label="Missed Dose"
                />
                <Form.Check
                  type="checkbox"
                  id={`Outings`}
                  label="Refused Medication"
                />
                <Form.Check
                  name="medicationErrorsWrongClient"
                  onChange={handleChange}
                  checked={FormData.medicationErrorsWrongClient}
                  type="checkbox"
                  id={`Outings`}
                  label="Wrong Client"
                />
                <Form.Check
                  name="medicationErrorsWrongTime"
                  onChange={handleChange}
                  checked={FormData.medicationErrorsWrongTime}
                  type="checkbox"
                  id={`Outings`}
                  label="Wrong Time"
                />
                <Form.Check
                  name="medicationErrorsWrongMed"
                  onChange={handleChange}
                  checked={FormData.medicationErrorsWrongMed}
                  type="checkbox"
                  id={`Outings`}
                  label="Wrong Med"
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
                <Form.Check
                  type="checkbox"
                  name="actionTakenSentToER"
                  onChange={handleChange}
                  checked={FormData.actionTakenSentToER}
                  label="Sent to ER/Hospital"
                />
                <Form.Check
                  type="checkbox"
                  name="medicationErrorsRefusedMedication"
                  onChange={handleChange}
                  checked={FormData.medicationErrorsRefusedMedication}
                  label="Refused Medication"
                />
                <Form.Check
                  type="checkbox"
                  name="actionsTakenFirstAid"
                  onChange={handleChange}
                  checked={FormData.actionsTakenFirstAid}
                  label="First Aid"
                />
                <Form.Check
                  type="checkbox"
                  name="actionsTakenNoMedicalCareRequired"
                  onChange={handleChange}
                  checked={FormData.actionsTakenNoMedicalCareRequired}
                  label="No Medical Care Required"
                />
                <Form.Check
                  type="checkbox"
                  name="actionsTakenCareRefused"
                  onChange={handleChange}
                  checked={FormData.actionsTakenCareRefused}
                  label="Care Refused"
                />
                <Form.Check
                  type="checkbox"
                  name="actionsTakenFireDepartmentCalled"
                  onChange={handleChange}
                  checked={FormData.actionsTakenFireDepartmentCalled}
                  label="Fire Department Called"
                />
                <Form.Check
                  type="checkbox"
                  name="actionsTakenOther"
                  onChange={handleChange}
                  checked={FormData.actionsTakenOther}
                  id={`Outings`}
                  label="Care Refused"
                />
              </div>
              <div
                className="d-flex "
                style={{ flexWrap: "wrap", gap: "1rem" }}
              >
                <Form.Check
                  type="checkbox"
                  onChange={handleChange}
                  checked={FormData.actionsTakenPoliceCalled}
                  name="actionsTakenPoliceCalled"
                  label="Police Called"
                />
                <Form.Check
                  type="checkbox"
                  name="actionsTakenReferredToRiskManagement"
                  onChange={handleChange}
                  checked={FormData.actionsTakenReferredToRiskManagement}
                  label="Referred to Administrator/Risk Management"
                />
                <Form.Check type="checkbox" id={`Outings`} label="First Aid" />
                <Form.Check
                  type="checkbox"
                  name="actionsTakenMaintenanceCalledWorkOrderCompleted"
                  onChange={handleChange}
                  checked={
                    FormData.actionsTakenMaintenanceCalledWorkOrderCompleted
                  }
                  label="Maintenance Called/Work Order Completed"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Other:
              </Form.Label>
              <Form.Control
                name="actionsTakenOther"
                onChange={handleChange}
                as={"textarea"}
                rows={3}
                placeholder="Enter text"
              />
            </Form.Group>
            <p>
              If Abuse/Neglect Involved, State Contacted:
              <Form.Check
                type="checkbox"
                name="abuseNeglectInvolved"
                onChange={handleChange}
                checked={FormData.abuseNeglectInvolved}
                id={`Outings`}
                label="Yes"
              />
              <Form.Check type="checkbox" id={`Outings`} label="No" />
            </p>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                If No, Explain:
              </Form.Label>
              <Form.Control
                as="textarea"
                name="abuseNeglectInvolvedifYes"
                onChange={handleChange}
                rows={3}
                placeholder="Enter text"
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Notifications:
              </Form.Label>
              <div className="d-flex ">
                <Form.Check
                  name="notificationsOther"
                  onChange={handleChange}
                  checked={FormData.notificationsOther}
                  type="checkbox"
                  id={`Outings`}
                  label="Yes"
                />
                <Form.Check
                  type="checkbox"
                  name="notificationsOther"
                  onChange={handleChange}
                  checked={FormData.notificationsOther}
                  label="No"
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
              <div className="d-flex ">
                <Form.Check type="checkbox" id={`Outings`} label="Email" />
                <Form.Check type="checkbox" id={`Outings`} label="Phone Call" />
                <Form.Check type="checkbox" id={`Outings`} label="In Person" />
                <Form.Check type="checkbox" id={`Outings`} label="Other" />
              </div>
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Report Completed By:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>
            <p style={{ fontWeight: "500" }}>
              INCIDENT REPORTS ARE TO BE COMPLETED AND FORWARDED WITHIN 24 HOURS
              OF INCIDENT TO ADMINISTRATOR
            </p>

            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                }}
                type="submit"
              >
                PRINT REPORT
              </button>
            </div>
            <div className="save-as-draft-btn123">
              <button onClick={submitHandler} className="btn1233" type="submit">
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
