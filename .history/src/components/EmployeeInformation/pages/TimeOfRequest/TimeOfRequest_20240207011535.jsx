/** @format */

import HOC2 from "../../layout/HOC2";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { postApi } from "../../../../Repository/Apis";
import { InputMaker, TextareaMaker } from "../../../../Helper/Makers";

const TimeOfRequest = () => {
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [normalShift, setNormalShift] = useState("");
  const [unPaidHrLeft, setUnPaidHrLeft] = useState("");
  const [vacationPersonTimeUsed, setVacationPersonTimeUsed] = useState("");
  const [sickTimeUsed, setSickTimeUsed] = useState("");
  const [notes, setNotes] = useState("");
  const [requestType, setRequestType] = useState("");
  const [signature, setSignature] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const payload = {
    beginDate,
    endDate,
    normalShift,
    unPaidHrLeft,
    vacationPersonTimeUsed,
    sickTimeUsed,
    notes,
    requestType,
    signature,
  };

  const submitHandler = () => {
    postApi(setLoading, `employee/createTimeOffRequest`, payload);
  };

  return (
    <>
      <div className="nav-wrap-personal ">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            TIME OF REQUEST
          </p>
          <p></p>
        </div>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <div>
          <Form className="w-100 text-start">
            <div className="therapy-notes-multiple-radio-wb mb-3">
              <div className="main">
                <Form.Check type={"radio"}>
                  <Form.Check.Input
                    name="behaviorTech"
                    type={"radio"}
                    isValid
                    id={"PTO"}
                    value={"PTO"}
                    checked={requestType === "PTO"}
                    onChange={(e) => setRequestType(e.target.value)}
                  />
                  <Form.Check.Label htmlFor="PTO">PTO REQUEST</Form.Check.Label>
                </Form.Check>
              </div>
              <div className="main">
                <Form.Check type={"radio"}>
                  <Form.Check.Input
                    name="behaviorTech"
                    type={"radio"}
                    isValid
                    id={"SICKTIME"}
                    value={"SICKTIME"}
                    checked={requestType === "SICKTIME"}
                    onChange={(e) => setRequestType(e.target.value)}
                  />
                  <Form.Check.Label htmlFor="SICKTIME">
                    SICK TIME REQUEST
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </div>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employee Name
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>

            <InputMaker
              label="Begin Date requested"
              setState={setBeginDate}
              placeholder=""
              type="date"
              value={beginDate}
            />
            <InputMaker
              label="End Date requested"
              setState={setEndDate}
              placeholder=""
              type="date"
              value={endDate}
            />

            <InputMaker
              label="Normal Shift"
              setState={setNormalShift}
              placeholder=""
              type="text"
              value={normalShift}
            />
            <InputMaker
              label="Unpaid Hours left"
              setState={setUnPaidHrLeft}
              placeholder=""
              type="number"
              value={unPaidHrLeft}
            />
            <InputMaker
              label="Vacation/Personal time used"
              setState={setVacationPersonTimeUsed}
              placeholder=""
              type="text"
              value={vacationPersonTimeUsed}
            />
            <InputMaker
              label="  Sick time used"
              setState={setSickTimeUsed}
              placeholder=""
              type="text"
              value={sickTimeUsed}
            />

            <div className="bottom_text">
              <TextareaMaker
                label={"Notes"}
                setValue={setNotes}
                value={notes}
                row={2}
                placeholder=""
              />
            </div>

            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button onClick={() => setOpen(true)} className="signed">
                  {" "}
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
              <p></p>
               </div>
            </div>

            <div
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
          </Form>
        </div>
      </div>
    </>
  );
};

export default HOC2(TimeOfRequest);
