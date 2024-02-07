/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Table } from "react-bootstrap";
import { InputMaker } from 'rea'

const EmployeeSheet = () => {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [registeredHours, setRegisteredHours] = useState(0);
  const [otHours, setOtHours] = useState(0);
  const [holiday, setHoliday] = useState(0);
  const [total, setTotal] = useState(0);
  const [managerName, setManagerName] = useState("");
  const [savedSigned, setSavedSigned] = useState("");

  const payload = {
    employeeId,
    startDate,
    endDate,
    year,
    month,
    employeeName,
    employeeSignature,
    registeredHours,
    otHours,
    holiday,
    total,
    managerName,
    savedSigned,
  };

  const submitHandler = async () => {
    try {
      const res = await axios.post(
        `${process.env.React_App_Baseurl}api/v1/employee/createTimeSheet` , payload 
      );
    } catch {}
  };

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            TIME SHEET
          </p>
          <p
            onClick={() => navigate("/employee/time-sheet")}
            style={{
              paddingRight: "3px",
              color: "#0C5C75",
              textDecoration: "underline",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            EMPLOYEE SCHEDULE{" "}
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
        <Form>
          <InputMaker />
        </Form>
          <Form.Group className="mb-3 mt-5">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Pay period Start Date:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Pay Period End Date:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Employee Name:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Employee Signature :
            </Form.Label>
            {/* <Form.Control type="text" placeholder="Enter text" /> */}
          </Form.Group>

          <div className="save-as-draft-btn-personal">
            <div>
              <img
                style={{ height: "80%", width: "100%", border: "1px " }}
                src="/Dashboard/save.png"
                alt=""
              />
            </div>
            <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn"
            >
              <button style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}>
                SAVE AS DRAFT
              </button>
              <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                SAVED AND SIGNED
              </button>
            </div>
          </div>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginTop: "2rem",
            }}
          >
            Office Use Only
          </p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Register Hours:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              O.T. Hours
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Holiday
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Total:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <div style={{ width: "90%" }}>
              {" "}
              {/* <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
                eventContent={renderEventContent}
              /> */}
            </div>
            <div>
              <Table
                bordered
                responsive
                style={{
                  marginTop: "2rem",
                  borderColor: "black",
                  marginBottom: "1rem",
                }}
              >
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Clock IN 1</th>
                    <th>Clock OUT 1</th>
                    <th>Total1</th>
                    <th>Clock OUT 2</th>
                    <th>TOTAL 2</th>
                    <th>Daily Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Saturday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                  <tr>
                    <th>Sunday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                  <tr>
                    <th>Monday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                  <tr>
                    <th>Tuesday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                  <tr>
                    <th>Wednesday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                  <tr>
                    <th>Thursday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                  <tr>
                    <th>Friday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                </tbody>
              </Table>
              <Table bordered responsive style={{ borderColor: "black" }}>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Clock IN 1</th>
                    <th>Clock OUT 1</th>
                    <th>Total1</th>
                    <th>Clock OUT 2</th>
                    <th>TOTAL 2</th>
                    <th>Daily Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Saturday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                  <tr>
                    <th>Sunday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                  <tr>
                    <th>Monday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                  <tr>
                    <th>Tuesday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                  <tr>
                    <th>Wednesday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                  <tr>
                    <th>Thursday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                  <tr>
                    <th>Friday</th>
                    <th>12/11/2021</th>
                    <th>12:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>11:00</th>
                    <th>1:00</th>
                    <th>2:00</th>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div
              style={{
                width: "80%",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  backgroundColor: "#D3F091",
                  padding: ".2rem",
                }}
              >
                WEEK 1 TOTAL HOURS: 23
              </span>
              <span
                style={{
                  backgroundColor: "#D1F3FE",

                  padding: ".2rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                WEEK 2 TOTAL HOURS: 45
              </span>
              <span
                style={{
                  backgroundColor: "#FFFF00",
                  padding: ".2rem",
                }}
              >
                PAYCHECK TOTAL HOURS: 7800$
              </span>
            </div>

            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Manager Name and Signature:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <div className="save-as-draft-btn-personal">
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
              type="submit"
            >
              PRINT REPORT
            </button>
          </div>
          <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeSheet;
