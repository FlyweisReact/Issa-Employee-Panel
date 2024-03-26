/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { DateInMMDDYY, downloadReport } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { DefaultInput } from "../../../Helper/Makers";
import { getData } from "../../../components/api/api";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const ViewDischarge = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    getData(setData, `employee/getDischargeSummaryById/${id}`);
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
        <NavWrapper title={"Discharge Summary"} />
        <Container className="full-width-container">
          <form className="text-start w-100">
            <div className="grid-container">
              <div className="grid-item long-input">
                <label>Client Name:</label>

                <DefaultInput value={data?.data?.clientName} isBots={false} />
              </div>
              <div className="grid-item" />
              <div className="grid-item">
                <label>DOB:</label>

                <DefaultInput
                  value={DateF(data?.data?.dateOfBirth)}
                  isBots={false}
                />
              </div>

              <div className="grid-item">
                <label>Date of Admission:</label>

                <DefaultInput
                  value={DateInMMDDYY(data?.data?.dateOfAdmission)}
                  isBots={false}
                />
              </div>
              <div className="grid-item third-wid-input" />
              <div className="grid-item">
                <label>Date of Discharge:</label>
                <DefaultInput
                  value={DateInMMDDYY(data?.data?.dateOfDischarge)}
                  isBots={false}
                />
              </div>
              <div className="grid-item third-wid-input" />
              <div className="grid-item">
                <label>Presenting issue:</label>

                <DefaultInput
                  value={data?.data?.presentingIssue}
                  isBots={false}
                />
              </div>
              <div className="grid-item third-wid-input" />
              <div className="grid-item long-input">
                <label>Treatment Provided:</label>

                <DefaultInput
                  value={data?.data?.treatmentProvided}
                  isBots={false}
                />
              </div>
              <div className="grid-item long-input" />
              <div className="grid-item long-input">
                <label>Progress:</label>

                <DefaultInput value={data?.data?.progress} isBots={false} />
              </div>
              <div className="grid-item long-input" />
              <div className="grid-item long-input">
                <label>Medication Upon Discharge:</label>

                <DefaultInput
                  value={data?.data?.medicationUponDischarge}
                  isBots={false}
                />
              </div>
              <div className="grid-item long-input" />
              <div className="grid-item long-input">
                <label>Funds/Properties Upon Discharge:</label>

                <DefaultInput
                  value={data?.data?.fundsPropertiesUponDischarge}
                  isBots={false}
                />
              </div>
              <div className="grid-item long-input" />
              <div className="grid-item long-input">
                <label>Reason for Discharge:</label>

                <DefaultInput
                  value={data?.data?.reasonForDischarge}
                  isBots={false}
                />
              </div>
              <div className="grid-item long-input" />
              <div className="grid-item long-input">
                <label>Discharge Plan, Referral, and Aftercare Plan:</label>

                <DefaultInput
                  value={data?.data?.dischargePlanReferralAftercarePlan}
                  isBots={false}
                />
              </div>

              <div className="grid-item full-wid-input d-block">
                <label>
                  Digitally Sign bye:{" "}
                  {data?.data?.patientGuardianSignature && (
                    <>
                      {data?.data?.patientGuardianSignature}{" "}
                      {data?.data?.patientGuardianSignatureDate &&
                        DateInMMDDYY(
                          data?.data?.patientGuardianSignatureDate
                        )}{" "}
                    </>
                  )}
                </label>
              </div>

              <div className="grid-item long-input">
                <label>Staff’s Name and Title:</label>

                <DefaultInput
                  value={data?.data?.staffNameAndTitle}
                  isBots={false}
                />
              </div>

              <div className="grid-item full-wid-input d-block">
                <label>
                  Digitally Sign by
                  {data?.data?.staffSignature && (
                    <>
                      {data?.data?.staffSignature}{" "}
                      {data?.data?.staffSignatureDate &&
                        DateInMMDDYY(data?.data?.staffSignatureDate)}
                    </>
                  )}
                </label>
              </div>

              <div className="grid-item long-input">
                <label>BHP’s Name and Credentials:</label>

                <DefaultInput
                  value={data?.data?.bhpNameAndCredentials}
                  isBots={false}
                />
              </div>

              <div className="grid-item full-wid-input d-block">
                <label>
                  Digitally Sign by
                  {data?.data?.bhpSignature && (
                    <>
                      {data?.data?.bhpSignature}{" "}
                      {data?.data?.bhpSignatureDate &&
                        DateInMMDDYY(data?.data?.bhpSignatureDate)}
                    </>
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
          </form>
        </Container>
      </div>
    </>
  );
};

export default HOC(ViewDischarge);
