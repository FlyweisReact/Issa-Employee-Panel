import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
import { showMsg } from "../../../api/ShowMsg";
const Incident2 = () => {
  const navigate = useNavigate();
  const initialData = {
    patientId: "",
    dateOfIncident: "",
    timeOfIncident: "",
    employeesInvolved: [],
    residentsInvolved: [],
    personObservingReporting: "",
    incidentsAltercationVerbal: false,
    incidentsPropertyLoss: false,
    incidentsWeapon: false,
    incidentsRuleViolation: false,
    eventDetails: "",
    medicationErrorsMissedDose: false,
    medicationErrorsRefusedMedication: false,
    medicationErrorsWrongClient: false,
    medicationErrorsWrongTime: false,
    medicationErrorsWrongMed: false,
    actionsTakenSenttoERHospital: false,
    actionsTakenFirstAid: false,
    actionsTakenNoMedicalCareRequired: false,
    CareRefused: false,
    actionsTakenFireDepartmentCalled: false,
    actionsTakenPoliceCalled: false,
    actionsTakenReferredtoAdministratorRiskManagement: false,
    actionsTakenMaintenanceCalledWorkOrderCompleted: false,
    actionsTakenOther: false,
    abuseNeglectInvolved: false,
    abuseNeglectInvolvedifYes: "",
    notificationsFamily: false,
    notificationsGuardian: false,
    notificationsCaseManager: false,
    notificationsOther: false,
    notificationIfOther: "",
    notificationDate: "",
    notificationTime: "",
    reportCompletedBy: ""
  };

  const [incidentData, setIncidentData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setIncidentData((prevData) => ({
        ...prevData,
        [name]: checked
      }));
    } else {
      setIncidentData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(incidentData);
    // if (Object.keys(incidentData).filter((key) => incidentData[key] === "").length > 0) {
    //   return showMsg("Error", `${Object.keys(incidentData).filter((key) => incidentData[key] === "").join(",")}  cannot be empty`, "danger")
    // }
  }
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
          <p style={{ fontWeight: "bold" }}>Part I – Description of Incident</p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date of Incident:
            </Form.Label>
            <Form.Control name="dateOfIncident" onChange={handleChange} type="date" placeholder="Enter text" />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Time:
            </Form.Label>
            <Form.Control name="timeOfIncident" onChange={handleChange} type="time" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Name of Employee/s Involved:
            </Form.Label>
            <Form.Control type="text" onChange={handleChange} name="employeesInvolved" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Name Resident/s Involved:
            </Form.Label>
            <Form.Control name="residentsInvolved" onChange={handleChange} type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Name/Title of Person Observing/Reporting Incident:
            </Form.Label>
            <Form.Control name="personObservingReporting" onChange={handleChange} type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              INCIDENTS:  
            </Form.Label>
            <Form.Select name="eventDetails" onChange={handleChange} aria-label="Default select example">
              <option>Select</option>
              <option value="1">Altercation/Verbal</option>
              <option value="2">Altercation/Physical</option>
              <option value="3">Violent Threat/Self</option>
              <option value="3">Violent Threat/Others</option>
              <option value="3">Violent Action/Self</option>
              <option value="3">Violent Action/Others</option>
              <option value="3">Trespassing</option>
              <option value="3">Cut/Abrasion</option>
              <option value="3">Property Loss</option>
              <option value="3">Property Damage</option>
            </Form.Select>
            {/* <Form.Control type="text" placeholder="Enter text" /> */}
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              LEVEL OF SEVERITY:
            </Form.Label>
            <Form.Select name="eventDetails" onChange={handleChange} aria-label="Default select example">
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
            <Form.Control name="eventDetails" onChange={handleChange} as={"textarea"} rows={3} placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              MEDICATION ERRORS:
            </Form.Label>
            <div className="d-flex " style={{ flexWrap: "wrap", gap: "1rem" }}>
              <Form.Check name="medicationErrorsMissedDose" onChange={handleChange} checked={FormData.medicationErrorsMissedDose} type="checkbox" id={`Outings`} label="Missed Dose" />
              <Form.Check
                type="checkbox"
                id={`Outings`}
                label="Refused Medication"
              />
              <Form.Check name="medicationErrorsWrongClient" onChange={handleChange} checked={FormData.medicationErrorsWrongClient} type="checkbox" id={`Outings`} label="Wrong Client" />
              <Form.Check name="medicationErrorsWrongTime" onChange={handleChange} checked={FormData.medicationErrorsWrongTime} type="checkbox" id={`Outings`} label="Wrong Time" />
              <Form.Check name="medicationErrorsWrongMed" onChange={handleChange} checked={FormData.medicationErrorsWrongMed} type="checkbox" id={`Outings`} label="Wrong Med" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Action/s taken: (Check all that apply):
            </Form.Label>
            <div className="d-flex " style={{ flexWrap: "wrap", gap: "1rem" }}>
              <Form.Check
                type="checkbox"
               name="actionTakenSentToER" onChange={handleChange} checked={FormData.actionTakenSentToER} 
                label="Sent to ER/Hospital"
              />
              <Form.Check
                type="checkbox"
              name="medicationErrorsRefusedMedication" onChange={handleChange} checked={FormData.medicationErrorsRefusedMedication}
                label="Refused Medication"
              />
              <Form.Check type="checkbox" 
              name="actionsTakenFirstAid" onChange={handleChange} checked={FormData.actionsTakenFirstAid}
               label="First Aid" />
              <Form.Check
                type="checkbox"
               name="actionsTakenNoMedicalCareRequired" onChange={handleChange} checked={FormData.actionsTakenNoMedicalCareRequired}
                label="No Medical Care Required"
              />
              <Form.Check type="checkbox" 
              name="actionsTakenCareRefused" onChange={handleChange} checked={FormData.actionsTakenCareRefused} label="Care Refused" />
              <Form.Check
                type="checkbox"
                name="actionsTakenFireDepartmentCalled" onChange={handleChange} checked={FormData.actionsTakenFireDepartmentCalled}
                label="Fire Department Called"
              />
              <Form.Check type="checkbox" name="actionsTakenOther" onChange={handleChange} checked={FormData.actionsTakenOther}  id={`Outings`} label="Care Refused" />
            </div>
            <div className="d-flex " style={{ flexWrap: "wrap", gap: "1rem" }}>
              <Form.Check
                type="checkbox"
                 onChange={handleChange} checked={FormData.actionsTakenPoliceCalled} name="actionsTakenPoliceCalled"
                label="Police Called"
              />
              <Form.Check
                type="checkbox"
name="actionsTakenReferredToRiskManagement" onChange={handleChange} checked={FormData.actionsTakenReferredToRiskManagement}

                label="Referred to Administrator/Risk Management"
              />
              <Form.Check type="checkbox" id={`Outings`} label="First Aid" />
              <Form.Check
                type="checkbox"
                name="actionsTakenMaintenanceCalledWorkOrderCompleted" onChange={handleChange} checked={FormData.actionsTakenMaintenanceCalledWorkOrderCompleted}
                label="Maintenance Called/Work Order Completed"
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Other:
            </Form.Label>
            <Form.Control name="actionsTakenOther" onChange={handleChange}  as={"textarea"} rows={3} placeholder="Enter text" />
          </Form.Group>
          <p>
            If Abuse/Neglect Involved, State Contacted:
            <Form.Check type="checkbox" name="abuseNeglectInvolved" onChange={handleChange} checked={FormData.abuseNeglectInvolved} id={`Outings`} label="Yes" />
            <Form.Check type="checkbox" id={`Outings`} label="No" />
          </p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              If No, Explain:
            </Form.Label>
            <Form.Control as="textarea" name="abuseNeglectInvolvedifYes" onChange={handleChange}   rows={3} placeholder="Enter text" />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Notifications:
            </Form.Label>
            <div className="d-flex ">
              <Form.Check name="notificationsOther" onChange={handleChange} checked={FormData.notificationsOther} type="checkbox" id={`Outings`} label="Yes" />
              <Form.Check type="checkbox" name="notificationsOther" onChange={handleChange} checked={FormData.notificationsOther}  label="No" />
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
        </div>
      </div>
    </>
  );
};

export default Incident2;
