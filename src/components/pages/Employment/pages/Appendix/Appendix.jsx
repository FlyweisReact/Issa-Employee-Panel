import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Appendix.css";
export const Appendix = () => {
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
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>APPENDIX 3</p>
        </div>
      </div>
      <div className="top-div-personal">
        <Form
          id="form-appendix"
          className="form-personal offer-letter appendix1"
        >
          <p>
            Appendix 3. Integrated Tuberculosis (TB) Screening and Risk
            Assessment Form for Newly Hired HCP
          </p>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Name :
            </Form.Label>
            <Form.Control type="text" placeholder="Enter  Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Today's Date :
            </Form.Label>
            <Form.Control type="date" placeholder="Enter  dATE" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Preferred Contact Information:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter  Preferred Contact Information"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              1. What position are you hired for?:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter  text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              What is your start date? :
            </Form.Label>
            <Form.Control type="text" placeholder="Enter  text" />
          </Form.Group>

          <p>
            2.Have you EVER spent more than 30 days in a country with an
            elevated TB rate? This includes all countries except those in
            Western Europe, Northern Europe, Canada, Australia, and New Zealand.
          </p>
          <div key={"radio"} className="mb-3">
            <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
              <Form.Check.Input name="radio" type={"radio"} isValid />
              <Form.Check.Label>
                {" "}
                <p>
                  YES I have been in a foreign country for >30 days (not
                  including those listed above)
                </p>
              </Form.Check.Label>
            </Form.Check>
          </div>
          <div key={"radio"} className="mb-3">
            <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
              <Form.Check.Input name="radio" type={"radio"} isValid />
              <Form.Check.Label>
                {" "}
                <p>
                  NO I have not been in any country for >30 days except the ones
                  listed above
                </p>
              </Form.Check.Label>
            </Form.Check>
          </div>
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
              3. Have you had close contact with anyone who had active TB since
              your last TB test?
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
                4. Do you currently have any of the following symptoms:
              </span>
            </Form.Label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginBottom: "0", fontWeight: "bold" }}>
                Unexplained fever for more than 3 weeks
              </p>
              <Form.Check
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-fever-yes`}
              >
                <Form.Check.Input name="fever" type={"radio"} isValid />
                <Form.Check.Label
                  style={{ marginBottom: "0", marginLeft: "5px" }}
                >
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-fever-no`}
              >
                <Form.Check.Input name="fever" type={"radio"} isValid />
                <Form.Check.Label style={{ marginBottom: "0" }}>
                  No
                </Form.Check.Label>
              </Form.Check>
            </div>
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
                Cough for more than 3 weeks with sputum production
              </span>
            </Form.Label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Form.Check
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-cough-yes`}
              >
                <Form.Check.Input name="cough" type={"radio"} isValid />
                <Form.Check.Label
                  style={{ marginBottom: "0", marginLeft: "5px" }}
                >
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-cough-no`}
              >
                <Form.Check.Input name="cough" type={"radio"} isValid />
                <Form.Check.Label style={{ marginBottom: "0" }}>
                  No
                </Form.Check.Label>
              </Form.Check>
            </div>
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
              <span style={{ marginRight: "10px" }}>Bloody sputum</span>
            </Form.Label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Form.Check
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-bloody-sputum-yes`}
              >
                <Form.Check.Input name="bloodySputum" type={"radio"} isValid />
                <Form.Check.Label
                  style={{ marginBottom: "0", marginLeft: "5px" }}
                >
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-bloody-sputum-no`}
              >
                <Form.Check.Input name="bloodySputum" type={"radio"} isValid />
                <Form.Check.Label style={{ marginBottom: "0" }}>
                  No
                </Form.Check.Label>
              </Form.Check>
            </div>
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
                Unintended weight loss &gt;10 pounds
              </span>
            </Form.Label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Form.Check
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-weight-loss-yes`}
              >
                <Form.Check.Input name="weightLoss" type={"radio"} isValid />
                <Form.Check.Label
                  style={{ marginBottom: "0", marginLeft: "5px" }}
                >
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-weight-loss-no`}
              >
                <Form.Check.Input name="weightLoss" type={"radio"} isValid />
                <Form.Check.Label style={{ marginBottom: "0" }}>
                  No
                </Form.Check.Label>
              </Form.Check>
            </div>
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
                Drenching night sweats
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
                Unexplained fatigue for more than 3 weeks
              </span>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-fatigue-yes`}>
                  <Form.Check.Input name="fatigue" type={"radio"} isValid />
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
                <Form.Check type={"radio"} id={`check-api-fatigue-no`}>
                  <Form.Check.Input name="fatigue" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    No
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
                5. Have you ever been diagnosed with active TB disease?
              </span>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-active-tb-yes`}>
                  <Form.Check.Input name="activeTB" type={"radio"} isValid />
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
                <Form.Check type={"radio"} id={`check-api-active-tb-no`}>
                  <Form.Check.Input name="activeTB" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    No
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Label>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              <p>
                6.Have you ever been diagnosed with latent TB infection or had a
                positive skin test or a positive blood test for TB?
              </p>
            </Form.Label>
            <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
              <Form.Check.Input name="radio1" type={"radio"} isValid />
              <Form.Check.Label>
                {" "}
                <p>YES one or more of these is true for me</p>
              </Form.Check.Label>
            </Form.Check>
            <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
              <Form.Check.Input name="radio1" type={"radio"} isValid />
              <Form.Check.Label>
                {" "}
                <p>NO none of these is true for me</p>
              </Form.Check.Label>
            </Form.Check>
            {/* <Form.Control type="text" placeholder="Enter  text" /> */}
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
              <span>
                7. Have you been treated with medication for TB or for a
                positive TB test (eg, taken “INH”)?
              </span>
            </Form.Label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Form.Check
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-radio-yes`}
              >
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label
                  style={{ marginBottom: "0", marginLeft: "5px" }}
                >
                  YES
                </Form.Check.Label>
              </Form.Check>
              <Form.Check
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-radio-no`}
              >
                <Form.Check.Input name="radio1" type={"radio"} isValid />
                <Form.Check.Label style={{ marginBottom: "0" }}>
                  NO
                </Form.Check.Label>
              </Form.Check>
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              If YES, what year, with which medication, for how long, and did
              you complete the treatment course?
            </Form.Label>
            <Form.Control type="text" placeholder="Enter  text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              <p>
                8. Do you have a weakened immune system for any reason including
                organ transplant, recent chemotherapy, poorly controlled
                diabetes, HIV infection, cancer, or treatment with steroids for
                more than 1 month, immune-suppressing medications such as a
                TNF-alpha antagonist or another immune-modulator? (If you are
                not sure, ask your Occupational Health provider)
              </p>
            </Form.Label>
            <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
              <Form.Check.Input name="radio1" type={"radio"} isValid />
              <Form.Check.Label>
                {" "}
                <p>YES, one or more of these is true for me </p>
              </Form.Check.Label>
            </Form.Check>
            <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
              <Form.Check.Input name="radio1" type={"radio"} isValid />
              <Form.Check.Label>
                {" "}
                <p>NO none of these is true for me</p>
              </Form.Check.Label>
            </Form.Check>
            {/* <Form.Control type="text" placeholder="Enter  text" /> */}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Occupation Health Reviewer Signature :
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
