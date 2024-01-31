/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { fetchApi } from "../../../../Repository/Apis";
import Loader from "../../../Loader/Loader";

const Incident = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(
      setLoading,
      `employee/getAllIncidentReport`,
      setDetail
    );
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{
            width: "80%",
            marginBottom: "1rem",
            display: "flex",
            paddingRight: "1rem",
          }}
        >
          <p style={{ fontWeight: "bold", flex: "1" }}> INCIDENT REPORT</p>
          <p>
          
              <Button
                style={{
                  fontSize: ".9rem",
                  fontWeight: "bold",
                  backgroundColor: "#1A9FB2",
                  padding: ".5rem 1.5rem",
                  border: "none",
                }}
                onClick={() => navigate("/employee/patient-chart/incident2")}
              >
                + NEW
              </Button>
          
          </p>
        </div>
      </div>

      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="top-div-personal">
          {console.log(detail)}
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
                      {i.partTypeB ? <span></span> : <span></span>}
                    </td>
                    <td className="icon-joiner">
                      <span>
                        {" "}
                        <FaRegEdit />
                      </span>
                      <span
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
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

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <span>
                <button className="print_btn">PRINT REPORT</button>
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Incident;
