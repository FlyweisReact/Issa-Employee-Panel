/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./Appendix.css";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  DateFormatter,
  RadioMaker,
} from "../../../Helper/Makers";
import { SignatureModal } from "../../../Mod/Modal";
import { postApi } from "../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import HOC from "../../../Layout/Outer/HOC";
import { getData } from "../../../components/api/api";

const Appendix = () => {
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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ data , setData ] = useState({})

  const payload = {
    name,
    date,
    preferredContactInformation,
    positionHiredFor,
    startDate,
    spentMoreThan30DaysAbroad,
    closeContactWithActiveTB,
    symptomsFever,
    symptomsCough,
    symptomsBloodySputum,
    symptomsUnintendedWeightLoss,
    symptomsNightSweats,
    symptomsUnexplainedFatigue,
    diagnosedWithActiveTB,
    diagnosedWithLatentTB,
    tbTreatmentHistoryYear,
    tbTreatmentHistoryMedication,
    tbTreatmentHistoryDuration,
    tbTreatmentHistoryCompletedTreatment,
    weakenedImmuneSystem,
    reviewerSignature,
    reviewDate,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createAppendix", payload);
  };


  useEffect(() => {
    getData(setData , "employee/getAppendix")
  },[])

  console.log(data?.data)

  useEffect(() => {
    if(data){
      const item = data?.data
      setName(item?.name)
      setDate(item?.date)
      setPreferredContactInformation(item?.preferredContactInformation)
      setPositionHiredFor(item?.positionHiredFor)
      setStartDate(item?.startDate)
      setSpentMoreThan30DaysAbroad(item?.spentMoreThan30DaysAbroad)
      setCloseContactWithActiveTB(item?.closeContactWithActiveTB)
      setSymptomsFever(item?.symptomsFever)
      setSymptomsCough(item?.symptomsCough)
    }
  },[data])


  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setReviewerSignature}
        value={reviewerSignature}
      />
      <NavWrapper isArrow={true} title="Appendix 3" />
      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={handleSubmit}>
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
            <div className="grid-item full-wid-input">
              <label>Unexplained fever for more than 3 weeks</label>
              <div className="Radio_btns ml-3">
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
                    name="symptomsFever"
                    setValue={setSymptomsFever}
                    value={false}
                    id={"symptomsFever2"}
                    label={"No"}
                    checked={symptomsFever}
                  />
                </span>
              </div>
            </div>
            <div className="grid-item full-wid-input">
              <label>Cough for more than 3 weeks with sputum production</label>
              <div className="Radio_btns ml-3">
                <span className="btns">
                  <RadioMaker
                    name="symptomsCough"
                    setValue={setSymptomsCough}
                    value={true}
                    id={"symptomsCough1"}
                    label={"Yes"}
                    checked={symptomsCough}
                  />
                  <RadioMaker
                    name="symptomsCough"
                    setValue={setSymptomsCough}
                    value={false}
                    id={"symptomsCough2"}
                    label={"No"}
                    checked={symptomsCough}
                  />
                </span>
              </div>
            </div>
            <div className="grid-item full-wid-input">
              <label>Bloody sputum</label>
              <div className="Radio_btns ml-3">
                <span className="btns">
                  <RadioMaker
                    name="symptomsBloodySputum"
                    setValue={setSymptomsBloodySputum}
                    value={true}
                    id={"symptomsBloodySputum1"}
                    label={"Yes"}
                    checked={symptomsBloodySputum}
                  />
                  <RadioMaker
                    name="symptomsBloodySputum"
                    setValue={setSymptomsBloodySputum}
                    value={false}
                    id={"symptomsBloodySputum2"}
                    label={"No"}
                    checked={symptomsBloodySputum}
                  />
                </span>
              </div>
            </div>
            <div className="grid-item full-wid-input">
              <label>Unintended weight loss {">"} 10 pounds</label>
              <div className="Radio_btns ml-3">
                <span className="btns">
                  <RadioMaker
                    name="symptomsUnintendedWeightLoss"
                    setValue={setSymptomsUnintendedWeightLoss}
                    value={true}
                    id={"symptomsUnintendedWeightLoss1"}
                    label={"Yes"}
                    checked={symptomsUnintendedWeightLoss}
                  />
                  <RadioMaker
                    name="symptomsUnintendedWeightLoss"
                    setValue={setSymptomsUnintendedWeightLoss}
                    value={false}
                    id={"symptomsUnintendedWeightLoss2"}
                    label={"No"}
                    checked={symptomsUnintendedWeightLoss}
                  />
                </span>
              </div>
            </div>
            <div className="grid-item full-wid-input">
              <label>Drenching night sweats</label>
              <div className="Radio_btns ml-3">
                <span className="btns">
                  <RadioMaker
                    name="symptomsNightSweats"
                    setValue={setSymptomsNightSweats}
                    value={true}
                    id={"symptomsNightSweats1"}
                    label={"Yes"}
                    checked={symptomsNightSweats}
                  />
                  <RadioMaker
                    name="symptomsNightSweats"
                    setValue={setSymptomsNightSweats}
                    value={false}
                    id={"symptomsNightSweats2"}
                    label={"No"}
                    checked={symptomsNightSweats}
                  />
                </span>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>Unexplained fatigue for more than 3 weeks</label>
              <div className="Radio_btns ml-3">
                <span className="btns">
                  <RadioMaker
                    name="symptomsUnexplainedFatigue"
                    setValue={setSymptomsUnexplainedFatigue}
                    value={true}
                    id={"symptomsUnexplainedFatigue1"}
                    label={"Yes"}
                    checked={symptomsUnexplainedFatigue}
                  />
                  <RadioMaker
                    name="symptomsUnexplainedFatigue"
                    setValue={setSymptomsUnexplainedFatigue}
                    value={false}
                    id={"symptomsUnexplainedFatigue2"}
                    label={"No"}
                    checked={symptomsUnexplainedFatigue}
                  />
                </span>
              </div>
            </div>

            <div className="grid-item full-wid-input">
              <label>
                5. Have you ever been diagnosed with active TB disease?
              </label>
              <div className="Radio_btns ml-3">
                <span className="btns">
                  <RadioMaker
                    name="diagnosedWithActiveTB"
                    setValue={setDiagnosedWithActiveTB}
                    value={true}
                    id={"diagnosedWithActiveTB1"}
                    label={"Yes"}
                    checked={diagnosedWithActiveTB}
                  />
                  <RadioMaker
                    name="diagnosedWithActiveTB"
                    setValue={setDiagnosedWithActiveTB}
                    value={false}
                    id={"diagnosedWithActiveTB2"}
                    label={"No"}
                    checked={diagnosedWithActiveTB}
                  />
                </span>
              </div>
            </div>
          </div>

          <div
            className="mb-3 mt-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="Radio_btns d-block">
              <span>
                6. Have you ever been diagnosed with latent TB infection or had
                a positive skin test or a positive blood test for TB?
              </span>
              <div className="btns">
                <RadioMaker
                  name="diagnosedWithLatentTB"
                  setValue={setDiagnosedWithLatentTB}
                  value={true}
                  id={"diagnosedWithLatentTB1"}
                  label={"YES one or more of these is true for me"}
                  checked={diagnosedWithLatentTB}
                />
              </div>
              <div className="btns">
                <RadioMaker
                  name="diagnosedWithLatentTB"
                  setValue={setDiagnosedWithLatentTB}
                  value={false}
                  id={"diagnosedWithLatentTB2"}
                  label={"NO none of these is true for me"}
                  checked={diagnosedWithLatentTB}
                />
              </div>
            </div>
          </div>

          <div className="grid-container">
            <div className="grid-item full-wid-input">
              <label>
                {" "}
                7. Have you been treated with medication for TB or for a
                positive TB test (eg, taken “INH”)?
              </label>
              <div className="Radio_btns d-block">
                <div className="btns">
                  <RadioMaker
                    name="tbTreatmentHistoryYear"
                    setValue={setTbTreatmentHistoryYear}
                    value={true}
                    id={"tbTreatmentHistoryYear1"}
                    label={"YES"}
                    checked={tbTreatmentHistoryYear}
                  />
                  <RadioMaker
                    name="tbTreatmentHistoryYear"
                    setValue={setTbTreatmentHistoryYear}
                    value={false}
                    id={"tbTreatmentHistoryYear2"}
                    label={"NO"}
                    checked={tbTreatmentHistoryYear}
                  />
                </div>
              </div>
            </div>
            {tbTreatmentHistoryYear === true && (
              <>
                <div className="grid-item full-wid-input">
                  <label>
                    If YES, what year, with which medication, for how long, and
                    did you complete the treatment course?
                  </label>
                </div>

                <div className="grid-item">
                  <BorderlessInput
                    setState={setTbTreatmentHistoryMedication}
                    placeholder=""
                    type={"text"}
                    value={tbTreatmentHistoryMedication}
                  />
                </div>
                <div className="grid-item">
                  <BorderlessInput
                    setState={setTbTreatmentHistoryDuration}
                    placeholder=""
                    type={"text"}
                    value={tbTreatmentHistoryDuration}
                  />
                </div>
                <div className="grid-item">
                  <BorderlessInput
                    setState={setTbTreatmentHistoryCompletedTreatment}
                    placeholder=""
                    type={"text"}
                    value={tbTreatmentHistoryCompletedTreatment}
                  />
                </div>
                <div className="grid-item" />
              </>
            )}
          </div>
          <div
            className="mb-3 mt-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="Radio_btns d-block">
              <span>
                8. Do you have a weakened immune system for any reason including
                organ transplant, recent chemotherapy, poorly controlled
                diabetes, HIV infection, cancer, or treatment with steroids for
                more than 1 month, immune-suppressing medications such as a
                TNF-alpha antagonist or another immune-modulator? (If you are
                not sure, ask your Occupational Health provider)
              </span>
              <div className="btns">
                <RadioMaker
                  name="weakenedImmuneSystem"
                  setValue={setWeakenedImmuneSystem}
                  value={true}
                  id={"weakenedImmuneSystem1"}
                  label={"YES, one or more of these is true for me"}
                  checked={weakenedImmuneSystem}
                />
              </div>
              <div className="btns">
                <RadioMaker
                  name="weakenedImmuneSystem"
                  setValue={setWeakenedImmuneSystem}
                  value={false}
                  id={"weakenedImmuneSystem2"}
                  label={"NO, none of these is true for me"}
                  checked={weakenedImmuneSystem}
                />
              </div>
            </div>
          </div>

          <div className="grid-container mb-3">
            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setReviewDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(reviewDate)}
              />
            </div>
          </div>
          <div>
            <p className="fw-bold m-0">
              Occupational Health Reviewer Signature:
            </p>
            <div className="custome-cloud-btn">
              <div className="btns">
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
                {reviewerSignature && (
                  <p>Digitally Sign by {reviewerSignature} </p>
                )}
              </div>
            </div>
          </div>
          <div className="save-as-draft-btn123">
            <button type="submit" className="btn1233">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default HOC({ Wcomponenet: Appendix, isNavbar: false });
