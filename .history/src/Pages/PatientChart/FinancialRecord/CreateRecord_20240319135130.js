/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";
import { postApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { BorderlessInput, DateFormatter } from "../../../Helper/Makers";

const CreateRecord = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [dateOfBirth, setDOB] = useState("");
  const [admitDate, setAdminDate] = useState("");
  const [transDate, setTransDate] = useState("");
  const [deposit, setDeposti] = useState("");
  const [moneySpent, setMoneySpent] = useState("");
  const [balance, setBalance] = useState("");
  const [description, setDescription] = useState("");
  const [residentSignature, setResidentSignature] = useState("");
  const [staffSignature, setStaffSignature] = useState("");
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const arrObj = {
    date: transDate,
    deposit,
    moneySpent,
    balance,
    description,
    residentSignature,
    staffSignature,
  };

  const payload = {
    patientId,
    residentName,
    dateOfBirth,
    admitDate,
    transactions: arr?.map((i) => ({
      date: i.date,
      deposit: i.deposit,
      moneySpent: i.moneySpent,
      balance: i.balance,
      description: i.description,
      residentSignature: i.residentSignature,
      staffSignature: i.staffSignature,
    })),
  };

  const transaction_adder = () => {
    setArr((prev) => [...prev, arrObj]);
    setTransDate("");
    setDeposti("");
    setMoneySpent("");
    setBalance("");
    setDescription("");
    setResidentSignature("");
    setStaffSignature("");
  };

  const transaction_remover = (index) => {
    setArr((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const patientHandler = (i) => {
    const obj = JSON.parse(i);
    setPatientId(obj?._id);
    setResidentName(obj?.fullName);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await postApi(
      setLoading,
      `employee/createFinancialTransactionsRecord`,
      payload
    );
    setArr([]);
    setDOB("");
    setAdminDate("");
  };

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setStaffSignature}
        value={staffSignature}
        text={"Digitally Sign by employee name"}
      />
      <SignatureModal
        show={open2}
        onHide={() => setOpen2(false)}
        setValue={setResidentSignature}
        value={residentSignature}
        text={"Digitally Sign by employee name"}
      />

      <NavWrapper title={"FINANCIAL TRANSICTIONS RECORD"} isArrow={true} />

      <Container className="full-width-container">
        <form className="text-start w-100">
          <div className="grid-container">
            <div className="grid-item">
              <label>Resident Name:</label>
              <select
                onChange={(e) => patientHandler(e.target.value)}
                className="borderlessSelect"
              >
                <option value="">Select</option>
                {patients?.data?.map((i, index) => (
                  <option value={JSON.stringify(i)} key={`patient${index}`}>
                    {" "}
                    {i.fullName}{" "}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <label>DOB:</label>
              <BorderlessInput
                setState={setDOB}
                value={DateFormatter(dateOfBirth)}
                type="date"
              />
            </div>
            <div className="grid-item">
              <label>Admit Date:</label>
              <BorderlessInput
                setState={setAdminDate}
                value={DateFormatter(admitDate)}
                type="date"
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Financial Transitions</label>
            </div>
            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setTransDate}
                value={DateFormatter(transDate)}
                type="date"
              />
            </div>
            <div className="grid-item">
              <label>Deposit:</label>
              <BorderlessInput
                setState={setDeposti}
                value={deposit}
                type="number"
              />
            </div>
            <div className="grid-item">
              <label>Money Spent:</label>
              <BorderlessInput
                setState={setMoneySpent}
                value={moneySpent}
                type="number"
              />
            </div>
            <div className="grid-item">
              <label>Balance:</label>
              <BorderlessInput
                setState={setBalance}
                value={balance}
                type="number"
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Description of items spent:</label>
              <BorderlessInput
                setState={setDescription}
                value={description}
                type="text"
              />
            </div>
            <div className="full-wid-input grid-item d-block">
              <label>Resident Signature</label>
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button className="draft"> SAVE AS DRAFT</button>
                  <button
                    type="button"
                    className="signed"
                    onClick={() => setOpen(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {residentSignature && (
                    <p>Digitally Sign by {residentSignature}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="full-wid-input grid-item d-block">
              <label>Staff Signature</label>
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button className="draft"> SAVE AS DRAFT</button>
                  <button
                    type="button"
                    className="signed"
                    onClick={() => setOpen(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {staffSignature && <p>Digitally Sign by {staffSignature}</p>}
                </div>
              </div>
            </div>
            <div className="grid-item">
            <button type="button" onClick={() => transaction_adder()}>
                + NEW
              </button>
            </div>
          </div>
        </form>
      </Container>

      <div>
        <div className="top-div-personal">
          <Form className="w-100 text-start" onSubmit={submitHandler}>
         

            

            {arr?.map((i, index) => (
              <>
                <div className="two-head">
                  <p>Financial Transitions</p>
                  <button
                    type="button"
                    onClick={() => transaction_remover(index)}
                    style={{ backgroundColor: "red" }}
                  >
                    Remove
                  </button>
                </div>
                <Form.Group className="mb-3 ">
                  <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                    Date
                  </Form.Label>
                  <Form.Control value={i.date} />
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                    Deposit
                  </Form.Label>
                  <Form.Control value={i.deposit} />
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                    Money Spent
                  </Form.Label>
                  <Form.Control value={i.moneySpent} />
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                    Balance
                  </Form.Label>
                  <Form.Control value={i.balance} />
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                    Description of items spent
                  </Form.Label>
                  <Form.Control value={i.description} />
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                    Resident Signature
                  </Form.Label>
                  <Form.Control value={i.residentSignature} />
                </Form.Group>
                <Form.Group className="mb-3 ">
                  <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                    Staff Signature
                  </Form.Label>
                  <Form.Control value={i.staffSignature} />
                </Form.Group>
              </>
            ))}

            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>

        </div>
      </div>
    </>
  );
};

export default HOC(CreateRecord);
