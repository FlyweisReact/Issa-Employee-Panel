/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import { DateFormatter, DefaultInput } from "../../../../../Helper/Makers";

const ViewRecociliation = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getData(setDetails, `employee/getMedicationReconciliationById/${id}`);
  }, [id]);

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            MEDICATION RECONCILIATION
          </p>
          <p></p>
        </div>
      </div>

      <Container className="full-width-container">
        <form className="employee1">
          <DefaultInput
            value={details?.data?.residentName}
            isBots={true}
            label={"Resident Name:"}
          />
          <DefaultInput
            value={details?.data?.allergiesAndReactions}
            isBots={true}
            label="Allergies and reaction:"
          />

          {details?.data?.medications?.map((i, index) => (
            <div key={index} className="mb-3">
              <DefaultInput
                value={i.name}
                isBots={true}
                label={"Name of Medication:"}
              />
              <DefaultInput value={i.dose} isBots={true} label={"Dose:"} />
              <DefaultInput value={i.route} isBots={true} label={"Route:"} />
              <DefaultInput
                value={i.frequency}
                isBots={true}
                label={"Frequency:"}
              />
              <DefaultInput
                value={DateFormatter(i.startDate)}
                isBots={true}
                label={"Start Date:"}
              />
              <DefaultInput
                value={i.reasonForStopChange}
                isBots={true}
                label={"Stop/Change Date:"}
              />
              <DefaultInput
                value={DateFormatter(i.stopChangeDate)}
                isBots={true}
                label="Reason for Stop/Change:"
              />
            </div>
          ))}
          <DefaultInput
            value={details?.data?.providerName}
            isBots={true}
            label="Provider Name:"
          />
          <DefaultInput
            value={details?.data?.providerSignature}
            isBots={true}
            label="Signature:"
          />
          <DefaultInput
            value={DateFormatter(details?.data?.date)}
            isBots={true}
            label="              label="Date:"
:"
          />
        </form>
      </Container>
    </>
  );
};

export default ViewRecociliation;
