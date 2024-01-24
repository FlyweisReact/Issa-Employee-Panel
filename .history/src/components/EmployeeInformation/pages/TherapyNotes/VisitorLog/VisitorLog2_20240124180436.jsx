/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { Auth, Baseurl } from "../../../../../Baseurl";
import axios from "axios";
import { showMsg } from "../../../../api/ShowMsg";
import { ClipLoader } from "react-spinners";
const VisitorLog2 = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [reason, setReason] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    date,
    visitorName,
    timeIn,
    reason,
    timeOut,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.React_App_Baseurl}employee/createVisitLog`,
        payload,
        Auth()
      );
      const msg = res.data.message;
      showMsg("", msg, "success");
      setLoading(false);
      navigate("/employee/therapy-notes/visitor-log");
    } catch (err) {
      showMsg("Error", err.response.data.message, "error");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{
            width: "80%",
            marginBottom: "1rem",
            display: "flex",
            paddingRight: "1rem",
          }}
        >
          <p style={{ fontWeight: "bold", flex: "1" }}> VISITOR SIGN IN LOG</p>
          <p>
            <Button
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                backgroundColor: "#1A9FB2",
                padding: ".5rem 1.5rem",
                border: "none",
              }}
              onClick={() => navigate("/employee/therapy-notes/visitor-log")}
            >
              LOGS
            </Button>
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form className="form-personal" onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date 
              </Form.Label>
              <Form.Control
                onChange={(e) => setDate(e.target.value)}
                required
                type="date"
                placeholder="Enter Date"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Visitor Name 
              </Form.Label>
              <Form.Control
                onChange={(e) => setVisitorName(e.target.value)}
                required
                type="text"
                placeholder="Enter  Visitor Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Time In 
              </Form.Label>
              <Form.Control
                onChange={(e) => setTimeIn(e.target.value)}
                required
                type="time"
                placeholder="Enter  Time In"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Time Out :
              </Form.Label>
              <Form.Control
                onChange={(e) => setTimeOut(e.target.value)}
                required
                type="time"
                placeholder="Enter Time Out"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Reason :
              </Form.Label>
              <Form.Control
                onChange={(e) => setReason(e.target.value)}
                required
                type="text"
                placeholder="Enter  Reason"
              />
            </Form.Group>

            <div className="save-as-draft-btn123">
              <button  className="btn1233" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default VisitorLog2;
