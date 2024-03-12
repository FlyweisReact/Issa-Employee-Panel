/** @format */

import React, { useEffect, useRef } from "react";
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
import { DateInMMDDYY, postApi } from "../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import HOC from "../../../Layout/Outer/HOC";
import { getData } from "../../../components/api/api";
import { useReactToPrint } from "react-to-print";

const Appendix = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [preferredContactInformation, setPreferredContactInformation] =
    useState("");
  const [positionHiredFor, setPositionHiredFor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [spentMoreThan30DaysAbroad, setSpentMoreThan30DaysAbroad] =
    useState(false);
  const [closeContactWithActiveTB, setCloseContactWithActiveTB] =
    useState(false);
  const [symptomsFever, setSymptomsFever] = useState(false);
  const [symptomsCough, setSymptomsCough] = useState(false);
  const [symptomsBloodySputum, setSymptomsBloodySputum] = useState(false);
  const [symptomsUnintendedWeightLoss, setSymptomsUnintendedWeightLoss] =
    useState(false);
  const [symptomsNightSweats, setSymptomsNightSweats] = useState(false);
  const [symptomsUnexplainedFatigue, setSymptomsUnexplainedFatigue] =
    useState(false);
  const [diagnosedWithActiveTB, setDiagnosedWithActiveTB] = useState(false);
  const [diagnosedWithLatentTB, setDiagnosedWithLatentTB] = useState(false);
  const [tbTreatmentHistoryYear, setTbTreatmentHistoryYear] = useState(false);
  const [tbTreatmentHistoryMedication, setTbTreatmentHistoryMedication] =
    useState("");
  const [tbTreatmentHistoryDuration, setTbTreatmentHistoryDuration] =
    useState("");
  const [
    tbTreatmentHistoryCompletedTreatment,
    setTbTreatmentHistoryCompletedTreatment,
  ] = useState("");
  const [weakenedImmuneSystem, setWeakenedImmuneSystem] = useState(false);
  const [reviewerSignature, setReviewerSignature] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [signTime, setSignTime] = useState("");
  const [signDate, setSignDate] = useState("");

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
    getData(setData, "employee/getAppendix");
  }, []);

  useEffect(() => {
    if (data) {
      const item = data?.data;
      setName(item?.name);
      setDate(item?.date);
      setPreferredContactInformation(item?.preferredContactInformation);
      setPositionHiredFor(item?.positionHiredFor);
      setStartDate(item?.startDate);
      setSpentMoreThan30DaysAbroad(item?.spentMoreThan30DaysAbroad);
      setCloseContactWithActiveTB(item?.closeContactWithActiveTB);
      setSymptomsFever(item?.symptomsFever);
      setSymptomsCough(item?.symptomsCough);
      setSymptomsBloodySputum(item?.symptomsBloodySputum);
      setSymptomsUnintendedWeightLoss(item?.symptomsUnintendedWeightLoss);
      setSymptomsNightSweats(item?.symptomsNightSweats);
      setSymptomsUnexplainedFatigue(item?.symptomsUnexplainedFatigue);
      setDiagnosedWithActiveTB(item?.diagnosedWithActiveTB);
      setDiagnosedWithLatentTB(item?.diagnosedWithLatentTB);
      setTbTreatmentHistoryYear(item?.tbTreatmentHistoryYear);
      setTbTreatmentHistoryMedication(item?.tbTreatmentHistoryMedication);
      setTbTreatmentHistoryDuration(item?.tbTreatmentHistoryDuration);
      setTbTreatmentHistoryCompletedTreatment(
        item?.tbTreatmentHistoryCompletedTreatment
      );
      setWeakenedImmuneSystem(item?.weakenedImmuneSystem);
      setReviewDate(item?.reviewDate);
      setReviewerSignature(item?.reviewerSignature);
    }
  }, [data]);

  // Download Report
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint2 = () => {
    var elements = document.getElementsByClassName("hidePrint");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
    handlePrint();
    setTimeout(() => {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
    }, 1000);
  };

  return (
    <>
      <div ref={componentRef}></div>
  
    </>
  );
};

export default HOC({ Wcomponenet: Appendix, isNavbar: false });
