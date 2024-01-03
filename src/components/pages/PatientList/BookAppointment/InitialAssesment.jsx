import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import "./InitialAssesment.css";
const InitialAssasement = () => {
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
            BOOK NEW APPOINTMENT
          </p>
          <p></p>
        </div>
      </div>
      <div className="top-div-personal">
        <div style={{ width: "100%" }} className="form-container">
          <p>
            COMPANY NAME has notified
            <input
              type="text"
              style={{ border: "none", borderBottom: "1px dotted black" }}
            />{" "}
            to participate in his/her Service Treatment Plan/Initial Assessment
            on
            <input
              type="text"
              style={{ border: "none", borderBottom: "1px dotted black" }}
            />
          </p>

          <form style={{ width: "100%" }}>
            <h5>Section - 1</h5>
            <div className="form-section">
              <h2>Basic Details</h2>
              <div className="form-field">
                <label htmlFor="residentFullName">Resident Full Name</label>
                <input
                  type="text"
                  id="residentFullName"
                  value=""
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="residentFullName">Gender</label>
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
                <label htmlFor="dateOfBirth">Date of Birth</label>
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
                <label htmlFor="admissionDate">Admission Date:</label>
                <input
                  type="text"
                  id="admissionDate"
                  value=""
                  placeholder="Enter Date"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">AHCCCS</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="preferredlanguage">Preferred Language</label>
                <select
                  style={{ color: "#1A9FB2" }}
                  id="preferredlanguage"
                  value=""
                  required
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="ethnicity">Ethnicity</label>
                <select
                  style={{ color: "#1A9FB2" }}
                  id="ethnicity"
                  value=""
                  required
                >
                  <option value="Asian">Asian</option>
                  <option value="Asian">Asian</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="admissionstatus">Admission Status</label>
                <select
                  style={{ color: "#1A9FB2" }}
                  id="admissionstatus"
                  value=""
                  required
                >
                  <option value="Voluntary">Voluntary</option>
                  <option value="Voluntary">Court Ordered Treatment</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="form-field">
                <label
                  htmlFor="programlocation&address"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Program Location & Address{" "}
                  <img style={{maxWidth: "220px", maxHeight: "20px",width:"auto",height:"auto"}} src="/locate.png" alt="locate" />
                </label>
                <textarea
                  id="programlocation&address"
                  value=""
                  rows={5}
                  cols={130}
                  placeholder="Enter Full Address"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="guardianship">Guardianship:</label>
                <input
                  type="text"
                  id="guardianship"
                  value=""
                  placeholder="Enter name"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="attorneystatus">
                  Power of Attorney Status:
                </label>
                <input
                  type="text"
                  id="attorneystatus"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="todaydate">Today’s Date:</label>
                <input
                  type="date"
                  id="todaydate"
                  value=""
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="fidname">Guardianship/POA/PUB FID Name:</label>
                <input
                  type="text"
                  id="fidname"
                  value=""
                  placeholder="Enter name"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Approved By:</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter name"
                  required
                />
              </div>
              <h2>Other Details</h2>
              <div className="form-field">
                <label htmlFor="reasonadmission">
                  Reason for Admission to Services
                </label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">Depression</option>
                  <option value="Enter text">Mood changes</option>
                  <option value="Enter text">
                    Trouble falling or staying asleep
                  </option>
                  <option value="Enter text">Mood swings</option>
                  <option value="Enter text">Social withdrawal</option>
                  <option value="Enter text">Changes in eating habits</option>
                  <option value="Enter text">Feelings of anger</option>
                  <option value="Enter text">Negative thoughts</option>
                  <option value="Enter text">Confused thinking</option>
                  <option value="Enter text">Irritability</option>
                  <option value="Enter text">Loss of interest</option>
                  <option value="Enter text">Fatigue or low energy</option>
                  <option value="Enter text">Difficulty concentrating</option>
                  <option value="Enter text">Delusions</option>
                  <option value="Enter text">Hallucinations</option>
                  <option value="Enter text">Substance use</option>
                  <option value="Enter text">Stress</option>
                  <option value="Enter text">Trouble coping</option>
                  <option value="Enter text">Feelings of fear</option>
                  <option value="Enter text">Grief/Loss</option>
                  <option value="Enter text">Eating Disorder</option>
                  <option value="Enter text">Danger to self</option>
                  <option value="Enter text">Danger to others</option>
                  <option value="Enter text">Lack of self care</option>
                  <option value="Enter text">
                    Inability to maintain safety
                  </option>
                  <option value="Enter text">Autism Spectrum Disorder</option>
                  <option value="Enter text">Bipolar Disorder</option>
                  <option value="Enter text">
                    Inability to maintain self care
                  </option>
                  <option value="Enter text">
                    Inability to self administer
                  </option>
                  <option value="Enter text">medication</option>
                  <option value="Enter text">Conduct Disorder</option>
                  <option value="Enter text">
                    Inappropriate Sexual Behavior
                  </option>
                  <option value="Enter text">Schizophrenia Disorder</option>
                  <option value="Enter text">Major Depressive Disorder</option>
                  <option value="Enter text">Obsessive Disorder</option>
                  <option value="Enter text">Psychosis</option>
                  <option value="Enter text">Abused</option>
                  <option value="Enter text">Assaulted</option>

                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">
                  Resident’s Goals:
                </label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">Resident’s Strength</label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">Self motivated</option>
                  <option value="Enter text">Loving</option>
                  <option value="Enter text">Honesty</option>
                  <option value="Enter text">Helping others</option>
                  <option value="Enter text">Communication</option>
                  <option value="Enter text">Creative</option>
                  <option value="Enter text">Patient</option>
                  <option value="Enter text">Dedication</option>
                  <option value="Enter text">Coloring</option>
                  <option value="Enter text">Decision making</option>
                  <option value="Enter text">Team work</option>
                  <option value="Enter text">Family</option>
                  <option value="Enter text">Writing</option>
                  <option value="Enter text">Coloring</option>
                  <option value="Enter text">Art</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">
                  Resident’s Limitation(s)
                </label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">
                  Current Behavioural Issues / Symptoms
                </label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <label htmlFor="programlocation&address">
                Identified Needs/targeted Behaviors Intervention(s) to Meet
                Objectives
              </label>
              <div className="needs-interventions-container">
                <div className="needs-interventions-column">
                  <h2>Needs</h2>
                  <ul>
                    {/* {needs.map((need, index) => (
                                    <li key={index}>{need}</li>
                                ))} */}
                    <li>1.</li>
                    <li>2.</li>
                    <li>3.</li>
                    <li>4.</li>
                    <li style={{ borderBottom: "none" }}>5.</li>
                  </ul>
                </div>
                <div className="needs-interventions-column">
                  <h2>Interventions</h2>
                  <ul>
                    {/* {interventions.map((intervention, index) => (
                                    <li key={index}>{intervention}</li>
                                ))} */}
                    <li>1.</li>
                    <li>2.</li>
                    <li>3.</li>
                    <li>4.</li>
                    <li style={{ borderBottom: "none" }}>5.</li>
                  </ul>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Discharge Plan</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="todaydate">Estimated Date of Discharge</label>
                <input
                  type="date"
                  id="todaydate"
                  value=""
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>

              <div class="checkbox-container1">
                <div class="checkoptions1">
                  <div class="checkboxitem1">
                    <input type="checkbox" />
                    <span>
                      {" "}
                      Yes, I (Resident/guardian) am in agreement with the types
                      and levels of services included in my behavior plan.
                    </span>
                  </div>
                  <div class="checkboxitem1">
                    <input type="checkbox" />
                    <span>
                      No, I (Resident/guardian) disagree with the types and/or
                      levels of some or all of the services included in my
                      behavioral health treatment plan. By checking this box, I
                      (Resident/guardian) will receive the services that I have
                      agreed to receive and may appeal the treatment team’s
                      decision to not include all the types and/ or levels of
                      services that I have requested. *
                    </span>
                  </div>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="approvedby">Resident/Guardian name:</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter name"
                  required
                />
              </div>
              <div class="file-upload-box">
                <input type="file" id="fileInput" style={{ display: "none" }} />
                <div class="upload-icon">
                  <img
                    src={"/Dashboard/save.png"}
                    alt=""
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      width: "auto",
                      height: "auto",
                    }}
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
                <label htmlFor="todaydate">Date</label>
                <input
                  type="date"
                  id="todaydate"
                  value=""
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Staff name:</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter name"
                  required
                />
              </div>
              <div class="file-upload-box">
                <input type="file" id="fileInput" style={{ display: "none" }} />
                <div class="upload-icon">
                  <img
                    src={"/Dashboard/save.png"}
                    alt=""
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      width: "auto",
                      height: "auto",
                    }}
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
                <label htmlFor="todaydate">Date</label>
                <input
                  type="date"
                  id="todaydate"
                  value=""
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">BHP name, credentials:</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter name"
                  required
                />
              </div>
              <div class="file-upload-box">
                <input type="file" id="fileInput" style={{ display: "none" }} />
                <div class="upload-icon">
                  <img
                    src={"/Dashboard/save.png"}
                    alt=""
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      width: "auto",
                      height: "auto",
                    }}
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
                <label htmlFor="todaydate">Date</label>
                <input
                  type="date"
                  id="todaydate"
                  value=""
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Other name:</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter name"
                  required
                />
              </div>
              <div class="file-upload-box">
                <input type="file" id="fileInput" style={{ display: "none" }} />
                <div class="upload-icon">
                  <img
                    src={"/Dashboard/save.png"}
                    alt=""
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      width: "auto",
                      height: "auto",
                    }}
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
                <label htmlFor="approvedby">Relationship to Resident</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Other name:</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter name"
                  required
                />
              </div>
              <h5>Section - 2</h5>
              <div className="formsheading">
                <p>
                  A. Currently prescribed medications are attached on a separate
                  page.
                </p>
                <p>B. Current and Past Medical/Psychiatric Conditions.</p>
                <h6>Conditions</h6>
              </div>

              <div className="yeschechbox">
                <label htmlFor="">Diabetes</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Heart disease / heart attack</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">History of stroke</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">High Blood Pressure</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">
                  Lung disease (ie asthma, COPD, emphysema)
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
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Seizures</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Cancer</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Liver/kidney disease</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Thyroid disorder</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">History of head trauma/traumatic brain</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Injury</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Chronic pain</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">
                  Allergies (food, environment, medications)
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
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Surgeries</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Number of pregnancies / births</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">
                  Substance use disorder (please specify)
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
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Depression</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Anxiety/panic attacks</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Insomnia</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Bipolar disorder</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Schizophrenia</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Obsessive compulsive disorder</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Personality disorder (please specify)</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Phobias</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Any other health conditions</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Infection or Diseases</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">
                  Significant Family Medical/Psychiatric History:
                </label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">Father</option>
                  <option value="Enter text">Mother</option>
                  <option value="Enter text">Father</option>
                  <option value="Enter text">Sister</option>
                  <option value="Enter text">Brother</option>
                  <option value="Enter text">Daughter</option>
                  <option value="Enter text">Son</option>
                  <option value="Enter text">Cousin</option>
                  <option value="Enter text">Aunt</option>
                  <option value="Enter text">Uncle</option>
                  <option value="Enter text">Grandfather</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="formsheading">
                <h6>
                  Mental Health Treatment History (in Resident hospitalization,
                  partial hospitalization, out Resident, etc):
                </h6>
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">Type of Service</label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">BHRF</option>
                  <option value="Enter text">IP</option>
                  <option value="Enter text">OP</option>
                  <option value="Enter text">PHP</option>
                  <option value="Enter text">IOP</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Where</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Dates</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">
                  Diagnosis/Reason for Treatment
                </label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">Mental health Treatment</option>
                  <option value="Enter text">Substance Abuse Treatment</option>
                  <option value="Enter text">Stabilization</option>
                  <option value="Enter text">Detox</option>
                  <option value="Enter text">
                    DTS/DTO Other (Please specify)
                  </option>

                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Substance Abuse history:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <label htmlFor="">Denies:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="reasonadmission">Type</label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">Alcohol</option>
                  <option value="Enter text">Benzodiazepines</option>
                  <option value="Enter text">Cocaine</option>
                  <option value="Enter text">Crack</option>
                  <option value="Enter text">
                    Hallucinogens (LSD,mescaline,etc.)
                  </option>
                  <option value="Enter text">Heroin</option>
                  <option value="Enter text">Inhalants</option>
                  <option value="Enter text">Marijuana</option>
                  <option value="Enter text">Methamphetamine</option>
                  <option value="Enter text">Methadone</option>
                  <option value="Enter text">MDMA (ecstasy)</option>
                  <option value="Enter text">PCP (angel dust)</option>
                  <option value="Enter text">Prescription medicine</option>
                  <option value="Enter text">OTC medicine</option>
                  <option value="Enter text">other</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Age of First use</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter age"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">Last Use</label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">Weeks ago</option>
                  <option value="Enter text">Days ago</option>
                  <option value="Enter text">Yesterday</option>
                  <option value="Enter text">Months ago</option>
                  <option value="Enter text">Few hours ago</option>
                  <option value="Enter text">Unsure</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">Frequency</label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">Daily</option>
                  <option value="Enter text">Two to four times weekly</option>
                  <option value="Enter text">Multiple times a day</option>
                  <option value="Enter text">Chronic</option>
                  <option value="Enter text">Intermittent</option>
                  <option value="Enter text">Only on social events</option>
                  <option value="Enter text">Only on weekends</option>
                  <option value="Enter text">Few times a month</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">Length of Sobriety</label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">One week</option>
                  <option value="Enter text">A few days ago, One month</option>
                  <option value="Enter text">Two months</option>
                  <option value="Enter text">Three months</option>
                  <option value="Enter text">Four months</option>
                  <option value="Enter text">Five to Six months</option>
                  <option value="Enter text">One year</option>
                  <option value="Enter text">Two years</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              {/* <div>
                            Boss
                            <div className='chechbox12'>
                                <div className='checkoptions'>
                                    <input type="checkbox" />
                                    <span>None reported or observed</span>
                                </div>
                                <div className='checkoptions' >
                                    <input type="checkbox" />
                                    <span>Vomiting</span>
                                </div>
                                <div className='checkoptions' >
                                    <input type="checkbox" />
                                    <span>Anxiety</span>
                                </div>
                            </div>
                            <div className='chechbox12'>
                                <div className='checkoptions'>
                                    <input type="checkbox" />
                                    <span>Agitation</span>
                                </div>
                                <div className='checkoptions' >
                                    <input type="checkbox" />
                                    <span>Headache</span>
                                </div>
                                <div className='checkoptions' >
                                    <input type="checkbox" />
                                    <span>Tremors</span>
                                </div>
                            </div>
                            <div className='chechbox12'>
                                <div className='checkoptions'>
                                    <input type="checkbox" />
                                    <span>Nausea</span>
                                </div>
                                <div className='checkoptions' >
                                    <input type="checkbox" />
                                    <span>Tactile Disturbances</span>
                                </div>
                                <div className='checkoptions' >
                                    <input type="checkbox" />
                                    <span>Visual Disturbances</span>
                                </div>
                            </div>
                        </div> */}

              <div class="checkbox-container">
                <label>Active Withdrawal Symptoms:</label>
                <div class="chechbox12">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>None reported observed</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Vomiting</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Anxiety</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Agitation</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Headache</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Tremors</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Nausea</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Tactile Disturbances</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Visual Disturbances</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="checkbox-container">
                <label>Auditory Disturbances</label>
                <div class="chechbox12">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Sweats</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Goose Bumps</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Bone Pain</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Seizures</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Paranoia</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Running nose</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Tearing</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Loss of muscle coordination</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="formsheading">
                <h6>Mental Status Exam/Behavioral Observations:</h6>
                <h6>General Appearance</h6>
              </div>

              <div class="checkbox-container">
                <div class="chechbox12">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Apparent age</label>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Height</label>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Weight</label>
                    </div>
                    <div class="checkboxitem">
                      <label>Attire</label>
                    </div>
                    <div class="checkboxitem">
                      <label>Grooming</label>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Consistent</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Average</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Average</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Casual</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Well-groomed</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Younger</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Short</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Obese</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Neat</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Adequate</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Older</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Tall</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Overweight</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Tattered</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Unkempt</span>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Older</span> */}
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Tall</span> */}
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Thin</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Dirty</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Disheveled</span>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Older</span> */}
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Tall</span> */}
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Emaciated</span>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Dirty</span> */}
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Disheveled</span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="formsheading">
                <h6>Demeanor / Interaction</h6>
              </div>
              <div class="checkbox-container">
                <div class="chechbox12">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Mood</label>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Affect</label>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Eye Contact</label>
                    </div>
                    <div class="checkboxitem">
                      <label>Cooperation</label>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Euthymic</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Normal range</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Appropriate</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Appropriate</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Irritable</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Depressed</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Minimal</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Hostile</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Elevated</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Labile</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Poor</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Evasive</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Depressed</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Constricted</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Adequate</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Defensive</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Anxious</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Other</span>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Adequate</span> */}
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Indifferent</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="formsheading">
                <h6>Speech</h6>
              </div>

              <div class="checkbox-container">
                <div class="chechbox12">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Articulation</label>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Tone</label>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Rate</label>
                    </div>
                    <div class="checkboxitem">
                      <label>Quantity</label>
                    </div>
                    <div class="checkboxitem">
                      <label>Response latency</label>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Normal</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Normal</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Normal</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Normal</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Normal</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Unintelligible</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Soft</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Slow</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Verbose</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Delayed</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Mumbled</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Loud</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Fast</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Mutism</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Shortened</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Slurred</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Pressured</span>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Adequate</span> */}
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Defensive</span> */}
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Defensive</span> */}
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Stuttered</span>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Other</span> */}
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Adequate</span> */}
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Indifferent</span> */}
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Indifferent</span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="formsheading">
                <h6>Cognition</h6>
              </div>
              <div class="checkbox-container">
                <div class="chechbox12">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Thought content</label>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Thought processes</label>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Delusions</label>
                    </div>
                    <div class="checkboxitem">
                      <label>Hallucinations</label>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Unremarkable</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Logical/Coherent</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>No</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Unremarkable</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Suspicious</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Tangential</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Yes, persecutory</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Visual hallucinations</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Negative</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Circumstantial</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Yes, somatic</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Auditory hallucinations</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Concrete</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Vague</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Yes, grandiose</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Yes, Tactile hallucinations</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Stuttered</span> */}
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Other</span> */}
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Yes, other</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Yes, other</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="formsheading">
                <h6>Motor activity</h6>
              </div>
              <div class="checkbox-container">
                <div class="chechbox12">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Gait</label>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Posture</label>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" /> */}
                      <label>Psychomotor Activity</label>
                    </div>
                    <div class="checkboxitem">
                      <label>Mannerisms</label>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Normal</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Normal</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Within normal limits</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>None</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Staggering</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Relaxed</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Calm</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Tics</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Shuffling</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Rigid</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Hyperactive</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Tremors</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Slow</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Tense</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Agitated</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Rocking</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Awkward</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Slouched</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Hypoactive</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Picking</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="yeschechbox1">
                <label htmlFor="">Orientation to Person:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
                <label htmlFor="">Place:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
                <label htmlFor="">Time:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
                <label htmlFor="">Circumstances:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Judgment:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Good</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Fair</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Poor</span>
                </div>
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Insight:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Good</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Fair</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Poor</span>
                </div>
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Memory:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Good</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Fair</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Poor</span>
                </div>
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Ability to concentration:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Intact</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Other (please specify):</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter age"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">
                  Significant Social/Developmental History:
                </label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter age"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Educational history:</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter age"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Highest level of education:</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter age"
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Special education:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Currently a student?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">If yes, where?</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="formsheading">
                <h6>Employment history:</h6>
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Currently employed:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">
                  If employed, where? FT or PT?
                </label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">
                  Work History (and barriers to employment)
                </label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Military History:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Currently on active duty?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">
                  Criminal Justice Legal History
                </label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">Arrested for DUI</option>
                  <option value="Enter text">Arrested for assault</option>
                  <option value="Enter text">Arrested for bad checks</option>
                  <option value="Enter text">Arrested for shop lifting</option>
                  <option value="Enter text">
                    Arrested for attempted murder
                  </option>
                  <option value="Enter text">Arrested for drug</option>
                  <option value="Enter text">Arrested for alcohol</option>
                  <option value="Enter text">
                    Arrested for disorderly conduct
                  </option>
                  <option value="Enter text">
                    Arrested for identity theft/ forgery
                  </option>
                  <option value="Enter text">Arrested for sex offense</option>
                  <option value="Enter text">Arrested for _______</option>
                  <option value="Enter text">Probation/parole, custody</option>
                  <option value="Enter text">Pending litigation</option>
                  <option value="Enter text">Sentencing dates</option>
                  <option value="Enter text">Needs Legal Aid</option>
                  <option value="Enter text">Incarcerated</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="formsheading">
                <h6>Current Independent Living Skills:</h6>
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">Type of Activity</label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">Bathing/Showering</option>
                  <option value="Enter text">Grooming/hygiene</option>
                  <option value="Enter text">Mobility</option>
                  <option value="Enter text">Housework</option>
                  <option value="Enter text">Shopping</option>
                  <option value="Enter text">Managing money/budget</option>
                  <option value="Enter text">Taking medications</option>
                  <option value="Enter text">Preparing food</option>
                  <option value="Enter text">Eating</option>
                  <option value="Enter text">Toileting</option>
                  <option value="Enter text">Other (specify)</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="yeschechbox">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Good</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Fair</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Not so good</span>
                </div>
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Need assist?</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="formsheading">
                <h6>Triggers:</h6>
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Fall risk:</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">If yes please explain:</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">
                  Hobbies/Leisure Activities:
                </label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">Medical Equipment:</label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">Wheel Chair</option>
                  <option value="Enter text">Oxygen tank</option>
                  <option value="Enter text">CPAP Machine</option>
                  <option value="Enter text">Shower chair</option>
                  <option value="Enter text">Other</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">Special Precautions:</label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">Yes Seizure</option>
                  <option value="Enter text">Elopement/Awol</option>
                  <option value="Enter text">Physical Aggression</option>
                  <option value="Enter text">Withdrawal</option>
                  <option value="Enter text">
                    Inappropriate Sexual Behaviors
                  </option>
                  <option value="Enter text">Substance use</option>
                  <option value="Enter text">None</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="formsheading">
                <h6>Safety and Risk Assessment</h6>
              </div>
              <div className="yeschechbox1">
                <label htmlFor="">
                  Are you currently thinking about harming yourself or
                  committing suicide?
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
              <div className="yeschechbox1">
                <label htmlFor="">Ideation</label>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Fleeting</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Periodic</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Constant</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>N/A</span>
                </div>
              </div>
              <div className="yeschechbox1">
                <label htmlFor="">Increasing in:</label>
                <div>
                  <span>Urgency:</span>
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
                  <span>Severity:</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="yeschechbox1">
                <label htmlFor="">
                  Are you currently thinking about harming others or have
                  homicidal thoughts?
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
              <div className="formsheading">
                <h6>Risk Factors:</h6>
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">
                  Select risk factors that apply
                </label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">Current suicidal ideation</option>
                  <option value="Enter text">Prior suicide attempt</option>
                  <option value="Enter text">
                    Access to means (i.e. weapon)
                  </option>
                  <option value="Enter text">Substance abuse</option>
                  <option value="Enter text">
                    Other self-abusing behavior
                  </option>
                  <option value="Enter text">
                    Recent losses/lack of support
                  </option>
                  <option value="Enter text">Behavior cues</option>
                  <option value="Enter text">Symptoms of psychosis</option>
                  <option value="Enter text">Family history of suicide</option>
                  <option value="Enter text">Terminal physical illness</option>
                  <option value="Enter text">
                    Current stressors (specify)
                  </option>
                  <option value="Enter text">Chronic pain</option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="yeschechbox">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="reasonadmission">
                  Protective factors that apply:
                </label>
                <select id="reasonadmission" value="" required>
                  <option value="Enter text">Enter text</option>
                  <option value="Enter text">
                    Supports available (family friends)
                  </option>
                  <option value="Enter text">
                    Spiritual / religious support
                  </option>
                  <option value="Enter text">
                    Religious/cultural prohibitions
                  </option>
                  <option value="Enter text">Fear of consequences</option>
                  <option value="Enter text">
                    Able to be engaged in intervention
                  </option>
                  <option value="Enter text">
                    Willing to commit to keeping self safe
                  </option>
                  {/* <option value="Female">Sanskrit</option> */}
                </select>
              </div>
              <div className="yeschechbox">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Yes</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No</span>
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">Comments</label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="formsheading">
                <p>
                  Considering the responses to the above risk factors in
                  combination with all the other information you know about the
                  person (gender, age, diagnosis, balancing factors-resiliency
                  and supports, would you rate the level of risk for this person
                  for danger to self (DTS) as:
                </p>
              </div>
              <div className="yeschechbox1">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>No Risk</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Low Risk</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Moderate Risk</span>
                </div>
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>High Risk</span>
                </div>
              </div>
              <div className="formsheading">
                <h6>Diagnoses:</h6>
              </div>
              <div className="formsheading">
                <h6>Psychiatric Diagnoses</h6>
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Primary*</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">ICD Code</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Description</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Secondary</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">ICD Code</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Description</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Tertiary</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">ICD Code</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Description</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Additional</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">ICD Code</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Description</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="formsheading">
                <h6>Medical Diagnoses</h6>
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Primary*</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">ICD Code</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Description</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Secondary</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">ICD Code</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Description</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Tertiary</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">ICD Code</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Description</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Additional</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">ICD Code</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Description</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div className="formsheading">
                <h6>Psychosocial or Environmental Stressors</h6>
                <h6>Problems with / related to:</h6>
              </div>
              <div class="checkbox-container">
                <div class="chechbox12">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Primary support group</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Educational problems</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Occupational problems</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Sexual problems</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Marital problems</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Housing problems</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Interaction with legal system</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>other (please specify)</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Access to health care services</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Family problems</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Substance use in home</span>
                    </div>
                    <div class="checkboxitem">
                      {/* <input type="checkbox" />
                                        <span>Auditory hallucinations</span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="yeschechbox">
                <label htmlFor="">Significant recent losses:</label>
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
                <h6>If yes, please check applicable loss(es):</h6>
              </div>
              <div class="checkbox-container">
                <div class="chechbox12">
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Death</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Injury</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Medical/ surgical </span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Job</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Divorce / separation </span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Accident /injury</span>
                    </div>
                  </div>
                  <div class="checkoptions">
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Child removed from house</span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>Violent acts against person/family </span>
                    </div>
                    <div class="checkboxitem">
                      <input type="checkbox" />
                      <span>other (please specify)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-field">
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="programlocation&address">
                  Additional Notes:
                </label>
                <textarea
                  id="programlocation&address"
                  value=""
                  placeholder="Enter text"
                  rows={5}
                  cols={82}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">Staff name:</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div class="file-upload-box">
                <input type="file" id="fileInput" style={{ display: "none" }} />
                <div class="upload-icon">
                  <img
                    src={"/Dashboard/save.png"}
                    alt=""
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      width: "auto",
                      height: "auto",
                    }}
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
                <label htmlFor="todaydate">Date</label>
                <input
                  type="date"
                  id="todaydate"
                  value=""
                  placeholder="DD/MM/YYYY"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="approvedby">BHT name, credentials:</label>
                <input
                  type="text"
                  id="approvedby"
                  value=""
                  placeholder="Enter text"
                  required
                />
              </div>
              <div class="file-upload-box">
                <input type="file" id="fileInput" style={{ display: "none" }} />
                <div class="upload-icon">
                  <img
                    src={"/Dashboard/save.png"}
                    alt=""
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      width: "auto",
                      height: "auto",
                    }}
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
                <label htmlFor="todaydate">Date</label>
                <input
                  type="date"
                  id="todaydate"
                  value=""
                  placeholder="DD/MM/YYYY"
                  required
                />
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

export default InitialAssasement;
