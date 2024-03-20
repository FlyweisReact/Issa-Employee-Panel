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

  // New Fields

  function check_handler(value, setState, state) {
    const checkIfPresent = state?.some((i) => i === value);
    if (checkIfPresent) {
      const filtered = state?.filter((i) => i !== value);
      setState(filtered);
    } else {
      setState((prev) => [...prev, value]);
    }
  }

//   --
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
      />
      <SignatureModal
        show={open1}
        onHide={() => setOpen1(false)}
        setValue={setBehavioralHealthProfessionalSignature}
        value={behavioralHealthProfessionalSignature}
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
                    value="Neat"
                    id="ResidentNeat"
                    label="Neat"
                    checked={residentAppearance?.includes("Neat")}
                  />
                </div>
              </div>
            </div>


          </div>
        </form>
      </Container>

      <div>
        <div className="top-div-personal">
          <Form onSubmit={handleSubmit} className="w-100 text-start">
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              Individual Participant Notes
            </p>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Name
              </Form.Label>
              <Form.Control type="text" required placeholder="Enter  text" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Attitude:
              </Form.Label>
              <div className="checkbox-container colored ">
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler("Cooperative", setAttitude, attitude)
                  }
                  label={"Cooperative"}
                  id={`Cooperative`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler("Focused", setAttitude, attitude)
                  }
                  label={"Focused"}
                  id={`Focused`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler("Suspicious", setAttitude, attitude)
                  }
                  label={"Suspicious"}
                  id={`Suspicious`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler("Distracted", setAttitude, attitude)
                  }
                  label={"Distracted"}
                  id={`Distracted`}
                />
              </div>
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Resident Quality:
              </Form.Label>
              <div className="checkbox-container colored ">
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Attentive",
                      setResidentQuality,
                      residentQuality
                    )
                  }
                  label={"Attentive"}
                  id={`Attentive`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Supportive",
                      setResidentQuality,
                      residentQuality
                    )
                  }
                  label={"Supportive"}
                  id={`Supportive`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Sharing",
                      setResidentQuality,
                      residentQuality
                    )
                  }
                  label={"Sharing"}
                  id={`Sharing`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Intrusive",
                      setResidentQuality,
                      residentQuality
                    )
                  }
                  label={"Intrusive"}
                  id={`Intrusive`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Resistant",
                      setResidentQuality,
                      residentQuality
                    )
                  }
                  label={"Resistant"}
                  id={`Resistant`}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>
                  Any significant information not specified above
                </span>
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
              </Form.Label>
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Resident Appearance
              </Form.Label>
              <div className="checkbox-container colored ">
              
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Unkept",
                      setResidentAppearance,
                      residentAppearance
                    )
                  }
                  label={"Unkept"}
                  id={`Unkept`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Inappropriate",
                      setResidentAppearance,
                      residentAppearance
                    )
                  }
                  label={"Inappropriate"}
                  id={`Inappropriate`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Bizarre",
                      setResidentAppearance,
                      residentAppearance
                    )
                  }
                  label={"Bizarre"}
                  id={`Bizarre`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Other",
                      setResidentAppearance,
                      residentAppearance
                    )
                  }
                  label={"Other"}
                  id={`Other`}
                />
              </div>
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Resident Mood
              </Form.Label>
              <div className="checkbox-container colored ">
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler("Normal", setResidentMood, residentMood)
                  }
                  label={"Normal"}
                  id={`Normal`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler("Euthymic", setResidentMood, residentMood)
                  }
                  label={"Euthymic"}
                  id={`Euthymic`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler("Anxious", setResidentMood, residentMood)
                  }
                  label={"Anxious"}
                  id={`Anxious`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler("Depressed", setResidentMood, residentMood)
                  }
                  label={"Depressed"}
                  id={`Depressed`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler("Euphoric", setResidentMood, residentMood)
                  }
                  label={"Euphoric"}
                  id={`Euphoric`}
                />

                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler("Irritable", setResidentMood, residentMood)
                  }
                  label={"Irritable"}
                  id={`Irritable`}
                />
              </div>
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Resident Progress
              </Form.Label>
              <div className="checkbox-container colored ">
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Deterioration",
                      setResidentProgress,
                      residentProgress
                    )
                  }
                  label={"Deterioration"}
                  id={`Deterioration`}
                />

                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "No Progress",
                      setResidentProgress,
                      residentProgress
                    )
                  }
                  label={"No Progress"}
                  id={`NoProgress`}
                />

                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Small Progress ",
                      setResidentProgress,
                      residentProgress
                    )
                  }
                  label={"Small Progress "}
                  id={`SmallProgress `}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Good Progress",
                      setResidentProgress,
                      residentProgress
                    )
                  }
                  label={"Good Progress"}
                  id={`GoodProgress`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "Goal Achieved",
                      setResidentProgress,
                      residentProgress
                    )
                  }
                  label={"Goal Achieved"}
                  id={`GoalAchieved`}
                />
              </div>
            </Form.Group>

            <InputMaker
              label={"Please specify"}
              setState={setPleaseSpecify}
              placeholder={"Enter Text"}
              type={"text"}
              value={pleaseSpecify}
            />

            <InputMaker
              label={"Resident Response"}
              setState={setResidentResponse}
              placeholder={"Enter Text"}
              type={"text"}
              value={residentResponse}
            />

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>
                  Any significant information not specified above?
                </span>
                <div className="btns">
                  <RadioMaker
                    name="significantInfoNotSpecifiedAbove1"
                    setValue={setSignificantInfoNotSpecifiedAbove1}
                    value={true}
                    id={"significantInfoNotSpecifiedAbovefirst"}
                    label={"Yes"}
                    checked={significantInfoNotSpecifiedAbove1}
                  />

                  <RadioMaker
                    name="significantInfoNotSpecifiedAbove1"
                    setValue={setSignificantInfoNotSpecifiedAbove1}
                    value={false}
                    id={"significantInfoNotSpecifiedAboveSecond"}
                    label={"No"}
                    checked={significantInfoNotSpecifiedAbove1}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <InputMaker
              label={"Please specify"}
              setState={setPleaseSpecify1}
              placeholder={"Enter Text"}
              type={"text"}
              value={pleaseSpecify1}
            />

            <InputMaker
              label={"Date"}
              setState={setPleaseSpecify1Date}
              placeholder={""}
              type={"date"}
              value={pleaseSpecify1Date}
            />

            <InputMaker
              label={"Behavioral Health Technician Name"}
              setState={setBehavioralTechnicianName}
              placeholder={""}
              type={"text"}
              value={behavioralTechnicianName}
            />

            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="signed"
                >
                  {" "}
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
                {behavioralTechnicianSignature && (
                  <p>Digitally Sign by {behavioralTechnicianSignature} </p>
                )}
              </div>
            </div>

            <InputMaker
              label={"Behavioral Health Professional Name"}
              setState={setBehavioralHealthProfessionalName}
              placeholder={""}
              type={"text"}
              value={behavioralHealthProfessionalName}
            />

            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button
                  type="button"
                  onClick={() => setOpen1(true)}
                  className="signed"
                >
                  {" "}
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
                {behavioralHealthProfessionalSignature && (
                  <p>
                    Digitally Sign by {behavioralHealthProfessionalSignature}{" "}
                  </p>
                )}
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
          </Form>
        </div>
      </div>
    </>
  );
};

export default HOC(CreateTherapyNote);
