/** @format */

import React, { useEffect, useState, useRef } from "react";
import "./Personal.css";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import { BorderlessInput, DateFormatter } from "../../../Helper/Makers";
import { SignatureModal } from "../../../Mod/Modal";
import { ClipLoader } from "react-spinners";
import { postApi } from "../../../Repository/Apis";
import { getData } from "../../../components/api/api";
import HOC from "../../../Layout/Outer/HOC";
import ReactToPrint from "react-to-print";

const Personal = () => {
  const [data, setData] = useState({});
  const [date, setDate] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressState, setAddressState] = useState("");
  const [addressZip, setAddressZip] = useState("");
  const [socSecNo, setSocSecNo] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [telephoneHome, setTelephoneHome] = useState("");
  const [telephonePersonalCell, setTelephonePersonalCell] = useState("");
  const [telephoneWork, setTelephoneWork] = useState("");
  const [telephoneBusinessCell, setTelephoneBusinessCell] = useState("");
  const [dLStateOfIssue, setDLStateOfIssue] = useState("");
  const [dLNumber, setDLNumber] = useState("");
  const [dLExpirationDate, setDLExpirationDate] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactRelationship, setEmergencyContactRelationship] =
    useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [savedSigned, setSavedSigned] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signatureDate, setSignatureDate] = useState("");
  const [signatureTime, setSignatureTime] = useState("");

  const payload = {
    date,
    lastName,
    firstName,
    middleInitial,
    addressStreet,
    addressCity,
    addressState,
    addressZip,
    socSecNo,
    birthDate,
    telephoneHome,
    telephonePersonalCell,
    telephoneWork,
    telephoneBusinessCell,
    dLStateOfIssue,
    dLNumber,
    dLExpirationDate,
    businessEmail,
    personalEmail,
    emergencyContactName,
    emergencyContactRelationship,
    emergencyContactNumber,
    savedSigned,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createPersonalInformation", payload);
  };

  useEffect(() => {
    getData(setData, "employee/getPersonalInformation");
  }, []);

  useEffect(() => {
    if (data) {
      const item = data?.data;
      setDate(item?.date);
      setLastName(item?.lastName);
      setFirstName(item?.firstName);
      setMiddleInitial(item?.middleInitial);
      setAddressStreet(item?.addressStreet);
      setAddressCity(item?.addressCity);
      setAddressState(item?.addressState);
      setAddressZip(item?.addressZip);
      setSocSecNo(item?.socSecNo);
      setBirthDate(item?.birthDate);
      setTelephoneHome(item?.telephoneHome);
      setTelephonePersonalCell(item?.telephonePersonalCell);
      setTelephoneWork(item?.telephoneWork);
      setTelephoneBusinessCell(item?.telephoneBusinessCell);
      setDLStateOfIssue(item?.dLStateOfIssue);
      setDLNumber(item?.dLNumber);
      setDLExpirationDate(item?.dLExpirationDate);
      setBusinessEmail(item?.businessEmail);
      setPersonalEmail(item?.personalEmail);
      setEmergencyContactName(item?.emergencyContactName);
      setEmergencyContactRelationship(item?.emergencyContactRelationship);
      setEmergencyContactNumber(item?.emergencyContactNumber);
      setSavedSigned(item?.savedSigned);
    }
  }, [data]);

  const componentRef = useRef();

  

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSavedSigned}
        value={savedSigned}
        setDate={setSignatureDate}
        setTime={setSignatureTime}
      />

      <NavWrapper
        title={"EMPLOYEE PERSONNEL INFORMATION/EMERGENCY CONTACT"}
        isArrow={true}
      />
      <Container className="full-width-container" ref={componentRef}>
        <form onSubmit={submitHandler} className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item long-input" />
            <div className="grid-item" />
            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(date)}
              />
            </div>
            <div className="grid-item long-input print_this">
              <label>Last Name:</label>
              <BorderlessInput
                setState={setLastName}
                placeholder=""
                type={"text"}
                value={lastName}
              />
            </div>
            <div className="grid-item">
              <label>First:</label>
              <BorderlessInput
                setState={setFirstName}
                placeholder=""
                type={"text"}
                value={firstName}
              />
            </div>
            <div className="grid-item">
              <label>MI:</label>
              <BorderlessInput
                setState={setMiddleInitial}
                placeholder=""
                type={"text"}
                value={middleInitial}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Address:</label>
            </div>
            <div className="grid-item full-wid-input">
              <label>Street:</label>
              <BorderlessInput
                setState={setAddressStreet}
                placeholder=""
                type={"text"}
                value={addressStreet}
              />
            </div>
            <div className="grid-item long-input">
              <label>City:</label>
              <BorderlessInput
                setState={setAddressCity}
                placeholder=""
                type={"text"}
                value={addressCity}
              />
            </div>
            <div className="grid-item">
              <label>State:</label>
              <BorderlessInput
                setState={setAddressState}
                placeholder=""
                type={"text"}
                value={addressState}
              />
            </div>
            <div className="grid-item">
              <label>Zip:</label>
              <BorderlessInput
                setState={setAddressZip}
                placeholder=""
                type={"text"}
                value={addressZip}
              />
            </div>
            <div className="grid-item long-input">
              <label>Soc Sec No:</label>
              <BorderlessInput
                setState={setSocSecNo}
                placeholder=""
                type={"text"}
                value={socSecNo}
              />
            </div>
            <div className="grid-item long-input">
              <label>Birth Date:</label>
              <BorderlessInput
                setState={setBirthDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(birthDate)}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Telephone:</label>
            </div>
            <div className="grid-item long-input">
              <label>Home:</label>
              <BorderlessInput
                setState={setTelephoneHome}
                placeholder=""
                type={"text"}
                value={telephoneHome}
              />
            </div>
            <div className="grid-item long-input">
              <label>Personal Cell:</label>
              <BorderlessInput
                setState={setTelephonePersonalCell}
                placeholder=""
                type={"text"}
                value={telephonePersonalCell}
              />
            </div>
            <div className="grid-item long-input">
              <label>Work:</label>
              <BorderlessInput
                setState={setTelephoneWork}
                placeholder=""
                type={"text"}
                value={telephoneWork}
              />
            </div>
            <div className="grid-item long-input">
              <label>Business Cell:</label>
              <BorderlessInput
                setState={setTelephoneBusinessCell}
                placeholder=""
                type={"text"}
                value={telephoneBusinessCell}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Driver’s License:</label>
            </div>
            <div className="grid-item long-input">
              <label>State of Issue:</label>
              <BorderlessInput
                setState={setDLStateOfIssue}
                placeholder=""
                type={"text"}
                value={dLStateOfIssue}
              />
            </div>
            <div className="grid-item long-input">
              <label>No:</label>
              <BorderlessInput
                setState={setDLNumber}
                placeholder=""
                type={"text"}
                value={dLNumber}
              />
            </div>
            <div className="grid-item long-input">
              <label>Expiration Date:</label>
              <BorderlessInput
                setState={setDLExpirationDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(dLExpirationDate)}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <label>Business Email:</label>
              <BorderlessInput
                setState={setBusinessEmail}
                placeholder=""
                type={"email"}
                value={businessEmail}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <label>Personal Email:</label>
              <BorderlessInput
                setState={setPersonalEmail}
                placeholder=""
                type={"email"}
                value={personalEmail}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <label>Emergency Contact:</label>
              <BorderlessInput
                setState={setEmergencyContactName}
                placeholder=""
                type={"text"}
                value={emergencyContactName}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <label>Relationship:</label>
              <BorderlessInput
                setState={setEmergencyContactRelationship}
                placeholder=""
                type={"text"}
                value={emergencyContactRelationship}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <label>Emergency Contact Phone:</label>
              <BorderlessInput
                setState={setEmergencyContactNumber}
                placeholder=""
                type={"text"}
                value={emergencyContactNumber}
              />
            </div>
            <div className="grid-item long-input"></div>
          </div>
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
            <div>
              {savedSigned && (
                <p>
                  Digitally Sign by {savedSigned} {signatureDate}{" "}
                  {signatureTime}{" "}
                </p>
              )}
            </div>
          </div>

          <ReactToPrint
            trigger={() => (
              <button className="print_btn" type="button">
                PRINT REPORT
              </button>
            )}
            content={() => componentRef.current}
          />

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

export default HOC({ Wcomponenet: Personal, isNavbar: false });
