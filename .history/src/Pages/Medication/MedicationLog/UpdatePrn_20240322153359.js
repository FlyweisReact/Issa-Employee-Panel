/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
} from "../../../Helper/Makers";
import { SignatureModal } from "../../../Mod/Modal";
import { editApi } from "../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import NavWrapper from "../../../Helper/NavWrapper";

const UpdatePrn = () => {
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
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [ signedDate , setSignedDate ] = useState("")
  const [ signedTime , setSignedTime ] = useState("")

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
    getData(setDetails, `employee/getPrnMedicationLogById/${id}`);
  }, [id]);

  useEffect(() => {
    if (details) {
      setPatientId(details?.data?.patientId);
      setMedicationAndStrength(details?.data?.medicationAndStrength);
      setInstructions(details?.data?.instructions);
      setPrescriberName(details?.data?.prescriberName);
      setSite(details?.data?.site);

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

  const submitHandler = (e) => {
    e.preventDefault();
    editApi(setLoading, `employee/editPrnMedicationLogById/${id}`, payload);
  };

  const removeOne = (index) => {
    setMultipleTable((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setStaffNameAndSignature}
        value={staffNameAndSignature}
        setDate={setSignedDate}
        setTime={setSignedTime}
      />

      <NavWrapper isArrow={true} title={"PRN MEDICATION LOG"} />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
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
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item full-wid-input">
              <label>Medication and Strength:</label>
              <BorderlessInput
                setState={setMedicationAndStrength}
                placeholder=""
                type={"text"}
                value={medicationAndStrength}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Instruction:</label>
              <BorderlessInput
                setState={setInstructions}
                placeholder=""
                type={"text"}
                value={instructions}
              />
            </div>
            <div className="grid-item long-input">
              <label>Prescriber Name:</label>
              <BorderlessInput
                setState={setPrescriberName}
                placeholder=""
                type={"text"}
                value={prescriberName}
              />
            </div>
            <div className="grid-item long-input">
              <label>Site:</label>
              <BorderlessInput
                setState={setSite}
                placeholder=""
                type={"text"}
                value={site}
              />
            </div>
            <div className="grid-item full-wid-input" />
            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(date)}
              />
            </div>
            <div className="grid-item">
              <label>Time:</label>
              <BorderlessInput
                setState={setTime}
                placeholder=""
                type={"time"}
                value={time}
              />
            </div>
            <div className="grid-item">
              <label>Tabs given:</label>
              <BorderlessInput
                setState={setTabsGiven}
                placeholder=""
                type={"text"}
                value={tabsGiven}
              />
            </div>
            <div className="grid-item">
              <label>Reason:</label>
              <BorderlessInput
                setState={setReason}
                placeholder=""
                type={"text"}
                value={reason}
              />
            </div>
            <div className="grid-item">
              <label>Resident Initials:</label>
              <BorderlessInput
                setState={setResidentInitials}
                placeholder=""
                type={"text"}
                value={residentInitials}
              />
            </div>
            <div className="grid-item">
              <label>Staff Initials:</label>
              <BorderlessInput
                setState={setStaffInitials}
                placeholder=""
                type={"text"}
                value={staffInitials}
              />
            </div>
            <div className="grid-item">
              <label>Time Re-evaluated:</label>
              <BorderlessInput
                setState={setTimeReevaluated}
                placeholder=""
                type={"text"}
                value={timeReevaluated}
              />
            </div>
            <div className="grid-item">
              <label>Response Code:</label>
              <BorderlessInput
                setState={setResponseCode}
                placeholder=""
                type={"text"}
                value={responseCode}
              />
            </div>
            <div className="grid-item">
              <label>Staff initials:</label>
              <BorderlessInput
                setState={setStaffReevaluatedInitials}
                placeholder=""
                type={"text"}
                value={staffReevaluatedInitials}
              />
            </div>
            <div className="grid-item">
              <label>Inititals:</label>
              <BorderlessInput
                setState={setStaffInitials1}
                placeholder=""
                type={"text"}
                value={staffInitials1}
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
              {staffNameAndSignature && (
                <p>Digitally Sign by {staffNameAndSignature}  </p>
              )}
            </div>
          </div>

          <button
            className="add_more mb-3"
            onClick={() => addTable()}
            type="button"
          >
            Add More
          </button>

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
                    <th></th>
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

          <p className="fw-bold ">
            Response Code: A=Relief | B=No relief | C=Sleeping | D=Out of
            Facility | E=Other ( Please specify)
          </p>
          <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default UpdatePrn;
