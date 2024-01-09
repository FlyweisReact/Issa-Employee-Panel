import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./OfferLetter.css";
export const OfferLetter = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [pay, setPay] = useState("");
  const [firstday, setFirstday] = useState("");
  const [administratorName, setAdministratorName] = useState("");
  const [administratorSign, setAdministratorSign] = useState("");
  return (
    <div style={{fontSize:".8rem"}} className="main-div-personal important">
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div className="nav-div-personal">
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>OFFER LETTER</p>
        </div>
      </div>
      <div className="top-div-personal">
        <Form className="form-personal offer-letter">
          <p style={{display:"flex"}}>
            Today’s Date: <span><input type="date" value={date} style={{border:"none"}} onChange={(e) => setDate(e.target.value)} placeholder="__________"></input> </span>
          </p>
          <p style={{display:"flex"}}>
            Dear <span><input type="text" value={name} style={{border:"none"}} onChange={(e) => setName(e.target.value)} placeholder="__________" /></span>,
          </p>
          <p >
            Congratulations! Company Name is pleased to offer you the position
            of Behavior Health Technician. We trust that this offer will be met
            with your approval. As per our discussion, this position is full
            time, and your starting pay<p > is <span > <input type="text" value={pay} style={{border:"none"}} onChange={(e) => setPay(e.target.value)} placeholder="__________" /></span></p>. Your
            first day of work will be on <span style={{display:"flex"}}>
              <input type="date" value={firstday} style={{border:"none",width:"150px"}} onChange={(e) => setFirstday(e.target.value)} placeholder="__________" />
            </span>. This offer is
            conditional upon satisfactory completion of your reference checks
            and obtaining copies of all required documentation. The entire team
            at Company Name is looking forward to working with you. We are
            confident you will be able to make a significant contribution to the
            success of our organization.
          </p>
          <p></p>
          <p>We welcome you aboard!</p>
          <p>Sincerely,</p>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Administrator's Name :
            </Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Administrator's Signature :
            </Form.Label>
            {/* <Form.Control type="text" placeholder="Enter First Name" /> */}
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
