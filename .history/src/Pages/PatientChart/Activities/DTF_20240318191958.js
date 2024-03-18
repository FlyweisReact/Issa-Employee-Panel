/** @format */

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getData, deleteData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";

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
              
            </tbody>
          </table>
        </div>
      </Container>
      <div>
        <div className="top-div-personal">
          <Table responsive>
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: "#D1ECF0",
                    borderRadius: "5px 0 0 0",
                  }}
                >
                  <input type="checkbox" />
                </th>
                <th style={{ backgroundColor: "#D1ECF0" }}></th>
                <th style={{ backgroundColor: "#D1ECF0" }}></th>
                <th style={{ backgroundColor: "#D1ECF0" }}></th>
                <th style={{ backgroundColor: "#D1ECF0" }}></th>
                <th style={{ backgroundColor: "#D1ECF0" }}></th>

                <th
                  style={{
                    backgroundColor: "#D1ECF0",
                    borderRadius: "0 5px 0 0",
                  }}
                ></th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.length > 0 &&
                data?.data?.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        {item.date
                          ?.split("T")[0]
                          .split("-")
                          .reverse()
                          .join("-")}
                      </td>
                      <td>
                        {item.selectingClothes?.someAssistanceNeeded === true
                          ? "Yes"
                          : "No"}
                      </td>
                      <td>
                        {item.bathingOrShowering?.someAssistanceNeeded === true
                          ? "Yes"
                          : "No"}
                      </td>
                      <td>{item?.bathingOrShowering?.staffInitials}</td>
                      <td>{item?.patientId?.fullName}</td>
                      <td className="icon-joiner">
                        <Link to={`/adl/${item._id}`}>
                          <span className="cursor-pointer">
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

export default HOC(DTF);
