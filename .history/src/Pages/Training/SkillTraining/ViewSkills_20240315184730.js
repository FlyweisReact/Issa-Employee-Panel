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
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";

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

const ViewSkills = () => {
  const { id } = useParams();
  const [hoursCompleted, setHoursCompleted] = useState(0);
  const [selectedTrainingTopics, setSelectedTrainingTopics] = useState([]);
  const [verificationMethod, setVerificationMethod] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [employeeTitle, setEmployeeTitle] = useState("");
  const [employeeDate, setEmployeeDate] = useState("");
  const [verifiedBySignature, setVerifiedBySignature] = useState("");
  const [verifiedByTitle, setVerifiedByTitle] = useState("");
  const [verifiedByDate, setVerifiedByDate] = useState("");
  const [profile, setProfile] = useState({});
  const [companyDetail, setCompanyDetail] = useState({});
  const [open, setOpen] = useState(false);
  const [employeeModDate, setEmployeeModDate] = useState("");
  const [employeeModTime, setEmployeeModTime] = useState("");
  const [open1, setOpen1] = useState(false);
  const [verifyModDate, setVerifyModDate] = useState("");
  const [verifyModTime, setVerifyModTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [detail, setDetails] = useState({});
  const [companyName, setCompanyName] = useState("");

  const fetchHandler = () => {
    getData(setProfile, "employee/getProfile");
    getData(setCompanyDetail, "employee/getMyOfferLetter");
    getData(setDetails, `employee/getSkillAndKnowledgeById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const payload = {
    hoursCompleted,
    companyName: companyDetail?.data?.companyName,
    selectedTrainingTopics: selectedTrainingTopics?.map((i) => i.value),
    verificationMethod,
    employeeSignature,
    employeeTitle,
    employeeDate,
    verifiedBySignature,
    verifiedByTitle,
    verifiedByDate,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await editApi(
      setLoading,
      `employee/updateSkillAndKnowledge/${id}`,
      payload
    );
    setHoursCompleted(0);
    setSelectedTrainingTopics([]);
    setVerificationMethod("");
    setEmployeeTitle("");
    setEmployeeDate("");
    setVerifiedByTitle("");
    setVerifiedByDate("");
  };

  useEffect(() => {
    if (detail?.data) {
      const item = detail?.data;
      setCompanyName(item?.companyName);
      if (item?.selectedTrainingTopics?.length > 0) {
        const options = item?.selectedTrainingTopics?.map((i) => ({
          value: i,
          label: i,
        }));
        setSelectedTrainingTopics(options);
      }
      setVerificationMethod(item?.verificationMethod);
      setEmployeeTitle(item?.employeeTitle);
      setEmployeeDate(DateFormatter(item?.employeeDate));
      setVerifiedByTitle(item?.verifiedByTitle);
      setVerifiedByDate(DateFormatter(item?.verifiedByDate));
      setVerifiedBySignature(item?.verifiedBySignature);
      setEmployeeSignature(item?.employeeSignature);
    }
  }, [detail]);

  return (
    <>
      <NavWrapper title={"SKILLS AND KNOWLEDGE TRAINING"} isArrow={true} />
      <Container className="full-width-container">
        <form className="text-start">
          <div className="grid-container mb-3">
            <div className="grid-item">
              <label>I,</label>
              <DefaultInput value={profile?.data?.fullName} isBots={false} />
              <label>attest I have received</label>
            </div>
            <div className="grid-item full-wid-input">
              <DefaultInput
                value={detail?.data?.hoursCompleted}
                isBots={false}
              />
              <label>
                hours of Skills and Knowledge training at {companyName}{" "}
                completed to perform the job duties as consistent with my job
                description.
              </label>
            </div>
          </div>

          <MultiSelect
            options={options}
            setValue={setSelectedTrainingTopics}
            value={selectedTrainingTopics}
          />
          <p className="text-desc fw-bold mt-3">
            The above listed skills and knowledge were verified by:
          </p>

          <div className="grid-container">
            <div className="grid-item third-wid-input">
              <label>Verification Method</label>
              <DefaultInput
                value={detail?.data?.verificationMethod}
                isBots={false}
              />
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <label>Employee Title</label>

              <DefaultInput
                value={detail?.data?.employeeTitle}
                isBots={false}
              />
            </div>
            <div className="grid-item long-input" />
            <div className="grid-item">
              <label>Date</label>

              <DefaultInput
                value={DateInMMDDYY(detail?.data?.employeeDate)}
                isBots={false}
              />
            </div>
            <div className="grid-item long-input">
              <label>
                Verified by Clinical Director /BHP/Administrator title
              </label>
              <DefaultInput
                value={detail?.data?.verifiedByTitle}
                isBots={false}
              />
            </div>
            <div className="grid-item" />
            <div className="grid-item">
              <label>Date</label>
              <BorderlessInput
                setState={setVerifiedByDate}
                type="date"
                value={DateFormatter(verifiedByDate)}
              />
                <DefaultInput
                value={(detail?.data?.verifiedByDate)}
                isBots={false}
              />
            </div>
            <div className="grid-input full-wid-input d-block">
              <label>Employee Signature: </label>
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
                  {employeeSignature && (
                    <p>
                      Digitally Sign by {employeeSignature}{" "}
                      {employeeModDate && DateInMMDDYY(employeeModDate)}{" "}
                      {employeeModTime}{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="grid-input full-wid-input d-block">
              <label>
                Verified by Clinical Director /BHP/Administrator Signature:
              </label>
              <div className="custome-cloud-btn">
                <div className="btns">
                  <button className="draft"> SAVE AS DRAFT</button>
                  <button
                    type="button"
                    className="signed"
                    onClick={() => setOpen1(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {verifiedBySignature && (
                    <p>
                      Digitally Sign by {verifiedBySignature}{" "}
                      {verifyModDate && DateInMMDDYY(verifyModDate)}{" "}
                      {verifyModTime}{" "}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button className="employee_create_btn" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
          </button>
        </form>
      </Container>
    </>
  );
};

export default HOC(ViewSkills);
