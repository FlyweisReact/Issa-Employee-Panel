/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HOC2 from "../../layout/HOC2";
import { Form, Offcanvas } from "react-bootstrap";
import { IoIosMenu } from "react-icons/io";
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
              <div className="btns"></div>
              <span>
                <RadioMaker
                  name="Reviews"
                  setValue={setTypeOfReview}
                  value={"6 month"}
                  id={"6month"}
                  label={"6 month"}
                  checked={typeOfReview}
                />
              </span>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Hire Date:
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
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
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Performance and Quality of work ( work is completed without
                guidance of supervision, work is completed accurately and met
                within deadline)
              </Form.Label>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    5
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    4
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    3
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    2
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    1
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Communication (positive interaction with staff, management, and
                other employees. Communicate essential information relating to
                patient care and employment. Written and oral communications are
                clear and effective.)
              </Form.Label>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    5
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    4
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    3
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    2
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    1
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Professionalism (employee maintains professionalism when dealing
                with staff, residents, and others)
              </Form.Label>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    5
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    4
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    3
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    2
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    1
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Attendance and Punctuality (employee is punctual to work.
                Employee notifies supervisor ahead of time in the case of
                absence. Employee always shows up to work)
              </Form.Label>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    5
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    4
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    3
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    2
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    1
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Time management (time management in completing task and meeting
                deadline)
              </Form.Label>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    5
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    4
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    3
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    2
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    1
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Reliaility/Depedendability (manage workload effectively. Willing
                to assist others. Goes over and beyond to ensure task is
                completed)
              </Form.Label>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    5
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    4
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    3
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    2
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    1
                  </Form.Check.Label>
                </Form.Check>
              </div>
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
