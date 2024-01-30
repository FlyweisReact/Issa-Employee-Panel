/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../../api/api";

const ProgressNote = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(setData, "employee/getAllProgressNote");
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
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
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
          <p style={{ fontWeight: "bold", flex: "1" }}>PROGRESS NOTE</p>
          <p>
            <Button
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                backgroundColor: "#1A9FB2",
                padding: ".5rem 1.5rem",
                border: "none",
              }}
              onClick={() => navigate("/employee/patient-chart/progress2")}
            >
              + NEW
            </Button>
          </p>
        </div>
      </div>
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

export default ProgressNote;
