import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import "./InitialAssesment.css";

const FaceSheet = () => {
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
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>FACE SHEET</p>
          <p></p>
        </div>
      </div>
      <div className="top-div-personal">
        <div style={{ width: "100%" }} className="form-container">
          <form style={{ width: "100%" }} action="">
            <div className="form-section">
              <div className="form-field">
                <label htmlFor="residentFullName">Resident Name:</label>
                <input
                  type="text"
                  id="residentFullName"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="dateOfBirth">Date of Birth:</label>
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
                <label htmlFor="admissionDate">Admit Date:</label>
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
                <label htmlFor="AHCCCS">Facility Address:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Facility Phone Number:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Place of Birth:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Eye Color:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Height:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Weight:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Hair Color:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Identifiable Marks:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Primary Language:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="yeschechbox2">
                <label htmlFor="AHCCCS">Court Ordered Treatment?</label>
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
                <label htmlFor="AHCCCS">
                  Family/Guardian Emergency Name and Contact:
                </label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Facility Emergency Contact:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Facility Emergency Contact:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">MEDICATION Allergies:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">
                  Other Allergies (animal, food, environment)
                </label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="formsheading">
                <h6>Primary Care Provider</h6>
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Name:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Mobile Number:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Address:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">
                  Other Specialist - please specify:
                </label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">
                  Other Specialist - please specify:
                </label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="formsheading">
                <h6>Psychiatric Provider</h6>
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Name:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Mobile Number:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Address:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">
                  Other Specialist - please specify:
                </label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">
                  Other Specialist - please specify:
                </label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">
                  Other Specialist - please specify:
                </label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Preferred Hospital Phone:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Preferred Hospital Address:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Health Plan:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">ID #:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Case Manager:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Phone Number/E-Mail:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">
                  Social Security Representative Payee:
                </label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Phone Number/E-Mail:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Mental Health Diagnoses:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="AHCCCS">Past Surgeries:</label>
                <input
                  type="text"
                  id="AHCCCS"
                  value=""
                  placeholder="Type Here....."
                  required
                />
              </div>
              <div class="file-upload-box">
                <input type="file" id="fileInput" style={{ display: "none" }} />
                <div class="upload-icon">
                  <img
                    src={'/Dashboard/save.png'}
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

export default FaceSheet;
