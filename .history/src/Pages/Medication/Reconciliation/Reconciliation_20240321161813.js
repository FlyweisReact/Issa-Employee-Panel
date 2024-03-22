/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api.js";
import CreateNav from "../../../Helper/CreateNav.js";
import { DateInMMDDYY, deleteApi, fetchApi } from "../../../Repository/Apis.js";
import Loader from "../../../components/Loader/Loader.js";
import HOC from "../../../Layout/Inner/HOC.js";
import { BorderlessInput, BorderlessSelect } from "../../../Helper/Makers.js";

const Reconciliation = () => {
  const [patients, setPatients] = useState([]);
  const [data, setData] = useState({});
  const [patientId, setPatientId] = useState("");
  const [allergiesAndReactions, setAllergiesAndReactions] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `employee/getAllMedicationReconciliation`;

  const updatedUrl = `employee/getAllMedicationReconciliation?patientId=${patientId}&allergiesAndReactions=${
    allergiesAndReactions ? allergiesAndReactions : null
  }`;

  const getAllData = () => {
    if (patientId) {
      fetchApi(setLoading, updatedUrl, setData);
    } else {
      fetchApi(setLoading, url, setData);
    }
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


  const patientOptions = patients?.data?.map((i) => ({
    value: i._id,
    label: i.fullName,
  }));

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
          <>
            <div className="grid-container mb-3">
              <div className="grid-item long-input">
                <label>Patient:</label>
                <BorderlessSelect
                  options={patientOptions}
                  value={patientId}
                  setState={setPatientId}
                />
              </div>
              <div className="grid-item long-input">
                <label>Allergies and Reactions:</label>
                <BorderlessInput 
                  options={patientOptions}
                  value={all}
                  setState={setAllergiesAndReactions}
                />
              </div>
            </div>

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
                  {data?.data?.data?.map((item) => (
                    <tr>
                      <td>{item?.medications?.[0]?.name}</td>
                      <td>{item?.medications?.[0]?.dose}</td>
                      <td>{item?.medications?.[0]?.frequency}</td>
                      <td>{DateInMMDDYY(item?.medications?.[0]?.startDate)}</td>
                      <td>
                        {DateInMMDDYY(item?.medications?.[0]?.stopChangeDate)}
                      </td>
                      <td>{item?.medications?.[0]?.reasonForStopChange}</td>

                      <td className="icon-container">
                        <Link to={`/view-reconciliation/${item?._id}`}>
                          <i className="fa-solid fa-eye" />
                        </Link>

                        <Link to={`/update-reconciliation/${item?._id}`}>
                          <i className="fa-solid fa-edit" />
                        </Link>

                        <i
                          className="fa-solid fa-trash-can"
                          onClick={() => handleDelete(item?._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default HOC(Reconciliation);
