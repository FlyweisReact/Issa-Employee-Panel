/** @format */
import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Dashboard2.css";
import HOC2 from "./layout/HOC2";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { showMsg } from "../../Baseurl";
import NavWrapper from "../../Helper/NavWrapper";
import { BorderlessInput, RadioMaker } from "../../Helper/Makers";

const Dashboard2 = () => {
  const navigate = useNavigate();
  const [today, setToday] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [cityAddress, setCityAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [howLong, setHowLong] = useState("");
  const [primaryPhoneNumber, setPrimaryPhoneNumber] = useState("");
  const [alternativePhoneNumber, setAlternativePhoneNumber] = useState("");
  const [underAgee18, setUnderAgee18] = useState("");
  const [ssn, setSsn] = useState("");
  const [legallyEligible, setLegallyEligible] = useState("");
  const [desirePosition, setDesirePosition] = useState("");
  const [desireSalary, setDesireSalary] = useState("");
  const [dateAvailableToStart, setDateAvailableToStart] = useState("");
  const [hourWorkWeekly, setHourWorkWeekly] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState("");
  const [partTimeOnly, setPartTimeOnly] = useState("");
  const [fullPartTimeOnly, setFullPartTimeOnly] = useState("");
  const [onCall, setOnCall] = useState("");
  const [monday, setMonday] = useState("");
  const [tuesday, setTuesday] = useState("");
  const [wednesday, setWednesday] = useState("");
  const [thursday, setThursday] = useState("");
  const [friday, setFriday] = useState("");
  const [saturday, setSaturday] = useState("");
  const [sunday, setSunday] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middle, setMiddle] = useState("");
  const [maiden, setMaiden] = useState("");
  const [stateAddress, setStateAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});

  const payload = {
    today,
    hireDate,
    addressNumber,
    streetAddress,
    cityAddress,
    zipCode,
    howLong,
    primaryPhoneNumber,
    alternativePhoneNumber,
    underAgee18,
    ssn,
    legallyEligible,
    desirePosition,
    desireSalary,
    dateAvailableToStart,
    hourWorkWeekly,
    fullTimeOnly,
    partTimeOnly,
    fullPartTimeOnly,
    onCall,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
    firstName,
    lastName,
    middle,
    maiden,
    stateAddress,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.React_App_Baseurl}employee/addEmployeeApplication`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setLoading(false);
      const msg = res.data.message;
      showMsg("", msg, "success");
      navigate("/employee/dashboard/page-2");
    } catch (e) {
      setLoading(false);
      const msg = e?.response?.data?.message;
      showMsg("Error ||", msg, "danger");
    }
  };

  const fetchHandler = async () => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/viewEmployeeApplication`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = res?.data?.data;
      setDetail(data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (detail) {
      setAddressNumber(detail?.addressNumber);
      setToday(detail?.today);
      setHireDate(detail?.hireDate);
      setStreetAddress(detail?.streetAddress);
      setCityAddress(detail?.cityAddress);
      setZipCode(detail?.zipCode);
      setHowLong(detail?.howLong);
      setPrimaryPhoneNumber(detail?.primaryPhoneNumber);
      setAlternativePhoneNumber(detail?.alternativePhoneNumber);
      setUnderAgee18(detail?.underAgee18);
      setSsn(detail?.ssn);
      setLegallyEligible(detail?.legallyEligible);
      setDesirePosition(detail?.desirePosition);
      setDesireSalary(detail?.desireSalary);
      setDateAvailableToStart(detail?.dateAvailableToStart);
      setHourWorkWeekly(detail?.hourWorkWeekly);
      setFullTimeOnly(detail?.fullTimeOnly);
      setPartTimeOnly(detail?.partTimeOnly);
      setFullPartTimeOnly(detail?.fullPartTimeOnly);
      setOnCall(detail?.onCall);
      setMonday(detail?.monday);
      setTuesday(detail?.tuesday);
      setWednesday(detail?.wednesday);
      setThursday(detail?.thursday);
      setFriday(detail?.friday);
      setSaturday(detail?.saturday);
      setSunday(detail?.sunday);
      setFirstName(detail?.firstName);
      setLastName(detail?.lastName);
      setMiddle(detail?.middle);
      setMaiden(detail?.maiden);
      setStateAddress(detail?.stateAddress);
    }
  }, [detail]);

  //Date Formation for value
  function dateFormation(date) {
    if (date) {
      const formattedDate = new Date(date).toISOString().split("T")[0];
      return formattedDate;
    }
  }

  return (
    <>
      <div className="main-div-personal important" style={{ height: "100%" }}>
        <NavWrapper title={"BASIC INFORMATION"} filled={1} empty={4} />
        <Container>
          <div className="top-div-personal2">
            <Form
              id="form-appendix"
              className="employee1 "
              onSubmit={handleSubmit}
            >
              <div className="grid-container">
                <div class="grid-item">
                  <label>Today's Date:</label>
                  <BorderlessInput
                    setState={setToday}
                    placeholder={""}
                    type={"date"}
                    value={dateFormation(today)}
                  />
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item">
                  <label>Hire Date:</label>
                  <BorderlessInput
                    setState={setHireDate}
                    placeholder={""}
                    type={"date"}
                    value={dateFormation(hireDate)}
                  />
                </div>
              </div>

              <p className="mt-3">Name</p>
              <div className="grid-container">
                <div className="grid-item">
                  <label>Last:</label>
                  <BorderlessInput
                    setState={setLastName}
                    placeholder={""}
                    type={"text"}
                    value={lastName}
                  />
                </div>
                <div className="grid-item">
                  <label>First:</label>
                  <BorderlessInput
                    setState={setFirstName}
                    placeholder={""}
                    type={"text"}
                    value={firstName}
                  />
                </div>

                <div className="grid-item">
                  <label>Middle:</label>
                  <BorderlessInput
                    setState={setMiddle}
                    placeholder={""}
                    type={"text"}
                    value={middle}
                  />
                </div>

                <div className="grid-item">
                  <label>Maiden:</label>
                  <BorderlessInput
                    setState={setMaiden}
                    placeholder={""}
                    type={"text"}
                    value={maiden}
                  />
                </div>
              </div>

              <p className="mt-3">Current Address</p>
              <div className="grid-container">
                <div className="grid-item">
                  <label for="input1">Number:</label>
                  <BorderlessInput
                    setState={setAddressNumber}
                    placeholder={""}
                    type={"text"}
                    value={addressNumber}
                  />
                </div>
                <div className="grid-item">
                  <label for="input1">Street:</label>
                  <BorderlessInput
                    setState={setStreetAddress}
                    placeholder={""}
                    type={"text"}
                    value={streetAddress}
                  />
                </div>
                <div className="grid-item">
                  <label for="input1">City:</label>
                  <BorderlessInput
                    setState={setCityAddress}
                    placeholder={""}
                    type={"text"}
                    value={cityAddress}
                  />
                </div>
                <div className="grid-item">
                  <label for="input1">State:</label>
                  <BorderlessInput
                    setState={setStateAddress}
                    placeholder={""}
                    type={"text"}
                    value={stateAddress}
                  />
                </div>
                <div className="grid-item">
                  <label for="input1">Zip:</label>
                  <BorderlessInput
                    setState={setZipCode}
                    placeholder={""}
                    type={"text"}
                    value={zipCode}
                  />
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div class="grid-item long-input">
                  <label for="input1">
                    How long have you lived at this address?
                  </label>
                  <BorderlessInput
                    setState={setHowLong}
                    placeholder={""}
                    type={"text"}
                    value={howLong}
                  />
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item">
                  <label for="input1">Primary Phone Number:</label>
                  <BorderlessInput
                    setState={setPrimaryPhoneNumber}
                    placeholder={""}
                    type={"tel"}
                    value={primaryPhoneNumber}
                  />
                </div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item">
                  <label for="input1"> Alternative Phone Number:</label>
                  <BorderlessInput
                    setState={setAlternativePhoneNumber}
                    placeholder={""}
                    type={"tel"}
                    value={alternativePhoneNumber}
                  />
                </div>
                <div className="grid-item long-input Radio_btns">
                  <label>Are you under the age of 18?</label>
                  <div className="btns">
                    <RadioMaker
                      name={"underAgee18"}
                      setValue={setUnderAgee18}
                      value={true}
                      id={"underAge"}
                      label={"Yes"}
                      checked={underAgee18}
                    />
                    <RadioMaker
                      name={"underAgee18"}
                      setValue={setUnderAgee18}
                      value={false}
                      id={"Plus"}
                      label={"No"}
                      checked={underAgee18}
                    />
                  </div>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item">
                  <label for="input1">SSN:</label>
                  <BorderlessInput
                    setState={setSsn}
                    placeholder={""}
                    type={"text"}
                    value={ssn}
                  />
                </div>
                <div className="grid-item long-input Radio_btns">
                  <label> Are you legally eligible to work in the US?</label>
                  <div className="btns">
                    <RadioMaker
                      name={"eligible"}
                      setValue={setLegallyEligible}
                      value={true}
                      id={"USDone"}
                      label={"Yes"}
                      checked={legallyEligible}
                    />
                    <RadioMaker
                      name={"eligible"}
                      setValue={setUnderAgee18}
                      value={false}
                      id={"UsFalse"}
                      label={"No"}
                      checked={underAgee18}
                    />
                  </div>
                </div>
                <div className="grid-item long-input">
                  <label>
                    {" "}
                    (Proof of U.S. citizenship will be required upon hire)
                  </label>
                </div>
                <div className="grid-item long-input ">
                  <label>Desired Positions:</label>
                  <BorderlessInput
                    setState={setDesirePosition}
                    placeholder={""}
                    type={"text"}
                    value={desirePosition}
                  />
                </div>
                <div className="grid-item"></div>
                <div className="grid-item">
                  <label>Desired Salary:</label>
                  <BorderlessInput
                    setState={setDesireSalary}
                    placeholder={"________$"}
                    type={"text"}
                    value={desireSalary}
                  />
                </div>
                <div className="grid-item">
                  <label>Date available to start:</label>
                  <BorderlessInput
                    setState={setDateAvailableToStart}
                    placeholder={""}
                    type={"date"}
                    value={dateFormation(dateAvailableToStart)}
                  />
                </div>
                <div className="grid-item"></div>
                <div className="grid-item long-input">
                  <label>How many hours can you work weekly?</label>
                  <BorderlessInput
                    setState={setHourWorkWeekly}
                    placeholder={""}
                    type={"time"}
                    value={hourWorkWeekly}
                  />
                </div>
              </div>

              <p className="mt-3">Type of Employment desired</p>
              <div className="grid-container">
                <div className="grid-item">
                  <label>Full time ONLY:</label>
                  <BorderlessInput
                    setState={setFullTimeOnly}
                    placeholder={""}
                    type={"text"}
                    value={fullTimeOnly}
                  />
                </div>

                <div className="grid-item">
                  <label>Part time ONLY:</label>
                  <BorderlessInput
                    setState={setPartTimeOnly}
                    placeholder={""}
                    type={"text"}
                    value={partTimeOnly}
                  />
                </div>

                <div className="grid-item">
                  <label>Full time or Part time:</label>
                  <BorderlessInput
                    setState={setFullPartTimeOnly}
                    placeholder={""}
                    type={"text"}
                    value={fullPartTimeOnly}
                  />
                </div>
                <div className="grid-item">
                  <label> On Call:</label>
                  <BorderlessInput
                    setState={setOnCall}
                    placeholder={""}
                    type={"text"}
                    value={onCall}
                  />
                </div>
              </div>

              <p className="mt-3">Days/Hours Available to Work</p>
              <div className="grid-container">
                <div className="grid-item">
                  <label>Monday:</label>
                  <BorderlessInput
                    setState={setMonday}
                    placeholder={"10:00 to "}
                    type={"text"}
                    value={monday}
                  />
                </div>

                <div className="grid-item">
                  <label>Part time ONLY:</label>
                  <BorderlessInput
                    setState={setPartTimeOnly}
                    placeholder={""}
                    type={"text"}
                    value={partTimeOnly}
                  />
                </div>

                <div className="grid-item">
                  <label>Full time or Part time:</label>
                  <BorderlessInput
                    setState={setFullPartTimeOnly}
                    placeholder={""}
                    type={"text"}
                    value={fullPartTimeOnly}
                  />
                </div>
                <div className="grid-item">
                  <label> On Call:</label>
                  <BorderlessInput
                    setState={setOnCall}
                    placeholder={""}
                    type={"text"}
                    value={onCall}
                  />
                </div>
              </div>

              <p className="dashboard2-ptag">
                <p>Hours available to Work days/hours</p>{" "}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="mb-3"
                >
                  <p>Monday</p>
                  <Form.Control
                    style={{ width: "50%" }}
                    type="time"
                    placeholder=""
                    value={monday}
                    required
                    onChange={(e) => setMonday(e.target.value)}
                  />
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="mb-3"
                >
                  <p>Tuesday</p>
                  <Form.Control
                    style={{ width: "50%" }}
                    type="time"
                    placeholder=""
                    required
                    value={tuesday}
                    onChange={(e) => setTuesday(e.target.value)}
                  />
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="mb-3"
                >
                  <p>Wednesday</p>
                  <Form.Control
                    style={{ width: "50%" }}
                    type="time"
                    required
                    placeholder=""
                    value={wednesday}
                    onChange={(e) => setWednesday(e.target.value)}
                  />
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="mb-3"
                >
                  <p>Thursday</p>
                  <Form.Control
                    style={{ width: "50%" }}
                    type="time"
                    placeholder=""
                    required
                    value={thursday}
                    onChange={(e) => setThursday(e.target.value)}
                  />
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="mb-3"
                >
                  <p>Friday</p>
                  <Form.Control
                    style={{ width: "50%" }}
                    type="time"
                    placeholder=""
                    required
                    value={friday}
                    onChange={(e) => setFriday(e.target.value)}
                  />
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="mb-3"
                >
                  <p>Saturday</p>
                  <Form.Control
                    style={{ width: "50%" }}
                    type="time"
                    placeholder=""
                    required
                    value={saturday}
                    onChange={(e) => setSaturday(e.target.value)}
                  />
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="mb-3"
                >
                  <p>Sunday</p>
                  <Form.Control
                    style={{ width: "50%" }}
                    type="time"
                    placeholder=""
                    required
                    value={sunday}
                    onChange={(e) => setSunday(e.target.value)}
                  />
                </span>
              </p>

              <div className="employee_btn_div">
                <button type="submit" className="employee_create_btn">
                  {loading ? <ClipLoader color="#fff" /> : "NEXT"}
                </button>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HOC2(Dashboard2);
