/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { deleteData } from "../../../components/api/api.js";
import CreateNav from "../../../Helper/CreateNav.js";
import { fetchApi } from "../../../Repository/Apis.js";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader.js";
import HOC from "../../../Layout/Inner/HOC.js";

const PRNform = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    deleteData("employee/deletePrnMedicationLog", id);
  };

  const fetchHandler = () => {
    fetchApi(setLoading, `employee/getAllPrnMedicationLog`, setData);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <CreateNav title={"PRN MEDICATION LOG"} link={"/create-prn-log"} />

      {loading ? (
        <Loader />
      ) : (
        <Container className="full-width-container">
          <div className="overflow-table">
            <table className="colored_table">
              <thead>
                <tr>
                  <th>Resident Name</th>
                  <th>Medication and Strength</th>
                  <th>Instructions</th>
                  <th>Prescriber Name</th>
                  <th>Site Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.data?.map((item) => (
                  <tr key={item?._id}>
                    <td>{item?.residentName}</td>
                    <td>{item?.medicationAndStrength}</td>
                    <td>{item?.instructions}</td>
                    <td>{item?.prescriberName}</td>
                    <td>{item?.site}</td>
                    <td>
                      <div className="icon-joiner">
                        <Link to={`/view-prn/${item?._id}`}>
                          <i className="fa-solid fa-eye" />
                        </Link>
                        <Link to={`/update-prn/${item?._id}`}>
                          <i className="fa-solid fa-edit" />
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
        </Container>
      )}
    </>
  );
};

export default HOC(PRNform);
