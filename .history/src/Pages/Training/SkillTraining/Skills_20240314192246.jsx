/** @format */

import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../../components/api/api.js";
import HOC from "../../../Layout/Inner/HOC.js";
import CreateNav from "../../../Helper/CreateNav.js";

const Skills = () => {
  const [data, setData] = useState([]);

  const getAllData = () => {
    getData(setData, "employee/getAllSkillAndKnowledge");
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = (id) => {
    deleteData("employee/deleteSkillAndKnowledge", id);
  };

  console.log(data);

  return (
    <>
      <CreateNav
        title={"Skills and Knowledge Training"}
        link={"/create-skill-training"}
      />

      <Container className="full-width-container">
        <div className="overflow_table">
          <table className="colored_table">
            <thead>
              <tr>
                <th>Hours completed</th>
                <th>Employee title</th>
                <th>Verified title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((i, index) => (
                <tr key={index}>
                  <td> {i?.hoursCompleted} </td>
                  <td> {i?.employeeTitle} </td>
                  <td> {i?.verifiedByTitle} </td>
                  <td>
                    <
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>

      <div>
        <div className="top-div-personal" style={{ paddingTop: "20px" }}>
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
                <th style={{ backgroundColor: "#D1ECF0" }}>Employee Title</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Date</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Verified Title</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Date</th>

                <th
                  style={{
                    backgroundColor: "#D1ECF0",
                    borderRadius: "0 5px 0 0",
                  }}
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{data?.data?.employeeName}</td>
                <td>
                  {data?.data?.employeeDate
                    ?.split("T")[0]
                    .split("-")
                    .reverse()
                    .join("-")}
                </td>
                <td>{data?.data?.verifiedByTitle}</td>
                <td>{data?.data?.hoursCompleted}</td>
                <td
                  style={{
                    display: "flex",
                    gap: "1rem",
                    fontWeight: "bold",
                    color: "#1A9FB2",
                    alignItems: "center",
                    fontSize: "1.4rem",
                  }}
                >
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
                    onClick={() => handleDelete(data?.data?._id)}
                  >
                    {" "}
                    <RiDeleteBin5Fill style={{ color: "red" }} />
                    <span style={{ color: "red", fontSize: "1.1.1rem" }}>
                      DELETE
                    </span>
                  </span>
                </td>
              </tr>
              {data?.data?.length > 0 &&
                data?.data?.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <input type="checkbox" />
                    </td>

                    <td>{item.residentName}</td>
                    <td>{item.familyMember}</td>
                    <td>{item.email}</td>
                    <td>{item.date}</td>
                    <td>{item.caseManager}</td>
                    <td
                      style={{
                        display: "flex",
                        gap: "1rem",
                        fontWeight: "bold",
                        color: "#1A9FB2",
                        alignItems: "center",
                        fontSize: "1.4rem",
                      }}
                    >
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
                ))}
            </tbody>
          </Table>

          <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
            <button
              style={{
                padding: "10px 24px",
                backgroundColor: "#1A9FB2",
                color: "white",
                marginTop: "1rem",
                borderRadius: "10px",
              }}
              type="submit"
            >
              PRINT REPORT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(Skills);
