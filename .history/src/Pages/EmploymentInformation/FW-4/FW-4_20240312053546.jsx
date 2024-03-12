/** @format */

import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import { BorderlessSelect } from "../../../Helper/Makers";
import { postApi } from "../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import HOC from "../../../Layout/Outer/HOC";

const FW4Form = () => {
  const [type, setType] = useState("");
  const [ file , setFile ] = useState("")
  const [loading, setLoading] = useState(false);

  const payload = {
    
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createFW4", payload);
  };

  return (
    <>
      <NavWrapper title={"Employee’s Withholding Certificate"} isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <p className="fw-bold text-center">
            ▶ Go to{" "}
            <a
              href="https://www.irs.gov/forms-pubs/about-form-w-4"
              target="_blank"
            >
              www.irs.gov/forms-pubs/about-form-w-4
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

export default HOC({ Wcomponenet: FW4Form, isNavbar: false });
