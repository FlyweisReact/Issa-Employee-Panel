/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { fetchApi, deleteApi } from "../../../Repository/Apis";
import Loader from "../../../components/Loader/Loader";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";

const FinancialRecord = () => {
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
      <CreateNav
        title={"Financial Transactions Record"}
        link={"/employee/patient-chart/financial2"}
      />

      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          <table responsive>
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
      </Container>
    </>
  );
};

export default HOC(FinancialRecord);
