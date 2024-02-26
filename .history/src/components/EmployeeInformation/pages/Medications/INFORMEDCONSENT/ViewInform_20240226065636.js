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



  console.log(details);

  const table = {
    medicationInstructions,
    medicationStartDate,
    fewDaysOnly,
    dischargeDate,
    residentGuardianInitial,
    staffInitial,
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
                  </tr>
                </thead>
                <tbody>
                  {details?.data?.tableDate?.map((i, index) => (
                    <tr key={index}>
                      <td> {i.medicationInstructions} </td>
                      <td> {i.medicationStartDate?.slice(0, 10)} </td>
                      <td> {i.fewDaysOnly} </td>
                      <td> {i.dischargeDate?.slice(0, 10)} </td>
                      <td> {i.residentGuardianInitial} </td>
                      <td> {i.staffInitial} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Staff Name, Title:</label>

              <DefaultInput
                value={details?.data?.staff?.[0]?.title}
                isBots={false}
              />
            </div>
            <div className="grid-item long-input">
              <label>Initials:</label>
              <DefaultInput
                value={details?.data?.staff?.[0]?.initial}
                isBots={false}
              />
            </div>
            <div className="grid-item long-input">
              <label>Signature:</label>
              <DefaultInput
                value={details?.data?.staff?.[0]?.signature}
                isBots={false}
              />
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default ViewInform;
