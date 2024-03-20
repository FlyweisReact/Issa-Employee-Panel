/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { Auth } from "../../../Baseurl";
import axios from "axios";
import Loader from "../../../components/Loader/Loader";
import HOC from "../../../Layout/Inner/HOC";
import { fetchApi } from "../../../Repository/Apis";
import NavWrapper from "../../../Helper/NavWrapper";
import CreateNav from "../../../Helper/CreateNav";

const MilegaLog = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState({});
  const [loading, setLoading] = useState(false);

  const getAllLogs = async () => {
    fetchApi(setLoading, "employee/getAllMileageLog", setLogs);
  };

  useEffect(() => {
    getAllLogs();
  }, []);

  return (
    <>
      <CreateNav
        title={"MILEAGE LOG"}
        link={"/employee/therapy-notes/milage-log2"}
      />

      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
            <div className="overflow-table">
            <table className="colored_table">
            </table> 
            </div>
       
        )}
      </Container>
    </>
  );
};

export default HOC(MilegaLog);
