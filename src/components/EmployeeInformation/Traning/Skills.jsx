import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Table } from "react-bootstrap";
const Skills = () => {
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
            SKILLS AND KNOWLEDGE TRAINING
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <p>
            I, <input type="text" placeholder="___________" /> ,attest I have
            received <input type="text" placeholder="___________" />
            hours of Skills and Knowledge training at COMPANY NAME completed to
            perform the job duties as consistent with my job description.
            <br />
            <br />
            <li>Protect resident rights;</li>
            <li>
              Provide treatment that promotes resident dignity, independence,
              individuality, strengths, privacy, and choice;
            </li>
            <li>
              Recognize obvious symptoms of a mental disorder, personality
              disorder, or substance abuse;
            </li>
            <li>
              Provide the behavioral health services that the agency is
              authorized to provide and that the staff member is qualified to
              provide;
            </li>
            <li>
              Meet the unique needs of the resident populations served by the
              agency or the staff member, adults age 18 and older, individuals
              who have substance abuse problems, individuals who are seriously
              mentally ill, or individuals who have co-occurring disorders;
            </li>
            <li>
              Protect and maintain the confidentiality of resident records and
              information;
            </li>
            <li>Recognize and respect cultural differences;</li>
            <li>
              Recognize, prevent, and respond to a situation in which a
              resident:
              <li>May be a danger to self or a danger to others,</li>
              <li>Behaves in an aggressive or destructive manner,</li>
              <li>May be experiencing a crisis situation, or,</li>
              <li>May be experiencing a medical emergency.</li>
            </li>
            <li>Read and implement a resident’s treatment;</li>
            <li>
              Assist a resident in accessing community services and resources;
            </li>
            <li>Record and document resident information;</li>
            <li>
              Demonstrate ethical behavior, such as by respecting staff member
              and resident boundaries and recognizing the inappropriateness of
              receiving gratuities from a resident;
            </li>
            <li>
              Identify types of medications commonly prescribed for mental
              disorders, personality disorders, and substance abuse and the
              common side effects and adverse reactions of the medications;
            </li>
            <li>
              Recognize and respond to a fire, disaster, hazard, and medical
              emergency; and
            </li>
            <li>
              Provide the activities or behavioral health services identified in
              the staff member’s job description or the agency’s policies and
              procedures.
            </li>
            <li>Being able to conduct group counseling.</li>
          </p>
          <p style={{ fontWeight: "500" }}>
            <span style={{ fontWeight: "bold" }}>
              The above listed skills and knowledge were verified by:
            </span>
            <li>
              Visual observation of the staff member interacting with another
              individual, such as through role playing exercises;
            </li>
            <li>
              Verbal interaction with the staff member, such as interviewing,
              discussion, or question and answer
            </li>
          </p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee Title</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Employee’s Signature:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
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

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date:
            </Form.Label>
            <Form.Control type="date" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Verified by Director/BHP/BHT title:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Verified by Director/BHP/BHT Signature:
            </Form.Label>
            {/* <Form.Control type="text" placeholder="Enter text" /> */}
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
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date:
            </Form.Label>
            <Form.Control type="date" placeholder="Enter  text" />
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
        </div>
      </div>
    </>
  );
};

export default Skills;
