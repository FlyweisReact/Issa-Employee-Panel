import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
const ProgressNote2 = () => {
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
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>PROGRESS NOTE</p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form
            style={{ width: "100%" }}
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Resident’s Name: :
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              {/* <Form.Control type="text" placeholder="Enter  Name" /> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Admit Date :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  dATE" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date of Birth:
              </Form.Label>
              <Form.Control type="date" placeholder="Enter text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Shift :
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">7am-3pm</option>
                <option value="2">3pm-11pm</option>
                <option value="3">11pm-7am</option>
                <option value="3">8am-4pm</option>
                <option value="3">4pm-12am</option>
                <option value="3">12am-8am</option>
                <option value="3">7am-7pm</option>
                <option value="3">7pm-7am</option>
                <option value="3">8am-8pm</option>
                <option value="3">8pm-8am</option>
              </Form.Select>
            </Form.Group>

            <p style={{ fontWeight: "500" }}>
              I=Independent R=Refusal PA=Physical Assist LOA= Leave of absence
              H=Hospitalization I=Independent VP= Verbal Prompt NP= No Prompt M=
              Monitoring Y=Yes N=No HP=Home Pass NA=Not Applicable
            </p>
            <p>Community Living Support(Monitors and Prompts)</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Was Medication administration completed?
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Was Assistance in the self administration of medication
                completed?
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Were Health and Welfare Checks completed every 15 minutes to 1
                hour?
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Therapy:
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">Group Therapy</option>
                <option value="2">Individual Therapy</option>
                <option value="3">Refused</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Mood:
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">Isolation</option>
                <option value="2"> anxious</option>
                <option value="3">depressed</option>
                <option value="3">excited</option>
                <option value="3">responding to internal stimuli</option>
                <option value="3"> inappropriate sexual comment</option>
                <option value="3">
                  verbally aggressive, physically aggressive
                </option>
                <option value="3"> agitated</option>
                <option value="3">Suicidal ideation</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Appointment:
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">Emergency Room Visit</option>
                <option value="2">Inpatient </option>
                <option value="3">Urgent Care</option>
                <option value="3">None</option>
              </Form.Select>
            </Form.Group>
            <p style={{ fontSize: "1rem" }}>Emergency Appointment </p>
            <p>Community Outings</p>
            <Form.Group className="mb-3">
              <Form.Label> Religious Services</Form.Label>
              <Form.Check type="checkbox" id={`Outings`} label="Outings" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> ADLS Completed</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Transportation</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Resident Redirected on behaviors</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>AWOL/Elopement</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Note Summary</Form.Label>
              {/* <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">Yes</option>
                <option value="2">No</option>
              </Form.Select> */}
              <Form.Control
                as={"textarea"}
                rows={3}
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>BHT’s Name and Credentials:</Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3 mt-5">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Signature:{" "}
              </Form.Label>
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
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
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
    </>
  );
};

export default ProgressNote2;
