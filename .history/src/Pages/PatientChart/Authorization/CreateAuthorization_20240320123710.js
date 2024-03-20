/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { BorderlessInput, MultiSelect } from "../../../Helper/Makers";
import { SignatureModal } from "../../../Mod/Modal";
import { postApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";

const CreateAuthorization = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [patientId, setPatientId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [authorizedPersonName, setAuthorizedPersonName] = useState("");
  const [authorizedPersonAgency, setAuthorizedPersonAgency] = useState("");
  const [authorizedPersonAddress, setAuthorizedPersonAddress] = useState("");
  const [authorizedPersonPhone, setAuthorizedPersonPhone] = useState("");
  const [authorizedPersonFax, setAuthorizedPersonFax] = useState("");
  const [authorizedPersonEmail, setAuthorizedPersonEmail] = useState("");
  const [dropDown, setDropDown] = useState([]);
  const [purposeOfDisclosure, setPurposeOfDisclosure] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [expirationFrom, setExpirationFrom] = useState("");
  const [expirationTo, setExpirationTo] = useState("");
  const [revocation, setRevocation] = useState("");
  const [specify, setSpecify] = useState("");
  const [signature, setSignature] = useState("");
  const [dateSigned, setDateSigned] = useState("");
  const [relationshipToPerson, setRelationshipToPerson] = useState("");
  const [witness, setWitness] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const payload = {
    patientId,
    residentName,
    dateOfBirth,
    authorizedPersonAddress,
    authorizedPersonAgency,
    authorizedPersonName,
    authorizedPersonPhone,
    authorizedPersonFax,
    authorizedPersonEmail,
    dropDown: dropDown?.map((i) => i.value),
    purposeOfDisclosure,
    companyName,
    expirationFrom,
    expirationTo,
    revocation,
    specify,
    signature,
    dateSigned,
    relationshipToPerson,
    witness,
  };

  const getAllPatents = () => {
    getData(setData, `employee/getPatient`);
  };
  useEffect(() => {
    getAllPatents();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    await postApi(
      setLoading,
      "employee/createAuthorizationForReleaseOfInformation",
      payload
    );

    navigate("/employee/patient-chart/authorization");
  };

  const selectHandler = (e) => {
    const obj = JSON.parse(e);
    setPatientId(obj?._id);
    setResidentName(obj?.fullName);
  };

  const dropdownOptions = [
    {
      label: "Mental Health",
      value: "Mental Health",
    },
    {
      label: "Substance abuse",
      value: "Substance abuse",
    },
    {
      label: "Medical information",
      value: "Medical information",
    },
    {
      label: "Pharmacy",
      value: "Pharmacy",
    },
    {
      label: "Current medication",
      value: "Current medication",
    },
    {
      label: "Psychotherapy notes",
      value: "Psychotherapy notes",
    },
    {
      label: "Progress notes",
      value: "Progress notes",
    },
    {
      label: "Immunization records",
      value: "Immunization records",
    },
  ];

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSignature}
        value={signature}
      />
      <NavWrapper
        title={"AUTHORIZATION FOR RELEASE OF INFORMATION"}
        isArrow={true}
      />

      <Container className="full-width-container">
        <form className="w-100 text-start">
          <div className="grid-container">
            <div className="grid-item long-input">
              <label>Resident’s Name:</label>
              <select
                className="borderlessSelect"
                onChange={(e) => selectHandler(e.target.value)}
                required
              >
                <option value="">Select</option>
                {data?.data?.map((patient) => (
                  <option key={patient._id} value={JSON.stringify(patient)}>
                    {patient.fullName}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <label>Date of Birth :</label>
              <BorderlessInput
                setState={setDateOfBirth}
                value={dateOfBirth}
                type="text"
              />
            </div>
          </div>
        </form>
      </Container>

      <div>
        <div className="top-div-personal">
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date Of Birth:
            </Form.Label>
            <Form.Control
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
              type="date"
              placeholder="Enter text"
            />
          </Form.Group>

          <div className="mixed_input mb-3">
            Authorize
            <span>
              <input
                type="text"
                required
                placeholder="Employee Name"
                onChange={(e) => setAuthorizedPersonName(e.target.value)}
              />
            </span>
            to release the information described below to: Person and Agency
            (recipient)
          </div>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Address :
            </Form.Label>
            <Form.Control
              onChange={(e) => setAuthorizedPersonAddress(e.target.value)}
              type="text"
              required
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Phone :
            </Form.Label>
            <Form.Control
              type="tel"
              required
              onChange={(e) => setAuthorizedPersonPhone(e.target.value)}
              placeholder="Enter number"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Fax:
            </Form.Label>
            <Form.Control
              onChange={(e) => setAuthorizedPersonFax(e.target.value)}
              type="text"
              required
              placeholder="Enter text"
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Email:
            </Form.Label>
            <Form.Control
              onChange={(e) => setAuthorizedPersonEmail(e.target.value)}
              type="email"
              required
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Agency Name:
            </Form.Label>
            <Form.Control
              onChange={(e) => setAuthorizedPersonAgency(e.target.value)}
              type="text"
              required
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Company Name:
            </Form.Label>
            <Form.Control
              onChange={(e) => setCompanyName(e.target.value)}
              type="text"
              required
              placeholder="Enter text"
            />
          </Form.Group>

          <p>
            Notice to Recipient: This information has been disclosed to you from
            records that Federal law protects. These records are not subject to
            re disclosure. Federal regulations (42 CFR Part 2) prohibit you from
            making further disclosure of Substance Abuse Information without
            this specific written consent of the person to whom it pertains, or
            as otherwise permitted by such regulations. A general authorization
            for the release of medical or other information is not sufficient
            for this purpose.
          </p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              I authorize to release the following Information below:
            </Form.Label>
            <MultiSelect
              setValue={setDropDown}
              value={dropDown}
              options={dropdownOptions}
            />
          </Form.Group>
          <p style={{ fontWeight: "bold" }}>Purpose of Disclosure:</p>
          <div className="mixed_input mb-3">
            I understand that at anytime, I may revoke this authorization by
            writing to Company Name .This revocation will be effective except to
            the extent that action based on this authorization has already been
            taken. This authorization for release of information will expire:{" "}
            <br />
            <span>
              <input
                type="text"
                onChange={(e) => setExpirationTo(e.target.value)}
                required
              />
            </span>
            One year from date{" "}
            <span>
              {" "}
              <input
                type="date"
                required
                onChange={(e) => setRevocation(e.target.value)}
              />
            </span>{" "}
            60 Days (Substance Abuse Services)
            <span>
              <input
                type="text"
                required
                onChange={(e) => setSpecify(e.target.value)}
              />{" "}
            </span>
            Other (specify) By signing below, I acknowledge that I have read and
            understand this document. I have given authorization to my provider
            to disclose my records. I understand that my information being
            disclosed to the receiving agency may no longer be protected under
            the terms of this agreement.
          </div>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Signature of Individual/Guardian:
            </Form.Label>
          </Form.Group>
          <div
            style={{ maxWidth: "370px", width: "auto" }}
            className="save-as-draft-btn-personal"
          >
            <div className="save-as-draft-btn w-100">
              <button style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}>
                SAVE AS DRAFT
              </button>
              <button
                type="button"
                onClick={() => setOpen(true)}
                style={{ backgroundColor: "#0C5C75", color: "white" }}
              >
                SAVED AND SIGNED
              </button>
            </div>
          </div>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date Signed:
            </Form.Label>
            <Form.Control
              onChange={(e) => setDateSigned(e.target.value)}
              type="date"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Relationship to Person:
            </Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setRelationshipToPerson(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Witness:
            </Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setWitness(e.target.value)}
            />
          </Form.Group>

          <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
            <button
              style={{
                padding: "10px 24px",
                backgroundColor: "#1A9FB2",
                color: "white",
                marginTop: "1rem",
              }}
              type="submit"
            >
              PRINT REPORT
            </button>
          </div>
          <div className="save-as-draft-btn123">
            <button className="btn1233" onClick={submitHandler} type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HOC(CreateAuthorization);
