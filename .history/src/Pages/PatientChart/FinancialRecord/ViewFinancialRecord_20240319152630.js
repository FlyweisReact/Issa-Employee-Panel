/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  DefaultInput,
} from "../../../Helper/Makers";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";

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

  return (
    <>
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
                  value={details?.data?.residentName}
                />
              </div>
              <div className="grid-item" />
              <div className="grid-item">
                <label>DOB:</label>
                <DefaultInput
                  isBots={false}
                  value={DateInMMDDYY(details?.data?.dateOfBirth)}
                />
              </div>
              <div className="grid-item">
                <label>Admit Date:</label>

                <DefaultInput
                  isBots={false}
                  value={DateInMMDDYY(details?.data?.admitDate)}
                />
              </div>
            </div>

            {details?.data?.transactions?.length > 0 && (
              <div className="overflow_table mt-3">
                <table className="mb-3 color-full">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Deposit</th>
                      <th>Money Spent</th>
                      <th>Balance </th>
                      <th>Description of items spent </th>
                      <th>Resident Signature </th>
                      <th>Staff Signature </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {details?.data?.transactions?.map((i, index) => (
                      <tr key={index}>
                        <td> {i?.date && DateInMMDDYY(i?.date)} </td>
                        <td> {i?.deposit} </td>
                        <td> {i?.moneySpent} </td>
                        <td> {i?.balance} </td>
                        <td> {i?.description} </td>
                        <td>
                          {" "}
                          {i?.residentSignature}{" "}
                          {i?.residentSignDate &&
                            DateInMMDDYY(i.residentSignDate)}{" "}
                          {i?.residentSignTime}
                        </td>
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
    </>
  );
};

export default HOC(ViewFinancialRecord);
