/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { DateInMMDDYY, downloadReport } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { DefaultInput } from "../../../Helper/Makers";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { fetchApi } from "../../../Repository/Apis";
import { useReactToPrint } from "react-to-print";

const ViewFinancialRecord = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(
      setLoading,
      `employee/getFinancialTransactionsRecordById/${id}`,
      setDetails
    );
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
      <div ref={componentRef}>
        <NavWrapper title={"FINANCIAL TRANSICTIONS RECORD"} isArrow={true} />
        {loading ? (
          <Loader />
        ) : (
          <Container className="full-width-container">
            <form className="text-start w-100">
              <div className="grid-container">
                <div className="grid-item">
                  <label>Resident Name:</label>
                  <DefaultInput
                    isBots={false}
                    value={details?.data?.data?.residentName}
                  />
                </div>
                <div className="grid-item" />
                <div className="grid-item">
                  <label>DOB:</label>
                  <DefaultInput
                    isBots={false}
                    value={DateInMMDDYY(details?.data?.data?.dateOfBirth)}
                  />
                </div>
                <div className="grid-item">
                  <label>Admit Date:</label>
                  <DefaultInput
                    isBots={false}
                    value={DateInMMDDYY(details?.data?.data?.admitDate)}
                  />
                </div>
                {details?.data?.data?.transactions?.map((i, index) => (
                  <>
                    <div className="grid-item">
                      <label>Date:</label>
                      <DefaultInput
                        isBots={false}
                        value={DateInMMDDYY(i?.date && DateInMMDDYY(i?.date))}
                      />
                    </div>
                    <div className="grid-item">
                      <label>Deposit:</label>
                      <DefaultInput isBots={false} value={i?.deposit} />
                    </div>
                    <div className="grid-item">
                      <label>Money Spent:</label>
                      <DefaultInput isBots={false} value={i?.moneySpent} />
                    </div>
                    <div className="grid-item">
                      <label>Balance:</label>
                      <DefaultInput isBots={false} value={i?.balance} />
                    </div>
                    <div className="grid-item full-wid-input">
                      <label>Description of items spent:</label>
                      <DefaultInput isBots={false} value={i?.description} />
                    </div>
                    <div className="grid-item full-wid-input">
                      <label>Resident Signature:</label>
                      <DefaultInput
                        isBots={false}
                        value={i?.residentSignature}
                      />
                      <DefaultInput
                        isBots={false}
                        value={
                          i?.residentSignDate &&
                          DateInMMDDYY(i.residentSignDate)
                        }
                      />
                      <DefaultInput
                        isBots={false}
                        value={i?.residentSignTime}
                      />
                    </div>
                  </>
                ))}
              </div>

              {details?.data?.data?.transactions?.length > 0 && (
                <div className="overflow_table mt-3">
                  <table className="mb-3 color-full">
                    <thead>
                      <tr>
                        <th>Staff Signature </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {details?.data?.data?.transactions?.map((i, index) => (
                        <tr key={index}>
                          <td>
                            {" "}
                            {i?.staffSignature}
                            {i?.StaffSignDate &&
                              DateInMMDDYY(i.StaffSignDate)}{" "}
                            {i?.StaffSignTime}
                          </td>
                          <td> </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              <button
                className="print_btn hidePrint"
                type="button"
                onClick={handlePrint2}
              >
                PRINT REPORT
              </button>
            </form>
          </Container>
        )}
      </div>
    </>
  );
};

export default HOC(ViewFinancialRecord);
