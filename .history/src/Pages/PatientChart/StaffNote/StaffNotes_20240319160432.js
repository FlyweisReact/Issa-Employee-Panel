/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getData } from "../../../components/api/api";
import { DateInMMDDYY, deleteApi, fetchApi } from "../../../Repository/Apis";
import CreateNav from "../../../Helper/CreateNav";
import HOC from "../../../Layout/Inner/HOC";
import Loader from "../../../components/Loader/Loader";

const StaffNotes = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(setLoading, "employee/getAllStaffingNote", setData);
  };
  useEffect(() => {
    fetchHandler();
  }, []);

  const deleteDataHandler = async (id) => {
    await deleteApi(`employee/deleteStaffingNote/${id}`);
    fetchHandler();
  };
  return (
    <>
      <CreateNav
        title={"STAFFING NOTE"}
        link="/create-staff-note"
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
                  <th>Today's Date</th>
                  <th>Begin Time</th>
                  <th>End Time</th>
                  <th>PROGRESS </th>
                  <th>BARRIER(S) </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.data?.map((item, index) => (
                  <tr key={index}>
                    <td>{item?.residentName}</td>
                    <td>{DateInMMDDYY(item?.todayDate)}</td>
                    <td>{item.beginTime} </td>
                    <td>{item.endTime}</td>
                    <td>{item.progress}</td>
                    <td>{item.barriers}</td>
                    <td className="icon-joiner">
                      <Link to={`/view-staff/${item._id}`}>
                        <i className="fa-solid fa-eye" />
                      </Link>
                      <Link to={`/update-staff-note/${item._id}`}>
                        <i className="fa-solid fa-edit" />
                      </Link>
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={() => deleteDataHandler(item?._id)}
                      />
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

export default HOC(StaffNotes);
