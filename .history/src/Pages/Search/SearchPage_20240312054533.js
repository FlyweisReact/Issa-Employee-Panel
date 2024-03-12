/** @format */

import React, { useState } from "react";
import { Container, Modal, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import HOC from "../../Layout/Outer/HOC";

const SearchPage = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("Info");
  const { id } = useParams()

  function DocumentUploader(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Upload Patient File
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="full-width-container">
            <Form className="text-start">
              <Form.Group className="mb-3">
                <Form.Label>File Name</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>File Type </Form.Label>
                <Form.Select>
                  <option>Select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Job Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Button variant="dark">Upload Files</Button>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }





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
            <div className="overflow-table">
              <table className="colored_table">
                <thead>
                  <tr>
                    <th>Profile Image</th>
                    <th>Name</th>
                    <th>Contact Number</th>
                    <th>Email Id</th>
                    <th>Gender</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1483"
                        alt=""
                        className="profile-image"
                      />
                    </td>
                    <td>Patient</td>
                    <td>8547965412</td>
                    <td>Patient@gmail.com</td>
                    <td>Male</td>
                    <td>Address</td>
                  </tr>
                </tbody>
              </table>
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
