/** @format */

import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { DateFormatter, DefaultInput } from "../../../../../../Helper/Makers";
import NavWrapper from "../../../../../../Helper/NavWrapper";
import { getData } from "../../../../../api/api";

const ViewStaff = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const fetchHandler = () => {
    getData(setDetails, `employee/getStaffingNoteById/${id}`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  console.log(details);
  return (
    <>
      <NavWrapper isArrow={true} title={"STAFFING NOTE"} />
      <Container className="full-width-container">
        <Form className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item long-input ">
              <label>Resident Name:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.residentName}
              />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <label>DOB:</label>
              <DefaultInput
                isBots={false}
                value={DateFormatter(details?.data?.dateOfBirth)}
              />
            </div>
            <div className="grid-item">
              <label>Today’s Date:</label>
              <DefaultInput
                isBots={false}
                value={DateFormatter(details?.data?.todayDate)}
              />
            </div>
            <div className="grid-item">
              <label> Begin Time:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.beginTime}
              />
            </div>
            <div className="grid-item">
              <label> End Time:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.endTime}
              />
            </div>
            
            <div className="grid-item"></div>
            <div className="grid-item long-input">
              <label>Participants Present/Role:</label>
              <DefaultInput
                isBots={false}
                value={details?.data?.participantsPresent}
              />
            </div>
          </div>

          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
          </Form.Group>

          {/* <TextareaMaker
            label={"Participants Present/Role:"}
            setValue={setParticipantsPresent}
            value={participantsPresent}
            placeholder=""
            row={2}
          />
          <TextareaMaker
            label={"PRESENTING ISSUE(S):"}
            setValue={setPresentingIssues}
            value={presentingIssues}
            placeholder=""
            row={2}
          />
          <TextareaMaker
            label={"PROGRESS:"}
            setValue={setProgress}
            value={progress}
            placeholder=""
            row={2}
          />
          <TextareaMaker
            label={"BARRIER(S):"}
            setValue={setBarriers}
            value={barriers}
            placeholder=""
            row={2}
          />
          <TextareaMaker
            label={"RECOMMENDATIONS:"}
            setValue={setRecommendations}
            value={recommendations}
            placeholder=""
            row={2}
          /> */}

          <div className="custome-cloud-btn">
            <div className="btns">
              <button className="draft"> SAVE AS DRAFT</button>
              <button
                type="button"
                className="signed"
                // onClick={() => setOpen(true)}
              >
                SAVED AND SIGNED
              </button>
            </div>
            <div>
              {/* {staffSignature && <p>Digitally Sign by {staffSignature} </p>} */}
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default ViewStaff;
