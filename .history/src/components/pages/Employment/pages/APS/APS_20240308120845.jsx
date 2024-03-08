/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sign from "../../../../../Loader/Sign";
import { Auth, Baseurl, postData, showMsg } from "../../../../../Baseurl";
import axios from "axios";
import NavWrapper from "../../../../../Helper/NavWrapper";
import {
  BorderlessInput,
  DateFormatter,
  BorderlessSelect,
} from "../../../../../Helper/Makers";
import { SignatureModal } from "../../../../../Mod/Modal";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../../api/api";
import { postApi } from "../../../../../Repository/Apis";

const APS = () => {
  const [data, setData] = useState({});
  const [employeeName, setEmployeeName] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [administratorName, setAdministratorName] = useState("");
  const [administratorSignature, setAdministratorSignature] = useState("");
  const [date, setDate] = useState("");
  const [classification, setClassification] = useState("");
  const [dateOfIncident, setDateOfIncident] = useState("");
  const [noRecordFound, setNoRecordFound] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [loading, setLoading] = useState(false);

  const options = [
    {
      label: "Yes",
      value: true,
    },
    {
      label: "No",
      value: false,
    },
  ];

  const getProfile = () => {
    getData(setData, "employee/getProfile");
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (data?.data) {
      const item = data?.data;
      setEmployeeName(item?.fullName);
    }
  }, [data]);

  const payload = {
    employeeName,
    employeeSignature,
    administratorName,
    administratorSignature,
    date,
    classification,
    dateOfIncident,
    noRecordFound,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createApsConsent", payload);
  };

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setEmployeeSignature}
        value={employeeSignature}
      />
      <SignatureModal
        show={open2}
        onHide={() => setOpen2(false)}
        setValue={setAdministratorSignature}
        value={administratorSignature}
      />

      <NavWrapper title="APS Search Consent Form" isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <p className="fw-bold text-start">
            Company Name conducts adult protective service search through the
            department of health services APS search registry. These searches
            are conducted randomly and also yearly thereafter.
          </p>
          <p className="fw-bold text-start">
            a. Administrator will conduct a search on the APS registry through
            he department of health services AZ Care Check using employee’s
            first name, last name and date of birth. Search results will fall
            into the following categories:
          </p>
          <div className="grid-container">
            <div className="grid-item long-input">
              <label>i. Record Found with (a) Classification</label>
              <BorderlessInput
                setState={setClassification}
                placeholder=""
                type={"text"}
                value={classification}
              />
            </div>
            <div className="grid-item long-input">
              <label>(b) Date of the incident </label>
              <BorderlessInput
                setState={setDateOfIncident}
                placeholder=""
                type={"date"}
                value={DateFormatter(dateOfIncident)}
              />
            </div>
            <div className="grid-item long-input">
              <label>ii. No APS Registry Record Found </label>
              <BorderlessSelect
                setState={setNoRecordFound}
                value={noRecordFound}
                options={options}
              />
            </div>
          </div>
          <p className="fw-bold text-start">
            b. Employees or subcontractors shall be prohibited from providing
            services to Company Name residents if the search of the APS Registry
            contains any substantiated report of abuse, neglect, or exploitation
            of vulnerable adults or children.
          </p>
          <p className="fw-bold text-start">
            By Signing this, Employee gives Company Name consent to conduct a
            search on the AZ Department of Health APS search registry.
          </p>

          <div className="grid-container">
            <div className="grid-item long-input">
              <label>Employee Name </label>
              <BorderlessInput
                setState={setEmployeeName}
                placeholder=""
                type={"text"}
                value={employeeName}
              />
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item long-input d-block">
              <label>Employee Signature </label>
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
                <div>
                  {employeeSignature && (
                    <p>Digitally Sign by {employeeSignature} </p>
                  )}
                </div>
              </div>
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item long-input">
              <label>Company Name Administrator Name </label>
              <BorderlessInput
                setState={setAdministratorName}
                placeholder=""
                type={"text"}
                value={administratorName}
              />
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item long-input d-block">
              <label>Administrator Signature </label>
              <div className="custome-cloud-btn mt-2">
                <div className="btns">
                  <button className="draft"> SAVE AS DRAFT</button>
                  <button
                    type="button"
                    className="signed"
                    onClick={() => setOpen2(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {administratorSignature && (
                    <p>Digitally Sign by {administratorSignature} </p>
                  )}
                </div>
              </div>
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(date)}
              />
            </div>
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

export default HOC({ Wcomponenet: APS, isNavbar: false });
