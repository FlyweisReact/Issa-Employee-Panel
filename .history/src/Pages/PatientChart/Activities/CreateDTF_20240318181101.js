/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { postApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal";
import {
  BorderlessInput,
  BorderlessSelect,
  CheckBoxMaker,
  DateFormatter,
} from "../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";
import NavWrapper from "../../../Helper/NavWrapper";

const CreateDTF = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  //   ---
  const [patientId, setPatientId] = useState("");
  const [date, setDate] = useState("");

  // Selecting Clothes
  const [
    requiresNoAssistanceSelectingClothes,
    setRequiresNoAssistanceSelectingClothes,
  ] = useState(false);
  const [
    someAssistanceNeededSelectingClothes,
    setSomeAssistanceNeededSelectingClothes,
  ] = useState(false);
  const [
    completeAssistanceNeededSelectingClothes,
    setCompleteAssistanceNeededSelectingClothes,
  ] = useState(false);
  const [notApplicableSelectingClothes, setNotApplicableSelectingClothes] =
    useState(false);
  const [refusedSelectingClothes, setRefusedSelectingClothes] = useState(false);
  const [staffInitialsSelectingClothes, setStaffInitialsSelectingClothes] =
    useState("");

  // Bathing or Showering
  const [
    requiresNoAssistanceBathingOrShowering,
    setRequiresNoAssistanceBathingOrShowering,
  ] = useState(false);
  const [
    someAssistanceNeededBathingOrShowering,
    setSomeAssistanceNeededBathingOrShowering,
  ] = useState(false);
  const [
    completeAssistanceNeededBathingOrShowering,
    setCompleteAssistanceNeededBathingOrShowering,
  ] = useState(false);
  const [notApplicableBathingOrShowering, setNotApplicableBathingOrShowering] =
    useState(false);
  const [refusedBathingOrShowering, setRefusedBathingOrShowering] =
    useState(false);
  const [staffInitialsBathingOrShowering, setStaffInitialsBathingOrShowering] =
    useState("");

  // Combing Hair
  const [requiresNoAssistanceCombingHair, setRequiresNoAssistanceCombingHair] =
    useState(false);
  const [someAssistanceNeededCombingHair, setSomeAssistanceNeededCombingHair] =
    useState(false);
  const [
    completeAssistanceNeededCombingHair,
    setCompleteAssistanceNeededCombingHair,
  ] = useState(false);
  const [notApplicableCombingHair, setNotApplicableCombingHair] =
    useState(false);
  const [refusedCombingHair, setRefusedCombingHair] = useState(false);
  const [staffInitialsCombingHair, setStaffInitialsCombingHair] = useState("");

  // Applying Lotion
  const [
    requiresNoAssistanceApplyingLotion,
    setRequiresNoAssistanceApplyingLotion,
  ] = useState(false);
  const [
    someAssistanceNeededApplyingLotion,
    setSomeAssistanceNeededApplyingLotion,
  ] = useState(false);
  const [
    completeAssistanceNeededApplyingLotion,
    setCompleteAssistanceNeededApplyingLotion,
  ] = useState(false);
  const [notApplicableApplyingLotion, setNotApplicableApplyingLotion] =
    useState(false);
  const [refusedApplyingLotion, setRefusedApplyingLotion] = useState(false);
  const [staffInitialsApplyingLotion, setStaffInitialsApplyingLotion] =
    useState("");

  // Laundry
  const [requiresNoAssistanceLaundry, setRequiresNoAssistanceLaundry] =
    useState(false);
  const [someAssistanceNeededLaundry, setSomeAssistanceNeededLaundry] =
    useState(false);
  const [completeAssistanceNeededLaundry, setCompleteAssistanceNeededLaundry] =
    useState(false);
  const [notApplicableLaundry, setNotApplicableLaundry] = useState(false);
  const [refusedLaundry, setRefusedLaundry] = useState(false);
  const [staffInitialsLaundry, setStaffInitialsLaundry] = useState("");

  // Dressing
  const [requiresNoAssistanceDressing, setRequiresNoAssistanceDressing] =
    useState(false);
  const [someAssistanceNeededDressing, setSomeAssistanceNeededDressing] =
    useState(false);
  const [
    completeAssistanceNeededDressing,
    setCompleteAssistanceNeededDressing,
  ] = useState(false);
  const [notApplicableDressing, setNotApplicableDressing] = useState(false);
  const [refusedDressing, setRefusedDressing] = useState(false);
  const [staffInitialsDressing, setStaffInitialsDressing] = useState("");

  // Shampooing Hair
  const [
    requiresNoAssistanceShampooingHair,
    setRequiresNoAssistanceShampooingHair,
  ] = useState(false);
  const [
    someAssistanceNeededShampooingHair,
    setSomeAssistanceNeededShampooingHair,
  ] = useState(false);
  const [
    completeAssistanceNeededShampooingHair,
    setCompleteAssistanceNeededShampooingHair,
  ] = useState(false);
  const [notApplicableShampooingHair, setNotApplicableShampooingHair] =
    useState(false);
  const [refusedShampooingHair, setRefusedShampooingHair] = useState(false);
  const [staffInitialsShampooingHair, setStaffInitialsShampooingHair] =
    useState("");

  // Oral Care Morning
  const [
    requiresNoAssistanceOralCareMorning,
    setRequiresNoAssistanceOralCareMorning,
  ] = useState(false);
  const [
    someAssistanceNeededOralCareMorning,
    setSomeAssistanceNeededOralCareMorning,
  ] = useState(false);
  const [
    completeAssistanceNeededOralCareMorning,
    setCompleteAssistanceNeededOralCareMorning,
  ] = useState(false);
  const [notApplicableOralCareMorning, setNotApplicableOralCareMorning] =
    useState(false);
  const [refusedOralCareMorning, setRefusedOralCareMorning] = useState(false);
  const [staffInitialsOralCareMorning, setStaffInitialsOralCareMorning] =
    useState("");

  // Oral Care Evening
  const [
    requiresNoAssistanceOralCareEvening,
    setRequiresNoAssistanceOralCareEvening,
  ] = useState(false);
  const [
    someAssistanceNeededOralCareEvening,
    setSomeAssistanceNeededOralCareEvening,
  ] = useState(false);
  const [
    completeAssistanceNeededOralCareEvening,
    setCompleteAssistanceNeededOralCareEvening,
  ] = useState(false);
  const [notApplicableOralCareEvening, setNotApplicableOralCareEvening] =
    useState(false);
  const [refusedOralCareEvening, setRefusedOralCareEvening] = useState(false);
  const [staffInitialsOralCareEvening, setStaffInitialsOralCareEvening] =
    useState("");

  // Breakfast
  const [requiresNoAssistanceBreakfast, setRequiresNoAssistanceBreakfast] =
    useState(false);
  const [someAssistanceNeededBreakfast, setSomeAssistanceNeededBreakfast] =
    useState(false);
  const [
    completeAssistanceNeededBreakfast,
    setCompleteAssistanceNeededBreakfast,
  ] = useState(false);
  const [notApplicableBreakfast, setNotApplicableBreakfast] = useState(false);
  const [refusedBreakfast, setRefusedBreakfast] = useState(false);
  const [staffInitialsBreakfast, setStaffInitialsBreakfast] = useState("");

  // Lunch
  const [requiresNoAssistanceLunch, setRequiresNoAssistanceLunch] =
    useState(false);
  const [someAssistanceNeededLunch, setSomeAssistanceNeededLunch] =
    useState(false);
  const [completeAssistanceNeededLunch, setCompleteAssistanceNeededLunch] =
    useState(false);
  const [notApplicableLunch, setNotApplicableLunch] = useState(false);
  const [refusedLunch, setRefusedLunch] = useState(false);
  const [staffInitialsLunch, setStaffInitialsLunch] = useState("");

  // Dinner
  const [requiresNoAssistanceDinner, setRequiresNoAssistanceDinner] =
    useState(false);
  const [someAssistanceNeededDinner, setSomeAssistanceNeededDinner] =
    useState(false);
  const [completeAssistanceNeededDinner, setCompleteAssistanceNeededDinner] =
    useState(false);
  const [notApplicableDinner, setNotApplicableDinner] = useState(false);
  const [refusedDinner, setRefusedDinner] = useState(false);
  const [staffInitialsDinner, setStaffInitialsDinner] = useState("");

  // AM Snack
  const [requiresNoAssistanceAMSnack, setRequiresNoAssistanceAMSnack] =
    useState(false);
  const [someAssistanceNeededAMSnack, setSomeAssistanceNeededAMSnack] =
    useState(false);
  const [completeAssistanceNeededAMSnack, setCompleteAssistanceNeededAMSnack] =
    useState(false);
  const [notApplicableAMSnack, setNotApplicableAMSnack] = useState(false);
  const [refusedAMSnack, setRefusedAMSnack] = useState(false);
  const [staffInitialsAMSnack, setStaffInitialsAMSnack] = useState("");

  // PM Snack
  const [requiresNoAssistancePMSnack, setRequiresNoAssistancePMSnack] =
    useState(false);
  const [someAssistanceNeededPMSnack, setSomeAssistanceNeededPMSnack] =
    useState(false);
  const [completeAssistanceNeededPMSnack, setCompleteAssistanceNeededPMSnack] =
    useState(false);
  const [notApplicablePMSnack, setNotApplicablePMSnack] = useState(false);
  const [refusedPMSnack, setRefusedPMSnack] = useState(false);
  const [staffInitialsPMSnack, setStaffInitialsPMSnack] = useState("");

  // AM Bowel Movement
  const [
    requiresNoAssistanceAMBowelMovement,
    setRequiresNoAssistanceAMBowelMovement,
  ] = useState(false);
  const [
    someAssistanceNeededAMBowelMovement,
    setSomeAssistanceNeededAMBowelMovement,
  ] = useState(false);
  const [
    completeAssistanceNeededAMBowelMovement,
    setCompleteAssistanceNeededAMBowelMovement,
  ] = useState(false);
  const [notApplicableAMBowelMovement, setNotApplicableAMBowelMovement] =
    useState(false);
  const [refusedAMBowelMovement, setRefusedAMBowelMovement] = useState(false);
  const [staffInitialsAMBowelMovement, setStaffInitialsAMBowelMovement] =
    useState("");

  // PM Bowel Movement
  const [
    requiresNoAssistancePMBowelMovement,
    setRequiresNoAssistancePMBowelMovement,
  ] = useState(false);
  const [
    someAssistanceNeededPMBowelMovement,
    setSomeAssistanceNeededPMBowelMovement,
  ] = useState(false);
  const [
    completeAssistanceNeededPMBowelMovement,
    setCompleteAssistanceNeededPMBowelMovement,
  ] = useState(false);
  const [notApplicablePMBowelMovement, setNotApplicablePMBowelMovement] =
    useState(false);
  const [refusedPMBowelMovement, setRefusedPMBowelMovement] = useState(false);
  const [staffInitialsPMBowelMovement, setStaffInitialsPMBowelMovement] =
    useState("");

  // Overnight Bowel Movement
  const [
    requiresNoAssistanceOvernightBowelMovement,
    setRequiresNoAssistanceOvernightBowelMovement,
  ] = useState(false);
  const [
    someAssistanceNeededOvernightBowelMovement,
    setSomeAssistanceNeededOvernightBowelMovement,
  ] = useState(false);
  const [
    completeAssistanceNeededOvernightBowelMovement,
    setCompleteAssistanceNeededOvernightBowelMovement,
  ] = useState(false);
  const [
    notApplicableOvernightBowelMovement,
    setNotApplicableOvernightBowelMovement,
  ] = useState(false);
  const [refusedOvernightBowelMovement, setRefusedOvernightBowelMovement] =
    useState(false);
  const [
    staffInitialsOvernightBowelMovement,
    setStaffInitialsOvernightBowelMovement,
  ] = useState("");

  // Hand and Foot Nail Care
  const [
    requiresNoAssistanceHandAndFootNailCare,
    setRequiresNoAssistanceHandAndFootNailCare,
  ] = useState(true);
  const [
    someAssistanceNeededHandAndFootNailCare,
    setSomeAssistanceNeededHandAndFootNailCare,
  ] = useState(false);
  const [
    completeAssistanceNeededHandAndFootNailCare,
    setCompleteAssistanceNeededHandAndFootNailCare,
  ] = useState(false);
  const [
    notApplicableHandAndFootNailCare,
    setNotApplicableHandAndFootNailCare,
  ] = useState(false);
  const [refusedHandAndFootNailCare, setRefusedHandAndFootNailCare] =
    useState(false);
  const [
    staffInitialsHandAndFootNailCare,
    setStaffInitialsHandAndFootNailCare,
  ] = useState("");
  const [requiresNoAssistanceBedMobility, setRequiresNoAssistanceBedMobility] =
    useState(true);
  const [someAssistanceNeededBedMobility, setSomeAssistanceNeededBedMobility] =
    useState(false);
  const [
    completeAssistanceNeededBedMobility,
    setCompleteAssistanceNeededBedMobility,
  ] = useState(false);
  const [notApplicableBedMobility, setNotApplicableBedMobility] =
    useState(false);
  const [refusedBedMobility, setRefusedBedMobility] = useState(false);
  const [staffInitialsBedMobility, setStaffInitialsBedMobility] = useState("");
  const [open, setOpen] = useState(false);
  const [savedSigned, setSavedSigned] = useState("");

  const initialFormData = {
    patientId,
    date,
    selectingClothes: {
      requiresNoAssistance: requiresNoAssistanceSelectingClothes,
      someAssistanceNeeded: someAssistanceNeededSelectingClothes,
      completeAssistanceNeeded: completeAssistanceNeededSelectingClothes,
      notApplicable: notApplicableSelectingClothes,
      refused: refusedSelectingClothes,
      staffInitials: staffInitialsSelectingClothes,
    },
    bathingOrShowering: {
      requiresNoAssistance: requiresNoAssistanceBathingOrShowering,
      someAssistanceNeeded: someAssistanceNeededBathingOrShowering,
      completeAssistanceNeeded: completeAssistanceNeededBathingOrShowering,
      notApplicable: notApplicableBathingOrShowering,
      refused: refusedBathingOrShowering,
      staffInitials: staffInitialsBathingOrShowering,
    },
    combingHair: {
      requiresNoAssistance: requiresNoAssistanceCombingHair,
      someAssistanceNeeded: someAssistanceNeededCombingHair,
      completeAssistanceNeeded: completeAssistanceNeededCombingHair,
      notApplicable: notApplicableCombingHair,
      refused: refusedCombingHair,
      staffInitials: staffInitialsCombingHair,
    },
    applyingLotion: {
      requiresNoAssistance: requiresNoAssistanceApplyingLotion,
      someAssistanceNeeded: someAssistanceNeededApplyingLotion,
      completeAssistanceNeeded: completeAssistanceNeededApplyingLotion,
      notApplicable: notApplicableApplyingLotion,
      refused: refusedApplyingLotion,
      staffInitials: staffInitialsApplyingLotion,
    },
    laundry: {
      requiresNoAssistance: requiresNoAssistanceLaundry,
      someAssistanceNeeded: someAssistanceNeededLaundry,
      completeAssistanceNeeded: completeAssistanceNeededLaundry,
      notApplicable: notApplicableLaundry,
      refused: refusedLaundry,
      staffInitials: staffInitialsLaundry,
    },
    dressing: {
      requiresNoAssistance: requiresNoAssistanceDressing,
      someAssistanceNeeded: someAssistanceNeededDressing,
      completeAssistanceNeeded: completeAssistanceNeededDressing,
      notApplicable: notApplicableDressing,
      refused: refusedDressing,
      staffInitials: staffInitialsDressing,
    },
    shampooingHair: {
      requiresNoAssistance: requiresNoAssistanceShampooingHair,
      someAssistanceNeeded: someAssistanceNeededShampooingHair,
      completeAssistanceNeeded: completeAssistanceNeededShampooingHair,
      notApplicable: notApplicableShampooingHair,
      refused: refusedShampooingHair,
      staffInitials: staffInitialsShampooingHair,
    },
    oralCareMorning: {
      requiresNoAssistance: requiresNoAssistanceOralCareMorning,
      someAssistanceNeeded: someAssistanceNeededOralCareMorning,
      completeAssistanceNeeded: completeAssistanceNeededOralCareMorning,
      notApplicable: notApplicableOralCareMorning,
      refused: refusedOralCareMorning,
      staffInitials: staffInitialsOralCareMorning,
    },

    oralCareEvening: {
      requiresNoAssistance: requiresNoAssistanceOralCareEvening,
      someAssistanceNeeded: someAssistanceNeededOralCareEvening,
      completeAssistanceNeeded: completeAssistanceNeededOralCareEvening,
      notApplicable: notApplicableOralCareEvening,
      refused: refusedOralCareEvening,
      staffInitials: staffInitialsOralCareEvening,
    },
    lunch: {
      requiresNoAssistance: requiresNoAssistanceLunch,
      someAssistanceNeeded: someAssistanceNeededLunch,
      completeAssistanceNeeded: completeAssistanceNeededLunch,
      notApplicable: notApplicableLunch,
      refused: refusedLunch,
      staffInitials: staffInitialsLunch,
    },
    breakfast: {
      requiresNoAssistance: requiresNoAssistanceBreakfast,
      someAssistanceNeeded: someAssistanceNeededBreakfast,
      completeAssistanceNeeded: completeAssistanceNeededBreakfast,
      notApplicable: notApplicableBreakfast,
      refused: refusedBreakfast,
      staffInitials: staffInitialsBreakfast,
    },
    dinner: {
      requiresNoAssistance: requiresNoAssistanceDinner,
      someAssistanceNeeded: someAssistanceNeededDinner,
      completeAssistanceNeeded: completeAssistanceNeededDinner,
      notApplicable: notApplicableDinner,
      refused: refusedDinner,
      staffInitials: staffInitialsDinner,
    },
    amSnacks: {
      requiresNoAssistance: requiresNoAssistanceAMSnack,
      someAssistanceNeeded: someAssistanceNeededAMSnack,
      completeAssistanceNeeded: completeAssistanceNeededAMSnack,
      notApplicable: notApplicableAMSnack,
      refused: refusedAMSnack,
      staffInitials: staffInitialsAMSnack,
    },
    pmSnack: {
      requiresNoAssistance: requiresNoAssistancePMSnack,
      someAssistanceNeeded: someAssistanceNeededPMSnack,
      completeAssistanceNeeded: completeAssistanceNeededPMSnack,
      notApplicable: notApplicablePMSnack,
      refused: refusedPMSnack,
      staffInitials: staffInitialsPMSnack,
    },
    amBowelMovement: {
      requiresNoAssistance: requiresNoAssistanceAMBowelMovement,
      someAssistanceNeeded: someAssistanceNeededAMBowelMovement,
      completeAssistanceNeeded: completeAssistanceNeededAMBowelMovement,
      notApplicable: notApplicableAMBowelMovement,
      refused: refusedAMBowelMovement,
      staffInitials: staffInitialsAMBowelMovement,
    },
    pmBowelMovement: {
      requiresNoAssistance: requiresNoAssistancePMBowelMovement,
      someAssistanceNeeded: someAssistanceNeededPMBowelMovement,
      completeAssistanceNeeded: completeAssistanceNeededPMBowelMovement,
      notApplicable: notApplicablePMBowelMovement,
      refused: refusedPMBowelMovement,
      staffInitials: staffInitialsPMBowelMovement,
    },
    overnightBowelMovement: {
      requiresNoAssistance: requiresNoAssistanceOvernightBowelMovement,
      someAssistanceNeeded: someAssistanceNeededOvernightBowelMovement,
      completeAssistanceNeeded: completeAssistanceNeededOvernightBowelMovement,
      notApplicable: notApplicableOvernightBowelMovement,
      refused: refusedOvernightBowelMovement,
      staffInitials: staffInitialsOvernightBowelMovement,
    },
    handAndFootNailCare: {
      requiresNoAssistance: requiresNoAssistanceHandAndFootNailCare,
      someAssistanceNeeded: someAssistanceNeededHandAndFootNailCare,
      completeAssistanceNeeded: completeAssistanceNeededHandAndFootNailCare,
      notApplicable: notApplicableHandAndFootNailCare,
      refused: refusedHandAndFootNailCare,
      staffInitials: staffInitialsHandAndFootNailCare,
    },
    bedMobility: {
      requiresNoAssistance: requiresNoAssistanceBedMobility,
      someAssistanceNeeded: someAssistanceNeededBedMobility,
      completeAssistanceNeeded: completeAssistanceNeededBedMobility,
      notApplicable: notApplicableBedMobility,
      refused: refusedBedMobility,
      staffInitials: staffInitialsBedMobility,
    },
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createADLTrackingForm", initialFormData);
  };

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  const patientOptions = patients?.data?.map((i) => ({
    value: i._id,
    label: i?.fullName,
  }));

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSavedSigned}
        value={savedSigned}
        text={"Digitally Sign by employee name"}
      />
      <NavWrapper title={"Activities of Daily Living Tracking Form"} />
      <Container className="full-width-container">
        <form className="w-100 text-start">
          <div className="grid-container">
            <div className="grid-item">
              <label>Patient:</label>
              <BorderlessSelect
                options={patientOptions}
                setState={setPatientId}
                value={patientId}
              />
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setDate}
                value={DateFormatter(date)}
                type="date"
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>ADLS</label>
            </div>

            <div className="grid-item full-wid-input ">
              <label>Selecting Clothes</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setRequiresNoAssistanceSelectingClothes}
                    value={!requiresNoAssistanceSelectingClothes}
                    id="selectRequires"
                    label="Requires No Assistance"
                    checked={requiresNoAssistanceSelectingClothes}
                  />
                  <CheckBoxMaker
                    setValue={setSomeAssistanceNeededSelectingClothes}
                    value={!someAssistanceNeededSelectingClothes}
                    id="selectSome"
                    label="Some Assistance Needed"
                    checked={someAssistanceNeededSelectingClothes}
                  />
                  <CheckBoxMaker
                    setValue={setCompleteAssistanceNeededSelectingClothes}
                    value={!completeAssistanceNeededSelectingClothes}
                    id="selectComplete"
                    label="Complete Assistance  Needed"
                    checked={completeAssistanceNeededSelectingClothes}
                  />
                  <CheckBoxMaker
                    setValue={setNotApplicableSelectingClothes}
                    value={!notApplicableSelectingClothes}
                    id="selectNot"
                    label="Not Applicable"
                    checked={notApplicableSelectingClothes}
                  />
                  <CheckBoxMaker
                    setValue={setRefusedSelectingClothes}
                    value={!refusedSelectingClothes}
                    id="selectRefused"
                    label="Refused"
                    checked={refusedSelectingClothes}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item">
              <label> Staff Initials</label>
              <BorderlessInput
                setState={setStaffInitialsSelectingClothes}
                value={staffInitialsSelectingClothes}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Bathing or Showering</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setRequiresNoAssistanceBathingOrShowering}
                    value={!requiresNoAssistanceBathingOrShowering}
                    id="BathRequires"
                    label="Requires No Assistance"
                    checked={requiresNoAssistanceBathingOrShowering}
                  />
                  <CheckBoxMaker
                    setValue={setSomeAssistanceNeededBathingOrShowering}
                    value={!someAssistanceNeededBathingOrShowering}
                    id="BathSome"
                    label="Some Assistance Needed"
                    checked={someAssistanceNeededBathingOrShowering}
                  />
                  <CheckBoxMaker
                    setValue={setCompleteAssistanceNeededBathingOrShowering}
                    value={!completeAssistanceNeededBathingOrShowering}
                    id="BathComplete"
                    label="Complete Assistance Needed"
                    checked={completeAssistanceNeededBathingOrShowering}
                  />
                  <CheckBoxMaker
                    setValue={setNotApplicableBathingOrShowering}
                    value={!notApplicableBathingOrShowering}
                    id="BathNot"
                    label="Not Applicable"
                    checked={notApplicableBathingOrShowering}
                  />
                  <CheckBoxMaker
                    setValue={setRefusedBathingOrShowering}
                    value={!refusedBathingOrShowering}
                    id="BathRefused"
                    label="Refused"
                    checked={refusedBathingOrShowering}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item">
              <label> Staff Initials</label>
              <BorderlessInput
                setState={setStaffInitialsBathingOrShowering}
                value={staffInitialsBathingOrShowering}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Combing Hair</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setRequiresNoAssistanceCombingHair}
                    value={!requiresNoAssistanceCombingHair}
                    id="CombingRequires"
                    label="Requires No Assistance"
                    checked={requiresNoAssistanceCombingHair}
                  />
                  <CheckBoxMaker
                    setValue={setSomeAssistanceNeededCombingHair}
                    value={!someAssistanceNeededCombingHair}
                    id="CombingSome"
                    label="Some Assistance Needed"
                    checked={someAssistanceNeededCombingHair}
                  />
                  <CheckBoxMaker
                    setValue={setCompleteAssistanceNeededCombingHair}
                    value={!completeAssistanceNeededCombingHair}
                    id="CombingComplete"
                    label="Complete Assistance Needed"
                    checked={completeAssistanceNeededCombingHair}
                  />
                  <CheckBoxMaker
                    setValue={setNotApplicableCombingHair}
                    value={!notApplicableCombingHair}
                    id="CombingNot"
                    label="Not Applicable"
                    checked={notApplicableCombingHair}
                  />
                  <CheckBoxMaker
                    setValue={setRefusedCombingHair}
                    value={!refusedCombingHair}
                    id="CombingRefused"
                    label="Refused"
                    checked={refusedCombingHair}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item">
              <label> Staff Initials</label>
              <BorderlessInput
                setState={setStaffInitialsCombingHair}
                value={staffInitialsCombingHair}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input ">
              <label>Applying Lotion</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setRequiresNoAssistanceApplyingLotion}
                    value={!requiresNoAssistanceApplyingLotion}
                    id="ApplyingRequires"
                    label="Requires No Assistance"
                    checked={requiresNoAssistanceApplyingLotion}
                  />
                  <CheckBoxMaker
                    setValue={setSomeAssistanceNeededApplyingLotion}
                    value={!someAssistanceNeededApplyingLotion}
                    id="ApplyingSome"
                    label="Some Assistance Needed"
                    checked={someAssistanceNeededApplyingLotion}
                  />
                  <CheckBoxMaker
                    setValue={setCompleteAssistanceNeededApplyingLotion}
                    value={!completeAssistanceNeededApplyingLotion}
                    id="ApplyingComplete"
                    label="Complete Assistance Needed"
                    checked={completeAssistanceNeededApplyingLotion}
                  />
                  <CheckBoxMaker
                    setValue={setNotApplicableApplyingLotion}
                    value={!notApplicableApplyingLotion}
                    id="ApplyingNot"
                    label="Not Applicable"
                    checked={notApplicableApplyingLotion}
                  />
                  <CheckBoxMaker
                    setValue={setRefusedApplyingLotion}
                    value={!refusedApplyingLotion}
                    id="ApplyingRefused"
                    label="Refused"
                    checked={refusedApplyingLotion}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item">
              <label> Staff Initials</label>
              <BorderlessInput
                setState={setStaffInitialsApplyingLotion}
                value={staffInitialsApplyingLotion}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Laundry</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setRequiresNoAssistanceLaundry}
                    value={!requiresNoAssistanceLaundry}
                    id="LaundryRequires"
                    label="Requires No Assistance"
                    checked={requiresNoAssistanceLaundry}
                  />
                  <CheckBoxMaker
                    setValue={setSomeAssistanceNeededLaundry}
                    value={!someAssistanceNeededLaundry}
                    id="LaundrySome"
                    label="Some Assistance Needed"
                    checked={someAssistanceNeededLaundry}
                  />
                  <CheckBoxMaker
                    setValue={setCompleteAssistanceNeededLaundry}
                    value={!completeAssistanceNeededLaundry}
                    id="LaundryComplete"
                    label="Complete Assistance Needed"
                    checked={completeAssistanceNeededLaundry}
                  />
                  <CheckBoxMaker
                    setValue={setNotApplicableLaundry}
                    value={!notApplicableLaundry}
                    id="LaundryNot"
                    label="Not Applicable"
                    checked={notApplicableLaundry}
                  />
                  <CheckBoxMaker
                    setValue={setRefusedLaundry}
                    value={!refusedLaundry}
                    id="LaundryRefused"
                    label="Refused"
                    checked={refusedLaundry}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item">
              <label> Staff Initials</label>
              <BorderlessInput
                setState={setStaffInitialsLaundry}
                value={staffInitialsLaundry}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Dressing</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setRequiresNoAssistanceDressing}
                    value={!requiresNoAssistanceDressing}
                    id="DressingRequires"
                    label="Requires No Assistance"
                    checked={requiresNoAssistanceDressing}
                  />
                  <CheckBoxMaker
                    setValue={setSomeAssistanceNeededDressing}
                    value={!someAssistanceNeededDressing}
                    id="DressingSome"
                    label="Some Assistance Needed"
                    checked={someAssistanceNeededDressing}
                  />
                  <CheckBoxMaker
                    setValue={setCompleteAssistanceNeededDressing}
                    value={!completeAssistanceNeededDressing}
                    id="DressingComplete"
                    label="Complete Assistance Needed"
                    checked={completeAssistanceNeededDressing}
                  />
                  <CheckBoxMaker
                    setValue={setNotApplicableDressing}
                    value={!notApplicableDressing}
                    id="DressingNot"
                    label="Not Applicable"
                    checked={notApplicableDressing}
                  />
                  <CheckBoxMaker
                    setValue={setRefusedDressing}
                    value={!refusedDressing}
                    id="DressingRefused"
                    label="Refused"
                    checked={refusedDressing}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item">
              <label> Staff Initials</label>
              <BorderlessInput
                setState={setStaffInitialsDressing}
                value={staffInitialsDressing}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Shampooing Hair</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setRequiresNoAssistanceShampooingHair}
                    value={!requiresNoAssistanceShampooingHair}
                    id="ShampooingRequires"
                    label="Requires No Assistance"
                    checked={requiresNoAssistanceShampooingHair}
                  />
                  <CheckBoxMaker
                    setValue={setSomeAssistanceNeededShampooingHair}
                    value={!someAssistanceNeededShampooingHair}
                    id="ShampooingSome"
                    label="Some Assistance Needed"
                    checked={someAssistanceNeededShampooingHair}
                  />
                  <CheckBoxMaker
                    setValue={setCompleteAssistanceNeededShampooingHair}
                    value={!completeAssistanceNeededShampooingHair}
                    id="ShampooingComplete"
                    label="Complete Assistance Needed"
                    checked={completeAssistanceNeededShampooingHair}
                  />
                  <CheckBoxMaker
                    setValue={setNotApplicableShampooingHair}
                    value={!notApplicableShampooingHair}
                    id="ShampooingNot"
                    label="Not Applicable"
                    checked={notApplicableShampooingHair}
                  />
                  <CheckBoxMaker
                    setValue={setRefusedShampooingHair}
                    value={!refusedShampooingHair}
                    id="ShampooingRefused"
                    label="Refused"
                    checked={refusedShampooingHair}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item">
              <label> Staff Initials</label>
              <BorderlessInput
                setState={setStaffInitialsShampooingHair}
                value={staffInitialsShampooingHair}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Oral Care Morning</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setRequiresNoAssistanceOralCareMorning}
                    value={!requiresNoAssistanceOralCareMorning}
                    id="OralRequires"
                    label="Requires No Assistance"
                    checked={requiresNoAssistanceOralCareMorning}
                  />
                  <CheckBoxMaker
                    setValue={setSomeAssistanceNeededOralCareMorning}
                    value={!someAssistanceNeededOralCareMorning}
                    id="OralSome"
                    label="Some Assistance Needed"
                    checked={someAssistanceNeededOralCareMorning}
                  />
                  <CheckBoxMaker
                    setValue={setCompleteAssistanceNeededOralCareMorning}
                    value={!completeAssistanceNeededOralCareMorning}
                    id="OralComplete"
                    label="Complete Assistance Needed"
                    checked={completeAssistanceNeededOralCareMorning}
                  />
                  <CheckBoxMaker
                    setValue={setNotApplicableOralCareMorning}
                    value={!notApplicableOralCareMorning}
                    id="OraNotl"
                    label="Not Applicable"
                    checked={notApplicableOralCareMorning}
                  />
                  <CheckBoxMaker
                    setValue={setRefusedOralCareMorning}
                    value={!refusedOralCareMorning}
                    id="OralRefused"
                    label="Refused"
                    checked={refusedOralCareMorning}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item">
              <label> Staff Initials</label>
              <BorderlessInput
                setState={setStaffInitialsOralCareMorning}
                value={staffInitialsOralCareMorning}
                type="text"
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>Oral Care Evening</label>
              <div className="Radio_btns ml-3">
                <div className="btns">
                  <CheckBoxMaker
                    setValue={setRequiresNoAssistanceOralCareEvening}
                    value={!requiresNoAssistanceOralCareEvening}
                    id="OralEveningRequires"
                    label="Requires No Assistance"
                    checked={requiresNoAssistanceOralCareEvening}
                  />
                  <CheckBoxMaker
                    setValue={setSomeAssistanceNeededOralCareEvening}
                    value={!someAssistanceNeededOralCareEvening}
                    id="OralEveningSome"
                    label="Some Assistance Needed"
                    checked={someAssistanceNeededOralCareEvening}
                  />
                  <CheckBoxMaker
                    setValue={setCompleteAssistanceNeededOralCareEvening}
                    value={!completeAssistanceNeededOralCareEvening}
                    id="OralEveningComplete"
                    label="Complete Assistance Needed"
                    checked={completeAssistanceNeededOralCareEvening}
                  />
                  <CheckBoxMaker
                    setValue={setNotApplicableOralCareEvening}
                    value={!notApplicableOralCareEvening}
                    id="OralEveningNot"
                    label="Not Applicable"
                    checked={notApplicableOralCareEvening}
                  />
                  <CheckBoxMaker
                    setValue={setRefusedOralCareEvening}
                    value={!refusedOralCareEvening}
                    id="OralEveningRefused"
                    label="Refused"
                    checked={refusedOralCareEvening}
                  />
                </div>
              </div>
            </div>

            <div className="grid-item">
              <label> Staff Initials</label>
              <BorderlessInput
                setState={setStaffInitialsOralCareEvening}
                value={staffInitialsOralCareEvening}
                type="text"
              />
            </div>
          </div>

          <div className="overflow-table">
            <table className="bold-table">
              <thead>
                <tr>
                  <th>ADLS</th>
                  <th>Requires No  Assistance</th>
                  <th>Some  Assistance  Needed</th>
                  <th>Complete  Assistance  Needed</th>
                  <th>Not  Applicable</th>
                  <th>Refused</th>
                  <th>Staff Initials</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Selecting Clothes </td>
                  <td>
                    <CheckBoxMaker
                      setValue={setRequiresNoAssistanceSelectingClothes}
                      value={!requiresNoAssistanceSelectingClothes}
                      id="selectRequires"
                      label=""
                      checked={requiresNoAssistanceSelectingClothes}
                    />{" "}
                  </td>
                  <td>
                    <CheckBoxMaker
                      setValue={setSomeAssistanceNeededSelectingClothes}
                      value={!someAssistanceNeededSelectingClothes}
                      id="selectSome"
                      label=""
                      checked={someAssistanceNeededSelectingClothes}
                    />
                  </td>
                  <td>
                    <CheckBoxMaker
                      setValue={setCompleteAssistanceNeededSelectingClothes}
                      value={!completeAssistanceNeededSelectingClothes}
                      id="selectComplete"
                      label=""
                      checked={completeAssistanceNeededSelectingClothes}
                    />
                  </td>
                  <td>
                    <CheckBoxMaker
                      setValue={setNotApplicableSelectingClothes}
                      value={!notApplicableSelectingClothes}
                      id="selectNot"
                      label=""
                      checked={notApplicableSelectingClothes}
                    />
                  </td>
                  <td>
                    <CheckBoxMaker
                      setValue={setRefusedSelectingClothes}
                      value={!refusedSelectingClothes}
                      id="selectRefused"
                      label=""
                      checked={refusedSelectingClothes}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </Container>
      <div>
        <div className="top-div-personal">
          <Form
            onSubmit={submitHandler}
            className="form-personal offer-letter appendix1 w-100"
          >
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Breakfast</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceBreakfast}
                  value={!requiresNoAssistanceBreakfast}
                  onChange={(e) =>
                    setRequiresNoAssistanceBreakfast(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededBreakfast}
                  value={!someAssistanceNeededBreakfast}
                  onChange={(e) =>
                    setSomeAssistanceNeededBreakfast(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededBreakfast}
                  value={!completeAssistanceNeededBreakfast}
                  onChange={(e) =>
                    setCompleteAssistanceNeededBreakfast(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableBreakfast}
                  value={!notApplicableBreakfast}
                  onChange={(e) => setNotApplicableBreakfast(e.target.value)}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedBreakfast}
                  value={!refusedBreakfast}
                  onChange={(e) => setRefusedBreakfast(e.target.value)}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setStaffInitialsBreakfast(e.target.value)}
                required
                value={staffInitialsBreakfast}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Lunch</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceLunch}
                  value={!requiresNoAssistanceLunch}
                  onChange={(e) => setRequiresNoAssistanceLunch(e.target.value)}
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededLunch}
                  value={!someAssistanceNeededLunch}
                  onChange={(e) => setSomeAssistanceNeededLunch(e.target.value)}
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededLunch}
                  value={!completeAssistanceNeededLunch}
                  onChange={(e) =>
                    setCompleteAssistanceNeededLunch(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableLunch}
                  value={!notApplicableLunch}
                  onChange={(e) => setNotApplicableLunch(e.target.value)}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedLunch}
                  value={!refusedLunch}
                  onChange={(e) => setRefusedLunch(e.target.value)}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setStaffInitialsLunch(e.target.value)}
                value={staffInitialsLunch}
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Dinner</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceDinner}
                  value={!requiresNoAssistanceDinner}
                  onChange={(e) =>
                    setRequiresNoAssistanceDinner(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededDinner}
                  value={!someAssistanceNeededDinner}
                  onChange={(e) =>
                    setSomeAssistanceNeededDinner(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededDinner}
                  value={!completeAssistanceNeededDinner}
                  onChange={(e) =>
                    setCompleteAssistanceNeededDinner(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableDinner}
                  value={!notApplicableDinner}
                  onChange={(e) => setNotApplicableDinner(e.target.value)}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedDinner}
                  value={!refusedDinner}
                  onChange={(e) => setRefusedDinner(e.target.value)}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setStaffInitialsDinner(e.target.value)}
                required
                value={staffInitialsDinner}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>AM Snack</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceAMSnack}
                  value={!requiresNoAssistanceAMSnack}
                  onChange={(e) =>
                    setRequiresNoAssistanceAMSnack(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededAMSnack}
                  value={!someAssistanceNeededAMSnack}
                  onChange={(e) =>
                    setSomeAssistanceNeededAMSnack(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededAMSnack}
                  value={!completeAssistanceNeededAMSnack}
                  onChange={(e) =>
                    setCompleteAssistanceNeededAMSnack(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableAMSnack}
                  value={!notApplicableAMSnack}
                  onChange={(e) => setNotApplicableAMSnack(e.target.value)}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedAMSnack}
                  value={!refusedAMSnack}
                  onChange={(e) => setRefusedAMSnack(e.target.value)}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setStaffInitialsAMSnack(e.target.value)}
                required
                value={staffInitialsAMSnack}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>PM Snack</Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistancePMSnack}
                  value={!requiresNoAssistancePMSnack}
                  onChange={(e) =>
                    setRequiresNoAssistancePMSnack(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededPMSnack}
                  value={!someAssistanceNeededPMSnack}
                  onChange={(e) =>
                    setSomeAssistanceNeededPMSnack(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededPMSnack}
                  value={!completeAssistanceNeededPMSnack}
                  onChange={(e) =>
                    setCompleteAssistanceNeededPMSnack(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicablePMSnack}
                  value={!notApplicablePMSnack}
                  onChange={(e) => setNotApplicablePMSnack(e.target.value)}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedPMSnack}
                  value={!refusedPMSnack}
                  onChange={(e) => setRefusedPMSnack(e.target.value)}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setStaffInitialsPMSnack(e.target.value)}
                required
                value={staffInitialsPMSnack}
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                AM Bowel Movement
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceAMBowelMovement}
                  value={!requiresNoAssistanceAMBowelMovement}
                  onChange={(e) =>
                    setRequiresNoAssistanceAMBowelMovement(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededAMBowelMovement}
                  value={!someAssistanceNeededAMBowelMovement}
                  onChange={(e) =>
                    setSomeAssistanceNeededAMBowelMovement(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededAMBowelMovement}
                  value={!completeAssistanceNeededAMBowelMovement}
                  onChange={(e) =>
                    setCompleteAssistanceNeededAMBowelMovement(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableAMBowelMovement}
                  value={!notApplicableAMBowelMovement}
                  onChange={(e) =>
                    setNotApplicableAMBowelMovement(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedAMBowelMovement}
                  value={!refusedAMBowelMovement}
                  onChange={(e) => setRefusedAMBowelMovement(e.target.value)}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  setStaffInitialsAMBowelMovement(e.target.value)
                }
                value={staffInitialsAMBowelMovement}
                required
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                PM Bowel Movement
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistancePMBowelMovement}
                  value={!requiresNoAssistancePMBowelMovement}
                  onChange={(e) =>
                    setRequiresNoAssistancePMBowelMovement(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededPMBowelMovement}
                  value={!someAssistanceNeededPMBowelMovement}
                  onChange={(e) =>
                    setSomeAssistanceNeededPMBowelMovement(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededPMBowelMovement}
                  value={!completeAssistanceNeededPMBowelMovement}
                  onChange={(e) =>
                    setCompleteAssistanceNeededPMBowelMovement(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicablePMBowelMovement}
                  value={!notApplicablePMBowelMovement}
                  onChange={(e) =>
                    setNotApplicablePMBowelMovement(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedPMBowelMovement}
                  value={!refusedPMBowelMovement}
                  onChange={(e) => setRefusedPMBowelMovement(e.target.value)}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  setStaffInitialsPMBowelMovement(e.target.value)
                }
                value={staffInitialsPMBowelMovement}
                type="text"
                required
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Overnight Bowel Movement
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceOvernightBowelMovement}
                  value={!requiresNoAssistanceOvernightBowelMovement}
                  onChange={(e) =>
                    setRequiresNoAssistanceOvernightBowelMovement(
                      e.target.value
                    )
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededOvernightBowelMovement}
                  value={!someAssistanceNeededOvernightBowelMovement}
                  onChange={(e) =>
                    setSomeAssistanceNeededOvernightBowelMovement(
                      e.target.value
                    )
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededOvernightBowelMovement}
                  value={!completeAssistanceNeededOvernightBowelMovement}
                  onChange={(e) =>
                    setCompleteAssistanceNeededOvernightBowelMovement(
                      e.target.value
                    )
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableOvernightBowelMovement}
                  value={!notApplicableOvernightBowelMovement}
                  onChange={(e) =>
                    setNotApplicableOvernightBowelMovement(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedOvernightBowelMovement}
                  value={!refusedOvernightBowelMovement}
                  onChange={(e) =>
                    setRefusedOvernightBowelMovement(e.target.value)
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  setStaffInitialsOvernightBowelMovement(e.target.value)
                }
                type="text"
                required
                value={staffInitialsOvernightBowelMovement}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Hand & Foot nail care
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceHandAndFootNailCare}
                  value={!requiresNoAssistanceHandAndFootNailCare}
                  onChange={(e) =>
                    setRequiresNoAssistanceHandAndFootNailCare(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededHandAndFootNailCare}
                  value={!someAssistanceNeededHandAndFootNailCare}
                  onChange={(e) =>
                    setSomeAssistanceNeededHandAndFootNailCare(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededHandAndFootNailCare}
                  value={!completeAssistanceNeededHandAndFootNailCare}
                  onChange={(e) =>
                    setCompleteAssistanceNeededHandAndFootNailCare(
                      e.target.value
                    )
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableHandAndFootNailCare}
                  value={!notApplicableHandAndFootNailCare}
                  onChange={(e) =>
                    setNotApplicableHandAndFootNailCare(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedHandAndFootNailCare}
                  value={!refusedHandAndFootNailCare}
                  onChange={(e) =>
                    setRefusedHandAndFootNailCare(e.target.value)
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setStaffInitialsHandAndFootNailCare(e.target.value)
                }
                value={staffInitialsHandAndFootNailCare}
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Bed Mobility
              </Form.Label>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  opacity: "60%",
                  marginBottom: "1.2rem",
                }}
              >
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceBedMobility}
                  value={!requiresNoAssistanceBedMobility}
                  onChange={(e) =>
                    setRequiresNoAssistanceBedMobility(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededBedMobility}
                  value={!someAssistanceNeededBedMobility}
                  onChange={(e) =>
                    setSomeAssistanceNeededBedMobility(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededBedMobility}
                  value={!completeAssistanceNeededBedMobility}
                  onChange={(e) =>
                    setCompleteAssistanceNeededBedMobility(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableBedMobility}
                  value={!notApplicableBedMobility}
                  onChange={(e) => setNotApplicableBedMobility(e.target.value)}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedBedMobility}
                  value={!refusedBedMobility}
                  onChange={(e) => setRefusedBedMobility(e.target.value)}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setStaffInitialsBedMobility(e.target.value)}
                value={staffInitialsBedMobility}
                required
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-5">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Staff members are to initial once ADLs is completed on each
                shift.{" "}
              </Form.Label>
            </Form.Group>

            <div className="cluod_save">
              <div className="main">
                <button className="outlined_btn">SAVE AS DRAFT</button>
                <button
                  type="button"
                  className="filled"
                  onClick={() => setOpen(true)}
                >
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
                  borderRadius: "10px",
                }}
                type="submit"
              >
                PRINT REPORT
              </button>
            </div>
            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                {loading ? <ClipLoader colro="#fff" /> : "SUBMIT"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default HOC(CreateDTF);
