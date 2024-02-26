/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../../api/api.js";
import axios from "axios";
import { Baseurl } from "../../../../Baseurl";
import { deleteApi } from "../../../../Repository/Apis.js";
import { InputMaker } from "../../../../Helper/Makers.js";

const Reconciliations = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [data, setData] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [allergiesAndReactions, setAllergiesAndReactions] = useState("");

  const getAllData = () => {
    axios
      .get(`${Baseurl}employee/getAllMedicationReconciliation`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          patientId,
          allergiesAndReactions,
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
  }, [patientId]);

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteMedicationReconciliation/${id}`);
    getAllData();
  };

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem", display: "flex" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            MEDICATION RECONCILIATION
          </p>
          <p>
            <Button
              onClick={() => navigate("/employee/medications/reconciliations2")}
              style={{ paddingRight: "1rem" }}
              variant="primary"
            >
              + Add
            </Button>
          </p>
        </div>
      </div>

      <Container className="full-width-container">
        <div>
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
          <InputMaker
            label="Allergies "
            setState={setAllergiesAndReactions}
            placeholder=""
            type="text"
            value={allergiesAndReactions}
          />
        </div>
        <Table responsive className="withoutBorder">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name of Medication</th>
              <th>Dose</th>
              <th>Frequency</th>
              <th>Start Date</th>
              <th>Stop /Change Date</th>
              <th>Reason for Stop/Change</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 &&
              data?.map((item) => (
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{item?.medications?.[0]?.name}</td>
                  <td>{item?.medications?.[0]?.dose}</td>
                  <td>{item?.medications?.[0]?.frequency}</td>
                  <td>{item?.medications?.[0]?.startDate?.slice(0, 10)}</td>
                  <td>
                    {item?.medications?.[0]?.stopChangeDate?.slice(0, 10)}
                  </td>
                  <td>{item?.medications?.[0]?.reasonForStopChange}</td>

                  <td className="icon-container">
                    <Link to={`/view-count/${item?._id}`}>
                      <i className="fa-solid fa-eye"></i>
                    </Link>

                    <Link to={`/update-count/${item?._id}`}>
                      <FaRegEdit className="edit" />
                    </Link>

                    <span
                      className="delete"
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

      <div>
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

export default Reconciliations;