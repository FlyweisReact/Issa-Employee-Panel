/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Inner/HOC";
import { DefaultInput } from "../../../Helper/Makers";
import { DateInMMDDYY, downloadReport } from "../../../Repository/Apis";
import { useParams } from "react-router-dom";
import { getData } from "../../../components/api/api";
import { useReactToPrint } from "react-to-print";

const ViewMilega = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const fetchHandler = () => {
    getData(setDetail, `employee/getMileageLogById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint2 = () => {
    downloadReport(handlePrint);
  };

  return (
    <>
    <div ref={componentRef}></div>
      <NavWrapper title={"Milega Log"} isArrow={true} />
      <Container className="full-width-container">
        <div className="grid-container">
          <div className="grid-item">
            <label>Date:</label>
            <DefaultInput
              isBots={false}
              value={DateInMMDDYY(detail?.data?.date)}
            />
          </div>
          <div className="grid-item">
            <label>Resident Initials</label>
            <DefaultInput
              isBots={false}
              value={detail?.data?.residentInitials}
            />
          </div>

          <div className="grid-item">
            <label>Beginning Mileage</label>
            <DefaultInput
              isBots={false}
              value={detail?.data?.beginningMileage}
            />
          </div>
          <div className="grid-item">
            <label>Ending Mileage</label>
            <DefaultInput isBots={false} value={detail?.data?.endingMileage} />
          </div>

          <div className="grid-item">
            <label>Total Mileage</label>
            <DefaultInput isBots={false} value={detail?.data?.totalMileage} />
          </div>
          <div className="grid-item long-input" />
          <div className="grid-item full-wid-input">
            <label>Destination</label>
            <DefaultInput isBots={false} value={detail?.data?.destination} />
          </div>
          <div className="grid-item full-wid-input">
            <label>Any Issues</label>
            <DefaultInput isBots={false} value={detail?.data?.anyIssues} />
          </div>

          <div className="grid-item full-wid-input d-block">
            <label>
              {detail?.data?.driverSignature && (
                <p>Digitally Sign by {detail?.data?.driverSignature}</p>
              )}
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
      </Container>
    </>
  );
};

export default HOC(ViewMilega);
