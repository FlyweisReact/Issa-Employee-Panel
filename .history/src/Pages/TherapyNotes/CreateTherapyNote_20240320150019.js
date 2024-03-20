/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { SignatureModal } from "../../Mod/Modal";
import {
  BorderlessInput,
  CheckBoxMaker,
  DateFormatter,
  InputMaker,
  MultiSelect,
  RadioMaker,
} from "../../Helper/Makers";
import { getData, postData } from "../../components/api/api";
import HOC from "../../Layout/Inner/HOC";
import NavWrapper from "../../Helper/NavWrapper";
import { DateInMMDDYY } from "../../Repository/Apis";

const CreateTherapyNote = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [topic, setTopic] = useState([]);
  const [residentId, setResidentId] = useState([]);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [totalDuration, setTotalDuration] = useState("");
  const [behaviorTech, setBehaviorTech] = useState("");
  const [location, setLocation] = useState("");
  const [topicId, setTopicId] = useState("");
  const [residentCompletedSession, setResidentCompletedSession] =
    useState(true);
  const [attitude, setAttitude] = useState([]);
  const [treatmentGoalsAddressed, setTreatmentGoalsAddressed] = useState(false);
  const [residentParticipation, setResidentParticipation] = useState("");
  const [residentQuality, setResidentQuality] = useState([]);
  const [
    significantInfoNotSpecifiedAbove,
    setSignificantInfoNotSpecifiedAbove,
  ] = useState(false);
  const [residentAppearance, setResidentAppearance] = useState([]);
  const [residentMood, setResidentMood] = useState([]);
  const [residentProgress, setResidentProgress] = useState([]);
  const [pleaseSpecify, setPleaseSpecify] = useState("");
  const [residentResponse, setResidentResponse] = useState("");
  const [
    significantInfoNotSpecifiedAbove1,
    setSignificantInfoNotSpecifiedAbove1,
  ] = useState(false);
  const [pleaseSpecify1, setPleaseSpecify1] = useState("");
  const [therapyType, setTheraphyType] = useState("");
  const [pleaseSpecify1Date, setPleaseSpecify1Date] = useState("");
  const [behavioralTechnicianSignature, setBehavioralTechnicianSignature] =
    useState("");
  const [behavioralTechnicianName, setBehavioralTechnicianName] = useState("");
  const [
    behavioralHealthProfessionalSignature,
    setBehavioralHealthProfessionalSignature,
  ] = useState("");
  const [
    behavioralHealthProfessionalName,
    setBehavioralHealthProfessionalName,
  ] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [ technicianDate , setTechnicianDate  ] = useState("")
  const [ technicianTime , setTechnicianTime ] = useState("")
  const [ healthDate , setHealthDate ] = useState("")
  const [ healthTime , setHealthTime ] = useState("")



  const payload = {
    residentId: residentId?.map((i) => i.value),
    therapyType,
    date,
    startTime,
    endTime,
    totalDuration,
    behaviorTech,
    location,
    topicId,
    residentCompletedSession,
    attitude,
    treatmentGoalsAddressed,
    residentParticipation,
    residentQuality,
    significantInfoNotSpecifiedAbove,
    residentAppearance,
    residentMood,
    residentProgress,
    pleaseSpecify,
    residentResponse,
    significantInfoNotSpecifiedAbove1,
    pleaseSpecify1,
    pleaseSpecify1Date,
    behavioralTechnicianSignature,
    behavioralTechnicianName,
    behavioralHealthProfessionalSignature,
    behavioralHealthProfessionalName,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData("employee/createTherapySession", payload);
  };

  const getAllPatients = () => {
    getData(setPatients, "employee/getPatient");
  };

  useEffect(() => {
    getAllPatients();
    getData(setTopic, `superAdmin/getAllBhrfTherapyTopic`);
  }, []);

  const options =
    patients?.data?.map((item) => ({
      label: item.fullName,
      value: item._id,
    })) || [];

  const [noteSummary, setNoteSummary] = useState([]);
  const [planRecommendation, setPlanRecommendation] = useState([]);

  const selectHandler = (e) => {
    const obj = JSON.parse(e);
    setTopicId(obj?._id);
    setNoteSummary(obj?.notesSummary);
    setPlanRecommendation(obj?.planRecommendation);
  };


  const pushInArr = ({ array, value, setArr }) => {
    if (array?.includes(value)) {
      const filtered = array?.filter((item) => item !== value);
      setArr(filtered);
    } else {
      setArr([...array, value]);
    }
  };

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setBehavioralTechnicianSignature}
        value={behavioralTechnicianSignature}
        setDate={setTechnicianDate}
        setTime={setTechnicianTime}
      />
      <SignatureModal
        show={open1}
        onHide={() => setOpen1(false)}
        setValue={setBehavioralHealthProfessionalSignature}
        value={behavioralHealthProfessionalSignature}
        setDate={setHealthDate}
        setTime={setHealthTime}
      />
      <NavWrapper title={"THERAPY NOTES"} isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start">
          <div className="therapy-notes-multiple-radio-wb mb-3">
            <div className="main">
              <Form.Check type={"radio"}>
                <Form.Check.Input
                  name="Therapy"
                  type={"radio"}
                  isValid
                  id={"groupTherapy"}
                  value={"Group Therapy"}
                  checked={therapyType === "Group Therapy"}
                  onChange={(e) => setTheraphyType(e.target.value)}
                />
                <Form.Check.Label htmlFor="groupTherapy">
                  Group Therapy
                </Form.Check.Label>
              </Form.Check>
            </div>

            <div className="main">
              <Form.Check type={"radio"}>
                <Form.Check.Input
                  name="Therapy"
                  type={"radio"}
                  isValid
                  id={"IndividualTherapy"}
                  value={"Individual Therapy"}
                  checked={therapyType === "Individual Therapy"}
                  onChange={(e) => setTheraphyType(e.target.value)}
                />
                <Form.Check.Label htmlFor="IndividualTherapy">
                  Individual Therapy
                </Form.Check.Label>
              </Form.Check>
            </div>
            <div className="main">
              <Form.Check type={"radio"}>
                <Form.Check.Input
                  name="Therapy"
                  type={"radio"}
                  isValid
                  id={"InPerson"}
                  value={"In Person"}
                  checked={therapyType === "In Person"}
                  onChange={(e) => setTheraphyType(e.target.value)}
                />
                <Form.Check.Label htmlFor="InPerson">
                  In Person
                </Form.Check.Label>
              </Form.Check>
            </div>
            <div className="main">
              <Form.Check type={"radio"}>
                <Form.Check.Input
                  name="Therapy"
                  type={"radio"}
                  isValid
                  id={"Telehealth"}
                  value={"Telehealth"}
                  checked={therapyType === "Telehealth"}
                  onChange={(e) => setTheraphyType(e.target.value)}
                />
                <Form.Check.Label htmlFor="Telehealth">
                  Telehealth
                </Form.Check.Label>
              </Form.Check>
            </div>
          </div>

          <div className="grid-container">
            <div className="grid-item full-wid-input d-block">
              <label>Resident’s Name:</label>
              <MultiSelect
                options={options}
                setValue={setResidentId}
                value={residentId}
              />
            </div>

            <div className="grid-item">
              <label>Today’s Date:</label>
              <BorderlessInput
                setState={setDate}
                value={DateFormatter(date)}
                type="date"
              />
            </div>

            <div className="grid-item">
              <label>Start time:</label>
              <BorderlessInput
                setState={setStartTime}
                value={startTime}
                type="time"
              />
            </div>
            <div className="grid-item">
              <label>End time:</label>
              <BorderlessInput
                setState={setEndTime}
                value={endTime}
                type="time"
              />
            </div>
            <div className="grid-item">
              <label>Total Duration:</label>
              <BorderlessInput
                setState={setTotalDuration}
                value={totalDuration}
                type="text"
                placeholder={"1hr"}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Behavioral Health Technician:</label>
              <BorderlessInput
                setState={setBehaviorTech}
                value={behaviorTech}
                type="text"
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Location:</label>
              <BorderlessInput
                setState={setLocation}
                value={location}
                type="text"
              />
            </div>
          </div>
          <p className="fw-bold text-desc mt-3 text-center">Session Summary</p>
          <div className="grid-container mt-3">
            <div className="grid-item full-wid-input">
              <label>Topic:</label>
              <select
                className="borderlessSelect"
                onChange={(e) => selectHandler(e.target.value)}
              >
                <option value="">Select</option>
                {topic?.data?.reverse()?.map((i) => (
                  <option key={i._id} value={JSON.stringify(i)}>
                    {" "}
                    {i.topic}{" "}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid-item full-wid-input d-block">
              <label>
                {" "}
                Note Summary:
                <br />
                {noteSummary?.map((i) => (
                  <span> {i} </span>
                ))}
              </label>
            </div>
            <div className="grid-item full-wid-input d-block">
              <label>
                Recommendation:
                <br />
                {planRecommendation?.map((i) => (
                  <p className="m-0"> {i} </p>
                ))}
              </label>
            </div>

            <div className="grid-item full-wid-input">
              <label>Resident Completed Therapy Session:</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <RadioMaker
                    name="residentCompletedSession"
                    setValue={setResidentCompletedSession}
                    value={true}
                    id={"residentCompletedSession1"}
                    label={"Yes"}
                    checked={residentCompletedSession}
                  />
                  <RadioMaker
                    name="residentCompletedSession"
                    setValue={setResidentCompletedSession}
                    value={false}
                    id={"residentCompletedSession2"}
                    label={"No"}
                    checked={!residentCompletedSession}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Were there any treatment goals addressed?</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <RadioMaker
                    name="treatmentGoalsAddressed"
                    setValue={setTreatmentGoalsAddressed}
                    value={true}
                    id={"treatmentGoalsAddressed1"}
                    label={"Yes"}
                    checked={treatmentGoalsAddressed}
                  />
                  <RadioMaker
                    name="treatmentGoalsAddressed"
                    setValue={setTreatmentGoalsAddressed}
                    value={false}
                    id={"treatmentGoalsAddressed2"}
                    label={"No"}
                    checked={!treatmentGoalsAddressed}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Resident Participation:</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <RadioMaker
                    name="residentParticipation"
                    setValue={setResidentParticipation}
                    value={100}
                    id={"residentParticipation1"}
                    label={"100%"}
                    checked={residentParticipation}
                  />
                  <RadioMaker
                    name="residentParticipation"
                    setValue={setResidentParticipation}
                    value={75}
                    id={"residentParticipation2"}
                    label={"75%"}
                    checked={residentParticipation}
                  />
                  <RadioMaker
                    name="residentParticipation"
                    setValue={setResidentParticipation}
                    value={50}
                    id={"residentParticipation3"}
                    label={"50%"}
                    checked={residentParticipation}
                  />
                  <RadioMaker
                    name="residentParticipation"
                    setValue={setResidentParticipation}
                    value={25}
                    id={"residentParticipation4"}
                    label={"25%"}
                    checked={residentParticipation}
                  />
                  <RadioMaker
                    name="residentParticipation"
                    setValue={setResidentParticipation}
                    value={"None"}
                    id={"residentParticipation5"}
                    label={"None"}
                    checked={residentParticipation}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Resident Appearance:</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentAppearance,
                        value: "Neat",
                        setArr: setResidentAppearance,
                      })
                    }
                    value="Neat"
                    id="ResidentNeat"
                    label="Neat"
                    checked={residentAppearance?.includes("Neat")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentAppearance,
                        value: "Unkept",
                        setArr: setResidentAppearance,
                      })
                    }
                    value="Unkept"
                    id="ResidentUnkept"
                    label="Unkept"
                    checked={residentAppearance?.includes("Unkept")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentAppearance,
                        value: "Inappropriate",
                        setArr: setResidentAppearance,
                      })
                    }
                    value="Inappropriate"
                    id="ResidentInappropriate"
                    label="Inappropriate"
                    checked={residentAppearance?.includes("Inappropriate")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentAppearance,
                        value: "Bizarre",
                        setArr: setResidentAppearance,
                      })
                    }
                    value="Bizarre"
                    id="ResidentBizarre"
                    label="Bizarre"
                    checked={residentAppearance?.includes("Bizarre")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentAppearance,
                        value: "Other",
                        setArr: setResidentAppearance,
                      })
                    }
                    value="Other"
                    id="ResidentOther"
                    label="Other"
                    checked={residentAppearance?.includes("Other")}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Resident Mood:</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentMood,
                        value: "Normal",
                        setArr: setResidentMood,
                      })
                    }
                    value="Normal"
                    id="ResidentNormal"
                    label="Normal"
                    checked={residentMood?.includes("Normal")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentMood,
                        value: "Euthymic",
                        setArr: setResidentMood,
                      })
                    }
                    value="Euthymic"
                    id="ResidentEuthymic"
                    label="Euthymic"
                    checked={residentMood?.includes("Euthymic")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentMood,
                        value: "Anxious",
                        setArr: setResidentMood,
                      })
                    }
                    value="Anxious"
                    id="ResidentAnxious"
                    label="Anxious"
                    checked={residentMood?.includes("Anxious")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentMood,
                        value: "Depressed",
                        setArr: setResidentMood,
                      })
                    }
                    value="Depressed"
                    id="ResidentDepressed"
                    label="Depressed"
                    checked={residentMood?.includes("Depressed")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentMood,
                        value: "Euphoric",
                        setArr: setResidentMood,
                      })
                    }
                    value="Euphoric"
                    id="ResidentEuphoric"
                    label="Euphoric"
                    checked={residentMood?.includes("Euphoric")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentMood,
                        value: "Irritable",
                        setArr: setResidentMood,
                      })
                    }
                    value="Irritable"
                    id="ResidentIrritable"
                    label="Irritable"
                    checked={residentMood?.includes("Irritable")}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Resident Quality:</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentQuality,
                        value: "Attentive",
                        setArr: setResidentQuality,
                      })
                    }
                    value="Attentive"
                    id="ResidentQualityAttentive"
                    label="Attentive"
                    checked={residentQuality?.includes("Attentive")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentQuality,
                        value: "Supportive",
                        setArr: setResidentQuality,
                      })
                    }
                    value="Supportive"
                    id="ResidentQualitySupportive"
                    label="Supportive"
                    checked={residentQuality?.includes("Supportive")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentQuality,
                        value: "Sharing",
                        setArr: setResidentQuality,
                      })
                    }
                    value="Sharing"
                    id="ResidentQualitySharing"
                    label="Sharing"
                    checked={residentQuality?.includes("Sharing")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentQuality,
                        value: "Intrusive",
                        setArr: setResidentQuality,
                      })
                    }
                    value="Intrusive"
                    id="ResidentQualityIntrusive"
                    label="Intrusive"
                    checked={residentQuality?.includes("Intrusive")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentQuality,
                        value: "Resistant",
                        setArr: setResidentQuality,
                      })
                    }
                    value="Resistant"
                    id="ResidentQualityResistant"
                    label="Resistant"
                    checked={residentQuality?.includes("Resistant")}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Resident Progress:</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentProgress,
                        value: "Deterioration",
                        setArr: setResidentProgress,
                      })
                    }
                    value="Deterioration"
                    id="ResidentProgressDeterioration"
                    label="Deterioration"
                    checked={residentProgress?.includes("Deterioration")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentProgress,
                        value: "No Progress",
                        setArr: setResidentProgress,
                      })
                    }
                    value="No Progress"
                    id="ResidentProgressNoProgress"
                    label="No Progress"
                    checked={residentProgress?.includes("No Progress")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentProgress,
                        value: "Small Progress",
                        setArr: setResidentProgress,
                      })
                    }
                    value="Small Progress"
                    id="ResidentProgressSmallProgress"
                    label="Small Progress"
                    checked={residentProgress?.includes("Small Progress")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentProgress,
                        value: "Good Progress",
                        setArr: setResidentProgress,
                      })
                    }
                    value="Good Progress"
                    id="ResidentProgressGoodProgress"
                    label="Good Progress"
                    checked={residentProgress?.includes("Good Progress")}
                  />
                  <CheckBoxMaker
                    setValue={() =>
                      pushInArr({
                        array: residentProgress,
                        value: "Goal Achieved",
                        setArr: setResidentProgress,
                      })
                    }
                    value="Goal Achieved"
                    id="ResidentProgressGoalAchieved"
                    label="Goal Achieved"
                    checked={residentProgress?.includes("Goal Achieved")}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Resident Response:</label>
              <BorderlessInput
                setState={setResidentResponse}
                value={residentResponse}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Any significant information not specified above?</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <RadioMaker
                    name="significantInfoNotSpecifiedAbove"
                    setValue={setSignificantInfoNotSpecifiedAbove}
                    value={true}
                    id={"significantInfoNotSpecifiedAbove1"}
                    label={"Yes"}
                    checked={significantInfoNotSpecifiedAbove}
                  />
                  <RadioMaker
                    name="significantInfoNotSpecifiedAbove"
                    setValue={setSignificantInfoNotSpecifiedAbove}
                    value={false}
                    id={"significantInfoNotSpecifiedAbove2"}
                    label={"No"}
                    checked={significantInfoNotSpecifiedAbove}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Please specify:</label>
              <BorderlessInput
                setState={setPleaseSpecify}
                value={pleaseSpecify}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Behavioral Health Technician Name & Signature:</label>
              <BorderlessInput
                setState={setBehavioralTechnicianName}
                value={behavioralTechnicianName}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button className="draft"> SAVE AS DRAFT</button>
                  <button
                    type="button"
                    className="signed"
                    onClick={() => setOpen(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {behavioralTechnicianSignature && (
                    <p>Digitally Sign by {behavioralTechnicianSignature}
                    {technicianDate && DateInMMDDYY(technicianDate)}
                    {technicianTime}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Behavioral Health Professional Name & Signature:</label>
              <BorderlessInput
                setState={setBehavioralHealthProfessionalName}
                value={behavioralHealthProfessionalName}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button className="draft"> SAVE AS DRAFT</button>
                  <button
                    type="button"
                    className="signed"
                    onClick={() => setOpen1(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {behavioralHealthProfessionalSignature && (
                    <p>
                      Digitally Sign by {behavioralHealthProfessionalSignature}
                      {technicianDate && DateInMMDDYY(technicianDate)}
                    {technicianTime}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default HOC(CreateTherapyNote);
