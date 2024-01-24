/** @format */

import React from "react";
import { Form, Modal } from "react-bootstrap";

const SignatureModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="Signed_Modal">
        <Form>
          <Form.Label>Digitally Sign by employee name</Form.Label>
          <Form.Control type="text"  />
          
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignatureModal;
