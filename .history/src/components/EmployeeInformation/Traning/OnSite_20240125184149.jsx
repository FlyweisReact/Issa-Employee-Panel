/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../api/api.js";
import { fetchApi } from "../../../Repository/Apis.js";
import Loader from "../../Loader/Loader.js";

const OnSite = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    fetchApi(setLoading, `employee/getAllOnSiteFacility`, setList);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const handleDelete = (id) => {
    deleteData("employee/deleteOnSiteFacility", id);
  };

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/training")}
            src="/back_button2.png"
            alt="da"
          />
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
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            ON SITE AND FACILITY ORIENTATION VERIFICATION
          </p>
          <p>
            <Button onClick={() => navigate("/employee/training/on-site2")}>
              + NEW
            </Button>
          </p>
        </div>
      </div>
      {loading ? <Loader /> : }
      
    </>
  );
};

export default OnSite;
