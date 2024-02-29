/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table, Button, Container } from "react-bootstrap";
import "./mars.css";
import { getData, getDataById } from "../../../api/api";
import CreateNav from "../../../../Helper/CreateNav";

const MARS = () => {
  const [inputText, setInputText] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [patientData, setPatinentData] = useState({});

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const onSuggestionClick = (suggestion) => {
    setInputText(suggestion);
    setFilteredSuggestions([]);
  };
  const navigate = useNavigate();

  const getAllDataPatient = (id) => {
    if (!patientId) {
      return null;
    }
    getDataById(setPatinentData, "employee/Mars", patientId);
  };

  useEffect(() => {
    getAllDataPatient();
  }, [patientId]);

  return (
    <>
      <CreateNav
        title={"MEDICATION ADMINISTRATION RECORD"}
        link={"/employee/medications/mars2"}
      />

      <div>
        <div className="top-div-personal">
          <form class="form1q">
            <label for="search">
              <input required placeholder="Search" type="text" />
              {filteredSuggestions.map((suggestion, index) => (
                <div key={index} onClick={() => onSuggestionClick(suggestion)}>
                  {suggestion}
                </div>
              ))}
              <div class="icon">
                <svg
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="swap-on"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
                <svg
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="swap-off"
                >
                  <path
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
              <button type="reset" class="close-btn">
                <svg
                  viewBox="0 0 20 20"
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </label>
          </form>
          <Table
            bordered
            responsive
            style={{
              width: "100%",
              borderColor: "black",
            }}
          >
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>
                <Form.Select
                  style={{ border: "none" }}
                  onChange={(e) => setPatientId(e.target.value)}
                  aria-label="Default select example"
                >
                  <option>Resident Name</option>
                  {patients?.data?.map((patient) => (
                    <option value={patient._id}>{patient.fullName}</option>
                  ))}
                </Form.Select>
              </th>
              <th style={{ border: "1px solid black" }}>
                D.O.B.: {patientData?.data?.dob}
              </th>
              <th style={{ border: "1px solid black" }}>
                Admit Date:{" "}
                {patientData?.data?.admitDate
                  ?.split("T")?.[0]
                  ?.split("-")
                  ?.reverse()
                  ?.join("/")}
              </th>
              <th
                style={{ border: "1px solid black", backgroundColor: "#FF0" }}
              >
                Month / Year
              </th>
              <th>
                {" "}
                <span>
                  {patientData?.data?.month}
                  {patientData?.data?.year && "/"}
                  {patientData?.data?.year}
                </span>
              </th>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <th>Location : {patientData?.data?.location}</th>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>
                Psychiatric Provider: {patientData?.data?.psychiatricProvider}
              </th>
              <th style={{ border: "1px solid black" }}>
                PCP Provider: {patientData?.data?.pcpProvider}
              </th>
              <th style={{ border: "1px solid black" }}>
                Diet: {patientData?.data?.diet}
              </th>
              <th>
                Fluid restrictions : {patientData?.data?.fluidRestriction}
              </th>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <th>Allergies: {patientData?.data?.allergies}</th>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>Medication name:</th>
              <th style={{ border: "1px solid black" }}>
                Time:
                {patientData?.data?.medicationStatus?.length > 0 &&
                  patientData?.data?.medicationStatus.map((status, index) => (
                    <ul key={index}>
                      {status?.timeStatus?.map((time, timeIndex) => (
                        <li key={timeIndex}>{time}</li>
                      ))}
                    </ul>
                  ))}
              </th>

              <th style={{ border: "1px solid black" }}>
                Date: {patientData?.data?.date}
              </th>
              <th style={{ border: "1px solid black" }}>isTaken</th>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>
                {patientData?.data?.medications?.length > 0 &&
                  patientData?.data?.medications.map((medication, index) => (
                    <li key={index}>
                      {medication?.name} {console.log(medication?.name)}
                    </li>
                  ))}
              </td>
              <td style={{ border: "1px solid black" }}>
                {patientData?.data?.medications?.length}
              </td>

              <td style={{ border: "1px solid black" }}></td>
              <td style={{ border: "1px solid black" }}>
                Take 1 tab by mouth daily
              </td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4</td>
              <td
                style={{ backgroundColor: "green", border: "1px solid black" }}
              ></td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>Simvastatin</td>{" "}
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4</td>
              <td style={{ border: "1px solid black" }}>4</td>
              <td style={{ border: "1px solid black" }}></td>
            </tr>

            <tr>
              <td style={{ border: "1px solid black" }}>Omeprazole</td>{" "}
              <td>3</td>
              <td>3</td>
              <td>4</td>
              <td style={{ border: "1px solid black" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Metformin</td>{" "}
              <td>3</td>
              <td>4</td>
              <td>4</td>
              <td style={{ backgroundColor: "green" }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>Prednisone</td>{" "}
              <td>3</td>
              <td>3</td>
              <td>4</td>
              <td style={{ backgroundColor: "green" }}></td>
            </tr>
          </Table>
          <Table
            bordered
            responsive
            style={{
              width: "100%",
              borderColor: "black",
              textAlign: "center",
            }}
          >
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>H: Hospital</th>
              <th style={{ border: "1px solid black" }}>HP: Home Pass</th>
              <th style={{ border: "1px solid black" }}>RM: Refused Med</th>
              <th style={{ border: "1px solid black" }}>
                H: On Hold per Provider’s Orders
              </th>
              <th>UN: Unavailable (documentation required)</th>
            </tr>
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>Staff Name, Tittle</th>
              <th style={{ border: "1px solid black" }}>Initials</th>
              <th style={{ border: "1px solid black" }}>Staff Name, Tittle</th>
              <th style={{ border: "1px solid black" }}>Initials</th>
              <th style={{ border: "1px solid black" }}>Staff Name, Tittle</th>
              <th style={{ border: "1px solid black" }}>Initials</th>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>1</td>
              <td style={{ border: "1px solid black" }}>2</td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4</td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4fsdsdf</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>1</td>
              <td style={{ border: "1px solid black" }}>2</td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4</td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4fsdsdf</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black" }}>1</td>
              <td style={{ border: "1px solid black" }}>2</td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4</td>
              <td style={{ border: "1px solid black" }}>3</td>
              <td style={{ border: "1px solid black" }}>4fsdsdf</td>
            </tr>
          </Table>

          <div className="mars-record">
            <div className="started">
              <div className="item"></div>
              <div className="item">DOB:</div>
              <div className="item">
                Admin Date: {patientData?.data?.admitDate?.slice(0, 10)}{" "}
              </div>
              <div className="item">
                Month/Year: {patientData?.data?.month}/{patientData?.data?.year}
              </div>
            </div>

            <div className="location_element">
              <div className="item">
                Location: {patientData?.data?.location}
              </div>
            </div>

            <div className="started">
              <div className="item"></div>
              <div className="item">DOB:</div>
              <div className="item">
                Admin Date: {patientData?.data?.admitDate?.slice(0, 10)}{" "}
              </div>
              <div className="item">
                Month/Year: {patientData?.data?.month}/{patientData?.data?.year}
              </div>
            </div>
          </div>

          <div
            className="save-as-draft-btn123"
            style={{
              marginTop: "2rem",
              borderRadius: "0px",
              marginBottom: "5rem",
            }}
          >
            <button
              style={{ borderRadius: "0px" }}
              className="btn1233"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      <Container className="full-width-container">
        <div className="medication">
          <div className="grid_div">
            <div className="item">
              <span>Resident's Name:</span>
            </div>
            <div className="item">
              <span>DOB:</span>
            </div>
            <div className="item">
              <span> Admit Date:</span>
            </div>
            <div className="item">
              <span>Month/Year:</span>
            </div>
            <div className="item whole-div">
              <span>Location:</span>
            </div>
            <div className="item">
              <span>Psychiatric Provider:</span>
            </div>
            <div className="item">
              <span>PCP Provider:</span>
            </div>
            <div className="item">
              <span>Diet:</span>
            </div>
            <div className="item">
              <span>Fluid restriction:</span>
            </div>
            <div className="item whole-div">
              <span>Allergies:</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MARS;
