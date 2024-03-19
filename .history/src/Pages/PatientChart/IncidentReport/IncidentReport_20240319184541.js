/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { fetchApi, deleteApi } from "../../../Repository/Apis";
import Loader from "../../../components/Loader/Loader";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";

const IncidentReport = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(setLoading, `employee/getAllIncidentReport`, setDetail);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const deleteHandler = async (id) => {
    await deleteApi(`employee/deleteIncidentReport/${id}`);
    fetchHandler();
  };

  return (
    <>
      <CreateNav title={"INCIDENT REPORT"} link={"/create-incident-report"} />

      <Container className="full-width-container">

      </Container>
   
    </>
  );
};

export default HOC(IncidentReport);
