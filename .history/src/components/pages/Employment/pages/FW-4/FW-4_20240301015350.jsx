/** @format */

import React from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FW-4.css";
import axios from "axios";
import { Auth, Baseurl, showMsg } from "../../../../../Baseurl";
import NavWrapper from "../../../../../Helper/NavWrapper";
import {
  BorderlessInput,
  CheckBoxMaker,
  DateFormatter,
} from "../../../../../Helper/Makers";
import { SignatureModal } from "../../../../../Mod/Modal";

export const FW4Form = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState("______________");
  const [recipientName, setRecipientName] = useState("______________");
  const [startingPay, setStartingPay] = useState("______________");
  const [startDate, setStartDate] = useState("______________");

  const [isChecked, setIsChecked] = useState("");
  const [formData, setFormData] = useState({
    step1FirstName: "",
    step1LastName: "",
    step1Address: "",
    step1City: "",
    step1State: "",
    step1ZipCode: "",
    step1SocialSecurityNumber: "",
    step1IsNameMatched: "",
    step1FilingStatus: "",
    step2Choose: "",
    step2Ca: "",
    step2Cb: "",
    step3QualifyingChildrenCredit: "",
    step3OtherDependentsCredit: "",
    step3TotalCredits: "",
    step4OtherIncome: "",
    step4Deductions: "",
    step4ExtraWithholding: "",
    step5EmployeeSignature: "",
    step5Date: "",
    employerName: "",
    employerAddress: "",
    firstDateOfEmployment: "",
    employerEIN: "",
    step2bLine1: "",
    step2bLine2a: "",
    step2bLine2b: "",
    step2bLine2c: "",
    step2bLine3: "",
    step2bLine4: "",
    step4bLine1: "",
    step4bLine2: "",
    step4bLine3: "",
    step4bLine4: "",
    step4bLine5: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${Baseurl}employee/createFW4`,
        formData,
        Auth()
      );
      showMsg("Success", res?.data?.message, "success");
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const [step1FirstName, setStep1FirstName] = useState("");
  const [step1LastName, setStep1LastName] = useState("");
  const [step1Address, setStep1Address] = useState("");
  const [step1City, setStep1City] = useState("");
  const [step1State, setStep1State] = useState("");
  const [step1ZipCode, setStep1ZipCode] = useState("");
  const [step1SocialSecurityNumber, setStep1SocialSecurityNumber] =
    useState("");
  const [step1IsNameMatched, setStep1IsNameMatched] = useState("");
  const [step1FilingStatus, setStep1FilingStatus] = useState("");
  const [step2Choose, setStep2Choose] = useState(false);
  const [step2Ca, setStep2Ca] = useState(false);
  const [step2Cb, setStep2Cb] = useState("");
  const [step3QualifyingChildrenCredit, setStep3QualifyingChildrenCredit] =
    useState("");
  const [step3OtherDependentsCredit, setStep3OtherDependentsCredit] =
    useState("");
  const [step3TotalCredits, setStep3TotalCredits] = useState("");
  const [step4OtherIncome, setStep4OtherIncome] = useState("");
  const [step4Deductions, setStep4Deductions] = useState("");
  const [step4ExtraWithholding, setStep4ExtraWithholding] = useState("");
  const [step5EmployeeSignature, setStep5EmployeeSignature] = useState("");
  const [step5Date, setStep5Date] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerAddress, setEmployerAddress] = useState("");
  const [firstDateOfEmployment, setFirstDateOfEmployment] = useState("");
  const [employerEIN, setEmployerEIN] = useState("");
  const [step2bLine1, setStep2bLine1] = useState("");
  const [step2bLine2a, setStep2bLine2a] = useState("");
  const [step2bLine2b, setStep2bLine2b] = useState("");
  const [step2bLine2c, setStep2bLine2c] = useState("");
  const [step2bLine3, setStep2bLine3] = useState("");
  const [step2bLine4, setStep2bLine4] = useState("");
  const [step4bLine1, setStep4bLine1] = useState("");
  const [step4bLine2, setStep4bLine2] = useState("");
  const [step4bLine3, setStep4bLine3] = useState("");
  const [step4bLine4, setStep4bLine4] = useState("");
  const [step4bLine5, setStep4bLine5] = useState("");
  const [open, setOpen] = useState(false);

  // ---
  const content = {
    firstItem: [
      {
        para: "General Instructions",
        status: "heading",
      },
      {
        para: "Section references are to the Internal Revenue Code",
        status: "desc",
      },
      {
        para: "Future Developments",
        status: "heading",
      },
      {
        para: "For the latest information about developments related to Form W-4, such as legislation enacted after it was published, go to www.irs.gov/FormW4.",
        status: "desc",
      },
      {
        para: "Purpose of Form",
        status: "heading",
      },
      {
        para: "Complete Form W-4 so that your employer can withhold the  correct federal income tax from your pay. If too little is  withheld, you will generally owe tax when you file your tax return and may owe a penalty. If too much is withheld, you will generally be due a refund. Complete a new Form W-4 when changes to your personal or financial situation would change the entries on the form. For more information on withholding and when you must furnish a new Form W-4, see Pub. 505, Tax Withholding and Estimated Tax. ",
        status: "desc",
      },
      {
        para: "Exemption from withholding",
        status: "heading",
      },
      {
        para: " You may claim exemption from withholding for 2023 if you meet both of the following conditions: you had no federal income tax liability in 2022 and you expect to have no federal income tax liability in 2023. You had no federal income tax liability in 2022 if (1) your total tax on line 24 on your 2022 Form 1040 or 1040-SR is zero (or less than the sum of lines 27, 28, and 29), or (2) you were not required to file a return because your income was below the filing threshold for your correct filing status. If you claim exemption, you will have no income tax withheld from your paycheck and may owe taxes and penalties when you file your 2023 tax return. To claim exemption from withholding, certify that you meet both of the conditions above by writing “Exempt” on Form W-4 in the space below Step 4(c). Then, complete Steps 1(a), 1(b), and 5. Do not  complete any other steps. You will need to submit a new  Form W-4 by February 15, 2024.",
        status: "desc",
      },
      {
        para: "Your privacy",
        status: "heading",
      },
      {
        para: "If you have concerns with Step 2(c), you may  choose Step 2(b); if you have concerns with Step 4(a), you may enter an additional amount you want withheld per pay  period in Step 4(c)",
        status: "desc",
      },
      {
        para: "Self-employment",
        status: "heading",
      },
      {
        para: "Generally, you will owe both income and  self-employment taxes on any self-employment income you receive separate from the wages you receive as an employee. If you want to pay income and self-employment taxes through withholding from your wages, you should  enter the self-employment income on Step 4(a). Then compute your self-employment tax, divide that tax by the number of pay periods remaining in the year, and include that resulting amount per pay period on Step 4(c). You can also add half of the annual amount of self-employment tax to  Step 4(b) as a deduction. To calculate self-employment tax, you generally multiply the self-employment income by 14.13% (this rate is a quick way to figure your selfemployment tax and equals the sum of the 12.4% social security tax and the 2.9% Medicare tax multiplied by 0.9235). See Pub. 505 for more information, especially if the sum of self-employment income multiplied by 0.9235 and  wages exceeds $160,200 for a given individual.",
        status: "desc",
      },
      {
        para: "Nonresident alien",
        status: "heading",
      },
      {
        para: "If you’re a nonresident alien, see Notice 1392, Supplemental Form W-4 Instructions for Nonresident Aliens, before completing this form.",
        status: "desc",
      },
    ],
    secondItem: [
      {
        para: "Specific Instructions",
        status: "heading",
      },
      {
        para: "Step 1(c). Check your anticipated filing status. This will determine the standard deduction and tax rates used to compute your withholding.",
        status: "desc",
      },
      {
        para: "Step 2. Use this step if you (1) have more than one job at the same time, or (2) are married filing jointly and you and your spouse both work. ",
        status: "desc",
      },
      {
        para: "If you (and your spouse) have a total of only two jobs, you may check the box in option (c). The box must also be checked on the Form W-4 for the other job. If the box is checked, the standard deduction and tax brackets will be cut in half for each job to calculate withholding. This option is roughly accurate for jobs with similar pay; otherwise, more  tax than necessary may be withheld, and this extra amount   will be larger the greater the difference in pay is between the two jobs.",
        status: "desc",
      },
      {
        para: "Multiple jobs. Complete Steps 3 through 4(b) on only one Form W-4. Withholding will be most accurate if you do this on the Form W-4 for the highest paying job",
        status: "desc",
      },
      {
        para: "",
        status: "desc",
      },
      {
        para: "",
        status: "desc",
      },
      {
        para: "",
        status: "desc",
      },
      {
        para: "",
        status: "desc",
      },
     
    ],
  };
  return (
    <>
      <SignatureModal
        show={open}
        onHide={() => setOpen(false)}
        setValue={setStep5EmployeeSignature}
        value={step5EmployeeSignature}
      />

      <NavWrapper title={"Employee’s Withholding Certificate"} isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start">
          <p className="fw-bold">
            Complete Form W-4 so that your employer can withhold the correct
            federal income tax from your pay. Give Form W-4 to your employer.
            Your withholding is subject to review by the IRS.
          </p>
          <p className="fw-bold">Step 1: Enter Personal Information</p>
          <div className="grid-container mb-3">
            <div className="grid-item long-input">
              <label>(a) First name and middle initial:</label>
              <BorderlessInput
                setState={setStep1FirstName}
                placeholder={""}
                type={"text"}
                value={step1FirstName}
              />
            </div>
            <div className="grid-item">
              <label>Last Name:</label>
              <BorderlessInput
                setState={setStep1LastName}
                placeholder={""}
                type={"text"}
                value={step1LastName}
              />
            </div>
            <div className="grid-item">
              <label>(b) Social security number:</label>
              <BorderlessInput
                setState={setStep1SocialSecurityNumber}
                placeholder={""}
                type={"number"}
                value={step1SocialSecurityNumber}
              />
            </div>
            <div className="grid-item long-input">
              <label>Address:</label>
              <BorderlessInput
                setState={setStep1Address}
                placeholder={""}
                type={"text"}
                value={step1Address}
              />
            </div>
            <div className="grid-item long-input">
              <label>
                Does your name match the name on your social security card? If
                not, to ensure you get credit for your earnings, contact SSA at
                800-772-1213 or go to www.ssa.gov.
              </label>
            </div>
            <div className="grid-item">
              <label>City or town:</label>
              <BorderlessInput
                setState={setStep1City}
                placeholder={""}
                type={"text"}
                value={step1City}
              />
            </div>
            <div className="grid-item">
              <label>State:</label>
              <BorderlessInput
                setState={setStep1State}
                placeholder={""}
                type={"text"}
                value={step1State}
              />
            </div>
            <div className="grid-item">
              <label>Zip Code:</label>
              <BorderlessInput
                setState={setStep1ZipCode}
                placeholder={""}
                type={"text"}
                value={step1ZipCode}
              />
            </div>
            <div className="grid-item" />
            <div
              className="grid-item full-wid-input"
              style={{ alignItems: "flex-start" }}
            >
              <label>(c).</label>
              <div>
                <CheckBoxMaker
                  setValue={setStep1IsNameMatched}
                  value={"Single or Married filing separatel"}
                  label={"Single or Married filing separatel"}
                  checked={
                    step1IsNameMatched === "Single or Married filing separatel"
                  }
                  id={"step1IsNameMatched"}
                />
                <CheckBoxMaker
                  setValue={setStep1FilingStatus}
                  value={
                    "Married filing jointly or Qualifying surviving spouse"
                  }
                  label={
                    "Married filing jointly or Qualifying surviving spouse"
                  }
                  checked={
                    step1FilingStatus ===
                    "Married filing jointly or Qualifying surviving spouse"
                  }
                  id={"step1FilingStatus"}
                />
                <CheckBoxMaker
                  setValue={setStep1FilingStatus}
                  value={
                    "Head of household (Check only if you’re unmarried and pay more than half the costs of keeping up a home for yourself and a qualifying individual.)"
                  }
                  label={
                    "Head of household (Check only if you’re unmarried and pay more than half the costs of keeping up a home for yourself and a qualifying individual.)"
                  }
                  checked={
                    step1FilingStatus ===
                    "Head of household (Check only if you’re unmarried and pay more than half the costs of keeping up a home for yourself and a qualifying individual.)"
                  }
                  id={"step1FilingStatus1"}
                />
              </div>
            </div>
            <div className="grid-item full-wid-input">
              <label>
                Complete Steps 2–4 ONLY if they apply to you; otherwise, skip to
                Step 5. See page 2 for more information on each step, who can
                claim exemption from withholding, other details, and privacy.
              </label>
            </div>
            <div className="grid-item full-wid-input">
              <label>Step 2: Multiple Jobs or Spouse Works</label>
            </div>
            <div className="grid-item full-wid-input">
              <label>
                Complete this step if you (1) hold more than one job at a time,
                or (2) are married filing jointly and your spouse also works.
                The correct amount of withholding depends on income earned from
                all of these jobs <br />
                Do only one of the following
              </label>
            </div>
            <div className="grid-item full-wid-input">
              <label>(a) Reserved for future use.</label>
              <CheckBoxMaker
                setValue={setStep2Choose}
                value={!step2Choose}
                label={""}
                checked={step2Choose}
                id={"step2Choose"}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>
                (b) Use the Multiple Jobs Worksheet on page 3 and enter the
                result in Step 4(c) below; or
              </label>
              <CheckBoxMaker
                setValue={setStep2Ca}
                value={!step2Ca}
                label={""}
                checked={step2Ca}
                id={"step2Ca"}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>
                (c) If there are only two jobs total, you may check this box. Do
                the same on Form W-4 for the other job. This option is generally
                more accurate than (b) if pay at the lower paying job is more
                than half of the pay at the higher paying job. Otherwise, (b) is
                more accurate
              </label>
              <CheckBoxMaker
                setValue={setStep2Cb}
                value={!step2Cb}
                label={""}
                checked={step2Cb}
                id={"step2Cb"}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>TIP: If you have self-employment income, see page 2</label>
            </div>
            <div className="grid-item full-wid-input">
              <label>
                Complete Steps 3–4(b) on Form W-4 for only ONE of these jobs.
                Leave those steps blank for the other jobs. (Your withholding
                will be most accurate if you complete Steps 3–4(b) on the Form
                W-4 for the highest paying job.)
              </label>
            </div>
            <div className="grid-item full-wid-input">
              <label>Step 3: Claim Dependent and Other Credits</label>
            </div>
            <div className="grid-item full-wid-input">
              <label>
                If your total income will be $200,000 or less ($400,000 or less
                if married filing jointly):
              </label>
            </div>
            <div className="grid-item long-input">
              <label>
                Multiply the number of qualifying children under age 17 by
                $2,000 $
              </label>
              <BorderlessInput
                setState={setStep3QualifyingChildrenCredit}
                placeholder={""}
                type={"number"}
                value={step3QualifyingChildrenCredit}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item long-input">
              <label>Multiply the number of other dependents by $500 $</label>
              <BorderlessInput
                setState={setStep3OtherDependentsCredit}
                placeholder={""}
                type={"number"}
                value={step3OtherDependentsCredit}
              />
            </div>
            <div className="grid-item long-input"></div>
            <div className="grid-item full-wid-input">
              <label>
                Add the amounts above for qualifying children and other
                dependents. You may add to this the amount of any other credits.
                Enter the total here $
              </label>
              <BorderlessInput
                setState={setStep3TotalCredits}
                placeholder={""}
                type={"number"}
                value={step3TotalCredits}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Step 4 (optional): Other Adjustments</label>
            </div>
            <div className="grid-item full-wid-input">
              <label>
                (a) Other income (not from jobs). If you want tax withheld for
                other income you expect this year that won’t have withholding,
                enter the amount of other income here. This may include
                interest, dividends, and retirement income
              </label>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep4OtherIncome}
                placeholder={""}
                type={"number"}
                value={step4OtherIncome}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>
                (b) Deductions. If you expect to claim deductions other than the
                standard deduction and want to reduce your withholding, use the
                Deductions Worksheet on page 3 and enter the result here{" "}
              </label>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep4Deductions}
                placeholder={""}
                type={"number"}
                value={step4Deductions}
              />
            </div>

            <div className="grid-item long-input" />
            <div className="grid-item long-input">
              <label>
                (c) Extra withholding. Enter any additional tax you want
                withheld each pay period
              </label>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep4ExtraWithholding}
                placeholder={""}
                type={"number"}
                value={step4ExtraWithholding}
              />
            </div>
            <div className="full-wid-input">
              <label>Step 5: Sign Here</label>
            </div>
            <div className="full-wid-input">
              <label>
                Under penalties of perjury, I declare that this certificate, to
                the best of my knowledge and belief, is true, correct, and
                complete.
              </label>
            </div>
            <div className="third-wid-input d-block">
              <label>
                Employee’s signature (This form is not valid unless you sign
                it.)
              </label>
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
                  {step5EmployeeSignature && (
                    <p>Digitally Sign by {step5EmployeeSignature} </p>
                  )}
                </div>
              </div>
            </div>
            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setStep5Date}
                placeholder={""}
                type={"date"}
                value={DateFormatter(step5Date)}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>Employers Only</label>
            </div>
            <div className="grid-item">
              <label>Employer’s name:</label>
              <BorderlessInput
                setState={setEmployerName}
                placeholder={""}
                type={"text"}
                value={employerName}
              />
            </div>
            <div className="grid-item">
              <label>Employer’s address:</label>
              <BorderlessInput
                setState={setEmployerAddress}
                placeholder={""}
                type={"text"}
                value={employerAddress}
              />
            </div>
            <div className="grid-item long-input">
              <label>First date of employment:</label>
              <BorderlessInput
                setState={setFirstDateOfEmployment}
                placeholder={""}
                type={"date"}
                value={DateFormatter(firstDateOfEmployment)}
              />
            </div>
            <div className="grid-item long-input">
              <label>Employer identification number (EIN):</label>
              <BorderlessInput
                setState={setEmployerEIN}
                placeholder={""}
                type={"number"}
                value={employerEIN}
              />
            </div>
          </div>

          <div className="instruction-content">
            <div className="deivider">
              <div className="items p-0">
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
              <div className="items p-0">
                {content?.secondItem?.map((i, index) => (
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

      <Form onSubmit={handleSubmit} className="main-div-personal important">
        <div className="top-div-personal">
          <div
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <p>
              Complete Form W-4 so that your employer can withhold the correct
              federal income tax from your pay. Give Form W-4 to your employer.
              Your withholding is subject to review by the IRS.
            </p>
            <p>Step 1: Enter Personal Information</p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                a) First name and middle initial:
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setFormData({ ...formData, step1FirstName: e.target.value })
                }
                type="text"
                placeholder="Enter  Text.."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Last name :
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setFormData({ ...formData, step1LastName: e.target.value })
                }
                type="text"
                placeholder="Enter  Text.."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                (b) Social security number :
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    step1SocialSecurityNumber: e.target.value,
                  })
                }
                type="text"
                placeholder="Enter  Text.."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                City :
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setFormData({ ...formData, step1City: e.target.value })
                }
                type="text"
                placeholder="Enter  Text.."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Zip Code :
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setFormData({ ...formData, step1ZipCode: e.target.value })
                }
                type="text"
                placeholder="Enter  Text.."
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Address :
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setFormData({ ...formData, step1Address: e.target.value })
                }
                type="text"
                placeholder="Enter  Text.."
              />
            </Form.Group>
            <p style={{ fontWeight: "500" }}>
              Does your name match the name on your social security card? If
              not, to ensure you get credit for your earnings, contact SSA at
              800-772-1213 or go to www.ssa.gov.
            </p>
            <p>(c)</p>

            <Form.Check
              style={{ marginLeft: "10px" }}
              type={"checkbox"}
              id="checkbox-10"
              onChange={(e) =>
                setFormData({ ...formData, step1IsNameMatched: e.target.value })
              }
            >
              <Form.Check.Input name="checkbox" type={"checkbox"} isValid />
              <Form.Check.Label
                style={{ marginBottom: "0", marginLeft: "5px" }}
              >
                Single or Married filing separately
              </Form.Check.Label>
            </Form.Check>
            <Form.Check
              style={{ marginLeft: "10px" }}
              type={"checkbox"}
              id="checkbox-10"
            >
              <Form.Check.Input
                name="checkbox"
                type={"checkbox"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    step1FilingStatus: "Single or Married filing separately",
                  })
                }
                isValid
              />
              <Form.Check.Label
                style={{ marginBottom: "0", marginLeft: "5px" }}
              >
                Married filing jointly or Qualifying surviving spouse
              </Form.Check.Label>
            </Form.Check>
            <Form.Check
              style={{ marginLeft: "10px" }}
              type={"checkbox"}
              id="checkbox-10"
            >
              <Form.Check.Input
                name="checkbox"
                type={"checkbox"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    step1FilingStatus: "Head of household",
                  })
                }
                isValid
              />
              <Form.Check.Label
                style={{ marginBottom: "0", marginLeft: "5px" }}
              >
                Head of household (Check only if you’re unmarried and pay more
                than half the costs of keeping up a home for yourself and a
                qualifying individual.)
              </Form.Check.Label>
            </Form.Check>

            <p>
              Complete Steps 2–4 ONLY if they apply to you; otherwise, skip to
              Step 5. See page 2 for more information on each step, who can
              claim exemption from withholding, other details, and privacy
            </p>
            <p>Step 2: Multiple Jobs or Spouse Works</p>
            <p style={{ fontWeight: "500" }}>
              Complete this step if you (1) hold more than one job at a time, or
              (2) are married filing jointly and your spouse also works. The
              correct amount of withholding depends on income earned from all of
              these jobs.
            </p>
            <p style={{ fontWeight: "500" }}>
              Do only one of the following.
              <br />
              (a) Reserved for future use.{" "}
              <Form.Check
                type={"checkbox"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    step2Choose: "Reserved for future use",
                  })
                }
                id="checkbox-10"
              />
              <br />
              (b) Use the Multiple Jobs Worksheet on page 3 and enter the result
              in Step 4{" "}
              <Form.Check
                type={"checkbox"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    step2Choose:
                      "Use the Multiple Jobs Worksheet on page 3 and enter the result in Step 4",
                  })
                }
                id="checkbox-10"
              />{" "}
              <br />
              (c) below; or (c) If there are only two jobs total, you may check
              this box. Do the same on Form W-4 for the other job. This option
              is generally more accurate than (b) if pay at the lower paying job
              is more than half of the pay at the higher paying job. Otherwise,
              (b) is more accurate . . . . . . . . . . . . . . . . . .
              <Form.Check
                type={"checkbox"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    step2Choose:
                      "Use the Multiple Jobs Worksheet on page 3 and enter the result in Step 4",
                  })
                }
                id="checkbox-10"
              />
            </p>
            <p>
              TIP:{" "}
              <span style={{ fontWeight: "500" }}>
                If you have self-employment income, see page 2
              </span>{" "}
            </p>
            <p>
              Complete Steps 3–4(b) on Form W-4 for only ONE of these jobs.
              Leave those steps blank for the other jobs.{" "}
              <span style={{ fontWeight: "500" }}>
                (Your withholding will be most accurate if you complete Steps
                3–4(b) on the Form W-4 for the highest paying job.)
              </span>
            </p>
            <p>Step 3: Claim Dependent and Other Credits</p>
            <p style={{ fontWeight: "500" }}>
              If your total income will be $200,000 or less ($400,000 or less if
              married filing jointly): Multiply the number of qualifying
              children under age 17 by $2,000
            </p>
            <Form.Group className="mb-3">
              {/* <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginTop: "2rem",
              }}
            >
              Company Administrator Name:
            </Form.Label> */}
              <Form.Control
                type="text"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    step3QualifyingChildrenCredit: e.target.value,
                  })
                }
                placeholder="$"
              />
            </Form.Group>
            <p style={{ fontWeight: "500" }}>
              Multiply the number of other dependents by $500
            </p>
            <Form.Group className="mb-3">
              {/* <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginTop: "2rem",
              }}
            >
              Company Administrator Name:
            </Form.Label> */}
              <Form.Control
                type="text"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    step3OtherDependentsCredit: e.target.value,
                  })
                }
                placeholder="$"
              />
            </Form.Group>
            <p style={{ fontWeight: "500" }}>
              Add the amounts above for qualifying children and other
              dependents. You may add to this the amount of any other credits.
              Enter the total here
            </p>
            <Form.Group className="mb-3">
              {/* <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginTop: "2rem",
              }}
            >
              Company Administrator Name:
            </Form.Label> */}
              <Form.Control
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    step3TotalCredits: e.target.value,
                  })
                }
                type="text"
                placeholder="$"
              />
            </Form.Group>
            <p>Step 4 (optional): Other Adjustments</p>
            <p>
              (a) Other income (not from jobs).{" "}
              <span style={{ fontWeight: "500" }}>
                If you want tax withheld for other income you expect this year
                that won’t have withholding, enter the amount of other income
                here. This may include interest, dividends, and retirement
                income . . . . . . . .
              </span>
              <br />
              <span style={{ fontWeight: "500" }}>4(a)</span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step4OtherIncome: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>

            <p>
              (b) Deductions.{" "}
              <span style={{ fontWeight: "500" }}>
                If you expect to claim deductions other than the standard
                deduction and want to reduce your withholding, use the
                Deductions Worksheet on page 3 and enter the result here . . . .
                . . . .
              </span>
              <br />
              <span style={{ fontWeight: "500" }}>4(b)</span>
            </p>
            <Form.Group className="mb-3">
              {/* <Form.Label
              style={{
                fontWeight: "bold",
                fontSize: ".9rem",
                marginTop: "2rem",
              }}
            >
              Company Administrator Name:
            </Form.Label> */}
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step4Deductions: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>
              (c) Extra withholding.{" "}
              <span style={{ fontWeight: "500" }}>
                Enter any additional tax you want withheld each pay period . .
              </span>
              <br />
              <span style={{ fontWeight: "500" }}>4(c)</span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    step4ExtraWithholding: e.target.value,
                  })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>Step 5: Sign Here</p>
            <p style={{ fontWeight: "500" }}>
              Under penalties of perjury, I declare that this certificate, to
              the best of my knowledge and belief, is true, correct, and
              complete
            </p>
            <p>Record Found With</p>
            <p style={{ fontWeight: "500" }}>(a) Classification </p>
            <p style={{ fontWeight: "500" }}>(b) Date of the incident</p>
            <p>ii. No APS Registry Record Found.</p>
            <p style={{ fontWeight: "500" }}>
              <li>
                Employees or subcontractors shall be prohibited from providing
                services to Company Name residents if the search of the APS
                Registry contains any substantiated report of abuse, neglect, or
                exploitation of vulnerable adults or children.
              </li>
            </p>
            <p style={{ fontWeight: "500" }}>
              By Signing this, Employee gives Company Name consent to conduct a
              search on the AZ Department of Health APS search registry
            </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employee’s signature <br /> (This form is not valid unless you
                sign it.)
              </Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    step5EmployeeSignature: e.target.value,
                  })
                }
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employer Date:
              </Form.Label>
              <Form.Control
                type="date"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step5Date: e.target.value })
                }
                placeholder="Enter  text"
              />
            </Form.Group>
            <div className="save-as-draft-btn-personal">
              <div style={{ maxWidth: "100px" }}>
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

            <p style={{ fontSize: "1rem" }}>Employers Only </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employer’s Name
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setFormData({ ...formData, employerName: e.target.value })
                }
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employer’s Address
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setFormData({ ...formData, employerAddress: e.target.value })
                }
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                First date of employment
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    firstDateOfEmployment: e.target.value,
                  })
                }
                type="date"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Employer identification number (EIN)
              </Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setFormData({ ...formData, employerEIN: e.target.value })
                }
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <p style={{ fontSize: "1rem" }}>Instructions</p>
            <p>Section references are to the Internal Revenue Code. </p>
            <p style={{ fontSize: "1rem" }}>Future Developments </p>
            <p>
              For the latest information about developments related to Form W-4,
              such as legislation enacted after it was published, go to
              www.irs.gov/FormW4.{" "}
            </p>
            <p>Purpose of Form </p>
            <p style={{ fontWeight: "500" }}>
              Complete Form W-4 so that your employer can withhold the correct
              federal income tax from your pay. If too little is withheld, you
              will generally owe tax when you file your tax return and may owe a
              penalty. If too much is withheld, you will generally be due a
              refund. Complete a new Form W-4 when changes to your personal or
              financial situation would change the entries on the form. For more
              information on withholding and when you must furnish a new Form
              W-4, see Pub. 505, Tax Withholding and Estimated Tax. Exemption
              from withholding. You may claim exemption from withholding for
              2023 if you meet both of the following conditions: you had no
              federal income tax liability in 2022 and you expect to have no
              federal income tax liability in 2023. You had no federal income
              tax liability in 2022 if (1) your total tax on line 24 on your
              2022 Form 1040 or 1040-SR is zero (or less than the sum of lines
              27, 28, and 29), or (2) you were not required to file a return
              because your income was below the filing threshold for your
              correct filing status. If you claim exemption, you will have no
              income tax withheld from your paycheck and may owe taxes and
              penalties when you file your 2023 tax return. To claim exemption
              from withholding, certify that you meet both of the conditions
              above by writing “Exempt” on Form W-4 in the space below Step
              4(c). Then, complete Steps 1(a), 1(b), and 5. Do not complete any
              other steps. You will need to submit a new Form W-4 by February
              15, 2024. Your privacy. If you have concerns with Step 2(c), you
              may choose Step 2(b); if you have concerns with Step 4(a), you may
              enter an additional amount you want withheld per pay period in
              Step 4(c). Self-employment. Generally, you will owe both income
              and self-employment taxes on any self-employment income you
              receive separate from the wages you receive as an employee. If you
              want to pay income and self-employment taxes through withholding
              from your wages, you should enter the self-employment income on
              Step 4(a). Then compute your self-employment tax, divide that tax
              by the number of pay periods remaining in the year, and include
              that resulting amount per pay period on Step 4(c). You can also
              add half of the annual amount of self-employment tax to Step 4(b)
              as a deduction. To calculate self-employment tax, you generally
              multiply the self-employment income by 14.13% (this rate is a
              quick way to figure your self employment tax and equals the sum of
              the 12.4% social security tax and the 2.9% Medicare tax multiplied
              by 0.9235). See Pub. 505 for more information, especially if the
              sum of self-employment income multiplied by 0.9235 and wages
              exceeds $160,200 for a given individual. Nonresident alien. If
              you’re a nonresident alien, see Notice 1392, Supplemental Form W-4
              Instructions for Nonresident Aliens, before completing this form.
            </p>
            <p style={{ fontSize: "1rem" }}>Specific Instructions</p>
            <p>
              Step 1(c).{" "}
              <span style={{ fontWeight: "500" }}>
                Check your anticipated filing status. This will determine the
                standard deduction and tax rates used to compute your
                withholding.
              </span>
              <br />
              Step 2.{" "}
              <span style={{ fontWeight: "500" }}>
                {" "}
                Use this step if you (1) have more than one job at the same
                time, or (2) are married filing jointly and you and your spouse
                both work. If you (and your spouse) have a total of only two
                jobs, you may check the box in option (c). The box must also be
                checked on the Form W-4 for the other job. If the box is
                checked, the standard deduction and tax brackets will be cut in
                half for each job to calculate withholding. This option is
                roughly accurate for jobs with similar pay; otherwise, more tax
                than necessary may be withheld, and this extra amount will be
                larger the greater the difference in pay is between the two
                jobs. CAUTION Multiple jobs. Complete Steps 3 through 4(b) on
                only one Form W-4. Withholding will be most accurate if you do
                this on the Form W-4 for the highest paying job.
              </span>{" "}
              <br />
              Step 3.{" "}
              <span style={{ fontWeight: "500" }}>
                {" "}
                This step provides instructions for determining the amount of
                the child tax credit and the credit for other dependents that
                you may be able to claim when you file your tax return. To
                qualify for the child tax credit, the child must be under age 17
                as of December 31, must be your dependent who generally lives
                with you for more than half the year, and must have the required
                social security number. You may be able to claim a credit for
                other dependents for whom a child tax credit can’t be claimed,
                such as an older child or a qualifying relative. For additional
                eligibility requirements for these credits, see Pub. 501,
                Dependents, Standard Deduction, and Filing Information. You can
                also include other tax credits for which you are eligible in
                this step, such as the foreign tax credit and the education tax
                credits. To do so, add an estimate of the amount for the year to
                your credits for dependents and enter the total amount in Step
                3. Including these credits will increase your paycheck and
                reduce the amount of any refund you may receive when you file
                your tax return. Step 4 (optional).
              </span>{" "}
              <br />
              Step 4(a).{" "}
              <span style={{ fontWeight: "500" }}>
                {" "}
                Enter in this step the total of your other estimated income for
                the year, if any. You shouldn’t include income from any jobs or
                self-employment. If you complete Step 4(a), you likely won’t
                have to make estimated tax payments for that income. If you
                prefer to pay estimated tax rather than having tax on other
                income withheld from your paycheck, see Form 1040-ES, Estimated
                Tax for Individuals.
              </span>{" "}
              <br />
              Step 4(b).{" "}
              <span style={{ fontWeight: "500" }}>
                {" "}
                Enter in this step the amount from the Deductions Worksheet,
                line 5, if you expect to claim deductions other than the basic
                standard deduction on your 2023 tax return and want to reduce
                your withholding to account for these deductions. This includes
                both itemized deductions and other deductions such as for
                student loan interest and IRAs.
              </span>{" "}
              <br />
              Step 4(c). Enter in this step any additional tax you want withheld
              from your pay each pay period, including any amounts from the
              Multiple Jobs Worksheet, line 4. Entering an amount here will
              reduce your paycheck and will either increase your refund or
              reduce any amount of tax that you owe.
            </p>
            <br />
            <p>Step 2(b)—Multiple Jobs Worksheet (Keep for your records.)</p>
            <p style={{ fontWeight: "500" }}>
              If you choose the option in Step 2(b) on Form W-4, complete this
              worksheet (which calculates the total extra tax for all jobs) on
              only ONE Form W-4. Withholding will be most accurate if you
              complete the worksheet and enter the result on the Form W-4 for
              the highest paying job. To be accurate, submit a new Form W-4 for
              all other jobs if you have not updated your withholding since
              2019.
            </p>
            <p>
              Note:{" "}
              <span style={{ fontWeight: "500" }}>
                {" "}
                If more than one job has annual wages of more than $120,000 or
                there are more than three jobs, see Pub. 505 for additional
                tables.
              </span>
            </p>
            <p>
              1 .Two jobs.
              <span style={{ fontWeight: "500" }}>
                {" "}
                If you have two jobs or you’re married filing jointly and you
                and your spouse each have one job, find the amount from the
                appropriate table on page 4. Using the “Higher Paying Job” row
                and the “Lower Paying Job” column, find the value at the
                intersection of the two household salaries and enter that value
                on line 1. Then, skip to line 3 . . . . . . . . . . . . . . . .
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step2bLine1: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>
              2 Three jobs.
              <span style={{ fontWeight: "500" }}>
                {" "}
                If you and/or your spouse have three jobs at the same time,
                complete lines 2a, 2b, and 2c below. Otherwise, skip to line 3.
              </span>
            </p>
            <p>
              a
              <span style={{ fontWeight: "500" }}>
                {" "}
                Find the amount from the appropriate table on page 4 using the
                annual wages from the highest paying job in the “Higher Paying
                Job” row and the annual wages for your next highest paying job
                in the “Lower Paying Job” column. Find the value at the
                intersection of the two household salaries and enter that value
                on line 2a . . . . . . . . . . . . .{" "}
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step2bLine2a: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>
              b
              <span style={{ fontWeight: "500" }}>
                {" "}
                Add the annual wages of the two highest paying jobs from line 2a
                together and use the total as the wages in the “Higher Paying
                Job” row and use the annual wages for your third job in the
                “Lower Paying Job” column to find the amount from the
                appropriate table on page 4 and enter this amount on line 2b . .
                . . . . . . .
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step2bLine2b: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>
              c
              <span style={{ fontWeight: "500" }}>
                {" "}
                Add the amounts from lines 2a and 2b and enter the result on
                line 2c . . .
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step2bLine2c: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>
              3
              <span style={{ fontWeight: "500" }}>
                {" "}
                Enter the number of pay periods per year for the highest paying
                job. For example, if that job pays weekly, enter 52; if it pays
                every other week, enter 26; if it pays monthly, enter 12, etc. .
                . . . .
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step2bLine3: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>
              4.
              <span style={{ fontWeight: "500" }}>
                Divide the annual amount on line 1 or line 2c by the number of
                pay periods on line 3. Enter this amount here and in Step 4(c)
                of Form W-4 for the highest paying job (along with any other
                additional amount you want withheld) . . . . . .
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step2bLine4: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>
              Step 4(b)—Deductions Worksheet
              <br />
              <span style={{ fontWeight: "500" }}>
                (Keep for your records.)
              </span>
            </p>
            <p>
              1.
              <span style={{ fontWeight: "500" }}>
                Enter an estimate of your 2023 itemized deductions (from
                Schedule A (Form 1040)). Such deductions may include qualifying
                home mortgage interest, charitable contributions, state and
                local taxes (up to $10,000), and medical expenses in excess of
                7.5% of your income . . .
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step4bLine1: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>
              2.
              <span style={{ fontWeight: "500" }}>
                Enter: • $27,700 if you’re married filing jointly or a
                qualifying surviving spouse • $20,800 if you’re head of
                household • $13,850 if you’re single or married filing
                separately . . . .
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step4bLine2: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>
              3.
              <span style={{ fontWeight: "500" }}>
                If line 1 is greater than line 2, subtract line 2 from line 1
                and enter the result here. If line 2 is greater than line 1,
                enter “-0-” . . . .
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step4bLine3: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>
              4.
              <span style={{ fontWeight: "500" }}>
                Enter an estimate of your student loan interest, deductible IRA
                contributions, and certain other adjustments (from Part II of
                Schedule 1 (Form 1040)). See Pub. 505 for more information . . .
                .
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step4bLine4: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>
              5.
              <span style={{ fontWeight: "500" }}>
                Add lines 3 and 4. Enter the result here and in Step 4(b) of
                Form W-4 . .
              </span>
            </p>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                required
                onChange={(e) =>
                  setFormData({ ...formData, step4bLine5: e.target.value })
                }
                placeholder="$"
              />
            </Form.Group>
            <p>
              Privacy Act and Paperwork Reduction Act Notice.
              <span style={{ fontWeight: "500" }}>
                We ask for the information on this form to carry out the
                Internal Revenue laws of the United States. Internal Revenue
                Code sections 3402(f)(2) and 6109 and their regulations require
                you to provide this information; your employer uses it to
                determine your federal income tax withholding. Failure to
                provide a properly completed form will result in your being
                treated as a single person with no other entries on the form;
                providing fraudulent information may subject you to penalties.
                Routine uses of this information include giving it to the
                Department of Justice for civil and criminal litigation; to
                cities, states, the District of Columbia, and U.S. commonwealths
                and territories for use in administering their tax laws; and to
                the Department of Health and Human Services for use in the
                National Directory of New Hires. We may also disclose this
                information to other countries under a tax treaty, to federal
                and state agencies to enforce federal nontax criminal laws, or
                to federal law enforcement and intelligence agencies to combat
                terrorism.
              </span>
            </p>
            <p style={{ fontWeight: "500", fontSize: ".8rem" }}>
              You are not required to provide the information requested on a
              form that is subject to the Paperwork Reduction Act unless the
              form displays a valid OMB control number. Books or records
              relating to a form or its instructions must be retained as long as
              their contents may become material in the administration of any
              Internal Revenue law. Generally, tax returns and return
              information are confidential, as required by Code section 6103.
              The average time and expenses required to complete and file this
              form will vary depending on individual circumstances. For
              estimated averages, see the instructions for your income tax
              return. If you have suggestions for making this form simpler, we
              would be happy to hear from you. See the instructions for your
              income tax return.
            </p>
            <div className="image-div-fw-4">
              <img src="/Employment/FW4/image 102.png" alt="w4" />
              <img src="/Employment/FW4/image 103.png" alt="w4" />
              <img src="/Employment/FW4/image 104.png" alt="w4" />
            </div>

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
