/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteApi, fetchApi } from "../../../../../Repository/Apis";
import Loader from "../../../../Loader/Loader";

const Fiencial = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const deleteDataHandler = async (id) => {
    await deleteApi(`employee/deleteFinancialTransactionsRecord/${id}`);
    fetchHandler();
  };

  const fetchHandler = () => {
    fetchApi(setLoading, `employee/getAllFinancialTransactionsRecord`, setData);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

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
          {loading ? (
            <Loader />
          ) : (
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
                  <th style={{ backgroundColor: "#D1ECF0" }}>Resident Name</th>

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
                {data?.data?.data?.map(
                  (item) =>
                    item?.transactions?.length > 0 &&
                    item?.transactions?.map((transactionItem) => (
                      <tr key={transactionItem.id}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          {item?.admitDate
                            ?.split("T")[0]
                            .split("-")
                            .reverse()
                            .join("-")}
                        </td>
                        <td>${transactionItem?.deposit}</td>
                        <td>${transactionItem?.moneySpent}</td>
                        <td>${transactionItem?.balance}</td>
                        <td>{transactionItem?.description}</td>
                        <td>{item?.residentName}</td>
                        <td className="icon-joiner">
                          <Link to={`/editFTR/${item._id}`}>
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
                            onClick={() => deleteDataHandler(item._id)}
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
          )}

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span>
              <button className="print_btn">SAVE</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fiencial;
