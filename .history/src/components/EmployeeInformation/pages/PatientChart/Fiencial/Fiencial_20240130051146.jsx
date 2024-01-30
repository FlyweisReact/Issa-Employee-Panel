/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

import {
  deleteData,
  getData,
} from "../../../../api/api";
import axios from "axios";
import {  Baseurl } from "../../../../../Baseurl";
import { showMsg } from "../../../../api/ShowMsg";
const Fiencial = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [patient, setPatient] = React.useState([]);
  const [patientId, setPatientId] = React.useState("");

  useEffect(() => {
    getData(setPatient, `employee/getPatient`);
  }, []);

  const patientData = (id) => {
    if (!id) {
      return null;
    }
    axios
      .get(`${Baseurl}employee/getAllFinancialTransactionsRecord`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          patientId: id,
        },
      })
      .then((res) => {
        if (res.data?.data?.length === 0) {
          setData([]);
          showMsg("Error", "No data found", "error");
          return;
        }
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);
      });
  };

  const deleteDataHandler = (id) => {
    console.log(id, "IDDD");
    if (!id) {
      return null;
    }
    deleteData(
      "employee/employee/deleteFinancialTransactionsRecord",
      id,
      patientData(patientId)
    );
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
          <p style={{ fontWeight: "bold", flex: "1" }}>
            FINANCIAL TRANSICTIONS RECORD
          </p>
          <p>
            <Button
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                backgroundColor: "#1A9FB2",
                padding: ".5rem 1.5rem",
                border: "none",
              }}
              onClick={() => navigate("/employee/patient-chart/financial2")}
            >
              + NEW
            </Button>
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form.Group className="mb-3 ">
            <Form.Label
              style={{ fontWeight: "bold", fontSize: ".9rem", maxWidth: "20%" }}
            >
              Resident Name:
            </Form.Label>
            <Form.Select
              onChange={(e) => patientData(e.target.value)}
              aria-label="Default select example"
            >
              <option>Select</option>
              {patient?.data?.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.fullName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
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
                <th style={{ backgroundColor: "#D1ECF0" }}>Date</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Deposit</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Money Spent</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>Balance</th>
                <th style={{ backgroundColor: "#D1ECF0" }}>
                  Description of items spent
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
              {data?.map(
                (item) =>
                  item?.transactions?.length > 0 &&
                  item?.transactions?.map((transactionItem) => (
                    <tr key={transactionItem.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        {transactionItem.date
                          ?.split("T")[0]
                          .split("-")
                          .reverse()
                          .join("-")}
                      </td>
                      <td>{transactionItem.deposit}</td>
                      <td>{transactionItem.moneySpent}</td>
                      <td>{transactionItem.balance}</td>
                      <td>{transactionItem.description}</td>
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
                          onClick={() => deleteDataHandler(transactionItem._id)}
                        >
                          {" "}
                          <RiDeleteBin5Fill style={{ color: "red" }} />
                          <span style={{ color: "red", fontSize: "1.1rem" }}>
                            DELETE
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))
              )}
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

export default Fiencial;
