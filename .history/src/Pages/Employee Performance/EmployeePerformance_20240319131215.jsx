/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import {
  BorderlessInput,
  DateFormatter,
  InputMaker,
  RadioMaker,
} from "../../Helper/Makers.js";
import { SignatureModal } from "../../Mod/Modal";
import { DateInMMDDYY, downloadReport, postApi } from "../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import HOC from "../../Layout/Inner/HOC.js";
import NavWrapper from "../../Helper/NavWrapper.js";
import { getData } from "../../components/api/api.js";
import { useReactToPrint } from "react-to-print";

const EmployeePerformance = () => {
  const [name, setName] = useState("");
  const [employeeDate, setEmployeeDate] = useState("");
  const [employeeJobTitle, setEmployeeJobTitle] = useState("");
  const [employeeManager, setEmployeeManager] = useState("");
  const [typeOfReview, setTypeOfReview] = useState("sixMonth");
  const [employeeHireDate, setEmployeeHireDate] = useState("");
  const [
    ratingsPerformanceAndQualityOfWork,
    setRatingsPerformanceAndQualityOfWork,
  ] = useState(5);
  const [ratingsCommunication, setRatingsCommunication] = useState(5);
  const [ratingsProfessionalism, setRatingsProfessionalism] = useState(5);
  const [ratingsAttendanceAndPunctuality, setRatingsAttendanceAndPunctuality] =
    useState(5);
  const [ratingsTimeManagement, setRatingsTimeManagement] = useState(5);
  const [ratingsReliabilityDependability, setRatingsReliabilityDependability] =
    useState(5);
  const [overallRating, setOverallRating] = useState(4);
  const [evaluation, setEvaluation] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [administratorName, setAdministratorName] = useState("");
  const [administratorSignature, setAdministratorSignature] = useState("");
  const [open2, setOpen2] = useState(false);
  const [employeeModalDate, setEmployeeModalDate] = useState("");
  const [employeeTime, setEmployeeTime] = useState("");
  const [administratorDate, setAdministratorDate] = useState("");
  const [administratorTime, setAdministratorTime] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState();

  const payload = {
    administratorSignature  ,
    administratorDate
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
    employeeName: name,
    employeeSignature,
  };

  const fetchHandler = () => {
    getData(setDetails, "employee/getAllEmployeePerformanceReview");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await postApi(
      setLoading,
      `employee/createEmployeePerformanceReview`,
      payload
    );
    fetchHandler();
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (details) {
      const item = details?.data;
      setName(item?.name);
      setEmployeeDate(item?.employeeDate);
      setEmployeeJobTitle(item?.employeeJobTitle);
      setEmployeeManager(item?.employeeManager);
      setTypeOfReview(item?.typeOfReview);
      setEmployeeHireDate(item?.employeeHireDate);
      setRatingsPerformanceAndQualityOfWork(
        item?.ratingsPerformanceAndQualityOfWork
      );
      setRatingsCommunication(item?.ratingsCommunication);
      setRatingsProfessionalism(item?.ratingsProfessionalism);
      setRatingsAttendanceAndPunctuality(item?.ratingsAttendanceAndPunctuality);
      setRatingsTimeManagement(item?.ratingsTimeManagement);
      setRatingsReliabilityDependability(item?.ratingsReliabilityDependability);
      setOverallRating(item?.overallRating);
      setEvaluation(item?.evaluation);
      setAdditionalComments(item?.additionalComments);
      setEmployeeSignature(item?.employeeSignature);
    }
  }, [details]);

  const componentRef = useRef();
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
          setValue={setEmployeeSignature}
          value={employeeSignature}
          setDate={setEmployeeModalDate}
          setTime={setEmployeeTime}
        />
        <SignatureModal
          show={open2}
          onHide={() => setOpen2(false)}
          setValue={setAdministratorSignature}
          value={administratorSignature}
          setDate={setAdministratorDate}
          setTime={setAdministratorTime}
        />
        <NavWrapper title={"EMPLOYEE PERFORMANCE REVIEW"} />

        <Container className="full-width-container">
          <form className="w-100 text-start" onSubmit={submitHandler}>
            <p className="text-desc fw-bold">Employee Information:</p>
            <div className="grid-container">
              <div className="grid-item">
                <label>Name:</label>
                <BorderlessInput
                  setState={setName}
                  placeholder={""}
                  type={"text"}
                  value={name}
                />
              </div>
              <div className="grid-item long-input" />
              <div className="grid-item">
                <label>Date:</label>
                <BorderlessInput
                  setState={setEmployeeDate}
                  placeholder={""}
                  type={"date"}
                  value={DateFormatter(employeeDate)}
                />
              </div>
              <div className="grid-item">
                <label>Job Title:</label>
                <BorderlessInput
                  setState={setEmployeeJobTitle}
                  placeholder={""}
                  type={"text"}
                  value={employeeJobTitle}
                />
              </div>
              <div className="grid-item long-input" />
              <div className="grid-item">
                <label>Manager:</label>
                <BorderlessInput
                  setState={setEmployeeManager}
                  placeholder={""}
                  type={"text"}
                  value={employeeManager}
                />
              </div>

              <div className="grid-item long-input">
                <label>Type of Review:</label>
                <div className="Radio_btns">
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
                </div>
              </div>
              <div className="grid-item"></div>
              <div className="grid-item">
                <label>Hire Date:</label>
                <BorderlessInput
                  setState={setEmployeeHireDate}
                  placeholder={""}
                  type={"date"}
                  value={DateFormatter(employeeHireDate)}
                />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-desc fw-bold">Review Period:</p>
              <p className="fw-bold text-center">Rating Criteria</p>
              <p className="fw-bold text-start">
                (5) Outstanding: Performance in this area is far exceeded
                expectations and requirements <br /> (4) Exceed Expectations:
                Accomplished more than expected <br /> (3)Meets Expectations:
                Fully competent, consistently meets requirements and
                expectations <br /> (2) Needs Improvement: Requires significant
                amount of guidance and supervision
                <br />
                (1) Expectation not met: Improve in all areas is needed
              </p>
              <p className="text-start fw-bold">Ratings:</p>
            </div>
            <div className="grid-container">
              <div className="grid-item full-wid-input">
                <label>
                  Performance and Quality of work ( work is completed without
                  guidance of supervision, work is completed accurately and met
                  within deadline)
                </label>
                <div className="Radio_btns ml-5">
                  <div className="btns">
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
                </div>
              </div>

              <div className="grid-item full-wid-input">
                <label>
                  Communication (positive interaction with staff, management,
                  and other employees. Communicate essential information
                  relating to patient care and employment. Written and oral
                  communications are clear and effective.)
                </label>
                <div className="Radio_btns ml-5">
                  <div className="btns">
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
                </div>
              </div>

              <div className="grid-item full-wid-input">
                <label>
                  Professionalism (employee maintains professionalism when
                  dealing with staff, residents, and others)
                </label>
                <div className="Radio_btns ml-5">
                  <div className="btns">
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
                </div>
              </div>

              <div className="grid-item full-wid-input">
                <label>
                  Attendance and Punctuality (employee is punctual to work.
                  Employee notifies supervisor ahead of time in the case of
                  absence. Employee always shows up to work)
                </label>
                <div className="Radio_btns ml-5">
                  <div className="btns">
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
                </div>
              </div>

              <div className="grid-item full-wid-input">
                <label>
                  Time management (time management in completing task and
                  meeting deadline)
                </label>
                <div className="Radio_btns ml-5">
                  <div className="btns">
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
                </div>
              </div>

              <div className="grid-item full-wid-input">
                <label>
                  Reliaility/Depedendability (manage workload effectively.
                  Willing to assist others. Goes over and beyond to ensure task
                  is completed)
                </label>
                <div className="Radio_btns ml-5">
                  <div className="btns">
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
                </div>
              </div>
              <div className="grid-item full-wid-input">
                <label>
                  Overall Rating – Rate employee’s overall performance in
                  comparison to position duties and responsibilities.
                </label>
                <BorderlessInput
                  setState={setOverallRating}
                  placeholder={""}
                  type={"number"}
                  value={overallRating}
                />
              </div>

              <div className="grid-item long-input">
                <label>Evaluation:</label>
                <BorderlessInput
                  setState={setEvaluation}
                  placeholder={""}
                  type={"text"}
                  value={evaluation}
                />
              </div>
              <div className="grid-item long-input">
                <label>Additional Comments:</label>
                <BorderlessInput
                  setState={setAdditionalComments}
                  placeholder={""}
                  type={"text"}
                  value={additionalComments}
                />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-desc fw-bold">Verification of Review:</p>
              <p className="fw-bold text-start">
                By signing this form, you confirm that you have discussed this
                review in detail with your supervisor. Signing this form does
                not necessarily indicate that you agree with this evaluation.{" "}
              </p>
            </div>
            <div className="grid-container">
              <div className="grid-item">
                <label>Administrator Name:</label>
                <BorderlessInput
                  setState={setAdministratorName}
                  placeholder={""}
                  type={"text"}
                  value={administratorName}
                />
              </div>
              <div className="grid-item full-wid-input d-block">
                <label>Employee Signautre:</label>
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
                      <p>
                        Digitally Sign by {employeeSignature}{" "}
                        {employeeModalDate && DateInMMDDYY(employeeModalDate)}{" "}
                        {employeeTime}{" "}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid-item full-wid-input d-block">
                <label>Administrator Signautre:</label>
                <div className="custome-cloud-btn">
                  <div className="btns">
                    <button className="draft"> SAVE AS DRAFT</button>
                    <button
                      type="button"
                      onClick={() => setOpen2(true)}
                      className="signed"
                    >
                      {" "}
                      SAVED AND SIGNED
                    </button>
                  </div>
                  <div>
                    {administratorSignature && (
                      <p>
                        Digitally Sign by {administratorSignature}{" "}
                        {administratorDate && DateInMMDDYY(administratorDate)}{" "}
                        {administratorTime}{" "}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button
              className="print_btn hidePrint"
              type="button"
              onClick={handlePrint2}
            >
              PRINT REPORT
            </button>
            <button className="employee_create_btn hidePrint" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default HOC(EmployeePerformance);
