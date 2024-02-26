/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import { DateFormatter, DefaultInput } from "../../../../../Helper/Makers";

const ViewCount = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    getData(setDetails, `employee/getMedicationOpioidCountById/${id}`);
  }, []);

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{
            width: "80%",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            {details?.data?.countType === "medication"
              ? "MEDICATION COUNT"
              : "OPIOID COUNT CONTROL"}
          </p>
        </div>
      </div>


      <div>
        <Container className="full-width-container">
          <form className="employee1">
            <DefaultInput
              value={details?.data?.location}
              isBots={true}
              label="Location:"
            />

            <DefaultInput
              value={details?.data?.medicationName}
              isBots={true}
              label="Medication Name:"
            />

            <DefaultInput
              value={details?.data?.dose}
              isBots={true}
              label="Dose:"
            />

            <DefaultInput
              value={details?.data?.prescriptionInstruction}
              isBots={true}
              label="Prescription Instruction:"
            />

            <DefaultInput
              value={details?.data?.prescribingProvider}
              isBots={true}
              label="Prescribing provider:"
            />

            <DefaultInput
              value={DateFormatter(details?.data?.monthYear)}
              isBots={true}
              label="Month/Year:"
            />

            <DefaultInput
              value={details?.data?.beginningMedCount}
              isBots={true}
              label="Beginning med count:"
            />

            <Form.Group className="mb-3 ">
              <Form.Label style={{ fontWeight: "bold", fontSize: "1rem" }}>
                Medication Count
              </Form.Label>
            </Form.Group>

            {details?.data?.data?.map((i, index) => (
              <div key={index}>
                <DefaultInput
                  value={DateFormatter(i.date)}
                  isBots={true}
                  label={"Date:"}
                />
                <DefaultInput value={i.shift} isBots={true} label={"Shift:"} />
                <DefaultInput
                  value={i.painLevel}
                  isBots={true}
                  label={"Pain Lavel:"}
                />
                <DefaultInput
                  value={i.numberOfTabsGiven}
                  isBots={true}
                  label={"Number of Tab given:"}
                />
                <DefaultInput
                  value={i.beginningCount}
                  isBots={true}
                  label={"Beginning Count:"}
                />
                <DefaultInput
                  value={i.endingCount}
                  isBots={true}
                  label={"Ending Count:"}
                />
                <DefaultInput
                  value={i.currentStaffOnShiftSignature}
                  isBots={true}
                  label={"Current Staff on shift Signature:"}
                />
                <DefaultInput
                  value={i.relievingStaffSignature}
                  isBots={true}
                  label={"Relieving Staff on shift Signature:"}
                />
              </div>
            ))}
            {details?.staff?.map((i) => {
              <div>
                <DefaultInput
                  value={i.name}
                  isBots={true}
                  label={"Staff Name and Last Name:"}
                />
                <DefaultInput
                  value={i.initials}
                  isBots={true}
                  label={"Staff Initials"}
                />
              </div>;
            })}
          </form>
        </Container>
      </div>
    </div>
  );
};

export default ViewCount;
