/** @format */

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData } from "../../../components/api/api.js";
import { getData } from "../../../components/api/api";
import CreateNav from "../../../Helper/CreateNav.js";
import HOC from "../../../Layout/Inner/HOC.js";

const Discharge = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);

  const deleteHandler = (id) => {
    deleteData(
      "employee/deleteDischargeSummary",
      id,
      getData(setData, "employee/getAllDischargeSummary")
    );
  };

  const fetchHandler = () => {
    getData(setData, "employee/getAllDischargeSummary");
  };
  useEffect(() => {
    fetchHandler();
  }, []);

  console.log(data);

  return (
    <>
      <CreateNav
        title={"DISCHARGE SUMMARY"}
        link={"/create-discharge-summary"}
      />
      <Container className="full-width-container">
        <div className="overflow-table">
          <table className="colored_table">
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Date of Admission</th>
                <th>Date of Discharge</th>
                <th> Reason for Discharge</th>
                <th> Treatment Provided</th>
                <th></th>
              </tr>
            </thead>
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
                <th style={{ backgroundColor: "#D1ECF0" }}>Resident’s Name </th>
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
                    <tr key={item?._id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{item?.clientName}</td>
                      <td>{item?.dateOfAdmission?.split("T")[0]}</td>{" "}
                      <td>{item?.dateOfDischarge?.split("T")[0]}</td>
                      <td>{item?.reasonForDischarge}</td>
                      <td>{item?.treatmentProvided}</td>
                      <td className="icon-joiner">
                        <Link to={`/update-discharge/${item._id}`}>
                          <span className="cursor-pointer">
                            {" "}
                            <FaRegEdit />
                          </span>
                        </Link>

                        <span
                          onClick={() => {
                            deleteHandler(item?._id);
                            console.log("id");
                          }}
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
                  );
                })}
            </tbody>
          </Table>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* <span></span> */}
            <span>
              <Button
                type="submit"
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

export default HOC(Discharge);
