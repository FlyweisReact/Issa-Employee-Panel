/** @format */

import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import {
  InputMaker,
  MultiSelect,
  SelectMaker,
} from "../../../Helper/Makers.js";
import { getData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { postApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal.js";
import {
  BorderlessInput,
  DateFormatter,
  BorderlessSelect,
  CheckBoxMaker,
} from "../../../Helper/Makers.js";

const ProgressNote2 = () => {
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
  ] = useState(true);
  const [
    assistanceInMedicationAdministrationCompleted,
    setAssistanceInMedicationAdministrationCompleted,
  ] = useState(false);
  const [healthAndWelfareChecksCompleted, setHealthAndWelfareChecksCompleted] =
    useState(true);
  const [communityLivingSupport, setCommunityLivingSupport] = useState("");
  const [therapy, setTherapy] = useState([]);
  const [mood, setMood] = useState([]);
  const [appointment, setAppointment] = useState([]);
  const [communityOutings, setCommunityOutings] = useState(true);
  const [religiousService, setReligiousService] = useState(false);
  const [adlsCompleted, setAdlsCompleted] = useState(true);
  const [mealPreparation, setMealPreparation] = useState(false);
  const [transportation, setTransportation] = useState(true);
  const [residentRedirectedOnBehaviors, setResidentRedirectedOnBehaviors] =
    useState(false);
  const [awolElopement, setAwolElopement] = useState(true);
  const [noteSummary, setNoteSummary] = useState("");
  const [bhtName, setBhtName] = useState("");
  const [bhtSignature, setBhtSignature] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const payload = {
    patientId,
    residentName,
    dateOfBirth,
    admitDate,
    date,
    shift,
    medicationAdministrationCompleted,
    assistanceInMedicationAdministrationCompleted,
    healthAndWelfareChecksCompleted,
    communityLivingSupport,
    therapy: therapy?.map((i) => i.value),
    mood: mood?.map((i) => i.value),
    appointment: appointment?.map((i) => i.value),
    communityOutings,
    religiousService,
    adlsCompleted,
    mealPreparation,
    transportation,
    residentRedirectedOnBehaviors,
    awolElopement,
    noteSummary,
    bhtName,
    bhtSignature,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postApi(setLoading, `employee/createProgressNote`, payload);
  };

  const patientHandler = (e) => {
    const obj = JSON.parse(e);
    setPatientId(obj._id);
    setResidentName(obj.fullName);
  };

  const pushInArr = ({ array, value, setArr }) => {
    if (array?.includes(value)) {
      const filtered = array?.filter((item) => item !== value);
      setArr(filtered);
    } else {
      setArr([...array, value]);
    }
  };


  //  New Field
  const [ speech , setSpeech ] = useState([])

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setBhtSignature}
        value={bhtSignature}
        text={"Digitally Sign by employee name"}
      />
      <NavWrapper title={"PROGRESS NOTE"} isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={handleSubmit}>
          <div className="grid-container">
            <div className="grid-item long-input">
              <label>Resident Name:</label>
              <select
                className="borderlessSelect"
                required
                onChange={(e) => patientHandler(e.target.value)}
              >
                <option value="">Select</option>
                {patients?.data?.map((patient) => (
                  <option value={JSON.stringify(patient)}>
                    {patient?.fullName}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid-item">
              <label>Admit Date:</label>
              <BorderlessInput
                setState={setAdmitDate}
                type="date"
                value={DateFormatter(admitDate)}
              />
            </div>

            <div className="grid-item">
              <label>DOB:</label>
              <BorderlessInput
                setState={setDateOfBirth}
                type="date"
                value={DateFormatter(dateOfBirth)}
              />
            </div>

            <div className="grid-item long-input">
              <label>Community Living Support:</label>
              <BorderlessSelect
                setState={setCommunityLivingSupport}
                options={[
                  {
                    label: "Monitors",
                    value: "monitors",
                  },
                  {
                    label: "Prompts",
                    value: "prompts",
                  },
                ]}
                value={communityLivingSupport}
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Appointment:</label>
              <div className="Radio_btns">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: appointment,
                        value: "NO",
                        setArr: setAppointment,
                      })
                    }
                    value="NO"
                    id="appointment1"
                    label="NO"
                    checked={appointment?.includes("NO")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: appointment,
                        value: "PCP",
                        setArr: setAppointment,
                      })
                    }
                    value="PCP"
                    id="aapointmentPCP"
                    label="PCP"
                    checked={appointment?.includes("PCP")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: appointment,
                        value: "Psych",
                        setArr: setAppointment,
                      })
                    }
                    value="Psych"
                    id="aapointmentPsych"
                    label="Psych"
                    checked={appointment?.includes("Psych")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: appointment,
                        value: "Specialist visit",
                        setArr: setAppointment,
                      })
                    }
                    value="Specialist visit"
                    id="aapointmentSpecialistVisit"
                    label="Specialist visit"
                    checked={appointment?.includes("Specialist visit")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: appointment,
                        value: "Dental",
                        setArr: setAppointment,
                      })
                    }
                    value="Dental"
                    id="aapointmentDental"
                    label="Dental"
                    checked={appointment?.includes("Dental")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: appointment,
                        value: "Emergency Room",
                        setArr: setAppointment,
                      })
                    }
                    value="Emergency Room"
                    id="aapointmentEmergencyRoom"
                    label="Emergency Room"
                    checked={appointment?.includes("Emergency Room")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: appointment,
                        value: "Urgent",
                        setArr: setAppointment,
                      })
                    }
                    value="Urgent"
                    id="aapointmentUrgent"
                    label="Urgent"
                    checked={appointment?.includes("Urgent")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: appointment,
                        value: "Care",
                        setArr: setAppointment,
                      })
                    }
                    value="Care"
                    id="aapointmentCare"
                    label="Care"
                    checked={appointment?.includes("Care")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: appointment,
                        value: "Other",
                        setArr: setAppointment,
                      })
                    }
                    value="Other"
                    id="aapointmentOther"
                    label="Other"
                    checked={appointment?.includes("Other")}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Mood:</label>
              <div className="Radio_btns">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Appropriate",
                        setArr: setMood,
                      })
                    }
                    value="Appropriate"
                    id="Appropriate"
                    label="Appropriate"
                    checked={mood?.includes("Appropriate")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Anxious",
                        setArr: setMood,
                      })
                    }
                    value="Anxious"
                    id="Anxious"
                    label="Anxious"
                    checked={mood?.includes("Anxious")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Worry",
                        setArr: setMood,
                      })
                    }
                    value="Worry"
                    id="Worry"
                    label="Worry"
                    checked={mood?.includes("Worry")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Sad",
                        setArr: setMood,
                      })
                    }
                    value="Sad"
                    id="Sad"
                    label="Sad"
                    checked={mood?.includes("Sad")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Depressed",
                        setArr: setMood,
                      })
                    }
                    value="Depressed"
                    id="Depressed"
                    label="Depressed"
                    checked={mood?.includes("Depressed")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Irritable",
                        setArr: setMood,
                      })
                    }
                    value="Irritable"
                    id="Irritable"
                    label="Irritable"
                    checked={mood?.includes("Irritable")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Angry",
                        setArr: setMood,
                      })
                    }
                    value="Angry"
                    id="Angry"
                    label="Angry"
                    checked={mood?.includes("Angry")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Fearful",
                        setArr: setMood,
                      })
                    }
                    value="Fearful"
                    id="Fearful"
                    label="Fearful"
                    checked={mood?.includes("Fearful")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Other",
                        setArr: setMood,
                      })
                    }
                    value="Other"
                    id="MoodOther"
                    label="Other"
                    checked={mood?.includes("Other")}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Speech:</label>
              <div className="Radio_btns">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Appropriate",
                        setArr: setMood,
                      })
                    }
                    value="Appropriate"
                    id="Appropriate"
                    label="Appropriate"
                    checked={mood?.includes("Appropriate")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Anxious",
                        setArr: setMood,
                      })
                    }
                    value="Anxious"
                    id="Anxious"
                    label="Anxious"
                    checked={mood?.includes("Anxious")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Worry",
                        setArr: setMood,
                      })
                    }
                    value="Worry"
                    id="Worry"
                    label="Worry"
                    checked={mood?.includes("Worry")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Sad",
                        setArr: setMood,
                      })
                    }
                    value="Sad"
                    id="Sad"
                    label="Sad"
                    checked={mood?.includes("Sad")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Depressed",
                        setArr: setMood,
                      })
                    }
                    value="Depressed"
                    id="Depressed"
                    label="Depressed"
                    checked={mood?.includes("Depressed")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Irritable",
                        setArr: setMood,
                      })
                    }
                    value="Irritable"
                    id="Irritable"
                    label="Irritable"
                    checked={mood?.includes("Irritable")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Angry",
                        setArr: setMood,
                      })
                    }
                    value="Angry"
                    id="Angry"
                    label="Angry"
                    checked={mood?.includes("Angry")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Fearful",
                        setArr: setMood,
                      })
                    }
                    value="Fearful"
                    id="Fearful"
                    label="Fearful"
                    checked={mood?.includes("Fearful")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mood,
                        value: "Other",
                        setArr: setMood,
                      })
                    }
                    value="Other"
                    id="MoodOther"
                    label="Other"
                    checked={mood?.includes("Other")}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>

      <div>
        <div className="top-div-personal">
          <Form
            onSubmit={handleSubmit}
            className="form-personal offer-letter appendix1 w-100"
          >
            <InputMaker
              label={"Date"}
              setState={setDate}
              placeholder=""
              type="date"
              value={date}
            />

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Shift
              </Form.Label>
              <Form.Select onChange={(e) => setShift(e.target.value)} required>
                <option value="">Select</option>
                <option value="7am-3pm">7am-3pm</option>
                <option value="3pm-11pm">3pm-11pm</option>
                <option value="11pm-7am">11pm-7am</option>
                <option value="8am-4pm">8am-4pm</option>
                <option value="4pm-12am">4pm-12am</option>
                <option value="12am-8am">12am-8am</option>
                <option value="7am-7pm">7am-7pm</option>
                <option value="7pm-7am">7pm-7am</option>
                <option value="8am-8pm">8am-8pm</option>
                <option value="8pm-8am">8pm-8am</option>
              </Form.Select>
            </Form.Group>

            <p style={{ fontWeight: "500" }}>
              I=Independent R=Refusal PA=Physical Assist LOA= Leave of absence
              H=Hospitalization I=Independent VP= Verbal Prompt NP= No Prompt M=
              Monitoring Y=Yes N=No HP=Home Pass NA=Not Applicable
            </p>
            <p>Community Living Support(Monitors and Prompts)</p>

            <SelectMaker
              label={"Was Medication administration completed?"}
              setValue={setMedicationAdministrationCompleted}
              options={[
                {
                  label: "Yes",
                  value: true,
                },
                {
                  label: "No",
                  value: false,
                },
              ]}
            />

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Was Assistance in the self administration of medication
                completed?
              </Form.Label>
              <Form.Select
                onChange={(e) =>
                  setAssistanceInMedicationAdministrationCompleted(
                    e.target.value
                  )
                }
                required
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
                onChange={(e) =>
                  setHealthAndWelfareChecksCompleted(e.target.value)
                }
                required
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

              <MultiSelect
                options={[
                  {
                    label: "Group Therapy",
                    value: "Group Therapy",
                  },
                  {
                    label: "Individual Therapy",
                    value: "Individual Therapy",
                  },
                  {
                    label: "Refused Therapy",
                    value: "Refused Therapy",
                  },
                ]}
                setValue={setTherapy}
              />
            </Form.Group>

         

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Emergency Appointment
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Religious Services</Form.Label>
              <Form.Select
                onChange={(e) => setReligiousService(e.target.value)}
              >
                <option value="">Select</option>
                <option value={true}> Yes </option>
                <option value={false}> No </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Community Outings</Form.Label>
              <div className="checkbox-container ">
                <CheckBoxMaker
                  value={!communityOutings}
                  setValue={setCommunityOutings}
                  label={"Outings"}
                  checked={communityOutings}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> ADLS Completed</Form.Label>
              <Form.Select
                onChange={(e) => setAdlsCompleted(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>

            <SelectMaker
              label={"Meal Preparation"}
              setValue={setMealPreparation}
              options={[
                {
                  label: "Yes",
                  value: true,
                },
                {
                  label: "No",
                  value: false,
                },
              ]}
            />
            <SelectMaker
              label={"Transportation"}
              setValue={setTransportation}
              options={[
                {
                  label: "Yes",
                  value: true,
                },
                {
                  label: "No",
                  value: false,
                },
              ]}
            />
            <SelectMaker
              label={"Resident Redirected on behaviors"}
              setValue={setResidentRedirectedOnBehaviors}
              options={[
                {
                  label: "Yes",
                  value: true,
                },
                {
                  label: "No",
                  value: false,
                },
              ]}
            />

            <Form.Group className="mb-3">
              <Form.Label>AWOL/Elopement</Form.Label>
              <Form.Select
                onChange={(e) => setAwolElopement(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Note Summary</Form.Label>
              <Form.Control
                onChange={(e) => setNoteSummary(e.target.value)}
                required
                as={"textarea"}
                rows={3}
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>BHT’s Name and Credentials:</Form.Label>
              <Form.Control
                onChange={(e) => setBhtName(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

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
                  borderRadius: "10px",
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

export default HOC(ProgressNote2);
