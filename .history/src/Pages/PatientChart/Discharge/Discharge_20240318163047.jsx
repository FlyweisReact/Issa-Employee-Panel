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
            <tbody>
              {data?.data?.length > 0 &&
                data?.data?.map((item) => {
                  return (
                    <tr key={item?._id}>
                      <td>{item?.clientName}</td>
                      <td>{item?.dateOfAdmission?.split("T")[0]}</td>{" "}
                      <td>{item?.dateOfDischarge?.split("T")[0]}</td>
                      <td>{item?.reasonForDischarge}</td>
                      <td>{item?.treatmentProvided}</td>
                      <td className="icon-joiner">
                        <Link to={`/update-discharge/${item._id}`}>
                          <i className="fa-solid fa-edit" />
                        </Link>
                        <i
                          className="fa-solid fa-trash-can"
                          onClick={() => deleteHandler(item?._id)}
                        />
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

export default HOC(Discharge);
