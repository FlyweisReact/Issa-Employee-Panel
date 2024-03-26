/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getData, deleteData } from "../../../components/api/api";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";
import { getApi } from "../../../Repository/Apis";
import Loader from "../../../components/Loader/Loader";

const ProgressNote = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    getApi({
      url: "employee/getAllProgressNote",
      setResponse: setData,
      setLoading,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const deleteProgressNoteHandler = (id) => {
    if (!id) {
      return null;
    }
    deleteData(
      "employee/deleteProgressNote",
      id,
      getData(setData, "employee/getAllProgressNote")
    );
    getData(setData, "employee/getAllProgressNote");
  };

  return (
    <>
      <CreateNav title={"PROGRESS NOTE"} link={"/create-progress-note"} />

      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-table">
            <table className="colored_table">
              <thead>
                <tr>
                  <th>
                    Resident’s Name{" "}
                  </th>
                  <th>Admit Date</th>
                  <th>Shift</th>
                  <th>Therapy</th>
                  <th>Mood</th>
                  <th>Transportation</th>
                  <th></th>
                </tr>
              </thead>
            </table>
          </div>
        )}
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
                <th style={{ backgroundColor: "#D1ECF0" }}>Admit Date</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Shift</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Therapy</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Mood</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Transportation</th>
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
              {data.data?.length > 0 &&
                }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default HOC(ProgressNote);
