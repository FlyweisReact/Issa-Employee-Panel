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

export const CheckBoxMaker = ({ setValue, value, label, checked }) => {
  return (
    <Form.Check
      type={"checkbox"}
      onChange={() => setValue(value)}
      label={label}
      checked={checked}
    />
  );
};

export const SelectMaker = ({ setValue, value, label, checked }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
        Was Medication administration completed?
      </Form.Label>
      <Form.Select
        onChange={(e) => setMedicationAdministrationCompleted(e.target.value)}
        required
      >
        <option value="">Select</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </Form.Select>
    </Form.Group>
  );
};
