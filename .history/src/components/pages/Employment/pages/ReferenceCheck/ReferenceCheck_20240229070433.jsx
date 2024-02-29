/** @format */

import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  DateFormatter,
  DefaultInput,
  InputMaker,
} from "../../../../../Helper/Makers";
import NavWrapper from "../../../../../Helper/NavWrapper";

export const ReferenceCheck = () => {
  const navigate = useNavigate();
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
        <div className="grid-container">
          <div className="grid-item long-input">
            
          </div>
        </div>
      </form>
      </Container>
      <Form className="main-div-personal important">
        <div className="top-div-personal">
          <div
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <InputMaker
              label={"Reference:"}
              setState={setRefrence}
              value={refrence}
              placeholder={""}
              type="text"
            />

            <InputMaker
              label={"Date of Contact:"}
              setState={setDate}
              value={DateFormatter(date)}
              placeholder={""}
              type="date"
            />

            <InputMaker
              label={"Reference Recommendation:"}
              setState={setRecommend}
              value={recommend}
              placeholder={""}
              type="text"
            />

            <div className="custome-cloud-btn">
              <div className="btns">
                <button className="draft"> SAVE AS DRAFT</button>
                <button type="button" className="signed">
                  {" "}
                  SAVED AND SIGNED
                </button>
              </div>
            </div>

            <button
              className="add_more"
              type="button"
              onClick={() => addMore()}
            >
              Add More
            </button>

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
