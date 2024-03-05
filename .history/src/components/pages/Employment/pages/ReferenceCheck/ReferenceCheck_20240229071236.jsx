/** @format */

import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import {
  BorderlessInput,
  DateFormatter,
  DefaultInput,
} from "../../../../../Helper/Makers";
import NavWrapper from "../../../../../Helper/NavWrapper";

export const ReferenceCheck = () => {
  const [arr, setArr] = useState([]);
  const [refrence, setRefrence] = useState("");
  const [date, setDate] = useState("");
  const [recommend, setRecommend] = useState("");

  const payload = {
    refrence,
    date,
    recommend,
  };

  const addMore = () => {
    setArr((prev) => [...prev, payload]);
  };
  const removeOne = (index) => {
    setArr((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <NavWrapper title={"Reference Check and Recommendation"} isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start">
          <p className="fw-bold text-center">
            Good faith recommendation from references to include a former
            employer.
          </p>
          <div className="grid-container">
            <div className="grid-item long-input">
              <label>Reference Name:</label>
              <BorderlessInput
                setState={setRefrence}
                placeholder=""
                type={"text"}
                value={refrence}
              />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <label>Date of Contact:</label>
              <BorderlessInput
                setState={setDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(date)}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Reference Recommendation:</label>
              <BorderlessInput
                setState={setRecommend}
                placeholder=""
                type={"text"}
                value={recommend}
              />
            </div>

            <button
              className="add_more"
              type="button"
              onClick={() => addMore()}
            >
              Add More
            </button>
          </div>
          {arr?.length > 0 && 
          }
        </form>
      </Container>
      <Form className="main-div-personal important">
        <div className="top-div-personal">
          <div
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            {arr?.map((i, index) => (
              <div key={index} className="mt-3">
                <DefaultInput
                  isBots={true}
                  value={i.refrence}
                  label={"Reference:"}
                />
                <DefaultInput isBots={true} value={i.date} label={"Date:"} />
                <DefaultInput
                  isBots={true}
                  value={i.recommend}
                  label={"Reference Recommendation:"}
                />
                <button
                  className="remove_this"
                  type="button"
                  onClick={() => removeOne(index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
              <button
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#1A9FB2",
                  color: "white",
                  marginTop: "1rem",
                  borderRadius: "10px",
                }}
                type="submit"
              >
                PRINT REPORT
              </button>
            </div>
            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};