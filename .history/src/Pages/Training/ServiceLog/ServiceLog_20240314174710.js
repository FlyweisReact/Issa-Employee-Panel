/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { DateInMMDDYY, deleteApi, fetchApi } from "../../../Repository/Apis.js";
import Loader from "../../../components/Loader/Loader.js";
import HOC from "../../../Layout/Inner/HOC.js";
import CreateNav from "../../../Helper/CreateNav.js";
import { BorderlessInput } from "../../../Helper/Makers.js";
import { Link } from "react-router-dom";

const ServiceLog = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const fetchHandler = () => {
    const url = "employee/getAllEmployeeInServiceLog";
    fetchApi(setLoading, url, setData);
  };

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteEmployeeInServiceLog/${id}`);
    fetchHandler();
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const filteredData = !query
    ? data?.data?.data
    : data?.data?.data?.filter((i) =>
        i?.employeeName?.toLowerCase().includes(query?.toLowerCase())
      );

  return (
    <>
      <CreateNav
        title={"EMPLOYEE IN-SERVICE LOG"}
        link={"/create-service-log"}
      />
      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <div className="grid-container mb-3">
              <div className="grid-item">
                <label>Employee Name:</label>
                <BorderlessInput
                  setState={setQuery}
                  value={query}
                  type="text"
                />
              </div>
            </div>
            <div className="overflow-table">
              <table className="colored_table">
                <thead>
                  <tr>
                    <th>Date of In-Service Training</th>
                    <th>Employee Name</th>
                    <th> Subject</th>
                    <th>Number of Hours or Units</th>
                    <th>Administrator/ BHP/Registered Nures Signature</th>
                    <th>Employee’s Signature</th>
                    <th></th>{" "}
                  </tr>
                </thead>
                <tbody>
                  {filteredData?.map((data) => (
                    <tr key={data?._id}>
                      <td>{DateInMMDDYY(data?.dateOfTraining)}</td>
                      <td> {data?.employeeName} </td>
                      <td>
                        {data?.trainingSubject?.map((subject, index) => (
                          <span key={index}>{subject}</span>
                        ))}
                      </td>
                      <td>{data?.hoursOrUnits}</td>
                      <td>{data?.administratorSignature}</td>
                      <td>{data?.employeeSignature}</td>
                      <td className="icon-joiner">
                        <div className="icon-joiner">
                        <Link
                          <Link to={`/edit-service-log/${data?._id}`}>
                            <i className="fa-solid fa-edit" />
                          </Link>

                          <i
                            className="fa-regular fa-trash-can"
                            onClick={() => handleDelete(data?._id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default HOC(ServiceLog);
