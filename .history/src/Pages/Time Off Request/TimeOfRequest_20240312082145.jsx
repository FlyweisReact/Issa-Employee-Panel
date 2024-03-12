/** @format */
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { postApi } from "../../Repository/Apis";
import { InputMaker, RadioMaker, TextareaMaker } from "../../Helper/Makers";
import { SignatureModal } from "../../Mod/Modal";
import { getData } from "../../components/api/api";
import { ClipLoader } from "react-spinners";

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
  const [profile, setProfile] = useState({});

  const [timeOf, setTimeOf] = useState(false);

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

  useEffect(() => {
    getData(setProfile, `employee/getProfile`);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    await postApi(setLoading, `employee/createTimeOffRequest`, payload);
    setBeginDate("");
    setEndDate("");
    setNormalShift("");
    setUnPaidHrLeft("");
    setVacationPersonTimeUsed("");
    setSickTimeUsed("");
    setNotes("");
    setSignature("");
  };

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSignature}
        value={signature}
        text={"Digitally Sign by employee name"}
      />
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
          <Form className="w-100 text-start" onSubmit={submitHandler}>
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
              <Form.Control type="text" value={profile?.data?.fullName} />
            </Form.Group>

            <div className="gaped_inputs_max">
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
            </div>

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

            <div className="mb-3">
              <Form.Group
                className="mb-3"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Form.Label className="Radio_btns">
                  <span style={{ marginRight: "10px" }}>
                    For Administrator Time off request approved:
                  </span>
                  <div className="btns">
                    <RadioMaker
                      name="residentCompletedSession"
                      setValue={setTimeOf}
                      value={true}
                      id={"residentCompletedSession1"}
                      label={"Yes"}
                      checked={timeOf}
                    />
                    <RadioMaker
                      name="residentCompletedSession"
                      setValue={setTimeOf}
                      value={false}
                      id={"residentCompletedSession2"}
                      label={"No"}
                      checked={!timeOf}
                    />
                  </div>
                </Form.Label>
              </Form.Group>
            </div>

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
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="signed"
                >
                  {" "}
                  SAVED AND SIGNED
                </button>
              </div>
              <div>{signature && <p>Digitally Sign by {signature} </p>}</div>
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

export default (TimeOfRequest);
