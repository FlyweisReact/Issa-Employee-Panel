import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Appendix.css";
import { Auth, Baseurl, postData, showMsg } from "../../../../../Baseurl";
import axios from "axios";
export const Appendix = () => {
  const navigate = useNavigate();
  const [closeContact, setCloseContact] = useState(null);
  const [symptoms, setSymptoms] = useState(null);
  const [cough, setCough] = useState(null);
  const [bloody, setBloody] = useState(null);
  const [weight, setWeight] = useState(null);
  const [drenching, setDrenching] = useState(null);
  const [Unexplained, setUnexplained] = useState(null);
  const [fatigue, setFatigue] = useState(null);
  const [activeTB1, setActiveTB1] = useState(null);
  const [latentTB, setLatentTB] = useState(null);
  const [treatment, setTreatment] = useState(null);
  const [immunization, setImmunization] = useState(null);
  const [spentMore, setSpentMore] = useState(null);
  const [data, setData] = useState({});
  const [employeeData, setEmployeeData] = useState({
    name: "",
    date: "",
    preferredContactInformation: "",
    positionHiredFor: "",
    startDate: "",
    spentMoreThan30DaysAbroad: "",
    closeContactWithActiveTB: "",
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

  const handleChange = (field, value) => {
    setEmployeeData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const getAllData=async()=>{
    try {
      const res=await axios.get(`${Baseurl}employee/getAppendix`,Auth())
    } catch (error) {
      console.log(error)
      if(error?.res?.status===404){
        setData({});
      }
      
    }
  }

useEffect(()=>{
getAllData()
},[])

useEffect(() => {
  setEmployeeData({
    name: data?.name || "",
    date: data?.date?.split("T")[0] || "",
    preferredContactInformation: data?.preferredContactInformation || "",
    positionHiredFor: data?.positionHiredFor || "",
    startDate: data?.startDate?.split("T")[0] || "",
    spentMoreThan30DaysAbroad: data?.spentMoreThan30DaysAbroad || "",
    closeContactWithActiveTB: data?.closeContactWithActiveTB || "",
    symptomsFever:  data?.symptomsFever || "",
    symptomsCough: data?.symptomsCough || "",
    symptomsBloodySputum: data?.symptomsBloodySputum || "",
    symptomsUnintendedWeightLoss: data?.symptomsUnintendedWeightLoss || "",
    symptomsNightSweats:  data?.symptomsNightSweats || "",
    symptomsUnexplainedFatigue: data?.symptomsUnexplainedFatigue || "",
    diagnosedWithActiveTB: data?.diagnosedWithActiveTB || "",
    diagnosedWithLatentTB: data?.diagnosedWithLatentTB || "",
    tbTreatmentHistoryYear: data?.tbTreatmentHistoryYear || "",
    tbTreatmentHistoryMedication: data?.tbTreatmentHistoryMedication || "",
    tbTreatmentHistoryDuration: data?.tbTreatmentHistoryDuration || "",
    tbTreatmentHistoryCompletedTreatment: data?.tbTreatmentHistoryCompletedTreatment || "",
    weakenedImmuneSystem: data?.weakenedImmuneSystem || "",
    reviewerSignature: data?.reviewerSignature || "",
    reviewDate: data?.reviewDate?.split("T")[0] || "",
  })
},[data])
  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyValues = Object.values(employeeData).filter((x) => x === "");
    // if(emptyValues.length > 0){
    //   showMsg("Error", `${Object.keys(employeeData).filter((x) => employeeData[x] === "")} cannot be empty`, "danger");
    // }
    if (closeContact) {
      employeeData.closeContactWithActiveTB = closeContact;
    }
    if (symptoms) {
      employeeData.symptomsFever = symptoms;
    }
    if (cough) {
      employeeData.symptomsCough = cough;
    }
    if (bloody) {
      employeeData.symptomsBloodySputum = bloody;
    }
    if (weight) {
      employeeData.symptomsUnintendedWeightLoss = weight;
    }
    if (drenching) {
      employeeData.symptomsNightSweats = drenching;
    }
    if (Unexplained) {
      employeeData.symptomsUnexplainedFatigue = Unexplained;
    }
    if (fatigue) {
      employeeData.diagnosedWithActiveTB = fatigue;
    }
    if (latentTB) {
      employeeData.diagnosedWithLatentTB = latentTB;
    }
    if (treatment) {
      employeeData.tbTreatmentHistoryYear = treatment;
    }
    if (immunization) {
      employeeData.weakenedImmuneSystem = immunization;
    }
    if (spentMore) {
      employeeData.spentMoreThan30DaysAbroad = spentMore;
    }
postData("employee/createAppendix",employeeData).then((res)=>{
  console.log(res)
  showMsg("Success", "Appendix Created Successfully", "success");
})
    console.log(employeeData);
  };
  return (
    <div className="main-div-personal important">
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div className="nav-div-personal">
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>APPENDIX 3</p>
        </div>
      </div>
      <div className="top-div-personal">
        <Form
          id="form-appendix"
          className="form-personal offer-letter appendix1"
        >
          <p>
            Appendix 3. Integrated Tuberculosis (TB) Screening and Risk
            Assessment Form for Newly Hired HCP
          </p>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Name :
            </Form.Label>
            <Form.Control value={employeeData?.name}
              onChange={(e) => handleChange("name", e.target.value)}
              type="text"
              placeholder="Enter  Name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Today's Date :
            </Form.Label>
            <Form.Control value={employeeData?.date}
              onChange={(e) => handleChange("date", e.target.value)}
              type="date"
              placeholder="Enter  dATE"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Preferred Contact Information:
            </Form.Label>
            <Form.Control
              type="text" value={employeeData?.preferredContactInformation}
              placeholder="Enter  Preferred Contact Information"
              onChange={(e) =>
                handleChange("preferredContactInformation", e.target.value)
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              1. What position are you hired for?:
            </Form.Label>
            <Form.Control value={employeeData?.positionHiredFor}
              onChange={(e) => handleChange("positionHiredFor", e.target.value)}
              type="text"
              placeholder="Enter  text"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              What is your start date? :
            </Form.Label>
            <Form.Control value={employeeData?.startDate}
              onChange={(e) => handleChange("startDate", e.target.value)}
              type="text"
              placeholder="Enter  text"
            />
          </Form.Group>

          <p>
            2.Have you EVER spent more than 30 days in a country with an
            elevated TB rate? This includes all countries except those in
            Western Europe, Northern Europe, Canada, Australia, and New Zealand.
          </p>
          <div key={"radio"} className="mb-3">
            <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
              <Form.Check.Input
                onClick={(e) => setSpentMore("YES")}
                name="radio2"
                type={"radio"} checked={employeeData?.spentMoreThan30DaysAbroad === "YES"}
                isValid
              />
              <Form.Check.Label>
                {" "}
                <p>
                  YES I have been in a foreign country for >=30 days (not
                  including those listed above)
                </p>
              </Form.Check.Label>
            </Form.Check>
          </div>
          <div key={"radio"} className="mb-3">
            <Form.Check type={"radio"} id={`check-api-${"radio"}`}>
              <Form.Check.Input
                onClick={(e) => setSpentMore("NO")}
                name="radio2"
                type={"radio"}
                isValid 
                checked={employeeData?.spentMoreThan30DaysAbroad === "NO"}
              />
              <Form.Check.Label>
                {" "}
                <p>
                  NO I have not been in any country for {">"}30 days except the
                  ones listed above
                </p>
              </Form.Check.Label>
            </Form.Check>
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
              3. Have you had close contact with anyone who had active TB since
              your last TB test?
            </Form.Label>
            <div>
              <Form.Check value={"yes"} type={"radio"} id={`check-api-yes`}>
                <Form.Check.Input
                  onChange={(e) => setCloseContact("YES")}
                  name="radio1"
                  type={"radio"}
                  isValid value={employeeData?.closeContactWithPersonWhoHadActiveTB === "YES"}
                />
                <Form.Check.Label style={{ marginRight: "15px" }}>
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check type={"radio"} id={`check-api-no`}>
                <Form.Check.Input
                  onChange={(e) => setCloseContact("NO")}
                  name="radio1" value={employeeData?.closeContactWithPersonWhoHadActiveTB === "NO"}
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label>No</Form.Check.Label>
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
                4. Do you currently have any of the following symptoms:
              </span>
            </Form.Label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginBottom: "0", fontWeight: "bold" }}>
                Unexplained fever for more than 3 weeks
              </p>
              <Form.Check
                
                style={{ marginLeft: "10px" }}
                type={"radio"} checked={employeeData?.fever === "YES"}
                id={`check-api-fever-yes`}
              >
                <Form.Check.Input onChange={(e) => setSymptoms("YES")} name="fever" type={"radio"} isValid />
                <Form.Check.Label
                  style={{ marginBottom: "0", marginLeft: "5px" }}
                >
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check
               
                style={{ marginLeft: "10px" }}
                type={"radio"} checked={employeeData?.fever === "NO"}
                id={`check-api-fever-no`}
              >
                <Form.Check.Input   onChange={(e) => setSymptoms("NO")} name="fever" type={"radio"} isValid />
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
                type={"radio"} checked={employeeData?.cough === "YES"}
                id={`check-api-cough-yes`}
              >
                <Form.Check.Input
                  onChange={(e) => setCough("YES")}
                  name="cough"
                  type={"radio"} checked={employeeData?.cough === "YES"}
                  isValid
                />
                <Form.Check.Label
                  style={{ marginBottom: "0", marginLeft: "5px" }}
                >
                  Yes
                </Form.Check.Label>
              </Form.Check>
              <Form.Check checked={employeeData?.cough === "NO"}
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-cough-no`}
              >
                <Form.Check.Input
                  onChange={(e) => setCough("NO")}
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
              <Form.Check checked={employeeData?.bloodySputum === "YES"}
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-bloody-sputum-yes`}
              >
                <Form.Check.Input
                  onChange={(e) => setBloody("YES")}
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
                type={"radio"} checked={employeeData?.bloodySputum === "NO"}
                id={`check-api-bloody-sputum-no`}
              >
                <Form.Check.Input
                  onChange={(e) => setBloody("NO")}
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
              <Form.Check checked={employeeData?.weightLoss === "YES"}
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-weight-loss-yes`}
              >
                <Form.Check.Input
                  onChange={(e) => setWeight("YES")}
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
              <Form.Check checked={employeeData?.weightLoss === "NO"}
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-weight-loss-no`}
              >
                <Form.Check.Input
                  onChange={(e) => setWeight("NO")}
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
                <Form.Check type={"radio"} checked={employeeData?.nightSweats === "YES"} id={`check-api-night-sweats-yes`}>
                  <Form.Check.Input
                    onChange={(e) => setDrenching("YES")}
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
                <Form.Check type={"radio"} checked={employeeData?.nightSweats === "NO"} id={`check-api-night-sweats-no`}>
                  <Form.Check.Input
                    onChange={(e) => setDrenching("NO")}
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
                <Form.Check type={"radio"} checked={employeeData?.fatigue === "YES"} id={`check-api-fatigue-yes`}>
                  <Form.Check.Input
                    onChange={(e) => setFatigue("YES")}
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
                <Form.Check checked={employeeData?.fatigue === "NO"} type={"radio"} id={`check-api-fatigue-no`}>
                  <Form.Check.Input
                    onChange={(e) => setFatigue("NO")}
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
                <Form.Check checked={employeeData?.activeTB === "YES"} type={"radio"} id={`check-api-active-tb-yes`}>
                  <Form.Check.Input
                    onChange={(e) => setActiveTB1("YES")}
                    name="activeTB"
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
                <Form.Check checked={employeeData?.activeTB === "NO"} type={"radio"} id={`check-api-active-tb-no`}>
                  <Form.Check.Input
                    onChange={(e) => setActiveTB1("NO")}
                    name="activeTB"
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
                6.Have you ever been diagnosed with latent TB infection or had a
                positive skin test or a positive blood test for TB?
              </p>
            </Form.Label>
            <Form.Check checked={employeeData?.latentTB === "YES"} type={"radio"} id={`check-api-${"radio"}`}>
              <Form.Check.Input
                onChange={(e) => setLatentTB("YES")}
                name="radio1"
                type={"radio"}
                isValid
              />
              <Form.Check.Label>
                {" "}
                <p>YES one or more of these is true for me</p>
              </Form.Check.Label>
            </Form.Check>
            <Form.Check checked={employeeData?.latentTB === "NO"} type={"radio"} id={`check-api-${"radio"}`}>
              <Form.Check.Input
                onChange={(e) => setLatentTB("NO")}
                name="radio1"
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
              <Form.Check checked={employeeData?.treatment === "YES"}
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-radio-yes`}
              >
                <Form.Check.Input
                  onChange={(e) => setTreatment("YES")}
                  name="radio1"
                  type={"radio"}
                  isValid
                />
                <Form.Check.Label
                  style={{ marginBottom: "0", marginLeft: "5px" }}
                >
                  YES
                </Form.Check.Label>
              </Form.Check>
              <Form.Check checked={employeeData?.treatment === "NO"}
                style={{ marginLeft: "10px" }}
                type={"radio"}
                id={`check-api-radio-no`}
              >
                <Form.Check.Input
                  name="radio1"
                  onChange={(e) => setTreatment("NO")}
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
            <Form.Control value={employeeData?.tbTreatmentHistoryYear}
              onChange={(e) =>
                handleChange("tbTreatmentHistoryYear", e.target.value)
              }
              type="text"
              placeholder="Enter  text"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              <p>
                8. Do you have a weakened immune system for any reason including
                organ transplant, recent chemotherapy, poorly controlled
                diabetes, HIV infection, cancer, or treatment with steroids for
                more than 1 month, immune-suppressing medications such as a
                TNF-alpha antagonist or another immune-modulator? (If you are
                not sure, ask your Occupational Health provider)
              </p>
            </Form.Label>
            <Form.Check checked={employeeData?.immunization === "YES"} type={"radio"} id={`check-api-${"radio"}`}>
              <Form.Check.Input
                onChange={(e) => setImmunization("YES")}
                name="radio1"
                type={"radio"}
                isValid
              />
              <Form.Check.Label>
                {" "}
                <p>YES, one or more of these is true for me </p>
              </Form.Check.Label>
            </Form.Check>
            <Form.Check checked={employeeData?.immunization === "NO"} type={"radio"} id={`check-api-${"radio"}`}>
              <Form.Check.Input
                onChange={(e) => setImmunization("NO")}
                name="radio1"
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
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Occupation Health Reviewer Signature :
            </Form.Label>
            <Form.Control
              type="text" value={employeeData?.occupationHealthReviewerSignature}
              onChange={(e) =>
                handleChange(
                  "occupationHealthReviewerSignature",
                  e.target.value
                )
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
              <button style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}>
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
              onChange={(e) => handleChange("reviewDate", e.target.value)}
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
            <button onClick={handleSubmit} className="btn1233" type="submit">
              SUBMIT
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};
