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
              <DefaultInput isBots={false} value={details?.data?.beginTime} />
            </div>
            <div className="grid-item">
              <label> End Time:</label>
              <DefaultInput isBots={false} value={details?.data?.endTime} />
            </div>
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Participants Present/Role:</Form.Label>
            <Form.Control value={details?.data?.participantsPresent} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>PRESENTING ISSUE(S):</Form.Label>
            <Form.Control value={details?.data?.presentingIssues} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>PROGRESS:</Form.Label>
            <Form.Control value={details?.data?.progress} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>BARRIER(S):</Form.Label>
            <Form.Control value={details?.data?.barriers} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>RECOMMENDATIONS:</Form.Label>
            <Form.Control value={details?.data?.recommendations} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label  >Signature:</Form.Label>
            <Form.Control value={details?.data?.staffSignature} />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default ViewStaff;
