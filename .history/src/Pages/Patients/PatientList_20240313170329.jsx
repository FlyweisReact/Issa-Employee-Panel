/** @format */
import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Table } from "react-bootstrap";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
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

  return (
    <Container className="full-width-container">
      <p className="title-heading">All Patients</p>
      <div className="overflow_table">
        <table className="colored_table">
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="important">
        <div
          style={{
            fontSize: "1rem",
            color: "black",
            fontWeight: "bold",
            textAlign: "left",
            height: "400px",
            overflow: "auto",
          }}
        >
          {loading ? (
            <Loader />
          ) : (
            <Table responsive>
              <thead>
                <tr>
                  <th
                    style={{
                      backgroundColor: "#D1ECF0",
                      borderRadius: "4px 0px 0px 0px",
                    }}
                  >
                    <Form.Check type="checkbox" />
                  </th>
                  <th style={{ backgroundColor: "#D1ECF0" }}>Patient Name</th>
                  <th style={{ backgroundColor: "#D1ECF0" }}>Reference ID</th>
                  <th style={{ backgroundColor: "#D1ECF0" }}>Status</th>
                  <th style={{ backgroundColor: "#D1ECF0" }}>Email</th>
                  <th style={{ backgroundColor: "#D1ECF0" }}></th>
                  <th style={{ backgroundColor: "#D1ECF0" }}></th>
                  <th
                    style={{
                      backgroundColor: "#D1ECF0",
                      borderRadius: "0px 4px 0px 0px",
                    }}
                  ></th>
                </tr>
              </thead>
              <tbody>
                {list?.map((i, index) => (
                  <tr>
                    <td>
                      <Form.Check type="checkbox" />
                    </td>
                    <td> {i.fullName} </td>
                    <td> {i.Id} </td>
                    <td> {i.isVerified ? "Verfied" : "Unverified"} </td>
                    <td> {i.email} </td>
                    <td
                      style={{ color: "#1A9FB2", cursor: "pointer" }}
                      onClick={() => {
                        navigate("/patient-list/book-appointment");
                      }}
                    >
                      Book Appointment
                    </td>
                    <td
                      onClick={() => {
                        navigate("/patient-list/intake");
                      }}
                      style={{ color: "#1A9FB2", cursor: "pointer" }}
                    >
                      Intake{" "}
                    </td>
                    <td
                      style={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
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
            </Table>
          )}
        </div>
      </div>
    </Container>
  );
};

export default HOC({ Wcomponenet: PatientList });
