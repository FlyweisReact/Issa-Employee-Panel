/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { fetchApi, deleteApi, DateInMMDDYY } from "../../../Repository/Apis";
import Loader from "../../../components/Loader/Loader";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";

const FinancialRecord = () => {
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

  console.log(data);

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
          <div className="overflow-table">
            <table className="colored_table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Deposit</th>
                  <th>Money Spent</th>
                  <th>Balance</th>
                  <th>Description of items spent</th>
                  <th>Resident Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.data?.map(
                  (item) =>
                    item?.transactions?.length > 0 &&
                    item?.transactions?.map((transactionItem) => (
                      <tr key={transactionItem?.id}>
                        <td>{DateInMMDDYY(item?.admitDate)}</td>
                        <td>${transactionItem?.deposit}</td>
                        <td>${transactionItem?.moneySpent}</td>
                        <td>${transactionItem?.balance}</td>
                        <td>{transactionItem?.description}</td>
                        <td>{item?.residentName}</td>
                        <td className="icon-joiner">
                          <Link to={`/editFTR/${item._id}`}>
                            <i className="" />
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
            </table>
          </div>
        )}
      </Container>
    </>
  );
};

export default HOC(FinancialRecord);
