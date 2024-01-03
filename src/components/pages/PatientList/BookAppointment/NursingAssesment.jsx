import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
// import "./InitialAssesment.css";

const NursingAssessment = () => {
  const navigate = useNavigate();
  const options = [
    {
      label: "9:30am",
      value: "9:30",
    },
    {
      label: "10:00am",
      value: "10:00",
    },
    {
      label: "10:30am",
      value: "10:30",
    },
    {
      label: "11:00am",
      value: "11:00",
    },
    {
      label: "11:30am",
      value: "11:30",
    },
    {
      label: "12:00am",
      value: "12:00",
    },
  ];
  const [selected, setSelected] = useState([]);
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
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            INITIAL NURSING ASSESSMENT
          </p>
          <p></p>
        </div>
      </div>
      <div className="top-div-personal">
        <div style={{ width: "100%" }} className="form-container">
          <form style={{ width: "100%" }} action="">
            <div className="form-section">
              <h2>Resident’s Details</h2>
              <div className="form-field">
                <label htmlFor="dateOfBirth">Today’s Date</label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  id="dateOfBirth"
                  value=""
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="admissionDate">Admission Date</label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  id="dateOfBirth"
                  value=""
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Resident Full Name</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="admissionDate">Date of Birth</label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  id="dateOfBirth"
                  value=""
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Age</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Enter age"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Select Gender</label>
                <div className="genderdiv">
                  <div className="genderbox">
                    <input
                      type="radio"
                      id="maleRadio"
                      name="gender"
                      className="custom-radio"
                    />
                    <label htmlFor="maleRadio">Male</label>
                  </div>
                  <div className="genderbox">
                    <input
                      type="radio"
                      id="femaleRadio"
                      name="gender"
                      className="custom-radio"
                    />
                    <label htmlFor="femaleRadio">Female</label>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Admission Diagnosis</label>
                <textarea
                  type="text"
                  id="AHCCCS"
                  value=""
                  rows={5}
                  cols={130}
                  placeholder="Enter text."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="gender">Code Status</label>
                <select id="gender" value="" required>
                  <option value="">Full Code</option>
                  <option value="Male">Full Code</option>
                  <option value="Female">DNR</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="admissionDate">Date of Last TB Screening</label>
                <input
                  style={{ color: "#1A9FB2" }}
                  type="date"
                  id="dateOfBirth"
                  value=""
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="gender">Results of TB Screening</label>
                <select id="gender" value="" required>
                  <option value="">Negative</option>
                  <option value="Male">Positive</option>
                  <option value="Female">Pending</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="gender">
                  Care to be provided at Devine Care
                </label>
                <select id="gender" value="" required>
                  <option value="">Physical Services</option>
                  <option value="Male">Behavioral Health Services</option>
                </select>
              </div>
              <h2>Vitals</h2>
              <div className="form-field">
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "20px" }}>
                    <label htmlFor="AHCCCS">Blood Pressure</label>
                    <input
                      type="text"
                      id="AHCCCS"
                      value=""
                      required
                      style={{ width: "166px", height: "50px" }}
                    />
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <label htmlFor="AHCCCS">Pulse Rate</label>
                    <input
                      type="text"
                      id="AHCCCS"
                      value=""
                      required
                      style={{ width: "166px", height: "50px" }}
                    />
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <label htmlFor="AHCCCS">Respiration Rate</label>
                    <input
                      type="text"
                      id="AHCCCS"
                      value=""
                      required
                      style={{ width: "166px", height: "50px" }}
                    />
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <label htmlFor="AHCCCS">Body Temperature</label>
                    <input
                      type="text"
                      id="AHCCCS"
                      value=""
                      required
                      style={{ width: "166px", height: "50px" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="AHCCCS">Blood Oxygen</label>
                    <input
                      type="text"
                      id="AHCCCS"
                      value=""
                      required
                      style={{ width: "166px", height: "50px" }}
                    />
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <div style={{ marginRight: "20px" }}>
                    <label htmlFor="AHCCCS">Weight</label>
                    <input
                      type="text"
                      id="AHCCCS"
                      value=""
                      required
                      style={{ width: "166px", height: "50px" }}
                    />
                  </div>
                  <div style={{ marginRight: "20px" }}>
                    <label htmlFor="AHCCCS">Height</label>
                    <input
                      type="text"
                      id="AHCCCS"
                      value=""
                      required
                      style={{ width: "166px", height: "50px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Allergies:</label>
                <input type="text" id="AHCCCS" value="" required />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Allergies:</label>
                <input type="text" id="AHCCCS" value="" required />
              </div>
              <div className="formsheading">
                <h6>Covid-19 Screening</h6>
                <p>
                  Regardless of your vaccination status, have you experienced
                  any of the symptoms bellow in the past 48 hours?
                </p>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">New onset of fever or chills?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
                <label htmlFor="">
                  New onset of shortness of breath or difficulty breathing?
                </label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">New onset of sore throat?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
                <label htmlFor="">New onset of diarrhea?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>

              <div className="yeschechbox2">
                <label htmlFor="">New onset of cough?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
                <label htmlFor=""> New onset of muscle or body aches?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">New onset of congestion or runny nose?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
                <label htmlFor="">New onset of loss of taste or smell?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">New onset of fatigue? </label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
                <label htmlFor="">New onset of headache?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">New onset of nausea or vomiting?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>

              <div className="formsheading">
                <h6>Review Of Systems</h6>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Constitutional:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Fever</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span> Poor appetite</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Unexplained weight gain</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Fatigue</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Chills</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Change in appetite</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Night Sweats</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Unexplained weight loss</span>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Cardiovascular:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Chest pain</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Shortness of breath</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Racing Pulse</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Swelling of the feet/hands</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Irregular heartbeat</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>
                    Is your blood pressure under control? Yes / No / Unsure
                  </span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Endocrine:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Excess thirst</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Excessive urination</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Heat Intolerance</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Cold Intolerance</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Hair loss</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Dry skin Is resident’s blood sugar under control?</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Unsure</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>n/a</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Gastrointestinal:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Abdominal pain</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Nausea</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Diarrhea</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Bloody stools</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Stomach Ulcers</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Constipation</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Trouble Swallowing</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Jaundice/yellow skin</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Genitourinary: </label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Genital sores or ulcers</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Kidney failure/problems</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Kidney stones</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Painful/difficult urination</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Testicular pain</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Urinary discharge</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Hematology/Oncology:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Easy bruising</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Prolonged bleeding</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Head, Ease, Nose, Throat: </label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Hearing loss</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Sore throat</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Runny nose</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Dry mouth</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Jaw Claudication (pain in jaw when chewing)</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Earache</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Missing teeth</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Integumentary:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Rash</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Change in mole</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Skin sores</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Skin cancer</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Sever itching </span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Loss of hair</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Musculoskeletal: </label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Muscle aches</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Difficulty laying flat due to muscle pain</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Back pain</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Joint pain</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Deformities</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Psychiatric: </label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Insomnia</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Irritability</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Depression</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Anxiety</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Recurrent bad thoughts</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Mood swings</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Hallucinations</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Compulsions</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>

              <div className="yeschechbox2">
                <label htmlFor="">Neurologic: </label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Weakness</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Headaches</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Scalp tenderness</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Dizziness</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Problems with balance</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Paralysis of extremities</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Tremor</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Stroke</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Numbness or tingling</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Seizures or convulsions</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Fainting</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Problems walking</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Respiratory </label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Wheezing</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Cough</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Coughing up blood</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Severe or Frequent colds</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Difficulty breathing</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Allergic/Immunologic: </label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>DENIES</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Seasonal allergies</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Hay fever symptoms</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Itching </span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span> Frequent infections</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span> Exposure to HIV</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comment:</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Suicidal Risk Assessment:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Denies Symptoms Bellow</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Behavioral symptoms: </label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>self-injuring</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>reckless behavior</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>impulsive behaviors</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>shifts in temperament</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>no longer enjoying previous activities</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>talking or writing about death</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Physical symptoms:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>insomnia</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>hypersomnia</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>changes in appetite</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>weight loss/gain</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>panic attacks</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Psychosocial symptoms:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span> helplessness/hopelessness</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span> worthlessness</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>depression</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>anxiety</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>mood swings</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Irritable</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Resident contracts for safety.</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>
                    Resident Safety Plan to be completed within 48 hours of
                    admission.
                  </span>
                </div>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Current Medications:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>
                    Verified that a list of current medications is present on
                    file.
                  </span>
                </div>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Nutrition: Diet: </label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>As tolerated</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Special diet ordered: _____________________</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">Fluid restrictions?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>no</span>
                </div>
              </div>
              <div className="yeschechbox2">
                <label htmlFor="">
                  Skin Check - Areas requiring treatment marked and labeled:{" "}
                </label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Resident denies skin concerns</span>
                </div>
              </div>
              <div className="form-field">
                <div className="bodydiv">
                  <div className="bodyiamge">
                    <input
                      type="checkbox"
                      style={{
                        width: "22px",
                        height: "22px",
                        padding: "0",
                        marginRight: "10px",
                        color: "#000000",
                      }}
                    />
                    <img
                      src={"/Intakes/body/1.png"}
                      alt="Selectable Image"
                      style={{ width: "101px", height: "189px" }}
                    />
                  </div>
                  <div className="bodyiamge">
                    <input
                      type="checkbox"
                      style={{
                        width: "22px",
                        height: "22px",
                        padding: "0",
                        marginRight: "10px",
                        color: "#000000",
                      }}
                    />
                    <img
                      src={"/Intakes/body/2.png"}
                      alt="Selectable Image"
                      style={{ width: "101px", height: "189px" }}
                    />
                  </div>
                  <div className="bodyiamge">
                    <input
                      type="checkbox"
                      style={{
                        width: "22px",
                        height: "22px",
                        padding: "0",
                        marginRight: "10px",
                        color: "#000000",
                      }}
                    />
                    <img
                      src={"/Intakes/body/3.png"}
                      alt="Selectable Image"
                      style={{ width: "101px", height: "189px" }}
                    />
                  </div>
                  <div className="bodyiamge">
                    <input
                      type="checkbox"
                      style={{
                        width: "22px",
                        height: "22px",
                        padding: "0",
                        marginRight: "10px",
                        color: "#000000",
                      }}
                    />
                    <img
                      src={"/Intakes/body/4.png"}
                      alt="Selectable Image"
                      style={{ width: "101px", height: "189px" }}
                    />
                  </div>
                </div>
                <div className="bodydiv">
                  <div className="bodyiamge">
                    <input
                      type="checkbox"
                      style={{
                        width: "22px",
                        height: "22px",
                        padding: "0",
                        marginRight: "10px",
                        color: "#000000",
                      }}
                    />
                    <img
                      src={"/Intakes/body/5.png"}
                      alt="Selectable Image"
                      style={{ width: "101px", height: "189px" }}
                    />
                  </div>
                  <div className="bodyiamge">
                    <input
                      type="checkbox"
                      style={{
                        width: "22px",
                        height: "22px",
                        padding: "0",
                        marginRight: "10px",
                        color: "#000000",
                      }}
                    />
                    <img
                      src={"/Intakes/body/6.png"}
                      alt="Selectable Image"
                      style={{ width: "101px", height: "189px" }}
                    />
                  </div>
                  <div className="bodyiamge">
                    <input
                      type="checkbox"
                      style={{
                        width: "22px",
                        height: "22px",
                        padding: "0",
                        marginRight: "10px",
                        color: "#000000",
                      }}
                    />
                    <img
                      src={"/Intakes/body/7.png"}
                      alt="Selectable Image"
                      style={{ width: "101px", height: "189px" }}
                    />
                  </div>
                  <div className="bodyiamge">
                    <input
                      type="checkbox"
                      style={{
                        width: "22px",
                        height: "22px",
                        padding: "0",
                        marginRight: "10px",
                        color: "#000000",
                      }}
                    />
                    <img
                      src={"/Intakes/body/8.png"}
                      alt="Selectable Image"
                      style={{ width: "101px", height: "189px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">BHT Name:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div class="file-upload-box">
                <input type="file" id="fileInput" style={{ display: "none" }} />
                <div class="upload-icon">
                  <img
                    src={"/Dashboard/save.png"}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div style={{ display: "block" }}>
                  <button className="upload-button1" onclick="uploadFile()">
                    SAVED AS DRAFT
                  </button>
                  <button className="upload-button" onclick="uploadFile()">
                    SAVED AND SIGNED
                  </button>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">RN Name:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Enter Name"
                  required
                />
              </div>
              <div class="file-upload-box">
                <input type="file" id="fileInput" style={{ display: "none" }} />
                <div class="upload-icon">
                  <img
                    src={"/Dashboard/save.png"}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <div style={{ display: "block" }}>
                  <button className="upload-button1" onclick="uploadFile()">
                    SAVED AS DRAFT
                  </button>
                  <button className="upload-button" onclick="uploadFile()">
                    SAVED AND SIGNED
                  </button>
                </div>
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="initalsubmit">
                SUBMIT DETAILS
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NursingAssessment;
