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
                    value={3}
                    id={"percentage5"}
                    label={"3%"}
                    checked={percentage}
                  />
                  <RadioMaker
                    name="percentage"
                    setValue={setPercentage}
                    value={}
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
          <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>
        </form>
      </Container>

      <div className="main-div-personal important">
        <div className="top-div-personal">
          <Form
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              Employee's Instructions
            </p>

            <p style={{ fontWeight: "500" }}>
              Arizona law requires your employer to withhold Arizona income tax
              from your wages for work done in Arizona. The amount withheld is
              applied to your-Arizona income tax due when you file your tax
              return. The amount withheld is a percentage of your gross taxable
              wages from every paycheck. You may also have your employer
              withhold an extra amount from each paycheck Complete this form to
              select a percentage and any extra amount to be withheld from each
              paycheck.
            </p>

            <p style={{ lineHeight: ".2rem", marginTop: "2rem" }}>
              What are my "Gross Taxable Wages"?
            </p>
            <p style={{ fontWeight: "500" }}>
              For withholding purposes, your "gross taxable wages" are the wages
              that will generally be in box 1 of your federal Form W-2. It is
              your gross wages less any pretax deductions, such as your share of
              health insurance premiums.
            </p>
            <p style={{ lineHeight: ".2rem", marginTop: "2rem" }}>
              New Employees
            </p>
            <p style={{ fontWeight: "500" }}>
              Complete this form within the first five days of your employment
              to select an Arizona withholding percentage. You may also have
              your employer withhold an extra amount from each paycheck. If you
              do not give this form to your employer the department requires
              your employer to withhold 2.0% of your gross taxable wages.
            </p>

            <p style={{ lineHeight: ".2rem", marginTop: "2rem" }}>
              Current Employees
            </p>
            <p style={{ fontWeight: "500" }}>
              If you want to change your current amount withheld, you must file
              this form to change the Arizona withholding percentage or to
              change the extra amount withheld.
            </p>

            <p style={{ lineHeight: ".2rem", marginTop: "2rem" }}>
              What Should I do With Form A-4?
            </p>
            <p style={{ fontWeight: "500" }}>
              Give your completed Form A-4 to your employer.
            </p>
            <p style={{ lineHeight: ".2rem", marginTop: "2rem" }}>
              Electing a Withholding Percentage of Zero
            </p>

            <p style={{ fontWeight: "500" }}>
              You may elect an Arizona withholding percentage of zero if you
              expect to have no Arizona income tax liability for the current
              year. Arizona tax liability is gross tax liability less any tax
              credits, such as the family tax credit, school tax credits, or
              credits for taxes paid to other states. If you make this election,
              your employer will not withhold Arizona income tax from your wages
              for payroll periods beginning after the date you file the form. To
              keep this election for the next calendar year, you must give your
              employer an updated Form A-4. If you do not, your employer may
              withhold Arizona income tax from your wages and salary until you
              submit an updated Form A-4. Zero withholding does not relieve you
              from paying Arizona income taxes that might be due at the time you
              file your Arizona income tax return. If you have an Arizona tax
              liability when you file your return or if at any time during the
              current year conditions change so that you expect to have a tax
              liability, you should promptly file a new Form A-4 and choose a
              withholding percentage that applies to you.
            </p>
            <p style={{ lineHeight: ".2rem", marginTop: "2rem" }}>
              Voluntary Withholding Election by Certain Nonresident Employees
            </p>
            <p style={{ fontWeight: "500" }}>
              Compensation earned by nonresidents while physically working in
              Arizona for temporary periods is subject to Arizona) income tax.
              However, under Arizona law, compensation paid to certain
              nonresident employees is not subject to Arizonal income tax
              withholding. These nonresident employees need to review their
              situations and determine if they should elect to have Arizona
              income taxes withheld from their Arizona source compensation.
              Nonresident employees may request that their employer withhold
              Arizona income taxes by completing this form to elect Arizona
              income tax withholding.
            </p>
            <p style={{ fontWeight: "500" }}>ADOR 10121 (22)</p>
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
          </Form>
        </div>
      </div>
    </>
  );
};
