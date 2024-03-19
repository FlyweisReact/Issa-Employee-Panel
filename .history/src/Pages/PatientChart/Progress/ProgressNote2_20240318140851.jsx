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
  RadioMaker,
} from "../../../Helper/Makers.js";

const ShiftOptions = [
  {
    label: "7am-3pm",
    value: "7am-3pm",
  },
  {
    label: "3pm-11pm",
    value: "3pm-11pm",
  },
  {
    label: "11pm-7am",
    value: "11pm-7am",
  },
  {
    label: "8am-4pm",
    value: "8am-4pm",
  },
  {
    label: "4pm-12am",
    value: "4pm-12am",
  },
  {
    label: "12am-8am",
    value: "12am-8am",
  },
  {
    label: "7am-7pm",
    value: "7am-7pm",
  },
  {
    label: "7pm-7am",
    value: "7pm-7am",
  },
  {
    label: "8am-8pm",
    value: "8am-8pm",
  },
  {
    label: "8pm-8am",
    value: "8pm-8am",
  },
];

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
  const [mealPreparation, setMealPreparation] = useState([]);
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
  const [speech, setSpeech] = useState([]);
  const [behaviours, setBehaviours] = useState([]);
  const [meal, setMeal] = useState([]);
  const [snack, setSnack] = useState([]);

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

            <div className="grid-item long-input">
              <label>Shift:</label>
              <BorderlessSelect
                setState={setShift}
                options={ShiftOptions}
                value={shift}
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
                        array: speech,
                        value: "Appropriate",
                        setArr: setSpeech,
                      })
                    }
                    value="Appropriate"
                    id="SpeechAppropriate"
                    label="Appropriate"
                    checked={speech?.includes("Appropriate")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: speech,
                        value: "Selective mute",
                        setArr: setSpeech,
                      })
                    }
                    value="Selective mute"
                    id="SpeechSelectiveMute"
                    label="Selective mute"
                    checked={speech?.includes("Selective mute")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: speech,
                        value: "Quiet",
                        setArr: setSpeech,
                      })
                    }
                    value="Quiet"
                    id="SpeechQuiet"
                    label="Quiet"
                    checked={speech?.includes("Quiet")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: speech,
                        value: "Nonverbal",
                        setArr: setSpeech,
                      })
                    }
                    value="Nonverbal"
                    id="SpeechNonverbal"
                    label="Nonverbal"
                    checked={speech?.includes("Nonverbal")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: speech,
                        value: "Hyperverbal",
                        setArr: setSpeech,
                      })
                    }
                    value="Hyperverbal"
                    id="SpeechHyperverbal"
                    label="Hyperverbal"
                    checked={speech?.includes("Hyperverbal")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: speech,
                        value: "Other",
                        setArr: setSpeech,
                      })
                    }
                    value="Other"
                    id="SpeechOther"
                    label="Other"
                    checked={speech?.includes("Other")}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Behaviors:</label>
              <div className="Radio_btns">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: behaviours,
                        value: "Verbal aggression",
                        setArr: setBehaviours,
                      })
                    }
                    value="Verbal aggression"
                    id="BehaviorsVerbalAggression"
                    label="Verbal aggression"
                    checked={behaviours?.includes("Verbal aggression")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: behaviours,
                        value: "Physical aggression",
                        setArr: setBehaviours,
                      })
                    }
                    value="Physical aggression"
                    id="BehaviorsPhysicalAggression"
                    label="Physical aggression"
                    checked={behaviours?.includes("Physical aggression")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: behaviours,
                        value: "Responding to internal stimuli",
                        setArr: setBehaviours,
                      })
                    }
                    value="Responding to internal stimuli"
                    id="BehaviorsRespondingtointernalstimuli"
                    label="Responding to internal stimuli"
                    checked={behaviours?.includes(
                      "Responding to internal stimuli"
                    )}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: behaviours,
                        value: "Isolation",
                        setArr: setBehaviours,
                      })
                    }
                    value="Isolation"
                    id="BehaviorsIsolation"
                    label="Isolation"
                    checked={behaviours?.includes("Isolation")}
                  />

                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: behaviours,
                        value: "Obsession",
                        setArr: setBehaviours,
                      })
                    }
                    value="Obsession"
                    id="BehaviorsObsession"
                    label="Obsession"
                    checked={behaviours?.includes("Obsession")}
                  />

                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: behaviours,
                        value: "Manipulative",
                        setArr: setBehaviours,
                      })
                    }
                    value="Manipulative"
                    id="BehaviorsManipulative"
                    label="Manipulative"
                    checked={behaviours?.includes("Manipulative")}
                  />

                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: behaviours,
                        value: "Impulsive",
                        setArr: setBehaviours,
                      })
                    }
                    value="Impulsive"
                    id="BehaviorsImpulsive"
                    label="Impulsive"
                    checked={behaviours?.includes("Impulsive")}
                  />

                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: behaviours,
                        value: "Poor boundaries",
                        setArr: setBehaviours,
                      })
                    }
                    value="Poor boundaries"
                    id="BehaviorsPoorBoundaries"
                    label="Poor boundaries"
                    checked={behaviours?.includes("Poor boundaries")}
                  />

                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: behaviours,
                        value: "Sexual maladaptive",
                        setArr: setBehaviours,
                      })
                    }
                    value="Sexual maladaptive"
                    id="BehaviorsSexualMaladaptive"
                    label="Sexual maladaptive"
                    checked={behaviours?.includes("Sexual maladaptive")}
                  />

                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: behaviours,
                        value: "behaviors",
                        setArr: setBehaviours,
                      })
                    }
                    value="behaviors"
                    id="Behaviorsbehaviors"
                    label="behaviors"
                    checked={behaviours?.includes("behaviors")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: behaviours,
                        value: "Other",
                        setArr: setBehaviours,
                      })
                    }
                    value="Other"
                    id="BehaviorsOther"
                    label="Other"
                    checked={behaviours?.includes("Other")}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Resident redirected on behaviors?</label>
              <div className="Radio_btns">
                <div className="btns">
                  <RadioMaker
                    name="residentRedirectedOnBehaviors"
                    setValue={setResidentRedirectedOnBehaviors}
                    value={true}
                    id={"residentRedirectedOnBehaviors1"}
                    label={"Yes"}
                    checked={residentRedirectedOnBehaviors}
                  />
                  <RadioMaker
                    name="residentRedirectedOnBehaviors"
                    setValue={setResidentRedirectedOnBehaviors}
                    value={false}
                    id={"residentRedirectedOnBehaviors2"}
                    label={"No"}
                    checked={residentRedirectedOnBehaviors}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Outing in community?</label>
              <div className="Radio_btns">
                <div className="btns">
                  <RadioMaker
                    name="Outingincommunity"
                    setValue={setCommunityOutings}
                    value={true}
                    id={"Outingincommunity1"}
                    label={"Yes"}
                    checked={communityOutings}
                  />

                  <RadioMaker
                    name="Outingincommunity"
                    setValue={setCommunityOutings}
                    value={false}
                    id={"Outingincommunity2"}
                    label={"No"}
                    checked={communityOutings}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>
                Participated in group/individual therapy session(s)?
              </label>
              <div className="Radio_btns">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: therapy,
                        value: "Yes",
                        setArr: setTherapy,
                      })
                    }
                    value="Yes"
                    id="thearapyYes"
                    label="Yes"
                    checked={therapy?.includes("Yes")}
                  />

                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: therapy,
                        value: "No",
                        setArr: setTherapy,
                      })
                    }
                    value="No"
                    id="thearapyNo"
                    label="No"
                    checked={therapy?.includes("No")}
                  />

                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: therapy,
                        value: "Refused",
                        setArr: setTherapy,
                      })
                    }
                    value="Refused"
                    id="thearapyRefused"
                    label="Refused"
                    checked={therapy?.includes("Refused")}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Meal preparation:</label>
              <div className="Radio_btns">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mealPreparation,
                        value: "I",
                        setArr: setMealPreparation,
                      })
                    }
                    value="I"
                    id="MealI"
                    label="I"
                    checked={mealPreparation?.includes("I")}
                  />

                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mealPreparation,
                        value: "HP",
                        setArr: setMealPreparation,
                      })
                    }
                    value="HP"
                    id="MealHP"
                    label="HP"
                    checked={mealPreparation?.includes("HP")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mealPreparation,
                        value: "H",
                        setArr: setMealPreparation,
                      })
                    }
                    value="H"
                    id="MealH"
                    label="H"
                    checked={mealPreparation?.includes("H")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mealPreparation,
                        value: "R",
                        setArr: setMealPreparation,
                      })
                    }
                    value="R"
                    id="MealR"
                    label="R"
                    checked={mealPreparation?.includes("R")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mealPreparation,
                        value: "PA",
                        setArr: setMealPreparation,
                      })
                    }
                    value="PA"
                    id="MealPA"
                    label="PA"
                    checked={mealPreparation?.includes("PA")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mealPreparation,
                        value: "TA",
                        setArr: setMealPreparation,
                      })
                    }
                    value="TA"
                    id="MealTA"
                    label="TA"
                    checked={mealPreparation?.includes("TA")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mealPreparation,
                        value: "VP",
                        setArr: setMealPreparation,
                      })
                    }
                    value="VP"
                    id="MealVP"
                    label="VP"
                    checked={mealPreparation?.includes("VP")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: mealPreparation,
                        value: "NP",
                        setArr: setMealPreparation,
                      })
                    }
                    value="NP"
                    id="MealNP"
                    label="NP"
                    checked={mealPreparation?.includes("NP")}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Meal offered and taken:</label>
              <div className="Radio_btns ml-5">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: meal,
                        value: "Meal refused",
                        setArr: setMeal,
                      })
                    }
                    value="Meal refused"
                    id="MealPrepMealRefused"
                    label="Meal refused"
                    checked={meal?.includes("Meal refused")}
                  />

                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: meal,
                        value: "Breakfast eaten",
                        setArr: setMeal,
                      })
                    }
                    value="Breakfast eaten"
                    id="MealPrepBreakfastEaten"
                    label="Breakfast eaten"
                    checked={meal?.includes("Breakfast eaten")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: meal,
                        value: "Lunch eaten",
                        setArr: setMeal,
                      })
                    }
                    value="Lunch eaten"
                    id="MealPrep"
                    label="LunchEaten"
                    checked={meal?.includes("Lunch eaten")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: meal,
                        value: "Dinner eaten",
                        setArr: setMeal,
                      })
                    }
                    value="Dinner eaten"
                    id="MealPrepDinnerEaten"
                    label="Dinner eaten"
                    checked={meal?.includes("Dinner eaten")}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Snacks offered and taken:</label>
              <div className="Radio_btns ml-5">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: snack,
                        value: "Snacks refused",
                        setArr: setSnack,
                      })
                    }
                    value="Snacks refused"
                    id="SnacksRefused"
                    label="Snacks refused"
                    checked={snack?.includes("Snacks refused")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: snack,
                        value: "Yes",
                        setArr: setSnack,
                      })
                    }
                    value="Yes"
                    id="SnackYes"
                    label="Yes"
                    checked={snack?.includes("Yes")}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>AWOL:</label>
              <div className="Radio_btns ml-5">
                <div className="btns">
                  <RadioMaker
                    name="awol"
                    setValue={setAwolElopement}
                    value={true}
                    id={"awol1"}
                    label={"Yes"}
                    checked={awolElopement}
                  />

                  <RadioMaker
                    name="awol"
                    setValue={setAwolElopement}
                    value={false}
                    id={"awol2"}
                    label={"No"}
                    checked={awolElopement}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>
                Health and welfare checks at least every 30 minutes to 1 hour?
              </label>
              <div className="Radio_btns ml-5">
                <div className="btns">
                  <RadioMaker
                    name="health"
                    setValue={setHealthAndWelfareChecksCompleted}
                    value={true}
                    id={"health1"}
                    label={"Yes"}
                    checked={healthAndWelfareChecksCompleted}
                  />

                  <RadioMaker
                    name="health"
                    setValue={setHealthAndWelfareChecksCompleted}
                    value={false}
                    id={"health2"}
                    label={"No"}
                    checked={healthAndWelfareChecksCompleted}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Medication administered :</label>
              <div className="Radio_btns ml-5">
                <div className="btns">
                  <RadioMaker
                    name="health"
                    setValue={setMedicationAdministrationCompleted}
                    value={true}
                    id={"health1"}
                    label={"Yes"}
                    checked={healthAndWelfareChecksCompleted}
                  />

                  <RadioMaker
                    name="health"
                    setValue={setHealthAndWelfareChecksCompleted}
                    value={false}
                    id={"health2"}
                    label={"No"}
                    checked={healthAndWelfareChecksCompleted}
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
            \
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