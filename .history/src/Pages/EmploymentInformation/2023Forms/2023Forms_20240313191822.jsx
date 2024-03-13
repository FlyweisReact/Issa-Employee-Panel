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

const Forms2023 = () => {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("Employee’s Arizona Withholding Election");
  const [file, setFile] = useState("");

  const fd = new FormData();
  fd.append("type", type);
  fd.append("image", file);

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createForms2023", fd);
  };

  const options = [
    {
      value: "Employee’s Arizona Withholding Election",
      label: "Employee’s Arizona Withholding Election",
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

{data?.data?.document && }
          <p className="fw-bold text-center">
            Preview previous uploaded document
            <a href={data?.data?.document} target="_blank">
              {" Document"}
            </a>{" "}
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
                value={type}
                options={options}
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
