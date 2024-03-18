/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { postApi } from "../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../Mod/Modal";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { BorderlessInput, DateFormatter } from "../../../Helper/Makers";

const CreateDischarge = () => {
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
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

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

  const ClientOptions = patients?.data?.map((i) => ({
    value: i?._id,
    label: i?.fullName,
  }));
  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setPatientGuardianSignature}
        value={patientGuardianSignature}
        text={"Digitally Sign by employee name"}
      />
      <SignatureModal
        show={open2}
        onHide={() => setOpen2(false)}
        setValue={staffSignature}
        value={patientGuardianSignature}
        text={"Digitally Sign by employee name"}
      />
      <SignatureModal
        show={open3}
        onHide={() => setOpen3(false)}
        setValue={setBhpSignature}
        value={bhpSignature}
        text={"Digitally Sign by employee name"}
      />

      <NavWrapper title={"Discharge Summary"} />

      <Container className="full-width-container">
        <div className="grid-container">
          <div className="grid-item long-input">
            <label>Client Name:</label>
            <BorderlessInput
              setState={setClientName}
              value={clientName}
              type="text"
            />
          </div>
          <div className="grid-item"></div>
          <div className="grid-item">
            <label>DOB:</label>
            <BorderlessInput
              setState={setDateOfBirth}
              value={DateFormatter(dateOfBirth)}
              type="date"
            />
          </div>

          <div className="grid-item">
            <label>Date of Admission:</label>
            <BorderlessInput
              setState={setDateOfAdmission}
              value={DateFormatter(dateOfAdmission)}
              type="date"
            />
          </div>
          <div className="grid-item third-wid-input" />
          <div className="grid-item">
            <label>Date of Discharge:</label>
            <BorderlessInput
              setState={setDateOfDischarge}
              value={DateFormatter(dateOfDischarge)}
              type="date"
            />
          </div>
          <div className="grid-item third-wid-input" />
          <div className="grid-item">
            <label>Presenting issue:</label>
          </div>
          <div className="grid-item third-wid-input" />
          <div className="grid-item long-input">
            <label>Treatment Provided:</label>
            <BorderlessInput
              setState={setTreatmentProvided}
              value={treatmentProvided}
              type="text"
            />
          </div>
          <div className="grid-item long-input" />
          <div className="grid-item long-input">
            <label>Progress:</label>
            <BorderlessInput
              setState={setProgress}
              value={progress}
              type="text"
            />
          </div>
          <div className="grid-item long-input" />
          <div className="grid-item long-input">
            <label>Medication Upon Discharge:</label>
            <BorderlessInput
              setState={setMedicationUponDischarge}
              value={medicationUponDischarge}
              type="text"
            />
          </div>
          <div className="grid-item long-input" />
          <div className="grid-item long-input">
            <label>Funds/Properties Upon Discharge:</label>
            <BorderlessInput
              setState={setFundsPropertiesUponDischarge}
              value={fundsPropertiesUponDischarge}
              type="text"
            />
          </div>
          <div className="grid-item long-input" />
          <div className="grid-item long-input">
            <label>Funds/Properties Upon Discharge:</label>
            <BorderlessInput
              setState={setFundsPropertiesUponDischarge}
              value={fundsPropertiesUponDischarge}
              type="text"
            />
          </div>


          
        </div>
      </Container>

      <div>
        <div className="top-div-personal">
          <Form
            onSubmit={submitHandler}
            className="form-personal offer-letter appendix1 w-100"
          >
            <Form.Group className="mb-3">
              <Form.Label>Presenting Issue:</Form.Label>
              <Form.Control
                onChange={(e) => setPresentingIssue(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Reason for Discharge:</Form.Label>
              <Form.Control
                onChange={(e) => setReasonForDischarge(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <p>Discharge Plan, Referral, and Aftercare Plan:</p>
            <Form.Group className="mb-3">
              <Form.Control
                onChange={(e) =>
                  setDischargePlanReferralAftercarePlan(e.target.value)
                }
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Patient/Guardian Signature:</Form.Label>
              <div className="cluod_save">
                <div className="main">
                  <button className="outlined_btn">SAVE AS DRAFT</button>
                  <button
                    type="button"
                    className="filled"
                    onClick={() => setOpen(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setPatientGuardianSignatureDate(e.target.value)
                }
                required
                type="date"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Staff’s Name and Title:</Form.Label>
              <Form.Control
                onChange={(e) => setStaffNameAndTitle(e.target.value)}
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group classNamae="mb-3">
              <Form.Label>Signature</Form.Label>
              <div className="cluod_save">
                <div className="main">
                  <button className="outlined_btn">SAVE AS DRAFT</button>
                  <button
                    type="button"
                    className="filled"
                    onClick={() => setOpen2(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                required
                type="date"
                onChange={(e) => setStaffSignatureDate(e.target.value)}
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>BHT’s Name and Credentials:</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter  text"
                onChange={(e) => setBhpNameAndCredentials(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Signature:{" "}
              </Form.Label>
              <div className="cluod_save">
                <div className="main">
                  <button className="outlined_btn">SAVE AS DRAFT</button>
                  <button
                    type="button"
                    className="filled"
                    onClick={() => setOpen3(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                onChange={(e) => setBhpSignatureDate(e.target.value)}
                required
                type="date"
                placeholder="Enter  text"
              />
            </Form.Group>

            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button className="print_btn" type="button">
                PRINT REPORT
              </button>
            </div>

            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default HOC(CreateDischarge);
