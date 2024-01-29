/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { showMsg, postData } from "../../../../Baseurl";
import { getData } from "../../../api/api";
import { postApi } from "../../../../Repository/Apis";

const ProgressNote2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [admitDate, setAdmitDate] = useState("");
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");
  const [
    medicationAdministrationCompleted,
    setMedicationAdministrationCompleted,
  ] = useState(false);
  const [
    assistanceInMedicationAdministrationCompleted,
    setAssistanceInMedicationAdministrationCompleted,
  ] = useState(false);
  const [healthAndWelfareChecksCompleted, setHealthAndWelfareChecksCompleted] =
    useState(false);
  const [communityLivingSupport, setCommunityLivingSupport] = useState("");
  const [groupTherapy, setGroupTherapy] = useState(false);
  const [individualTherapy, setIndividualTherapy] = useState(false);
  const [refusedTherapy, setRefusedTherapy] = useState(false);
  const [isolation, setIsolation] = useState(false);
  const [anxious, setAnxious] = useState(false);
  const [depressed, setDepressed] = useState(false);
  const [excited, setExcited] = useState(false);
  const [respondingToInternalStimuli, setRespondingToInternalStimuli] =
    useState(false);
  const [inappropriateSexualComment, setInappropriateSexualComment] =
    useState(false);
  const [paranoia, setParanoia] = useState(false);
  const [verballyAggressive, setVerballyAggressive] = useState(false);
  const [physicallyAggressive, setPhysicallyAggressive] = useState(false);
  const [agitated, setAgitated] = useState(false);
  const [suicidalIdeation, setSuicidalIdeation] = useState(false);
  const [PCP, setPCP] = useState(false);
  const [psychiatric, setPsychiatric] = useState(false);
  const [otherSpecialist, setOtherSpecialist] = useState(false);
  const [none, setNone] = useState(false);
  const [emergencyRoomVisit, setEmergencyRoomVisit] = useState(false);
  const [inpatient, setInpatient] = useState(false);
  const [urgentCare, setUrgentCare] = useState(false);
  const [communityOutings, setCommunityOutings] = useState(false);
  const [religiousService, setReligiousService] = useState(false);
  const [adlsCompleted, setAdlsCompleted] = useState(false);
  const [mealPreparation, setMealPreparation] = useState(false);
  const [transportation, setTransportation] = useState(false);
  const [residentRedirectedOnBehaviors, setResidentRedirectedOnBehaviors] =
    useState(false);
  const [awolElopement, setAwolElopement] = useState(false);
  const [noteSummary, setNoteSummary] = useState("");
  const [bhtName, setBhtName] = useState("");
  const [bhtSignature, setBhtSignature] = useState("");

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const payload = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    postApi(setLoading, `employee/createProgressNote`, payload);
  };

  const patientHandler = (e) => {
    const obj = JSON.parse(e);
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
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>PROGRESS NOTE</p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form
            onSubmit={handleSubmit}
            className="form-personal offer-letter appendix1 w-100"
          >
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Resident’s Name: :
              </Form.Label>
              <Form.Select
                name="patientId"
                required
                onChange={(e) => patientHandler}
              >
                <option value="">Select</option>
                {patients?.data?.map((patient) => (
                  <option value={JSON.stringify(patient)}>
                    {patient?.fullName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Admit Date :
              </Form.Label>
              <Form.Control
                name="admitDate"
                onChange={(e) => {
                  setPatientData({
                    admitDate: e.target.value,
                    ...patientData,
                  });
                }}
                required
                type="date"
                placeholder="Enter  dATE"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date of Birth:
              </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPatientData({
                    dateOfBirth: e.target.value,
                    ...patientData,
                  });
                }}
                name="dateOfBirth"
                type="date"
                required
                placeholder="Enter text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date :
              </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPatientData({
                    date: e.target.value,
                    ...patientData,
                  });
                }}
                name="date"
                type="date"
                required
                placeholder="Enter text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Shift :
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setPatientData({
                    shift: e.target.value,
                    ...patientData,
                  });
                }}
                name="shift"
                required
              >
                <option value="">Select</option>
                <option value="7am-3pm">7am-3pm</option>
                <option value="3pm-11pm">3pm-11pm</option>
                <option value="11pm-7am">11pm-7am</option>
                <option value="8am-4pm">8am-4pm</option>
                <option value="4pm-12am">4pm-12am</option>
                <option value="12am-8am">12am-8am</option>
                <option value="7am-7pm">7am-7pm</option>
                <option value="7pm-7am">7pm-7am</option>
                <option value="8pm-8am">8am-8pm</option>
                <option value="8pm-8am">8pm-8am</option>
              </Form.Select>
            </Form.Group>

            <p style={{ fontWeight: "500" }}>
              I=Independent R=Refusal PA=Physical Assist LOA= Leave of absence
              H=Hospitalization I=Independent VP= Verbal Prompt NP= No Prompt M=
              Monitoring Y=Yes N=No HP=Home Pass NA=Not Applicable
            </p>
            <p>Community Living Support(Monitors and Prompts)</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Was Medication administration completed?
              </Form.Label>
              <Form.Select
                onChange={(e) => {
                  setPatientData({
                    medicationAdministrationCompleted: e.target.value,
                  });
                }}
                required
                name="healthAndWelfareChecksCompleted"
                aria-label="Default select example"
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Was Assistance in the self administration of medication
                completed?
              </Form.Label>
              <Form.Select
                onChange={(e) => {
                  setPatientData({
                    assistanceInMedicationAdministrationCompleted:
                      e.target.value,
                    ...patientData,
                  });
                }}
                required
                name="assistanceInMedicationAdministrationCompleted"
                aria-label="Default select example"
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Were Health and Welfare Checks completed every 15 minutes to 1
                hour?
              </Form.Label>
              <Form.Select
                onChange={(e) => {
                  setPatientData({
                    healthAndWelfareChecksCompleted: e.target.value,
                    ...patientData,
                  });
                }}
                required
                name="healthAndWelfareChecksCompleted"
                aria-label="Default select example"
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Therapy:
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setPatientData({
                    therapy: e.target.value,
                    ...patientData,
                  });
                }}
                required
                name="therapy"
              >
                <option value="">Select</option>
                <option value="Group Therapy">Group Therapy</option>
                <option value="Individual Therapy">Individual Therapy</option>
                <option value="Refused">Refused</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Mood:
              </Form.Label>
              <Form.Select
                onChange={(e) => {
                  setPatientData({
                    mood: e.target.value,
                    ...patientData,
                  });
                }}
                required
                name="mood"
                aria-label="Default select example"
              >
                <option value="">Select</option>
                <option value="Isolation">Isolation</option>
                <option value="anxious"> anxious</option>
                <option value="depressed">depressed</option>
                <option value="excited">excited</option>
                <option value="responding to internal stimuli">
                  responding to internal stimuli
                </option>
                <option value=" inappropriate sexual comment">
                  {" "}
                  inappropriate sexual comment
                </option>
                <option value="physically or mentally.Aggressive">
                  verbally aggressive, physically aggressive
                </option>
                <option value="agitated"> agitated</option>
                <option value="suicidal ideation">Suicidal ideation</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Appointment:
              </Form.Label>
              <Form.Select
                onChange={(e) => {
                  setPatientData({
                    appointment: e.target.value,
                    ...patientData,
                  });
                }}
                required
                aria-label="Default select example"
              >
                <option value="">Select</option>
                <option value="Emergency Room Visit">
                  Emergency Room Visit
                </option>
                <option value="Inpatient">Inpatient </option>
                <option value="Urgent Care">Urgent Care</option>
                <option value="None">None</option>
              </Form.Select>
            </Form.Group>
            <p style={{ fontSize: "1rem" }}>Emergency Appointment </p>
            <p>Community Outings</p>
            <Form.Group className="mb-3">
              <Form.Label> Religious Services</Form.Label>
              <Form.Check
                onChange={(e) => {
                  setPatientData({
                    religiousServices: e.target.value,
                    ...patientData,
                  });
                }}
                required
                name="religiousServices"
                type="checkbox"
                id={`Outings`}
                label="Outings"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> ADLS Completed</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setPatientData({
                    adlsCompleted: e.target.value,
                    ...patientData,
                  });
                }}
                required
                name="adlsCompleted"
                aria-label="Default select example"
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Transportation</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setPatientData({
                    transportation: e.target.value,
                    ...patientData,
                  });
                }}
                name="transportation"
                required
                aria-label="Default select example"
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Resident Redirected on behaviors</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setPatientData({
                    residentRedirectedOnBehaviors: e.target.value,
                    ...patientData,
                  });
                }}
                required
                name="residentRedirectedOnBehaviors"
                aria-label="Default select example"
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>AWOL/Elopement</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setPatientData({
                    awolElopement: e.target.value,
                    ...patientData,
                  });
                }}
                name="awolElopement"
                as={"select"}
                required
                aria-label="Default select example"
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Note Summary</Form.Label>

              <Form.Control
                onChange={(e) => {
                  setPatientData({
                    noteSummary: e.target.value,
                    ...patientData,
                  });
                }}
                name="noteSummary"
                as={"textarea"}
                rows={3}
                required
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>BHT’s Name and Credentials:</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPatientData({
                    bhtNameAndCredentials: e.target.value,
                    ...patientData,
                  });
                }}
                name="bhtNameAndCredentials"
                type="text"
                required
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-5">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Signature:{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter text"
                onChange={(e) => {
                  setPatientData({
                    bhtSignature: e.target.value,
                    ...patientData,
                  });
                }}
                required
                name="bhtSignature"
              />
            </Form.Group>
            <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
              <div className="save-as-draft-btn w-100">
                <button
                  style={{
                    border: "1px solid #0C5C75",
                    color: "#0C5C75",
                    width: "100%",
                  }}
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
                  borderRadius: "10px",
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

export default ProgressNote2;
