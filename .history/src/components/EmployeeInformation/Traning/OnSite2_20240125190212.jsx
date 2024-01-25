/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData, postData } from "../../api/api.js";
import { showMsg } from "../../api/ShowMsg.jsx";
import { InputMaker } from "../../../Helper/Makers.js";

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

  const initialTrainingState = {
    training: [
      {
        date: "",
        duration: "",
      },
    ],
    description: "",
    employeeSignature: "",
    employeeDate: "",
    trainerSignature: "",
    trainerDate: "",
  };

  const [formData, setFormData] = useState(initialTrainingState);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const emptyValues = Object.keys(formData).filter(
      (key) => formData[key] === ""
    );
    if (emptyValues.length > 0) {
      return showMsg(
        "Error",
        `${emptyValues.join(",")}  cannot be empty`,
        "danger"
      );
    }
    postData("employee/createOnSiteFacility", formData);
    navigate("/employee/training/on-site");
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
          }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold", flex: "1" }}>
            ON SITE AND FACILITY ORIENTATION VERIFICATION
          </p>
          <p>
            <Button onClick={() => navigate("/employee/training/on-site")}>
              Data
            </Button>
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form style={{ textAlign: "left", width: "100%" }}>
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
              type={"text"}
              value={trainerDate}
            />

            <InputMaker
              label={"Description"}
              setState={setDescription}
              placeholder={"Enter Text"}
              type={"text"}
              value={description}
            />

            <div>
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
                onChange={(e) => setEmployeeDate(e.target)}
                required
              />{" "}
              attest I have recieved facility orrientation traning evident by
              the Signatures below,
            </div>
            <InputMaker
              label={"Employeer Signature "}
              setState={setEmployeeSignature}
              placeholder={"Enter Text"}
              type={"text"}
              value={employeeSignature}
            />
            <InputMaker
              label={"Trainer Signature / Creadational / Title / Date "}
              setState={setTrainerSignature}
              placeholder={"Enter Text"}
              type={"text"}
              value={trainerSignature}
            />

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tranner Date </Form.Label>
              <Form.Control
                name="trainerDate"
                onChange={(e) =>
                  handleInputChange("trainerDate", e.target.value)
                }
                type="date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Employeer Signature </Form.Label>
              <Form.Control
                name="employeeSignature"
                onChange={(e) =>
                  handleInputChange("employeeSignature", e.target.value)
                }
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Trainer Signature / Creadational / Title / Date{" "}
              </Form.Label>
              <Form.Control
                name="trainerSignature"
                onChange={(e) =>
                  handleInputChange("trainerSignature", e.target.value)
                }
                type="text"
              />
            </Form.Group>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
                marginBottom: "3rem",
              }}
            >
              <Button
                style={{ padding: "0.5rem 1rem" }}
                onClick={submitHandler}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default OnSite2;