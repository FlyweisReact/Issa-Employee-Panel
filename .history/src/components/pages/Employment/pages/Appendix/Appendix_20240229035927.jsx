/** @format */

import React from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import "./Appendix.css";
import NavWrapper from "../../../../../Helper/NavWrapper";
import {
  BorderlessInput,
  DateFormatter,
  RadioMaker,
} from "../../../../../Helper/Makers";

export const Appendix = () => {
  const [employeeData, setEmployeeData] = useState({
    name: "",
    date: "",
    preferredContactInformation: "",
    positionHiredFor: "",
    startDate: "",
    spentMoreThan30DaysAbroad: "",
    // closeContactWithActiveTB: "",
    symptomsFever: "",
    symptomsCough: "",
    symptomsBloodySputum: "",
    symptomsUnintendedWeightLoss: "",
    symptomsNightSweats: "",
    symptomsUnexplainedFatigue: "",
    diagnosedWithActiveTB: "",
    diagnosedWithLatentTB: "",
    tbTreatmentHistoryYear: "",
    tbTreatmentHistoryMedication: "",
    tbTreatmentHistoryDuration: "",
    tbTreatmentHistoryCompletedTreatment: "",
    weakenedImmuneSystem: "",
    reviewerSignature: "",
    reviewDate: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  // ---
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [preferredContactInformation, setPreferredContactInformation] =
    useState("");
  const [positionHiredFor, setPositionHiredFor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [spentMoreThan30DaysAbroad, setSpentMoreThan30DaysAbroad] =
    useState("");
  const [closeContactWithActiveTB, setCloseContactWithActiveTB] = useState("");
  const [symptomsFever, setSymptomsFever] = useState("");
  const [symptomsCough, setSymptomsCough] = useState("");
  const [symptomsBloodySputum, setSymptomsBloodySputum] = useState("");
  const [symptomsUnintendedWeightLoss, setSymptomsUnintendedWeightLoss] =
    useState("");
  const [symptomsNightSweats, setSymptomsNightSweats] = useState("");
  const [symptomsUnexplainedFatigue, setSymptomsUnexplainedFatigue] =
    useState("");
  const [diagnosedWithActiveTB, setDiagnosedWithActiveTB] = useState("");
  const [diagnosedWithLatentTB, setDiagnosedWithLatentTB] = useState("");
  const [tbTreatmentHistoryYear, setTbTreatmentHistoryYear] = useState("");
  const [tbTreatmentHistoryMedication, setTbTreatmentHistoryMedication] =
    useState("");
  const [tbTreatmentHistoryDuration, setTbTreatmentHistoryDuration] =
    useState("");
  const [
    tbTreatmentHistoryCompletedTreatment,
    setTbTreatmentHistoryCompletedTreatment,
  ] = useState("");
  const [weakenedImmuneSystem, setWeakenedImmuneSystem] = useState("");
  const [reviewerSignature, setReviewerSignature] = useState("");
  const [reviewDate, setReviewDate] = useState("");

  return (
    <>
      <NavWrapper isArrow={true} title="Appendix 3" />
      <Container className="full-width-container">
        <form className="w-100 text-start">
          <p className="fw-bold">
            Appendix 3. Integrated Tuberculosis (TB) Screening and Risk
            Assessment Form for Newly Hired HCP
          </p>
          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>Name:</label>
              <BorderlessInput
                setState={setName}
                placeholder=""
                type={"text"}
                value={name}
              />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(date)}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Preferred Contact Information:</label>
              <BorderlessInput
                setState={setPreferredContactInformation}
                placeholder=""
                type="text"
                value={preferredContactInformation}
              />
            </div>
            <div className="grid-item long-input">
              <label>1. What position are you hired for?</label>
              <BorderlessInput
                setState={setPositionHiredFor}
                placeholder=""
                type="text"
                value={positionHiredFor}
              />
            </div>
            <div className="grid-item long-input">
              <label>What is your start date?</label>
              <BorderlessInput
                setState={setStartDate}
                placeholder=""
                type="date"
                value={DateFormatter(startDate)}
              />
            </div>
          </div>
          <div
            className="mb-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="Radio_btns d-block">
              <span>
                2. Have you EVER spent more than 30 days in a country with an
                elevated TB rate? This includes all countries except those in
                Western Europe, Northern Europe, Canada, Australia, and New
                Zealand
              </span>
              <div className="btns">
                <RadioMaker
                  name="performance"
                  setValue={setSpentMoreThan30DaysAbroad}
                  value={true}
                  id={"performance5"}
                  label={
                    "A.	YES I have been in a foreign country for >30 days (not including those listed above)"
                  }
                  checked={spentMoreThan30DaysAbroad}
                />
              </div>
              <div className="btns">
                <RadioMaker
                  name="performance"
                  setValue={setSpentMoreThan30DaysAbroad}
                  value={false}
                  id={"performance5"}
                  label={
                    "B.	NO I have not been in any country for >30 days except the ones listed above "
                  }
                  checked={spentMoreThan30DaysAbroad}
                />
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-item full-wid-input">
              <label>
                3. Have you had close contact with anyone who had active TB
                since your last TB test?
              </label>
              <div className="Radio_btns">
                <span className="btns">
                  <RadioMaker
                    name="closeContactWithActiveTB"
                    setValue={setCloseContactWithActiveTB}
                    value={true}
                    id={"closeContactWithActiveTB1"}
                    label={"Yes"}
                    checked={closeContactWithActiveTB}
                  />
                  <RadioMaker
                    name="closeContactWithActiveTB"
                    setValue={setCloseContactWithActiveTB}
                    value={false}
                    id={"closeContactWithActiveTB2"}
                    label={"No"}
                    checked={closeContactWithActiveTB}
                  />
                </span>
              </div>
            </div>
            <div className="grid-item full-wid-input">
              <label>
                4. Do you currently have any of the following symptoms:
              </label>
            </div>
            <div className="grid-item full-wid-item">
              <label>Unexplained fever for more than 3 weeks</label>
              <div className="Radio_btns">
                <span className="btns">
                  <RadioMaker
                    name="symptomsFever"
                    setValue={setSymptomsFever}
                    value={true}
                    id={"symptomsFever1"}
                    label={"Yes"}
                    checked={symptomsFever}
                  />
                  <RadioMaker
                    name="closeContactWithActiveTB"
                    setValue={setSymptomsFever}
                    value={false}
                    id={"closeContactWithActiveTB2"}
                    label={"No"}
                    checked={symptomsFever}
                  />
                </span>
              </div>
            </div>
          </div>
        </form>
      </Container>

      <Form onSubmit={handleSubmit} className="main-div-personal important">
        <div className="top-div-personal">
          <div
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  4. Do you currently have any of the following symptoms:
                </span>
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    marginBottom: "0",
                    fontWeight: "bold",
                    fontSize: ".9rem",
                  }}
                >
                  Unexplained fever for more than 3 weeks
                </div>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-fever-yes`}
                >
                  <Form.Check.Input
                    onChange={(e) =>
                      setEmployeeData({
                        ...employeeData,
                        symptomsFever: "YES",
                      })
                    }
                    name="fever"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label
                    style={{ marginBottom: "0", marginLeft: "5px" }}
                  >
                    Yes
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-fever-no`}
                >
                  <Form.Check.Input
                    onChange={(e) =>
                      setEmployeeData((prev) => ({
                        ...prev,
                        symptomsFever: "NO",
                      }))
                    }
                    name="fever"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    No
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  Cough for more than 3 weeks with sputum production
                </span>
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-cough-yes`}
                >
                  <Form.Check.Input
                    onChange={(e) =>
                      setEmployeeData((prev) => ({
                        ...prev,
                        symptomsCough: "YES",
                      }))
                    }
                    name="cough"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label
                    style={{ marginBottom: "0", marginLeft: "5px" }}
                  >
                    Yes
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  checked={employeeData?.cough === "NO"}
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-cough-no`}
                >
                  <Form.Check.Input
                    onChange={(e) =>
                      setEmployeeData((prev) => ({
                        ...prev,
                        symptomsCough: "NO",
                      }))
                    }
                    name="cough"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    No
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>Bloody sputum</span>
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check
                  checked={employeeData?.bloodySputum === "YES"}
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-bloody-sputum-yes`}
                >
                  <Form.Check.Input
                    onChange={(e) =>
                      setEmployeeData((prev) => ({
                        ...prev,
                        symptomsBloodySputum: "YES",
                      }))
                    }
                    name="bloodySputum"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label
                    style={{ marginBottom: "0", marginLeft: "5px" }}
                  >
                    Yes
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-bloody-sputum-no`}
                >
                  <Form.Check.Input
                    onChange={(e) =>
                      setEmployeeData((prev) => ({
                        ...prev,
                        symptomsBloodySputum: "NO",
                      }))
                    }
                    name="bloodySputum"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    No
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  Unintended weight loss &gt;10 pounds
                </span>
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-weight-loss-yes`}
                >
                  <Form.Check.Input
                    onChange={(e) =>
                      setEmployeeData((prev) => ({
                        ...prev,
                        symptomsUnintendedWeightLoss: "YES",
                      }))
                    }
                    name="weightLoss"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label
                    style={{ marginBottom: "0", marginLeft: "5px" }}
                  >
                    Yes
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-weight-loss-no`}
                >
                  <Form.Check.Input
                    onChange={(e) =>
                      setEmployeeData((prev) => ({
                        ...prev,
                        symptomsUnintendedWeightLoss: "NO",
                      }))
                    }
                    name="weightLoss"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    No
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  Drenching night sweats
                </span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-yes`}>
                    <Form.Check.Input
                      onChange={(e) =>
                        setEmployeeData((prev) => ({
                          ...prev,
                          symptomsNightSweats: "YES",
                        }))
                      }
                      name="nightSweats"
                      type={"radio"}
                      isValid
                    />
                    <Form.Check.Label
                      style={{
                        marginLeft: "5px",
                        marginRight: "15px",
                        marginBottom: "0",
                      }}
                    >
                      Yes
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check type={"radio"} id={`check-api-night-sweats-no`}>
                    <Form.Check.Input
                      onChange={(e) =>
                        setEmployeeData((prev) => ({
                          ...prev,
                          symptomsNightSweats: "NO",
                        }))
                      }
                      name="nightSweats"
                      type={"radio"}
                      isValid
                    />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      No
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  Unexplained fatigue for more than 3 weeks
                </span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-fatigue-yes`}>
                    <Form.Check.Input
                      onChange={(e) =>
                        setEmployeeData((prev) => ({
                          ...prev,
                          symptomsUnexplainedFatigue: "YES",
                        }))
                      }
                      name="fatigue"
                      type={"radio"}
                      isValid
                    />
                    <Form.Check.Label
                      style={{
                        marginLeft: "5px",
                        marginRight: "15px",
                        marginBottom: "0",
                      }}
                    >
                      Yes
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check type={"radio"} id={`check-api-fatigue-no`}>
                    <Form.Check.Input
                      onChange={(e) =>
                        setEmployeeData((prev) => ({
                          ...prev,
                          symptomsUnexplainedFatigue: "NO",
                        }))
                      }
                      name="fatigue"
                      type={"radio"}
                      isValid
                    />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      No
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  5. Have you ever been diagnosed with active TB disease?
                </span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Form.Check type={"radio"} id={`check-api-active-tb-yes`}>
                    <Form.Check.Input
                      onChange={(e) =>
                        setEmployeeData((prev) => ({
                          ...prev,
                          diagnosedWithActiveTB: "YES",
                        }))
                      }
                      name="activeTB1"
                      type={"radio"}
                      isValid
                    />
                    <Form.Check.Label
                      style={{
                        marginLeft: "5px",
                        marginRight: "15px",
                        marginBottom: "0",
                      }}
                    >
                      Yes
                    </Form.Check.Label>
                  </Form.Check>
                  <Form.Check type={"radio"} id={`check-api-active-tb-no`}>
                    <Form.Check.Input
                      onChange={(e) =>
                        setEmployeeData((prev) => ({
                          ...prev,
                          diagnosedWithActiveTB: "NO",
                        }))
                      }
                      name="activeTB1"
                      type={"radio"}
                      isValid
                    />
                    <Form.Check.Label style={{ marginBottom: "0" }}>
                      No
                    </Form.Check.Label>
                  </Form.Check>
                </div>
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                <p>
                  6.Have you ever been diagnosed with latent TB infection or had
                  a positive skin test or a positive blood test for TB?
                </p>
              </Form.Label>
              <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
                <Form.Check.Input
                  onChange={(e) =>
                    setEmployeeData((prev) => ({
                      ...prev,
                      diagnosedWithLatentTB: "YES",
                    }))
                  }
                  name="diagnosedWithLatentTB123"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label>
                  {" "}
                  <p>YES one or more of these is true for me</p>
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
                <Form.Check.Input
                  onChange={(e) =>
                    setEmployeeData((prev) => ({
                      ...prev,
                      diagnosedWithLatentTB: "NO",
                    }))
                  }
                  name="diagnosedWithLatentTB123"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label>
                  {" "}
                  <p>NO none of these is true for me</p>
                </Form.Check.Label>
              </Form.Check>
              {/* <Form.Control type="text" placeholder="Enter  text" /> */}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>
                  7. Have you been treated with medication for TB or for a
                  positive TB test (eg, taken “INH”)?
                </span>
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-radio-yes`}
                >
                  <Form.Check.Input
                    onChange={(e) =>
                      setEmployeeData((prev) => ({
                        ...prev,
                        tbTreatmentHistoryMedication: "YES",
                      }))
                    }
                    name="tbTreatmentHistoryYear1"
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label
                    style={{ marginBottom: "0", marginLeft: "5px" }}
                  >
                    YES
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"radio"}
                  id={`check-api-radio-no`}
                >
                  <Form.Check.Input
                    name="tbTreatmentHistoryYear1"
                    onChange={(e) =>
                      setEmployeeData((prev) => ({
                        ...prev,
                        tbTreatmentHistoryMedication: "NO",
                      }))
                    }
                    type={"radio"}
                    isValid
                  />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    NO
                  </Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                If YES, what year, with which medication, for how long, and did
                you complete the treatment course?
              </Form.Label>
              <Form.Control
                name="tbTreatmentHistoryMedication"
                onChange={(e) =>
                  setEmployeeData((prev) => ({
                    ...prev,
                    tbTreatmentHistoryDuration: e.target.value,
                  }))
                }
                required
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                TB Treatment History Completed Treatment
              </Form.Label>
              <Form.Control
                name="tbTreatmentHistoryMedication"
                onChange={(e) =>
                  setEmployeeData((prev) => ({
                    ...prev,
                    tbTreatmentHistoryCompletedTreatment: e.target.value,
                  }))
                }
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                <p>
                  8. Do you have a weakened immune system for any reason
                  including organ transplant, recent chemotherapy, poorly
                  controlled diabetes, HIV infection, cancer, or treatment with
                  steroids for more than 1 month, immune-suppressing medications
                  such as a TNF-alpha antagonist or another immune-modulator?
                  (If you are not sure, ask your Occupational Health provider)
                </p>
              </Form.Label>
              <Form.Check
                checked={employeeData?.immunization === "YES"}
                type={"radio"}
                id={`check-api-${"radio"}`}
              >
                <Form.Check.Input
                  onChange={(e) =>
                    setEmployeeData((prev) => ({
                      ...prev,
                      weakenedImmuneSystem: "YES",
                    }))
                  }
                  name="weakenedImmuneSystem"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label>
                  {" "}
                  <p>YES, one or more of these is true for me </p>
                </Form.Check.Label>
              </Form.Check>
              <Form.Check
                checked={employeeData?.immunization === "NO"}
                type={"radio"}
                id={`check-api-${"radio"}`}
              >
                <Form.Check.Input
                  onChange={(e) =>
                    setEmployeeData((prev) => ({
                      ...prev,
                      weakenedImmuneSystem: "NO",
                    }))
                  }
                  name="weakenedImmuneSystem"
                  type={"radio"}
                  isValid
                  required
                />
                <Form.Check.Label>
                  {" "}
                  <p>NO none of these is true for me</p>
                </Form.Check.Label>
              </Form.Check>
              {/* <Form.Control type="text" placeholder="Enter  text" /> */}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Occupation Health Reviewer Signature :
              </Form.Label>
              <Form.Control
                type="text"
                value={employeeData?.occupationHealthReviewerSignature}
                required
                onChange={(e) =>
                  setEmployeeData((prev) => ({
                    ...prev,
                    reviewerSignature: e.target.value,
                  }))
                }
                placeholder="Enter  text"
              />
            </Form.Group>
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
                Date :
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  setEmployeeData((prev) => ({
                    ...prev,
                    reviewDate: e.target.value,
                  }))
                }
                required
                type="date"
                placeholder="Enter  dATE"
              />
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
              <button type="submit" className="btn1233" type="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};
