/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import { DateFormatter, DefaultInput } from "../../../../../Helper/Makers";
import NavWrapper from "../../../../../Helper/NavWrapper";

const ViewRecociliation = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getData(setDetails, `employee/getMedicationReconciliationById/${id}`);
  }, [id]);

  return (
    <>
      <NavWrapper isArrow={true} title={"Medication Reconciliation"} />

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
            label="Date:"
          />
        </form>
      </Container>
    </>
  );
};

export default ViewRecociliation;
