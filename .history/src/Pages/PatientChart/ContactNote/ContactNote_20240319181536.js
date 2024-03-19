/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getData } from "../../../components/api/api";
import { deleteApi, fetchApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";
import Loader from "../../../components/Loader/Loader";

const ContactNote = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getAllData = () => {
    fetchApi(setLoading, "employee/getAllContactNote", setData);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteContactNote/${id}`);
    getAllData();
  };

  return (
    <>
      <CreateNav title={"CONTACT NOTE"} link={"/create-contact-note"} />

      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-table">
            <table className="colored_table">
              <thead>
                <tr>
                  <th>Resident's Name</th>
                  <th>Family Member</th>
                  <th>Email</th>
                  <th>Cash Manager</th>
                  <th></th>
                </tr>
              </thead>
            </table>
          </div>
        )}
      </Container>

      <div>
        <div className="top-div-personal">
          <Table responsive className="colored_table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Resident's Name</th>
                <th>Family Member</th>
                <th>Email</th>
                <th>Cash Manager</th>
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
                    <td>{item.familyMember}</td>
                    <td>{item.email}</td>
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
                      <Link to={`/update-contact-note/${item._id}`}>
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
        </div>
      </div>
    </>
  );
};

export default HOC(ContactNote);
