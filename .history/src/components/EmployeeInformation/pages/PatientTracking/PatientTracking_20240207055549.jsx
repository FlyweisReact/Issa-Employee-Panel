/** @format */
import { useState, useEffect } from "react";
import HOC2 from "../../layout/HOC2";
import { Form, ProgressBar } from "react-bootstrap";
import { postApi } from "../../../../Repository/Apis";
import { getData } from "../../../api/api";
import {
  InputMaker,
  RadioMaker,
  SelectMaker,
  TextareaMaker,
} from "../../../../Helper/Makers";

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
  const [timeOffRequestApproved, setTimeOffRequestApproved] = useState(false);
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

  const Pro = () => {
    return (
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
    );
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
              label="TB Test"
              setState={setTbTest}
              placeholder="Enter text"
              type="text"
              value={tbTest}
            />
            <Pro />
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
            <InputMaker
              label="Initial assessment"
              setState={setInitialAssessment}
              placeholder=""
              type="date"
              value={initialAssessment}
            />
            <InputMaker
              label="Nursing assessment"
              setState={setNursingAssessment}
              placeholder=""
              type="date"
              value={nursingAssessment}
            />
            <InputMaker
              label="Treatment Plan Review date"
              setState={setTreatmentPlanReviewDate}
              placeholder=""
              type="date"
              value={treatmentPlanReviewDate}
            />
            <Pro />
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
            <InputMaker
              label="Staffing"
              setState={setStaffing}
              placeholder=""
              type="text"
              value={staffing}
            />
            <InputMaker
              label="Flu Shot"
              setState={setFluShot}
              placeholder=""
              type="text"
              value={fluShot}
            />
            <Pro />
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
                For Administrator
              </Form.Label>
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Form.Label className="Radio_btns">
                <span style={{ marginRight: "10px" }}>
                  Time off request approved
                </span>
                <div className="btns">
                  <RadioMaker
                    name="residentCompletedSession"
                    setValue={setTimeOffRequestApproved}
                    value={true}
                    id={"residentCompletedSession1"}
                    label={"Yes"}
                    checked={timeOffRequestApproved}
                  />
                  <RadioMaker
                    name="residentCompletedSession"
                    setValue={setTimeOffRequestApproved}
                    value={false}
                    id={"residentCompletedSession2"}
                    label={"No"}
                    checked={!timeOffRequestApproved}
                  />
                </div>
              </Form.Label>
            </Form.Group>
            <div className="bottom_text">
              <TextareaMaker
                label={"Notes"}
                setValue={setNote}
                value={note}
                placeholder=""
                row={2}
              />
            </div>
  
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Upload additional documents
              </Form.Label>
              <Form.Control type="file"  onChange={(e) => setAdditionalDocument(e.tar)}  />
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
