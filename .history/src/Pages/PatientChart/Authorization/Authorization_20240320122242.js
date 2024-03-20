/** @format */

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getData } from "../../../components/api/api";
import { deleteApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import CreateNav from "../../../Helper/CreateNav";

const Authorization = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);

  const fetchHandler = () => {
    getData(setData, `employee/getAllAuthorizationForReleaseOfInformation`);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const handleDelete = async (id) => {
    await deleteApi(
      `employee/deleteAuthorizationForReleaseOfInformation/${id}`
    );
    fetchHandler();
  };

  return (
    <>
      <CreateNav
        title={"AUTHORIZATION FOR RELEASE OF INFORMATION"}
        link={"/employee/patient-chart/authorization2"}
      />

      <Container className="full-width-container"></Container>

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
                <th style={{ backgroundColor: "#D1ECF0" }}>Resident’s Name</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Phone </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Relationship to Person
                </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Date</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Witness</th>

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
                data?.data?.map((item) => (
                  <tr key={item?.id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{item?.residentName}</td>
                    <td>{item?.authorizedPersonPhone}</td>
                    <td>{item?.relationshipToPerson}</td>
                    <td>
                      {item?.dateSigned
                        .split("T")[0]
                        .split("-")
                        .reverse()
                        .join("-")}
                    </td>
                    <td>{item?.witness}</td>

                    <td className="icon-joiner">
                      <Link to={`/updateAuth/${item._id}`}>
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
                        onClick={() => handleDelete(item?._id)}
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

export default HOC(Authorization);
