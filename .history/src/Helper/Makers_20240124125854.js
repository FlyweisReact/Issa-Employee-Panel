/** @format */

import Form from "react-bootstrap/Form";

export const InputMaker = ({ label, setState, placeholder, type, value }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </Form.Group>
  );
};


export const RadioMaker = ({}) => {
    
}