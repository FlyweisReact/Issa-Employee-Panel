/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { InputMaker } from "../../../Helper/Makers.js";
import { ClipLoader } from "react-spinners";
import { postApi } from "../../../Repository/Apis.js";

const OnSite2 = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [employeeDate, setEmployeeDate] = useState("");
  const [trainerSignature, setTrainerSignature] = useState("");
  const [trainerDate, setTrainerDate] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    training: [
      {
        date,
        duration,
      },
    ],
    description,
    employeeDate,
    employeeSignature,
    trainerSignature,
    trainerDate,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await postApi(setLoading, `employee/createOnSiteFacility`, payload);
    setDate("");
    setDuration("");
    setDescription("");
    setEmployeeDate("");
    setEmployeeSignature("");
    setTrainerDate("");
    setTrainerSignature("");
  };

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/training/on-site")}
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
            padding: "10px",
          }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            ON SITE AND FACILITY ORIENTATION VERIFICATION
          </p>
          <button
            className="new_btn"
            onClick={() => navigate("/employee/training/on-site")}
          >
            Data
          </button>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form
            onSubmit={submitHandler}
            style={{ textAlign: "left", width: "100%" }}
          >
            <InputMaker
              label={"Training Date"}
              setState={setDate}
              placeholder={"Enter Date"}
              type={"date"}
              value={date}
            />
            <InputMaker
              label={"Duration"}
              setState={setDuration}
              placeholder={"Enter Text"}
              type={"text"}
              value={duration}
            />
            <InputMaker
              label={"Tranner  Date"}
              setState={setTrainerDate}
              placeholder={"Enter Text"}
              type={"date"}
              value={trainerDate}
            />

            <InputMaker
              label={"Description"}
              setState={setDescription}
              placeholder={"Enter Text"}
              type={"text"}
              value={description}
            />

            <div className="mb-3">
              I{" "}
              <input
                style={{
                  border: "none",
                  width: "150px",
                  outline: "none",
                  borderBottom: "1px dashed black",
                  padding: 0,
                }}
                type="text"
                placeholder=""
                onChange={(e) => setEmployeeSignature(e.target.value)}
                required
              />{" "}
              attest I have recieved facility orrientation traning evident by
              the Signatures below,
            </div>
            <InputMaker
              label={"Employeer Signature / Date "}
              setState={setEmployeeSignature}
              placeholder={"Enter Text"}
              type={"date"}
              value={employeeSignature}
            />
            <InputMaker
              label={"Trainer Signature / Creadational / Title / Date "}
              setState={setTrainerSignature}
              placeholder={"Enter Text"}
              type={"text"}
              value={trainerSignature}
            />

            <div className="employee_btn_div">
              <button className="employee_create_btn" type="submit">
                {loading ? <ClipLoader color="#fff" /> : "Submit"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default OnSite2;
