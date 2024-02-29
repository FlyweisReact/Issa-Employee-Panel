/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import {
  BorderlessInput,
  CheckBoxMaker,
  DateFormatter,
  RadioMaker,
} from "../../../../../Helper/Makers";
import NavWrapper from "../../../../../Helper/NavWrapper";
import { SignatureModal } from "../../../../../Mod/Modal";
import { postApi } from "../../../../../Repository/Apis";
import { getData } from "../../../../api/api";

export const Forms2023 = () => {
  const [fullName, setFullName] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
  const [numberAndStreet, setNumberAndStreet] = useState("");
  const [cityOrTown, setCityOrTown] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [option, setOption] = useState(1);
  const [percentage, setPercentage] = useState(0.5);
  const [checkBox, setCheckBox] = useState(false);
  const [extraAmount, setExtraAmount] = useState("");
  const [open, setOpen] = useState(false);
  const [signature, setSignature] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});

  const withholdingOption =
    option === 1
      ? {
          option: option,
          percentage: percentage,
          checkBox: checkBox,
          extraAmount: extraAmount,
        }
      : {
          option: option,
        };

  const payload = {
    employeeId: profile?.data?._id,
    fullName,
    socialSecurityNumber,
    numberAndStreet,
    cityOrTown,
    state,
    zipCode,
    withholdingOption: withholdingOption,
    signature,
    date,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createForms2023", payload);
  };

  useEffect(() => {
    getData(setProfile, "employee/getProfile");
  }, []);

  const content = {
    firstItem: [
      {
        para: "Arizona law requires your employer to withhold Arizona income tax from your wages for work done in Arizona. The amount withheld is applied to your Arizona income tax due when you file your tax return. The amount withheld is a percentage of your gross taxable wages from every paycheck. You may also have your employer withhold an extra amount from each paycheck. Complete this form to select a percentage and any  extra amount to be withheld from each paycheck.",
        status: "desc",
      },
      {
        para: "What are my “Gross Taxable Wages”?",
        status: "heading",
      },
      {
        para: "For withholding purposes, your “gross taxable wages” are the wages that will generally be in box 1 of your federal Form W-2.
        It is your gross wages less any pretax deductions, such as your
        share of health insurance premiums.?",
        status: "heading",
      },
    ],
  };

  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setSignature}
        value={signature}
      />

      <NavWrapper
        isArrow={true}
        title={"Employee’s Arizona Withholding Election"}
      />

      <Container className="full-width-container">
        <form className="w-100 text-start" onSubmit={submitHandler}>
          <p className="fw-bold text-center">
            Arizona tax rates have decreased. As a result, we are revising
            withholding percentages and are requiring taxpayers to complete a
            new Form A-4 for 2023.
          </p>

          <div className="grid-container">
            <div className="grid-item long-input">
              <label>Type or print your Full Name</label>
              <BorderlessInput
                setState={setFullName}
                placeholder=""
                type={"text"}
                value={fullName}
              />
            </div>
            <div className="grid-item long-input">
              <label>Your Social Security Number</label>
              <BorderlessInput
                setState={setSocialSecurityNumber}
                placeholder=""
                type={"text"}
                value={socialSecurityNumber}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Home Address – number and street or rural route</label>
              <BorderlessInput
                setState={setNumberAndStreet}
                placeholder=""
                type={"text"}
                value={numberAndStreet}
              />
            </div>
            <div className="grid-item long-input">
              <label>City or Town</label>
              <BorderlessInput
                setState={setCityOrTown}
                placeholder=""
                type={"text"}
                value={cityOrTown}
              />
            </div>
            <div className="grid-item">
              <label>State</label>
              <BorderlessInput
                setState={setState}
                placeholder=""
                type={"text"}
                value={state}
              />
            </div>
            <div className="grid-item">
              <label>ZIP Code</label>
              <BorderlessInput
                setState={setZipCode}
                placeholder=""
                type={"text"}
                value={zipCode}
              />
            </div>
          </div>

          <div className="mt-3" style={{ color: "#000" }}>
            <h6 className="fw-bold m-0">Choose either box 1 or box 2:</h6>
            <div className="mt-2">
              <RadioMaker
                name="options"
                value={1}
                setValue={setOption}
                id="option1"
                label="Withhold from gross taxable wages at the percentage checked (check only one percentage):"
                checked={option}
              />
            </div>
            {option === 1 && (
              <div className="Radio_btns mt-2">
                <span className="btns">
                  <RadioMaker
                    name="percentage"
                    setValue={setPercentage}
                    value={0.5}
                    id={"percentage1"}
                    label={"0.5%"}
                    checked={percentage}
                  />
                  <RadioMaker
                    name="percentage"
                    setValue={setPercentage}
                    value={1}
                    id={"percentage2"}
                    label={"1%"}
                    checked={percentage}
                  />
                  <RadioMaker
                    name="percentage"
                    setValue={setPercentage}
                    value={1.5}
                    id={"percentage3"}
                    label={"1.5%"}
                    checked={percentage}
                  />
                  <RadioMaker
                    name="percentage"
                    setValue={setPercentage}
                    value={2}
                    id={"percentage4"}
                    label={"2%"}
                    checked={percentage}
                  />
                  <RadioMaker
                    name="percentage"
                    setValue={setPercentage}
                    value={3.5}
                    id={"percentage8"}
                    label={"2.5%"}
                    checked={percentage}
                  />
                  <RadioMaker
                    name="percentage"
                    setValue={setPercentage}
                    value={3}
                    id={"percentage5"}
                    label={"3%"}
                    checked={percentage}
                  />
                  <RadioMaker
                    name="percentage"
                    setValue={setPercentage}
                    value={3.5}
                    id={"percentage6"}
                    label={"3.5%"}
                    checked={percentage}
                  />
                </span>
              </div>
            )}

            <div className="grid-container mt-2">
              <div className="grid-item long-input">
                <CheckBoxMaker
                  setValue={setCheckBox}
                  value={!checkBox}
                  label={
                    "Check this box and enter an extra amount to be withheld from each paycheck"
                  }
                  checked={checkBox}
                  id="checkbx"
                />
              </div>
              <div className="grid-item" />
              {checkBox === true && (
                <div className="grid-item">
                  <label>$</label>
                  <BorderlessInput
                    setState={setExtraAmount}
                    placeholder=""
                    type={"text"}
                    value={extraAmount}
                  />
                </div>
              )}
            </div>
            <div className="mt-2">
              <RadioMaker
                name="options"
                value={2}
                setValue={setOption}
                id="option1"
                label="I elect an Arizona withholding percentage of zero, and I certify that I expect to have no Arizona tax liability for the current taxable year."
                checked={option}
              />
            </div>
          </div>
          <p className="fw-bold mt-3">
            I certify that I have made the election marked above.
          </p>

          <div className="grid-container">
            <div className="grid-item">
              <label>SIGNATURE</label>
            </div>
            <div className="grid-item" />
            <div className="grid-item" />
            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setDate}
                placeholder=""
                type={"date"}
                value={DateFormatter(date)}
              />
            </div>
          </div>

          <div className="custome-cloud-btn">
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
            <div>{signature && <p>Digitally Sign by {signature} </p>}</div>
          </div>

          <button className="print_btn">PRINT REPORT </button>
          <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>

          <div className="instruction-content">
            <p className="title">Employee’s Instructions</p>
            <div className="deivider">
              <div className="items">
                {content?.firstItem?.map((i, index) => (
                  <div key={index}>
                    <p className="heading">
                      {" "}
                      {i.status === "heading" && i.para}{" "}
                    </p>
                    <p className="desc"> {i.status === "desc" && i.para} </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};
