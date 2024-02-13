/** @format */

import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Auth, Baseurl, showMsg } from "../../../../../Baseurl";
import axios from "axios";
export const ReferenceCheck = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState("______________");
  const [recipientName, setRecipientName] = useState("______________");
  const [startingPay, setStartingPay] = useState("______________");
  const [startDate, setStartDate] = useState("______________");

  const [isChecked, setIsChecked] = useState("");
  const [date, setDate] = useState("");
  const [referenceName, setReferenceName] = useState("");
  const [referenceRecommendation, setReferenceRecommendation] = useState("");
  const [savedSigned, setSavedSigned] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${Baseurl}employee/createReferenceCheck`,
        {
          recipientName,
          referenceRecommendation,
          savedSigned,
          date,
        },
        Auth()
      );

      showMsg("Success", res?.data?.message, "success");
      navigate(-1);
    } catch (error) {}
  };

  const getAllData = async () => {
    try {
      const res = await axios.get(
        `${Baseurl}employee/getReferenceCheck`,
        Auth()
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form onSubmit={handleSubmit} className="main-div-personal important">
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div className="nav-div-personal">
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            REFERENCE CHECK & RECOMMENDATIONS
          </p>
        </div>
      </div>
      <div className="top-div-personal">
        <div
          id="form-appendix"
          className="form-personal offer-letter appendix1"
        >
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Reference :
            </Form.Label>
            <Form.Control
              required
              onChange={(e) => setReferenceName(e.target.value)}
              type="text"
              placeholder="Enter  text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date of Contact:
            </Form.Label>
            <Form.Control
              required
              onChange={(e) => setDate(e.target.value)}
              type="Date"
              placeholder="Enter  text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Recommendation:
            </Form.Label>
            <Form.Control
              required
              onChange={(e) => setReferenceRecommendation(e.target.value)}
              type="text"
              placeholder="Enter  text"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Signature:
            </Form.Label>
            <Form.Control
              required
              onChange={(e) => setReferenceRecommendation(e.target.value)}
              type="text"
              placeholder="Enter  text"
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
                SAVED AND SIGNED
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
        </div>
      </div>
    </Form>
  );
};
