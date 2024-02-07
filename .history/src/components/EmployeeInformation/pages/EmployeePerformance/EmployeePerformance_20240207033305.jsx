/** @format */

import React, { useState } from "react";
import HOC2 from "../../layout/HOC2";
import { Form } from "react-bootstrap";
import { InputMaker, RadioMaker } from "../../../../Helper/Makers.js";

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

  const payload = {};

  return (
    <>
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
          <Form
            style={{ width: "100%" }}
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
              Employee Information:
            </p>

            <InputMaker
              label="Name"
              setState={setName}
              placeholder="Enter Name"
              type="text"
              value={name}
            />

            <InputMaker
              label="Date"
              setState={setEmployeeDate}
              placeholder=""
              type="date"
              value={employeeDate}
            />

            <InputMaker
              label="Job Title"
              setState={setEmployeeJobTitle}
              placeholder=""
              type="text"
              value={employeeJobTitle}
            />
            <InputMaker
              label="Manager"
              setState={setEmployeeManager}
              placeholder=""
              type="text"
              value={employeeManager}
            />
            <InputMaker
              label="Manager"
              setState={setEmployeeManager}
              placeholder=""
              type="text"
              value={employeeManager}
            />

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Type of Review
              </Form.Label>
              <div className="Radio_btns">
                <div className="btns d-block">
                  <RadioMaker
                    name="Reviews"
                    setValue={setTypeOfReview}
                    value={"6 month"}
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
            </Form.Group>

            <InputMaker
              label="Hire Date"
              setState={setEmployeeHireDate}
              placeholder=""
              type="date"
              value={employeeHireDate}
            />

            <p>Review Period:</p>
            <p style={{ textAlign: "center" }}>Rating Criteria</p>
            <p style={{ opacity: "60%" }}>
              (5) Outstanding: Performance in this area is far exceeded
              expectations and requirements <br /> (4) Exceed Expectations:
              Accomplished more than expected <br /> (3)Meets Expectations:
              Fully competent, consistently meets requirements and expectations{" "}
              <br /> (2) Needs Improvement: Requires significant amount of
              guidance and supervision <br /> (1) Expectation not met: Improve
              in all areas is needed
            </p>
            <p style={{ fontWeight: "bold" }}>Ratings:</p>
            <p>Factors </p>

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

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Overall Rating – Rate employee’s overall performance in
                comparison to position duties and responsibilities.
              </Form.Label>
              <Form.Control type="text" rows="3" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Evaluation:
              </Form.Label>
              <Form.Control type="text" rows="3" placeholder="Enter  text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Additional Comments:
              </Form.Label>
              <Form.Control type="text" rows="3" placeholder="Enter  text" />
            </Form.Group>
            <p style={{ fontWeight: "500" }}>
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Verification of Review:
              </span>{" "}
              By signing this form, you confirm that you have discussed this
              review in detail with your supervisor. Signing this form does not
              necessarily indicate that you agree with this evaluation.
            </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employee Name:
              </Form.Label>
              <Form.Control type="text" rows="3" placeholder="Enter  text" />
            </Form.Group>
            <p>Signature</p>
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
                Date:
              </Form.Label>
              <Form.Control type="date" rows="3" placeholder="Enter  text" />
            </Form.Group>

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

export default HOC2(EmployeePerformance);
