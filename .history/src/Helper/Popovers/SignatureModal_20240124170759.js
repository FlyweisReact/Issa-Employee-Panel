/** @format */

import React from "react";
import { Modal } from "react-bootstrap";

const SignatureModal = (props) => {
  return (
    <Modal
      {...props}
      style={{ backgroundColor: "#1a9fb2" }}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="Signed_Modal">
        <form>
          <label>Digitally Sign by employee name</label>
          <input type="text" />
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SignatureModal;
