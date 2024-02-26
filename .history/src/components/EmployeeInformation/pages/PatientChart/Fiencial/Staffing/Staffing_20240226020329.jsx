/** @format */

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getData } from "../../../../../api/api";
import { deleteApi } from "../../../../../../Repository/Apis";
import CreateNav from "../../../../../../Helper/CreateNav";

const Staffing = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);

  const fetchHandler = () => {
    getData(setData, `employee/getAllStaffingNote`);
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

      <div>
        <div className="top-div-personal">
          <Table responsive className="colored_table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
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
              {data?.data?.length > 0 &&
                data?.data?.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <input type="checkbox" />
                    </td>
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
                      <Link to={`/updateStaffNote/${item._id}`}>
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
          </Table>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <span></span> */}
            <span>
              <Button
                style={{
                  fontSize: ".9rem",
                  fontWeight: "bold",
                  backgroundColor: "#1A9FB2",
                  padding: ".5rem 1.5rem",
                  border: "none",
                }}
              >
                PRINT REPORT
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Staffing;
