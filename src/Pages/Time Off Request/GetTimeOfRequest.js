/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HOC from "../../Layout/Inner/HOC.js";
import CreateNav from "../../Helper/CreateNav.js";
import { Link } from "react-router-dom";
import { DateInMMDDYY } from "../../Repository/Apis.js";
import Loader from "../../components/Loader/Loader.js";
import { fetchApi, deleteApi } from "../../Repository/Apis.js";
import NoFound from "../../components/Loader/NoFound.js";

const GetTimeOfRequest = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllData = () => {
    fetchApi(setLoading, "employee/getAllTimeOffRequest", setData);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteTimeOffRequest/${id}`);
    getAllData();
  };

  return (
    <>
      <CreateNav title={"TIME OFF REQUEST"} link={"/create-time-of-request"} />

      {loading ? (
        <Loader />
      ) : (
        <Container className="full-width-container">
          {data?.data?.data ? (
            <div className="overflow_table">
              <table className="colored_table">
                <thead>
                  <tr>
                    <th>Request Type</th>
                    <th>Begin Date</th>
                    <th>End Date</th>
                    <th>Signature</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> {data?.data?.data?.requestType} </td>
                    <td>
                      {" "}
                      {data?.data?.data?.beginDate &&
                        DateInMMDDYY(data?.data?.data?.beginDate)}{" "}
                    </td>
                    <td>
                      {" "}
                      {data?.data?.data?.endDate &&
                        DateInMMDDYY(data?.data?.data?.endDate)}{" "}
                    </td>
                    <td> {data?.data?.data?.signature} </td>
                    <td>
                      <div className="icon-joiner">
                        <Link to="/view-time-of-request">
                          <i className="fa-solid fa-eye" />
                        </Link>
                        <Link to={`/create-time-of-request`}>
                          <i className="fa-solid fa-edit" />
                        </Link>
                        <i
                          className="fa-solid fa-trash-can"
                          onClick={() => handleDelete(data?.data?.data?._id)}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <NoFound />
          )}
        </Container>
      )}
    </>
  );
};

export default HOC(GetTimeOfRequest);
