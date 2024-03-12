/** @format */

import React, { useState } from "react";
import { Container, Modal, Form, Button } from "react-bootstrap";
import HOC from "../../Layout/Outer/HOC";

const SearchPage = () => {
  const [show, setShow] = useState(false);
  const [ type , setType ] = useState("")

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
                <Form.Label>File</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Button variant="dark">Submit</Button>
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
              <li>Info</li>
              <li onClick={() => setType("Documents")} >Documents</li>
              <li>Vitals</li>
              <li>Medications</li>
              <li>Intake</li>
              <li>Schedule</li>
            </ul>
          </div>

      {type === "Documents" &&
       }

       
        </div>
      </Container>
    </>
  );
};

export default HOC({ Wcomponenet: SearchPage });
