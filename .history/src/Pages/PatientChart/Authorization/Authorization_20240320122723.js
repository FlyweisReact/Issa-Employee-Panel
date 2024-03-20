/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { DateInMMDDYY, deleteApi, fetchApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";
import Loader from "../../../components/Loader/Loader";

const Authorization = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(
      setLoading,
      "employee/getAllAuthorizationForReleaseOfInformation",
      setData
    );
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const handleDelete = async (id) => {
    await deleteApi(
      `employee/deleteAuthorizationForReleaseOfInformation/${id}`
    );
    fetchHandler();
  };

  console.log(data?.data?.data);

  return (
    <>
      <CreateNav
        title={"AUTHORIZATION FOR RELEASE OF INFORMATION"}
        link={"/employee/patient-chart/authorization2"}
      />

      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-table">
            <table className="colored_table">
              <thead>
                <tr>
                  <th>Resident’s Name</th>
                  <th>Phone </th>
                  <th>Relationship to Person</th>
                  <th>Date</th>
                  <th>Witness</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.data?.map((item) => (
                  <tr key={item?.id}>
                    <td>{item?.residentName}</td>
                    <td>{item?.authorizedPersonPhone}</td>
                    <td>{item?.relationshipToPerson}</td>
                    <td>{DateInMMDDYY(item?.dateSigned)}</td>
                    <td>{item?.witness}</td>

                    <td className="icon-joiner">
                      <Link to={`/updateAuth/${item._id}`}>
                        <span>
                          {" "}
                          <FaRegEdit />
                        </span>
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
            </table>
          </div>
        )}
      </Container>
    </>
  );
};

export default HOC(Authorization);
