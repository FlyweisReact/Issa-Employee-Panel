/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import { DateFormatter, DefaultInput } from "../../../../../Helper/Makers";
import NavWrapper from "../../../../../Helper/NavWrapper";

const ViewCount = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    getData(setDetails, `employee/getMedicationOpioidCountById/${id}`);
  }, []);

  return (
    <>
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
             
            </div>
            <div className="grid-item">
              <label>DOB:</label>
              <DefaultInput
                value={DateFormatter(
                  dateOfBirth?.[0]?.dateOfBirth?.slice(0, 10)
                )}
                isBots={false}
              />
            </div>
            <div className="grid-item">
              <label>Month/Year:</label>
             
            </div>
            <div className="grid-item">
              <label>Location:</label>
            
            </div>
            <div className="grid-item long-input">
              <label>Medication Name:</label>
            
            </div>
            <div className="grid-item">
              <label>Dose:</label>
              
            </div>
            <div className="grid-item"></div>
            <div className="grid-item full-wid-input">
              <label>Prescription Instruction:</label>
             
            </div>
            <div className="grid-item long-input">
              <label>Prescribing provider:</label>
           
            </div>
            <div className="grid-item long-input">
              <label>Beginning med count:</label>
            
            </div>
            <div className="grid-item full-wid-input"></div>
            <div className="grid-item">
              <label>Date:</label>
           
            </div>
            <div className="grid-item">
              <label>Shift:</label>
            
            </div>

            <div className="grid-item">
              <label>Pain Lavel:</label>
             
            </div>
            <div className="grid-item">
              <label>Number of Tab given:</label>
           
            </div>
            <div className="grid-item">
              <label>Beginning Count:</label>
              <BorderlessInput
                setState={setBeginningCount}
                placeholder=""
                type="text"
                value={beginningCount}
              />
            </div>
            <div className="grid-item">
              <label>Ending Count:</label>
              <BorderlessInput
                setState={setEndingCount}
                placeholder=""
                type="text"
                value={endingCount}
              />
            </div>
          </div>

          <Form.Group>
            <Form.Label className="fw-bold" style={{ fontSize: "14px" }}>
              Current Staff on shift Signature
            </Form.Label>
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
                {currentStaffOnShiftSignature && (
                  <p>Digitally Sign by {currentStaffOnShiftSignature} </p>
                )}
              </div>
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label className="fw-bold" style={{ fontSize: "14px" }}>
              Relieving staff Name and Signature
            </Form.Label>
            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button
                  type="button"
                  className="signed"
                  onClick={() => setOpen1(true)}
                >
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
                {relievingStaffSignature && (
                  <p>Digitally Sign by {relievingStaffSignature} </p>
                )}
              </div>
            </div>
          </Form.Group>

          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Staff Name and Last Name:</label>
              <BorderlessInput
                setState={setName}
                placeholder=""
                type={"text"}
                value={name}
              />
            </div>
            <div className="grid-item long-input">
              <label>Staff Initials:</label>
              <BorderlessInput
                setState={setInitials}
                placeholder=""
                type={"text"}
                value={initials}
              />
            </div>
          </div>
          <button
            className="add_more mb-3"
            type="button"
            onClick={() => addTable()}
          >
            Add More{" "}
          </button>
          {multipleTable?.length > 0 && (
            <div className="overflow_table">
              <table className="mb-3 color-full">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Shift</th>
                    <th>Pain Lavel</th>
                    <th>Number of Tab given</th>
                    <th>Beginning Count</th>
                    <th>Ending Count</th>
                    <th>Current Staff on shift Signature</th>
                    <th>Relieving staff Name and Signature</th>
                    <th>Staff Name and Last Name</th>
                    <th>Staff Initials</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {multipleTable?.map((i, index) => (
                    <tr key={index}>
                      <td> {i.date?.slice(0, 10)} </td>
                      <td> {i.shift} </td>
                      <td> {i.painLevel} </td>
                      <td> {i.numberOfTabsGiven} </td>
                      <td> {i.beginningCount} </td>
                      <td> {i.endingCount} </td>
                      <td> {i.currentStaffOnShiftSignature} </td>
                      <td> {i.relievingStaffSignature} </td>
                      <td> {i.name} </td>
                      <td> {i.initials} </td>
                      <td>
                        {" "}
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => removeOne(index)}
                        />{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>
        </form>
      </Container>
      <Container className="full-width-container">
        <form className="employee1">
          <DefaultInput
            value={details?.data?.location}
            isBots={true}
            label="Location:"
          />

          <DefaultInput
            value={details?.data?.medicationName}
            isBots={true}
            label="Medication Name:"
          />

          <DefaultInput
            value={details?.data?.dose}
            isBots={true}
            label="Dose:"
          />

          <DefaultInput
            value={details?.data?.prescriptionInstruction}
            isBots={true}
            label="Prescription Instruction:"
          />

          <DefaultInput
            value={details?.data?.prescribingProvider}
            isBots={true}
            label="Prescribing provider:"
          />

          <DefaultInput
            value={DateFormatter(details?.data?.monthYear)}
            isBots={true}
            label="Month/Year:"
          />

          <DefaultInput
            value={details?.data?.beginningMedCount}
            isBots={true}
            label="Beginning med count:"
          />

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: "1rem" }}>
              Medication Count
            </Form.Label>
          </Form.Group>

          {details?.data?.data?.map((i, index) => (
            <div key={index}>
              <DefaultInput
                value={DateFormatter(i.date)}
                isBots={true}
                label={"Date:"}
              />
              <DefaultInput value={i.shift} isBots={true} label={"Shift:"} />
              <DefaultInput
                value={i.painLevel}
                isBots={true}
                label={"Pain Lavel:"}
              />
              <DefaultInput
                value={i.numberOfTabsGiven}
                isBots={true}
                label={"Number of Tab given:"}
              />
              <DefaultInput
                value={i.beginningCount}
                isBots={true}
                label={"Beginning Count:"}
              />
              <DefaultInput
                value={i.endingCount}
                isBots={true}
                label={"Ending Count:"}
              />
              <DefaultInput
                value={i.currentStaffOnShiftSignature}
                isBots={true}
                label={"Current Staff on shift Signature:"}
              />
              <DefaultInput
                value={i.relievingStaffSignature}
                isBots={true}
                label={"Relieving Staff on shift Signature:"}
              />
            </div>
          ))}
          {details?.staff?.map((i) => {
            <div>
              <DefaultInput
                value={i.name}
                isBots={true}
                label={"Staff Name and Last Name:"}
              />
              <DefaultInput
                value={i.initials}
                isBots={true}
                label={"Staff Initials"}
              />
            </div>;
          })}
        </form>
      </Container>
    </>
  );
};

export default ViewCount;
