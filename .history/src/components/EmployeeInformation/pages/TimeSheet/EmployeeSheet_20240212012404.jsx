/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../../../../Repository/Apis.js";
import { Form, Table } from "react-bootstrap";
import { InputMaker } from "../../../../Helper/Makers.js";
import { SignatureModal } from "../../../../Mod/Modal.js";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { Auth } from "../../../../Baseurl.js";

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
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const submitHandler = async (e) => {
    e.preventDefault();
    postApi(setLoading, `api/v1/employee/createTimeSheet`, payload);
  };

  //  Get Profile --
  const getProfile = async () => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/getProfile`,
        Auth()
      );
      setEmployeeId(res?.data?.data?._id);
      setEmployeeName(res?.data?.data?.fullName);
    } catch {}
  };

  useEffect(() => {
    getProfile();
  }, []);

  // const fetchSheet = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${process.env.React_App_Baseurl}employee/getTimeSheet`,
  //       {
  //         employeeId: "65c09953264092637bb99d1b",
  //         stateDate: "2024-02-01",
  //         endDate: "2024-02-15",
  //         year: "2024",
  //         month: "02",
  //       }
  //     );
  //     console.log(res);
  //   } catch (error) {
  //     console.error("Error fetching timesheet:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchSheet();
  // }, []);

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setEmployeeSignature}
        value={employeeSignature}
        text={"Digitally Sign by employee name"}
      />
      <SignatureModal
        show={open2}
        onHide={() => setOpen2(false)}
        setValue={setSavedSigned}
        value={savedSigned}
        text={"Digitally Sign by employee name"}
      />

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
          <Form className="w-100 text-start" onSubmit={submitHandler}>
            <InputMaker
              label={"Pay period Start Date"}
              placeholder=""
              type="date"
              setState={setStartDate}
              value={startDate}
            />
            <InputMaker
              label={"Pay period End Date"}
              placeholder=""
              type="date"
              setState={setEndDate}
              value={endDate}
            />
            <Form.Group className="mb-3">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control defaultValue={}={employeeName} />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employee Signature
              </Form.Label>
              <div className="cluod_save">
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
            </Form.Group>

            <p
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                marginTop: "2rem",
              }}
            >
              Office Use Only
            </p>

            <InputMaker
              label={"Register Hours"}
              placeholder=""
              type="number"
              setState={setRegisteredHours}
              value={registeredHours}
            />
            <InputMaker
              label={"O.T. Hours"}
              placeholder=""
              type="number"
              setState={setOtHours}
              value={otHours}
            />
            <InputMaker
              label={"Holiday"}
              placeholder=""
              type="number"
              setState={setHoliday}
              value={holiday}
            />
            <InputMaker
              label={"Total"}
              placeholder=""
              type="number"
              setState={setTotal}
              value={total}
            />

            <Form.Group className="mb-3 ">
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
            </Form.Group>

            <InputMaker
              label={"Manager Name and Signature"}
              placeholder=""
              type="text"
              setState={setManagerName}
              value={managerName}
            />

            <div className="cluod_save">
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
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default EmployeeSheet;
