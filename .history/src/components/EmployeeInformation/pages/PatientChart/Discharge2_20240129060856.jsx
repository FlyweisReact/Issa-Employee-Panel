/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../api/api";
import { postApi } from "../../../../Repository/Apis";

const Discharge2 = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const initialFormData = {
    patientId: "",
    clientName: "",
    dateOfBirth: "",
    dateOfAdmission: "",
    dateOfDischarge: "",
    presentingIssue: "",
    treatmentProvided: "",
    progress: "",
    medicationUponDischarge: "",
    fundsPropertiesUponDischarge: "",
    reasonForDischarge: "",
    dischargePlanReferralAftercarePlan: "",
    patientGuardianSignature: "",
    patientGuardianSignatureDate: "",
    staffNameAndTitle: "",
    staffSignature: "",
    staffSignatureDate: "",
    bhpNameAndCredentials: "",
    bhpSignature: "",
    bhpSignatureDate: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [patients, setPatients] = useState([]);

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
            onScroll={submitHandler}
            className="form-personal offer-letter appendix1 w-100"
          >
            <Form.Group className="mb-3">
              <Form.Label>Client Name</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="patientId"
                onChange={handleInputChange1}
              >
                <option value="">Select Patient</option>
                {patients?.data?.map((patient) => (
                  <option key={patient._id} value={patient._id}>
                    {patient.fullName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>DOB:</Form.Label>
              <Form.Control
                name="dateOfBirth"
                onChange={handleInputChange}
                required
                type="date"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Admission:</Form.Label>
              <Form.Control
                name="dateOfAdmission"
                onChange={handleInputChange}
                required
                type="date"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Discharge:</Form.Label>
              <Form.Control
                name="dateOfDischarge"
                onChange={handleInputChange}
                required
                type="date"
                placeholder="Enter  text"
              />
            </Form.Group>
            <p>Presenting issue:</p>
            <Form.Group className="mb-3">
              <Form.Label>Treatment Provided:</Form.Label>
              <Form.Control
                name="treatmentProvided"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Progress:</Form.Label>
              <Form.Control
                name="progress"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Medication Upon Discharge:</Form.Label>
              <Form.Control
                name="medicationUponDischarge"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Presenting Issue:</Form.Label>
              <Form.Control
                name="presentingIssue"
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
              <Form.Label>Discharge PlanReferral After care Plan:</Form.Label>
              <Form.Control name="dischargePlanReferralAftercarePlan" onChange={handleInputChange} required  type="text" placeholder="Enter  text" />
            </Form.Group> */}
            <Form.Group className="mb-3">
              <Form.Label>Funds/Properties Upon Discharge:</Form.Label>
              <Form.Control
                name="fundsPropertiesUponDischarge"
                onChange={handleInputChange}
                required
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Reason for Discharge:</Form.Label>
              <Form.Control
                name="reasonForDischarge"
                onChange={handleInputChange}
                required
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <p>Discharge Plan, Referral, and Aftercare Plan:</p>
            <Form.Control
              name="dischargePlanReferralAftercarePlan"
              onChange={handleInputChange}
              required
              required
              type="text"
              placeholder="Enter  text"
            />
            <Form.Group className="mb-3">
              <Form.Label>Patient/Guardian Signature:</Form.Label>
              <Form.Control
                name="patientGuardianSignature"
                onChange={handleInputChange}
                required
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            {/* <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
              <div>
                <img
                  style={{ height: "80%", width: "100%", border: "1px " }}
                  src="/Dashboard/save.png"
                  alt=""
                />
              </div>
              <div className="save-as-draft-btn">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  Save as Draft
                </button>
              </div>
            </div> */}
            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                name="patientGuardianSignatureDate"
                onChange={handleInputChange}
                required
                required
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
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <p>Signature</p>
            <Form.Control
              name="staffSignature"
              onChange={handleInputChange}
              required
              required
              type="text"
              placeholder="Enter  text"
            />
            {/* <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
              <div>
                <img
                  style={{ height: "80%", width: "100%", border: "1px " }}
                  src="/Dashboard/save.png"
                  alt=""
                />
              </div>
              <div className="save-as-draft-btn">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  Save as Draft
                </button>
              </div>
            </div> */}

            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                required
                name="staffSignatureDate"
                type="date"
                onChange={handleInputChange}
                required
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
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-5">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Signature:{" "}
              </Form.Label>
              <Form.Control
                required
                name="bhpSignature"
                type="text"
                onChange={handleInputChange}
                required
                placeholder="Enter  text"
              />
            </Form.Group>
            {/* <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
              <div>
                <img
                  style={{ height: "80%", width: "100%", border: "1px " }}
                  src="/Dashboard/save.png"
                  alt=""
                />
              </div>
              <div className="save-as-draft-btn">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  SAVE AS DRAFT
                </button>
                <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                  SAVED AND SIGNED
                </button>
              </div>
            </div> */}

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
                onClick={submitHandler}
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Discharge2;
