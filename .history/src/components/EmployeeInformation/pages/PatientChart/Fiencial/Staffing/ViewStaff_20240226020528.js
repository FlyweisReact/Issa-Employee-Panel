/** @format */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  console.log(details)
  return (
    <>
      <NavWrapper isArrow={true} title={"STAFFING NOTE"} />
      <Container className="full-width-container">
        <Form onSubmit={submitHandler} className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item long-input ">
              <label>Resident Name:</label>
             
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <label>DOB:</label>
              <DefaultInput
                setState={setDateOfBirth}
                placeholder=""
                type={"date"}
                value={DateFormatter(dateOfBirth)}
              />
            </div>
            <div className="grid-item">
              <label>Today’s Date:</label>
              <BorderlessInput
                setState={setTodayDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(todayDate)}
              />
            </div>
            <div className="grid-item">
              <label> Begin Time:</label>
              <BorderlessInput
                setState={setBeginTime}
                placeholder=""
                type={"time"}
                value={beginTime}
              />
            </div>
            <div className="grid-item">
              <label> End Time:</label>
              <BorderlessInput
                setState={setEndTime}
                placeholder=""
                type={"time"}
                value={endTime}
              />
            </div>
          </div>

          <TextareaMaker
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
          />

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
              {staffSignature && <p>Digitally Sign by {staffSignature} </p>}
            </div>
          </div>

        </Form>
      </Container>
    </>
  );
};

export default ViewStaff;
