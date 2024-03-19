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

            <div className="grid-item">
              <label>Admit Date::</label>
              <BorderlessInput
                setState={setAdminDate}
                value={DateFormatter(admitDate)}
                type="date"
              />
            </div>


          </div>
        </form>
      </Container>

      <div>
        <div className="top-div-personal">
          <Form className="w-100 text-start" onSubmit={submitHandler}>
        

            <div className="two-head">
              <p>Financial Transitions</p>
              <button type="button" onClick={() => transaction_adder()}>
                + NEW
              </button>
            </div>

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date
              </Form.Label>
              <Form.Control
                onChange={(e) => setTransDate(e.target.value)}
                type="date"
                value={transDate}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Deposit
              </Form.Label>
              <Form.Control
                onChange={(e) => setDeposti(e.target.value)}
                type="number"
                min={0}
                value={deposit}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Money Spent
              </Form.Label>
              <Form.Control
                onChange={(e) => setMoneySpent(e.target.value)}
                type="number"
                min={0}
                value={moneySpent}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Balance
              </Form.Label>
              <Form.Control
                onChange={(e) => setBalance(e.target.value)}
                type="number"
                min={0}
                value={balance}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Description of items spent
              </Form.Label>
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                value={description}
              />
            </Form.Group>

            <div className="cluod_save mb-3">
              <div className="main">
                <button className="outlined_btn">SAVE AS DRAFT</button>
                <button
                  type="button"
                  className="filled"
                  onClick={() => setOpen2(true)}
                >
                  SAVED AND SIGNED
                </button>
              </div>
            </div>
            <div className="cluod_save mb-3">
              <div className="main">
                <button className="outlined_btn">SAVE AS DRAFT</button>
                <button
                  type="button"
                  className="filled"
                  onClick={() => setOpen(true)}
                >
                  SAVED AND SIGNED
                </button>
              </div>
            </div>

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

            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "10px",
                }}
                type="button"
              >
                PRINT REPORT
              </button>
            </div>
            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>

          {/* <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
              <div>
                <img
                  style={{ height: "80%", width: "100%", border: "1px " }}
                  src="/Dashboard/save.png"
                  alt=""
                />
              </div>
              <div className="save-as-draft-btn">
                <button style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}>
                  SAVE AS DRAFT
                </button>
                <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                  SAVED AND SIGNED
                </button>
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default HOC(CreateRecord);
