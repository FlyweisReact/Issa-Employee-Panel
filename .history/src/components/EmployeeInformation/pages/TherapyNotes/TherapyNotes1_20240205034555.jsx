/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TherapyNotes1.css";
import { Form } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { MultiSelect } from "react-multi-select-component";
import { RadioMaker } from "../../../../Helper/Makers";

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

  function check_handler(value, setState, state) {
    const checkIfPresent = state?.some((i) => i === value);
    if (checkIfPresent) {
      const filtered = state?.filter((i) => i !== value);
      setState(filtered);
    } else {
      setState((prev) => [...prev, value]);
    }
  }

  //
  const [residentId, setResidentId] = useState(["residentId1", "residentId2"]);
  const [date, setDate] = useState("2023-01-01");
  const [startTime, setStartTime] = useState("09:00 AM");
  const [endTime, setEndTime] = useState("10:00 AM");
  const [totalDuration, setTotalDuration] = useState("1 hour");
  const [behaviorTech, setBehaviorTech] = useState("Some behavior");
  const [location, setLocation] = useState("Therapy room");
  const [topicId, setTopicId] = useState("someTopicId");
  const [residentCompletedSession, setResidentCompletedSession] =
    useState(true);
  const [treatmentGoalsAddressed, setTreatmentGoalsAddressed] = useState(false);
  const [residentParticipation, setResidentParticipation] = useState([]);
  const [residentQuality, setResidentQuality] = useState([]);
  const [
    significantInfoNotSpecifiedAbove,
    setSignificantInfoNotSpecifiedAbove,
  ] = useState(false);
  const [residentAppearance, setResidentAppearance] = useState([""]);
  const [residentMood, setResidentMood] = useState(["Normal"]);
  const [residentProgress, setResidentProgress] = useState(["Good Progress"]);
  const [pleaseSpecify, setPleaseSpecify] = useState("Some details");
  const [residentResponse, setResidentResponse] = useState("Positive response");
  const [
    significantInfoNotSpecifiedAbove1,
    setSignificantInfoNotSpecifiedAbove1,
  ] = useState(false);
  const [pleaseSpecify1, setPleaseSpecify1] = useState("Some other details");

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

              <div className="checkbox-container colored ">
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "100",
                      setResidentParticipation,
                      residentParticipation
                    )
                  }
                  label={"100"}
                  id={`100`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "75",
                      setResidentParticipation,
                      residentParticipation
                    )
                  }
                  label={"75"}
                  id={`75`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "50",
                      setResidentParticipation,
                      residentParticipation
                    )
                  }
                  label={"50"}
                  id={`50`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "25",
                      setResidentParticipation,
                      residentParticipation
                    )
                  }
                  label={"25"}
                  id={`25`}
                />
                <Form.Check
                  type={"checkbox"}
                  onChange={() =>
                    check_handler(
                      "None",
                      setResidentParticipation,
                      residentParticipation
                    )
                  }
                  label={"None"}
                  id={`none`}
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
                    id={"significantInfoNotSpecifiedAbove!"}
                    label={"Yes"}
                    checked={significantInfoNotSpecifiedAbove}
                  />
                  <RadioMaker
                    name="significantInfoNotSpecifiedAbove"
                    setValue={setSignificantInfoNotSpecifiedAbove}
                    value={false}
                    id={"significantInfoNotSpecifiedAbove2"}
                    label={"No"}
                    checked={!significantInfoNotSpecifiedAbove}
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
                      "Bizarre",
                      setResidentAppearance,
                      residentAppearance
                    )
                  }
                  label={"Bizarre"}
                  id={`Bizarre`}
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
