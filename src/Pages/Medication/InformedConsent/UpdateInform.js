/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  DefaultInput,
} from "../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../Mod/Modal";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Inner/HOC";

const UpdateInform = () => {
  const [patients, setPatients] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [admitDate, setAdminDate] = useState("");
  const [open, setOpen] = useState(false);
  const [medicationInstructions, setMedicationInstructions] = useState("");
  const [medicationStartDate, setMedicationStartDate] = useState("");
  const [fewDaysOnly, setFewDaysOnly] = useState(0);
  const [dischargeDate, setDischargeDate] = useState("");
  const [residentGuardianInitial, setResidentGuardianInitial] = useState("");
  const [staffInitial, setStaffInitial] = useState("");
  const [initial, setInitital] = useState("");
  const [title, setTitle] = useState("");
  const [signature, setSignature] = useState("");
  const [residentGuardianSignature, setResidentGuradianSignature] =
    useState("");
  const [open1, setOpen1] = useState(false);
  const [loading, setLoading] = useState(false);
  const [multipleTable, setMultipleTable] = useState([]);
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [staffSignedDate, setStaffSignedDate] = useState("");
  const [staffSignedTime, setStaffSignedTime] = useState("");
  const [fiduciarySignedDate, setFiduciarySignedDate] = useState("");
  const [fiduciarySignedTime, setFiduciarySignedTime] = useState("");
  const [signatureSaveAsDraft, setSignatureSaveAsDraft] = useState(false);
  const [
    residentGuardianSignatureSaveAsDraft,
    setResidentGuardianSignatureSaveAsDraft,
  ] = useState(false);

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  useEffect(() => {
    if (id) {
      getData(setDetails, `employee/getInformedConsentForMedicationById/${id}`);
    }
  }, [id]);

  useEffect(() => {
    if (details) {
      const item = details?.data;
      setPatientId(item?.patientId);
      setAdminDate(item?.admitDate);
      setResidentGuradianSignature(item?.residentGuardianSignature);
      setInitital(item?.staff?.[0]?.initial);
      setSignature(item?.staff?.[0]?.signature);
      setStaffSignedDate(item?.staff?.[0]?.signatureDate);
      setStaffSignedTime(item?.staff?.[0]?.signatureTime);
      setSignatureSaveAsDraft(item?.staff?.[0]?.signatureSaveAsDraft);
      setFiduciarySignedDate(item?.residentGuardianSignatureDate);
      setFiduciarySignedTime(item?.fiduciarySignedTime);
      setResidentGuardianSignatureSaveAsDraft(
        item?.residentGuardianSignatureSaveAsDraft
      );
      setTitle(item?.staff?.[0]?.title);
      if (item?.tableDate?.length > 0) {
        setMultipleTable(item?.tableDate);
      }
    }
  }, [details]);

  const table = {
    medicationInstructions,
    medicationStartDate,
    fewDaysOnly,
    dischargeDate,
    residentGuardianInitial,
    staffInitial,
  };

  const payload = {
    patientId,
    admitDate,
    tableDate: multipleTable?.map((i) => ({
      medicationInstructions: i.medicationInstructions,
      medicationStartDate: i.medicationStartDate,
      fewDaysOnly: i.fewDaysOnly,
      dischargeDate: i.dischargeDate,
      residentGuardianInitial: i.residentGuardianInitial,
      staffInitial: i.staffInitial,
    })),
    staff: [
      {
        initial,
        title,
        signature,
        signatureDate: staffSignedDate,
        signatureTime: staffSignedTime,
        signatureSaveAsDraft,
      },
    ],
    residentGuardianSignature,
    residentGuardianSignatureDate: fiduciarySignedDate,
    residentGuardianSignatureTime: fiduciarySignedTime,
    residentGuardianSignatureSaveAsDraft,
  };

  const addTable = () => {
    setMultipleTable((prev) => [...prev, table]);
  };

  const removeOne = (index) => {
    setMultipleTable((prev) => prev.filter((_, i) => i !== index));
  };

  const getProfile = patients?.data?.filter((i) => i._id === patientId);

  const submitHandler = (e) => {
    e.preventDefault();
    editApi(
      setLoading,
      `employee/editInformedConsentForMedicationById/${id}`,
      payload
    );
  };

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSignature}
        value={signature}
        setDate={setStaffSignedDate}
        setTime={setStaffSignedTime}
      />
      <SignatureModal
        show={open1}
        onHide={() => setOpen1(false)}
        setValue={setResidentGuradianSignature}
        value={residentGuardianSignature}
        setDate={setFiduciarySignedDate}
        setTime={setFiduciarySignedTime}
      />

      <NavWrapper isArrow={true} title={"Informed Consent for Medications"} />

      <Container className="full-width-container">
        <form onSubmit={submitHandler} className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Name:</label>
              <BorderlessSelect
                options={patients?.data?.map((i) => ({
                  value: i._id,
                  label: i.fullName,
                }))}
                setState={setPatientId}
                value={patientId}
              />
            </div>
            <div className="grid-item">
              <label>DOB:</label>
              <DefaultInput
                value={DateFormatter(getProfile?.[0]?.dateOfBirth)}
                isBots={false}
                label={"Date of Birth:"}
              />
            </div>
            <div className="grid-item">
              <label>Admin Date:</label>
              <BorderlessInput
                setState={setAdminDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(admitDate)}
              />
            </div>
            <div className="grid-item full-wid-input"></div>
            <div className="grid-item long-input">
              <label>Medication/Instructions:</label>
              <BorderlessInput
                setState={setMedicationInstructions}
                placeholder=""
                type={"text"}
                value={medicationInstructions}
              />
            </div>
            <div className="grid-item">
              <label>Medication Start Date:</label>
              <BorderlessInput
                setState={setMedicationStartDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(medicationStartDate)}
              />
            </div>
            <div className="grid-item">
              <label>Few Days Only:</label>
              <BorderlessInput
                setState={setFewDaysOnly}
                placeholder=""
                type={"text"}
                value={fewDaysOnly}
              />
            </div>
            <div className="grid-item">
              <label>D/C Date:</label>
              <BorderlessInput
                setState={setDischargeDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(dischargeDate)}
              />
            </div>
            <div className="grid-item">
              <label>Resident/Guardian Initial:</label>
              <BorderlessInput
                setState={setResidentGuardianInitial}
                placeholder=""
                type={"text"}
                value={residentGuardianInitial}
              />
            </div>
            <div className="grid-item">
              <label>Staff Initial:</label>
              <BorderlessInput
                setState={setStaffInitial}
                placeholder=""
                type={"text"}
                value={staffInitial}
              />
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
                    <th>Medication/Instructions</th>
                    <th>Medication Start Date</th>
                    <th>Few Days Only</th>
                    <th>D/C Date</th>
                    <th>Resident/Guardian Initial</th>
                    <th>Staff Initial</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {multipleTable?.map((i, index) => (
                    <tr key={index}>
                      <td> {i.medicationInstructions} </td>
                      <td> {i.medicationStartDate?.slice(0, 10)} </td>
                      <td> {i.fewDaysOnly} </td>
                      <td> {i.dischargeDate?.slice(0, 10)} </td>
                      <td> {i.residentGuardianInitial} </td>
                      <td> {i.staffInitial} </td>
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

          <p className="fw-bold">
            I, the resident/Guardian, have received instruction in the use of
            the above listed medication(s) including the medication anticipated
            results, and potential side effect that maybe result from not taking
            the medication.
          </p>

          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Staff Name, Title:</label>
              <BorderlessInput
                setState={setTitle}
                placeholder=""
                type={"text"}
                value={title}
              />
            </div>
            <div className="grid-item long-input">
              <label>Initials:</label>
              <BorderlessInput
                setState={setInitital}
                placeholder=""
                type={"text"}
                value={initial}
              />
            </div>
            <div className="grid-item full-wid-input d-block">
              <label>Signature of Staff</label>
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button
                    className="draft"
                    onClick={() =>
                      setSignatureSaveAsDraft(!signatureSaveAsDraft)
                    }
                  >
                    {" "}
                    SAVE AS DRAFT
                  </button>
                  <button
                    type="button"
                    className="signed"
                    onClick={() => setOpen(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {signature && (
                    <p>
                      Digitally Sign by {signature}{" "}
                      {staffSignedDate && DateInMMDDYY(staffSignedDate)}{" "}
                      {staffSignedTime}{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="grid-item full-wid-input d-block">
              <label>Resident/Guardian/Public Fiduciary Signature</label>
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button
                    className="draft"
                    onClick={() =>
                      setResidentGuardianSignatureSaveAsDraft(
                        !residentGuardianSignatureSaveAsDraft
                      )
                    }
                  >
                    {" "}
                    SAVE AS DRAFT
                  </button>
                  <button
                    type="button"
                    className="signed"
                    onClick={() => setOpen1(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {residentGuardianSignature && (
                    <p>
                      Digitally Sign by {residentGuardianSignature}
                      {fiduciarySignedDate &&
                        DateInMMDDYY(fiduciarySignedDate)}{" "}
                      {fiduciarySignedTime}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

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

export default HOC(UpdateInform);
