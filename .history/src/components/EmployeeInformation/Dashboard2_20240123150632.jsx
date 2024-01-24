/** @format */
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Dashboard2.css";
import HOC2 from "./layout/HOC2";
import { IoIosMenu } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import Mobilebar from "../../Mobile/Mobilebar";

const Dashboard2 = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
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

  return (
    <>
      <Mobilebar show={open} handleClose={() => setOpen(false)} />{" "}
      <div className="main-div-personal important" style={{ height: "100%" }}>
        <div className="nav-wrap-personal">
          <div className="nav-div-personal" style={{ width: "100%" }}>
            <IoIosMenu onClick={() => setOpen(true)} className="menu-sidebar" />
            <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
              BASIC INFORMATION <br />
              <span
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: ".7rem",
                  gap: ".3rem",
                  display: "flex",
                }}
              >
                <span style={{ fontSize: ".5rem" }}>🔵</span>
                <span style={{ fontSize: ".5rem" }}>
                  <FaRegCircle />
                </span>
                <span style={{ fontSize: ".5rem" }}>
                  <FaRegCircle />
                </span>
                <span style={{ fontSize: ".5rem" }}>
                  <FaRegCircle />
                </span>
                <span style={{ fontSize: ".5rem" }}>
                  <FaRegCircle />
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="top-div-personal2">
          <Form id="form-appendix" className="employee1">
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Today's Date :
              </Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setToday(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Hire Date :
              </Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setHireDate(e.target.value)}
              />
            </Form.Group>
            <p>Name</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Last:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                First:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Middle:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Maiden:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p>Current Address</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                House No.:
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setAddressNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Street Address:
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                City:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                onChange={(e) => setCityAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                State:
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                ZipCode:
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setZipCode(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                How long have you lived at this address?
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setHowLong(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Primary Phone Number{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                onChange={(e) => setPrimaryPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Alternative Phone Number{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                onChange={(e) => setAlternativePhoneNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  Are you under the age of 18?
                </span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      value={true}
                      onChange={(e) => setUnderAgee18(e.target.value)}
                    />
                    <Form.Check.Label
                      style={{
                        marginLeft: "5px",
                        marginRight: "15px",
                        marginBottom: "0",
                      }}
                    >
                      Yes
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check
                    onChange={(e) => setToday(e.target.value)}
                    type={"radio"}
                    id={`check-api-night-sweats-no`}
                  >
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      value={false}
                      onChange={(e) => setUnderAgee18(e.target.value)}
                    />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      No
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>SSN</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter text"
                onChange={(e) => setSsn(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  Are you legally eligible to work in the US?
                </span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      value={true}
                      onChange={(e) => setLegallyEligible(e.target.value)}
                    />
                    <Form.Check.Label
                      style={{
                        marginLeft: "5px",
                        marginRight: "15px",
                        marginBottom: "0",
                      }}
                    >
                      Yes
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
                      value={false}
                      onChange={(e) => setLegallyEligible(e.target.value)}
                  />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      No
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              </Form.Label>
            </Form.Group>
            <p style={{ fontWeight: "500" }}>
              (Proof of U.S. citizenship will be required upon hire)
            </p>
            <Form.Group className="mb-3">
              <Form.Label>Desired Positions</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                onChange={(e) => setToday(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Desired Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder=" ________$"
                onChange={(e) => setToday(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Date available to start</Form.Label>
              <Form.Control
                type="date"
                placeholder=" ________$"
                onChange={(e) => setToday(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> How many hours can you work weekly?</Form.Label>
              <Form.Control
                type="text"
                placeholder=" ________$"
                onChange={(e) => setToday(e.target.value)}
              />
            </Form.Group>
            <p>How many hours can you work weekly?</p>
            <Form.Group className="mb-3">
              <Form.Label> Full time ONLY</Form.Label>
              <Form.Control
                type="text"
                placeholder=" ________$"
                onChange={(e) => setToday(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> Part time ONLY</Form.Label>
              <Form.Control
                type="text"
                placeholder=" ________$"
                onChange={(e) => setToday(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Full time or Part time </Form.Label>
              <Form.Control
                type="text"
                placeholder=" ________$"
                onChange={(e) => setToday(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> On Call </Form.Label>
              <Form.Control
                type="text"
                placeholder=" ________$"
                onChange={(e) => setToday(e.target.value)}
              />
            </Form.Group>
            <p className="dashboard2-ptag">
              <p>Hours Available to Work</p>{" "}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Monday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                  onChange={(e) => setToday(e.target.value)}
                />
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Tuesday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                  onChange={(e) => setToday(e.target.value)}
                />
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Wednesday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                  onChange={(e) => setToday(e.target.value)}
                />
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Thursday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                  onChange={(e) => setToday(e.target.value)}
                />
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Friday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                  onChange={(e) => setToday(e.target.value)}
                />
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Saturday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                  onChange={(e) => setToday(e.target.value)}
                />
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>Sunday</p>
                <Form.Control
                  style={{ width: "50%" }}
                  type="text"
                  placeholder=""
                  onChange={(e) => setToday(e.target.value)}
                />
              </span>
            </p>

            <div
              style={{
                textAlign: "center",
                width: "100%",
                margin: "auto",
                marginTop: "3rem",
              }}
            >
              <button
                style={{
                  padding: "10px 114px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "4px",
                  fontSize: "1rem",
                }}
                type="submit"
                onClick={() => navigate("/employee/dashboard/page-2")}
              >
                NEXT
              </button>
            </div>
            {/* <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                SUBMIT
              </button>
            </div> */}
          </Form>
        </div>
      </div>
    </>
  );
};

export default HOC2(Dashboard2);
