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
                  <th style={{ backgroundColor: "#D1ECF0" }}>Admit Date</th>
                  <th style={{ backgroundColor: "#D1ECF0" }}>Shift</th>
                  <th style={{ backgroundColor: "#D1ECF0" }}>Therapy</th>
                  <th style={{ backgroundColor: "#D1ECF0" }}>Mood</th>
                  <th style={{ backgroundColor: "#D1ECF0" }}>Transportation</th>
                  <th style={{ backgroundColor: "#D1ECF0" }}></th>
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
              {console.log(data)}
              {data.data?.length > 0 &&
                data?.data?.map((data) => (
                  <tr key={data?._id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{data?.residentName}</td>
                    <td>
                      {data?.admitDate
                        ?.split("T")[0]
                        ?.split("-")
                        .reverse()
                        .join("-")}
                    </td>
                    <td>{data?.shift}</td>
                    <td>
                      {Object.keys(data)
                        .filter(
                          (key) => key.includes("Therapy") && data[key] === true
                        )
                        .join(", ")}
                    </td>

                    <td>
                      {Object.keys(data)
                        .filter(
                          (key) =>
                            key.includes(
                              "isolation" ||
                                "anxious" ||
                                "depressed" ||
                                "existed" ||
                                "respondingToInternalStimuli" ||
                                "inappropriateSexualComment" ||
                                "verballyAggressive" ||
                                "physicallyAggressive" ||
                                "agitated" ||
                                "suicidalIdeation"
                            ) && data[key] === true
                        )
                        .join(", ")}
                    </td>
                    <td>{data?.transportation ? "Yes" : "No"}</td>
                    <td className="icon-joiner">
                      <Link to={`/progree-note/${data?._id}`}>
                        <span>
                          {" "}
                          <FaRegEdit />
                        </span>
                      </Link>
                      <span
                        onClick={() => deleteProgressNoteHandler(data?._id)}
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
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default HOC(ProgressNote);
