/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  BorderlessInput,
  DateFormatter,
  DefaultInput,
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
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [employeeDate, setEmployeeDate] = useState("");
  const [trainerSignature, setTrainerSignature] = useState("");
  const [trainerDate, setTrainerDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [arr, setArr] = useState([]);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [trainerTime, setTrainerTime] = useState("");
  const [trainerPropsDate, setTrainerPropsDate] = useState("");
  const [employeeTime, setEmployeeTime] = useState("");
  const [employeePropsDate, setEmployeePropsDate] = useState("");
  const { id } = useParams();
  const [data, setData] = useState({});

  const [values, setValues] = useState({
    value: "Supervision",
    label: "Supervision",
  });

  const arrPayload = {
    date,
    duration,
  };



  const fetchHandler = () => {
    getData(setData, `employee/getOnSiteFacilityById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, [id]);



  return (
    <>
   
      <NavWrapper title={"FACILITY ORIENTATION CURRICULUM"} isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <p className="fw-bold text-desc text-start">
            The following orientation trainings are conducted during the 1 st
            week of hire and before providing services to residents.
          </p>
          <MultiSelect
            options={dropDownOptions}
            setValue={setValues}
            value={values}
          />
          <p className="fw-bold text-desc text-start mt-3">
            Document more than one training date and duration of training if
            training occurs more than in one time period.
          </p>
          <div className="grid-container mt-3">
            {data?.data?.training?.map((i, index) => (
              <>
                <div className="grid-item">
                  <label>Training Date:</label>
                  <DefaultInput value={DateInMMDDYY(i.date)} isBots={false} />
                </div>
                <div className="grid-item long-input"></div>
                <div className="grid-item">
                  <label>Duration:</label>
                  <DefaultInput value={i.duration} isBots={false} />
                </div>
              </>
            ))}
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <label>I, </label>
              <DefaultInput value={data?.data?.description} isBots={false} />
            </div>
            <div className="third-wid-input">
              <label>
                attest I have received facility orientation training evident by
                the signatures below.
              </label>
            </div>
            <div className="third-wid-input d-block">
              <label>
                Employee signature{" "}
                {employeeSignature && (
                  <span>Digitally Sign by {employeeSignature}</span>
                )}
              </label>
            </div>
            <div className="grid-item">
              <label>Employee date</label>
              <DefaultInput
                value={DateInMMDDYY(data?.data?.employeeDate)}
                isBots={false}
              />
            </div>
            <div className="third-wid-input d-block">
              <label>
                Trainer signature{" "}
                {trainerSignature && (
                  <span>Digitally Sign by {trainerSignature} </span>
                )}{" "}
              </label>
            </div>
            <div className="grid-item">
              <label>Trainer date</label>
              <DefaultInput
                value={DateInMMDDYY(data?.data?.trainerDate)}
                isBots={false}
              />
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default HOC(ViewSite);
