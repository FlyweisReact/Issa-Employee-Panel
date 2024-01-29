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
