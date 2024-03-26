/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData, getDataById } from "../../../components/api/api";
import CreateNav from "../../../Helper/CreateNav";
import HOC from "../../../Layout/Inner/HOC";
import { BorderlessSelect } from "../../../Helper/Makers";
import { DateInMMDDYY } from "../../../Repository/Apis";

const Mars = () => {
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [patientData, setPatinentData] = useState({});

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const getAllDataPatient = () => {
    if (!patientId) {
      return null;
    }
    getDataById(setPatinentData, "employee/Mars", patientId);
  };

  useEffect(() => {
    getAllDataPatient();
  }, [patientId]);

  const digitsUpto31 = Array.from({ length: 31 }, (_, index) => index + 1);

  const patientOptions = patients?.data?.map((i) => ({
    value: i._id,
    label: i.fullName,
  }));

  return (
    <>
      <CreateNav
        title={"MEDICATION ADMINISTRATION RECORD"}
        link={"/create-mars"}
      />

      <Container className="full-width-container mb-5">
        <div className="medication">
          <div className="grid-container">
            <div className="grid-item">
              <label>Resident's Name:</label>
              <BorderlessSelect
                setState={setPatientId}
                value={patientId}
                options={patientOptions}
              />
            </div>
            <div className="grid-item">
              <label>DOB:</label>
            </div>
            <div className="grid-item">
              <label>
                Admit Date:{" "}
                {patientData?.data?.admitDate &&
                  DateInMMDDYY(patientData?.data?.admitDate)}{" "}
              </label>
            </div>
            <div className="grid-item">
              <label>
                Month/Year: {patientData?.data?.month}/{patientData?.data?.year}
              </label>
            </div>
            <div className="grid-item full-wid-input">
              <label>Location: {patientData?.data?.location} </label>
            </div>
            <div className="grid-item">
              <label>
                Psychiatric Provider: {patientData?.data?.psychiatricProvider}{" "}
              </label>
            </div>
            <div className="grid-item">
              <label>PCP Provider: {patientData?.data?.pcpProvider} </label>
            </div>
            <div className="grid-item">
              <label>Diet: {patientData?.data?.diet} </label>
            </div>
            <div className="grid-item">
              <label>
                Fluid restriction: {patientData?.data?.fluidRestriction}{" "}
              </label>
            </div>
            <div className="grid-item full-wid-input">
              <label>Allergies: {patientData?.data?.allergies} </label>
            </div>
          </div>

          <div className="two-boxes">
            <div className="instructions">
              <div className="name">
                <p>
                  {" "}
                  Medication name: Example Ibuprofen
                  <br />
                  Take 1 tab by mouth daily
                  <br />
                  Take 1 tab twice daily
                </p>
              </div>
            </div>
            <div className="time-table">
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    {digitsUpto31?.map((i, index) => (
                      <th key={index}> {i} </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dropdown time</td>
                    {digitsUpto31?.map((i) => (
                      <td key={i} style={{ backgroundColor: "#fadb56" }}>
                        <div className="titledLine" />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>2pm</td>
                    {digitsUpto31?.map((i) => (
                      <td
                        className="middle-td"
                        key={i}
                        style={{ backgroundColor: "#008DDA" }}
                      >
                        <div className="titledLine more" />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td>8pm</td>
                    {digitsUpto31?.map((i) => (
                      <td
                        className="middle-td"
                        key={i}
                        style={{ backgroundColor: "#9DBC98" }}
                      >
                        <div className="titledLine more" />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="two-boxes">
            <div className="instructions">
              <div className="name"></div>
            </div>
            <div className="time-table">
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    {digitsUpto31?.map((i, index) => (
                      <th key={index}> {i} </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8pm</td>
                    {digitsUpto31?.map((i) => (
                      <td
                        className="middle-td"
                        key={i}
                        style={{ backgroundColor: "#9DBC98" }}
                      >
                        <div className="titledLine more" />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid-container">
            <div className="grid-item">
              <label>H: Hospital</label>
            </div>
            <div className="grid-item">
              <label>HP: Home Pass </label>
            </div>
            <div className="grid-item">
              <label>RM: Refused Med </label>
            </div>
            <div className="grid-item">
              <label>
              H: On Hold per Provider’s Orders
              </label>
            </div>
            <div className="grid-item full-wid-input">
              <label>UN: Unavailable (documentation required) </label>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HOC(Mars);
