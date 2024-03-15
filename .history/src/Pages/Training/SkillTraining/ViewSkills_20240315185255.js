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
import { useParams } from "react-router-dom";



const ViewSkills = () => {
  const { id } = useParams();
  
  const [profile, setProfile] = useState({});
  const [detail, setDetails] = useState({});

  const fetchHandler = () => {
    getData(setProfile, "employee/getProfile");
    getData(setDetails, `employee/getSkillAndKnowledgeById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

 


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
                hours of Skills and Knowledge training at {detail?.data?.companyName}{" "}
                completed to perform the job duties as consistent with my job
                description.
              </label>
            </div>
          </div>

          {detail?.data?.selectedTrainingTopics?.map((i, index) => (
            <DefaultInput value={i} isBots={false} key={index} />
          ))}
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
              <DefaultInput
                value={DateInMMDDYY(detail?.data?.verifiedByDate)}
                isBots={false}
              />
            </div>
            <div className="grid-input full-wid-input d-block">
              <label>Employee Signature: </label>
              <p>Digitally Sign by {detail?.data?.employeeSignature}</p>
            </div>
            <div className="grid-input full-wid-input d-block">
              <label>
                Verified by Clinical Director /BHP/Administrator Signature:
              </label>
              <p>Digitally Sign by {detail?.data?.verifiedBySignature} </p>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default HOC(ViewSkills);
