/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../../api/api.js";
import axios from "axios";
import { Auth, Baseurl } from "../../../../Baseurl";

const MedicationCount = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [data, setData] = useState([]);
  const [allergiesAndReactions, setAllergiesAndReactions] = useState("");
  const [patientId, setPatientId] = useState("");
  const [countType, setCountType] = useState("medication");

  const handleDelete = (id) => {
    deleteData("employee/deleteMedicationOpioidCount", id);
  };

  const getAllData = () => {
    axios
      .get(`${Baseurl}employee/getAllMedicationOpioidCount`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          countType,
        },
      })
      .then((res) => {
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
  }, []);

  useEffect(() => {
    getAllData();
  }, [countType]);

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{
            width: "80%",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p></p>
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            <Form.Group
              style={{ width: "200px", border: "none" }}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Select
                style={{ border: "none" }}
                onChange={(e) => setCountType(e.target.value)}
                value={countType}
                className="fw-bold"
              >
                <option value="medication">MEDICATION COUNT</option>
                <option value="Opioid">OPIOID COUNT CONTROL </option>
              </Form.Select>
            </Form.Group>
          </p>
          <p>
            <Button
              onClick={() =>
                navigate("/employee/medications/medication-count2")
              }
              style={{ paddingRight: "1rem", marginRight: "1rem" }}
              variant="primary"
            >
              + Add
            </Button>
          </p>
        </div>
      </div>
      <div>
        <Container className="full-width-container">
          <Table responsive className="withoutBorder mt-5">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Name of Medication </th>
                <th>Dose</th>
                <th>Prescription Instructor</th>
                <th>Prescribing Provider</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Beginning Count</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Ending Count</th>
                <th style={{ backgroundColor: "#D1ECF0" }}></th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 &&
                data?.map((item) => (
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{item?.medicationName}</td>
                    <td>{item?.dose}</td>
                    <td>{item?.prescriptionInstruction}</td>
                    <td>{item?.prescribingProvider}</td>
                    <td>{item?.beginningMedCount}</td>
                    <td>{item?.medications?.[0]?.reasonForStopChange}</td>
                    <td
                      style={{
                        display: "flex",
                        gap: "1rem",
                        fontWeight: "bold",
                        color: "#1A9FB2",
                        alignItems: "center",
                        fontSize: "1.4rem",
                        border: "none",
                      }}
                    >
                      <span>
                        {" "}
                        <FaRegEdit />
                      </span>
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
        </Container>
        <div className="top-div-personal">
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
      </div>
    </>
  );
};

export default MedicationCount;
