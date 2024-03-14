/** @format */

import React, { useEffect, useState } from "react";
import { Container, Modal, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getData } from "../../components/api/api";
import HOC from "../../Layout/Outer/HOC";
import { DateInMMDDYY } from "../../Repository/Apis";

const SearchPage = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("Info");
  const { id } = useParams();
  const [info, setInfo] = useState({});

  function DocumentUploader(props) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="file-upload-modal">
          <Container className="full-width-container">
          
            <div>
              <div>
                <p className="head">Actions</p>
                 <button>Add Additional files</button> 
              </div>
              <div>
                <p className="head">File Type</p>
                <select>
                  <option></option>
                </select>
              </div>
              <div>
                <p className="head">File Name</p>
                <input type='file' />
              </div>
          
            </div>

      <button>Upload Files</button>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

  const fetchPatientInfo = () => {
    getData(setInfo, `employee/getPatientById/${id}`);
  };

  useEffect(() => {
    fetchPatientInfo();
  }, [id]);

  return (
    <>
      <DocumentUploader show={show} onHide={() => setShow(false)} />

      <Container className="full-width-container">
        <div className="search-page">
          <div className="tabs-list">
            <ul>
              <li onClick={() => setType("Info")}>Info</li>
              <li onClick={() => setType("Documents")}>Documents</li>
              <li onClick={() => setType("Vitals")}>Vitals</li>
              <li onClick={() => setType("Medications")}>Medications</li>
              <li onClick={() => setType("Intake")}>Intake</li>
              <li onClick={() => setType("Schedule")}>Schedule</li>
            </ul>
          </div>

          {type === "Info" && (
            <div>
              <div className="info-tab">
                  <div className="heading">
                    <p>Patient Information:</p>
                    <i className="fa-solid fa-pen" />
                  </div>
              </div>

              <div className="overflow-table">
                <table className="colored_table">
                  <thead>
                    <tr>
                      <th>Profile Image</th>
                      <th>Name</th>
                      <th>Contact Number</th>
                      <th>Email Id</th>
                      <th>Gender</th>
                      <th>Company Name</th>
                      <th>DOB</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src={info?.data?.profilePic}
                          alt=""
                          className="profile-image"
                        />
                      </td>
                      <td> {info?.data?.fullName} </td>
                      <td> {info?.data?.mobileNumber} </td>
                      <td> {info?.data?.email} </td>
                      <td> {info?.data?.gender} </td>
                      <td> {info?.data?.companyName} </td>
                      <td> {DateInMMDDYY(info?.data?.dateOfBirth)} </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {type === "Documents" && (
            <div className="overflow-table">
              <div className="upload-file-btn mb-3">
                <button onClick={() => setShow(true)}>
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                  Upload Patient File
                </button>
              </div>

              <table className="colored_table">
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>Service</th>
                    <th>Date</th>
                    <th>Author/Access</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://google.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Intake
                      </a>
                    </td>
                    <td>H2027</td>
                    <th>06/12/2024</th>
                    <th>Jazm. FINLEY</th>
                    <th>Singed by Supervisor</th>
                    <td>
                      <div className="icon-joiner">
                        <i className="fa-solid fa-eye" />
                        <i className="fa-solid fa-pen" />
                        <i className="fa-regular fa-trash-can"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {type === "Vitals" && (
            <div className="overflow-table">
              <table className="colored_table">
                <thead>
                  <tr>
                    <th>Body Temp</th>
                    <th>Pulse Rate</th>
                    <th>Respiration Rate</th>
                    <th>Blood Pressure</th>
                    <th>Blood Oxygen</th>
                    <th>Weight</th>
                    <th>Height</th>
                    <th>Blood Glucose Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>98.4°C</td>
                    <td>120 RPM</td>
                    <td>55 RPM</td>
                    <td>56mm/hg</td>
                    <td>54 O2</td>
                    <td>78 Kg</td>
                    <td>5'11'' cm</td>
                    <td>43 mg/dL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default HOC({ Wcomponenet: SearchPage });
