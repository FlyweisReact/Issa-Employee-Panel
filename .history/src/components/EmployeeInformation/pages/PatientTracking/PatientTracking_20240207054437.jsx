/** @format */
import { useState, useEffect } from "react";
import HOC2 from "../../layout/HOC2";
import { Form, ProgressBar } from "react-bootstrap";
import { postApi } from "../../../../Repository/Apis";
import { getData } from "../../../api/api";
import { InputMaker, SelectMaker } from "../../../../Helper/Makers";

const PatientTracking = () => {
  const [patientId, setPatientId] = useState("");
  const [tbTest, setTbTest] = useState("");
  const [tbTestDate, setTbTestDate] = useState("");
  const [tbTestExpire, setTbTestExpire] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [initialAssessment, setInitialAssessment] = useState("");
  const [nursingAssessment, setNursingAssessment] = useState("");
  const [treatmentPlanReviewDate, setTreatmentPlanReviewDate] = useState("");
  const [treatmentPlanTestDate, setTreatmentPlanTestDate] = useState("");
  const [treatmentPlanTestExpire, setTreatmentPlanTestExpire] = useState("");
  const [treatmentPlanExpireDate, setTreatmentPlanExpireDate] = useState("");
  const [staffing, setStaffing] = useState("");
  const [fluShot, setFluShot] = useState("");
  const [otherTestDate, setOtherTestDate] = useState("");
  const [otherTestExpire, setOtherTestExpire] = useState("");
  const [otherExpireDate, setOtherExpireDate] = useState("");
  const [timeOffRequestApproved, setTimeOffRequestApproved] = useState("");
  const [note, setNote] = useState("");
  const [signature, setSignature] = useState("");
  const [additionalDocument, setAdditionalDocument] = useState("");
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const payload = {
    patientId,
    tbTest,
    tbTestDate,
    tbTestExpire,
    expireDate,
    initialAssessment,
    nursingAssessment,
    treatmentPlanReviewDate,
    treatmentPlanTestDate,
    treatmentPlanTestExpire,
    treatmentPlanExpireDate,
    staffing,
    fluShot,
    otherTestDate,
    otherExpireDate,
    otherTestExpire,
    timeOffRequestApproved,
    note,
    signature,
    additionalDocument,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, `employee/createPatientTracking`, payload);
  };

  return (
    <>
      <div className="nav-wrap-personal ">
        <div className="nav-div-personal" style={{ width: "100%" }}>
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            PATIENT TRACKING
          </p>
          <p></p>
        </div>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <div>
          <Form className="w-100 text-start">
            <SelectMaker
              setValue={setPatientId}
              options={patients?.data?.map((i) => ({
                value: i._id,
                label: i.fullName,
              }))}
              label="Patient Name"
              value={patientId}
            />
            <InputMaker
              label="TB Test "
              setState={setTbTest}
              placeholder=""
              type=""
              value={tbTest}
            />
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                TB Test (Annually) :
              </Form.Label>
              <Form.Control type="text" placeholder="Enter text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <p>Expiration Date</p>{" "}
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={100}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`12 December`}
              />
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Initial assessment (Admission day) :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  dATE" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Nursing assessment (Admission day):
              </Form.Label>
              <Form.Control type="date" placeholder="Enter text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Treatment Plan Review date (Per Treatment Pla):
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <p>Expiration Date</p>{" "}
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>{" "}
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Staffing (Monthly) :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  dATE" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Vacation/Personal time used:
              </Form.Label>
              <Form.Control type="date" placeholder="Enter text" />
            </Form.Group>
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <p>Expiration Date</p>{" "}
            <div
              style={{
                maxWidth: "250px",
                margin: "auto",
                marginBottom: "1rem",
                maxHeight: "40px",
              }}
            >
              <ProgressBar
                now={60}
                style={{
                  borderRadius: "50px",
                  textAlign: "center",
                  backgroundColor: "#424242",

                  overflow: "hidden",
                  color: "#1A9FB2",
                  opacity: "90%",
                  border: "none",
                  height: "40px",
                }}
                label={`Nov 27 - Dec 02`}
              />
            </div>
            <p>For Administrator</p>
            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  marginRight: "10px",
                }}
              >
                Time off request approved:
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label style={{ marginRight: "15px" }}>
                    Yes
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check type={"radio"} id={`check-api-no`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label>No</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <p style={{ opacity: "60%" }}>Notes</p>
            <hr className="mb-8" />
            <hr className="mb-3" />
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Upload additional documents:
              </Form.Label>
              <Form.Control type="file" rows="3" placeholder="Enter  text" />
            </Form.Group>
            <div
              style={{ maxWidth: "370px", width: "auto" }}
              className="save-as-draft-btn-personal"
            >
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
            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "2px",
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

export default HOC2(PatientTracking);
