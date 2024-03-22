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

  console.log(data?.data?.data);

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

                </tbody>
              </table>
            </div>
          )}
        </div>

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

        </div>
      </Container>
    </>
  );
};

export default HOC(InformedConsent);
