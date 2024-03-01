/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Image } from "react-bootstrap";
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
import { postApi } from "../../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../../api/api";

export const FW4Form = () => {
  const [step1FirstName, setStep1FirstName] = useState("");
  const [step1LastName, setStep1LastName] = useState("");
  const [step1Address, setStep1Address] = useState("");
  const [step1City, setStep1City] = useState("");
  const [step1State, setStep1State] = useState("");
  const [step1ZipCode, setStep1ZipCode] = useState("");
  const [step1SocialSecurityNumber, setStep1SocialSecurityNumber] =
    useState("");
  const [step1IsNameMatched, setStep1IsNameMatched] = useState(false);
  const [step1FilingStatus, setStep1FilingStatus] = useState(false);
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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
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
        para: "Step 3. This step provides instructions for determining the amount of the child tax credit and the credit for other dependents that you may be able to claim when you file your  tax return. To qualify for the child tax credit, the child must  be under age 17 as of December 31, must be your  dependent who generally lives with you for more than half  the year, and must have the required social security number. You may be able to claim a credit for other dependents for whom a child tax credit can’t be claimed, such as an older child or a qualifying relative. For additional eligibility requirements for these credits, see Pub. 501, Dependents, Standard Deduction, and Filing Information. You can also  include other tax credits for which you are eligible in this step, such as the foreign tax credit and the education tax credits. To do so, add an estimate of the amount for the year to your credits for dependents and enter the total amount in Step 3. Including these credits will increase your paycheck and reduce the amount of any refund you may receive when you file your tax return. ",
        status: "desc",
      },
      {
        para: "Step 4 (optional).",
        status: "heading",
      },
      {
        para: "Step 4(a). Enter in this step the total of your other  estimated income for the year, if any. You shouldn’t include  income from any jobs or self-employment. If you complete  Step 4(a), you likely won’t have to make estimated tax payments for that income. If you prefer to pay estimated tax rather than having tax on other income withheld from your  paycheck, see Form 1040-ES, Estimated Tax for Individuals.",
        status: "desc",
      },
      {
        para: "Step 4(b). Enter in this step the amount from the Deductions Worksheet, line 5, if you expect to claim deductions other than the basic standard deduction on your 2023 tax return and want to reduce your withholding to  account for these deductions. This includes both itemized   deductions and other deductions such as for student loan  interest and IRAs",
        status: "desc",
      },
      {
        para: "Step 4(c). Enter in this step any additional tax you want  withheld from your pay each pay period, including any  amounts from the Multiple Jobs Worksheet, line 4. Entering an amount here will reduce your paycheck and will either increase your refund or reduce any amount of tax that you owe",
        status: "desc",
      },
    ],
  };

  const payload = {
    step1FirstName,
    step1LastName,
    step1Address,
    step1City,
    step1State,
    step1ZipCode,
    step1SocialSecurityNumber,
    step1IsNameMatched,
    step1FilingStatus,
    step2Choose,
    step2Ca,
    step2Cb,
    step3QualifyingChildrenCredit,
    step3OtherDependentsCredit,
    step3TotalCredits,
    step4OtherIncome,
    step4Deductions,
    step4ExtraWithholding,
    step5EmployeeSignature,
    step5Date,
    employerName,
    employerAddress,
    firstDateOfEmployment,
    employerEIN,
    step2bLine1,
    step2bLine2a,
    step2bLine2b,
    step2bLine2c,
    step2bLine3,
    step2bLine4,
    step4bLine1,
    step4bLine2,
    step4bLine3,
    step4bLine4,
    step4bLine5,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, "employee/createFW4", payload);
  };

  const fetchHanlder = () => {
    getData(setData, "employee/getFW4");
  };

  useEffect(() => {
    fetchHanlder();
  }, []);

  console.log(data?.data);

  useEffect(() => {
    if(data?.data){
      const item = data?.data
      setStep1FirstName(item?.step1FirstName)
      setStep1LastName(item?.step1LastName)
      setStep1Address(item?.step1Address)
      setStep1FirstName(item?.step1FirstName)
      setStep1FirstName(item?.step1FirstName)
      setStep1FirstName(item?.step1FirstName)
      setStep1FirstName(item?.step1FirstName)
      setStep1FirstName(item?.step1FirstName)
      setStep1FirstName(item?.step1FirstName)
      setStep1FirstName(item?.step1FirstName)
      setStep1FirstName(item?.step1FirstName)
    }
  },[data])

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
        <form className="w-100 text-start" onSubmit={submitHandler}>
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
                  value={!step1IsNameMatched}
                  label={"Single or Married filing separatel"}
                  checked={step1IsNameMatched === step1IsNameMatched}
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

          <div className="grid-container">
            <div className="grid-item full-wid-input ">
              <label className="text-center w-100">
                Step 2(b)—Multiple Jobs Worksheet (Keep for your records.)
              </label>
            </div>

            <div className="grid-item full-wid-input ">
              <label>
                If you choose the option in Step 2(b) on Form W-4, complete this
                worksheet (which calculates the total extra tax for all jobs) on
                only ONE Form W-4. Withholding will be most accurate if you
                complete the worksheet and enter the result on the Form W-4 for
                the highest paying job. To be accurate, submit a new Form W-4
                for all other jobs if you have not updated your withholding
                since 2019.
              </label>
            </div>
            <div className="grid-item full-wid-input ">
              <label>
                Note: If more than one job has annual wages of more than
                $120,000 or there are more than three jobs, see Pub. 505 for
                additional tables.
              </label>
            </div>
            <div className="grid-item full-wid-input ">
              <label>
                1 Two jobs. If you have two jobs or you’re married filing
                jointly and you and your spouse each have one job, find the
                amount from the appropriate table on page 4. Using the “Higher
                Paying Job” row and the “Lower Paying Job” column, find the
                value at the intersection of the two household salaries and
                enter that value on line 1. Then, skip to line 3
              </label>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep2bLine1}
                placeholder={""}
                type={"number"}
                value={step2bLine1}
              />
            </div>
            <div className="grid-item full-wid-input ">
              <label>
                2. Three jobs. If you and/or your spouse have three jobs at the
                same time, complete lines 2a, 2b, and 2c below. Otherwise, skip
                to line 3.
              </label>
            </div>
            <div className="grid-item third-wid-input">
              <label>
                a Find the amount from the appropriate table on page 4 using the
                annual wages from the highest paying job in the “Higher Paying
                Job” row and the annual wages for your next highest paying job
                in the “Lower Paying Job” column. Find the value at the
                intersection of the two household salaries and enter that value
                on line 2a .
              </label>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep2bLine2a}
                placeholder={""}
                type={"number"}
                value={step2bLine2a}
              />
            </div>

            <div className="grid-item third-wid-input">
              <label>
                b Add the annual wages of the two highest paying jobs from line
                2a together and use the total as the wages in the “Higher Paying
                Job” row and use the annual wages for your third job in the
                “Lower Paying Job” column to find the amount from the
                appropriate table on page 4 and enter this amount on line 2b
              </label>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep2bLine2b}
                placeholder={""}
                type={"number"}
                value={step2bLine2b}
              />
            </div>

            <div className="grid-item third-wid-input">
              <label>
                c Add the amounts from lines 2a and 2b and enter the result on
                line 2c . .
              </label>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep2bLine2c}
                placeholder={""}
                type={"number"}
                value={step2bLine2c}
              />
            </div>

            <div className="grid-item third-wid-input">
              <label>
                3 Enter the number of pay periods per year for the highest
                paying job. For example, if that job pays weekly, enter 52; if
                it pays every other week, enter 26; if it pays monthly, enter
                12, etc.
              </label>
            </div>
            <div className="grid-item">
              <BorderlessInput
                setState={setStep2bLine3}
                placeholder={""}
                type={"number"}
                value={step2bLine3}
              />
            </div>

            <div className="grid-item third-wid-input">
              <label>
                4 Divide the annual amount on line 1 or line 2c by the number of
                pay periods on line 3. Enter this amount here and in Step 4(c)
                of Form W-4 for the highest paying job (along with any other
                additional amount you want withheld)
              </label>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep2bLine4}
                placeholder={""}
                type={"number"}
                value={step2bLine4}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label className="text-center w-100">
                Step 4(b)—Deductions Worksheet (Keep for your records.){" "}
              </label>
            </div>

            <div className="grid-item third-wid-input">
              <label>
                1 Enter an estimate of your 2023 itemized deductions (from
                Schedule A (Form 1040)). Such deductions may include qualifying
                home mortgage interest, charitable contributions, state and
                local taxes (up to $10,000), and medical expenses in excess of
                7.5% of your income
              </label>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep4bLine1}
                placeholder={""}
                type={"number"}
                value={step4bLine1}
              />
            </div>
            <div className="grid-item full-wid-input d-block">
              <label>Enter</label>
              <p className="fw-bold m-0">
                $27,700 if you’re married filing jointly or a qualifying
                surviving spouse
              </p>
              <p className="fw-bold m-0">$20,800 if you’re head of household</p>
              <p className="fw-bold m-0">
                $13,850 if you’re single or married filing separately
              </p>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep4bLine2}
                placeholder={""}
                type={"number"}
                value={step4bLine2}
              />
            </div>
            <div className="grid-item third-wid-input" />

            <div className="grid-item third-wid-input">
              <label>
                3 If line 1 is greater than line 2, subtract line 2 from line 1
                and enter the result here. If line 2 is greater than line 1,
                enter “-0-”
              </label>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep4bLine3}
                placeholder={""}
                type={"number"}
                value={step4bLine3}
              />
            </div>

            <div className="grid-item third-wid-input">
              <label>
                4 Enter an estimate of your student loan interest, deductible
                IRA contributions, and certain other adjustments (from Part II
                of Schedule 1 (Form 1040)). See Pub. 505 for more information
              </label>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep4bLine4}
                placeholder={""}
                type={"number"}
                value={step4bLine4}
              />
            </div>

            <div className="grid-item third-wid-input">
              <label>
                5 Add lines 3 and 4. Enter the result here and in Step 4(b) of
                Form W-4 .
              </label>
            </div>
            <div className="grid-item">
              <label>$</label>
              <BorderlessInput
                setState={setStep4bLine5}
                placeholder={""}
                type={"number"}
                value={step4bLine5}
              />
            </div>
          </div>

          <div className="instruction-content">
            <div className="deivider">
              <div className="items">
                <p className="desc">
                  Privacy Act and Paperwork Reduction Act Notice. We ask for the
                  information on this form to carry out the Internal Revenue
                  laws of the United States. Internal Revenue Code sections
                  3402(f)(2) and 6109 and their regulations require you to
                  provide this information; your employer uses it to determine
                  your federal income tax withholding. Failure to provide a
                  properly completed form will result in your being treated as a
                  single person with no other entries on the form; providing
                  fraudulent information may subject you to penalties. Routine
                  uses of this information include giving it to the Department
                  of Justice for civil and criminal litigation; to cities,
                  states, the District of Columbia, and U.S. commonwealths and
                  territories for use in administering their tax laws; and to
                  the Department of Health and Human Services for use in the
                  National Directory of New Hires. We may also disclose this
                  information to other countries under a tax treaty, to federal
                  and state agencies to enforce federal nontax criminal laws, or
                  to federal law enforcement and intelligence agencies to combat
                  terrorism.
                </p>
              </div>
              <div className="items">
                <p className="desc">
                  You are not required to provide the information requested on a
                  form that is subject to the Paperwork Reduction Act unless the
                  form displays a valid OMB control number. Books or records
                  relating to a form or its instructions must be retained as
                  long as their contents may become material in the
                  administration of any Internal Revenue law. Generally, tax
                  returns and return information are confidential, as required
                  by Code section 6103. The average time and expenses required
                  to complete and file this form will vary depending on
                  individual circumstances. For estimated averages, see the
                  instructions for your income tax return. If you have
                  suggestions for making this form simpler, we would be happy to
                  hear from you. See the instructions for your income tax
                  return.{" "}
                </p>
              </div>
            </div>
          </div>

          <Image src="/Employment/FW4/image 102.png" className="mb-5" fluid />
          <Image src="/Employment/FW4/image 103.png" className="mb-5" fluid />
          <Image src="/Employment/FW4/image 104.png" className="mb-5" fluid />

          <div className="save-as-draft-btn123 mb-3">
            <button className="btn1233" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "SUBMIT"}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};
