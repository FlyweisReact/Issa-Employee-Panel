/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getData } from "../../../components/api/api.js";
import { deleteApi, fetchApi } from "../../../Repository/Apis.js";
import CreateNav from "../../../Helper/CreateNav.js";
import HOC from "../../../Layout/Inner/HOC.js";
import { BorderlessSelect } from "../../../Helper/Makers.js";
import Loader from "../../../components/Loader/Loader.js";

const InformedConsent = () => {
  const [patients, setPatients] = useState([]);
  const [data, setData] = useState({});
  const [patientId, setPatientId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteInformedConsentForMedication/${id}`);
    getAllData();
  };

  const url = `employee/getAllInformedConsentForMedication`;
  const updatedUrl = `employee/getAllInformedConsentForMedication?patientId=${patientId}`;

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

  console.log();

  const patientOptions = patients?.data?.map((i) => ({
    value: i._id,
    label: i.fullName,
  }));
  return (
    <>
      <CreateNav
        title={"Informed Consent for Medications"}
        link={"/create-informed-consent"}
      />

      <Container className="full-width-container">
        <div className="grid-container mb-4">
          <div className="grid-item long-input">
            <label>Resident’s Name:</label>
            <BorderlessSelect
              options={patientOptions}
              setState={setPatientId}
              value={patientId}
            />
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="overflow-table">
              <table className="colored_table">
                <thead>
                  <tr>
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
                {data?.map((item) => (
                  <tr key={item?._id}>
                    <td>
                      <input type="checkbox" />
                    </td>

                    <td>{item?.admitDate?.slice(0, 10)}</td>
                    <td>{item?.tableDate?.[0]?.medicationInstructions}</td>
                    <td>
                      {item?.tableDate?.[0]?.medicationStartDate?.slice(0, 10)}
                    </td>
                    <td>{item?.tableDate?.[0]?.dischargeDate?.slice(0, 10)}</td>
                    <td>{item?.tableDate?.[0]?.residentGuardianInitial}</td>
                    <td>{item?.tableDate?.[0]?.staffInitial}</td>

                    <td className="icon-container">
                      <Link to={`/view-inform/${item?._id}`}>
                        <i className="fa-solid fa-eye" />
                      </Link>
                      <Link to={`/update-informed/${item?._id}`}>
                        <FaRegEdit />
                      </Link>
                      <span
                        className="delete"
                        onClick={() => handleDelete(item?._id)}
                      >
                        {" "}
                        <RiDeleteBin5Fill style={{ color: "red" }} />
                        <span style={{ color: "red", fontSize: "14px" }}>
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
        </div>


      </Container>
    </>
  );
};

export default HOC(InformedConsent);
