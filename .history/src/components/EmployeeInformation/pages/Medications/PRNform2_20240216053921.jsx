/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../api/api";
import { DefaultInput, InputMaker, SelectMaker } from "../../../../Helper/Makers";
import { SignatureModal } from "../../../../Mod/Modal";
import { postApi } from "../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";

const PRNform2 = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  // Form States
  const [patientId, setPatientId] = useState("");
  const [medicationAndStrength, setMedicationAndStrength] = useState("");
  const [instructions, setInstructions] = useState("");
  const [prescriberName, setPrescriberName] = useState("");
  const [site, setSite] = useState("");
  // table Data
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tabsGiven, setTabsGiven] = useState("");
  const [reason, setReason] = useState("");
  const [residentInitials, setResidentInitials] = useState("");
  const [staffInitials, setStaffInitials] = useState("");
  const [timeReevaluated, setTimeReevaluated] = useState("");
  const [responseCode, setResponseCode] = useState("");
  const [staffReevaluatedInitials, setStaffReevaluatedInitials] = useState("");
  // staff signature
  const [staffNameAndSignature, setStaffNameAndSignature] = useState("");
  const [staffInitials1, setStaffInitials1] = useState("");
  const [open, setOpen] = useState(false);
  const [multipleTable, setMultipleTable] = useState([]);
  const [loading, setLoading] = useState(false);

  const payload = {
    patientId,
    medicationAndStrength,
    instructions,
    prescriberName,
    site,
    tableData: multipleTable?.map((i) => ({
      date: i.date,
      time: i.time,
      tabsGiven: i.tabsGiven,
      reason: i.reason,
      residentInitials: i.residentInitials,
      staffInitials: i.staffInitials,
      timeReevaluated: i.timeReevaluated,
      responseCode: i.responseCode,
      staffReevaluatedInitials: i.staffReevaluatedInitials,
    })),
    staff: multipleTable?.map((i) => ({
      staffNameAndSignature: i.staffNameAndSignature,
      staffInitials: i.staffInitials1,
    })),
  };

  const table = {
    date,
    time,
    tabsGiven,
    reason,
    residentInitials,
    staffInitials,
    timeReevaluated,
    responseCode,
    staffReevaluatedInitials,
  };

  const staffTabler = {
    staffNameAndSignature,
    staffInitials1,
  };

  const mergedData = {
    ...table,
    ...staffTabler,
  };

  const addTable = () => {
    setMultipleTable((prev) => [...prev, mergedData]);
  };

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const submitHandler = (e) => {
    postApi(setLoading, "employee/createPrnMedicationLog", payload);
  };

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setStaffNameAndSignature}
        value={staffNameAndSignature}
      />

      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            PRN MEDICATION LOG
          </p>
        </div>
      </div>

      <Container className="full-width-container">
        <form className="employee1">
          <SelectMaker
            setValue={setPatientId}
            options={patients?.data?.map((i) => ({
              label: i.fullName,
              value: i._id,
            }))}
            label={"Resident Name:"}
            value={patientId}
          />
          <InputMaker
            label={"Medication and Strength:"}
            setState={setMedicationAndStrength}
            placeholder={""}
            type={"text"}
            value={medicationAndStrength}
          />
          <InputMaker
            label={"Instruction:"}
            setState={setInstructions}
            placeholder={""}
            type={"text"}
            value={instructions}
          />
          <InputMaker
            label={"Prescriber Name:"}
            setState={setPrescriberName}
            placeholder={""}
            type={"text"}
            value={prescriberName}
          />
          <InputMaker
            label={"Site:"}
            setState={setSite}
            placeholder={""}
            type={"text"}
            value={site}
          />

          <Form.Group
            style={{ display: "flex", justifyContent: "space-between" }}
            className="mb-3 "
          >
            <Form.Label style={{ fontWeight: "bold", fontSize: "1rem" }}>
              {" "}
              PRN Medication Log
            </Form.Label>
            <div>
              <Button
                style={{ paddingRight: "1rem" }}
                variant="primary"
                type="button"
                onClick={() => addTable()}
              >
                + Add
              </Button>
            </div>
          </Form.Group>

          <InputMaker
            label={"Date:"}
            setState={setDate}
            placeholder={""}
            type={"date"}
            value={date}
          />
          <InputMaker
            label={"Time:"}
            setState={setTime}
            placeholder={""}
            type={"text"}
            value={time}
          />
          <InputMaker
            label={"Tabs Given:"}
            setState={setTabsGiven}
            placeholder={""}
            type={"text"}
            value={tabsGiven}
          />
          <InputMaker
            label={"Reason:"}
            setState={setReason}
            placeholder={""}
            type={"text"}
            value={reason}
          />
          <InputMaker
            label={"Resident Initials:"}
            setState={setResidentInitials}
            placeholder={""}
            type={"text"}
            value={residentInitials}
          />
          <InputMaker
            label={"Staff Initials:"}
            setState={setStaffInitials}
            placeholder={""}
            type={"text"}
            value={staffInitials}
          />
          <InputMaker
            label={"Time Re-evaluated:"}
            setState={setTimeReevaluated}
            placeholder={""}
            type={"text"}
            value={timeReevaluated}
          />
          <InputMaker
            label={"Response Code:"}
            setState={setResponseCode}
            placeholder={""}
            type={"text"}
            value={responseCode}
          />
          <InputMaker
            label={"Staff initials:"}
            setState={setStaffReevaluatedInitials}
            placeholder={""}
            type={"text"}
            value={staffReevaluatedInitials}
          />
          <p className="fw-bold ">
            Response Code: A=Relief | B=No relief | C=Sleeping | D=Out of
            Facility | E=Other ( Please specify)
          </p>

          <InputMaker
            label={"Inititals:"}
            setState={setStaffInitials1}
            placeholder={""}
            type={"text"}
            value={staffInitials1}
          />
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
              {staffNameAndSignature && (
                <p>Digitally Sign by {staffNameAndSignature} </p>
              )}
            </div>
          </div>

          {console.log(multipleTable)}
          {multipleTable?.map((i ,index) => (
            <div key={index} >
                <DefaultInput   />
            </div>
          ))}

          <div className="save-as-draft-btn123">
            <button onClick={submitHandler} className="btn1233" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default PRNform2;
