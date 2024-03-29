/** @format */

import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import NavWrapper from "../../Helper/NavWrapper";
import HOC from "../../Layout/Outer/HOC";
import { downloadReport, fetchApi } from "../../Repository/Apis";

const MentalStatus = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(setLoading, "Patient/getMentalStatusReport/", setLoading);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint2 = () => {
    downloadReport(handlePrint);
  };

  return (
    <>
      <NavWrapper
        title={"Mental Status Examination Reports (Before appointment)"}
      />
      <Container className="full-width-container mb-5">
        <div className="grid-container">
            <div className="grid-item">
            <label>Appearance</label>

            </div>
        </div>

        <NavWrapper
        title={"Mental Status Examination Reports (After appointment)"}
      />
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

export default HOC({ Wcomponenet: MentalStatus });
