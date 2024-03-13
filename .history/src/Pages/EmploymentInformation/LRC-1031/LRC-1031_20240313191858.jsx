/** @format */

import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./LRC-1031.css";
import HOC from "../../../Layout/Outer/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { postApi } from "../../../Repository/Apis";
import { BorderlessSelect } from "../../../Helper/Makers";
import { ClipLoader } from "react-spinners";

const LRC1031 = () => {
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createI9", payload);
  };

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

          <div className="grid-container mb-5">
            <div className="grid-item long-input">
              <label>Choose file :</label>
              <input
                type="file"
                style={{ border: "none" }}
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

export default HOC({ Wcomponenet: LRC1031, isNavbar: false });
