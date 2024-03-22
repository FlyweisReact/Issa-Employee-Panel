/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { DefaultInput } from "../../../Helper/Makers";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Inner/HOC";

const ViewRecociliation = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getData(setDetails, `employee/getMedicationReconciliationById/${id}`);
  }, [id]);

  return (
    <>
      <NavWrapper isArrow={true} title={"Medication Reconciliation"} />

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
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <label>Allergies and reactions:</label>
              <DefaultInput
                value={details?.data?.allergiesAndReactions}
                isBots={false}
              />
            </div>
            <div className="grid-item long-input"></div>
          </div>

          <table className="mb-3 color-full">
            <thead>
              <tr>
                <th>Name of Medication</th>
                <th>Dose</th>
                <th>Route</th>
                <th>Frequency</th>
                <th>Start Date</th>
                <th>Stop/Change Date</th>
                <th>Reason for Stop/Change</th>
              </tr>
            </thead>
            <tbody>
              {details?.data?.medications?.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.dose} </td>
                  <td> {i.route} </td>
                  <td> {i.frequency} </td>
                  <td> {i.startDate?.slice(0, 10)} </td>
                  <td> {i.stopChangeDate?.slice(0, 10)} </td>
                  <td> {i.reasonForStopChange} </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Provider Name:</label>
              <DefaultInput
                value={details?.data?.providerName}
                isBots={false}
              />
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <label>Date:</label>
              <DefaultInput
                value={details?.data?.date?.slice(0, 10)}
                isBots={false}
              />
            </div>
            <div className="grid-item">
              <label>
              {details?.data?.providerSignature && (
                  <p>Digitally Sign by {details?.data?.providerSignature} {providerSignatureDate && DateI} </p>
                )}

              </label>
          
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default HOC(ViewRecociliation);
