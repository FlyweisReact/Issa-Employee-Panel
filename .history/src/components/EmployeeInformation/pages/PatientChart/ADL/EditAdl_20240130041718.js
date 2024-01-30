/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData, postData } from "../../../../api/api";
import { editApi } from "../../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import { DateFormatter } from "../../../../../Helper/Makers";

const EditAdl = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});

  //   ---
  const [patientId, setPatientId] = useState("");
  const [date, setDate] = useState("");

  // Selecting Clothes
  const [
    requiresNoAssistanceSelectingClothes,
    setRequiresNoAssistanceSelectingClothes,
  ] = useState(true);
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
  ] = useState(true);
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
    useState(true);
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
  ] = useState(true);
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
    useState(true);
  const [someAssistanceNeededLaundry, setSomeAssistanceNeededLaundry] =
    useState(false);
  const [completeAssistanceNeededLaundry, setCompleteAssistanceNeededLaundry] =
    useState(false);
  const [notApplicableLaundry, setNotApplicableLaundry] = useState(false);
  const [refusedLaundry, setRefusedLaundry] = useState(false);
  const [staffInitialsLaundry, setStaffInitialsLaundry] = useState("");

  // Dressing
  const [requiresNoAssistanceDressing, setRequiresNoAssistanceDressing] =
    useState(true);
  const [someAssistanceNeededDressing, setSomeAssistanceNeededDressing] =
    useState(false);
  const [
    completeAssistanceNeededDressing,
    setCompleteAssistanceNeededDressing,
  ] = useState(false);
  const [notApplicableDressing, setNotApplicableDressing] = useState(false);
  const [refusedDressing, setRefusedDressing] = useState(false);
  const [staffInitialsDressing, setStaffInitialsDressing] = useState("SI");

  // Shampooing Hair
  const [
    requiresNoAssistanceShampooingHair,
    setRequiresNoAssistanceShampooingHair,
  ] = useState(true);
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
  ] = useState(true);
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
  ] = useState(true);
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
    useState(true);
  const [someAssistanceNeededBreakfast, setSomeAssistanceNeededBreakfast] =
    useState(false);
  const [
    completeAssistanceNeededBreakfast,
    setCompleteAssistanceNeededBreakfast,
  ] = useState(false);
  const [notApplicableBreakfast, setNotApplicableBreakfast] = useState(false);
  const [refusedBreakfast, setRefusedBreakfast] = useState(false);
  const [staffInitialsBreakfast, setStaffInitialsBreakfast] = useState("SI");

  // Lunch
  const [requiresNoAssistanceLunch, setRequiresNoAssistanceLunch] =
    useState(true);
  const [someAssistanceNeededLunch, setSomeAssistanceNeededLunch] =
    useState(false);
  const [completeAssistanceNeededLunch, setCompleteAssistanceNeededLunch] =
    useState(false);
  const [notApplicableLunch, setNotApplicableLunch] = useState(false);
  const [refusedLunch, setRefusedLunch] = useState(false);
  const [staffInitialsLunch, setStaffInitialsLunch] = useState("SI");

  // Dinner
  const [requiresNoAssistanceDinner, setRequiresNoAssistanceDinner] =
    useState(true);
  const [someAssistanceNeededDinner, setSomeAssistanceNeededDinner] =
    useState(false);
  const [completeAssistanceNeededDinner, setCompleteAssistanceNeededDinner] =
    useState(false);
  const [notApplicableDinner, setNotApplicableDinner] = useState(false);
  const [refusedDinner, setRefusedDinner] = useState(false);
  const [staffInitialsDinner, setStaffInitialsDinner] = useState("SI");

  // AM Snack
  const [requiresNoAssistanceAMSnack, setRequiresNoAssistanceAMSnack] =
    useState(true);
  const [someAssistanceNeededAMSnack, setSomeAssistanceNeededAMSnack] =
    useState(false);
  const [completeAssistanceNeededAMSnack, setCompleteAssistanceNeededAMSnack] =
    useState(false);
  const [notApplicableAMSnack, setNotApplicableAMSnack] = useState(false);
  const [refusedAMSnack, setRefusedAMSnack] = useState(false);
  const [staffInitialsAMSnack, setStaffInitialsAMSnack] = useState("SI");

  // PM Snack
  const [requiresNoAssistancePMSnack, setRequiresNoAssistancePMSnack] =
    useState(true);
  const [someAssistanceNeededPMSnack, setSomeAssistanceNeededPMSnack] =
    useState(false);
  const [completeAssistanceNeededPMSnack, setCompleteAssistanceNeededPMSnack] =
    useState(false);
  const [notApplicablePMSnack, setNotApplicablePMSnack] = useState(false);
  const [refusedPMSnack, setRefusedPMSnack] = useState(false);
  const [staffInitialsPMSnack, setStaffInitialsPMSnack] = useState("SI");

  // AM Bowel Movement
  const [
    requiresNoAssistanceAMBowelMovement,
    setRequiresNoAssistanceAMBowelMovement,
  ] = useState(true);
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
    useState("SI");

  // PM Bowel Movement
  const [
    requiresNoAssistancePMBowelMovement,
    setRequiresNoAssistancePMBowelMovement,
  ] = useState(true);
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
    useState("SI");

  // Overnight Bowel Movement
  const [
    requiresNoAssistanceOvernightBowelMovement,
    setRequiresNoAssistanceOvernightBowelMovement,
  ] = useState(true);
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
  ] = useState("SI");

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
  ] = useState("SI");

  // Bed Mobility
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
  const [staffInitialsBedMobility, setStaffInitialsBedMobility] =
    useState("SI");

  // --

  const { id } = useParams();

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

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

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCategoryInputChange = (category, categoryValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [category]: {
        ...prevFormData[category],
        ...categoryValue,
      },
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    editApi(setLoading, `employee/editADLTrackingFormById/${id}`, formData);
  };

  const fetchHandler = () => {
    getData(setRes, `employee/getADLTrackingFormById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (res) {
      const item = res?.data;
    }
  }, [res]);

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            ACTIVITIES OF DAILY LIVING TRACKING FORM
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form
            onSubmit={submitHandler}
            className="form-personal offer-letter appendix1 w-100"
          >
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Select Patient
              </Form.Label>
              <Form.Select
                onChange={(e) => setPatientId(e.target.value)}
                required
                value={patientId}
              >
                <option value="">Select Patient</option>
                {patients?.data?.map((item) => {
                  return (
                    <option value={item._id} key={item._id}>
                      {item.fullName}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                onChange={(e) => setDate(e.target.value)}
                type="date"
                required
                value={DateFormatter(date)}
              />
            </Form.Group>

            <p>ADLS</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Selecting Clothes
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededSelectingClothes}
                  value={!someAssistanceNeededSelectingClothes}
                  onChange={(e) =>
                    setSomeAssistanceNeededSelectingClothes(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededSelectingClothes}
                  value={!completeAssistanceNeededSelectingClothes}
                  onChange={(e) =>
                    setCompleteAssistanceNeededSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableSelectingClothes}
                  value={!notApplicableSelectingClothes}
                  onChange={(e) =>
                    setNotApplicableSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedSelectingClothes}
                  value={!refusedSelectingClothes}
                  onChange={(e) => setRefusedSelectingClothes(e.target.value)}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                name="staffInitials"
                value={staffInitialsSelectingClothes}
                onChange={(e) =>
                  setStaffInitialsSelectingClothes(e.target.value)
                }
                type="text"
                required
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Bathing or Showering
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
                  checked={requiresNoAssistanceBathingOrShowering}
                  value={!requiresNoAssistanceBathingOrShowering}
                  onChange={(e) =>
                    setRequiresNoAssistanceBathingOrShowering(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededBathingOrShowering}
                  value={!someAssistanceNeededBathingOrShowering}
                  onChange={(e) =>
                    setSomeAssistanceNeededBathingOrShowering(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededBathingOrShowering}
                  value={!completeAssistanceNeededBathingOrShowering}
                  onChange={(e) =>
                    setCompleteAssistanceNeededBathingOrShowering(
                      e.target.value
                    )
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableBathingOrShowering}
                  value={!notApplicableBathingOrShowering}
                  onChange={(e) =>
                    setNotApplicableBathingOrShowering(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedBathingOrShowering}
                  value={!refusedBathingOrShowering}
                  onChange={(e) => setRefusedBathingOrShowering(e.target.value)}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                type="text"
                value={staffInitialsBathingOrShowering}
                onChange={(e) =>
                  setStaffInitialsBathingOrShowering(e.target.value)
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Combing Hair
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
                  checked={requiresNoAssistanceCombingHair}
                  value={!requiresNoAssistanceCombingHair}
                  onChange={(e) =>
                    setRequiresNoAssistanceCombingHair(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededCombingHair}
                  value={!someAssistanceNeededCombingHair}
                  onChange={(e) =>
                    setSomeAssistanceNeededCombingHair(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededCombingHair}
                  value={!completeAssistanceNeededCombingHair}
                  onChange={(e) =>
                    setCompleteAssistanceNeededCombingHair(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableCombingHair}
                  value={!notApplicableCombingHair}
                  onChange={(e) => setNotApplicableCombingHair(e.target.value)}
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedCombingHair}
                  value={!refusedCombingHair}
                  onChange={(e) => setRefusedCombingHair(e.target.value)}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                value={staffInitialsCombingHair}
                onChange={(e) => setStaffInitialsCombingHair(e.target.value)}
                required
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Applying Lotion
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
                  checked={requiresNoAssistanceApplyingLotion}
                  value={!requiresNoAssistanceApplyingLotion}
                  onChange={(e) =>
                    setRequiresNoAssistanceApplyingLotion(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededApplyingLotion}
                  value={!someAssistanceNeededApplyingLotion}
                  onChange={(e) =>
                    setSomeAssistanceNeededApplyingLotion(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededApplyingLotion}
                  value={!completeAssistanceNeededApplyingLotion}
                  onChange={(e) =>
                    setCompleteAssistanceNeededApplyingLotion(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableApplyingLotion}
                  value={!notApplicableApplyingLotion}
                  onChange={(e) =>
                    setNotApplicableApplyingLotion(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedApplyingLotion}
                  value={!refusedApplyingLotion}
                  onChange={(e) => setRefusedApplyingLotion(e.target.value)}
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                name="staffInitials"
                onChange={(e) => setStaffInitialsApplyingLotion(e.target.value)}
                required
                type="text"
                value={staffInitialsApplyingLotion}
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Laundry</Form.Label>
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
                  checked={requiresNoAssistanceLaundry}
                  value={!requiresNoAssistanceLaundry}
                  onChange={(e) =>
                    setRequiresNoAssistanceLaundry(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={someAssistanceNeededLaundry}
                  value={!someAssistanceNeededLaundry}
                  onChange={(e) =>
                    setSomeAssistanceNeededLaundry(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={completeAssistanceNeededLaundry}
                  value={!completeAssistanceNeededLaundry}
                  onChange={(e) =>
                    setCompleteAssistanceNeededLaundry(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={notApplicableLaundry}
                  value={!notApplicableLaundry}
                  onChange={(e) =>
                    setNotApplicableLaundry(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={refusedLaundry}
                  value={!refusedLaundry}
                  onChange={(e) =>
                    setRefusedLaundry(e.target.value)
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
                  handleCategoryInputChange("laundry", {
                    staffInitials: e.target.value,
                  })
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Dressing</Form.Label>
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={formData.dressing.someAssistanceNeeded}
                  onChange={(e) =>
                    handleCategoryInputChange("dressing", {
                      someAssistanceNeeded: e.target.checked,
                    })
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                name="staffInitials"
                onChange={(e) =>
                  handleCategoryInputChange("dressing", {
                    staffInitials: e.target.value,
                  })
                }
                type="text"
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Shampooing Hair
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
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
                  handleCategoryInputChange("shampooingHair", {
                    staffInitials: e.target.value,
                  })
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>
                Oral Care Morning
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
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
                  handleCategoryInputChange("oralCareMorning", {
                    staffInitials: e.target.value,
                  })
                }
                required
                placeholder="Enter name"
              />
            </Form.Group>
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
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
                  handleCategoryInputChange("breakfast", {
                    staffInitials: e.target.value,
                  })
                }
                required
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
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
                  handleCategoryInputChange("lunch", {
                    staffInitials: e.target.value,
                  })
                }
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
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
                  handleCategoryInputChange("dinner", {
                    staffInitials: e.target.value,
                  })
                }
                required
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
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
                  handleCategoryInputChange("amSnacks", {
                    staffInitials: e.target.value,
                  })
                }
                required
                value={formData.amSnacks.staffInitials}
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleCategoryInputChange("amBowelMovement", {
                    staffInitials: e.target.value,
                  })
                }
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleCategoryInputChange("pmBowelMovement", {
                    staffInitials: e.target.value,
                  })
                }
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Refused"
                />
              </div>
              <Form.Label style={{ fontWeight: "bold" }}>
                Staff Initials
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleCategoryInputChange("overnightBowelMovement", {
                    staffInitials: e.target.value,
                  })
                }
                type="text"
                required
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
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
                  handleCategoryInputChange("handAndFootNailCare", {
                    staffInitials: e.target.value,
                  })
                }
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
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Requires No Assistance"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Some Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Complete Assistance Needed"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
                  }
                  label="Not Applicable"
                />
                <Form.Check
                  type="checkbox"
                  checked={requiresNoAssistanceSelectingClothes}
                  value={!requiresNoAssistanceSelectingClothes}
                  onChange={(e) =>
                    setRequiresNoAssistanceSelectingClothes(e.target.value)
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
                  handleCategoryInputChange("handAndFootNailCare", {
                    staffInitials: e.target.value,
                  })
                }
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

export default EditAdl;
