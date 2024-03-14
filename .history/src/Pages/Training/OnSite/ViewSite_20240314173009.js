import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  BorderlessInput,
  DateFormatter,
  MultiSelect,
} from "../../../Helper/Makers.js";
import { ClipLoader } from "react-spinners";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis.js";
import NavWrapper from "../../../Helper/NavWrapper.js";
import { SignatureModal } from "../../../Mod/Modal.js";
import HOC from "../../../Layout/Inner/HOC.js";
import { useParams } from "react-router-dom";
import { getData } from "../../../components/api/api.js";

const dropDownOptions = [
    {
      value: "Chain of Command",
      label: "Chain of Command",
    },
    {
      value: "Resident Rights",
      label: "Resident Rights",
    },
    {
      value:
        "Immediately report suspected or alleged abuse, neglect, or exploitation or a violation of a resident’s rights.",
      label:
        "Immediately report suspected or alleged abuse, neglect, or exploitation or a violation of a resident’s rights.",
    },
    {
      value: "Program evacuation path/Safety Disaster Plan",
      label: "Program evacuation path/Safety Disaster Plan",
    },
    {
      value: "Ethics/professionalism",
      label: "Ethics/professionalism",
    },
    {
      value: "Residents' activities/treatment schedule",
      label: "Residents' activities/treatment schedule",
    },
    {
      value: "Current Resident issues",
      label: "Current Resident issues",
    },
    {
      value: "Personnel – payroll, benefits, disciplinary process",
      label: "Personnel – payroll, benefits, disciplinary process",
    },
    {
      value: "Supervision",
      label: "Supervision",
    },
    {
      value: "Training Plan",
      label: "Training Plan",
    },
    {
      value: "Policy and Procedure Manual",
      label: "Policy and Procedure Manual",
    },
    {
      value: "Use of facility equipment",
      label: "Use of facility equipment",
    },
    {
      value:
        "Documentation in the medical record, and how information is protected",
      label:
        "Documentation in the medical record, and how information is protected",
    },
    {
      value: "Confidentiality/HIPAA",
      label: "Confidentiality/HIPAA",
    },
    {
      value: "Incident and Accident reporting",
      label: "Incident and Accident reporting",
    },
    {
      value: "Job description",
      label: "Job description",
    },
    {
      value: "Program Rules",
      label: "Program Rules",
    },
    {
      value:
        "Procedures for responding to a fire, disaster, hazard, a medical emergency, and a resident experiencing a crisis situation",
      label:
        "Procedures for responding to a fire, disaster, hazard, a medical emergency, and a resident experiencing a crisis situation",
    },
    {
      value: "Infectious diseases and bloodborne pathogens",
      label: "Infectious diseases and bloodborne pathogens",
    },
    {
      value: "Sexual Harassment - Q & A's",
      label: "Sexual Harassment - Q & A's",
    },
    {
      value: "Personal Protective Equipment",
      label: "Personal Protective Equipment",
    },
    {
      value: "Fire Safety",
      label: "Fire Safety",
    },
  ];
  
const ViewSite = () => {
  return (
    <div>ViewSite</div>
  )
}

export default ViewSite