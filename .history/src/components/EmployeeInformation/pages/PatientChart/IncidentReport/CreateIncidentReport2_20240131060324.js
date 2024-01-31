/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  CheckBoxMaker,
  InputMaker,
  MultiSelect,
  TextareaMaker,
} from "../../../../../Helper/Makers";
import {
  incidentOptions,
  levelSeverityOptions,
} from "../../../../../Constant/Constant";
import { SignatureModal } from "../../../../../Mod/Modal";
import { postApi } from "../../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";

const CreateIncidentReport2 = () => {
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

  const payload = {
    patientId,
    dateOfIncident,
    timeOfIncident,
    employeesInvolved: employeesInvolved?.map((i) => i.value),
    residentsInvolved: residentsInvolved?.map((i) => i.value),
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
    savedSignedPartA,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await postApi(setLoading, `employee/createIncidentReportPartA`, payload);
    navigate("/employee/patient-chart/incident");
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
          <Form onSubmit={submitHandler} className="w-100 text-start">
            <p style={{ fontWeight: "bold" }}>
              Part II – Investigation of Incident (To be completed by
              Administrator)
            </p>
            <TextareaMaker
              label={"Investigation of Incident"}
              placeholder="Enter Text"
            />
            <TextareaMaker
              label={"Investigation of Incident"}
              placeholder="Enter Text"
            />
            <TextareaMaker
              label={"Investigation of Incident"}
              placeholder="Enter Text"
            />

            <InputMaker
              label={"Name/Title of Person Observing/Reporting Inciden"}
              setState={setPersonObservingReporting}
              placeholder=""
              type={"text"}
              value={personObservingReporting}
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
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateIncidentReport2;
