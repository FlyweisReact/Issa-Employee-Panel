/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import { DateFormatter, DefaultInput } from "../../../Helper/Makers";
import { getData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import { useReactToPrint } from "react-to-print";
import { downloadReport } from "../../../Repository/Apis";

const ViewInform = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    if (id) {
      getData(setDetails, `employee/getInformedConsentForMedicationById/${id}`);
    }
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
      <div ref={componentRef}>
        <NavWrapper isArrow={true} title={"Informed Consent for Medications"} />

        <Container className="full-width-container">
          <form className="w-100 text-start">
            <div className="grid-container mb-3">
              <div className="grid-item long-input">
                <label>Name:</label>

                <DefaultInput value={details?.data?.patientId} isBots={false} />
              </div>
              <div className="grid-item"></div>
              <div className="grid-item">
                <label>Admin Date:</label>
                <DefaultInput
                  value={DateFormatter(details?.data?.admitDate)}
                  isBots={false}
                />
              </div>
            </div>

            {details?.data?.tableDate?.length > 0 && (
              <div className="overflow_table">
                <table className="mb-3 color-full">
                  <thead>
                    <tr>
                      <th>Medication/Instructions</th>
                      <th>Medication Start Date</th>
                      <th>Few Days Only</th>
                      <th>D/C Date</th>
                      <th>Resident/Guardian Initial</th>
                      <th>Staff Initial</th>
                    </tr>
                  </thead>
                  <tbody>
                    {details?.data?.tableDate?.map((i, index) => (
                      <tr key={index}>
                        <td> {i.medicationInstructions} </td>
                        <td> {i.medicationStartDate?.slice(0, 10)} </td>
                        <td> {i.fewDaysOnly} </td>
                        <td> {i.dischargeDate?.slice(0, 10)} </td>
                        <td> {i.residentGuardianInitial} </td>
                        <td> {i.staffInitial} </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="grid-container mb-3">
              <div className="grid-item long-input">
                <label>Staff Name, Title:</label>

                <DefaultInput
                  value={details?.data?.staff?.[0]?.title}
                  isBots={false}
                />
              </div>
              <div className="grid-item long-input">
                <label>Initials:</label>
                <DefaultInput
                  value={details?.data?.staff?.[0]?.initial}
                  isBots={false}
                />
              </div>
              <div className="grid-item long-input">
                <label>Signature: {details?.data?.staff?.[0]?.signature}</label>
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

export default HOC(ViewInform);
