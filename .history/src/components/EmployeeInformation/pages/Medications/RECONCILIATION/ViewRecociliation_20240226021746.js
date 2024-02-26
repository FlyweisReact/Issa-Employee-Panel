/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import { DateFormatter, DefaultInput } from "../../../../../Helper/Makers";
import NavWrapper from "../../../../../Helper/NavWrapper";

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
        <form className="employee1">
          <DefaultInput
            value={details?.data?.residentName}
            isBots={true}
            label={"Resident Name:"}
          />
          <DefaultInput
            value={details?.data?.allergiesAndReactions}
            isBots={true}
            label="Allergies and reaction:"
          />

          {details?.data?.medications?.map((i, index) => (
            <div key={index} className="mb-3">
              <DefaultInput
                value={i.name}
                isBots={true}
                label={"Name of Medication:"}
              />
              <DefaultInput value={i.dose} isBots={true} label={"Dose:"} />
              <DefaultInput value={i.route} isBots={true} label={"Route:"} />
              <DefaultInput
                value={i.frequency}
                isBots={true}
                label={"Frequency:"}
              />
              <DefaultInput
                value={DateFormatter(i.startDate)}
                isBots={true}
                label={"Start Date:"}
              />
              <DefaultInput
                value={i.reasonForStopChange}
                isBots={true}
                label={"Stop/Change Date:"}
              />
              <DefaultInput
                value={DateFormatter(i.stopChangeDate)}
                isBots={true}
                label="Reason for Stop/Change:"
              />
            </div>
          ))}
          <DefaultInput
            value={details?.data?.providerName}
            isBots={true}
            label="Provider Name:"
          />
          <DefaultInput
            value={details?.data?.providerSignature}
            isBots={true}
            label="Signature:"
          />
          <DefaultInput
            value={DateFormatter(details?.data?.date)}
            isBots={true}
            label="Date:"
          />
        </form>
      </Container>

      <Container className="full-width-container">
        <form onSubmit={submitHandler} className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Resident Name:</label>
              <BorderlessSelect
                options={patients?.data?.map((i) => ({
                  value: i._id,
                  label: i.fullName,
                }))}
                setState={setPatientId}
                value={patientId}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <label>Allergies and reactions:</label>
              <BorderlessInput
                setState={setAllergiesAndReactions}
                placeholder=""
                type="text"
                value={allergiesAndReactions}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item">
              <label>Name of Medication:</label>
              <BorderlessInput
                setState={setName}
                placeholder=""
                type="text"
                value={name}
              />
            </div>
            <div className="grid-item">
              <label>Dose:</label>
              <BorderlessInput
                setState={setDose}
                placeholder=""
                type="text"
                value={dose}
              />
            </div>
            <div className="grid-item">
              <label>Route:</label>
              <BorderlessInput
                setState={setRoute}
                placeholder=""
                type="text"
                value={route}
              />
            </div>
            <div className="grid-item">
              <label>Frequency:</label>
              <BorderlessInput
                setState={setFrequency}
                placeholder=""
                type="text"
                value={frequency}
              />
            </div>
            <div className="grid-item">
              <label>Start Date:</label>
              <BorderlessInput
                setState={setStartDate}
                placeholder=""
                type="date"
                value={DateFormatter(startDate)}
              />
            </div>
            <div className="grid-item">
              <label>Stop/Change Date:</label>
              <BorderlessInput
                setState={setStopChangeDate}
                placeholder=""
                type="date"
                value={DateFormatter(stopChangeDate)}
              />
            </div>
            <div className="grid-item long-input">
              <label>Reason for Stop/Change:</label>
              <BorderlessInput
                setState={setReasonForStopChange}
                placeholder=""
                type="text"
                value={reasonForStopChange}
              />
            </div>
          </div>
          <Form.Group className="mb-3 ">
            <Button
              style={{ backgroundColor: "#0C5C75" }}
              variant="primary"
              type="button"
              onClick={() => addData()}
            >
              + Add
            </Button>
          </Form.Group>

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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {arr?.map((i, index) => (
                <tr key={index}>
                  <td> {i.name} </td>
                  <td> {i.dose} </td>
                  <td> {i.route} </td>
                  <td> {i.frequency} </td>
                  <td> {i.startDate} </td>
                  <td> {i.stopChangeDate} </td>
                  <td> {i.reasonForStopChange} </td>
                  <td>
                    <i
                      onClick={() => removeOne(index)}
                      className="fa-solid fa-trash"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Provider Name:</label>
              <BorderlessInput
                setState={setProviderName}
                placeholder=""
                type={"text"}
                value={providerName}
              />
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(date)}
              />
            </div>
          </div>

          <div className="custome-cloud-btn">
            <div className="btns">
              <button className="draft"> SAVE AS DRAFT</button>
              <button
                type="button"
                className="signed"
                onClick={() => setOpen(true)}
              >
                SAVED AND SIGNED
              </button>
            </div>
            <div>
              {providerSignature && (
                <p>Digitally Sign by {providerSignature} </p>
              )}
            </div>
          </div>

          <div
            className="print_btn"
            style={{ maxWidth: "200px", textAlign: "center" }}
          >
            PRINT REPORT
          </div>

        </form>
      </Container>
    </>
  );
};

export default ViewRecociliation;
