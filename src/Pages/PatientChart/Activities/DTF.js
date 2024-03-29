/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";
import { DateInMMDDYY, deleteApi, fetchApi } from "../../../Repository/Apis";
import Loader from "../../../components/Loader/Loader";

const DTF = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(setLoading, "employee/getAllADLTrackingForm", setData);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteADLTrackingForm/${id}`);
    fetchHandler();
  };

  return (
    <>
      <CreateNav
        title={"Activities of Daily Living Tracking Form"}
        link={"/create-dtf"}
      />

      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-table">
            <table className="colored_table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Selecting Clothes</th>
                  <th>Bathing or Showering</th>
                  <th>Staff Initials </th>
                  <th>Resident's Name </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.data?.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{DateInMMDDYY(item?.date)}</td>
                      <td>
                        {item.selectingClothes?.someAssistanceNeeded
                          ? "Yes"
                          : "No"}
                      </td>
                      <td>
                        {item.bathingOrShowering?.someAssistanceNeeded
                          ? "Yes"
                          : "No"}
                      </td>
                      <td>{item?.bathingOrShowering?.staffInitials}</td>
                      <td>{item?.patientId?.fullName}</td>
                      <td className="icon-joiner">
                        <Link to={`/view-dtf/${item._id}`}>
                          <i className="fa-solid fa-eye" />
                        </Link>
                        <Link to={`/update-dtf/${item._id}`}>
                          <i className="fa-solid fa-edit" />
                        </Link>
                        <i
                          className="fa-solid fa-trash-can"
                          onClick={() => handleDelete(item._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </>
  );
};

export default HOC(DTF);
