/** @format */

import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { deleteData } from "../../../api/api.js";
import CreateNav from "../../../../Helper/CreateNav.js";
import { fetchApi } from "../../../../Repository/Apis.js";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const PRNform = () => {
  const [data, setData] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    deleteData("employee/deletePrnMedicationLog", id);
  };

  const fetchHandler = () => {
    fetchApi(setLoading, `employee/getAllPrnMedicationLog`, setData);
  };

  console.log(data?.data?.data);

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <CreateNav
        title={"PRN MEDICATION LOG"}
        link={"/employee/medications/prn-form2"}
      />

      <Container className="full-width-container">
        <div className="top-div-personal2">
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
                <th style={{ backgroundColor: "#D1ECF0" }}> Resident Name</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Medication and Strength
                </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Instructions</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Prescriber Name</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Site Name</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Response Code</th>
                <th style={{ backgroundColor: "#D1ECF0" }}></th>

                <th
                  style={{
                    backgroundColor: "#D1ECF0",
                    borderRadius: "0 5px 0 0",
                  }}
                ></th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.data?.length > 0 &&
                data?.data?.data?.map((item) => (
                  <tr key={item?._id}>
                    <td>
                      <input type="checkbox" />
                    </td>

                    <td>{item?.residentName}</td>
                    <td>{item?.medicationAndStrength}</td>
                    <td>{item?.instructions}</td>
                    <td>{item?.prescriberName}</td>
                    <td>{item?.site}</td>

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
                      <Link to={`/update-prn/${item?._id}`}>
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

export default PRNform;
