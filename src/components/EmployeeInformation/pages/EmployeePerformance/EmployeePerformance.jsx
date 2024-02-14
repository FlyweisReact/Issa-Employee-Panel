/** @format */

import React, { useState } from "react";
import HOC2 from "../../layout/HOC2";
import { Form } from "react-bootstrap";
import {
  BorderlessInput,
  DateFormatter,
  InputMaker,
  RadioMaker,
} from "../../../../Helper/Makers.js";
import { SignatureModal } from "../../../../Mod/Modal";
import { postApi } from "../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";

const EmployeePerformance = () => {
  const [name, setName] = useState("");
  const [employeeDate, setEmployeeDate] = useState("");
  const [employeeJobTitle, setEmployeeJobTitle] = useState("");
  const [employeeManager, setEmployeeManager] = useState("");
  const [typeOfReview, setTypeOfReview] = useState("");
  const [employeeHireDate, setEmployeeHireDate] = useState("");
  const [
    ratingsPerformanceAndQualityOfWork,
    setRatingsPerformanceAndQualityOfWork,
  ] = useState(5);
  const [ratingsCommunication, setRatingsCommunication] = useState(4);
  const [ratingsProfessionalism, setRatingsProfessionalism] = useState(3);
  const [ratingsAttendanceAndPunctuality, setRatingsAttendanceAndPunctuality] =
    useState(4);
  const [ratingsTimeManagement, setRatingsTimeManagement] = useState(5);
  const [ratingsReliabilityDependability, setRatingsReliabilityDependability] =
    useState(4);
  const [overallRating, setOverallRating] = useState(4);
  const [evaluation, setEvaluation] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [date, setDate] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const payload = {
    name,
    employeeDate,
    employeeJobTitle,
    employeeManager,
    typeOfReview,
    employeeHireDate,
    ratingsPerformanceAndQualityOfWork,
    ratingsCommunication,
    ratingsProfessionalism,
    ratingsAttendanceAndPunctuality,
    ratingsTimeManagement,
    ratingsReliabilityDependability,
    overallRating,
    evaluation,
    additionalComments,
    employeeName,
    employeeSignature,
    date,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, `employee/createEmployeePerformanceReview`, payload);
  };

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setEmployeeSignature}
        value={employeeSignature}
        text={"Digitally Sign by employee name"}
      />
      <div className="nav-wrap-personal ">
        <div
          className="nav-div-personal"
          style={{ width: "100%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            EMPLOYEE PERFORMANCE REVIEW
          </p>
          <p></p>
        </div>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <div>
          <Form className="w-100 text-start" onSubmit={submitHandler}>
            <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Employee Information:
            </p>

            <div className="wraaped_div mb-3">
              <div className="Main half-width">
                <span className="label">Name:</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setName}
                    placeholder={""}
                    type={"text"}
                    value={name}
                  />
                </span>
              </div>
              <div className="Main half-width">
                <span className="label">Date:</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setEmployeeDate}
                    placeholder={""}
                    type={"date"}
                    value={DateFormatter(employeeDate)}
                  />
                </span>
              </div>
              <div className="Main half-width">
                <span className="label">Hire Date:</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setEmployeeHireDate}
                    placeholder={""}
                    type={"date"}
                    value={DateFormatter(employeeHireDate)}
                  />
                </span>
              </div>
            </div>

            <div className="wraaped_div mb-3">
              <div className="Main half-width">
                <span className="label">Job Title:</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setEmployeeJobTitle}
                    placeholder={""}
                    type={"text"}
                    value={employeeJobTitle}
                  />
                </span>
              </div>
              <div className="Main half-width">
                <span className="label">Manager:</span>
                <span className="Input_span">
                  <BorderlessInput
                    setState={setEmployeeManager}
                    placeholder={""}
                    type={"text"}
                    value={DateFormatter(employeeManager)}
                  />
                </span>
              </div>
            </div>

            <Form.Group className="mb-3">
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>Type of Review</span>
                <div className="btns">
                  <RadioMaker
                    name="Reviews"
                    setValue={setTypeOfReview}
                    value={"sixMonth"}
                    id={"6month"}
                    label={"6 month"}
                    checked={typeOfReview}
                  />
                  <RadioMaker
                    name="Reviews"
                    setValue={setTypeOfReview}
                    value={"Annual"}
                    id={"Annual"}
                    label={"Annual"}
                    checked={typeOfReview}
                  />
                  <RadioMaker
                    name="Reviews"
                    setValue={setTypeOfReview}
                    value={"Other"}
                    id={"Other"}
                    label={"Other"}
                    checked={typeOfReview}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <div>
              <p>Review Period:</p>
              <p style={{ textAlign: "center" }}>Rating Criteria</p>
              <p style={{ opacity: "60%" }}>
                (5) Outstanding: Performance in this area is far exceeded
                expectations and requirements <br /> (4) Exceed Expectations:
                Accomplished more than expected <br /> (3)Meets Expectations:
                Fully competent, consistently meets requirements and
                expectations <br /> (2) Needs Improvement: Requires significant
                amount of guidance and supervision <br /> (1) Expectation not
                met: Improve in all areas is needed
              </p>
              <p style={{ fontWeight: "bold" }}>Ratings:</p>
              <p>Factors </p>
            </div>

            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label className="Radio_btns d-block">
                <span style={{ marginRight: "10px" }}>
                  Performance and Quality of work ( work is completed without
                  guidance of supervision, work is completed accurately and met
                  within deadline)
                </span>
                <div className="btns mt-2 ">
                  <RadioMaker
                    name="performance"
                    setValue={setRatingsPerformanceAndQualityOfWork}
                    value={5}
                    id={"performance5"}
                    label={"5"}
                    checked={ratingsPerformanceAndQualityOfWork}
                  />
                  <RadioMaker
                    name="performance"
                    setValue={setRatingsPerformanceAndQualityOfWork}
                    value={4}
                    id={"performance4"}
                    label={"4"}
                    checked={ratingsPerformanceAndQualityOfWork}
                  />
                  <RadioMaker
                    name="performance"
                    setValue={setRatingsPerformanceAndQualityOfWork}
                    value={3}
                    id={"performance3"}
                    label={"3"}
                    checked={ratingsPerformanceAndQualityOfWork}
                  />
                  <RadioMaker
                    name="performance"
                    setValue={setRatingsPerformanceAndQualityOfWork}
                    value={2}
                    id={"performance2"}
                    label={"2"}
                    checked={ratingsPerformanceAndQualityOfWork}
                  />
                  <RadioMaker
                    name="performance"
                    setValue={setRatingsPerformanceAndQualityOfWork}
                    value={1}
                    id={"performance1"}
                    label={"1"}
                    checked={ratingsPerformanceAndQualityOfWork}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label className="Radio_btns d-block">
                <span style={{ marginRight: "10px" }}>
                  Communication (positive interaction with staff, management,
                  and other employees. Communicate essential information
                  relating to patient care and employment. Written and oral
                  communications are clear and effective.)
                </span>
                <div className="btns mt-2 ">
                  <RadioMaker
                    name="communication"
                    setValue={setRatingsCommunication}
                    value={5}
                    id={"communication5"}
                    label={"5"}
                    checked={ratingsCommunication}
                  />
                  <RadioMaker
                    name="communication"
                    setValue={setRatingsCommunication}
                    value={4}
                    id={"communication4"}
                    label={"4"}
                    checked={ratingsCommunication}
                  />
                  <RadioMaker
                    name="communication"
                    setValue={setRatingsCommunication}
                    value={3}
                    id={"communication3"}
                    label={"3"}
                    checked={ratingsCommunication}
                  />
                  <RadioMaker
                    name="communication"
                    setValue={setRatingsCommunication}
                    value={2}
                    id={"communication2"}
                    label={"2"}
                    checked={ratingsCommunication}
                  />
                  <RadioMaker
                    name="communication"
                    setValue={setRatingsCommunication}
                    value={1}
                    id={"communication1"}
                    label={"1"}
                    checked={ratingsCommunication}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label className="Radio_btns d-block">
                <span style={{ marginRight: "10px" }}>
                  Professionalism (employee maintains professionalism when
                  dealing with staff, residents, and others)
                </span>
                <div className="btns mt-2 ">
                  <RadioMaker
                    name="ratingsProfessionalism"
                    setValue={setRatingsProfessionalism}
                    value={5}
                    id={"ratingsProfessionalism5"}
                    label={"5"}
                    checked={ratingsProfessionalism}
                  />
                  <RadioMaker
                    name="ratingsProfessionalism"
                    setValue={setRatingsProfessionalism}
                    value={4}
                    id={"ratingsProfessionalism4"}
                    label={"4"}
                    checked={ratingsProfessionalism}
                  />
                  <RadioMaker
                    name="ratingsProfessionalism"
                    setValue={setRatingsProfessionalism}
                    value={3}
                    id={"ratingsProfessionalism3"}
                    label={"3"}
                    checked={ratingsProfessionalism}
                  />
                  <RadioMaker
                    name="ratingsProfessionalism"
                    setValue={setRatingsProfessionalism}
                    value={2}
                    id={"ratingsProfessionalism2"}
                    label={"2"}
                    checked={ratingsProfessionalism}
                  />
                  <RadioMaker
                    name="ratingsProfessionalism"
                    setValue={setRatingsProfessionalism}
                    value={1}
                    id={"ratingsProfessionalism1"}
                    label={"1"}
                    checked={ratingsProfessionalism}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label className="Radio_btns d-block">
                <span style={{ marginRight: "10px" }}>
                  <strong>Attendance and Punctuality</strong> (employee is
                  punctual to work. Employee notifies supervisor ahead of time
                  in the case of absence. Employee always shows up to work)
                </span>
                <div className="btns mt-2 ">
                  <RadioMaker
                    name="ratingsAttendanceAndPunctuality"
                    setValue={setRatingsAttendanceAndPunctuality}
                    value={5}
                    id={"ratingsAttendanceAndPunctuality5"}
                    label={"5"}
                    checked={ratingsAttendanceAndPunctuality}
                  />
                  <RadioMaker
                    name="ratingsAttendanceAndPunctuality"
                    setValue={setRatingsAttendanceAndPunctuality}
                    value={4}
                    id={"ratingsAttendanceAndPunctuality4"}
                    label={"4"}
                    checked={ratingsAttendanceAndPunctuality}
                  />
                  <RadioMaker
                    name="ratingsAttendanceAndPunctuality"
                    setValue={setRatingsAttendanceAndPunctuality}
                    value={3}
                    id={"ratingsAttendanceAndPunctuality3"}
                    label={"3"}
                    checked={ratingsAttendanceAndPunctuality}
                  />
                  <RadioMaker
                    name="ratingsAttendanceAndPunctuality"
                    setValue={setRatingsAttendanceAndPunctuality}
                    value={2}
                    id={"ratingsAttendanceAndPunctuality2"}
                    label={"2"}
                    checked={ratingsAttendanceAndPunctuality}
                  />
                  <RadioMaker
                    name="ratingsAttendanceAndPunctuality"
                    setValue={setRatingsAttendanceAndPunctuality}
                    value={1}
                    id={"ratingsAttendanceAndPunctuality1"}
                    label={"1"}
                    checked={ratingsAttendanceAndPunctuality}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label className="Radio_btns d-block">
                <span style={{ marginRight: "10px" }}>
                  Time management (time management in completing task and
                  meeting deadline)
                </span>
                <div className="btns mt-2 ">
                  <RadioMaker
                    name="ratingsTimeManagement"
                    setValue={setRatingsTimeManagement}
                    value={5}
                    id={"ratingsTimeManagement5"}
                    label={"5"}
                    checked={ratingsTimeManagement}
                  />

                  <RadioMaker
                    name="ratingsTimeManagement"
                    setValue={setRatingsTimeManagement}
                    value={4}
                    id={"ratingsTimeManagement4"}
                    label={"4"}
                    checked={ratingsTimeManagement}
                  />

                  <RadioMaker
                    name="ratingsTimeManagement"
                    setValue={setRatingsTimeManagement}
                    value={3}
                    id={"ratingsTimeManagement3"}
                    label={"3"}
                    checked={ratingsTimeManagement}
                  />

                  <RadioMaker
                    name="ratingsTimeManagement"
                    setValue={setRatingsTimeManagement}
                    value={2}
                    id={"ratingsTimeManagement2"}
                    label={"2"}
                    checked={ratingsTimeManagement}
                  />

                  <RadioMaker
                    name="ratingsTimeManagement"
                    setValue={setRatingsTimeManagement}
                    value={1}
                    id={"ratingsTimeManagement1"}
                    label={"1"}
                    checked={ratingsTimeManagement}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label className="Radio_btns d-block">
                <span style={{ marginRight: "10px" }}>
                  Reliaility/Depedendability (manage workload effectively.
                  Willing to assist others. Goes over and beyond to ensure task
                  is completed)
                </span>
                <div className="btns mt-2 ">
                  <RadioMaker
                    name="ratingsReliabilityDependability"
                    setValue={setRatingsReliabilityDependability}
                    value={5}
                    id={"ratingsReliabilityDependability5"}
                    label={"5"}
                    checked={ratingsReliabilityDependability}
                  />

                  <RadioMaker
                    name="ratingsReliabilityDependability"
                    setValue={setRatingsReliabilityDependability}
                    value={4}
                    id={"ratingsReliabilityDependability4"}
                    label={"4"}
                    checked={ratingsReliabilityDependability}
                  />

                  <RadioMaker
                    name="ratingsReliabilityDependability"
                    setValue={setRatingsReliabilityDependability}
                    value={3}
                    id={"ratingsReliabilityDependability3"}
                    label={"3"}
                    checked={ratingsReliabilityDependability}
                  />

                  <RadioMaker
                    name="ratingsReliabilityDependability"
                    setValue={setRatingsReliabilityDependability}
                    value={2}
                    id={"ratingsReliabilityDependability2"}
                    label={"2"}
                    checked={ratingsReliabilityDependability}
                  />

                  <RadioMaker
                    name="ratingsReliabilityDependability"
                    setValue={setRatingsReliabilityDependability}
                    value={1}
                    id={"ratingsReliabilityDependability1"}
                    label={"1"}
                    checked={ratingsReliabilityDependability}
                  />
                </div>
              </Form.Label>
            </Form.Group>

            <InputMaker
              label="Overall Rating – Rate employee’s overall performance in comparison to position duties and responsibilities."
              setState={setOverallRating}
              placeholder=""
              type="number"
              value={overallRating}
            />

            <InputMaker
              label="Evaluation"
              setState={setEvaluation}
              placeholder=""
              type="text"
              value={evaluation}
            />
            <InputMaker
              label="Additional Comments"
              setState={setAdditionalComments}
              placeholder=""
              type="text"
              value={additionalComments}
            />

            <p style={{ fontWeight: "500" }}>
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Verification of Review:
              </span>{" "}
              By signing this form, you confirm that you have discussed this
              review in detail with your supervisor. Signing this form does not
              necessarily indicate that you agree with this evaluation.
            </p>

            <InputMaker
              label="Employee Name "
              setState={setEmployeeName}
              placeholder=""
              type="text"
              value={employeeName}
            />

            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="signed"
                >
                  {" "}
                  SAVED AND SIGNED
                </button>
              </div>
              <div>
                {employeeSignature && (
                  <p>Digitally Sign by {employeeSignature} </p>
                )}
              </div>
            </div>

            <InputMaker
              label="Date"
              setState={setDate}
              placeholder=""
              type="date"
              value={date}
            />

            <InputMaker
              label="Administrator  Name "
              setState={setEmployeeName}
              placeholder=""
              type="text"
              value={employeeName}
            />

            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button type="button" className="signed">
                  {" "}
                  SAVED AND SIGNED
                </button>
              </div>
            </div>

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
                {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default HOC2(EmployeePerformance);
