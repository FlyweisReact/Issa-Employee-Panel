/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  DefaultInput,
} from "../../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../../../Mod/Modal";
import { editApi } from "../../../../../Repository/Apis";
import NavWrapper from "../../../../../Helper/NavWrapper";

const ViewInform = () => {
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
      setTitle(item?.staff?.[0]?.title);
      if (item?.tableDate?.length > 0) {
        setMultipleTable(item?.tableDate);
      }
    }
  }, [details]);

  console.log(details);

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
      },
    ],
    residentGuardianSignature,
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
      />
      <SignatureModal
        show={open1}
        onHide={() => setOpen1(false)}
        setValue={setResidentGuradianSignature}
        value={residentGuardianSignature}
      />

      <NavWrapper isArrow={true} title={"Informed Consent for Medications"} />

      <Container className="full-width-container">
        <form onSubmit={submitHandler} className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Name:</label>

              <DefaultInput value={details?.data?.patientId} isBots={false} />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <label>Admin Date:</label>
              <DefaultInput
                value={DateFormatter(details?.data?.admitDate)}
                isBots={false}
              />
            </div>
          </div>

      
          {details?.data?.tableDate?.length > 0 && (
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
          </div>

          <Form.Group>
            <Form.Label className="fw-bold">Signature of Staff</Form.Label>
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
              <div>{signature && <p>Digitally Sign by {signature} </p>}</div>
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label className="fw-bold">
              Resident/Guardian/Public Fiduciary Signature
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
                {residentGuardianSignature && (
                  <p>Digitally Sign by {residentGuardianSignature} </p>
                )}
              </div>
            </div>
          </Form.Group>

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

export default ViewInform;
