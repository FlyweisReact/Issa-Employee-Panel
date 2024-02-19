/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  DateFormatter,
  DefaultInput,
  InputMaker,
  SelectMaker,
} from "../../../../../Helper/Makers";

const ViewCount = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    getData(setDetails, `employee/getMedicationOpioidCountById/${id}`);
  }, []);

  useEffect(() => {
    if (details) {
      const item = details?.data;
      setPatientId(item?.patientId);
      setLocation(item?.location);
      setMedicationName(item?.medicationName);
      setDose(item?.dose);
      setPrescriptionInstruction(item?.prescriptionInstruction);
      setPrescribingProvider(item?.prescribingProvider);
      setBeginningMedCount(item?.beginningMedCount);
      setMonthYear(item?.monthYear);
      setCountType(item?.countType);

      const table = item?.data;
      const staffData = item?.staff;

      // Function to merge array of objects into a single object
      function mergeArraysIntoObject(arr) {
        return arr.reduce((result, obj) => {
          return { ...result, ...obj };
        }, {});
      }

      // Merge all elements of table and staffData arrays into a single object
      const merged = {
        ...mergeArraysIntoObject(table || []),
        ...mergeArraysIntoObject(staffData || []),
      };

      setMultipleTable([merged]);
    }
  }, [details]);

  return (
    <div>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{
            width: "80%",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            <Form.Group
              style={{ border: "none", textAlign: "center" }}
              className="mb-3"
            >
              <Form.Select
                style={{ border: "none" }}
                className="fw-bold"
                value={countType}
                onChange={(e) => setCountType(e.target.value)}
              >
                <option value="Opioid">OPIOID COUNT CONTROL </option>
                <option value="medication">MEDICATION COUNT</option>
              </Form.Select>
            </Form.Group>
          </p>
        </div>
      </div>
      <div>
        <Container className="full-width-container">
          <form onSubmit={submitHandler} className="employee1">
            <SelectMaker
              setValue={setPatientId}
              value={patientId}
              options={patients?.data?.map((i) => ({
                label: i.fullName,
                value: i._id,
              }))}
              label={"Patient Name:"}
            />
            <DefaultInput
              value={DateFormatter(dateOfBirth?.[0]?.dateOfBirth?.slice(0, 10))}
              isBots={true}
              label="Date of Birth:"
            />
            <InputMaker
              label="Location:"
              setState={setLocation}
              placeholder=""
              type="text"
              value={location}
            />
            <InputMaker
              label="Medication Name:"
              setState={setMedicationName}
              placeholder=""
              type="text"
              value={medicationName}
            />
            <InputMaker
              label="Dose:"
              setState={setDose}
              placeholder=""
              type="text"
              value={dose}
            />
            <InputMaker
              label="Prescription Instruction:"
              setState={setPrescriptionInstruction}
              placeholder=""
              type="text"
              value={prescriptionInstruction}
            />
            <InputMaker
              label="Prescribing provider:"
              setState={setPrescribingProvider}
              placeholder=""
              type="text"
              value={prescribingProvider}
            />
            <InputMaker
              label="Month/Year:"
              setState={setMonthYear}
              placeholder=""
              type="date"
              value={DateFormatter(monthYear)}
            />
            <InputMaker
              label="Beginning med count:"
              setState={setBeginningMedCount}
              placeholder=""
              type="text"
              value={beginningMedCount}
            />

            <Form.Group
              style={{ display: "flex", justifyContent: "space-between" }}
              className="mb-3 "
            >
              <Form.Label style={{ fontWeight: "bold", fontSize: "1rem" }}>
                Medication Count
              </Form.Label>
              <div>
                <Button
                  style={{ backgroundColor: "#0C5C75" }}
                  variant="primary"
                  type="button"
                  onClick={() => addTable()}
                >
                  + Add
                </Button>
              </div>
            </Form.Group>
            <InputMaker
              label="Date:"
              setState={setDate}
              placeholder=""
              type="date"
              value={DateFormatter(date)}
            />
            <InputMaker
              label="Shift:"
              setState={setShift}
              placeholder=""
              type="text"
              value={shift}
            />
            <InputMaker
              label="Pain Lavel:"
              setState={setPainLevel}
              placeholder=""
              type="text"
              value={painLevel}
            />
            <InputMaker
              label="Number of Tab given:"
              setState={setNumberOfTabsGiven}
              placeholder=""
              type="text"
              value={numberOfTabsGiven}
            />
            <InputMaker
              label="Beginning Count:"
              setState={setBeginningCount}
              placeholder=""
              type="text"
              value={beginningCount}
            />
            <InputMaker
              label="Ending Count:"
              setState={setEndingCount}
              placeholder=""
              type="text"
              value={endingCount}
            />
            <Form.Group>
              <Form.Label className="fw-bold">
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
              <Form.Label className="fw-bold">
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

            <InputMaker
              label=":"
              setState={setName}
              placeholder=""
              type="text"
              value={}
            />
            
            <DefaultInput
              value={name}
              isBots={true}
              label={"Staff Name and Last Name:"}
            />
            <DefaultInput
              value={initials}
              isBots={true}
              label={"Staff Initials:"}
            />

            {multipleTable?.map((i, index) => (
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
              </div>
            ))}
          </form>
        </Container>
      </div>
    </div>
  );
};

export default ViewCount;
