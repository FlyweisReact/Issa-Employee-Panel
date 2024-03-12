/** @format */

import React, { useState } from "react";
import { Container, Modal, Form } from "react-bootstrap";
import HOC from "../../Layout/Outer/HOC";

const SearchPage = () => {
  const [show, setShow] = useState(false);

  const fileSelector = () => {
    const target = document.getElementById("file");
    target.click();
  };

  function MyVerticallyCenteredModal(props) {
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>File</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <Container className="full-width-container">
        <div className="search-page">
          <div className="tabs-list">
            <ul>
              <li>Info</li>
              <li>Documents</li>
              <li>Vitals</li>
              <li>Medications</li>
              <li>Intake</li>
              <li>Schedule</li>
            </ul>
          </div>

          <div className="overflow-table">
            <div className="upload-file-btn mb-3">
              <button onClick={() => fileSelector()}>
                <i className="fa-solid fa-cloud-arrow-up"></i>
                Upload Patient File
                <input type="file" id="file" className="d-none" />
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
        </div>
      </Container>
    </>
  );
};

export default HOC({ Wcomponenet: SearchPage });
