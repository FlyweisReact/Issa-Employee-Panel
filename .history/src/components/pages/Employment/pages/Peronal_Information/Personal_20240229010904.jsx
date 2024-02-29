/** @format */

import React, { useEffect, useState } from "react";
import "./Personal.css";
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import { Baseurl, Auth, showMsg } from "../../../../../Baseurl";
import NavWrapper from "../../../../../Helper/NavWrapper";
import { BorderlessInput, DateFormatter } from "../../../../../Helper/Makers";
import { SignatureModal } from "../../../../../Mod/Modal";

export const Personal = () => {
  const [data, setData] = useState({});

  const getPersonal = async () => {
    try {
      const res = await axios.get(
        `${Baseurl}employee/getPersonalInformation`,
        Auth()
      );
      console.log(res?.data);
      setData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPersonal();
  }, []);

  const initialData = {
    date: data?.date?.split("T")[0] || "",
    lastName: data?.lastName || "",
    firstName: data?.firstName || "",
    middleInitial: data?.middleInitial || "",
    addressStreet: data?.addressStreet || "",
    addressCity: data?.addressCity || "",
    addressState: data?.addressState || "",
    addressZip: data?.addressZip || "",
    socSecNo: data?.socSecNo || "",
    birthDate: data?.birthDate?.split("T")[0] || "",
    telephoneHome: data?.telephoneHome || "",
    telephonePersonalCell: data?.telephonePersonalCell || "",
    telephoneWork: data?.telephoneWork || "",
    telephoneBusinessCell: data?.telephoneBusinessCell || "",
    dLStateOfIssue: data?.dLStateOfIssue || "",
    dLNumber: data?.dLNumber || "",
    dLExpirationDate: data?.dLExpirationDate?.split("T")[0] || "",
    businessEmail: data?.businessEmail || "",
    personalEmail: data?.personalEmail || "",
    emergencyContactName: data?.emergencyContactName || "",
    emergencyContactRelationship: data?.emergencyContactRelationship || "",
    emergencyContactNumber: data?.emergencyContactNumber || "",
    savedSigned: data?.savedSigned || "",
  };

  const [formData, setFormData] = useState(initialData);

  const submitHandler = (e) => {
    e.preventDefault();
    const emptyValues = Object.values(formData).filter((x) => x === "");

    if (emptyValues.length > 0) {
      showMsg(
        "Error",
        `${Object.keys(formData).filter(
          (x) => formData[x] === ""
        )} cannot be empty`,
        "danger"
      );
      return;
    }

    try {
      axios
        .post(`${Baseurl}employee/createPersonalInformation`, formData, Auth())
        .then((res) => {
          console.log(res);
          showMsg("Success", res.data.message, "success");
        });
    } catch (error) {
      showMsg(
        "Error",
        error?.response?.data?.message || "An error occurred",
        "danger"
      );
    }
  };

  useEffect(() => {
    setFormData({ ...formData, ...initialData });
  }, [data]);

  // ----
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

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSavedSigned}
        value={savedSigned}
      />

      <NavWrapper
        title={"EMPLOYEE PERSONNEL INFORMATION/EMERGENCY CONTACT"}
        isArrow={true}
      />
      <Container className="full-width-container">
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
            <div className="grid-item long-input">
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
            <div>{savedSigned && <p>Digitally Sign by {savedSigned} </p>}</div>
          </div>
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
