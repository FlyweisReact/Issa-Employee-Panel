/** @format */

import React from "react";
import { Form, Modal } from "react-bootstrap";

const SignatureModal = () => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="Signed_Modal">
      <Form>
        <Form.Label></Form.Label>
      </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignatureModal;
