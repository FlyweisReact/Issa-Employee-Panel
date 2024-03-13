/** @format */
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import HOC from "../../Layout/Outer/HOC";
import { fetchApi } from "../../Repository/Apis";

const PatientList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const fetchHandler = () => {
    fetchApi(setLoading, "employee/getPatient", setData);
  };

  console.log(data?.data?.data);

  useEffect(() => {
    fetchHandler();
  }, []);

  const boldStyle = {
    color: "#1A9FB2",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <Container className="full-width-container">
      <p className="title-heading">All Patients</p>
      {loading ? (
        <Loader />
      ) : (
        <div className="overflow_table mt-4">
          <table className="colored_table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Refrence Id</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.data?.map((i, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/search-list/${i._id}`} style={boldStyle}>
                      {i.fullName}
                    </Link>
                  </td>
                  <td> {i.Id} </td>
                  <td> {i.mobileNumber} </td>
                  <td> {i.email} </td>
                  <td>
                    <Link
                      to={`/patient-list/book-appointment`}
                      style={boldStyle}
                    >
                      Book Appointment
                    </Link>
                  </td>
                  <td>
                    <Link to={`/patient-list/intake`} style={boldStyle}>
                      Intake
                    </Link>
                  </td>
                  <td>
                    <div className="icon-joiner">
                      <i className="fa-regular fa-trash-can" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  );
};

export default HOC({ Wcomponenet: PatientList });
