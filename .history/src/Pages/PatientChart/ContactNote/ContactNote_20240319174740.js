/** @format */

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getData } from "../../../components/api/api";
import { deleteApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";

const ContactNote = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);

  const getAllData = () => {
    getData(setData, "employee/getAllContactNote");
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
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/patient-chart")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{
            width: "80%",
            marginBottom: "1rem",
            display: "flex",
            paddingRight: "1rem",
          }}
        >
          <p style={{ fontWeight: "bold", flex: "1" }}>CONTACT NOTE</p>
          <p>
            <Button
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                backgroundColor: "#1A9FB2",
                padding: ".5rem 1.5rem",
                border: "none",
              }}
              onClick={() => navigate("/create-contact-note")}
            >
              + NEW
            </Button>
          </p>
        </div>
      </div>
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
                SAVE
              </Button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HOC(ContactNote);