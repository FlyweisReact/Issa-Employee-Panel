/** @format */

import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { deleteData } from "../../../components/api/api.js";
import CreateNav from "../../../Helper/CreateNav.js";
import { fetchApi } from "../../../Repository/Apis.js";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Loader from "../../../components/Loader/Loader.js";
import HOC from "../../../Layout/Inner/HOC.js";

const PRNform = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDelete = (id) => {
    deleteData("employee/deletePrnMedicationLog", id);
  };

  const fetchHandler = () => {
    fetchApi(setLoading, `employee/getAllPrnMedicationLog`, setData);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <CreateNav
        title={"PRN MEDICATION LOG"}
        link={"/employee/medications/prn-form2"}
      />

      {loading ? (
        <Loader />
      ) : (
        <Container className="full-width-container">
          <div className="overflow-table">
            <table className="colored_table">
              <thead>
                <tr>
                  <th> Resident Name</th>
                  <th>Medication and Strength</th>
                  <th>Instructions</th>
                  <th>Prescriber Name</th>
                  <th>Site Name</th>
                  <th>Response Code</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
          <div className="top-div-personal2">
            <Table responsive className="colored_table">
              <tbody>
                {data?.data?.data?.length > 0 &&
                  }
              </tbody>
            </Table>
            <button className="print_btn">PRINT REPORT</button>
          </div>
        </Container>
      )}
    </>
  );
};

export default HOC(PRNform);
