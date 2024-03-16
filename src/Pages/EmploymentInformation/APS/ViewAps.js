/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import { DefaultInput } from "../../../Helper/Makers";
import { getData } from "../../../components/api/api";
import { DateInMMDDYY, downloadReport } from "../../../Repository/Apis";
import HOC from "../../../Layout/Outer/HOC";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const ViewAps = () => {
  const [data, setData] = useState({});
  const [offerLetter, setOfferLetter] = useState({});
  const { id } = useParams();

  const getProfile = () => {
    getData(setData, `employee/getApsConsentById/${id}`);
  };

  useEffect(() => {
    getProfile();
    getData(setOfferLetter, "employee/getMyOfferLetter");
  }, []);

  const companyName = offerLetter?.data?.companyName;

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
        <NavWrapper title="APS Search Consent Form" isArrow={true} />

        <Container className="full-width-container">
          <form className="w-100 text-start">
            <p className="fw-bold text-start">
              {companyName} conducts adult protective service search through the
              department of health services APS search registry. These searches
              are conducted randomly and also yearly thereafter.
            </p>
            <p className="fw-bold text-start">
              a. Administrator will conduct a search on the APS registry through
              he department of health services AZ Care Check using employee’s
              first name, last name and date of birth. Search results will fall
              into the following categories:
            </p>
            <div className="grid-container">
              <div className="grid-item long-input">
                <label>i. Record Found with (a) Classification</label>

                <DefaultInput
                  isBots={false}
                  value={data?.data?.classification}
                />
              </div>
              <div className="grid-item long-input">
                <label>(b) Date of the incident </label>

                <DefaultInput
                  isBots={false}
                  value={DateInMMDDYY(data?.data?.dateOfIncident)}
                />
              </div>
              <div className="grid-item long-input">
                <label>ii. No APS Registry Record Found </label>

                <DefaultInput
                  isBots={false}
                  value={data?.data?.noRecordFound}
                />
              </div>
            </div>
            <p className="fw-bold text-start">
              b. Employees or subcontractors shall be prohibited from providing
              services to {companyName} residents if the search of the APS
              Registry contains any substantiated report of abuse, neglect, or
              exploitation of vulnerable adults or children.
            </p>
            <p className="fw-bold text-start">
              By Signing this, Employee gives {companyName} consent to conduct a
              search on the AZ Department of Health APS search registry.
            </p>

            <div className="grid-container">
              <div className="grid-item long-input">
                <label>Employee Name </label>

                <DefaultInput isBots={false} value={data?.data?.employeeName} />
              </div>
              <div className="grid-item long-input" />
              <div className="grid-item full-wid-input d-block">
                <label>
                  Employee Signature {data?.data?.employeeSignature}
                </label>
              </div>
              <div className="grid-item long-input">
                <label>Company Name Administrator Name </label>

                <DefaultInput
                  isBots={false}
                  value={data?.data?.administratorName}
                />
              </div>
              <div className="grid-item long-input" />
              <div className="grid-item full-wid-input d-block">
                <label>
                  Digitally Sign by {data?.data?.administratorSignature}
                </label>
              </div>

              <div className="grid-item">
                <label>Date:</label>

                <DefaultInput
                  isBots={false}
                  value={DateInMMDDYY(data?.data?.date)}
                />
              </div>
            </div>
            <button
              className="print_btn hidePrint"
              type="button"
              onClick={handlePrint2}
            >
              PRINT REPORT
            </button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default HOC({ Wcomponenet: ViewAps, isNavbar: false });
