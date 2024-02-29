/** @format */

import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./OfferLetter.css";
import { getSingleUserData, showMsg } from "../../../../../Baseurl";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import NavWrapper from "../../../../../Helper/NavWrapper";
import { fetchApi } from "../../../../../Repository/Apis";
import { DefaultInput } from "../../../../../Helper/Makers";
import { DateFormatter } from "../../../../../Helper/Makers";

export const OfferLetter = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [letter, setLetter] = useState("");

  useEffect(() => {
    fetchApi(setLoading, "employee/getMyOfferLetter", setData);
  }, []);

  console.log(data?.data?.data);

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
    <>
      <NavWrapper title={"Employment Offer Letter"} isArrow={true} />
      <Container className="full-width-container">
        <form className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item long-input"></div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <label>Today's Date:</label>
              <DefaultInput
                value={DateFormatter(data?.data?.data?.offerDate)}
                isBots={false}
              />
            </div>
            <div className="grid-item">
              <label>Dear:</label>
              <DefaultInput
                value={data?.data?.data?.employeeName}
                isBots={false}
              />
            </div>
          </div>

          <p className="fw-bold">
            Congratulations! <span>{data?.data?.data?.companyName}</span> is
            pleased to offer you the position of Behavior Health Technician. We
            trust that this offer will be met with your approval. As per our
            discussion, this position is full time, and your starting pay is
            <span> ${data?.data?.data?.startingPay} </span> . Your first day of
            work will be on{" "}
            <span> {data?.data?.data?.startDate?.slice(0, 10)} </span> . This
            offer is conditional upon satisfactory completion of your reference
            checks and obtaining copies of all required documentation. The
            entire team at <span>{data?.data?.data?.companyName}</span> is
            looking forward to working with you. We are confident you will be
            able to make a significant contribution to the success of our
            organization.
          </p>
          <p className="fw-bold">We welcome you aboard!</p>
          <p className="fw-bold">Sincerely,</p>
          <p className="fw-bold">
            Administrators Name and Signature:{" "}
            {data?.data?.data?.administratorsName?.split()}{" "}
          </p>
        </form>
      </Container>

      <div
        ref={pageRef}
        style={{ fontSize: ".8rem" }}
        className="main-div-personal important"
      >
        <div className="top-div-personal">
          <Form className="form-personal offer-letter">
            <p style={{ display: "flex" }}>
              Today’s Date:{" "}
              <span
                style={{
                  textDecoration: " dotted underline",
                  paddingLeft: "1rem",
                }}
              >
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
              <span
                style={{
                  textDecoration: " dotted underline",
                  paddingLeft: "1rem",
                }}
              >
                {letter?.employeeName}
              </span>
              ,
            </p>
            <p>
              Congratulations!{" "}
              <span
                style={{
                  textDecoration: " dotted underline",
                  paddingLeft: ".5rem",
                  paddingRight: ".5rem",
                }}
              >
                {letter?.companyName}
              </span>{" "}
              is pleased to offer you the position of Behavior Health
              Technician. We trust that this offer will be met with your
              approval. As per our discussion, this position is full time, and
              your starting pay{" "}
              <span
                style={{
                  textDecoration: " dotted underline",
                  paddingLeft: ".5rem",
                }}
              >
                {letter?.startingPay}
              </span>
              . Your first day of work will be on{" "}
              <span
                style={{
                  textDecoration: " dotted underline",
                  paddingLeft: ".5rem",
                }}
              >
                {letter?.startDate
                  ?.split("T")[0]
                  .split("-")
                  .reverse()
                  .join("/")}
              </span>
              . This offer is conditional upon satisfactory completion of your
              reference checks and obtaining copies of all required
              documentation. The entire team at Company Name is looking forward
              to working with you. We are confident you will be able to make a
              significant contribution to the success of our organization.
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
              >
                PRINT REPORT
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
