import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const JobDescription = () => {
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
          <p
            style={{
              fontSize: ".9rem",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ cursor: "pointer", textAlign: "center", flex: "1" }}>
              JOB DESCRIPTION
            </span>
            <span>
              <img
                style={{
                  width: "1.5rem",
                  cursor: "pointer",
                  marginRight: "1rem",
                  height: "1.5rem",
                }}
                src="/Dashboard/edit_icon.png"
                alt=""
              />
            </span>
          </p>
          <p> </p>
        </div>
      </div>
      <div className="top-div-personal">
        <Form className="form-personal offer-letter">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                lineHeight: "1rem",
              }}
            >
              <p>JOB DISCRIPTION - BEHAVIORAL HEALTH TECHNICIAN</p>
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                lineHeight: ".5rem",
              }}
            >
              <p>POSITIONS SUPERVISED: Yes</p>
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                lineHeight: "0rem",
              }}
            >
              <p>PRIMARY FUNCTION OR RESPONSIBILITIES:.</p>
            </Form.Label>
            <div>
              <li style={{ fontSize: ".8rem" }}>
                Responsible for providing behavioral health services to
                residents, according to COMPANY NAME..
              </li>
              <li style={{ fontSize: ".8rem" }}>
                Responsible for providing behavioral health services to
                residents, according to COMPANY NAME..
              </li>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                lineHeight: "0rem",
              }}
            >
              <p>CORE COMPETENCIES:</p>
            </Form.Label>
            <div>
              <li style={{ fontSize: ".8rem" }}>
                Demonstrates knowledge of addictions and behavioral health
                disorders.
              </li>
              <li style={{ fontSize: ".8rem" }}>
                Capable of multi-tasking, and assist counselors or therapeutic
                team by giving clinical support services to Residents who are
                suffering from substance abuse or mental irregularities.
              </li>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                lineHeight: "0rem",
              }}
            >
              <p>MINIMUM QUALIFICATIONS:</p>
            </Form.Label>
            <div>
              <li style={{ fontSize: ".8rem" }}>
                Demonstrates knowledge of addictions and behavioral health
                disorders.
              </li>
              <li style={{ fontSize: ".8rem" }}>
                Capable of multi-tasking, and assist counselors or therapeutic
                team by giving clinical support services to Residents who are
                suffering from substance abuse or mental irregularities.
              </li>
            </div>
          </Form.Group>

          <p style={{ fontWeight: "500", fontSize: ".8rem" }}>
            Upon a successfully hiring process, my signature below indicates
            that I understand and agree to the duties of BEHAVIORAL HEALTH
            TECHNICIAN(BHT), and I have meet the stated qualifications,
            experience requirements, and can adequately perform duties
            prescribed or as stated in this job descriptions.
          </p>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Employee Name :
            </Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Employer Signature :
            </Form.Label>
          </Form.Group>
          <div className="save-as-draft-btn-personal">
            <div style={{ maxWidth: "100px" }}>
              <img
                style={{ height: "80%", width: "100%", border: "1px " }}
                src="/Dashboard/save.png"
                alt="images"
              />
            </div>
            <div
              className="save-as-draft-btn"
              style={{ flex: "1", marginLeft: "10px" }}
            >
              {" "}
              <button
                style={{
                  border: "1px solid #0C5C75",
                  color: "#0C5C75",
                  marginBottom: "5px",
                }}
              >
                SAVE AS DRAFT
              </button>
              <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                SAVED AND SAVED
              </button>
            </div>
          </div>

          <Form.Group className="mb-3 mt-2">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date :
            </Form.Label>
            <Form.Control type="date" placeholder="Enter Last Name" />
          </Form.Group>

          <p style={{ fontWeight: "bold", fontSize: ".8rem" }}>Please note:</p>
          <p style={{ fontSize: ".8rem", fontWeight: "500" }}>
            Upon a successfully hiring process, my signature below indicates
            that I understand and agree to the duties of BEHAVIORAL HEALTH
            TECHNICIAN(BHT), and I have meet the stated qualifications,
            experience requirements, and can adequately perform duties
            prescribed or as stated in this job descriptions.
          </p>
          <p>You want Change Description upload new description</p>
          <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
            <button
              style={{
                padding: "10px 24px",
                backgroundColor: "#1A9FB2",
                color: "white",
                marginTop: "1rem",
                borderRadius: "10px",
                marginRight: "2rem",
              }}
              type="submit"
            >
              UPLOAD
            </button>
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
