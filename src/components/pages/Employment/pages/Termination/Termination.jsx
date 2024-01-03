import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const Termination = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState("______________");
  const [recipientName, setRecipientName] = useState("______________");
  const [startingPay, setStartingPay] = useState("______________");
  const [startDate, setStartDate] = useState("______________");
  return (
    <div className="main-div-personal important">
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div className="nav-div-personal">
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            EMPLOYEE TERMINATION
          </p>
        </div>
      </div>
      <div className="top-div-personal">
        <Form
          id="form-appendix"
          className="form-personal offer-letter appendix1"
        >
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date :
            </Form.Label>
            <Form.Control type="date" placeholder="Enter  Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Name of Terminated Employee:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter  name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Hire Date:
            </Form.Label>
            <Form.Control type="date" placeholder="Enter  name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Termination Date:
            </Form.Label>
            <Form.Control type="date" placeholder="Enter  name" />
          </Form.Group>

          <p style={{ fontSize: "1rem" }}>Reason for Termination</p>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Voluntary:
            </Form.Label>
            <Form.Control type="text" placeholder="Please Enter  " />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Involuntary:
            </Form.Label>
            <Form.Control type="text" placeholder="Please Enter  " />
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
                Documents disciplinary action prior to termination
              </span>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                  <Form.Check.Input name="nightSweats" type={"radio"} isValid />
                  <Form.Check.Label
                    style={{
                      marginLeft: "5px",
                      marginRight: "15px",
                      marginBottom: "0",
                    }}
                  >
                    Verbal warnings
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                  <Form.Check.Input name="nightSweats" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    Written warnings
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-night-sweats-no`}
                >
                  <Form.Check.Input name="nightSweats" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    None
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Label>
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
                Copy Provided to employee
              </span>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                  <Form.Check.Input name="nightSweats" type={"radio"} isValid />
                  <Form.Check.Label
                    style={{
                      marginLeft: "5px",
                      marginRight: "15px",
                      marginBottom: "0",
                    }}
                  >
                    Employee
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                  <Form.Check.Input name="nightSweats" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    Employee File
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-night-sweats-no`}
                >
                  <Form.Check.Input name="nightSweats" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    Other
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Label>
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
                Eligible for rehire and date
              </span>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                  <Form.Check.Input name="nightSweats" type={"radio"} isValid />
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
                  <Form.Check.Input name="nightSweats" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    No
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Label>
          </Form.Group>
          <p>If no, Please Explain</p>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Please Explain" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Employee Signature :
            </Form.Label>
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
                SAVED AND SAVED
              </button>
            </div>
          </div>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date :
            </Form.Label>
            <Form.Control type="date" placeholder="Enter  dATE" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Administrator Signature :
            </Form.Label>
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
                SAVED AND SAVED
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
  );
};
