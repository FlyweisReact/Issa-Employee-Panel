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

export const TableRow = ({ heading, row, input, setInput }) => {
  return (
    <tr>
      <td> {heading} </td>
      {row?.map((i, index) => (
        <td key={index}>
          <div className="Radio_btns">
            <div className="btns">
              <CheckBoxMaker
                setValue={i?.setValue}
                value={!i?.value}
                id={`${heading}${i?.value}`}
                label=""
                checked={i?.value}
              />{" "}
            </div>
          </div>
        </td>
      ))}
      <td>
        <BorderlessInput setState={setInput} value={input} type="text" />
      </td>
    </tr>
  );
};

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

  const KeyPair = [
    {
      heading: "Selecting Clothes",
      row: [
        {
          setValue: setRequiresNoAssistanceSelectingClothes,
          value: requiresNoAssistanceSelectingClothes,
        },
        {
          setValue: setSomeAssistanceNeededSelectingClothes,
          value: someAssistanceNeededSelectingClothes,
        },
        {
          setValue: setCompleteAssistanceNeededSelectingClothes,
          value: completeAssistanceNeededSelectingClothes,
        },
        {
          setValue: setNotApplicableSelectingClothes,
          value: notApplicableSelectingClothes,
        },
        {
          setValue: setRefusedSelectingClothes,
          value: refusedSelectingClothes,
        },
      ],
      input: staffInitialsSelectingClothes,
      setInput: setStaffInitialsSelectingClothes,
    },
    {
      heading: "Bathing or Showering",
      row: [
        {
          setValue: setRequiresNoAssistanceBathingOrShowering,
          value: requiresNoAssistanceBathingOrShowering,
        },
        {
          setValue: setSomeAssistanceNeededBathingOrShowering,
          value: someAssistanceNeededBathingOrShowering,
        },
        {
          setValue: setCompleteAssistanceNeededBathingOrShowering,
          value: completeAssistanceNeededBathingOrShowering,
        },
        {
          setValue: setNotApplicableBathingOrShowering,
          value: notApplicableBathingOrShowering,
        },
        {
          setValue: setRefusedBathingOrShowering,
          value: refusedBathingOrShowering,
        },
      ],
      input: staffInitialsBathingOrShowering,
      setInput: setStaffInitialsBathingOrShowering,
    },
    {
      heading: "Combing Hair",
      row: [
        {
          setValue: setRequiresNoAssistanceCombingHair,
          value: requiresNoAssistanceCombingHair,
        },
        {
          setValue: setSomeAssistanceNeededCombingHair,
          value: someAssistanceNeededCombingHair,
        },
        {
          setValue: setCompleteAssistanceNeededCombingHair,
          value: completeAssistanceNeededCombingHair,
        },
        {
          setValue: setNotApplicableCombingHair,
          value: notApplicableCombingHair,
        },
        {
          setValue: setRefusedCombingHair,
          value: refusedCombingHair,
        },
      ],
      setInput: setStaffInitialsCombingHair,
      input: staffInitialsCombingHair,
    },
    {
      heading: "Applying Lotion",
      row: [
        {
          setValue: setRequiresNoAssistanceApplyingLotion,
          value: requiresNoAssistanceApplyingLotion,
        },
        {
          setValue: setSomeAssistanceNeededApplyingLotion,
          value: someAssistanceNeededApplyingLotion,
        },
        {
          setValue: setCompleteAssistanceNeededApplyingLotion,
          value: completeAssistanceNeededApplyingLotion,
        },
        {
          setValue: setNotApplicableApplyingLotion,
          value: notApplicableApplyingLotion,
        },
        {
          setValue: setRefusedApplyingLotion,
          value: refusedApplyingLotion,
        },
      ],
      setInput: setStaffInitialsApplyingLotion,
      input: staffInitialsApplyingLotion,
    },
    {
      heading: "Laundry",
      row: [
        {
          setValue: setRequiresNoAssistanceLaundry,
          value: requiresNoAssistanceLaundry,
        },
        {
          setValue: setSomeAssistanceNeededLaundry,
          value: someAssistanceNeededLaundry,
        },
        {
          setValue: setCompleteAssistanceNeededLaundry,
          value: completeAssistanceNeededLaundry,
        },
        {
          setValue: setNotApplicableLaundry,
          value: notApplicableLaundry,
        },
        {
          setValue: setRefusedLaundry,
          value: refusedLaundry,
        },
      ],
      setInput: setStaffInitialsLaundry,
      input: staffInitialsLaundry,
    },
    {
      heading: "Dressing",
      row: [
        {
          setValue: setRequiresNoAssistanceDressing,
          value: requiresNoAssistanceDressing,
        },
        {
          setValue: setSomeAssistanceNeededDressing,
          value: someAssistanceNeededDressing,
        },
        {
          setValue: setCompleteAssistanceNeededDressing,
          value: completeAssistanceNeededDressing,
        },
        {
          setValue: setNotApplicableDressing,
          value: notApplicableDressing,
        },
        {
          setValue: setRefusedDressing,
          value: refusedDressing,
        },
      ],
      setInput: setStaffInitialsDressing,
      input: staffInitialsDressing,
    },
    {
      heading: "Shampooing Hair",
      row: [
        {
          setValue: setRequiresNoAssistanceShampooingHair,
          value: requiresNoAssistanceShampooingHair,
        },
        {
          setValue: setSomeAssistanceNeededShampooingHair,
          value: someAssistanceNeededShampooingHair,
        },
        {
          setValue: setCompleteAssistanceNeededShampooingHair,
          value: completeAssistanceNeededShampooingHair,
        },
        {
          setValue: setNotApplicableShampooingHair,
          value: notApplicableShampooingHair,
        },
        {
          setValue: setRefusedShampooingHair,
          value: refusedShampooingHair,
        },
      ],
      setInput: setStaffInitialsShampooingHair,
      input: staffInitialsShampooingHair,
    },
    {
      heading: "Oral Care Evening",
      row: [
        {
          setValue: setRequiresNoAssistanceOralCareEvening,
          value: requiresNoAssistanceOralCareEvening,
        },
        {
          setValue: setSomeAssistanceNeededOralCareEvening,
          value: someAssistanceNeededOralCareEvening,
        },
        {
          setValue: setCompleteAssistanceNeededOralCareEvening,
          value: completeAssistanceNeededOralCareEvening,
        },
        {
          setValue: setNotApplicableOralCareEvening,
          value: notApplicableOralCareEvening,
        },
        {
          setValue: setRefusedOralCareEvening,
          value: refusedOralCareEvening,
        },
      ],
      setInput: setStaffInitialsOralCareEvening,
      input: staffInitialsOralCareEvening,
    },
    {
      heading: "Oral Care Morning",
      row: [
        {
          setValue: setRequiresNoAssistanceOralCareMorning,
          value: requiresNoAssistanceOralCareMorning,
        },
        {
          setValue: setSomeAssistanceNeededOralCareMorning,
          value: someAssistanceNeededOralCareMorning,
        },
        {
          setValue: setCompleteAssistanceNeededOralCareMorning,
          value: completeAssistanceNeededOralCareMorning,
        },
        {
          setValue: setNotApplicableOralCareMorning,
          value: notApplicableOralCareMorning,
        },
        {
          setValue: setRefusedOralCareMorning,
          value: refusedOralCareMorning,
        },
      ],
      setInput: setStaffInitialsOralCareMorning,
      input: staffInitialsOralCareMorning,
    },
    {
      heading: "Breakfast",
      row: [
        {
          setValue: setRequiresNoAssistanceBreakfast,
          value: requiresNoAssistanceBreakfast,
        },
        {
          setValue: setSomeAssistanceNeededBreakfast,
          value: someAssistanceNeededBreakfast,
        },
        {
          setValue: setCompleteAssistanceNeededBreakfast,
          value: completeAssistanceNeededBreakfast,
        },
        {
          setValue: setNotApplicableBreakfast,
          value: notApplicableBreakfast,
        },
        {
          setValue: setRefusedBreakfast,
          value: refusedBreakfast,
        },
      ],
      setInput: setStaffInitialsBreakfast,
      input: staffInitialsBreakfast,
    },
    {
      heading: "Lunch",
      row: [
        {
          setValue: setRequiresNoAssistanceLunch,
          value: requiresNoAssistanceLunch,
        },
        {
          setValue: setSomeAssistanceNeededLunch,
          value: someAssistanceNeededLunch,
        },
        {
          setValue: setCompleteAssistanceNeededLunch,
          value: completeAssistanceNeededLunch,
        },
        {
          setValue: setNotApplicableLunch,
          value: notApplicableLunch,
        },
        {
          setValue: setRefusedLunch,
          value: refusedLunch,
        },
      ],
      setInput: setStaffInitialsLunch,
      input: staffInitialsLunch,
    },
    {
      heading: "Dinner",
      row: [
        {
          setValue: setRequiresNoAssistanceDinner,
          value: requiresNoAssistanceDinner,
        },
        {
          setValue: setSomeAssistanceNeededDinner,
          value: someAssistanceNeededDinner,
        },
        {
          setValue: setCompleteAssistanceNeededDinner,
          value: completeAssistanceNeededDinner,
        },
        {
          setValue: setNotApplicableDinner,
          value: notApplicableDinner,
        },
        {
          setValue: setRefusedDinner,
          value: refusedDinner,
        },
      ],
      setInput: setStaffInitialsDinner,
      input: staffInitialsDinner,
    },
    {
      heading: "AM Snack",
      row: [
        {
          setValue: setRequiresNoAssistanceAMSnack,
          value: requiresNoAssistanceAMSnack,
        },
        {
          setValue: setSomeAssistanceNeededAMSnack,
          value: someAssistanceNeededAMSnack,
        },
        {
          setValue: setCompleteAssistanceNeededAMSnack,
          value: completeAssistanceNeededAMSnack,
        },
        {
          setValue: setNotApplicableAMSnack,
          value: notApplicableAMSnack,
        },
        {
          setValue: setRefusedAMSnack,
          value: refusedAMSnack,
        },
      ],
      setInput: setStaffInitialsAMSnack,
      input: staffInitialsAMSnack,
    },

    {
        heading: "PM Snack",
        row: [
          {
            setValue: setRequiresNoAssistancePMSnack,
            value: requiresNoAssistancePMSnack,
          },
          {
            setValue: setSomeAssistanceNeededPMSnack,
            value: someAssistanceNeededPMSnack,
          },
          {
            setValue: setCompleteAssistanceNeededPMSnack,
            value: completeAssistanceNeededPMSnack,
          },
          {
            setValue: setNotApplicableAMSnack,
            value: notApplicableAMSnack,
          },
          {
            setValue: setRefusedAMSnack,
            value: refusedAMSnack,
          },
        ],
        setInput: setStaffInitialsAMSnack,
        input: staffInitialsAMSnack,
      },
      {
        heading: "AM Snack",
        row: [
          {
            setValue: setRequiresNoAssistanceAMSnack,
            value: requiresNoAssistanceAMSnack,
          },
          {
            setValue: setSomeAssistanceNeededAMSnack,
            value: someAssistanceNeededAMSnack,
          },
          {
            setValue: setCompleteAssistanceNeededAMSnack,
            value: completeAssistanceNeededAMSnack,
          },
          {
            setValue: setNotApplicableAMSnack,
            value: notApplicableAMSnack,
          },
          {
            setValue: setRefusedAMSnack,
            value: refusedAMSnack,
          },
        ],
        setInput: setStaffInitialsAMSnack,
        input: staffInitialsAMSnack,
      },
      {
        heading: "AM Snack",
        row: [
          {
            setValue: setRequiresNoAssistanceAMSnack,
            value: requiresNoAssistanceAMSnack,
          },
          {
            setValue: setSomeAssistanceNeededAMSnack,
            value: someAssistanceNeededAMSnack,
          },
          {
            setValue: setCompleteAssistanceNeededAMSnack,
            value: completeAssistanceNeededAMSnack,
          },
          {
            setValue: setNotApplicableAMSnack,
            value: notApplicableAMSnack,
          },
          {
            setValue: setRefusedAMSnack,
            value: refusedAMSnack,
          },
        ],
        setInput: setStaffInitialsAMSnack,
        input: staffInitialsAMSnack,
      },
  ];

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
                {KeyPair?.map((item, index) => (
                  <TableRow
                    heading={item?.heading}
                    row={item?.row}
                    input={item?.input}
                    setInput={item?.setInput}
                    key={index}
                  />
                ))}
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
              <Form.Label style={{ fontWeight: "bold" }}> Snack</Form.Label>
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
                  value={!}
                  onChange={(e) =>
                    (e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededPMSnack}
                  value={!}
                  onChange={(e) =>
                    (e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={}
                  value={!completeAssistanceNeededPMSnack}
                  onChange={(e) =>
                    (e.target.value)
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
