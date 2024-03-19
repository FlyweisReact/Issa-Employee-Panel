/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import { BorderlessSelect, DefaultInput } from "../../../Helper/Makers";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { useParams } from "react-router-dom";

export const TableRow = ({ heading, row, input }) => {
  return (
    <tr>
      <td> {heading} </td>
      {row?.map((i, index) => (
        <td key={index}>
          <div className="Radio_btns">
            <div className="btns">
              <DefaultInput isBots={false} value={i?.value ? "Yes" : "No"} />
            </div>
          </div>
        </td>
      ))}
      <td>
        <DefaultInput isBots={false} value={input} />
      </td>
    </tr>
  );
};

const ViewDTF = () => {
  const { id } = useParams();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [date, setDate] = useState("");
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
  const [requiresNoAssistanceLaundry, setRequiresNoAssistanceLaundry] =
    useState(false);
  const [someAssistanceNeededLaundry, setSomeAssistanceNeededLaundry] =
    useState(false);
  const [completeAssistanceNeededLaundry, setCompleteAssistanceNeededLaundry] =
    useState(false);
  const [notApplicableLaundry, setNotApplicableLaundry] = useState(false);
  const [refusedLaundry, setRefusedLaundry] = useState(false);
  const [staffInitialsLaundry, setStaffInitialsLaundry] = useState("");
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
  const [requiresNoAssistanceLunch, setRequiresNoAssistanceLunch] =
    useState(false);
  const [someAssistanceNeededLunch, setSomeAssistanceNeededLunch] =
    useState(false);
  const [completeAssistanceNeededLunch, setCompleteAssistanceNeededLunch] =
    useState(false);
  const [notApplicableLunch, setNotApplicableLunch] = useState(false);
  const [refusedLunch, setRefusedLunch] = useState(false);
  const [staffInitialsLunch, setStaffInitialsLunch] = useState("");
  const [requiresNoAssistanceDinner, setRequiresNoAssistanceDinner] =
    useState(false);
  const [someAssistanceNeededDinner, setSomeAssistanceNeededDinner] =
    useState(false);
  const [completeAssistanceNeededDinner, setCompleteAssistanceNeededDinner] =
    useState(false);
  const [notApplicableDinner, setNotApplicableDinner] = useState(false);
  const [refusedDinner, setRefusedDinner] = useState(false);
  const [staffInitialsDinner, setStaffInitialsDinner] = useState("");
  const [requiresNoAssistanceAMSnack, setRequiresNoAssistanceAMSnack] =
    useState(false);
  const [someAssistanceNeededAMSnack, setSomeAssistanceNeededAMSnack] =
    useState(false);
  const [completeAssistanceNeededAMSnack, setCompleteAssistanceNeededAMSnack] =
    useState(false);
  const [notApplicableAMSnack, setNotApplicableAMSnack] = useState(false);
  const [refusedAMSnack, setRefusedAMSnack] = useState(false);
  const [staffInitialsAMSnack, setStaffInitialsAMSnack] = useState("");
  const [requiresNoAssistancePMSnack, setRequiresNoAssistancePMSnack] =
    useState(false);
  const [someAssistanceNeededPMSnack, setSomeAssistanceNeededPMSnack] =
    useState(false);
  const [completeAssistanceNeededPMSnack, setCompleteAssistanceNeededPMSnack] =
    useState(false);
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
  ] = useState(false);
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
    useState(false);
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
  const [savedSigned, setSavedSigned] = useState("");
  const [savedTime, setSavedTime] = useState("");
  const [detail, setDetail] = useState({});

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
    editApi(
      setLoading,
      `employee/editADLTrackingFormById/${id}`,
      initialFormData
    );
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
          value: detail?.data?.selectingClothes?.requiresNoAssistance,
        },
        {
          value: detail?.data?.selectingClothes?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.selectingClothes?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.selectingClothes?.notApplicable,
        },
        {
          value: detail?.data?.selectingClothes?.refused,
        },
      ],
      input: detail?.data?.selectingClothes?.staffInitials,
    },
    {
      heading: "Bathing or Showering",
      row: [
        {
          value: detail?.data?.bathingOrShowering?.requiresNoAssistance,
        },
        {
          value: detail?.data?.bathingOrShowering?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.bathingOrShowering?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.bathingOrShowering?.notApplicable,
        },
        {
          value: detail?.data?.bathingOrShowering?.refused,
        },
      ],
      input: detail?.data?.bathingOrShowering?.staffInitials,
    },
    {
      heading: "Combing Hair",
      row: [
        {
          value: detail?.data?.combingHair?.requiresNoAssistance,
        },
        {
          value: detail?.data?.combingHair?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.combingHair?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.combingHair?.notApplicable,
        },
        {
          value: detail?.data?.combingHair?.refused,
        },
      ],
      input: detail?.data?.combingHair?.staffInitials,
    },
    {
      heading: "Applying Lotion",
      row: [
        {
          value: detail?.data?.applyingLotion?.requiresNoAssistance,
        },
        {
          value: detail?.data?.applyingLotion?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.applyingLotion?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.applyingLotion?.notApplicable,
        },
        {
          value: detail?.data?.applyingLotion?.refused,
        },
      ],
      input: detail?.data?.applyingLotion?.staffInitials,
    },
    {
      heading: "Laundry",
      row: [
        {
          value: detail?.data?.laundry?.requiresNoAssistance,
        },
        {
          value: detail?.data?.laundry?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.laundry?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.laundry?.notApplicable,
        },
        {
          value: detail?.data?.laundry?.refused,
        },
      ],
      input: detail?.data?.laundry?.staffInitials,
    },
    {
      heading: "Dressing",
      row: [
        {
          value: detail?.data?.dressing?.requiresNoAssistance,
        },
        {
          value: detail?.data?.dressing?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.dressing?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.dressing?.notApplicable,
        },
        {
          value: detail?.data?.dressing?.refused,
        },
      ],
      input: detail?.data?.dressing?.staffInitials,
    },
    {
      heading: "Shampooing Hair",
      row: [
        {
          value: detail?.data?.shampooingHair?.requiresNoAssistance,
        },
        {
          value: detail?.data?.shampooingHair?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.shampooingHair?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.shampooingHair?.notApplicable,
        },
        {
          value: detail?.data?.shampooingHair?.refused,
        },
      ],
      input: detail?.data?.shampooingHair?.staffInitials,
    },
    {
      heading: "Oral Care Evening",
      row: [
        {
          value: detail?.data?.oralCareEvening?.requiresNoAssistance,
        },
        {
          value: detail?.data?.oralCareEvening?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.oralCareEvening?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.oralCareEvening?.notApplicable,
        },
        {
          value: detail?.data?.oralCareEvening?.refused,
        },
      ],
      input: detail?.data?.oralCareEvening?.staffInitials,
    },
    {
      heading: "Oral Care Morning",
      row: [
        {
          value: detail?.data?.oralCareMorning?.requiresNoAssistance,
        },
        {
          value: detail?.data?.oralCareMorning?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.oralCareMorning?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.oralCareMorning?.notApplicable,
        },
        {
          value: detail?.data?.oralCareMorning?.refused,
        },
      ],
      input: detail?.data?.oralCareMorning?.staffInitials,
    },
    {
      heading: "Breakfast",
      row: [
        {
          value: detail?.data?.breakfast?.requiresNoAssistance,
        },
        {
          value: detail?.data?.breakfast?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.breakfast?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.breakfast?.notApplicable,
        },
        {
          value: detail?.data?.breakfast?.refused,
        },
      ],
      input: detail?.data?.breakfast?.staffInitials,
    },
    {
      heading: "Lunch",
      row: [
        {
          value: detail?.data?.lunch?.requiresNoAssistance,
        },
        {
          value: detail?.data?.lunch?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.lunch?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.lunch?.notApplicable,
        },
        {
          value: detail?.data?.lunch?.refused,
        },
      ],
      input: detail?.data?.lunch?.staffInitials,
    },
    {
      heading: "Dinner",
      row: [
        {
          value: detail?.data?.dinner?.requiresNoAssistance,
        },
        {
          value: detail?.data?.dinner?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.dinner?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.dinner?.notApplicable,
        },
        {
          value: detail?.data?.dinner?.refused,
        },
      ],
      input: detail?.data?.dinner?.staffInitials,
    },
    {
      heading: "AM Snack",
      row: [
        {
          value: detail?.data?.amSnacks?.requiresNoAssistance,
        },
        {
          value: detail?.data?.amSnacks?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.amSnacks?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.amSnacks?.notApplicable,
        },
        {
          value: detail?.data?.amSnacks?.refused,
        },
      ],
      input: detail?.data?.amSnacks?.staffInitials,
    },
    {
      heading: "PM Snack",
      row: [
        {
          value: detail?.data?.pmSnack?.requiresNoAssistance,
        },
        {
          value: detail?.data?.pmSnack?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.pmSnack?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.pmSnack?.notApplicable,
        },
        {
          value: detail?.data?.pmSnack?.refused,
        },
      ],
      input: detail?.data?.pmSnack?.staffInitials,
    },
    {
      heading: "AM Bowel Movement",
      row: [
        {
          value: detail?.data?.amBowelMovement?.requiresNoAssistance,
        },
        {
          value: detail?.data?.amBowelMovement?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.amBowelMovement?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.amBowelMovement?.notApplicable,
        },
        {
          value: detail?.data?.amBowelMovement?.refused,
        },
      ],
      input: detail?.data?.amBowelMovement?.staffInitials,
    },
    {
      heading: "PM Bowel Movement",
      row: [
        {
          value: detail?.data?.pmBowelMovement?.requiresNoAssistance,
        },
        {
          value: detail?.data?.pmBowelMovement?.someAssistanceNeeded,
        },
        {
          value: detail?.data?.pmBowelMovement?.completeAssistanceNeeded,
        },
        {
          value: detail?.data?.pmBowelMovement?.notApplicable,
        },
        {
          value: detail?.data?.pmBowelMovement?.refused,
        },
      ],
      input: detail?.data?.pmBowelMovement?.staffInitials,
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

  const fetchDetails = () => {
    getData(setDetail, `employee/getADLTrackingFormById/${id}`);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    if (detail) {
      const item = detail?.data;
      setPatientId(item?.patientId);
      setDate(item?.date);


      // Pm Bowl Movement
      setRequiresNoAssistancePMBowelMovement(
        item?.pmBowelMovement?.requiresNoAssistance
      );
      setSomeAssistanceNeededPMBowelMovement(
        item?.pmBowelMovement?.someAssistanceNeeded
      );
      setCompleteAssistanceNeededPMBowelMovement(
        item?.pmBowelMovement?.completeAssistanceNeeded
      );
      setNotApplicablePMBowelMovement(item?.pmBowelMovement?.notApplicable);
      setRefusedPMBowelMovement(item?.pmBowelMovement?.refused);
      setStaffInitialsPMBowelMovement(item?.pmBowelMovement?.staffInitials);
      // OverNight Bowel Movement
      setRequiresNoAssistanceOvernightBowelMovement(
        item?.overnightBowelMovement?.requiresNoAssistance
      );
      setSomeAssistanceNeededOvernightBowelMovement(
        item?.overnightBowelMovement?.someAssistanceNeeded
      );
      setCompleteAssistanceNeededOvernightBowelMovement(
        item?.overnightBowelMovement?.completeAssistanceNeeded
      );
      setNotApplicableOvernightBowelMovement(
        item?.overnightBowelMovement?.notApplicable
      );
      setRefusedOvernightBowelMovement(item?.overnightBowelMovement?.refused);
      setStaffInitialsOvernightBowelMovement(
        item?.overnightBowelMovement?.staffInitials
      );
      // Hand Foot
      setRequiresNoAssistanceHandAndFootNailCare(
        item?.handAndFootNailCare?.requiresNoAssistance
      );
      setSomeAssistanceNeededHandAndFootNailCare(
        item?.handAndFootNailCare?.someAssistanceNeeded
      );
      setCompleteAssistanceNeededHandAndFootNailCare(
        item?.handAndFootNailCare?.completeAssistanceNeeded
      );
      setNotApplicableHandAndFootNailCare(
        item?.handAndFootNailCare?.notApplicable
      );
      setRefusedHandAndFootNailCare(item?.handAndFootNailCare?.refused);
      setStaffInitialsHandAndFootNailCare(
        item?.handAndFootNailCare?.staffInitials
      );
      // Bed Mobility
      setRequiresNoAssistanceBedMobility(
        item?.bedMobility?.requiresNoAssistance
      );
      setSomeAssistanceNeededBedMobility(
        item?.bedMobility?.someAssistanceNeeded
      );
      setCompleteAssistanceNeededBedMobility(
        item?.bedMobility?.completeAssistanceNeeded
      );
      setNotApplicableBedMobility(item?.bedMobility?.notApplicable);
      setRefusedBedMobility(item?.bedMobility?.refused);
      setStaffInitialsBedMobility(item?.bedMobility?.staffInitials);
    }
  }, [detail]);

  return (
    <>
      <NavWrapper
        title={"Activities of Daily Living Tracking Form"}
        isArrow={true}
      />
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
            {savedSigned && (
              <p className="fw-bold">
                Digitally Sign by {savedSigned} {date && DateInMMDDYY(date)}{" "}
                {savedTime}{" "}
              </p>
            )}
          </div>
        </form>
      </Container>
    </>
  );
};

export default HOC(ViewDTF);
