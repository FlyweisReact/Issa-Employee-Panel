/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { showMsg, postData } from "../../../../Baseurl";
import { getData } from "../../../api/api";

const ProgressNote2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [patientData, setPatientData] = useState({
    patientId: "",
    residentName: "",
    dateOfBirth: "",
    admitDate: "",
    date: "",
    shift: "",
    medicationAdministrationCompleted: false,
    assistanceInMedicationAdministrationCompleted: false,
    healthAndWelfareChecksCompleted: false,
    communityLivingSupport: "",
    groupTherapy: false,
    individualTherapy: false,
    refusedTherapy: false,
    isolation: false,
    anxious: false,
    depressed: false,
    excited: false,
    respondingToInternalStimuli: false,
    inappropriateSexualComment: false,
    paranoia: false,
    verballyAggressive: false,
    physicallyAggressive: false,
    agitated: false,
    suicidalIdeation: false,
    PCP: false,
    psychiatric: false,
    otherSpecialist: false,
    none: false,
    emergencyRoomVisit: false,
    inpatient: false,
    urgentCare: false,
    communityOutings: false,
    religiousService: false,
    adlsCompleted: false,
    mealPreparation: false,
    transportation: false,
    residentRedirectedOnBehaviors: false,
    awolElopement: false,
    noteSummary: "",
    bhtName: "",
    bhtSignature: "",
  });

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyValues = Object.values(patientData).filter((x) => x === "");
    if (emptyValues.length > 0) {
      showMsg(
        "Error",
        `${Object.keys(patientData).filter(
          (x) => patientData[x] === ""
        )} cannot be empty`,
        "danger"
      );
      return;
    }
    postData(
      "employee/createProgressNote",
      patientData,
      getData(setPatients, "employee/getPatient")
    )
      .then((res) => {
        console.log();
        showMsg("Success", res.data?.message, "success");
      })
      .catch((err) => {
        console.log(err);
        showMsg("Error", err.response.data.message, "danger");
      });
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
                onChange={(e) => {
                  setPatientData({
                    patientId: e.target.value,
                    ...patientData,
                  });
                }}
              >
                <option value="">Select</option>
                {patients?.data?.map((patient) => (
                  <option value={patient?._id}>{patient?.fullName}</option>
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
                <option>Select</option>
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
                <option>Select</option>
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
                <option>Select</option>
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
                <option>Select</option>
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
                <option>Select</option>
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
                <option>Select</option>
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
                <option>Select</option>
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
                <option>Select</option>
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
                <option>Select</option>
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
                <option>Select</option>
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
