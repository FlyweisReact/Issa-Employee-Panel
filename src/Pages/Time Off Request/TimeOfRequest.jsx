/** @format */
import { Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { DateInMMDDYY, postApi } from "../../Repository/Apis";
import { RadioMaker, TextareaMaker } from "../../Helper/Makers";
import { SignatureModal } from "../../Mod/Modal";
import { getData } from "../../components/api/api";
import { ClipLoader } from "react-spinners";
import HOC from "../../Layout/Inner/HOC";
import NavWrapper from "../../Helper/NavWrapper";
import {
  BorderlessInput,
  DefaultInput,
  DateFormatter,
} from "../../Helper/Makers";

const TimeOfRequest = () => {
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [normalShift, setNormalShift] = useState("");
  const [unPaidHrLeft, setUnPaidHrLeft] = useState("");
  const [vacationPersonTimeUsed, setVacationPersonTimeUsed] = useState("");
  const [sickTimeUsed, setSickTimeUsed] = useState("");
  const [notes, setNotes] = useState("");
  const [requestType, setRequestType] = useState("PTO");
  const [signature, setSignature] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [timeOf, setTimeOf] = useState(false);
  const [signatureDate, setSignatureDate] = useState("");
  const [signatureTime, setSignatureTime] = useState("");

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
        setDate={setSignatureDate}
        setTime={setSignatureTime}
      />
      <NavWrapper title={"TIME OF REQUEST"} isArrow={true} />
      <Container className="full-width-container">
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
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <div className="grid-container">
            <div className="grid-item long-input">
              <label>Employee Name:</label>
              <DefaultInput value={profile?.data?.fullName} />
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item">
              <label>Begin Date requested:</label>
              <BorderlessInput
                setState={setBeginDate}
                type={"date"}
                value={DateFormatter(beginDate)}
              />
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item">
              <label>End Date requested:</label>
              <BorderlessInput
                setState={setEndDate}
                type={"date"}
                value={DateFormatter(endDate)}
              />
            </div>
            <div className="grid-item">
              <label>Normal Shift:</label>
              <BorderlessInput
                setState={setNormalShift}
                type={"text"}
                value={normalShift}
              />
            </div>
            <div className="grid-item">
              <label>Unpaid Hours left:</label>
              <BorderlessInput
                setState={setUnPaidHrLeft}
                type={"text"}
                value={unPaidHrLeft}
              />
            </div>
            <div className="grid-item">
              <label>Vacation/Personal time used:</label>
              <BorderlessInput
                setState={setVacationPersonTimeUsed}
                type={"text"}
                value={vacationPersonTimeUsed}
              />
            </div>
            <div className="grid-item">
              <label>Sick Time used:</label>
              <BorderlessInput
                setState={setSickTimeUsed}
                type={"text"}
                value={sickTimeUsed}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>For Administrator</label>
            </div>
            <div className="grid-item full-wid-input">
              <label>Time off request approved:</label>
              <div className="Radio_btns ml-2">
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
                    checked={timeOf}
                  />
                </div>
              </div>
            </div>
            <div className="grid-item full-wid-input">
              <TextareaMaker
                label={"Notes"}
                setValue={setNotes}
                value={notes}
                row={2}
                placeholder=""
              />
            </div>

            <div className="grid-input full-wid-input d-block">
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
                  {signature && (
                    <p>
                      Digitally Sign by {signature}{" "}
                      {signatureDate && DateInMMDDYY(signatureDate)}{" "}
                      {signatureTime}{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button className="employee_create_btn">
            {" "}
            {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
          </button>
        </form>
      </Container>
    </>
  );
};

export default HOC(TimeOfRequest);
