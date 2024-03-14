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
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");

  const fetchHandler = () => {
    fetchApi(setLoading, "employee/getPatient", setData);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const boldStyle = {
    color: "#1A9FB2",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const filteredData =
    !query || !status
      ? data?.data?.data
      : data?.data?.data?.filter((i) =>
          i?.fullName?.toLowerCase().includes(query?.toLowerCase())
        );

  // isVerified

  const filterData = () => {
    let filteredData = data?.data?.data;
    if (query) {
      filteredData = filteredData?.filter((i) =>
        i?.fullName?.toLowerCase()?.includes(query?.toLowerCase()) ||
        i?.fullName?.toLowerCase()?.includes(query?.toLowerCase()) 
      );
    }
    if (status !== "") {
      const membershipStatus = status === "true";
      filteredData = filteredData?.filter(
        (i) => i?.isVerified === membershipStatus
      );
    }
    return filteredData || [];
  };

  return (
    <Container className="full-width-container">
      <p className="title-heading">All Patients</p>

      <div className="search-container">
        <div className="item">
          <p>Search:</p>
          <input
            type={"search"}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Name, Phone Number"
          />
        </div>
        <div className="item">
          <p>Filter:</p>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value=""> Select Prefrence </option>
            <option value={true}>Active </option>
            <option value={false}>InActive</option>
          </select>
        </div>
        <button>Search</button>
      </div>

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
                <th>Status</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filterData()?.map((i, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/search-list/${i._id}`} style={boldStyle}>
                      {i.fullName}
                    </Link>
                  </td>
                  <td> {i.Id} </td>
                  <td> {i.mobileNumber} </td>
                  <td> {i.email} </td>
                  <td> {i.isVerified ? "Active" : "InActive"} </td>
                  <td>
                    <Link to={`/book-appointment/${i._id}`} style={boldStyle}>
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
