/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getData } from "../../../components/api/api";
import { deleteApi, fetchApi } from "../../../Repository/Apis";
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
        link="/employee/patient-chart/staffing2"
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
                {data?.data?.data?.length > 0 &&
                  data?.data?.data?.map((item) => (
                    <tr key={item._id}>
                      <td>{item.residentName}</td>
                      <td>
                        {item.todayDate
                          ?.split("T")[0]
                          ?.split("-")
                          .reverse()
                          .join("-")}
                      </td>
                      <td>{item.beginTime} </td>
                      <td>{item.endTime}</td>
                      <td>{item.progress}</td>
                      <td>{item.barriers}</td>
                      <td className="icon-joiner">
                        <Link to={`/view-staff/${item._id}`}>
                          <i className="fa-solid fa-eye" />
                        </Link>
                        <Link to={`/updateStaffNote/${item._id}`}>
                          <span>
                            {" "}
                            <FaRegEdit />
                          </span>
                        </Link>
                        <span
                          onClick={() => deleteDataHandler(item._id)}
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
            </table>
          </div>
        )}
      </Container>
    </>
  );
};

export default HOC(StaffNotes);