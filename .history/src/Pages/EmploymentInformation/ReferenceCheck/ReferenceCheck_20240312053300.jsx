/** @format */

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BorderlessInput, DateFormatter } from "../../../Helper/Makers";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Outer/HOC";
import { SignatureModal } from "../../../Mod/Modal";
import { postApi } from "../../../Repository/Apis";

const ReferenceCheck = () => {
  const [arr, setArr] = useState([]);
  const [date, setDate] = useState("");
  const [referenceName, setRefrenceName] = useState("");
  const [referenceRecommendation, setRefrenceRecommendation] = useState("");
  const [savedSigned, setSavedSigned] = useState("");
  const [time, setTime] = useState("");
  const [signDate, setSignDate] = useState("");
  const [open, setOpen] = useState(false);
  const [ loading , setLoading ] = useState(false)

  const payload = {
    referenceName,
    referenceRecommendation,
    savedSigned,
  };

  const addMore = () => {
    setArr((prev) => [...prev, payload]);
  };
  const removeOne = async (index) => {
    await setArr((prev) => prev.filter((_, i) => i !== index));
    setRefrenceName("");
    setRefrenceRecommendation("");
    setSavedSigned("");
  };


  const apiPayload = {
    date,
    data: arr?.map((i) => ({
      referenceName: i.referenceName,
      referenceRecommendation: i.referenceRecommendation,
      savedSigned: i.savedSigned,
    })),
  };


  const submitHandle = async (e) =>{
    e.preventDefault()
    postApi(setLoading , "employee/createReferenceCheck")
  }


  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSavedSigned}
        value={savedSigned}
        setTime={setTime}
        setDate={setSignDate}
      />
      <NavWrapper title={"Reference Check and Recommendation"} isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start">
          <p className="fw-bold text-center">
            Good faith recommendation from references to include a former
            employer.
          </p>
          <div className="grid-container">
            <div className="third-wid-input grid-item" />
            <div className="grid-item">
              <label>Date of Contact:</label>
              <BorderlessInput
                setState={setDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(date)}
              />
            </div>
            <div className="grid-item long-input">
              <label>Reference Name:</label>
              <BorderlessInput
                setState={setRefrenceName}
                placeholder=""
                type={"text"}
                value={referenceName}
              />
            </div>
            <div className="grid-item"></div>
            <div className="grid-item full-wid-input">
              <label>Reference Recommendation:</label>
              <BorderlessInput
                setState={setRefrenceRecommendation}
                placeholder=""
                type={"text"}
                value={referenceRecommendation}
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>Signature </label>
              <div className="custome-cloud-btn mt-2">
                <div className="btns">
                  <button className="draft"> SAVE AS DRAFT</button>
                  <button
                    type="button"
                    className="signed"
                    onClick={() => setOpen(true)}
                  >
                    SAVED AND SIGNED
                  </button>
                </div>
                <div>
                  {savedSigned && (
                    <p>
                      Digitally Sign by {savedSigned} {signDate} {time}{" "}
                    </p>
                  )}
                </div>
              </div>
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
                    <th>Reference Recommendation</th>
                    <th>Signature</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {arr?.map((i, index) => (
                    <tr key={index}>
                      <td> {i.referenceName} </td>
                      <td> {i.referenceRecommendation} </td>
                      <td> {i.savedSigned} </td>
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
