/** @format */

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getData, deleteData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";
import { DateInMMDDYY } from "../../../Repository/Apis";

const DTF = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getData(setData, "employee/getAllADLTrackingForm");
  }, []);

  const handleDelete = (id) => {
    const newDataFn = () => {
      return getData(setData, "employee/getAllADLTrackingForm", newDataFn);
    };
    deleteData("employee/deleteADLTrackingForm", id, newDataFn);
  };

  console.log(data);

  return (
    <>
      <CreateNav title={"Activities of Daily Living Tracking Form"} />

      <Container className="full-width-container">
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
              {data?.data?.length > 0 &&
                data?.data?.map((item) => {
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
                        <Link to={`/adl/${item._id}`}>
                          <i className="fa-solid fa-edit" />
                        </Link>
                        <span
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                          }}
                          onClick={() => handleDelete(item._id)}
                        >
                          {" "}
                          <RiDeleteBin5Fill style={{ color: "red" }} />
                          <span style={{ color: "red", fontSize: "1.1.1rem" }}>
                            DELETE
                          </span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default HOC(DTF);
