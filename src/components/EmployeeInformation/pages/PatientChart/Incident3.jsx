import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
const Incident3 = () => {
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
       
          <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
            Part II – Investigation of Incident (To be completed by
            Administrator)
          </p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Investigation of Incident:
            </Form.Label>
            <Form.Control as={"textarea"} rows={3} placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Recommendations and Actions:
            </Form.Label>
            <Form.Control as={"textarea"} rows={3} placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Follow up:
            </Form.Label>
            <Form.Control as={"textarea"} rows={3} placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Completed By:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date:
            </Form.Label>
            <Form.Control type="date" placeholder="Enter text" />
          </Form.Group>
          <div
            style={{ maxWidth: "370px", width: "auto" }}
            className="save-as-draft-btn-personal"
          >
            <div>
              <img
                style={{ height: "80%", width: "100%", border: "1px " }}
                src="/Dashboard/save.png"
                alt=""
              />
            </div>
            <div className="save-as-draft-btn">
              <button style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}>
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
              type="submit"
            >
              PRINT REPORT
            </button>
          </div>
          <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Incident3;
