import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
const OnSite = () => {
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
            ON SITE AND FACILITY ORIENTATION VERIFICATION
          </p>
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
            <p>
              The following orientation trainings are conducted during the 1st
              week of hire and before providing services to residents.
            </p>
            <p>
              1. Chain of Command <br /> 2.Resident Rights
              <br /> 3.Immediately report suspected or alleged abuse, neglect or
              exploitation or a violation of a patient’s rights.
              <br /> 4.Program evacuation path /Safety Disaster Plan
              <br /> 5.Ethics/ professionalism
              <br /> 6.Patient activities / treatment schedule
              <br /> 7.Current Patient issues
              <br /> 8.Personnel – payroll, benefits, disciplinary process
              <br /> 9.Supervision
              <br /> 10.Training Plan <br />
              11. Policy and Procedure Manual <br /> 12. Use of office
              equipment. <br />
              13. Documentation in the medical record, and how information are
              protected <br />
              14. Confidentiality <br /> 15. Incident and Accident reporting{" "}
              <br /> 16. Job description <br /> 17. Program Rules <br /> 18.
              Procedures for responding to a fire, disaster, hazard, a medical
              emergency and a resident experiencing a crisis situation.
              <br /> 19. Infectious diseases and blood borne pathogen.
            </p>
            <p style={{ fontWeight: "500" }}>
              Document more than one training date and duration of training if
              training occurs more than in one time period.
            </p>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Training Date: :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Duration :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  dATE" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Training Date:
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  Preferred Contact Information"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Duration:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p>
              I,
              <input type="text" placeholder="________________" />
              attest I have received facility orientation training evident by
              the signatures below.
            </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employee signature / Date:
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Trainer signature /Credential/Title/Date:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <div
              className="save-as-draft-btn-personal"
              style={{ maxWidth: "350px", width: "auto" }}
            >
              <div>
                <img
                  style={{ height: "80%", width: "100%", border: "1px " }}
                  src="/Dashboard/save.png"
                  alt=""
                />
              </div>
              <div
                style={{ maxWidth: "370px", width: "auto" }}
                className="save-as-draft-btn"
              >
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

export default OnSite;
