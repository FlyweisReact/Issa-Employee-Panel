/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../../api/api.js";
import axios from "axios";
import { Auth, Baseurl } from "../../../../Baseurl";
import { deleteApi } from "../../../../Repository/Apis.js";
import CreateNav from "../../../../Helper/CreateNav.js";

const InformedConsent = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [data, setData] = useState([]);
  const [patientId, setPatientId] = useState("");

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteInformedConsentForMedication/${id}`);
    getAllData();
  };

  const getAllData = () => {
    axios
      .get(`${Baseurl}employee/getAllInformedConsentForMedication`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          patientId: patientId ? patientId : null,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data?.data?.length === 0) {
          setData([]);
          return;
        }
        setData(res.data?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
    getAllData();
  }, [patientId]);

  return (
    <>
      <CreateNav
        title={"INFORMEDCONSENT FOR MEDIACTIONS"}
        link={"/employee/medications/informed-consent2"}
      />

      <Container className="full-width-container">
        <div className="top-div-personal2">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Resident’s Name</Form.Label>
            <Form.Select
              onChange={(e) => setPatientId(e.target.value)}
              aria-label="Default select example"
            >
              <option>Select Resident Name</option>
              {patients?.data?.map((patient) => (
                <option value={patient._id}>{patient.fullName}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Table responsive className="colored_table">
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: "#D1ECF0",
                    borderRadius: "5px 0 0 0",
                  }}
                >
                  <input type="checkbox" />
                </th>
                <th>Admit Date</th>
                <th>Medication / Instructions</th>
                <th>Medication Start Date</th>
                <th>D/C Date</th>
                <th>Resident / Guardian Initial</th>
                <th>Staff Initial</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 &&
                data?.map((item) => (
                  <tr key={item?._id}>
                    <td>
                      <input type="checkbox" />
                    </td>

                    <td>{item?.admitDate?.slice(0, 10)}</td>
                    <td>{item?.tableDate?.[0]?.medicationInstructions}</td>
                    <td>
                      {item?.tableDate?.[0]?.medicationStartDate
                        ?.split("T")?.[0]
                        ?.split("-")
                        ?.reverse()
                        .join("-")
                        .split("T")?.[0]
                        ?.split("-")
                        ?.reverse()
                        .join("-")}
                    </td>
                    <td>
                      {item?.tableDate?.[0]?.dischargeDate
                        ?.split("T")?.[0]
                        ?.split("-")
                        ?.reverse()
                        .join("-")
                        ?.split("T")?.[0]
                        ?.split("-")
                        ?.reverse()
                        .join("-")}
                    </td>
                    <td>{item?.tableDate?.[0]?.residentGuardianInitial}</td>
                    <td>{item?.tableDate?.[0]?.staffInitial}</td>

                    <td
                      style={{
                        display: "flex",
                        gap: "1rem",
                        fontWeight: "bold",
                        color: "#1A9FB2",
                        alignItems: "center",
                        fontSize: "1.4rem",
                      }}
                    >
                      <Link to={`/update-informed/${item?._id}`}>
                        <FaRegEdit />
                      </Link>

                      <span
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
                        onClick={() => handleDelete(item?._id)}
                      >
                        {" "}
                        <RiDeleteBin5Fill style={{ color: "red" }} />
                        <span style={{ color: "red", fontSize: "1.1.1rem" }}>
                          DELETE
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>

          <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
            <button
              style={{
                padding: "10px 24px",
                backgroundColor: "#1A9FB2",
                color: "white",
                marginTop: "1rem",
                borderRadius: "10px",
              }}
              type="submit"
            >
              PRINT REPORT
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default InformedConsent;
