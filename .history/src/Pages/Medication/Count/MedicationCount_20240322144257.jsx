/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { deleteData } from "../../../components/api/api.js";
import HOC from "../../../Layout/Inner/HOC.js";
import CreateNav from "../../../Helper/CreateNav.js";
import { fetchApi } from "../../../Repository/Apis.js";
import Loader from "../../../components/Loader/Loader.js";
import { BorderlessSelect } from "../../../Helper/Makers.js";

const MedicationCount = () => {
  const [data, setData] = useState({});
  const [countType, setCountType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    deleteData("employee/deleteMedicationOpioidCount", id);
  };

  const url = `employee/getAllMedicationOpioidCount`;
  const updatedUrl = `employee/getAllMedicationOpioidCount?countType=${countType}`;

  const getAllData = () => {
    if (countType) {
      fetchApi(setLoading, updatedUrl, setData);
    } else {
      fetchApi(setLoading, url, setData);
    }
  };

  useEffect(() => {
    getAllData();
  }, [countType]);

  const countOptions = [
    {
      value: "Opioid",
      label: "OPIOID COUNT CONTROL",
    },
    {
      value: "medication",
      label: "MEDICATION COUNT",
    },
  ];

  return (
    <>
      <CreateNav title={"Medication Count"} link={"/create-medication-count"} />
      <Container className="full-width-container">
        <div className="grid-container mb-4">
          <div className="grid-item long-input">
            <label>Opioid Count Controlled:</label>
            <BorderlessSelect
              options={countOptions}
              setState={setCountType}
              value={countType}
            />
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-table">
            <table className="colored_table">
              <thead>
                <tr>
                  <th>Medication Name</th>
                  <th>Dose</th>
                  <th>Prescription Instruction</th>
                  <th>Prescribing Provider</th>
                  <th>Beginning Count</th>
                  <th>Ending Count</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.data?.map((item) => (
                  <tr>
                    <td>{item?.medicationName}</td>
                    <td>{item?.dose}</td>
                    <td>{item?.prescriptionInstruction}</td>
                    <td>{item?.prescribingProvider}</td>
                    <td>{item?.data?.[0]?.beginningCount}</td>
                    <td>{item?.data?.[0]?.endingCount}</td>
                    <td>
                      <div className="icon-joiner">
                        <Link to={`/view-count/${item?._id}`}>
                          <i className="fa-solid fa-eye"></i>
                        </Link>
                        <Link to={`/update-count/${item?._id}`}>
                          <FaRegEdit className="edit" />
                        </Link>
                        <i
                          className="fa-solid fa-trash-can"
                          onClick={() => handleDelete(item?._id)}
                        />
                      </div>
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

export default HOC(MedicationCount);
