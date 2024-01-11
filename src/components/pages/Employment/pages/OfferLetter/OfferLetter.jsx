import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./OfferLetter.css";
import { getSingleUserData } from "../../../../../Baseurl";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export const OfferLetter = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [pay, setPay] = useState("");
  const [letter, setLetter] = useState("");
  const [firstday, setFirstday] = useState("");
  const [administratorName, setAdministratorName] = useState("");
  const [administratorSign, setAdministratorSign] = useState("");

  const getOfferLetter = async () => {
    getSingleUserData("employee/getMyOfferLetter").then((res) => {
      setLetter(res.data?.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    getOfferLetter();
  }, []);
  const pageRef = useRef(null);

  const generatePdf = async (e) => {
    e.preventDefault();

    const content = pageRef.current;

    const pdfWidth = content.offsetWidth;
    const pdfHeight = content.offsetHeight;

    const canvas = await html2canvas(content);

    const pdf = new jsPDF("p", "mm", [pdfWidth, pdfHeight]);

    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save("report.pdf");

    console.log(pdf);
  };

  return (
    <div
      ref={pageRef}
      style={{ fontSize: ".8rem" }}
      className="main-div-personal important"
    >
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate('/employment/')} src="/back_button2.png" alt="da" />
        </div>
        <div className="nav-div-personal">
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>OFFER LETTER</p>
        </div>
      </div>
      <div className="top-div-personal">
        <Form className="form-personal offer-letter">
          <p style={{ display: "flex" }}>
            Today’s Date:{" "}
            <span style={{ textDecoration: " dotted underline" }}>
              {" "}
              {letter?.offerDate
                ?.split("T")[0]
                .split("-")
                .reverse()
                .join("/")}{" "}
            </span>
          </p>
          <p style={{ display: "flex" }}>
            Dear{" "}
            <span style={{ textDecoration: " dotted underline" }}>
              {letter?.employeeName}
            </span>
            ,
          </p>
          <p>
            Congratulations!{" "}
            <span style={{ textDecoration: " dotted underline" }}>
              {letter?.companyName}
            </span>{" "}
            is pleased to offer you the position of Behavior Health Technician.
            We trust that this offer will be met with your approval. As per our
            discussion, this position is full time, and your starting pay{" "}
            <span style={{ textDecoration: " dotted underline" }}>
              {letter?.startingPay}
            </span>
            . Your first day of work will be on{" "}
            <span style={{ textDecoration: " dotted underline" }}>
              {letter?.startDate?.split("T")[0].split("-").reverse().join("/")}
            </span>
            . This offer is conditional upon satisfactory completion of your
            reference checks and obtaining copies of all required documentation.
            The entire team at Company Name is looking forward to working with
            you. We are confident you will be able to make a significant
            contribution to the success of our organization.
          </p>
          <p></p>
          <p>We welcome you aboard!</p>
          <p>Sincerely,</p>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Administrator's Name :
            </Form.Label>
            <Form.Control
              type="text"
              value={letter?.administratorsName}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Administrator's Signature :
            </Form.Label>
            <Form.Control
              type="text"
              value={letter?.administratorsSignature}
              disabled
            />
          </Form.Group>
          {/* <div className="save-as-draft-btn-personal">
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
          </div> */}
          <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
            <button
              onClick={generatePdf}
              style={{
                padding: "10px 24px",
                backgroundColor: "#1A9FB2",
                color: "white",
                marginTop: "1rem",
                borderRadius: "10px",
              }}
              // type="submit"
            >
              PRINT REPORT
            </button>
          </div>
          {/* <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              SUBMIT
            </button>
          </div> */}
        </Form>
      </div>
    </div>
  );
};
