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

const I9Form = () => {
  const [type, setType] = useState("Employment Eligibility Verification");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  const fd = new FormData();
  fd.append("type", type);
  fd.append("image", file);

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createI9", fd);
  };
  const options = [
    {
      value: "Employment Eligibility Verification",
      label: "Employment Eligibility Verification",
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
        title={"Employment Eligibility Verification"}
        isArrow={true}
      />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <p className="fw-bold text-center">
            ▶ Go to{" "}
            <a href="https://www.uscis.gov/i-9" target="_blank">
              www.uscis.gov/i-9
            </a>{" "}
            for instructions and the latest information.
          </p>
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
                placeholder=""
                value={type}
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

export default HOC({ Wcomponenet: I9Form, isNavbar: false });
