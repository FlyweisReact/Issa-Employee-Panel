/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import { editApi } from "../../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import { DateFormatter } from "../../../../../Helper/Makers";

const EditFTR = () => {
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
  const [details, setDetails] = useState({});
  const { id } = useParams();

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

  const fetchHandler = () => {
    getData(setDetails, `employee/getFinancialTransactionsRecordById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  console.log(details);

  useEffect(() => {
    if (details) {
      const item = details?.data;
      setPatientId(item?.patientId);
      setResidentName(item?.residentName);
      setAdminDate(item?.admitDate);
      setDOB(item?.dateOfBirth);
    }
  }, [details]);

  const patientHandler = (i) => {
    const obj = JSON.parse(i);
    setPatientId(obj?._id);
    setResidentName(obj?.fullName);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await editApi(
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
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            FINANCIAL TRANSICTIONS RECORD
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form className="w-100 text-start" onSubmit={submitHandler}>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Resident Name
              </Form.Label>
              <Form.Select
                onChange={(e) => patientHandler(e.target.value)}
                required
              >
                <option value="">Select</option>
                {patients?.data?.map((i, index) => (
                  <option value={JSON.stringify(i)} key={`patient${index}`}>
                    {" "}
                    {i.fullName}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                DOB
              </Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDOB(e.target.value)}
                required
                value={DateFormatter(dateOfBirth)}
                placeholder="Enter text"
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Admit Date
              </Form.Label>
              <Form.Control
                onChange={(e) => setAdminDate(e.target.value)}
                type="date"
                value={DateFormatter(admitDate)}
                required
                placeholder="Enter text"
              />
            </Form.Group>

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
                value={DateFormatter(transDate)}
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
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Resident Signature
              </Form.Label>
              <Form.Control
                onChange={(e) => setResidentSignature(e.target.value)}
                type="text"
                value={residentSignature}
              />
            </Form.Group>
            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Staff Signature
              </Form.Label>
              <Form.Control
                onChange={(e) => setStaffSignature(e.target.value)}
                type="text"
                value={staffSignature}
              />
            </Form.Group>

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

            <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
              <div className="save-as-draft-btn w-100">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  SAVE AS DRAFT
                </button>
                <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                  SAVED AND SIGNED
                </button>
              </div>
            </div>

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
        </div>
      </div>
    </>
  );
};

export default EditFTR;
