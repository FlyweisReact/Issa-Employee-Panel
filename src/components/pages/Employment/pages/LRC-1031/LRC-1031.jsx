import React from "react";
import { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "./LRC-1031.css";
export const LRC1031 = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [date, setDate] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const toggleFocus = () => {
    setIsInputFocused(!isInputFocused);
  };
  return (
    <div className="main-div-personal important">
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div className="nav-div-personal">
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            ARIZONA DEPARTMENT OF ECONOMIC SECURITY
          </p>
        </div>
      </div>
      <div className="top-div-personal">
        <Form
          id="form-appendix"
          className="form-personal offer-letter appendix1"
        >
          <p style={{ fontSize: "1rem", textAlign: "center" }}>
            CRIMINAL HOSOTY SELF DISCLOSURE AFFIDAVIT
          </p>
          <p style={{ fontSize: ".9rem", fontWeight: "500" }}>
            Your fingerprints will be submitted to the Arizona Department of
            Public Safety (DPS) and the Federal Bureau of Investigation (FBI)
            for a criminal history check. Your self-disclosure on this affidavit
            and the information provided by your criminal history check will be
            used, as authorized by Public Law and Arizona Revised Statues, to
            help us determine your fitness to have unsupervised access to
            vulnerable persons. Your failure to disclose true and accurate
            information on this affidavit will be sufficient grounds to end your
            employment or to deny, suspend, or revoke your license and may be
            referred to the State Attorney General's Office for prosecution.
          </p>
          <p>
            Be sure that you go over all six (6) pages of the self-disclosure
            affidavit.
          </p>
          <p style={{ fontSize: ".9rem", fontWeight: "500" }}>
            You have the right to obtain a copy of any background check report
            and challenge the accuracy or completeness of information contained
            in the report. If you challenge the information, you also have a
            right to prompt determination as to the validity of your challenge.
            To obtain a copy of your background check report, contact the DPS
            Records Unit, ACJIS Division at (602) 223-2222
          </p>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Name (First, Middle, Last):
            </Form.Label>
            <Form.Control type="text" placeholder="Enter  name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date of Birth (MM/DD/YY):
            </Form.Label>
            <div>
              <Calendar
                style={{
                  height: "2.5rem",
                  border: "1px solid #ced4da",
                  borderRadius: "0.25rem",
                  width: "100%",
                  padding: "0 .75rem",
                  fontSize: ".9rem",
                }}
                value={date}
                onChange={(e) => setDate(e.value)}
                dateFormat="mm/dd/yy"
                showIcon
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Address (No., Street, Apt. No.):
            </Form.Label>
            <Form.Control type="text" placeholder="Enter  address" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              City :
            </Form.Label>
            <Form.Control type="text" placeholder="Enter  text" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              State :
            </Form.Label>
            <Form.Control type="text" placeholder="Enter  text" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Zip Code :
            </Form.Label>
            <Form.Control type="text" placeholder="Enter  text" />
          </Form.Group>

          <p>Check one of the following and provide information as directed:</p>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
          ></Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I have not been convicted of nor am I under pending indictment for any crimes."
            />
            <Form.Check
              type="checkbox"
              label="I have been convicted of or I am under pending indictment for the following crime(s) (Provide dates, location/ jurisdiction, circumstances and outcome. Attach additional pages as needed):"
            />
          </Form.Group>

          <InputTextarea
            autoResize
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={4}
            style={{
              border: "1px solid #0C5C75",
              marginLeft: "15px",
              borderRadius: "6px",
              fontSize: ".9rem",
              width: "100%",
              padding: "10px",
            }}
            // cols={130}
          />
          <p>ALSO – Check one of the following:</p>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
          ></Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I am not subject to registration as a sex offender in Arizona or in any other jurisdiction."
            />
            <Form.Check
              type="checkbox"
              label="I am subject to registration as a sex offender in Arizona or in any other jurisdiction. (If you are subject to registration as a sex offender in this state or any other jurisdiction, DPS will deny you a Level 1 Fingerprint Clearance Card and you WILL NOT be eligible to appeal the decision.)"
            />
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

          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Notary Public
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            State of Arizona,{" "}
            {isInputFocused ? (
              <input
                type="text"
                style={{
                  flex: "1",
                  border: "none",
                  borderBottom: "1px double-dotted black",
                  textDecoration: "underline",
                  marginLeft: "5px",
                  outline: "none",
                }}
                onBlur={toggleFocus}
              />
            ) : (
              <span
                style={{
                  flex: "1",
                  borderBottom: "1px double-dotted black",
                  textDecoration: "underline",
                  marginLeft: "5px",
                  cursor: "text",
                  userSelect: "none",
                }}
                onClick={toggleFocus}
              >
                {"\u00A0".repeat(55)}
              </span>
            )}
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            Subscribed and sworn or affirmed and acknowledged before me this{" "}
            {isInputFocused ? (
              <input
                type="text"
                style={{
                  flex: "1",
                  border: "none",
                  borderBottom: "1px double-dotted black",
                  textDecoration: "underline",
                  marginLeft: "5px",
                  outline: "none",
                }}
                onBlur={toggleFocus}
              />
            ) : (
              <span
                style={{
                  flex: "1",
                  borderBottom: "1px double-dotted black",
                  textDecoration: "underline",
                  marginLeft: "5px",
                  cursor: "text",
                  userSelect: "none",
                }}
                onClick={toggleFocus}
              >
                {"\u00A0".repeat(95)}
              </span>
            )}
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            day of,{" "}
            {isInputFocused ? (
              <input
                type="text"
                style={{
                  flex: "1",
                  border: "none",
                  borderBottom: "1px double-dotted black",
                  textDecoration: "underline",
                  marginLeft: "5px",
                  outline: "none",
                }}
                onBlur={toggleFocus}
              />
            ) : (
              <span
                style={{
                  flex: "1",
                  borderBottom: "1px double-dotted black",
                  textDecoration: "underline",
                  marginLeft: "5px",
                  cursor: "text",
                  userSelect: "none",
                }}
                onClick={toggleFocus}
              >
                {"\u00A0".repeat(200)}
              </span>
            )}
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            20{" "}
            {isInputFocused ? (
              <input
                type="text"
                style={{
                  flex: "1",
                  border: "none",
                  borderBottom: "1px double-dotted black",
                  textDecoration: "underline",
                  marginLeft: "5px",
                  outline: "none",
                }}
                onBlur={toggleFocus}
              />
            ) : (
              <span
                style={{
                  flex: "1",
                  borderBottom: "1px double-dotted black",
                  textDecoration: "underline",
                  marginLeft: "5px",
                  cursor: "text",
                  userSelect: "none",
                }}
                onClick={toggleFocus}
              >
                {"\u00A0".repeat(208)}
              </span>
            )}
          </p>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Commission Expiration date:
            </Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date"
              style={{
                appearance: "textfield",
                WebkitAppearance: "textfield",
                padding: "0.375rem 0.75rem",
                lineHeight: "1.5",
                borderRadius: "0.25rem",
                border: "1px solid #ced4da",
              }}
            />
          </Form.Group>
          <p>Notary Public’s Signature:</p>

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

          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Non-Appealable Offenses
          </p>
          <p style={{ fontWeight: "500" }}>
            Are you awaiting trial for or have you ever been convicted of
            committing, attempting to commit, soliciting or facilitating or
            conspiring to commit one or more of these crimes in this state or a
            similar crime in another jurisdiction? Mark “Yes” or “No” as
            applicable.
            <br /> If you are subject to registration as a sex offender in this
            state or any other jurisdiction, or awaiting trial on or been
            convicted of committing, attempting to commit, soliciting or
            facilitating, or conspiring to commit one or more of the crimes in
            this section DPS will deny you a Level 1 Fingerprint Clearance Card
            and you WILL NOT be eligible to appeal the decision.
            <br />
            <br />
            Expunged convictions from any court other than juvenile court must
            be identified.
          </p>

          {/* Question's */}
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              1. Sexual abuse of vulnerable adult
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              2. Incest
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              3. Homicide, including first or second-degree murder, manslaughter
              and negligent homicide
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              4. Sexual assault
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              5. Sexual exploitation of a minor or vulnerable adult
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              6. Commercial sexual exploitation of a minor or vulnerable adult
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              7. Child prostitution as prescribed in A.R.S. § 13-3212
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              8. Child abuse
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              9. Felony child neglect
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              10. Sexual conduct with a minor
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              11. Molestation of a child or vulnerable adult
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              12. Dangerous crime against children as defined in A.R.S. § 13-705
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              13. Exploitation of minors involving drug offenses
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>

          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              14. Taking a child for the purposes of prostitution as defined in
              A.R.S. § 13-3206
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              15. Neglect or abuse of a vulnerable adult
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              16. Sex trafficking
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              17. Sexual abuse
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              18. Production, publication, sale, possession and presentation of
              obscene items as prescribed in A.R.S. § 13-3502
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              19. Furnishing harmful items to minors as prescribed in A.R.S. §
              13-3506
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              20. Furnishing harmful items to minors by internet activity as
              prescribed in A.R.S. § 13-3506.01
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              21. Obscene or indecent telephone communications to minors for
              commercial purposes as prescribed in A.R.S. § 13-3512
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              22. Luring a minor for sexual exploitation 23. Enticement of
              persons for purposes of prostitution
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              23. Enticement of persons for purposes of prostitution
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              24. Procurement by false pretenses of persons for purposes of prostitution
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              25. Procuring or placing persons in a house of prostitution
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              26. Receiving earnings of a prostitute
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              27. Causing one’s spouse to become a prostitute
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              28. Detention of persons in a house of prostitution for debt
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              29. Keeping or residing in a house of prostitution or employment
              in prostitution
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              30. Pandering
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              31. Trafficking of persons for forced labor or services as defined
              in A.R.S. § 13-1308
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              32. Transporting persons for the purpose of prostitution, polygamy
              and concubinage
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              33. Portraying adult as a minor as prescribed in A.R.S. § 13-3555
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              34. Admitting minors to public displays of sexual conduct as
              prescribed in A.R.S. § 13-3558
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              35. Any felony offense involving contributing to the delinquency
              of a minor
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              36. Unlawful sale or purchase of children
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              37. Child bigamy
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              38. Any felony offense involving domestic violence as defined in
              A.R.S. § 13-3601, except for a felony offense only involving
              criminal damage in an amount more than $250, but less than $1000
              if the offense was committed before June 29, 2009
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              39. Felony indecent exposure
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              40. Felony public sexual indecency
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              41. Felony driving under the influence, driving under the extreme
              influence or aggravated driving under the influence if committed
              within 5 years of the date you apply for a Level 1 Clearance Card
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              42. Terrorism
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              43. Any offense involving a violent crime as defined in A.R.S. §
              13-901.03
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <p style={{ fontSize: "1.2rem" }}>
            Appealable 5 Years After Conviction
          </p>
          <p style={{ fontWeight: "500" }}>
            The following felony offenses are non-appealable if committed within
            5 years of the date you apply for a Level 1 Fingerprint Clearance
            Card. If you have been convicted of committing, attempting to
            commit, soliciting or facilitating or conspiring to commit one or
            more of the crimes in this section within 5 years of applying for a
            Level 1 Fingerprint Clearance Card, DPS will deny you a Level 1
            Fingerprint Clearance Card and you WILL NOT be eligible to appeal
            the denial. If the conviction was more than 5 years before you apply
            for a Level 1 Fingerprint Clearance Card, DPS will deny you a Level
            1 Fingerprint Clearance Card, but you will be eligible to appeal the
            denial to the Arizona Board of Fingerprinting.
          </p>
          <p>Mark “Within 5 Years,” “Over 5 Years” or “No” as applicable.</p>

          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              1. Endangerment
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              2. Threatening or intimidating
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              3. Assault
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              4. Aggravated assault
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              5. Unlawfully administrating intoxicating liquors, narcotic drugs
              or dangerous drugs
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              6. Dangerous or deadly assault by prisoner or juvenile
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              7. Prisoners who commit assault with intent to incite to riot or
              participate in riot
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              8. Assault by vicious animals
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              9. Drive by shooting
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
         

          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              10. Assaults on public safety employees or volunteers and state
              hospital employees
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              11. Discharging a firearm at a structure
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              12. Prisoner assault with bodily fluids
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              13. Aiming a laser pointer at a peace officer
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              14. Possession and sale of peyote
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              15. Possession and sale of a vapor-releasing substance containing
              a toxic substance
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              16. Sale of regulated chemicals
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              17. Sale of regulated chemicals
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              18. Sale of precursor chemicals
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              19. Production or transportation of marijuana
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              20. Possession, use or sale of marijuana, dangerous drugs or
              narcotic drugs
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              21. Possession, use, administration, acquisition, sale,
              manufacture or transportation of prescription-only drugs
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
         
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              22. Administration, acquisition, manufacture or transportation of
              dangerous drugs or narcotic drugs
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              23. Manufacturing methamphetamine under circumstances that cause
              physical injury to a minor under the age of 15
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>

          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              24. Involving or using minors in drug offenses
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>

          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              25. Possession, use, sale or transfer of marijuana, peyote,
              prescription drugs, dangerous drugs, or narcotic drugs or
              manufacture of dangerous drugs in a drugfree school zone
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              26. Possession, manufacture, delivery and advertisement of drug
              paraphernalia
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              27. Use of wire communication or electronic communication in
              drug-related transactions
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              28. Using a building for sale or manufacture of dangerous or
              narcotic drugs
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              29. Manufacture or distribution of prescription-only drug
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              30. Manufacture, distribution, possession or possession with
              intent to use imitation controlled substances, imitation
              prescription-only drugs or imitation over-thecounter drugs
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              31. Manufacture of certain substances and drugs by certain means
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  WITHIN 5 YEARS
                </Form.Check.Label>
              </Form.Check>

              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`within-5-years`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  OVER 5 YEARS
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          {/* aPPLICABLE offence */}
          <p
            style={{
              textAlign: "center",
              fontSize: "1.2rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            Appealable Offenses
          </p>
          <p style={{ fontWeight: "500" }}>
            Are you awaiting trial for or have you ever been convicted of
            committing, attempting to commit, soliciting or facilitating or
            conspiring to commit one or more of these crimes in this state or a
            similar crime in another jurisdiction? Mark “Yes” or “No” as
            applicable.
            <br />
            If you are awaiting trial on or been convicted of committing,
            attempting to commit, soliciting or facilitating or conspiring to
            commit one or more of these crimes, DPS will deny you a Level 1
            Fingerprint Clearance Card, but you will be eligible to appeal the
            decision to the Arizona Board of Fingerprinting.
          </p>

          {/* Question's */}
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              1. Theft
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              2. Theft by extortion
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              3. Shoplifting
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              4. Forgery
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              5. Criminal possession of a forgery device
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              6. Obtaining a signature by deception
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              7. Criminal impersonation
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              8. Theft of a credit card or obtaining a credit card by fraudulent
              means
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              9. Receipt of anything of value obtained by fraudulent use of a
              credit card
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              10. Forgery of a credit card
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              11. Fraudulent use of a credit card
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              12. Possession of any machinery, plate or other contrivance or
              incomplete credit card
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              13. False statements as to financial condition or identity to
              obtain a credit card
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              14. Fraud by persons authorized to provide goods or services
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
         
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              15. Credit card transaction record theft
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              16. Misconduct involving weapons
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              17. Misconduct involving explosives
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              18. Depositing explosives
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              19. Misconduct involving simulated explosives
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              20. Concealed weapon violation
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              21. Misdemeanor indecent exposure
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              22. Misdemeanor public sexual indecency
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              23. Aggravated criminal damage
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              24. Adding poison or other harmful substance to food, drink or
              medicine
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              25. A criminal offense involving criminal trespass under Title 13,
              Chapter 15
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              26. A criminal offense involving criminal burglary under Title 13,
              Chapter 15
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              27. A criminal offense involving organized crime or fraud as
              prescribed in Title 13, Chapter 23, except terrorism
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              28. Misdemeanor offenses involving child neglect
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              29. Misdemeanor offenses involving contributing to the delinquency
              of a minor
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              30. Misdemeanor offenses involving domestic violence as defined in
              A.R.S. § 13-3601
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              31. Felony offenses involving domestic violence if the offense
              only involved criminal damage in the amount of $250 but less than
              $1000 and the offense was committed before June 29, 2009
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              32. Arson
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              33. Criminal damage
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              34. Misappropriation of charter school monies as prescribed in
              A.R.S. § 13-1818
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              35. Taking identity of another person or entity
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              36. Aggravated taking identity of another person or entity
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              37. Trafficking in the identity of another person or entity
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              38. Cruelty to animals
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              39. Prostitution as described in A.R.S. § 13-3214
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              40. Sale or adistribution of material harmful to minors through
              vending machines as prescribed in A.R.S. § 13-3513
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              41. Welfare fraud
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              43. Robbery, aggravated robbery or armed robbery
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              44. Misdemeanor endangerment
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              45. Misdemeanor threatening or intimidating
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              46. Misdemeanor assault
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              47. Misdemeanor aggravated assault
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              48. Misdemeanor unlawfully administering intoxicating liquor,
              narcotic drugs or dangerous drugs
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              49. Misdemeanor dangerous or deadly assault by prisoner or
              juvenile
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              50. Misdemeanor prisoners who commit assault with intent to incite
              riot or participate in riot
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              51. Misdemeanor assault by vicious animals
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              52. Misdemeanor drive-by shooting
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              53. Misdemeanor assaults on public safety employees or volunteers
              and state hospital employees
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              54. Misdemeanor discharging a firearm at a structure
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              55. Misdemeanor prisoner assault with bodily fluids
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              56. Misdemeanor aiming a laser pointer at a peace officer
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              57. Misdemeanor possession and sale of peyote
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              58. Misdemeanor possession and sale of a vapor-releasing substance
              containing a toxic substance
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              59. Misdemeanor selling or giving nitrous oxide to underage
              persons
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              60. Misdemeanor sale of regulated chemicals
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              61. Misdemeanor sale of precursor chemicals
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              62. Misdemeanor production or transportation of marijuana
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              63. Misdemeanor possession, use or sale of marijuana, dangerous
              drugs or narcotic drugs
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              64. Misdemeanor possession, use, administration, acquisition,
              sale, manufacture or transportation of prescription-only drugs
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              65. Misdemeanor administration, acquisition, manufacture or
              transportation of dangerous drugs or narcotic drugs
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              67. Misdemeanor involving or using minors in drug offenses
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              68. Misdemeanor possession, use, sale or transfer of marijuana,
              peyote, prescription drugs, dangerous drugs, or narcotic drugs or
              manufacture of dangerous drugs in a drug-free school zone
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              69. Misdemeanor possession, manufacture, delivery and
              advertisement of drug paraphernalia
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              70. Misdemeanor use of wire communication or electronic
              communication in drug-related transactions
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              71. Misdemeanor using a building for sale or manufacture of
              dangerous or narcotic drugs
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              72. Misdemeanor manufacture or distribution of prescription-only
              drug
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              73. Misdemeanor manufacture, distribution, or possession with
              intent to use imitation controlled substances, imitation
              prescription-only drugs or imitation over-the-counter drugs
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginRight: "10px",
              }}
            >
              74. Misdemeanor manufacture of certain substances and drugs by
              certain means
            </Form.Label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Form.Check
                style={{ borderRadius: "10px" }}
                type={"radio"}
                id={`check-api-yes`}
              >
                <Form.Check.Input
                  className="radio1"
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} className="radio1" id={`check-api-no`}>
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label>No</Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>

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
