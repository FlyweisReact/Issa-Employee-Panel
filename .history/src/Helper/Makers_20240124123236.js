/** @format */

import Form from "react-bootstrap/Form";

export const InputMaker = ({ label , setState , placeholder }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
        {label}
      </Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter text"
        required
        onChange={(e) => setState(e.target.value)}
      />
    </Form.Group>
  );
};
