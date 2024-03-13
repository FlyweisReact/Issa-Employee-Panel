/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";
import { BorderlessSelect } from "../../../Helper/Makers";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Outer/HOC";
import { postApi } from "../../../Repository/Apis";
import "./FW9.css";

const FW9 = () => {
  const [type, setType] = useState(
    "Request for Taxpayer Identification Number and Certification"
  );
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  const fd = new FormData();
  fd.append("type", type);
  fd.append("image", file);

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createFw9", fd);
  };

  const options = [
    {
      value: "Request for Taxpayer Identification Number and Certification",
      label: "Request for Taxpayer Identification Number and Certification",
    },
  ];

  const [data, setData] = useState({});

  const fetchHandler = () => {
    getData(setData, "employee/getFw9");
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <NavWrapper
        title={"Request for Taxpayer Identification Number and Certification"}
        isArrow={true}
      />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <p className="fw-bold text-center">
            ▶ Go to{" "}
            <a href="https://www.irs.gov/FormW9" target="_blank">
              www.irs.gov/FormW9
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

export default HOC({ Wcomponenet: FW9, isNavbar: false });
