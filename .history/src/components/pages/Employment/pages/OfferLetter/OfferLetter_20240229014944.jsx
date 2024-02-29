/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./OfferLetter.css";
import NavWrapper from "../../../../../Helper/NavWrapper";
import { fetchApi } from "../../../../../Repository/Apis";
import { DefaultInput } from "../../../../../Helper/Makers";
import { DateFormatter } from "../../../../../Helper/Makers";
import Loader from "../../../../Loader/Loader";

export const OfferLetter = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [offerDate, setofferDate] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  useEffect(() => {
    if (data) {
      const item = data?.data?.data;
      setofferDate(item?.offerDate);
      setEmployeeName(item?.employeeName);
    }
  }, [data]);

  useEffect(() => {
    fetchApi(setLoading, "employee/getMyOfferLetter", setData);
  }, []);

  return (
    <>
      <NavWrapper title={"Employment Offer Letter"} isArrow={true} />
      {loading ? (
        <Loader />
      ) : (
        <Container className="full-width-container">
          <form className="w-100 text-start">
            <div className="grid-container mb-3">
              <div className="grid-item long-input"></div>
              <div className="grid-item"></div>
              <div className="grid-item">
                <label>Today's Date:</label>
                <DefaultInput value={DateFormatter(offerDate)} isBots={false} />
              </div>
              <div className="grid-item">
                <label>Dear:</label>
                <DefaultInput value={employeeName} isBots={false} />
              </div>
            </div>

            <p className="fw-bold">
              Congratulations! <span>{data?.data?.data?.companyName}</span> is
              pleased to offer you the position of Behavior Health Technician.
              We trust that this offer will be met with your approval. As per
              our discussion, this position is full time, and your starting pay
              is
              <span> ${data?.data?.data?.startingPay} </span> . Your first day
              of work will be on{" "}
              <span> {data?.data?.data?.startDate?.slice(0, 10)} </span> . This
              offer is conditional upon satisfactory completion of your
              reference checks and obtaining copies of all required
              documentation. The entire team at{" "}
              <span>{data?.data?.data?.companyName}</span> is looking forward to
              working with you. We are confident you will be able to make a
              significant contribution to the success of our organization.
            </p>
            <p className="fw-bold">We welcome you aboard!</p>
            <p className="fw-bold">Sincerely,</p>
            <p className="fw-bold">
              Administrators Name and Signature:{" "}
              {data?.data?.data?.administratorsName?.split(" ")?.[0]}{" "}
            </p>
            <p className="fw-bold">
              Date: {data?.data?.data?.administratorsName?.split(" ")?.[1]}{" "}
            </p>
            <button type="button" className="print_btn">
              PRINT REPORT
            </button>
          </form>
        </Container>
      )}
    </>
  );
};
