/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./LRC-1031.css";
import HOC from "../../../Layout/Outer/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { postApi } from "../../../Repository/Apis";
import { BorderlessSelect } from "../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";

const LRC1031 = () => {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("ARIZONA DEPARTMENT OF ECONOMIC SECURITY");
  const [file, setFile] = useState("");

  const fd = new FormData();
  fd.append("type", type);
  fd.append("image", file);

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createI9", fd);
  };

  const options = [
    {
      value: "ARIZONA DEPARTMENT OF ECONOMIC SECURITY",
      label: "ARIZONA DEPARTMENT OF ECONOMIC SECURITY",
    },
  ];

  const [data, setData] = useState({});

  const fetchHandler = () => {
    getData(setData, "employee/getForms2023");
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <NavWrapper
        title={"ARIZONA DEPARTMENT OF ECONOMIC SECURITY"}
        isArrow={true}
      />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <p className="fw-bold text-center">
            ▶ Go to{" "}
            <a
              href="https://des.az.gov/digital-library/lcr-1034a"
              target="_blank"
            >
              des.az.gov/digital-library/lcr-1034a
            </a>{" "}
            for instructions and the latest information.
          </p>
          {data?.data?.document && (
            <p className="fw-bold text-center">
              Preview previous uploaded document
              <a href={data?.data?.document} target="_blank">
                {" Document"}
              </a>{" "}
            </p>
          )}

          <div className="grid-container mb-5">
            <div className="grid-item long-input">
              <label>Choose file :</label>
              <input
                type="file"
                style={{ border: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
                className="borderless_input"
              />
            </div>
            <div className="grid-item long-input">
              <label>Type :</label>
              <BorderlessSelect
                setState={setType}
                value={type}
                options={options}
              />
            </div>
          </div>
          <div className="save-as-draft-btn123 mb-3">
            <button className="btn1233" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default HOC({ Wcomponenet: LRC1031, isNavbar: false });
