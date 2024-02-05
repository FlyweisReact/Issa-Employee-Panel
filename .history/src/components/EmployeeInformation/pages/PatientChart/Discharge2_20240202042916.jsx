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

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const handleInputChange1 = (e) => {
    const selectedPatientId = e.target.value;
    const selectedPatientObject = patients?.data?.find(
      (patient) => patient._id === selectedPatientId
    );

    setFormData({
      ...formData,
      patientId: selectedPatientId,
      clientName: selectedPatientObject?.fullName || "",
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createDischargeSummary", formData);
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
              onChange={(e) => setPatientId(e.target.value)}
                required
                type="date"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date of Discharge</Form.Label>
              <Form.Control
                onChange={(e) => setPatientId(e.target.value)}
                required
                type="date"
              />
            </Form.Group>

            <p>Presenting issue:</p>
            <Form.Group className="mb-3">
              <Form.Label>Treatment Provided:</Form.Label>
              <Form.Control
                onChange={(e) => setPatientId(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Progress:</Form.Label>
              <Form.Control
 onChange={(e) => setPatientId(e.target.value)}
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
               onChange={(e) => setPatientId(e.target.value)} required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
               onChange={(e) => setPatientId(e.target.value)}  required
                type="date"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Staff’s Name and Title:</Form.Label>
              <Form.Control
                name="staffNameAndTitle"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group classNamae="mb-3">
              <Form.Label>Signature</Form.Label>
              <Form.Control
                name="staffSignature"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                required
                name="staffSignatureDate"
                type="date"
                onChange={handleInputChange}
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>BHT’s Name and Credentials:</Form.Label>
              <Form.Control
                name="bhpNameAndCredentials"
                type="text"
                required
                placeholder="Enter  text"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Signature:{" "}
              </Form.Label>
              <Form.Control
                required
                name="bhpSignature"
                type="text"
                onChange={handleInputChange}
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                name="bhpSignatureDate"
                onChange={handleInputChange}
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
