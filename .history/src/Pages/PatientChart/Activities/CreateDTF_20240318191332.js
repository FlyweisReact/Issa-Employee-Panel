/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal";
import {
  BorderlessInput,
  BorderlessSelect,
  CheckBoxMaker,
  DateFormatter,
} from "../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import HOC from "../../../Layout/Inner/HOC";
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
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [date, setDate] = useState("");
  const [
    requiresNoAssistanceSelectingClothes,
    setRequiresNoAssistanceSelectingClothes,
  ] = useState(true);
  const [
    someAssistanceNeededSelectingClothes,
    setSomeAssistanceNeededSelectingClothes,
  ] = useState(true);
  const [
    completeAssistanceNeededSelectingClothes,
    setCompleteAssistanceNeededSelectingClothes,
  ] = useState(true);
  const [notApplicableSelectingClothes, setNotApplicableSelectingClothes] =
    useState(true);
  const [refusedSelectingClothes, setRefusedSelectingClothes] = useState(true);
  const [staffInitialsSelectingClothes, setStaffInitialsSelectingClothes] =
    useState("");
  const [
    requiresNoAssistanceBathingOrShowering,
    setRequiresNoAssistanceBathingOrShowering,
  ] = useState(true);
  const [
    someAssistanceNeededBathingOrShowering,
    setSomeAssistanceNeededBathingOrShowering,
  ] = useState(true);
  const [
    completeAssistanceNeededBathingOrShowering,
    setCompleteAssistanceNeededBathingOrShowering,
  ] = useState(true);
  const [notApplicableBathingOrShowering, setNotApplicableBathingOrShowering] =
    useState(true);
  const [refusedBathingOrShowering, setRefusedBathingOrShowering] =
    useState(true);
  const [staffInitialsBathingOrShowering, setStaffInitialsBathingOrShowering] =
    useState("");
  const [requiresNoAssistanceCombingHair, setRequiresNoAssistanceCombingHair] =
    useState(true);
  const [someAssistanceNeededCombingHair, setSomeAssistanceNeededCombingHair] =
    useState(true);
  const [
    completeAssistanceNeededCombingHair,
    setCompleteAssistanceNeededCombingHair,
  ] = useState(true);
  const [notApplicableCombingHair, setNotApplicableCombingHair] =
    useState(true);
  const [refusedCombingHair, setRefusedCombingHair] = useState(true);
  const [staffInitialsCombingHair, setStaffInitialsCombingHair] = useState("");
  const [
    requiresNoAssistanceApplyingLotion,
    setRequiresNoAssistanceApplyingLotion,
  ] = useState(true);
  const [
    someAssistanceNeededApplyingLotion,
    setSomeAssistanceNeededApplyingLotion,
  ] = useState(true);
  const [
    completeAssistanceNeededApplyingLotion,
    setCompleteAssistanceNeededApplyingLotion,
  ] = useState(true);
  const [notApplicableApplyingLotion, setNotApplicableApplyingLotion] =
    useState(true);
  const [refusedApplyingLotion, setRefusedApplyingLotion] = useState(true);
  const [staffInitialsApplyingLotion, setStaffInitialsApplyingLotion] =
    useState("");
  const [requiresNoAssistanceLaundry, setRequiresNoAssistanceLaundry] =
    useState(true);
  const [someAssistanceNeededLaundry, setSomeAssistanceNeededLaundry] =
    useState(true);
  const [completeAssistanceNeededLaundry, setCompleteAssistanceNeededLaundry] =
    useState(true);
  const [notApplicableLaundry, setNotApplicableLaundry] = useState(true);
  const [refusedLaundry, setRefusedLaundry] = useState(true);
  const [staffInitialsLaundry, setStaffInitialsLaundry] = useState("");
  const [requiresNoAssistanceDressing, setRequiresNoAssistanceDressing] =
    useState(true);
  const [someAssistanceNeededDressing, setSomeAssistanceNeededDressing] =
    useState(true);
  const [
    completeAssistanceNeededDressing,
    setCompleteAssistanceNeededDressing,
  ] = useState(true);
  const [notApplicableDressing, setNotApplicableDressing] = useState(true);
  const [refusedDressing, setRefusedDressing] = useState(true);
  const [staffInitialsDressing, setStaffInitialsDressing] = useState("");
  const [
    requiresNoAssistanceShampooingHair,
    setRequiresNoAssistanceShampooingHair,
  ] = useState(true);
  const [
    someAssistanceNeededShampooingHair,
    setSomeAssistanceNeededShampooingHair,
  ] = useState(true);
  const [
    completeAssistanceNeededShampooingHair,
    setCompleteAssistanceNeededShampooingHair,
  ] = useState(true);
  const [notApplicableShampooingHair, setNotApplicableShampooingHair] =
    useState(true);
  const [refusedShampooingHair, setRefusedShampooingHair] = useState(true);
  const [staffInitialsShampooingHair, setStaffInitialsShampooingHair] =
    useState("");
  const [
    requiresNoAssistanceOralCareMorning,
    setRequiresNoAssistanceOralCareMorning,
  ] = useState(true);
  const [
    someAssistanceNeededOralCareMorning,
    setSomeAssistanceNeededOralCareMorning,
  ] = useState(true);
  const [
    completeAssistanceNeededOralCareMorning,
    setCompleteAssistanceNeededOralCareMorning,
  ] = useState(true);
  const [notApplicableOralCareMorning, setNotApplicableOralCareMorning] =
    useState(true);
  const [refusedOralCareMorning, setRefusedOralCareMorning] = useState(true);
  const [staffInitialsOralCareMorning, setStaffInitialsOralCareMorning] =
    useState("");
  const [
    requiresNoAssistanceOralCareEvening,
    setRequiresNoAssistanceOralCareEvening,
  ] = useState(true);
  const [
    someAssistanceNeededOralCareEvening,
    setSomeAssistanceNeededOralCareEvening,
  ] = useState(true);
  const [
    completeAssistanceNeededOralCareEvening,
    setCompleteAssistanceNeededOralCareEvening,
  ] = useState(true);
  const [notApplicableOralCareEvening, setNotApplicableOralCareEvening] =
    useState(true);
  const [refusedOralCareEvening, setRefusedOralCareEvening] = useState(true);
  const [staffInitialsOralCareEvening, setStaffInitialsOralCareEvening] =
    useState("");
  const [requiresNoAssistanceBreakfast, setRequiresNoAssistanceBreakfast] =
    useState(true);
  const [someAssistanceNeededBreakfast, setSomeAssistanceNeededBreakfast] =
    useState(true);
  const [
    completeAssistanceNeededBreakfast,
    setCompleteAssistanceNeededBreakfast,
  ] = useState(true);
  const [notApplicableBreakfast, setNotApplicableBreakfast] = useState(true);
  const [refusedBreakfast, setRefusedBreakfast] = useState(true);
  const [staffInitialsBreakfast, setStaffInitialsBreakfast] = useState("");
  const [requiresNoAssistanceLunch, setRequiresNoAssistanceLunch] =
    useState(true);
  const [someAssistanceNeededLunch, setSomeAssistanceNeededLunch] =
    useState(true);
  const [completeAssistanceNeededLunch, setCompleteAssistanceNeededLunch] =
    useState(true);
  const [notApplicableLunch, setNotApplicableLunch] = useState(true);
  const [refusedLunch, setRefusedLunch] = useState(true);
  const [staffInitialsLunch, setStaffInitialsLunch] = useState("");
  const [requiresNoAssistanceDinner, setRequiresNoAssistanceDinner] =
    useState(true);
  const [someAssistanceNeededDinner, setSomeAssistanceNeededDinner] =
    useState(true);
  const [completeAssistanceNeededDinner, setCompleteAssistanceNeededDinner] =
    useState(true);
  const [notApplicableDinner, setNotApplicableDinner] = useState(true);
  const [refusedDinner, setRefusedDinner] = useState(true);
  const [staffInitialsDinner, setStaffInitialsDinner] = useState("");
  const [requiresNoAssistanceAMSnack, setRequiresNoAssistanceAMSnack] =
    useState(true);
  const [someAssistanceNeededAMSnack, setSomeAssistanceNeededAMSnack] =
    useState(true);
  const [completeAssistanceNeededAMSnack, setCompleteAssistanceNeededAMSnack] =
    useState(true);
  const [notApplicableAMSnack, setNotApplicableAMSnack] = useState(true);
  const [refusedAMSnack, setRefusedAMSnack] = useState(true);
  const [staffInitialsAMSnack, setStaffInitialsAMSnack] = useState("");
  const [requiresNoAssistancePMSnack, setRequiresNoAssistancePMSnack] =
    useState(true);
  const [someAssistanceNeededPMSnack, setSomeAssistanceNeededPMSnack] =
    useState(true);
  const [completeAssistanceNeededPMSnack, setCompleteAssistanceNeededPMSnack] =
    useState(true);
  const [notApplicablePMSnack, setNotApplicablePMSnack] = useState(false);
  const [refusedPMSnack, setRefusedPMSnack] = useState(false);
  const [staffInitialsPMSnack, setStaffInitialsPMSnack] = useState("");
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
  const [savedDate, setSavedDate] = useState("");
  const [savedTime, setSavedTime] = useState("");

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
          setValue: setNotApplicablePMSnack,
          value: notApplicablePMSnack,
        },
        {
          setValue: setRefusedPMSnack,
          value: refusedPMSnack,
        },
      ],
      setInput: setStaffInitialsPMSnack,
      input: staffInitialsPMSnack,
    },
    {
      heading: "AM Bowel Movement",
      row: [
        {
          setValue: setRequiresNoAssistanceAMBowelMovement,
          value: requiresNoAssistanceAMBowelMovement,
        },
        {
          setValue: setSomeAssistanceNeededAMBowelMovement,
          value: someAssistanceNeededAMBowelMovement,
        },
        {
          setValue: setCompleteAssistanceNeededAMBowelMovement,
          value: completeAssistanceNeededAMBowelMovement,
        },
        {
          setValue: setNotApplicableAMBowelMovement,
          value: notApplicableAMBowelMovement,
        },
        {
          setValue: setRefusedAMBowelMovement,
          value: refusedAMBowelMovement,
        },
      ],
      setInput: setStaffInitialsAMBowelMovement,
      input: staffInitialsAMBowelMovement,
    },
    {
      heading: "PM Bowel Movement",
      row: [
        {
          setValue: setRequiresNoAssistancePMBowelMovement,
          value: requiresNoAssistancePMBowelMovement,
        },
        {
          setValue: setSomeAssistanceNeededPMBowelMovement,
          value: someAssistanceNeededPMBowelMovement,
        },
        {
          setValue: setCompleteAssistanceNeededPMBowelMovement,
          value: completeAssistanceNeededPMBowelMovement,
        },
        {
          setValue: setNotApplicablePMBowelMovement,
          value: notApplicablePMBowelMovement,
        },
        {
          setValue: setRefusedPMBowelMovement,
          value: refusedPMBowelMovement,
        },
      ],
      setInput: setStaffInitialsPMBowelMovement,
      input: staffInitialsPMBowelMovement,
    },

    {
      heading: "Overnight Bowel Movement",
      row: [
        {
          setValue: setRequiresNoAssistanceOvernightBowelMovement,
          value: requiresNoAssistanceOvernightBowelMovement,
        },
        {
          setValue: setSomeAssistanceNeededOvernightBowelMovement,
          value: someAssistanceNeededOvernightBowelMovement,
        },
        {
          setValue: setCompleteAssistanceNeededOvernightBowelMovement,
          value: completeAssistanceNeededOvernightBowelMovement,
        },
        {
          setValue: setNotApplicableOvernightBowelMovement,
          value: notApplicableOvernightBowelMovement,
        },
        {
          setValue: setRefusedOvernightBowelMovement,
          value: refusedOvernightBowelMovement,
        },
      ],
      setInput: setStaffInitialsOvernightBowelMovement,
      input: staffInitialsOvernightBowelMovement,
    },
    {
      heading: "Hand & Foot nail care",
      row: [
        {
          setValue: setRequiresNoAssistanceHandAndFootNailCare,
          value: requiresNoAssistanceHandAndFootNailCare,
        },
        {
          setValue: setSomeAssistanceNeededHandAndFootNailCare,
          value: someAssistanceNeededHandAndFootNailCare,
        },
        {
          setValue: setCompleteAssistanceNeededHandAndFootNailCare,
          value: completeAssistanceNeededHandAndFootNailCare,
        },
        {
          setValue: setNotApplicableHandAndFootNailCare,
          value: notApplicableHandAndFootNailCare,
        },
        {
          setValue: setRefusedHandAndFootNailCare,
          value: refusedHandAndFootNailCare,
        },
      ],
      setInput: setStaffInitialsHandAndFootNailCare,
      input: staffInitialsHandAndFootNailCare,
    },
    {
      heading: "Bed Mobility",
      row: [
        {
          setValue: setRequiresNoAssistanceBedMobility,
          value: requiresNoAssistanceBedMobility,
        },
        {
          setValue: setSomeAssistanceNeededBedMobility,
          value: someAssistanceNeededBedMobility,
        },
        {
          setValue: setCompleteAssistanceNeededBedMobility,
          value: completeAssistanceNeededBedMobility,
        },
        {
          setValue: setNotApplicableBedMobility,
          value: notApplicableBedMobility,
        },
        {
          setValue: setRefusedBedMobility,
          value: refusedBedMobility,
        },
      ],
      setInput: setStaffInitialsBedMobility,
      input: staffInitialsBedMobility,
    },
  ];

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSavedSigned}
        value={savedSigned}
        setDate={setSavedDate}
        setTime={setSavedTime}
      />
      <NavWrapper title={"Activities of Daily Living Tracking Form"} />
      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
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

          <p className="fw-bold text-desc mt-3">
            Staff members are to initial once ADLs is completed on each shift.
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
              {savedSigned && (
                <p>
                  Digitally Sign by {savedSigned}{" "}
                  {savedDate && DateInMMDDYY(savedDate)} {savedTime}{" "}
                </p>
              )}
            </div>
          </div>

          <button className="employee_create_btn">
            {loading ? <ClipLoader colro="#fff" /> : "SUBMIT"}
          </button>
        </form>
      </Container>
    </>
  );
};

export default HOC(CreateDTF);
