/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  BorderlessSelect,
  DateFormatter,
  DefaultInput,
  MultiSelect,
} from "../../../Helper/Makers";
import { SignatureModal } from "../../../Mod/Modal";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis";
import { ClipLoader } from "react-spinners";

const options = [
  {
    value: "Protect resident rights",
    label: "Protect resident rights",
  },
  {
    value:
      "Provide treatment that promotes resident dignity, independence, individuality, strengths, privacy and choice",
    label:
      "Provide treatment that promotes resident dignity, independence, individuality, strengths, privacy and choice",
  },
  {
    value:
      "Recognize obvious symptoms of a mental disorder, personality disorder, or substance abuse",
    label:
      "Recognize obvious symptoms of a mental disorder, personality disorder, or substance abuse",
  },
  {
    value:
      "Provide the behavioral health services that the agency is authorized to provide and that the staff member is qualified to provide",
    label:
      "Provide the behavioral health services that the agency is authorized to provide and that the staff member is qualified to provide",
  },
  {
    value:
      "Meet the unique needs of the resident populations served by the agency or the staff member, adults age18 and older, individuals who have substance abuse problems, individuals who are seriously mentally ill, or individuals who have co-occurring disorders",
    label:
      "Meet the unique needs of the resident populations served by the agency or the staff member, adults age18 and older, individuals who have substance abuse problems, individuals who are seriously mentally ill, or individuals who have co-occurring disorders",
  },
  {
    value:
      "Protect and maintain the confidentiality of resident records and information",
    label:
      "Protect and maintain the confidentiality of resident records and information",
  },
  {
    value: "Recognize and respect cultural differences",
    label: "Recognize and respect cultural differences",
  },
  {
    value: "Recognize, prevent, and respond to a situation in which a resident",
    label: "Recognize, prevent, and respond to a situation in which a resident",
  },
  {
    value: "May be a danger to self or a danger to others",
    label: "May be a danger to self or a danger to others",
  },
  {
    value: "Read and implement a resident’s treatment plan",
    label: "Read and implement a resident’s treatment plan",
  },
  {
    value: "Assist a resident in accessing community services and resources",
    label: "Assist a resident in accessing community services and resources",
  },
  {
    value: "Record and document resident information",
    label: "Record and document resident information",
  },
  {
    value:
      "Demonstrate ethical behavior, such as by respecting staff member and resident boundaries and recognizing the inappropriateness of receiving gratuities from a resident",
    label:
      "Demonstrate ethical behavior, such as by respecting staff member and resident boundaries and recognizing the inappropriateness of receiving gratuities from a resident",
  },
  {
    value:
      "Identify types of medications commonly prescribed for mental disorders, personality disorders, and substance abuse and the common side effects and adverse reactions of the medications",
    label:
      "Identify types of medications commonly prescribed for mental disorders, personality disorders, and substance abuse and the common side effects and adverse reactions of the medications",
  },
  {
    value:
      "Recognize and respond to a fire, disaster, hazard, and medical emergency",
    label:
      "Recognize and respond to a fire, disaster, hazard, and medical emergency",
  },
  {
    value:
      "Provide the activities or behavioral health services identified in the staff member’s job description or the agency’s policies and procedures",
    label:
      "Provide the activities or behavioral health services identified in the staff member’s job description or the agency’s policies and procedures",
  },
  {
    value: "Conduct group counseling",
    label: "Conduct group counseling",
  },
];

const options2 = [
  {
    value:
      "Visual observation of the staff member interacting with another individual, such as through role-playing exercises",
    label:
      "Visual observation of the staff member interacting with another individual, such as through role playing exercises",
  },
  {
    value:
      "Verbal interaction with the staff member, such as interviewing, discussion, or question and answer",
    label:
      "Verbal interaction with the staff member, such as interviewing, discussion, or question and answer",
  },
];

const EditSkill = () => {
  return <div>EditSkill</div>;
};

export default EditSkill;
