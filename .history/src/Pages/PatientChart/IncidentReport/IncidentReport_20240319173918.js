/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { fetchApi, deleteApi } from "../../../Repository/Apis";
import Loader from "../../../components/Loader/Loader";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";

const IncidentReport = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(setLoading, `employee/getAllIncidentReport?partType=A`, setDetail);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const deleteHandler = async (id) => {
    await deleteApi(`employee/deleteIncidentReport/${id}`);
    fetchHandler();
  };

  return (
    <>
      <CreateNav title={"INCIDENT REPORT"} link={"/create-incident-report"} />

      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="top-div-personal">
            <Table responsive className="colored_table mt-5">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Resident’s Name</th>
                  <th>Date of Incident</th>
                  <th>Time</th>
                  <th>Name of Employee/s Involved</th>
                  <th>Name Resident/s Involved </th>
                  <th>Part B</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {detail?.data?.data?.map((i, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td> {i.patientId?.fullName} </td>
                    <td> {i.dateOfIncident?.slice(0, 10)} </td>
                    <td> {i?.timeOfIncident} </td>
                    <td>
                      <ul className="table_list">
                        {i?.employeesInvolved?.map((list, index) => (
                          <li key={`${list}${index}`}> {list?.fullName} </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul className="table_list">
                        {i?.residentsInvolved?.map((list, index) => (
                          <li key={`${list}${index}`}> {list?.fullName} </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <Link to={`/creat-incident-report-2/${i?._id}`}>
                        View
                      </Link>
                    </td>
                    <td className="icon-joiner">
                      <Link to={`/update-incident/${i._id}`}>
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
                        onClick={() => deleteHandler(i._id)}
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
          </div>
        )}
      </div>
    </>
  );
};

export default HOC(IncidentReport);
