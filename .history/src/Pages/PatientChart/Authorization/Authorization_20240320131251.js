/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
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

  return (
    <>
      <CreateNav
        title={"AUTHORIZATION FOR RELEASE OF INFORMATION"}
        link={"/create-authorization"}
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
                    <td>
                      <div className="icon-joiner">
                        <Link to={`/view-authorization/${item._id}`}>
                          <i className="fa-solid fa-edit" />
                        </Link>
                        <Link to={`/update-authorization/${item._id}`}>
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
        )}
      </Container>
    </>
  );
};

export default HOC(Authorization);
