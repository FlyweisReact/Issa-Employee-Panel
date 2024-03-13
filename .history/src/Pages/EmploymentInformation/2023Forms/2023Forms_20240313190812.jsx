/** @format */

import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { BorderlessSelect } from "../../../Helper/Makers";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Outer/HOC";
import { postApi } from "../../../Repository/Apis";

const Forms2023 = () => {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  

  const payload = {};

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createForms2023", payload);
  };




  return (
    <>
      <NavWrapper
        isArrow={true}
        title={"Employee’s Arizona Withholding Election"}
      />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <p className="fw-bold text-center">
            ▶ Go to{" "}
            <a
              href="https://azdor.gov/business/withholding-tax"
              target="_blank"
            >
              azdor.gov/business/withholding-tax
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
                value={type}
                options={() => ({
                  value : 
                })}

              />
            </div>
          </div>

          <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};
export default HOC({ Wcomponenet: Forms2023, isNavbar: false });
