/** @format */

import React from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BorderlessInput } from "../../../../../Helper/Makers";
import NavWrapper from "../../../../../Helper/NavWrapper";

export const Forms2023 = () => {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState({
    employeeId: "",
    adminId: "",
    fullName: "",
    socialSecurityNumber: "",
    numberAndStreet: "",
    cityOrTown: "",
    state: "",
    zipCode: "",
    withholdingOption: {
      option: "",
      percentage: 0.0,
      checkBox: false,
      extraAmount: 0,
    },
    signature: "",
    date: "",
  });

  // Handler function to update state on input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setEmployeeData((prevData) => {
      if (type === "checkbox") {
        return {
          ...prevData,
          withholdingOption: {
            ...prevData.withholdingOption,
            [name]: checked,
          },
        };
      }

      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const [isChecked, setIsChecked] = useState("");

  const handleCheckboxChange = (value) => {
    setIsChecked(value);
  };

  // ----
  const [employeeId, setEmployeeId] = useState("");
  const [adminId, setAdminId] = useState("");
  const [fullName, setFullName] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
  const [numberAndStreet, setNumberAndStreet] = useState("");
  const [cityOrTown, setCityOrTown] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <>
      <NavWrapper
        isArrow={true}
        title={"Employee’s Arizona Withholding Election"}
      />

      <Container className="full-width-container">
        <form className="w-100 text-start">
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

          <div  >

          </div>

        </form>
      </Container>

      <div className="main-div-personal important">
        <div className="top-div-personal">
          <Form
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
    
        

            <p>Choose either box 1 or box 2:</p>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px" }}>
                  1. Withhold from gross taxable wages at the percentage checked
                  (check only one percentage):
                </span>
              </Form.Label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"checkbox"}
                  id="checkbox-10"
                  checked={isChecked === "10"}
                  onChange={() => handleCheckboxChange("10")}
                >
                  <Form.Check.Input name="checkbox" type={"checkbox"} isValid />
                  <Form.Check.Label
                    style={{ marginBottom: "0", marginLeft: "5px" }}
                  >
                    0.5%
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"checkbox"}
                  id="checkbox-20"
                  checked={isChecked === "20"}
                  onChange={() => handleCheckboxChange("20")}
                >
                  <Form.Check.Input name="checkbox" type={"checkbox"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    1.0%
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"checkbox"}
                  id="checkbox-30"
                  checked={isChecked === "30"}
                  onChange={() => handleCheckboxChange("30")}
                >
                  <Form.Check.Input name="checkbox" type={"checkbox"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    1.5%
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"checkbox"}
                  id="checkbox-20"
                  checked={isChecked === "20"}
                  onChange={() => handleCheckboxChange("20")}
                >
                  <Form.Check.Input name="checkbox" type={"checkbox"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    2.0%
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"checkbox"}
                  id="checkbox-30"
                  checked={isChecked === "30"}
                  onChange={() => handleCheckboxChange("30")}
                >
                  <Form.Check.Input name="checkbox" type={"checkbox"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    2.5%
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"checkbox"}
                  id="checkbox-20"
                  checked={isChecked === "20"}
                  onChange={() => handleCheckboxChange("20")}
                >
                  <Form.Check.Input name="checkbox" type={"checkbox"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    3.0%
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check
                  style={{ marginLeft: "10px" }}
                  type={"checkbox"}
                  id="checkbox-30"
                  checked={isChecked === "30"}
                  onChange={() => handleCheckboxChange("30")}
                >
                  <Form.Check.Input name="checkbox" type={"checkbox"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    3.5%
                  </Form.Check.Label>
                </Form.Check>
                <br />
              </div>
              <div style={{ display: "flex" }}>
                <Form.Check
                  style={{ marginLeft: "10px", width: "80%" }}
                  type={"checkbox"}
                  id="checkbox-20"
                  checked={isChecked === "20"}
                  onChange={() => handleCheckboxChange("20")}
                >
                  <Form.Check.Input name="checkbox" type={"checkbox"} isValid />
                  <Form.Check.Label style={{ marginBottom: "0" }}>
                    Check this box and enter an extra amount to be withheld from
                    each paycheck.
                  </Form.Check.Label>
                </Form.Check>
                <Form.Control
                  style={{ marginLeft: "10px" }}
                  type="number"
                  placeholder="$"
                />
              </div>
            </Form.Group>

            <p style={{ lineHeight: "2.5rem" }}>
              2. 1 elect an Arizona withholding percentage of zero, and I
              certify that I expect to have no Arizona tax liability for the
              current taxable year.
            </p>
            <p style={{ lineHeight: ".2rem" }}>
              I certify that I have made the election marked above.
            </p>

            <Form.Group className="mb-3">
              <Form.Label
                style={{
                  fontWeight: "bold",
                  fontSize: ".9rem",
                  lineHeight: ".2rem",
                }}
              >
                Signature :
              </Form.Label>
            </Form.Group>
            <div className="save-as-draft-btn-personal">
              <div>
                <img
                  style={{ height: "80%", width: "100%", border: "1px " }}
                  src="/Dashboard/save.png"
                  alt=""
                />
              </div>
              <div className="save-as-draft-btn">
                <button
                  style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}
                >
                  SAVE AS DRAFT
                </button>
                <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                  SAVED AND SIGNED
                </button>
              </div>
            </div>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Date :
              </Form.Label>
              <Form.Control type="date" placeholder="Enter  dATE" />
            </Form.Group>
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
            <div className="save-as-draft-btn123">
              <button className="btn1233" type="submit">
                SUBMIT
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
