/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TherapyNotes1.css";
import { Form } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";

const TherapyNotes1 = () => {
  const navigate = useNavigate();
  const [residentValues, setResidentValues] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedQualities, setSelectedQualities] = useState([]);
  const [moodValues, setMoodValues] = useState([]);
  const [progressValues, setProgressValues] = useState([]);
  const [selectedPatinets, setSelectedPatinets] = useState([]);
  const [patients, setPatients] = useState([]);
  const [topic, setTopic] = useState([]);

  const [sessionData, setSessionData] = useState({
    residentId: setSelectedPatinets || [],
    date: "",
    startTime: "",
    endTime: "",
    totalDuration: "",
    behaviorTech: "",
    location: "",
    topicId: "",
    residentCompletedSession: false,
    attitude: [],
    treatmentGoalsAddressed: false,
    residentParticipation: 0,
    residentQuality: [],
    significantInfoNotSpecifiedAbove: false,
    residentAppearance: [],
    residentMood: [],
    residentProgress: [],
    pleaseSpecify: "",
    residentResponse: "",
    significantInfoNotSpecifiedAbove1: false,
    pleaseSpecify1: "",
  });

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleResidenceChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setResidentValues((prevValues) => [...prevValues, name]);
    } else {
      setResidentValues((prevValues) =>
        prevValues.filter((value) => value !== name)
      );
    }
  };

  const handleMoodChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setMoodValues((prevValues) => [...prevValues, name]);
    } else {
      setMoodValues((prevValues) =>
        prevValues.filter((value) => value !== name)
      );
      setSessionData({
        ...sessionData,
        mood: moodValues.filter((value) => value !== name),
      });
    }
  };

  const handleCheckboxChange1 = (quality) => {
    if (selectedQualities.includes(quality)) {
      setSelectedQualities(
        selectedQualities.filter((item) => item !== quality)
      );
      setSessionData({
        ...sessionData,
        residentQuality: selectedQualities.filter((item) => item !== quality),
      });
    } else {
      setSelectedQualities([...selectedQualities, quality]);
    }
  };

  const handleProgressChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setProgressValues((prevValues) => [...prevValues, name]);
      setSessionData({
        ...sessionData,
        residentProgress: [...progressValues, name],
      });
    } else {
      setProgressValues((prevValues) =>
        prevValues.filter((value) => value !== name)
      );
    }
  };

  const handleRadioChange = (option) => {
    setSelectedOptions([option]);
    setSessionData({ ...sessionData, behaviorTech: option });
  };

  const handleChange = (field, value) => {
    setSessionData({ ...sessionData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData("employee/createTherapySession", sessionData);
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
    handleChange("topicId", obj?._id);
    setNoteSummary(obj?.notesSummary);
    setPlanRecommendation(obj?.planRecommendation);
  };

  // New Fields
  const [attitude, setAttitude] = useState([]);

  function check_handler(value) {
    console.log("Runned");
    const checkIfPresent = attitude?.some((i) => i === value);
    console.log(checkIfPresent);
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
                    name="behaviorTech"
                    type={"radio"}
                    isValid
                    id={"behaviorTech1"}
                  />
                  <Form.Check.Label htmlFor="behaviorTech1">
                    Group Therapy
                  </Form.Check.Label>
                </Form.Check>
              </div>

              <div className="main">
                <Form.Check type={"radio"}>
                  <Form.Check.Input
                    name="behaviorTech"
                    type={"radio"}
                    isValid
                    id={"behaviorTech2"}
                  />
                  <Form.Check.Label htmlFor="behaviorTech2">
                    Individual Therapy
                  </Form.Check.Label>
                </Form.Check>
              </div>
              <div className="main">
                <Form.Check type={"radio"}>
                  <Form.Check.Input
                    name="behaviorTech"
                    type={"radio"}
                    isValid
                    id={"behaviorTech3"}
                  />
                  <Form.Check.Label htmlFor="behaviorTech3">
                    In Person
                  </Form.Check.Label>
                </Form.Check>
              </div>
              <div className="main">
                <Form.Check type={"radio"}>
                  <Form.Check.Input
                    name="behaviorTech"
                    type={"radio"}
                    isValid
                    id={"behaviorTech4"}
                  />
                  <Form.Check.Label htmlFor="behaviorTech4">
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
                value={selectedPatinets}
                onChange={setSelectedPatinets}
                labelledBy="Select"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Today's Date :
              </Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => {
                  setSessionData({ ...sessionData, date: e.target.value });
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Start time:
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => handleChange("startTime", e.target.value)}
                placeholder="Enter  Preferred Contact Information"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                End time:
              </Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => handleChange("endTime", e.target.value)}
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Total Duration:
              </Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => handleChange("duration", e.target.value)}
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Behavioral Health Technician:
              </Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => handleChange("behaviorTech", e.target.value)}
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Location:
              </Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="Enter  text"
              />
            </Form.Group>

            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              Session Summary
            </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Topic:
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

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>
                  Resident Completed Therapy Session
                </span>
                <div className="btns">
                  <Form.Check type={"radio"}>
                    <Form.Check.Input
                      type={"radio"}
                      isValid
                      required
                      onClick={() =>
                        handleChange("residentCompletedSession", true)
                      }
                      value={true}
                      checked={sessionData?.residentCompletedSession}
                      name="residentCompletedSession"
                      id="residentCompletedSession1"
                    />
                    <Form.Check.Label htmlFor="residentCompletedSession1">
                      {" "}
                      Yes{" "}
                    </Form.Check.Label>
                  </Form.Check>

                  <Form.Check type={"radio"}>
                    <Form.Check.Input
                      type={"radio"}
                      isValid
                      required
                      onClick={() =>
                        handleChange("residentCompletedSession", false)
                      }
                      value={false}
                      checked={!sessionData?.residentCompletedSession}
                      name="residentCompletedSession"
                      id="residentCompletedSession2"
                    />
                    <Form.Check.Label htmlFor="residentCompletedSession2">
                      No
                    </Form.Check.Label>
                  </Form.Check>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <Form.Check
                  type={"checkbox"}
                  onChange={() => check_handler('Hi')}
                  label={"Cooperative"}
                  // checked={checked}
                  id={id}
                />
                <Form.Check
                  type={"checkbox"}
                  id={`check-api-yes`}
                  onChange={() => console.log()}
                >
                  <Form.Check.Input
                    name="checkbox1"
                    type={"checkbox"}
                    isValid
                    required
                  />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Cooperative
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check
                  type={"radio"}
                  id={`check-api-no-focused`}
                  checked={selectedOptions.includes("Focused")}
                  onChange={() => handleRadioChange("Focused")}
                >
                  <Form.Check.Input name="radio1" type={"checkbox"} isValid />
                  <Form.Check.Label>Focused</Form.Check.Label>
                </Form.Check>

                <Form.Check
                  type={"radio"}
                  id={`check-api-no-suspicious`}
                  checked={selectedOptions.includes("Suspicious")}
                  onChange={() => handleRadioChange("Suspicious")}
                >
                  <Form.Check.Input name="radio1" type={"checkbox"} isValid />
                  <Form.Check.Label>Suspicious</Form.Check.Label>
                </Form.Check>

                <Form.Check
                  type={"radio"}
                  id={`check-api-no-distracted`}
                  checked={selectedOptions.includes("Distracted")}
                  onChange={() => handleRadioChange("Distracted")}
                >
                  <Form.Check.Input name="radio1" type={"checkbox"} isValid />
                  <Form.Check.Label>Distracted</Form.Check.Label>
                </Form.Check>
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
                Were there any treatment goals addressed:
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input
                    checked={sessionData?.treatmentGoalsAddressed === true}
                    onClick={() =>
                      handleChange("treatmentGoalsAddressed", true)
                    }
                    required
                    name="radio1"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Yes
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input
                    checked={sessionData?.treatmentGoalsAddressed === false}
                    onClick={() =>
                      handleChange("treatmentGoalsAddressed", false)
                    }
                    name="radio1"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label>No</Form.Check.Label>
                </Form.Check>
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
                Resident Participation:
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input
                    name="radio11"
                    checked={sessionData?.residentParticipation === 100}
                    onClick={() => handleChange("residentParticipation", 100)}
                    type={"radio"}
                    isValid
                    required
                  />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    100%
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input
                    onClick={() => handleChange("residentParticipation", 75)}
                    name="radio11"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label>75%</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input
                    name="radio11"
                    onClick={() => handleChange("residentParticipation", 50)}
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label>50%</Form.Check.Label>
                </Form.Check>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input
                    name="radio11"
                    onClick={() => handleChange("residentParticipation", 25)}
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    25%
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input
                    name="radio11"
                    onClick={() => handleChange("residentParticipation", 0)}
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label>None</Form.Check.Label>
                </Form.Check>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Form.Check
                  type={"checkbox"}
                  id={`check-api-attentive`}
                  checked={selectedQualities.includes("Attentive")}
                  onChange={() => handleCheckboxChange("Attentive")}
                >
                  <Form.Check.Input
                    name="checkbox1"
                    type={"checkbox"}
                    isValid
                    required
                  />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Attentive
                  </Form.Check.Label>
                </Form.Check>

                <Form.Check
                  type={"checkbox"}
                  id={`check-api-supportive`}
                  checked={selectedQualities.includes("Supportive")}
                  onChange={() => handleCheckboxChange1("Supportive")}
                >
                  <Form.Check.Input
                    name="checkbox2"
                    type={"checkbox"}
                    isValid
                  />
                  <Form.Check.Label>Supportive</Form.Check.Label>
                </Form.Check>

                <Form.Check
                  type={"checkbox"}
                  id={`check-api-sharing`}
                  checked={selectedQualities.includes("Sharing")}
                  onChange={() => handleCheckboxChange1("Sharing")}
                >
                  <Form.Check.Input
                    name="checkbox3"
                    type={"checkbox"}
                    isValid
                  />
                  <Form.Check.Label>Sharing</Form.Check.Label>
                </Form.Check>

                <Form.Check
                  type={"checkbox"}
                  id={`check-api-intrusive`}
                  checked={selectedQualities.includes("Intrusive")}
                  onChange={() => handleCheckboxChange1("Intrusive")}
                >
                  <Form.Check.Input
                    name="checkbox4"
                    type={"checkbox"}
                    isValid
                  />
                  <Form.Check.Label>Intrusive</Form.Check.Label>
                </Form.Check>

                <Form.Check
                  type={"checkbox"}
                  id={`check-api-resistant`}
                  checked={selectedQualities.includes("Resistant")}
                  onChange={() => handleCheckboxChange1("Resistant")}
                >
                  <Form.Check.Input
                    name="checkbox5"
                    type={"checkbox"}
                    isValid
                  />
                  <Form.Check.Label>Resistant</Form.Check.Label>
                </Form.Check>
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
                Any significant information not specified above:
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input
                    onClick={() =>
                      handleChange("significantInfoNotSpecifiedAbove1", "Yes")
                    }
                    name="radio21"
                    type={"radio"}
                    isValid
                    required
                  />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Yes
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input
                    onChange={() =>
                      handleChange("significantInfoNotSpecifiedAbove1", "No")
                    }
                    name="radio21"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label>No</Form.Check.Label>
                </Form.Check>
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
                Resident Appearance:
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id="check-api-neat"
                  label="Neat"
                  name="neat"
                  required
                  checked={residentValues.includes("neat")}
                  onChange={handleResidenceChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-unkept"
                  label="Unkept"
                  name="unkept"
                  checked={residentValues.includes("unkept")}
                  onChange={handleResidenceChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-inappropriate"
                  label="Inappropriate"
                  name="inappropriate"
                  checked={residentValues.includes("inappropriate")}
                  onChange={handleResidenceChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-bizarre"
                  label="Bizarre"
                  name="bizarre"
                  checked={residentValues.includes("bizarre")}
                  onChange={handleResidenceChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-other"
                  label="Other"
                  name="other"
                  checked={residentValues.includes("other")}
                  onChange={handleResidenceChange}
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
                Resident Mood:
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id="check-api-normal"
                  label="Normal"
                  name="normal"
                  // checked={moodValues.includes('normal')}
                  onChange={handleMoodChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-euthymic"
                  label="Euthymic"
                  name="euthymic"
                  // checked={moodValues.includes('euthymic')}
                  onChange={handleMoodChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-anxious"
                  label="Anxious"
                  name="anxious"
                  // checked={moodValues.includes('anxious')}
                  onChange={handleMoodChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-depressed"
                  label="Depressed"
                  name="depressed"
                  // checked={moodValues.includes('depressed')}
                  onChange={handleMoodChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-euphoric"
                  label="Euphoric"
                  name="euphoric"
                  // checked={moodValues.includes('euphoric')}
                  onChange={handleMoodChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-irritable"
                  label="Irritable"
                  name="irritable"
                  // checked={moodValues.includes('irritable')}
                  onChange={handleMoodChange}
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
                Resident Progress:
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Form.Check
                  type="checkbox"
                  id="check-api-deterioration"
                  label="Deterioration"
                  name="deterioration"
                  checked={progressValues.includes("deterioration")}
                  onChange={handleProgressChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-no-progress"
                  label="No Progress"
                  name="noProgress"
                  checked={progressValues.includes("noProgress")}
                  onChange={handleProgressChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-small-progress"
                  label="Small Progress"
                  name="smallProgress"
                  checked={progressValues.includes("smallProgress")}
                  onChange={handleProgressChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-good-progress"
                  label="Good Progress"
                  name="goodProgress"
                  checked={progressValues.includes("goodProgress")}
                  onChange={handleProgressChange}
                />
                <Form.Check
                  type="checkbox"
                  id="check-api-goal-achieved"
                  label="Goal Achieved"
                  name="goalAchieved"
                  checked={progressValues.includes("goalAchieved")}
                  onChange={handleProgressChange}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Please specify</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => handleChange("pleaseSpecify", e.target.value)}
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Resident Response:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  handleChange("residentResponse", e.target.value)
                }
                required
                placeholder="Enter text"
              />
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
                Any significant information not specified above?
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input
                    onClick={() =>
                      handleChange("significantInfoNotSpecifiedAbove1", true)
                    }
                    checked={sessionData?.significantInfoNotSpecifiedAbove1}
                    name="radio131"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    No
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input
                    onClick={(e) =>
                      handleChange("significantInfoNotSpecifiedAbove1", false)
                    }
                    checked={sessionData?.significantInfoNotSpecifiedAbove1}
                    name="radio131"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label>Yes</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Please specify:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => handleChange("pleaseSpecify1", e.target.value)}
                placeholder="Enter text"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                required
                onChange={(e) => handleChange("date", e.target.value)}
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Behavioral Health Technician Name & Signature:
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  handleChange(
                    "behavioralHealthTechnicianNameSignature",
                    e.target.value
                  )
                }
                required
                placeholder="Enter  text"
              />
            </Form.Group>
            <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
              <div className="save-as-draft-btn d-flex w-100">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  SAVE AS DRAFT
                </button>
                <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                  SAVED AND SIGNED
                </button>
              </div>
            </div>
            <Form.Group className="mb-3 mt-5">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Behavioral Health Professional Name & Signature:{" "}
              </Form.Label>
              <Form.Control
                onChange={(e) => handleChange("behaviorTech", e.target.value)}
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <div
              style={{ maxWidth: "370px" }}
              className="save-as-draft-btn-personal"
            >
              <div className="save-as-draft-btn d-flex w-100">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
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
