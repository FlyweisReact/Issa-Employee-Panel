/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import {
  BorderlessInput,
  DateFormatter,
  DefaultInput,
} from "../../../../../Helper/Makers";
import NavWrapper from "../../../../../Helper/NavWrapper";
import { SignatureModal } from "../../../../../Mod/Modal";
import { fetchApi } from "../../../../../Repository/Apis";
import { getData } from "../../../../api/api";
import Loader from "../../../../Loader/Loader";

export const JobDescription = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [employeeInfoSignature, setEmployeeInfoSignature] = useState("");
  const [employeeInfoDate, setEmployeeInfoDate] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getData(setProfile, "employee/getProfile");
    fetchApi(setLoading, "employee/getMyJobDescription", setData);
  }, []);

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setEmployeeInfoSignature}
        value={employeeInfoSignature}
      />
      <NavWrapper title="JOB DESCRIPTION" isArrow={true} />
      {loading ? (
        <Loader />
      ) : (
        <Container className="full-width-container">
          <form className="w-100 text-start">
            <div
              dangerouslySetInnerHTML={{
                __html: data?.data?.data?.jobDescription,
              }}
            />
            <p className="fw-bold">
              Upon a successfully hiring process, my signature below indicates
              that I understand and agree to the duties of BEHAVIORAL HEALTH
              TECHNICIAN(BHT), and I have meet the stated qualifications,
              experience requirements, and can adequately perform duties
              prescribed or as stated in this job descriptions.
            </p>
            <div className="grid-container mb-3">
              <div className="grid-item long-input">
                <label>Employee Name:</label>
                <DefaultInput isBots={false} value={profile?.data?.fullName} />
              </div>
              <div className="grid-item long-input"></div>
              <div className="grid-item long-input d-block">
                <label>Employee Signature:</label>
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
                    {employeeInfoSignature && (
                      <p>Digitally Sign by {employeeInfoSignature} </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid-item" />
              <div className="grid-item">
                <label>Date:</label>
                <BorderlessInput
                  setState={setEmployeeInfoDate}
                  placeholder=""
                  type={"date"}
                  value={DateFormatter(employeeInfoDate)}
                />
              </div>
              <div className="grid-item full-wid-item">
                <label>
                  Please note: Job descriptions are not intended, and should not
                  be construed, to be exhaustive lists of all responsibilities,
                  skills and efforts. Nor are they intended to form contractual
                  relationships between the employee and the agency. Rather,
                  they are intended to be accurate reflections of the primary
                  elements of a job including, but not limited to, the essential
                  functions.
                </label>
              </div>
            </div>
          </form>
        </Container>
      )}
    </>
  );
};
