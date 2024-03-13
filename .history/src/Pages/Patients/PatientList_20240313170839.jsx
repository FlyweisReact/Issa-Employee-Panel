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
      <div className="overflow_table mt-4">
        <table className="colored_table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Reference Id</th>
              <th>Status</th>
              <th>Email</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.data?.map((i, index) => (
              <tr key={index}>
                <td> {i.fullName} </td>
                <td> {i.Id} </td>
                <td> {i.isVerified ? "Verfied" : "Unverified"} </td>
                <td> {i.email} </td>
                <td>
                  <Link to={`/patient-list/book-appointment`} style={boldStyle}>
                    Book Appointment
                  </Link>
                </td>
                <td>
                  <Link to={`/patient-list/intake`} style={boldStyle}>
                    Intake
                  </Link>
                </td>
                <td
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                <div className="icon-joiner"></div>
                  <span>
                    <RiDeleteBin5Line
                      style={{ color: "#FC0005", fontSize: "1.3rem" }}
                    />
                  </span>
                  <span style={{ color: "#FC0005" }}>DELETE</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default HOC({ Wcomponenet: PatientList });
