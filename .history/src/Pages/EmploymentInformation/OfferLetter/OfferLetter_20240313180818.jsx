/** @format */

import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./OfferLetter.css";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  DateInMMDDYY,
  downloadReport,
  fetchApi,
} from "../../../Repository/Apis";
import { DefaultInput } from "../../../Helper/Makers";
import Loader from "../../../components/Loader/Loader";
import HOC from "../../../Layout/Outer/HOC";
import { useReactToPrint } from "react-to-print";

const OfferLetter = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [offerDate, setofferDate] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startingPay, setStartingPay] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [administratorName, setAdministratorName] = useState("");

  useEffect(() => {
    if (data) {
      const item = data?.data?.data;
      setofferDate(item?.offerDate);
      setEmployeeName(item?.employeeName);
      setCompanyName(item?.companyName);
      setStartingPay(item?.startingPay);
      setJoinDate(item?.startDate?.slice(0, 10));
      setAdministratorName(item?.administratorsName?.split(" "));
    }
  }, [data]);

  useEffect(() => {
    fetchApi(setLoading, "employee/getMyOfferLetter", setData);
  }, []);

  // Download Report
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint2 = () => {
    downloadReport(handlePrint);
  };

  return (
    <>
      <div ref={componentRef}>
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
                  <DefaultInput
                    value={DateInMMDDYY(offerDate)}
                    isBots={false}
                  />
                </div>
                <div className="grid-item">
                  <label>Dear:</label>
                  <DefaultInput value={employeeName} isBots={false} />
                </div>
              </div>

              <p className="fw-bold">
                Congratulations! <span>{companyName}</span> is pleased to offer
                you the position of Behavior Health Technician. We trust that
                this offer will be met with your approval. As per our
                discussion, this position is full time, and your starting pay is
                <span> ${startingPay} </span> . Your first day of work will be
                on <span> {joinDate} </span> . This offer is conditional upon
                satisfactory completion of your reference checks and obtaining
                copies of all required documentation. The entire team at{" "}
                <span>{companyName}</span> is looking forward to working with
                you. We are confident you will be able to make a significant
                contribution to the success of our organization.
              </p>
              <p className="fw-bold">We welcome you aboard!</p>
              <p className="fw-bold">Sincerely,</p>
              <p className="fw-bold">
                Administrators Name and Signature: {administratorName?.[0]}{" "}
              </p>
              <p className="fw-bold">
                Date: {DateInMMDDYY(administratorName?.[1])}{" "}
              </p>
              <button
                type="button"
                className="print_btn"
                onClick={() => handleDownload()}
              >
                PRINT REPORT
              </button>
            </form>
            {/* To Print  */}
            <div className="d-none">
              <Container className="full-width-container">
                <form className="w-100 text-start">
                  <p className="text-center fw-bold text-desc mt-5">
                    OASIS NOTE
                  </p>
                  <p className="text-center fw-bold text-desc">
                    Employment Offer Letter
                  </p>
                  <div className="grid-container mb-3">
                    <div className="grid-item long-input"></div>
                    <div className="grid-item long-input">
                      <label>Today's Date:</label>
                      <label className="Show">
                        {" "}
                        {DateInMMDDYY(offerDate)}{" "}
                      </label>
                    </div>
                    <div className="grid-item">
                      <label>Dear:</label>
                      <label className="Show"> {employeeName} </label>
                    </div>
                  </div>

                  <p className="fw-bold">
                    Congratulations! <span>{companyName}</span> is pleased to
                    offer you the position of Behavior Health Technician. We
                    trust that this offer will be met with your approval. As per
                    our discussion, this position is full time, and your
                    starting pay is
                    <span> ${startingPay} </span> . Your first day of work will
                    be on <span> {joinDate} </span> . This offer is conditional
                    upon satisfactory completion of your reference checks and
                    obtaining copies of all required documentation. The entire
                    team at <span>{companyName}</span> is looking forward to
                    working with you. We are confident you will be able to make
                    a significant contribution to the success of our
                    organization.
                  </p>
                  <p className="fw-bold">We welcome you aboard!</p>
                  <p className="fw-bold">Sincerely,</p>
                  <p className="fw-bold">
                    Administrators Name and Signature: {administratorName?.[0]}{" "}
                  </p>
                  <p className="fw-bold">
                    Date: {DateInMMDDYY(administratorName?.[1])}{" "}
                  </p>
                </form>
              </Container>
            </div>
          </Container>
        )}
      </div>
    </>
  );
};

export default HOC({ Wcomponenet: OfferLetter, isNavbar: false });
