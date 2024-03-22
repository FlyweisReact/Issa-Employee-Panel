/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import { DefaultInput } from "../../../Helper/Makers";
import { getData } from "../../../components/api/api";
import { useReactToPrint } from "react-to-print";
import { downloadReport } from "../../../Repository/Apis";

const ViewPrn = () => {
  const [multipleTable, setMultipleTable] = useState([]);
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    getData(setDetails, `employee/getPrnMedicationLogById/${id}`);
  }, [id]);

  useEffect(() => {
    if (details) {
      const table = details?.data?.tableData;
      const staffData = details?.data?.staff;
      function mergeArraysIntoObject(arr) {
        return arr.reduce((result, obj) => {
          return { ...result, ...obj };
        }, {});
      }
      const merged = {
        ...mergeArraysIntoObject(table || []),
        ...mergeArraysIntoObject(staffData || []),
      };

      setMultipleTable([merged]);
    }
  }, [details]);

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
        <NavWrapper isArrow={true} title={"PRN MEDICATION LOG"} />

        <Container className="full-width-container">
          <form className="w-100 text-start">
            <div className="grid-container mb-3">
              <div className="grid-item long-input">
                <label>Resident Name:</label>
                <DefaultInput
                  value={details?.data?.residentName}
                  isBots={false}
                />
              </div>
              <div className="grid-item"></div>
              <div className="grid-item"></div>
              <div className="grid-item full-wid-input">
                <label>Medication and Strength:</label>
                <DefaultInput
                  value={details?.data?.medicationAndStrength}
                  isBots={false}
                />
              </div>
              <div className="grid-item full-wid-input">
                <label>Instruction:</label>
                <DefaultInput
                  value={details?.data?.instructions}
                  isBots={false}
                />
              </div>
              <div className="grid-item long-input">
                <label>Prescriber Name:</label>
                <DefaultInput
                  value={details?.data?.prescriberName}
                  isBots={false}
                />
              </div>
              <div className="grid-item long-input">
                <label>Site:</label>
                <DefaultInput value={details?.data?.site} isBots={false} />
              </div>
            </div>

            {multipleTable?.length > 0 && (
              <div className="overflow_table">
                <table className="mb-3 color-full">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Tabs Given</th>
                      <th>Reason</th>
                      <th>Resident Initials</th>
                      <th>Staff Initials</th>
                      <th>Time Re-evaluated</th>
                      <th>Response Code</th>
                      <th>Staff initials</th>
                      <th>Inititals</th>
                      <th>Signature</th>
                    </tr>
                  </thead>
                  <tbody>
                    {multipleTable?.map((i, index) => (
                      <tr key={index}>
                        <td> {i.date?.slice(0, 10)} </td>
                        <td> {i.time} </td>
                        <td> {i.tabsGiven} </td>
                        <td> {i.reason} </td>
                        <td> {i.residentInitials} </td>
                        <td> {i.staffInitials} </td>
                        <td> {i.timeReevaluated} </td>
                        <td> {i.responseCode} </td>
                        <td> {i.staffReevaluatedInitials} </td>
                        <td> {i.staffInitials1} </td>
                        <td> {i.staffNameAndSignature} </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <p className="fw-bold ">
              Response Code: A=Relief | B=No relief | C=Sleeping | D=Out of
              Facility | E=Other ( Please specify)
            </p>

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

export default ViewPrn;
