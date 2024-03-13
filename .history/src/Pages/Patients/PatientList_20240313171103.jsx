/** @format */
import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Table } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import HOC from "../../Layout/Outer/HOC";
import { fetchApi } from "../../Repository/Apis";

const PatientList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const fetchHandler = () => {
    fetchApi(setLoading, "employee/getPatient", setData);
  };

  console.log(data?.data?.data);

  useEffect(() => {
    fetchHandler();
  }, []);

  const getPatients = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/getPatient`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = res.data.data;
      setList(data);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPatients();
  }, []);

  const boldStyle = {
    color: "#1A9FB2",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <Container className="full-width-container">
      <p className="title-heading">All Patients</p>
      {loading ? <Loader /> : }
   
    </Container>
  );
};

export default HOC({ Wcomponenet: PatientList });
