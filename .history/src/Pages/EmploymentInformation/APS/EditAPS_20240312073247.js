/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  DateFormatter,
  BorderlessSelect,
} from "../../../Helper/Makers";
import { SignatureModal } from "../../../Mod/Modal";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";
import { editApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Outer/HOC";
import { useParams } from "react-router-dom";

const EditAPS = () => {
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
  const [offerLetter, setOfferLetter] = useState({});
  const [employeeDate, setEmployeeDate] = useState("");
  const [employeeTime, setEmplyeeTime] = useState("");
  const [adminDate, setAdminDate] = useState("");
  const [adminTime, setAdminTime] = useState("");
  const { id } = useParams();

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
    getData(setData, `employee/getApsConsentById/${id}`);
  };

  useEffect(() => {
    getProfile();
    getData(setOfferLetter, "employee/getMyOfferLetter");
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
    editApi(setLoading, `employee/editApsConsentById/${id}`, payload);
  };

  const companyName = offerLetter?.data?.companyName;

  useEffect(() => {
    if (data) {
      const item = data?.data;
      setClassification(item?.classification);
      setDate(item?.date);
      setDateOfIncident(item?.dateOfIncident);
      setNoRecordFound(item?.noRecordFound);
      setEmployeeName(item?.employeeName);
      setEmployeeSignature(item?.employeeSignature);
      setAdministratorName(item?.administratorName);
      setAdministratorSignature(item?.administratorSignature);
    }
  }, [data]);

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setEmployeeSignature}
        value={employeeSignature}
        setTime={setEmplyeeTime}
        setDate={setEmployeeDate}
      />
      <SignatureModal
        show={open2}
        onHide={() => setOpen2(false)}
        setValue={setAdministratorSignature}
        value={administratorSignature}
        setTime={setAdminTime}
        setDate={setAdminDate}
      />

      <NavWrapper title="APS Search Consent Form" isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <p className="fw-bold text-start">
            {companyName} conducts adult protective service search through the
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
            services to {companyName} residents if the search of the APS
            Registry contains any substantiated report of abuse, neglect, or
            exploitation of vulnerable adults or children.
          </p>
          <p className="fw-bold text-start">
            By Signing this, Employee gives {companyName} consent to conduct a
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
            <div className="grid-item full-wid-input d-block">
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
                    <p>
                      Digitally Sign by {employeeSignature} {employeeDate}{" "}
                      {employeeTime}{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
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
            <div className="grid-item full-wid-input d-block">
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
                    <p>
                      Digitally Sign by {administratorSignature} {(adminDate)}{" "}
                      {adminTime}{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>

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

export default HOC({ Wcomponenet: EditAPS, isNavbar: false });
