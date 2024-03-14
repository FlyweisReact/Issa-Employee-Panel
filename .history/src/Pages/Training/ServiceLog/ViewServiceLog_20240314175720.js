/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper.js";
import HOC from "../../../Layout/Inner/HOC.js";
import { DefaultInput } from "../../../Helper/Makers.js";
import { DateInMMDDYY, downloadReport } from "../../../Repository/Apis.js";
import { useParams } from "react-router-dom";
import { getData } from "../../../components/api/api.js";
import { useReactToPrint } from "react-to-print";

const ViewServiceLog = () => {
  const { id } = useParams();

  const [details, setDetails] = useState({});
  const fetchHandler = () => {
    getData(setDetails, `employee/getEmployeeInServiceLogById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, [id]);

  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint2 = () => {
    downloadReport(handlePrint);
  };
  return (
    <>
      <NavWrapper title={"EMPLOYEE IN-SERVICE LOG"} isArrow={true} />
      <Container className="full-width-container">
        <form className="text-start">
          <div className="grid-container">
            <div className="grid-item long-input">
              <label>Employee Name: </label>
              <DefaultInput
                value={details?.data?.employeeName}
                isBots={false}
              />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <label>Date of Training: </label>
              <DefaultInput
                value={DateInMMDDYY(details?.data?.dateOfTraining)}
                isBots={false}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Training Subject: </label>
              {details?.data?.trainingSubject?.map((i) => (
                <DefaultInput value={i} isBots={false} />
              ))}
            </div>
            <div className="grid-item">
              <label>Hours of Unit: </label>
              <DefaultInput
                value={details?.data?.hoursOrUnits}
                isBots={false}
              />
            </div>
            <div className="grid-item third-wid-input">
              <label>Administrator/ BHP/Registered Nures Signature: </label>
              <DefaultInput
                value={details?.data?.administratorSignature}
                isBots={false}
              />
            </div>
            <div className=" grid-input full-wid-input d-block">
              <label>
                Employee Signature:{" "}
                {details?.data?.employeeSignature && (
                  <p>Digitally Sign by {details?.data?.employeeSignature}</p>
                )}{" "}
              </label>
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
    </>
  );
};

export default HOC(ViewServiceLog);
