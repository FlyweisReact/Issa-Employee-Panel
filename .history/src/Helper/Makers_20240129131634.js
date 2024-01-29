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

export const RadioMaker = ({ name, setValue, value, id, label, checked }) => {
  return (
    <Form.Check type={"radio"}>
      <Form.Check.Input
        type={"radio"}
        name={name}
        value={value}
        onChange={() => setValue(value)}
        isValid
        id={id}
        required
        checked={value === checked}
      />
      <Form.Check.Label htmlFor={id}> {label} </Form.Check.Label>
    </Form.Check>
  );
};


export const CheckBoxMaker = ({  setValue, value, label, checked }) => {
  return (
    <Form.Check type={"checkbox"}>
      <Form.Check.Input
        type={"checkbox"}
        value={value}
        onChange={() => setValue(value)}
        checked={value === checked}
        label={label}
      />
    </Form.Check>
  );
};