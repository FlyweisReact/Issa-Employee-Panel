/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import {
  BorderlessInput,
  DateFormatter,
  DefaultInput,
} from "../../../Helper/Makers";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Outer/HOC";
import { SignatureModal } from "../../../Mod/Modal";
import { downloadReport, fetchApi, postApi } from "../../../Repository/Apis";
import { getData } from "../../../components/api/api";
import Loader from "../../../components/Loader/Loader";
import { useReactToPrint } from "react-to-print";

const JobDescription = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [employeeInfoSignature, setEmployeeInfoSignature] = useState("");
  const [employeeInfoDate, setEmployeeInfoDate] = useState("");
  const [open, setOpen] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [ signTime , setSignTime ] = useState("")
  const [ signDate , setSignDate ] = useState("")

  useEffect(() => {
    getData(setProfile, "employee/getProfile");
    fetchApi(setLoading, "employee/getMyJobDescription", setData);
  }, []);

  const payload = {
    employeeInfoSignature,
    employeeInfoDate,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setSubmitLoading, "employee/updateJobDescription", payload);
  };

  // Download Report
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint2 = () => {
    downloadReport(handlePrint);
  };

  return (
    <>
      <div ref={componentRef}>
        <SignatureModal
          show={open}
          onHide={() => setOpen(false)}
          setValue={setEmployeeInfoSignature}
          value={employeeInfoSignature}
          setTime={setSignTime}
          setDate={setSignDate}
        />
        <NavWrapper title="JOB DESCRIPTION" isArrow={true} />
        {loading ? (
          <Loader />
        ) : (
          <Container className="full-width-container">
            <form className="w-100 text-start" onSubmit={submitHandler}>
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
                  <DefaultInput
                    isBots={false}
                    value={profile?.data?.fullName}
                  />
                </div>
                <div className="grid-item long-input"></div>
                <div className="grid-item long-input d-block">
                  <label>Employee Signature:</label>
                  <div className="custome-cloud-btn">
                    <div className="btns hidePrint">
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
                <div className="grid-item full-wid-input">
                  <label>
                    Please note: Job descriptions are not intended, and should
                    not be construed, to be exhaustive lists of all
                    responsibilities, skills and efforts. Nor are they intended
                    to form contractual relationships between the employee and
                    the agency. Rather, they are intended to be accurate
                    reflections of the primary elements of a job including, but
                    not limited to, the essential functions.
                  </label>
                </div>
              </div>
              <button
                className="print_btn hidePrint"
                type="button"
                onClick={handlePrint2}
              >
                PRINT REPORT
              </button>
              <div className="save-as-draft-btn123">
                <button className="btn1233" type="submit">
                  {submitLoading ? <ClipLoader color="#fff" /> : "SUBMIT"}
                </button>
              </div>
            </form>
          </Container>
        )}
      </div>
    </>
  );
};

export default HOC({ Wcomponenet: JobDescription, isNavbar: false });
