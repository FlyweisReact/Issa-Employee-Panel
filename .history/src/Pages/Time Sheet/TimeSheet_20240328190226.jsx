/** @format */

import React, { useEffect, useState } from "react";
import { getApi, postApi } from "../../Repository/Apis.js";
import { Form, Table } from "react-bootstrap";
import { DefaultInput, InputMaker } from "../../Helper/Makers.js";
import { SignatureModal } from "../../Mod/Modal.js";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import HOC from "../../Layout/Inner/HOC.js";
import NavWrapper from "../../Helper/NavWrapper.js";
import { signatureFormat } from "../../utils/utils.js";

const TimeSheet = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [registeredHours, setRegisteredHours] = useState(0);
  const [otHours, setOtHours] = useState(0);
  const [holiday, setHoliday] = useState(0);
  const [total, setTotal] = useState(0);
  const [managerName, setManagerName] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sheet, setSheet] = useState({});
  const [employeeDate, setEmployeeDate] = useState("");
  const [employeeTime, setEmployeeTime] = useState("");
  const [employeeSignatureSaveAsDraft, setEmployeeSignatureSaveAsDraft] =
    useState(false);
  const [managerSignature, setManagerSignature] = useState("");
  const [managerSignatureDate, setManagerSignatureDate] = useState("");
  const [managerSignatureTime, setManagerSignatureTime] = useState("");
  const [managerSignatureSaveAsDraft, setManagerSignatureSaveAsDraft] =
    useState("");
  const [employeeProfile, setEmployeeProfile] = useState({});

  const payload = {
    employeeId: employeeProfile?.data?._id,
    startDate,
    endDate,
    year,
    month,
    employeeName: employeeProfile?.data?.fullName,
    employeeSignature,
    employeeSignatureDate: employeeDate,
    employeeSignatureTime: employeeTime,
    employeeSignatureSaveAsDraft,
    registeredHours,
    otHours,
    holiday,
    total,
    managerName,
    managerSignature,
    managerSignatureDate,
    managerSignatureTime,
    managerSignatureSaveAsDraft,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    postApi(setLoading, `employee/createTimeSheet`, payload);
  };

  const getProfile = async () => {
    getApi({
      url: "employee/getProfile",
      setResponse: setEmployeeProfile,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  // Fetch Previous Sheet
  const fetchSheet = async () => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/getTimeSheet`,
        {
          params: {
            employeeId,
            stateDate: startDate,
            endDate,
            year,
            month,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSheet(res?.data?.data);
    } catch (error) {
      console.error("Error fetching timesheet:", error);
    }
  };

  useEffect(() => {
    if (employeeId) {
      fetchSheet();
    }
  }, [employeeId]);

  useEffect(() => {
    if (endDate) {
      const updatedMonth = new Date(endDate);
      setMonth(updatedMonth?.getMonth() + 1);
      setYear(updatedMonth?.getFullYear());
    }
  }, [endDate]);

  function getDay(date) {
    const updatedDate = new Date(date);
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = updatedDate.getDay();
    const dayName = daysOfWeek[dayIndex];
    return dayName;
  }

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setEmployeeSignature}
        value={employeeSignature}
        setDate={setEmployeeDate}
        setTime={setEmployeeTime}
      />
      <SignatureModal
        show={open2}
        onHide={() => setOpen2(false)}
        setValue={setManagerSignature}
        value={managerSignature}
        setDate={setManagerSignatureDate}
        setTime={setManagerSignatureTime}
      />

      <NavWrapper title={"TIME SHEET"} isArrow={true} />

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

            <DefaultInput
              value={employeeProfile?.data?.fullName}
              isBots={true}
              label="Employee Name"
            />

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employee Signature
              </Form.Label>

              <div className="custome-cloud-btn">
                <div className="btns">
                  <button
                    className="draft"
                    onClick={() =>
                      setEmployeeSignatureSaveAsDraft(
                        !employeeSignatureSaveAsDraft
                      )
                    }
                  >
                    {" "}
                    SAVE AS DRAFT
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="signed"
                  >
                    {" "}
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {signatureFormat({
                    sign: employeeSignature,
                    date: employeeDate,
                    time: employeeTime,
                  })}
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
              {sheet?.scheduleData?.length > 0 && (
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
                        <th>Total 1</th>
                        <th>Clock IN 2</th>
                        <th>Clock OUT 2</th>
                        <th>Total 2</th>
                        <th>Clock IN 3</th>
                        <th>Clock OUT 3</th>
                        <th>Total 3</th>
                        <th>Daily Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sheet?.scheduleData?.map((i, index) => (
                        <tr key={`sheet${index}`}>
                          <td> {getDay(i.date)} </td>
                          <td> {i.date} </td>
                          <td>
                            {
                              i?.work?.find((item) => item.type === "amToAm")
                                ?.start
                            }
                          </td>
                          <td>
                            {
                              i?.work?.find((item) => item.type === "amToAm")
                                ?.end
                            }
                          </td>
                          <td>
                            {
                              i?.work?.find((item) => item.type === "amToAm")
                                ?.timeTaken
                            }
                          </td>
                          <td>
                            {
                              i?.work?.find((item) => item.type === "amToPm")
                                ?.start
                            }
                          </td>
                          <td>
                            {
                              i?.work?.find((item) => item.type === "amToPm")
                                ?.end
                            }
                          </td>
                          <td>
                            {
                              i?.work?.find((item) => item.type === "amToPm")
                                ?.timeTaken
                            }
                          </td>
                          <td>
                            {
                              i?.work?.find((item) => item.type === "pmToAm")
                                ?.start
                            }
                          </td>
                          <td>
                            {
                              i?.work?.find((item) => item.type === "pmToAm")
                                ?.end
                            }
                          </td>
                          <td>
                            {
                              i?.work?.find((item) => item.type === "pmToAm")
                                ?.timeTaken
                            }
                          </td>
                          <td> {i.totalTime} </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}

              <div className="payCheck">
                {sheet?.week1TotalHr > 0 && (
                  <span
                    style={{
                      backgroundColor: "#D3F091",
                      padding: ".2rem",
                    }}
                  >
                    WEEK 1 TOTAL HOURS: {sheet?.week1TotalHr}
                  </span>
                )}
                {sheet?.week2TotalHr > 0 && (
                  <span
                    style={{
                      backgroundColor: "#D1F3FE",

                      padding: ".2rem",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                    }}
                  >
                    WEEK 2 TOTAL HOURS: {sheet?.week2TotalHr}
                  </span>
                )}
                {sheet?.week3TotalHr > 0 && (
                  <span
                    style={{
                      backgroundColor: "#D1F3FE",

                      padding: ".2rem",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                    }}
                  >
                    WEEK 3 TOTAL HOURS: {sheet?.week3TotalHr}
                  </span>
                )}
                {sheet?.week4TotalHr > 0 && (
                  <span
                    style={{
                      backgroundColor: "#D1F3FE",

                      padding: ".2rem",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                    }}
                  >
                    WEEK 4 TOTAL HOURS: {sheet?.week4TotalHr}
                  </span>
                )}
                {sheet?.week5TotalHr > 0 && (
                  <span
                    style={{
                      backgroundColor: "#D1F3FE",

                      padding: ".2rem",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                    }}
                  >
                    WEEK 5 TOTAL HOURS: {sheet?.week5TotalHr}
                  </span>
                )}
                {sheet?.paycheckTotalHr > 0 && (
                  <span
                    style={{
                      backgroundColor: "#FFFF00",
                      padding: ".2rem",
                    }}
                  >
                    PAYCHECK TOTAL HOURS: {sheet?.paycheckTotalHr}
                  </span>
                )}
              </div>
            </Form.Group>

            <InputMaker
              label={"Manager Name"}
              placeholder=""
              type="text"
              setState={setManagerName}
              value={managerName}
            />

            <Form.Group className="mb-3 ">
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button
                    className="draft"
                    onClick={() =>
                      setManagerSignatureSaveAsDraft(
                        !managerSignatureSaveAsDraft
                      )
                    }
                  >
                    {" "}
                    SAVE AS DRAFT
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen2(true)}
                    className="signed"
                  >
                    {" "}
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {signatureFormat({
                    sign: managerSignature,
                    date: managerSignatureDate,
                    time: managerSignatureTime,
                  })}
                </div>
              </div>
            </Form.Group>

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

export default HOC(TimeSheet);
