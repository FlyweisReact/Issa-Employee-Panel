/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../api/api";
import { postApi } from "../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";

const Discharge2 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [clientName, setClientName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfAdmission, setDateOfAdmission] = useState("");
  const [dateOfDischarge, setDateOfDischarge] = useState("");
  const [presentingIssue, setPresentingIssue] = useState("");
  const [treatmentProvided, setTreatmentProvided] = useState("");
  const [progress, setProgress] = useState("");
  const [medicationUponDischarge, setMedicationUponDischarge] = useState("");
  const [fundsPropertiesUponDischarge, setFundsPropertiesUponDischarge] =
    useState("");
  const [reasonForDischarge, setReasonForDischarge] = useState("");
  const [
    dischargePlanReferralAftercarePlan,
    setDischargePlanReferralAftercarePlan,
  ] = useState("");
  const [patientGuardianSignature, setPatientGuardianSignature] = useState("");
  const [patientGuardianSignatureDate, setPatientGuardianSignatureDate] =
    useState("");
  const [staffNameAndTitle, setStaffNameAndTitle] = useState("");
  const [staffSignature, setStaffSignature] = useState("");
  const [staffSignatureDate, setStaffSignatureDate] = useState("");
  const [bhpNameAndCredentials, setBhpNameAndCredentials] = useState("");
  const [bhpSignature, setBhpSignature] = useState("");
  const [bhpSignatureDate, setBhpSignatureDate] = useState("");
  const [patients, setPatients] = useState([]);

  const initialFormData = {
    patientId,
    clientName,
    dateOfBirth,
    dateOfAdmission,
    dateOfDischarge,
    presentingIssue,
    treatmentProvided,
    progress,
    medicationUponDischarge,
    fundsPropertiesUponDischarge,
    reasonForDischarge,
    dischargePlanReferralAftercarePlan,
    patientGuardianSignature,
    patientGuardianSignatureDate,
    staffNameAndTitle,
    staffSignature,
    staffSignatureDate,
    bhpNameAndCredentials,
    bhpSignature,
    bhpSignatureDate,
  };

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createDischargeSummary", initialFormData);
  };

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            Discharge Summary
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form
            onSubmit={submitHandler}
            className="form-personal offer-letter appendix1 w-100"
          >
            <Form.Group className="mb-3">
              <Form.Label>Resident Name</Form.Label>
              <Form.Select
                required
                onChange={(e) => setPatientId(e.target.value)}
              >
                <option value="">Select</option>
                {patients?.data?.map((patient) => (
                  <option key={patient._id} value={patient._id}>
                    {patient.fullName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>DOB</Form.Label>
              <Form.Control
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                type="date"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date of Admission</Form.Label>
              <Form.Control
                onChange={(e) => setDateOfAdmission(e.target.value)}
                required
                type="date"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date of Discharge</Form.Label>
              <Form.Control
                onChange={(e) => setDateOfDischarge(e.target.value)}
                required
                type="date"
              />
            </Form.Group>

            <p>Presenting issue:</p>
            <Form.Group className="mb-3">
              <Form.Label>Treatment Provided:</Form.Label>
              <Form.Control
                onChange={(e) => setTreatmentProvided(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Progress:</Form.Label>
              <Form.Control
                onChange={(e) => setProgress(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Medication Upon Discharge:</Form.Label>
              <Form.Control
                onChange={(e) => setPatientId(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Presenting Issue:</Form.Label>
              <Form.Control
                onChange={(e) => setPatientId(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Funds/Properties Upon Discharge:</Form.Label>
              <Form.Control
                onChange={(e) => setPatientId(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reason for Discharge:</Form.Label>
              <Form.Control
                onChange={(e) => setPatientId(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <p>Discharge Plan, Referral, and Aftercare Plan:</p>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={(e) => setPatientId(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Patient/Guardian Signature:</Form.Label>
              <Form.Control
                onChange={(e) => setPatientId(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                onChange={(e) => setPatientId(e.target.value)}
                required
                type="date"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Staff’s Name and Title:</Form.Label>
              <Form.Control
                onChange={(e) => setPatientId(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group classNamae="mb-3">
              <Form.Label>Signature</Form.Label>
              <Form.Control
                onChange={(e) => setPatientId(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                required
                type="date"
                onChange={(e) => setPatientId(e.target.value)}
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>BHT’s Name and Credentials:</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter  text"
                onChange={(e) => setPatientId(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Signature:{" "}
              </Form.Label>
              <Form.Control
                required
                onChange={(e) => setPatientId(e.target.value)}
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                onChange={(e) => setPatientId(e.target.value)}
                required
                type="date"
                placeholder="Enter  text"
              />
            </Form.Group>
            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "10px",
                }}
                type="button"
              >
                PRINT REPORT
              </button>
            </div>
            <div className="save-as-draft-btn123">
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "10px",
                  marginBottom: "1rem",
                }}
                type="submit"
              >
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Discharge2;
