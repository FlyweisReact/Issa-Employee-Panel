/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from "axios";
import { getData } from "../../../components/api/api.js";
import CreateNav from "../../../Helper/CreateNav.js";
import { InputMaker } from "../../../Helper/Makers";
import { deleteApi, fetchApi } from "../../../Repository/Apis.js";
import Loader from "../../../components/Loader/Loader.js";
import HOC from "../../../Layout/Inner/HOC.js";

const Reconciliation = () => {
  const [patients, setPatients] = useState([]);
  const [data, setData] = useState({});
  const [patientId, setPatientId] = useState("");
  const [allergiesAndReactions, setAllergiesAndReactions] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `employee/getAllMedicationReconciliation`;

  const updatedUrl = `employee/getAllMedicationReconciliation?patientId=${
    patientId ? patientId : null
  }&allergiesAndReactions=${
    allergiesAndReactions ? allergiesAndReactions : null
  }`;

  const getAllData = () => {
    fetchApi(setLoading, url, setData);
  };

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  useEffect(() => {
    getAllData();
  }, [patientId]);

  console.log(data?.data?.data);

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteMedicationReconciliation/${id}`);
    getAllData();
  };

  return (
    <>
      <CreateNav
        title={"MEDICATION RECONCILIATION"}
        link="/employee/medications/reconciliations2"
      />
      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-table">
            <table className="colored_table">
              <thead>
                <tr>
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
                { data?.map((item) => (
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
                    <Link to={`/view-reconciliation/${item?._id}`}>
                      <i className="fa-solid fa-eye"></i>
                    </Link>

                    <Link to={`/update-reconciliation/${item?._id}`}>
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
            </table>
          </div>
        )}
      </Container>
    </>
  );
};

export default HOC(Reconciliation);
