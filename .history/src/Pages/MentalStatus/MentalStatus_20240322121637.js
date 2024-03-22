/** @format */

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavWrapper from "../../Helper/NavWrapper";
import HOC from "../../Layout/Outer/HOC";
import { fetchApi } from "../../Repository/Apis";

const MentalStatus = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(setLoading, "Patient/getMentalStatusReport/", setLoading);
  };

  return (
    <>
      <NavWrapper
        title={"Mental Status Examination Reports (Before appointment)"}
      />
      <Container className="full-width-container mb-5">
        <div className="grid-container">
            <div className="grid-item">
            <label>Appearance</label>

            </div>
        </div>

        <NavWrapper
        title={"Mental Status Examination Reports (After appointment)"}
      />
      </Container>
    </>
  );
};

export default HOC({ Wcomponenet: MentalStatus });
