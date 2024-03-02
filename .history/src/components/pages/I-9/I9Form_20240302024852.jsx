/** @format */

import { Calendar } from "primereact/calendar";
import React from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  BorderlessInput,
  CheckBoxMaker,
  DateFormatter,
} from "../../../Helper/Makers";
import NavWrapper from "../../../Helper/NavWrapper";
import { SignatureModal } from "../../../Mod/Modal";

export const I9Form = () => {
  const [date, setDate] = useState(null);

  // keys for integration
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [otherLastNames, setOtherLastNames] = useState("");
  const [address, setAddress] = useState("");
  const [aptNumber, setAptNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [citizenshipStatus, setCitizenshipStatus] = useState("");
  const [lawfulPermanentResidentText, setLawfulPermanentResidentText] =
    useState(false);
  const [
    noncitizenAuthorizedToWorkExDate,
    setNoncitizenAuthorizedToWorkExDate,
  ] = useState("");
  const [usCisNumber, setUsCisNumber] = useState("");
  const [i94Number, setI94Number] = useState("");
  const [foreignPassportNumber, setForeignPassportNumber] = useState("");
  const [countryOfIssuance, setCountryOfIssuance] = useState("");
  const [signature, setSignature] = useState("");
  const [attestationDate, setAttestationDate] = useState("");
  const [listA, setListA] = useState([]);
  const [documentTitle, setDocumentTitle] = useState("");
  const [issuingAuthority, setIssuingAuthority] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [open, setOpen] = useState(false);
  const [listB, setListB] = useState([]);
  const [documentTitleB, setDocumentTitleB] = useState("");
  const [issuingAuthorityB, setIssuingAuthorityB] = useState("");
  const [documentNumberB, setDocumentNumberB] = useState("");
  const [expirationDateB, setExpirationDateB] = useState("");
  const [ listC , setListC ] = useState([])
  const [documentTitleB, setDocumentTitleB] = useState("");
  const [issuingAuthorityB, setIssuingAuthorityB] = useState("");
  const [documentNumberB, setDocumentNumberB] = useState("");
  const [expirationDateB, setExpirationDateB] = useState("");

  // ----
  const listAPayload = {
    documentTitle,
    issuingAuthority,
    documentNumber,
    expirationDate,
  };
  const pushInListA = async () => {
    await setListA((prev) => [...prev, listAPayload]);
    setDocumentTitle("");
    setIssuingAuthority("");
    setDocumentNumber("");
    setExpirationDate("");
  };
  const popFromListA = (index) => {
    setListA((prev) => prev.filter((_, i) => i !== index));
  };
  const listBPayload = {
    documentTitleB,
    issuingAuthorityB,
    documentNumberB,
    expirationDateB,
  };
  const pushInListB = async () => {
    await setListB((prev) => [...prev, listBPayload]);
    setDocumentTitleB("");
    setIssuingAuthorityB("");
    setDocumentNumberB("");
    setExpirationDateB("");
  };
  const popFromListB = (index) => {
    setListB((prev) => prev.filter((_, i) => i !== index));
  };
  // ----


  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSignature}
        value={signature}
      />

      <NavWrapper
        title={"Employment Eligibility Verification"}
        isArrow={true}
      />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <p className="fw-bold text-center m-0 text-desc">
            Department of Homeland Security
          </p>
          <p className="text-center m-0 text-desc">
            U.S. Citizenship and Immigration Services
          </p>
          <p className="fw-bold mt-3 text-desc">
            START HERE: Employers must ensure the form instructions are
            available to employees when completing this form. Employers are
            liable for failing to comply with the requirements for completing
            this form. See below and the{" "}
            <a href="https://www.uscis.gov/i-9" target="_blank">
              Instructions.
            </a>
          </p>
          <p className="fw-bold text-desc">
            ANTI-DISCRIMINATION NOTICE: All employees can choose which
            acceptable documentation to present for Form I-9. Employers cannot
            ask employees for documentation to verify information in Section 1,
            or specify which acceptable documentation employees must present for
            Section 2 or Supplement B, Reverification and Rehire. Treating
            employees differently based on their citizenship, immigration
            status, or national origin may be illegal
          </p>
          <p className="fw-bold text-desc">
            Section 1. Employee Information and Attestation: Employees must
            complete and sign Section 1 of Form I-9 no later than the first day
            of employment, but not before accepting a job offer.
          </p>
          <div className="grid-container">
            <div className="grid-item">
              <label>Last Name (Family Name) </label>
              <BorderlessInput
                setState={setLastName}
                placeholder={""}
                type={"text"}
                value={lastName}
              />
            </div>

            <div className="grid-item">
              <label>First Name (Given Name) </label>
              <BorderlessInput
                setState={setFirstName}
                placeholder={""}
                type={"text"}
                value={firstName}
              />
            </div>

            <div className="grid-item">
              <label>Middle Initial (if any) </label>
              <BorderlessInput
                setState={setMiddleInitial}
                placeholder={""}
                type={"text"}
                value={middleInitial}
              />
            </div>

            <div className="grid-item">
              <label>Other Last Names Used (if any) </label>
              <BorderlessInput
                setState={setOtherLastNames}
                placeholder={""}
                type={"text"}
                value={otherLastNames}
              />
            </div>

            <div className="grid-item long-input">
              <label>Address (Street Number and Name) </label>
              <BorderlessInput
                setState={setAddress}
                placeholder={""}
                type={"text"}
                value={address}
              />
            </div>

            <div className="grid-item">
              <label>Apt. Number (if any) </label>
              <BorderlessInput
                setState={setAptNumber}
                placeholder={""}
                type={"text"}
                value={aptNumber}
              />
            </div>

            <div className="grid-item">
              <label>City or Town </label>
              <BorderlessInput
                setState={setCity}
                placeholder={""}
                type={"text"}
                value={city}
              />
            </div>

            <div className="grid-item">
              <label>State</label>
              <BorderlessInput
                setState={setState}
                placeholder={""}
                type={"text"}
                value={state}
              />
            </div>

            <div className="grid-item">
              <label>ZIP Code</label>
              <BorderlessInput
                setState={setZipCode}
                placeholder={""}
                type={"text"}
                value={zipCode}
              />
            </div>

            <div className="grid-item">
              <label>Date of Birth (mm/dd/yyyy)</label>
              <BorderlessInput
                setState={setDateOfBirth}
                placeholder={""}
                type={"date"}
                value={DateFormatter(dateOfBirth)}
              />
            </div>

            <div className="grid-item">
              <label>U.S. Social Security Number </label>
              <BorderlessInput
                setState={setSocialSecurityNumber}
                placeholder={""}
                type={"number"}
                value={socialSecurityNumber}
              />
            </div>

            <div className="grid-item long-input">
              <label>Employee's Email Address </label>
              <BorderlessInput
                setState={setEmail}
                placeholder={""}
                type={"email"}
                value={email}
              />
            </div>
            <div className="grid-item long-input">
              <label>Employee's Telephone Number </label>
              <BorderlessInput
                setState={setTelephoneNumber}
                placeholder={""}
                type={"number"}
                value={telephoneNumber}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>
                I am aware that federal law provides for imprisonment and/or
                fines for false statements, or the use of false documents, in
                connection with the completion of this form. I attest, under
                penalty of perjury, that this information, including my
                selection of the box attesting to my citizenship or immigration
                status, is true and correct
              </label>
            </div>
            <div className="grid-item full-wid-input d-block">
              <label>
                Check one of the following boxes to attest to your citizenship
                or immigration status (See page 2 and 3 of the instructions.):
              </label>
              <div>
                <CheckBoxMaker
                  setValue={setCitizenshipStatus}
                  value={"U.S. Citizen"}
                  label={"1. A citizen of the United States"}
                  id={"citizenshipStatus1"}
                />
                <CheckBoxMaker
                  setValue={setCitizenshipStatus}
                  value={"Non U.S. Citizen"}
                  label={
                    "2.  A noncitizen national of the United States (See Instructions.)"
                  }
                  id={"citizenshipStatus2"}
                />{" "}
                <CheckBoxMaker
                  setValue={setLawfulPermanentResidentText}
                  value={!lawfulPermanentResidentText}
                  label={
                    "3. A lawful permanent resident (Enter USCIS or A-Number."
                  }
                  checked={lawfulPermanentResidentText}
                  id={"citizenshipStatus3"}
                />
                <CheckBoxMaker
                  setValue={setNoncitizenAuthorizedToWorkExDate}
                  value={!noncitizenAuthorizedToWorkExDate}
                  label={
                    "4.  A noncitizen (other than Item Numbers 2. and 3. above) authorized to work until (exp. date, if any)."
                  }
                  checked={noncitizenAuthorizedToWorkExDate}
                  id={"citizenshipStatus4"}
                />
              </div>
            </div>
            <div className="grid-item full-wid-input">
              <label>If you check Item Number 4., enter one of these:</label>
            </div>
            <div className="grid-item">
              <label>USCIS A-Number or</label>
              <BorderlessInput
                setState={setUsCisNumber}
                placeholder={""}
                type={"number"}
                value={usCisNumber}
              />
            </div>
            <div className="grid-item">
              <label>Form I-94 Admission Number or</label>
              <BorderlessInput
                setState={setI94Number}
                placeholder={""}
                type={"number"}
                value={i94Number}
              />
            </div>
            <div className="grid-item long-input">
              <label>Foreign Passport Number and Country of Issuance</label>
              <BorderlessInput
                setState={setForeignPassportNumber}
                placeholder={"Foreign Passport Number"}
                type={"number"}
                value={foreignPassportNumber}
              />
              <BorderlessInput
                setState={setCountryOfIssuance}
                placeholder={"Country of Issuance"}
                type={"text"}
                value={countryOfIssuance}
              />
            </div>
            <div className="third-wid-input d-block">
              <label>Signature of Employee</label>
              <div className="custome-cloud-btn mt-2">
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
            </div>
            <div className="grid-item">
              <label>Today's Date (mm/dd/yyyy) </label>
              <BorderlessInput
                setState={setAttestationDate}
                placeholder={""}
                type={"date"}
                value={DateFormatter(attestationDate)}
              />
            </div>
          </div>
          <p className="fw-bold text-desc">
            If a preparer and/or translator assisted you in completing Section
            1, that person MUST complete the{" "}
            <a href="https://www.uscis.gov/i-9" target="_blank">
              Preparer and/or Translator Certification
            </a>{" "}
            on Page 3.
          </p>
          <p className="fw-bold text-desc">
            Section 2. Employer Review and Verification: Employers or their
            authorized representative must complete and sign Section 2 within
            three business days after the employee's first day of employment,
            and must physically examine, or examine consistent with an
            alternative procedure authorized by the Secretary of DHS,
            documentation from List A OR a combination of documentation from
            List B and List C. Enter any additional documentation in the
            Additional Information box; see Instructions
          </p>
          <div className="grid-container">
            <div className="grid-item full-wid-input">
              <label>List A</label>
            </div>
            <div className="grid-item">
              <label>Document Title</label>{" "}
              <BorderlessInput
                setState={setDocumentTitle}
                placeholder={""}
                type={"text"}
                value={documentTitle}
              />
            </div>
            <div className="grid-item">
              <label>Issuing Authority</label>{" "}
              <BorderlessInput
                setState={setIssuingAuthority}
                placeholder={""}
                type={"text"}
                value={issuingAuthority}
              />
            </div>
            <div className="grid-item">
              <label>Document Number (if any)</label>{" "}
              <BorderlessInput
                setState={setDocumentNumber}
                placeholder={""}
                type={"number"}
                value={documentNumber}
              />
            </div>
            <div className="grid-item">
              <label>Expiration Date (if any)</label>{" "}
              <BorderlessInput
                setState={setExpirationDate}
                placeholder={""}
                type={"date"}
                value={DateFormatter(expirationDate)}
              />
            </div>
            <div className="grid-item">
              <button
                className="add_more mb-3"
                type="button"
                onClick={() => pushInListA()}
              >
                Add More{" "}
              </button>
            </div>
          </div>

          {listA?.length > 0 && (
            <div className="overflow_table">
              <table className="mb-3 color-full">
                <thead>
                  <tr>
                    <th>Doument Title</th>
                    <th>Issuing Authority</th>
                    <th>Document Number</th>
                    <th>Expiration Date </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {listA?.map((i, index) => (
                    <tr key={index}>
                      <td> {i.documentTitle} </td>
                      <td> {i.issuingAuthority} </td>
                      <td> {i.documentNumber} </td>
                      <td> {i.expirationDate?.slice(0, 10)} </td>
                      <td>
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => popFromListA(index)}
                        />{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="grid-container">
            <div className="grid-item full-wid-input">
              <label>List B</label>
            </div>
            <div className="grid-item">
              <label>Document Title</label>{" "}
              <BorderlessInput
                setState={setDocumentTitleB}
                placeholder={""}
                type={"text"}
                value={documentTitleB}
              />
            </div>
            <div className="grid-item">
              <label>Issuing Authority</label>{" "}
              <BorderlessInput
                setState={setIssuingAuthorityB}
                placeholder={""}
                type={"text"}
                value={issuingAuthorityB}
              />
            </div>
            <div className="grid-item">
              <label>Document Number (if any)</label>{" "}
              <BorderlessInput
                setState={setDocumentNumberB}
                placeholder={""}
                type={"number"}
                value={documentNumberB}
              />
            </div>
            <div className="grid-item">
              <label>Expiration Date (if any)</label>{" "}
              <BorderlessInput
                setState={setExpirationDateB}
                placeholder={""}
                type={"date"}
                value={DateFormatter(expirationDateB)}
              />
            </div>
            <div className="grid-item">
              <button
                className="add_more mb-3"
                type="button"
                onClick={() => pushInListB()}
              >
                Add More{" "}
              </button>
            </div>
          </div>

          {listB.length > 0 && (
            <div className="overflow_table">
              <table className="mb-3 color-full">
                <thead>
                  <tr>
                    <th>Doument Title</th>
                    <th>Issuing Authority</th>
                    <th>Document Number</th>
                    <th>Expiration Date </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {listB?.map((i, index) => (
                    <tr key={index}>
                      <td> {i.documentTitleB} </td>
                      <td> {i.issuingAuthorityB} </td>
                      <td> {i.documentNumberB} </td>
                      <td> {i.expirationDateB?.slice(0, 10)} </td>
                      <td>
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => popFromListB(index)}
                        />{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </form>
      </Container>

      <div className="main-div-personal important">
        <div className="top-div-personal">
          <Form
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <p>
              Department of Homeland Security
              <br />
              <span style={{ fontWeight: "500" }}>
                U.S. Citizenship and Immigration
              </span>
              Services
            </p>
            <p>
              START HERE: Employers must ensure the form instructions are
              available to employees when completing this form. Employers are
              liable for failing to comply with the requirements for completing
              this form. See below and the{" "}
              <span style={{ color: "#0500FF", textDecoration: "underline" }}>
                Instructions
              </span>
              .
            </p>
            <p>
              ANTI-DISCRIMINATION NOTICE:{" "}
              <span style={{ fontWeight: "500" }}>
                All employees can choose which acceptable documentation to
                present for Form I-9. Employers cannot ask employees for
                documentation to verify information in Section 1, or specify
                which acceptable documentation employees must present for
                Section 2 or Supplement B, Reverification and Rehire. Treating
                employees differently based on their citizenship, immigration
                status, or national origin may be illegal.
              </span>
            </p>

            <p>
              <p>Section 1. Employee Information and Attestation: </p>
              <span style={{ fontWeight: "500" }}>
                Employees must complete and sign Section 1 of Form I-9 no later
                than the first day of employment, but not before accepting a job
                offer.
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Last Name (Family Name) :
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                First Name (Given Name):
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Middle Initial (If any):
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Other Last Names Used (if any):
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Address (Street Number and Name)
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Apt. Number (if any):
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                City or Town:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                State:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Zip Code:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date of Birth (MM/DD/YY):
              </Form.Label>
              <div>
                <Calendar
                  style={{
                    height: "2.5rem",
                    border: "1px solid #ced4da",
                    borderRadius: "0.25rem",
                    width: "100%",
                    padding: "0 .75rem",
                    fontSize: ".9rem",
                  }}
                  value={date}
                  onChange={(e) => setDate(e.value)}
                  dateFormat="mm/dd/yy"
                  showIcon
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                U.S. Social Security Number:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employee's Email Address:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employee's Telephone Number:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <p>
              I am aware that federal law provides for imprisonment and/or fines
              for false statements, or the use of false documents, in connection
              with the completion of this form. I attest, under penalty of
              perjury, that this information, including my selection of the box
              attesting to my citizenship or immigration status, is true and
              correct.
            </p>
            <div key={"radio"} className="mb-3">
              <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
                <Form.Check.Input name="radio" type={"radio"} isValid />
                <Form.Check.Label>
                  {" "}
                  <p>1. A citizen of the United States</p>
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
                <Form.Check.Input name="radio" type={"radio"} isValid />
                <Form.Check.Label>
                  {" "}
                  <p>
                    2. A noncitizen national of the United States (See
                    Instructions.)
                  </p>
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
                <Form.Check.Input name="radio" type={"radio"} isValid />
                <Form.Check.Label>
                  {" "}
                  <p>
                    3. A lawful permanent resident (Enter USCIS or A-Number.)
                  </p>
                </Form.Check.Label>
              </Form.Check>
            </div>
            <Form.Group className="mb-3 mt-0">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
              <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
                <Form.Check.Input name="radio" type={"radio"} isValid />
                <Form.Check.Label>
                  {" "}
                  <p>
                    4. A noncitizen (other than Item Numbers 2. and 3. above)
                    authorized to work until (exp. date, if any)
                  </p>
                </Form.Check.Label>
              </Form.Check>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>If you check Item Number 4., enter one of these:</p>
            <p>USCIS A-Number</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>or</p>
            <p>Form I-94 Admission Number</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>or</p>
            <p>Foreign Passport Number and Country of Issuance</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Signature of Employee :
              </Form.Label>
            </Form.Group>

            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button type="button" className="signed">
                  {" "}
                  SAVED AND SIGNED
                </button>
              </div>
            </div>

            <div className="mb-3 mt-3">
              <Calendar
                style={{
                  height: "2.5rem",
                  border: "1px solid #ced4da",
                  borderRadius: "0.25rem",
                  width: "100%",
                  padding: "0 .75rem",
                  fontSize: ".9rem",
                }}
                value={date}
                onChange={(e) => setDate(e.value)}
                dateFormat="mm/dd/yy"
                showIcon
                placeholder="Today's Date (mm/dd/yyyy)"
              />
            </div>
            <p>
              If a preparer and/or translator assisted you in completing Section
              1, that person MUST complete the{" "}
              <span style={{ color: "#0500FF" }}>
                Preparer and/or Translator Certification
              </span>
              on Page 3
            </p>
            <p>
              Section 2.{" "}
              <span style={{ fontWeight: "500" }}>
                Employer Review and Verification: Employers or their authorized
                representative must complete and sign Section 2 within three
                business days after the employee's first day of employment, and
                must physically examine, or examine consistent with an
                alternative procedure authorized by the Secretary of DHS,
                documentation from List A OR a combination of documentation from
                List B and List C. Enter any additional documentation in the
                Additional Information box; see Instructions.
              </span>
            </p>
            <p>Document Title 1</p>
            <p>List A</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              or <br />
              List B{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              And <br />
              List C{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>

            <p>Issuing Authority</p>
            <p>List A</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              or <br />
              List B{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              And <br />
              List C{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>

            <p>Document Number (if any)</p>
            <p>List A</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              or <br />
              List B{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              And <br />
              List C{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>Expiration Date (if any) </p>
            <p>List A</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              or <br />
              List B{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              And <br />
              List C{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>

            <p>Document Title 2</p>
            <p>List A</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              or <br />
              List B{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              And <br />
              List C{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>Issuing Authority</p>
            <p>List A</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              or <br />
              List B{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              And <br />
              List C{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>Document Number (if any)</p>
            <p>List A</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              or <br />
              List B{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              And <br />
              List C{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>

            <p>Expiration Date (if any) </p>
            <p>List A</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              or <br />
              List B{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              And <br />
              List C{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>Document Title 3</p>
            <p>List A</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              or <br />
              List B{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              And <br />
              List C{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>Issuing Authority</p>
            <p>List A</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              or <br />
              List B{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              And <br />
              List C{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>Document Number (if any)</p>
            <p>List A</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              or <br />
              List B{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              And <br />
              List C{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>Expiration Date (if any) </p>
            <p>List A</p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              or <br />
              List B{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>
              And <br />
              List C{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <p>Additional Information</p>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Please Explain"
              />
            </Form.Group>
            <Form.Check
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Form.Check.Input
                type="checkbox"
                id="defaultCheck1"
                style={{ height: "20px", width: "20px" }}
              />
              <Form.Check.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".7rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#666666",
                  marginLeft: "5px",
                }}
              >
                Check here if you used an alternative procedure authorized by
                DHS to examine documents.{" "}
              </Form.Check.Label>
            </Form.Check>
            <p>
              Certification: I attest, under penalty of perjury, that (1) I have
              examined the documentation presented by the above-named employee,
              (2) the above-listed documentation appears to be genuine and to
              relate to the employee named, and (3) to the best of my knowledge,
              the employee is authorized to work in the United States.
            </p>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                First Day of Employment :
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Last Name, First Name and Title of Employer or Authorized
                Representative :
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  text"
                style={{ width: "100%" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Signature of Employer or Authorized Representative:
              </Form.Label>
            </Form.Group>
            <div className="save-as-draft-btn-personal">
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
            </div>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Today's Date :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  dATE" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Employer's Business or Organization Name:
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  dATE" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Employer's Business or Organization Address, City or Town,
                State, ZIP Code:
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p>
              For reverification or rehire, complete{" "}
              <span style={{ color: "#0500FF" }}>
                Supplement B, Reverification and Rehire
              </span>
              on Page 4.
            </p>
            <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              LISTS OF ACCEPTABLE DOCUMENTS
            </p>
            <p style={{ fontWeight: "500" }}>
              All documents containing an expiration date must be unexpired. *
              Documents extended by the issuing authority are considered
              unexpired. Employees may present one selection from List A or a
              combination of one selection from List B and one selection from
              List C.
            </p>
            <p>
              Examples of many of these documents appear in the Handbook for
              Employers (M-274).
            </p>
            <p style={{ textAlign: "center" }}>
              LIST A <br /> Documents that Establish Both Identity <br /> and
              Employment Authorization
            </p>
            <p style={{ fontWeight: "500" }}>
              1. U.S. Passport or U.S. Passport Card <br /> 2. Permanent
              Resident Card or Alien Registration Receipt Card (Form I-551){" "}
              <br />
              3. Foreign passport that contains a temporary I-551 stamp or
              temporary I-551 printed notation on a machine readable immigrant
              visa
              <br /> 4. Employment Authorization Document that contains a
              photograph (Form I-766)
              <br /> 5. For an individual temporarily authorized to work for a
              specific employer because of his or her status or parole:
              <br /> a. Foreign passport; and
              <br /> b. Form I-94 or Form I-94A that has the following:
              <br /> (1) The same name as the passport; and
              <br /> (2) An endorsement of the individual's status or parole as
              long as that period of endorsement has not yet expired and the
              proposed employment is not in conflict with any restrictions or
              limitations identified on the form.
              <br /> 6. Passport from the Federated States of Micronesia (FSM)
              or the Republic of the Marshall Islands (RMI) with Form I-94 or
              Form I-94A indicating nonimmigrant admission under the Compact of
              Free Association Between the United States and the FSM or RMI
            </p>
            <p style={{ textAlign: "center" }}>
              or <br />
              LIST B <br /> Documents that Establish Identity
            </p>
            <p style={{ fontWeight: "500" }}>
              1. Driver's license or ID card issued by a State or outlying
              possession of the United States provided it contains a photograph
              or information such as name, date of birth, gender, height, eye
              color, and address <br />
              2. ID card issued by federal, state or local government agencies
              or entities, provided it contains a photograph or information such
              as name, date of birth, gender, height, eye color, and address{" "}
              <br />
              3. School ID card with a photograph
              <br /> 4. Voter's registration card <br />
              5. U.S. Military card or draft record <br />
              6. Military dependent's ID card <br />
              7. U.S. Coast Guard Merchant Mariner Card <br />
              8. Native American tribal document
              <br /> 9. Driver's license issued by a Canadian government
              authority For persons under age 18 who are unable to present a
              document listed above:
              <br /> 10. School record or report card
              <br /> 11. Clinic, doctor, or hospital record
              <br /> 12. Day-care or nursery school record
            </p>
            <p style={{ textAlign: "center" }}>
              AND <br /> LIST C <br />
              Documents that Establish Employment <br /> and Employment
              Authorization
            </p>
            <p style={{ fontWeight: "500" }}>
              1. A Social Security Account Number card, unless the card includes
              one of the following restrictions: <br /> (1) NOT VALID FOR
              EMPLOYMENT
              <br /> (2) VALID FOR WORK ONLY WITH INS AUTHORIZATION <br />
              (3) VALID FOR WORK ONLY WITH DHS AUTHORIZATION <br />
              2. Certification of report of birth issued by the Department of
              State (Forms DS-1350, FS-545, FS-240)
              <br /> 3. Original or certified copy of birth certificate issued
              by a State, county, municipal authority, or territory of the
              United States bearing an official seal <br />
              4. Native American tribal document <br />
              5. U.S. Citizen ID Card (Form I-197) <br />
              6. Identification Card for Use of Resident Citizen in the United
              States (Form I-179) <br />
              7. Employment authorization document issued by the Department of
              Homeland Security For examples, see Section 7 and Section 13 of
              the M-274 on uscis.gov/i-9-central. <br />
              The Form I-766, Employment Authorization Document, is a List A,
              Item Number 4. document, not a List C document.
            </p>
            <p style={{ fontWeight: "500", textAlign: "center" }}>
              Acceptable Receipts
            </p>
            <p style={{ textAlign: "center" }}>
              {" "}
              May be presented in lieu of a document listed above for a
              temporary period. For receipt validity dates, see the M-274.
            </p>
            <p>
              <li>
                {" "}
                Receipt for a replacement of a lost, stolen, or damaged List A
                document.{" "}
              </li>
              <li>
                Form I-94 issued to a lawful permanent resident that contains an
                I-551 stamp and a photograph of the individual.
              </li>
              <li>
                {" "}
                Form I-94 with “RE” notation or refugee stamp issued to a
                refugee.
              </li>
              OR
              <p style={{ fontWeight: "500" }}>
                Receipt for a replacement of a lost, stolen, or damaged List B
                document. <br /> Receipt for a replacement of a lost, stolen, or
                damaged List C document.
                <br />
                *Refer to the Employment Authorization Extensions page on I-9
                Central for more information.{" "}
              </p>
            </p>
            <p style={{ textAlign: "center" }}>
              Supplement A, Preparer and/or Translator Certification for Section
              1 Department of Homeland Security U.S.
            </p>
            <p style={{ fontWeight: "500", textAlign: "center" }}>
              Citizenship and Immigration Services
            </p>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Last Name (Family Name) from Section 1.
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                First Name (Given Name) from Section 1.
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                First Name (Given Name) from Section 1.
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Middle initial (if any) from Section 1.
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>
            <p>
              Instructions:{" "}
              <span style={{ fontWeight: "500" }}>
                This supplement must be completed by any preparer and/or
                translator who assists an employee in completing Section 1 of
                Form I-9. The preparer and/or translator must enter the
                employee's name in the spaces provided above. Each preparer or
                translator must complete, sign, and date a separate
                certification area. Employers must retain completed supplement
                sheets with the employee's completed Form I-9.
              </span>
            </p>
            <p>
              I attest, under penalty of perjury, that I have assisted in the
              completion of Section 1 of this form and that to the best of my
              knowledge the information is true and correct.
            </p>
            <p>Signature of Preparer or Translator</p>
            <div className="save-as-draft-btn-personal">
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
            </div>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Date :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>

            <p style={{ fontSize: "1rem" }}>Employers Only </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Last Name (Family Name)
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                First Name (Given Name)
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Middle Initial (if any)
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Address (Street Number and Name)
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                City or Town
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                State
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Zip Code
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p>
              I attest, under penalty of perjury, that I have assisted in the
              completion of Section 1 of this form and that to the best of my
              knowledge the information is true and correct.{" "}
            </p>

            <p style={{ textAlign: "center" }}>
              Signature of Preparer or Translator
            </p>
            <p>
              Supplement B, <br /> Reverification and Rehire (formerly <br />{" "}
              Section 3)
            </p>
            <p style={{ fontWeight: "500", textAlign: "center" }}>
              Department of Homeland Security U.S.
              <br /> Citizenship and Immigration Services
            </p>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Last Name (Family Name) from Section 1.
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                First Name (Given Name) from Section 1.
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Middle Initial (if any) from Section 1.
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p>
              Instructions: This supplement replaces Section 3 on the previous
              version of Form I-9. Only use this page if your employee requires
              reverification, is rehired within three years of the date the
              original Form I-9 was completed, or provides proof of a legal name
              change. Enter the employee's name in the fields above. Use a new
              section for each reverification or rehire. Review the Form I-9
              instructions before completing this page. Keep this page as part
              of the employee's Form I-9 record. Additional guidance can be
              found in the{" "}
              <span style={{ color: "#0500FF" }}>
                Handbook for Employers: Guidance for Completing Form I-9 (M-274)
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Date of Rehire (if applicable) N
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                New Name (if applicable)
                <br />
                Last Name (Family Name) from Section 1.
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                First Name (Given Name) from Section 1.
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Middle Initial (if any) from Section 1.
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Reverification:{" "}
                <span style={{ fontWeight: "500" }}>
                  If the employee requires reverification, your employee can
                  choose to present any acceptable List A or List C
                  documentation to show continued employment authorization.
                  Enter the document information in the spaces below.
                </span>
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Document Title
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Expiration Date (if any)
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
            <p>
              I attest, under penalty of perjury, that to the best of my
              knowledge, this employee is authorized to work in the United
              States, and if the employee presented documentation, the
              documentation I examined appears to be genuine and to relate to
              the individual who presented it.
            </p>
            <p>Name of Employer or Authorized Representative</p>
            <div className="save-as-draft-btn-personal">
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
            </div>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Today's Date
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Additional Information (Initial and date each notation.)
              </Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter  text" />
            </Form.Group>
            <Form.Check
              style={{ marginTop: "2rem" }}
              type="checkbox"
              label="Check here if you used an alternative procedure authorized by DHS to examine documents."
            />
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Date of Rehire (if applicable) N
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                New Name (if applicable) <br />
                Last Name (Family Name) from Section 1.
              </Form.Label>

              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                First Name (Given Name) from Section 1.
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Middle Initial (if any) from Section 1.
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p>
              Reverification:{" "}
              <span style={{ fontWeight: "500" }}>
                If the employee requires reverification, your employee can
                choose to present any acceptable List A or List C documentation
                to show continued employment authorization. Enter the document
                information in the spaces below.
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Document Title
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Expiration Date (if any)
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <p>
              I attest, under penalty of perjury, that to the best of my
              knowledge, this employee is authorized to work in the United
              States, and if the employee presented documentation, the
              documentation I examined appears to be genuine and to relate to
              the individual who presented it.
            </p>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Name of Employer or Authorized Representative
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <p>Signature of Employer or Authorized Representative</p>
            <div className="save-as-draft-btn-personal">
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
            </div>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Today's Date
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Additional Information (Initial and date each notation.)
              </Form.Label>
              <Form.Control type="text" rows={3} placeholder="Enter  text" />
            </Form.Group>
            <Form.Check label="Check here if you used an alternative procedure authorized by DHS to examine documents." />
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Date of Rehire (if applicable) N
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                New Name (if applicable) <br />
                Last Name (Family Name) from Section 1.
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                First Name (Given Name) from Section 1.
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Middle Name (Middle Initial) from Section 1.
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
            <p>
              Reverification:{" "}
              <span style={{ fontWeight: "500" }}>
                If the employee requires reverification, your employee can
                choose to present any acceptable List A or List C documentation
                to show continued employment authorization. Enter the document
                information in the spaces below.
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Document Title
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Expiration Date (if any)
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
            <p>
              I attest, under penalty of perjury, that to the best of my
              knowledge, this employee is authorized to work in the United
              States, and if the employee presented documentation, the
              documentation I examined appears to be genuine and to relate to
              the individual who presented it.
            </p>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Name of Employer or Authorized Representative
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Signature of Employer or Authorized Representative
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <div className="save-as-draft-btn-personal">
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
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Today's Date :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  dATE" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Additional Information (Initial and date each notation.)
              </Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter  text" />
            </Form.Group>
            <Form.Check label="Check here if you used an alternative procedure authorized by DHS to examine documents." />

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Date of Rehire (if applicable) N
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                New Name (if applicable) <br />
                Last Name (Family Name) from Section 1.
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                First Name (Given Name) from Section 1.
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Middle Name (Given Name) from Section 1.
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
            <p>
              Reverification:{" "}
              <span style={{ fontWeight: "500" }}>
                If the employee requires reverification, your employee can
                choose to present any acceptable List A or List C documentation
                to show continued employment authorization. Enter the document
                information in the spaces below.
              </span>
            </p>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Document Title
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Expiration Date (if any)
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
            <p>
              I attest, under penalty of perjury, that to the best of my
              knowledge, this employee is authorized to work in the United
              States, and if the employee presented documentation, the
              documentation I examined appears to be genuine and to relate to
              the individual who presented it.
            </p>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Signature of Employer or Authorized Representative
              </Form.Label>
              <Form.Control type="text" placeholder="Enter  text" />
            </Form.Group>
            <div className="save-as-draft-btn-personal">
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
            </div>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginTop: "2rem",
                }}
              >
                Today's Date
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
            <p>Additional Information (Initial and date each notation.)</p>

            <Form.Group className="mb-3">
              <Form.Control type="text" rows={3} placeholder="Enter  text" />
            </Form.Group>
            <Form.Check label="Check here if you used an alternative procedure authorized by DHS to examine documents." />

            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "10px",
                }}
                type="submit"
              >
                PRINT REPORT
              </button>
            </div>
            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                SUBMIT
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
