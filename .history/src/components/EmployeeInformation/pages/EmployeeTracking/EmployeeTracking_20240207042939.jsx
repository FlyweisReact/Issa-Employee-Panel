/** @format */
import { useState } from "react";
import HOC2 from "../../layout/HOC2";
import { Form, ProgressBar } from "react-bootstrap";

const ProgressBarComp = () => {
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

const EmployeeTracking = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [CPRFirstAid, setCPRFirstAid] = useState("");
  const [TBTestChestXray, setTBTestChestXray] = useState("");
  const [TBtestQuestionnaire, setTBTestQuestionnaire] = useState("");
  const [FingerprintClearanceCard, setFingerprintClearanceCard] = useState("");
  const [InfectiousControlTraining, setInfectiousControlTraining] =
    useState("");
  const [TBAnnualEducation, setTBAnnualEducation] = useState("");
  const [FallPreventionandFallRecovery, setFallPreventionandFallRecovery] =
    useState("");
  const [APSSearch, setAPSSearch] = useState("");
  const [CPIPreventionandControl, setCPIPreventionandControl] = useState("");
  const [Annualabuseandneglecttraining, setAnnualabuseandneglecttraining] =
    useState("");
  const [vacationPersonalTimeUsed, setVacationPersonalTimeUsed] = useState("");

  const payload = {
    employeeId,
    employeeSignature,
    CPRFirstAid,
    TBTestChestXray,
    TBtestQuestionnaire,
    FingerprintClearanceCard,
    InfectiousControlTraining,
    TBAnnualEducation,
    FallPreventionandFallRecovery,
    APSSearch,
    CPIPreventionandControl,
    Annualabuseandneglecttraining,
    vacationPersonalTimeUsed,
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="nav-wrap-personal ">
        <div className="nav-div-personal" style={{ width: "100%" }}>
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            EMPLOYEE TRCKING / UPLOAD
          </p>
          <p></p>
        </div>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <div>
          <Form className="w-100 text-start" onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                CPR/First Aid
              </Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                onChange={(e) => setCPRFirstAid(e.target.files[0])}
              />
            </Form.Group>
            <ProgressBarComp />

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                TB Test/Chest Xray
              </Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                onChange={(e) => setTBTestChestXray(e.target.files[0])}
              />
            </Form.Group>
            <ProgressBarComp />

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                TB test Questionnaire
              </Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                onChange={(e) => setTBTestQuestionnaire(e.target.files[0])}
              />
            </Form.Group>
            <ProgressBarComp />

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Fingerprint Clearance Card
              </Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                onChange={(e) => setFingerprintClearanceCard(e.target.files[0])}
              />
            </Form.Group>
            <ProgressBarComp />

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Infectious Control Training
              </Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                onChange={(e) =>
                  setInfectiousControlTraining(e.target.files[0])
                }
              />
            </Form.Group>
            <ProgressBarComp />

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                TB Annual Education
              </Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                onChange={(e) => setTBAnnualEducation(e.target.files[0])}
              />
            </Form.Group>
            <ProgressBarComp />

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Fall Prevention and Fall Recovery
              </Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                onChange={(e) =>
                  setFallPreventionandFallRecovery(e.target.files[0])
                }
              />
            </Form.Group>
            <ProgressBarComp />

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                APS Search
              </Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                onChange={(e) =>
                  setAPSSearch(e.target.files[0])
                }
              />
            </Form.Group>
            <ProgressBarComp />
            
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              CPI/Prevention and Control
              </Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                onChange={(e) =>
                  setCPIPreventionandControl(e.target.files[0])
                }
              />
            </Form.Group>
            <ProgressBarComp />

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

export default HOC2(EmployeeTracking);
