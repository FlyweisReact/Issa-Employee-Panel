/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import { BorderlessSelect } from "../../../Helper/Makers";
import { postApi } from "../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import HOC from "../../../Layout/Outer/HOC";
import { getData } from "../../../components/api/api";

const FW4Form = () => {
  const [type, setType] = useState("Employee’s Withholding Certificate");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  const fd = new FormData();
  fd.append("type", type);
  fd.append("image", file);

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createFW4", fd);
  };
  const [data, setData] = useState({});

  const fetchHandler = () => {
    getData(setData, "employee/getFW4");
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const options = [
    {
      value: "Employee’s Withholding Certificate",
      label: "Employee’s Withholding Certificate",
    },
  ];
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

export default HOC({ Wcomponenet: FW4Form, isNavbar: false });
