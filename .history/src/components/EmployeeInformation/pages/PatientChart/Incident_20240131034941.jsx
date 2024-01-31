/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { fetchApi } from "../../../../Repository/Apis";

const Incident = () => {
  const navigate = useNavigate();
  const [partType, setPartType] = useState("A");
  const [detail, setDetail] = useState({});
  const [ loading ,setLoading ] = useState(false)

  const fetchHandler = () => {
    fetchApi(setLoading , `employee/getAllIncidentReport?partType=${part}`)
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
          <p style={{ fontWeight: "bold", flex: "1" }}> INCIDENT REPORT</p>
          <p>
            <Button
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                backgroundColor: "#1A9FB2",
                padding: ".5rem 1.5rem",
                border: "none",
              }}
              onClick={() => navigate("/employee/patient-chart/incident2")}
            >
              + NEW
            </Button>
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form className="form-personal">
            <p
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  border: "1px solid #1A9FB2",

                  padding: "1.2rem 1.5rem ",
                  borderRadius: ".5rem",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label
                    style={{ marginRight: "15px", color: "#1A9FB2" }}
                  >
                    Part 1
                  </Form.Check.Label>
                </Form.Check>
              </span>

              <span
                style={{
                  border: "1px solid #1A9FB2",

                  padding: "1.2rem 1.5rem ",
                  borderRadius: ".5rem",
                }}
              >
                <Form.Check type={"radio"} id={`check-api-yes`}>
                  <Form.Check.Input name="radio1" type={"radio"} isValid />
                  <Form.Check.Label
                    style={{ marginRight: "15px", color: "#1A9FB2" }}
                  >
                    Part 2
                  </Form.Check.Label>
                </Form.Check>
              </span>
            </p>
          </Form>

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
                <th style={{ backgroundColor: "#D1ECF0" }}>Date of Incident</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Time</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Name of Employee/s Involved
                </th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Name Resident/s Involved{" "}
                </th>

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
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Dr. Colter</td>
                <td>10/10/2022</td>
                <td>7am-3pm</td>
                <td>Text</td>
                <td>Text</td>
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
                  >
                    {" "}
                    <RiDeleteBin5Fill style={{ color: "red" }} />
                    <span style={{ color: "red", fontSize: "1.1.1rem" }}>
                      DELETE
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span>
              <button className="print_btn">PRINT REPORT</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Incident;
