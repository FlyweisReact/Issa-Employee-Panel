/** @format */

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BorderlessInput, DateFormatter } from "../../../Helper/Makers";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Outer/HOC";
import { SignatureModal } from "../../../Mod/Modal";

const ReferenceCheck = () => {
  const [arr, setArr] = useState([]);
  const [refrence, setRefrence] = useState("");
  const [date, setDate] = useState("");
  const [recommend, setRecommend] = useState("");

  const [referenceName, setRefrenceName] = useState("");
  const [referenceRecommendation, setRefrenceRecommendation] = useState("");
  const [savedSigned, setSavedSigned] = useState("");
  const [time, setTime] = useState("");
  const [signDate, setSignDate] = useState("");
  const [open, setOpen] = useState(false);

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

  // {
  //     "date": "2023-12-28",
  //     "data": [
  //         {
  //             "referenceName": "John Doe",
  //             "referenceRecommendation": "Highly recommended",
  //             "savedSigned": ""
  //         }
  //     ]
  // }

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSavedSigned}
      />
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
          {arr?.length > 0 && (
            <div className="overflow_table mt-3">
              <table className="mb-3 color-full">
                <thead>
                  <tr>
                    <th>Reference Name</th>
                    <th>Date of Contact</th>
                    <th>Reference Recommendation</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {arr?.map((i, index) => (
                    <tr key={index}>
                      <td> {i.refrence} </td>
                      <td> {i.date} </td>
                      <td> {i.recommend} </td>
                      <td>
                        {" "}
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => removeOne(index)}
                        />{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <button className="print_btn">PRINT REPORT </button>
          <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};
export default HOC({ Wcomponenet: ReferenceCheck, isNavbar: false });
