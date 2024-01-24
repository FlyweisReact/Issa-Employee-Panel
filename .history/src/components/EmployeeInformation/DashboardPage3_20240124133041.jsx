/** @format */

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DashboardPage3 = () => {
  const navigate = useNavigate();
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [supervisorNameAndTitle, setSupervisorNameAndTitle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [dutiesPerformed, setDutiesPerformed] = useState("");
  const [reasonForLeaving, setReasonForLeaving] = useState("");
  const [mayContactWithEmployee, setMayContactWithEmployee] = useState('');

  const payload = {
    streetAddress , 
    city , 
    state , 
    zipCode , 
    phoneNumber , 
    supervisorNameAndTitle,
    previousCompany : {
      
    }
  }

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/dashboard/page-2")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            EMPLOYMENT HISTORY <br />
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
              <span style={{ fontSize: ".5rem" }}>🔵</span>
              <span style={{ fontSize: ".5rem" }}>🔵</span>

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

      <div
        style={{
          width: "78%",
          marginBottom: "1rem",
          borderRadius: "0rem",
          padding: "0",
          margin: "auto",
          paddingLeft: "3rem",
        }}
      >
        {" "}
        <div className="top-div-personal2">
          <Form
            id="form-appendix"
            className="employee1"
            style={{ width: "100%" }}
          >
            <p style={{ fontWeight: "500" }}>
              Please list your work experience in the past five (5) years,
              beginning with the most recent job held. If you were
              self-employed, give firm name. Attach additional sheets if
              necessary. Please do not write “see resume”.
            </p>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employer Name:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Street Address:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                City :
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                State:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                ZipCode:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Phone Number:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Supervisor Name and Title:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p style={{ fontSize: "1rem" }}>Employment Date:</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                From:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                To:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p style={{ fontSize: "1rem" }}>Salary:</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Start:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                End:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Your Job Title(s):
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Duties performed and advancements or promotions earned while
                with this employer:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  minWidth: "200px",
                }}
              >
                Reason(s) for leaving: ­­­­­­­­­­
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
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
                  May we contact this employer?
                </span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      name="nightSweats"
                      type={"radio"}
                      isValid
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
                    />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      No
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              </Form.Label>
            </Form.Group>

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
                onClick={() => navigate("/employee/dashboard/page-4")}
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

export default DashboardPage3;
