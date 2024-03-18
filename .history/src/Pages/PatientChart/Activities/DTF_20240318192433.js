/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";
import { DateInMMDDYY, deleteApi, fetchApi } from "../../../Repository/Apis";
import Loader from "../../../components/Loader/Loader";

const DTF = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(setLoading, "employee/getAllADLTrackingForm", setData);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteADLTrackingForm/${id}`);
    fetchHandler();
  };

  console.log(data)

  return (
    <>
      <CreateNav title={"Activities of Daily Living Tracking Form"} />

      <Container className="full-width-container">
      {loading ? <Loader /> : }
       
      </Container>
    </>
  );
};

export default HOC(DTF);
