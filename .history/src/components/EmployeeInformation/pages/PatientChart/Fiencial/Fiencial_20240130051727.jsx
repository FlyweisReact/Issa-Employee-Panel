/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData } from "../../../../api/api";
import { fetchApi } from "../../../../../Repository/Apis";
import Loader from "../../../../Loader/Loader";
const Fiencial = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const deleteDataHandler = (id) => {
    deleteData("employee/employee/deleteFinancialTransactionsRecord", id);
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
        {loading ? <Loader /> : }
          


          

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
