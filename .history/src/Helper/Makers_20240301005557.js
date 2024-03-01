/** @format */

import Form from "react-bootstrap/Form";
import Select from "react-select";

export const InputMaker = ({ label, setState, placeholder, type, value }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
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

export const CheckBoxMaker = ({ setValue, value, label, checked, id }) => {
  return (
    <Form.Check
      type={"checkbox"}
      onChange={() => setValue(value)}
      label={label}
      checked={checked}
      id={id}
    />
  );
};

export const SelectMaker = ({ setValue, options, label, value }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
        {label}
      </Form.Label>
      <Form.Select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      >
        <option value="">Select</option>
        {options?.map((i, index) => (
          <option value={i.value} key={index}>
            {" "}
            {i.label}{" "}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export const MultiSelect = ({ options, setValue, value }) => {
  return (
    <Select
      isMulti
      value={value}
      options={options}
      onChange={(e) => setValue(e)}
      required
    />
  );
};

export function DateFormatter(date) {
  if (date) {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return formattedDate;
  }
}

export const TextareaMaker = ({ label, setValue, value, placeholder, row }) => {
  return (
    <Form.Group className="mb-3 ">
      <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
        {label}
      </Form.Label>
      <Form.Control
        onChange={(e) => setValue(e.target.value)}
        as={"textarea"}
        rows={row || 3}
        value={value}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

export const BorderlessInput = ({ setState, placeholder, type, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      min={type === "number" && 0}
      onChange={(e) => setState(e.target.value)}
      className="borderless_input"
    />
  );
};
export const BorderlessSelect = ({ options, setState, value }) => {
  return (
    <select
      className="borderlessSelect"
      onChange={(e) => setState(e.target.value)}
      value={value}
    >
      <option value="">Select</option>
      {options?.map((i) => (
        <option value={i.value}>{i.label}</option>
      ))}
    </select>
  );
};

export const DefaultInput = ({ value, isBots, label }) => {
  return isBots ? (
    <Form.Group className="mb-3 ">
      <Form.Label> {label} </Form.Label>
      <Form.Control value={value} />
    </Form.Group>
  ) : (
    <input value={value} className="borderless_input" />
  );
};
