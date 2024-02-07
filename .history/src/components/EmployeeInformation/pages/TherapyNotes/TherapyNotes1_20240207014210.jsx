/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TherapyNotes1.css";
import { Form } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { InputMaker, MultiSelect, RadioMaker } from "../../../../Helper/Makers";

const TherapyNotes1 = () => {
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
  const [pleaseSpecify1Date , setPleaseSpecifyDa]

  const payload = {
    residentId: residentId?.map((i) => i.value),
    date,
    startTime,
    endTime,
    totalDuration,
    behaviorTech,
    location,
    topicId,
    residentCompletedSession,
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

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>THERAPY NOTES</p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form onSubmit={handleSubmit} className="w-100 text-start">
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
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Resident’s Name: :
              </Form.Label>
              <MultiSelect
                options={options}
                setValue={setResidentId}
                value={residentId}
              />
            </Form.Group>
            <InputMaker
              label={"Today’s Date"}
              setState={setDate}
              placeholder={"Enter Text"}
              type={"date"}
              value={date}
            />
            <InputMaker
              label={"Start time"}
              setState={setStartTime}
              placeholder={"09:00 Am"}
              type={"text"}
              value={startTime}
            />
            <InputMaker
              label={"End time"}
              setState={setEndTime}
              placeholder={"09:00 Am"}
              type={"text"}
              value={endTime}
            />
            <InputMaker
              label={"Total Duration"}
              setState={setTotalDuration}
              placeholder={""}
              type={"text"}
              value={totalDuration}
            />
            <InputMaker
              label={"Behavioral Health Technician"}
              setState={setBehaviorTech}
              placeholder={""}
              type={"text"}
              value={behaviorTech}
            />
            <InputMaker
              label={"Location"}
              setState={setLocation}
              placeholder={""}
              type={"text"}
              value={location}
            />
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              Session Summary
            </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Topic
              </Form.Label>
              <Form.Select
                required
                onChange={(e) => selectHandler(e.target.value)}
              >
                <option value="">Select</option>
                {topic?.data?.reverse()?.map((i) => (
                  <option key={i._id} value={JSON.stringify(i)}>
                    {" "}
                    {i.topic}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Note Summary:
              </Form.Label>
              <div className="summary_bordered">
                {noteSummary?.map((i) => (
                  <p> {i} </p>
                ))}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Recommendation:
              </Form.Label>
              <div className="summary_bordered">
                {planRecommendation?.map((i) => (
                  <p> {i} </p>
                ))}
              </div>
            </Form.Group>

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
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>
                  Resident Completed Therapy Session
                </span>
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
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>
                  Were there any treatment goals addressed
                </span>
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
              </Form.Label>
            </Form.Group>

            <Form.Group
              className="mb-3 Radio_btns"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span style={{ marginRight: "10px" }}>
                Resident Participation
              </span>
              <div className="btns">
                <RadioMaker
                  name="residentParticipation"
                  setValue={setResidentParticipation}
                  value={100}
                  id={"residentParticipation1"}
                  label={"100"}
                  checked={residentParticipation}
                />
                <RadioMaker
                  name="residentParticipation"
                  setValue={setResidentParticipation}
                  value={75}
                  id={"residentParticipation2"}
                  label={"75"}
                  checked={residentParticipation}
                />
                <RadioMaker
                  name="residentParticipation"
                  setValue={setResidentParticipation}
                  value={50}
                  id={"residentParticipation3"}
                  label={"50"}
                  checked={residentParticipation}
                />
                <RadioMaker
                  name="residentParticipation"
                  setValue={setResidentParticipation}
                  value={25}
                  id={"residentParticipation4"}
                  label={"25"}
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
                      "Neat",
                      setResidentAppearance,
                      residentAppearance
                    )
                  }
                  label={"Neat"}
                  id={`Neat`}
                />
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

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" required placeholder="Enter  text" />
            </Form.Group>

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

export default TherapyNotes1;
