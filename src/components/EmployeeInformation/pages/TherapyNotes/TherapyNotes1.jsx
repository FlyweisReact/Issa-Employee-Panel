import React from "react";
import { useNavigate } from "react-router-dom";
import "./TherapyNotes1.css";
import { Form } from "react-bootstrap";
const TherapyNotes1 = () => {
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
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>THERAPY NOTES</p>
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
            <p
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  border: "1px solid #1A9FB2",

                  padding: "1.2rem 1.5rem ",
                  borderRadius: ".5rem",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label
                    style={{ marginRight: "15px", color: "#1A9FB2" }}
                  >
                    Group Therapy
                  </Form.Check.Label>
                </Form.Check>
              </span>
              <span
                style={{
                  border: "1px solid #1A9FB2",

                  padding: "1.2rem 1.5rem ",
                  borderRadius: ".5rem",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label
                    style={{ marginRight: "15px", color: "#1A9FB2" }}
                  >
                    Individual Therapy
                  </Form.Check.Label>
                </Form.Check>
              </span>
              <span
                style={{
                  border: "1px solid #1A9FB2",

                  padding: "1.2rem 1.5rem ",
                  borderRadius: ".5rem",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label
                    style={{ marginRight: "15px", color: "#1A9FB2" }}
                  >
                    In Person
                  </Form.Check.Label>
                </Form.Check>
              </span>
              <span
                style={{
                  border: "1px solid #1A9FB2",

                  padding: "1.2rem 1.5rem ",
                  borderRadius: ".5rem",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label
                    style={{ marginRight: "15px", color: "#1A9FB2" }}
                  >
                    Telehealth
                  </Form.Check.Label>
                </Form.Check>
              </span>
            </p>

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
                Today's Date :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  dATE" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Start time:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  Preferred Contact Information"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                End time:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Total Duration:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Behavioral Health Technician:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Location:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <p style={{ textAlign: "center" }}>Session Summary</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Topic:
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              {/* <Form.Control type="text" placeholder="Enter  text" /> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Note Summary:
              </Form.Label>

              <Form.Control
                as={"textarea"}
                role="3"
                style={{ color: "#00000099" }}
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Recommendation:
              </Form.Label>

              <Form.Control
                as={"textarea"}
                role="3"
                style={{ color: "#00000099" }}
                placeholder="Enter  text"
              />
            </Form.Group>
            <p style={{ textAlign: "center" }}>Individual Participant Notes</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
               Name:
              </Form.Label>

              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Resident Completed Therapy Session:
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Yes
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>No</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Attitude:
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Cooperative
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Focused</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Suspicious</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Distracted</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Were there any treatment goals addressed:
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Yes
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>No</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Resident Participation:
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    100%
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>75%</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>50%</Form.Check.Label>
                </Form.Check>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    25%
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>None</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Resident Quality:
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Attentive
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Supportive</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Sharing</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Intrusive</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Resistant</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Any significant information not specified above:
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Yes
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>No</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Resident Appearance:
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Neat
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Unkept</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Inappropriate</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Bizarre </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Other</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Resident Mood:
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Normal
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Euthymic</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Anxious</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Depressed</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Euphoric</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Irritable</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Resident Progress:
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Deterioration
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>No Progress</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Small Progress </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Good Progress</Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Goal Achieved</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Please specify:</Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Resident Response:</Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Any significant information not specified above?
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    No
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>Yes</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Please specify:</Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Behavioral Health Technician Name & Signature:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
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
            <Form.Group className="mb-3 mt-5">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Behavioral Health Professional Name & Signature:{" "}
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
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

export default TherapyNotes1;
