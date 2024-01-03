import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
const Incident2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            INCIDENT REPORT
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <p style={{ fontWeight: "bold" }}>Part I – Description of Incident</p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date of Incident:
            </Form.Label>
            <Form.Control type="date" placeholder="Enter text" />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Time:
            </Form.Label>
            <Form.Control type="date" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Name of Employee/s Involved:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Name Resident/s Involved:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Name/Title of Person Observing/Reporting Incident:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              INCIDENTS:
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select</option>
              <option value="1">Altercation/Verbal</option>
              <option value="2">Altercation/Physical</option>
              <option value="3">Violent Threat/Self</option>
              <option value="3">Violent Threat/Others</option>
              <option value="3">Violent Action/Self</option>
              <option value="3">Violent Action/Others</option>
              <option value="3">Trespassing</option>
              <option value="3">Cut/Abrasion</option>
              <option value="3">Property Loss</option>
              <option value="3">Property Damage</option>
            </Form.Select>
            {/* <Form.Control type="text" placeholder="Enter text" /> */}
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              LEVEL OF SEVERITY:
            </Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select</option>
              <option value="1">Critical/Immediate Attention Required</option>
              <option value="2">Serious/Attention Required</option>
              <option value="3">No Medical Attention Required</option>
            </Form.Select>
            {/* <Form.Control type="text" placeholder="Enter text" /> */}
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Describe the event in detail: What happened before, during, and
              after the incident
            </Form.Label>
            <Form.Control as={"textarea"} rows={3} placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              MEDICATION ERRORS:
            </Form.Label>
            <div className="d-flex " style={{ flexWrap: "wrap", gap: "1rem" }}>
              <Form.Check type="checkbox" id={`Outings`} label="Missed Dose" />
              <Form.Check
                type="checkbox"
                id={`Outings`}
                label="Refused Medication"
              />
              <Form.Check type="checkbox" id={`Outings`} label="Wrong Client" />
              <Form.Check type="checkbox" id={`Outings`} label="Wrong Time" />
              <Form.Check type="checkbox" id={`Outings`} label="Wrong Med" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Action/s taken: (Check all that apply):
            </Form.Label>
            <div className="d-flex " style={{ flexWrap: "wrap", gap: "1rem" }}>
              <Form.Check
                type="checkbox"
                id={`Outings`}
                label="Sent to ER/Hospital"
              />
              <Form.Check
                type="checkbox"
                id={`Outings`}
                label="Refused Medication"
              />
              <Form.Check type="checkbox" id={`Outings`} label="First Aid" />
              <Form.Check
                type="checkbox"
                id={`Outings`}
                label="No Medical Care Required"
              />
              <Form.Check type="checkbox" id={`Outings`} label="Care Refused" />
              <Form.Check
                type="checkbox"
                id={`Outings`}
                label="Fire Department Called"
              />
              <Form.Check type="checkbox" id={`Outings`} label="Care Refused" />
            </div>
            <div className="d-flex " style={{ flexWrap: "wrap", gap: "1rem" }}>
              <Form.Check
                type="checkbox"
                id={`Outings`}
                label="Police Called"
              />
              <Form.Check
                type="checkbox"
                id={`Outings`}
                label="Referred to Administrator/Risk Management"
              />
              <Form.Check type="checkbox" id={`Outings`} label="First Aid" />
              <Form.Check
                type="checkbox"
                id={`Outings`}
                label="Maintenance Called/Work Order Completed"
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Other:
            </Form.Label>
            <Form.Control as={"textarea"} rows={3} placeholder="Enter text" />
          </Form.Group>
          <p>
            If Abuse/Neglect Involved, State Contacted:
            <Form.Check type="checkbox" id={`Outings`} label="Yes" />
            <Form.Check type="checkbox" id={`Outings`} label="No" />
          </p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              If No, Explain:
            </Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter text" />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Notifications:
            </Form.Label>
            <div className="d-flex ">
              <Form.Check type="checkbox" id={`Outings`} label="Yes" />
              <Form.Check type="checkbox" id={`Outings`} label="No" />
            </div>
          </Form.Group>
          <p style={{ fontWeight: "bold", fontSize: ".9rem" }}>
            Time of Notification:
          </p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Mode of communication:
            </Form.Label>
            <div className="d-flex ">
              <Form.Check type="checkbox" id={`Outings`} label="Email" />
              <Form.Check type="checkbox" id={`Outings`} label="Phone Call" />
              <Form.Check type="checkbox" id={`Outings`} label="In Person" />
              <Form.Check type="checkbox" id={`Outings`} label="Other" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Report Completed By:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <p style={{ fontWeight: "500" }}>
            INCIDENT REPORTS ARE TO BE COMPLETED AND FORWARDED WITHIN 24 HOURS
            OF INCIDENT TO ADMINISTRATOR
          </p>
          <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
            Part II – Investigation of Incident (To be completed by
            Administrator)
          </p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Investigation of Incident:
            </Form.Label>
            <Form.Control as={"textarea"} rows={3} placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Recommendations and Actions:
            </Form.Label>
            <Form.Control as={"textarea"} rows={3} placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Follow up:
            </Form.Label>
            <Form.Control as={"textarea"} rows={3} placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Completed By:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date:
            </Form.Label>
            <Form.Control type="date" placeholder="Enter text" />
          </Form.Group>
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
        </div>
      </div>
    </>
  );
};

export default Incident2;
