/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import { DefaultInput } from "../../../Helper/Makers";
import { getData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import { useReactToPrint } from "react-to-print";
import { downloadReport } from "../../../Repository/Apis";
import { DateFormtter, signatureFormat } from "../../../utils/utils";

const ViewCount = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    getData(setDetails, `employee/getMedicationOpioidCountById/${id}`);
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
      <div ref={componentRef}>
        <NavWrapper
          isArrow={true}
          title={
            details?.data?.countType === "medication"
              ? "MEDICATION COUNT"
              : "OPIOID COUNT CONTROL"
          }
        />

        <Container className="full-width-container">
          <form className="w-100 text-start">
            <div className="grid-container mb-3">
              <div className="grid-item">
                <label>Patient Name:</label>
                <DefaultInput value={details?.data?.patientId} isBots={false} />
              </div>
              <div className="grid-item">
                <label>DOB:</label>
                <DefaultInput
                  value={details?.data?.dov?.slice(0, 10)}
                  isBots={false}
                />
              </div>
              <div className="grid-item">
                <label>Month/Year:</label>
                <DefaultInput
                  value={details?.data?.monthYear?.slice(0, 10)}
                  isBots={false}
                />
              </div>
              <div className="grid-item">
                <label>Location:</label>
                <DefaultInput value={details?.data?.location} isBots={false} />
              </div>
              <div className="grid-item long-input">
                <label>Medication Name:</label>
                <DefaultInput
                  value={details?.data?.medicationName}
                  isBots={false}
                />
              </div>
              <div className="grid-item">
                <label>Dose:</label>
                <DefaultInput value={details?.data?.dose} isBots={false} />
              </div>
              <div className="grid-item"></div>
              <div className="grid-item full-wid-input">
                <label>Prescription Instruction:</label>
                <DefaultInput
                  value={details?.data?.prescriptionInstruction}
                  isBots={false}
                />
              </div>
              <div className="grid-item long-input">
                <label>Prescribing provider:</label>
                <DefaultInput
                  value={details?.data?.prescribingProvider}
                  isBots={false}
                />
              </div>
              <div className="grid-item long-input">
                <label>Beginning med count:</label>
                <DefaultInput
                  value={details?.data?.beginningMedCount}
                  isBots={false}
                />
              </div>
            </div>

            <div className="overflow_table">
              <table className="mb-3 color-full small-text">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Shift</th>
                    <th>Beginning Count</th>
                    <th>Ending Count</th>
                    <th>Current Staff on shift Signature</th>
                    <th>Relieving staff Name and Signature</th>
                  </tr>
                </thead>
                <tbody>
                  {details?.data?.data?.map((i, index) => (
                    <tr key={index}>
                      <td> {i.date && DateFormtter(i.date)} </td>
                      <td> {i.shift} </td>
                      <td> {i.beginningCount} </td>
                      <td> {i.endingCount} </td>
                      <td>
                        {signatureFormat({
                          sign: i.currentStaffOnShiftSignature,
                          date: i.currentStaffOnShiftSignatureDate,
                          time: i.currentStaffOnShiftSignatureTime,
                          withText: false,
                        })}
                      </td>
                      <td>
                        {signatureFormat({
                          sign: i.relievingStaffSignature,
                          date: i.relievingStaffSignatureDate,
                          time: i.relievingStaffSignatureTime,
                          withText: false,
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow_table">
              <table className="mb-3 color-full small-text">
                <thead>
                  <tr>
                    <th>Staff Name and Last Name</th>
                    <th>Staff Initials</th>
                  </tr>
                </thead>
                <tbody>
                  {details?.data?.staff?.map((i, index) => (
                    <tr key={index}>
                      <td> {i.name} </td>
                      <td> {i.initials} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
          <button
            className="print_btn hidePrint"
            type="button"
            onClick={handlePrint2}
          >
            PRINT REPORT
          </button>
        </Container>
      </div>
    </>
  );
};

export default HOC(ViewCount);
