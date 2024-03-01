/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavWrapper from "../../../../../Helper/NavWrapper";
import "./FW9.css";

export const FW9 = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState("______________");
  const [recipientName, setRecipientName] = useState("______________");
  const [startingPay, setStartingPay] = useState("______________");
  const [startDate, setStartDate] = useState("______________");

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    taxClassification: "",
    llcTaxClassification: "",
    other: "",
    exemptionsPayeeCode: "",
    exemptionsFatCaExemptionCode: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    requesterName: "",
    requesterAddress: "",
    accountNumbers: ["", ""],
    tinSsn: "",
    tinEin: "",
    certificationIsCorrectTIN: true,
    certificationIsExemptFromBackupWithholding: false,
    certificationIsUSPerson: true,
    certificationFatCaCodes: "",
    signature: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
     <NavWrapper title={"Request for Taxpayer Identification Number and Certification"} isArrow={true} />

     <Container className="full-width-container">
     

     </Container>

      <div className="main-div-personal important">
        <div className="top-div-personal">
          <Form
            onSubmit={handleSubmit}
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
            <p>
              ▶ Go to www.irs.gov/FormW9 for instructions and the latest
              information.
            </p>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                1. Name (as shown on your income tax return). Name is required
                on this line; do not leave this line blank.
              </Form.Label>
              <Form.Control
                value={formData?.name}
                required
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter  Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                2. Business name/disregarded entity name, if different from
                above
              </Form.Label>
              <Form.Control
                value={formData?.businessName}
                onChange={handleInputChange}
                name="businessName"
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                3. Check appropriate box for federal tax classification of the
                person whose name is entered on line 1. Check only one of the
                following seven boxes.
              </Form.Label>
              <Form.Check
                onChange={handleInputChange}
                type="checkbox"
                label="C Corporation"
              />
              <Form.Check
                onChange={handleInputChange}
                type="checkbox"
                label="S Corporation"
              />
              <Form.Check
                onChange={handleInputChange}
                type="checkbox"
                label="Partnership"
              />
              <Form.Check
                onChange={handleInputChange}
                type="checkbox"
                label="Trust/estate"
              />
              <Form.Check
                onChange={handleInputChange}
                type="checkbox"
                label="Individual/sole proprietor or single-member LLC"
              />

              <Form.Check
                checked={formData?.taxClassification === "L"}
                onChange={handleInputChange}
                type="checkbox"
                label="Limited liability company. Enter the tax classification (C=C corporation, S=S corporation, P=Partnership) ▶"
              />
              <Form.Control
                value={formData?.llcTaxClassification}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <p>
              Note:{" "}
              <span style={{ fontWeight: "500" }}>
                {" "}
                Check the appropriate box in the line above for the tax
                classification of the single-member owner. Do not check LLC if
                the LLC is classified as a single-member LLC that is disregarded
                from the owner unless the owner of the LLC is another LLC that
                is not disregarded from the owner for U.S. federal tax purposes.
                Otherwise, a single-member LLC that is disregarded from the
                owner should check the appropriate box for the tax
                classification of its owner.
              </span>{" "}
            </p>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                onChange={handleInputChange}
                checked={formData?.other}
                label="Other (see instructions) ▶"
              />
              <Form.Control
                type="text"
                onChange={handleInputChange}
                value={formData?.otherText}
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                4 Exemptions (codes apply only to certain entities, not
                individuals; see instructions on page 3):
              </Form.Label>
              <Form.Control
                value={formData?.exemptions}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Exempt payee code (if any)
              </Form.Label>
              <Form.Control
                value={formData?.exemptPayeeCode}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter  text"
              />
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                (Applies to accounts maintained outside the U.S.)
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                5 Address (number, street, and apt. or suite no.) See
                instructions.
              </Form.Label>
              <Form.Control
                value={formData?.address}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Requester’s name and address (optional)
              </Form.Label>
              <Form.Control
                value={formData?.requesterName}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                6 City, state, and ZIP code
              </Form.Label>
              <Form.Control
                value={formData?.city}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                7 List account number(s) here (optional)
              </Form.Label>
              <Form.Control
                value={formData?.accountNumber}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>

            <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
              Part I Taxpayer Identification Number (TIN){" "}
            </p>
            <p style={{ fontWeight: "500" }}>
              Enter your TIN in the appropriate box. The TIN provided must match
              the name given on line 1 to avoid backup withholding. For
              individuals, this is generally your social security number (SSN).
              However, for a resident alien, sole proprietor, or disregarded
              entity, see the instructions for Part I, later. For other
              entities, it is your employer identification number (EIN). If you
              do not have a number, see How to get a TIN, later.
            </p>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Social security number
              </Form.Label>
              <Form.Control
                value={formData?.socialSecurityNumber}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                or <br />
                Employer identification number
              </Form.Label>
              <Form.Control
                value={formData?.employerIdentificationNumber}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter  text"
              />
            </Form.Group>
            <p>
              Note:{" "}
              <span style={{ fontWeight: "500" }}>
                If the account is in more than one name, see the instructions
                for line 1. Also see What Name and Number To Give the Requester
                for guidelines on whose number to enter.
              </span>
            </p>

            <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
              Part II Certification
            </p>
            <p style={{ fontWeight: "500" }}>
              Under penalties of perjury, I certify that: <br /> 1. The number
              shown on this form is my correct taxpayer identification number
              (or I am waiting for a number to be issued to me); and <br /> 2. I
              am not subject to backup withholding because: (a) I am exempt from
              backup withholding, or (b) I have not been notified by the
              Internal Revenue Service (IRS) that I am subject to backup
              withholding as a result of a failure to report all interest or
              dividends, or (c) the IRS has notified me that I am no longer
              subject to backup withholding; and <br />
              3. I am a U.S. citizen or other U.S. person (defined below); and
              <br /> 4. The FATCA code(s) entered on this form (if any)
              indicating that I am exempt from FATCA reporting is correct.
            </p>
            <p>
              Certification instructions.{" "}
              <span style={{ fontWeight: "500" }}>
                {" "}
                You must cross out item 2 above if you have been notified by the
                IRS that you are currently subject to backup withholding because
                you have failed to report all interest and dividends on your tax
                return. For real estate transactions, item 2 does not apply. For
                mortgage interest paid, acquisition or abandonment of secured
                property, cancellation of debt, contributions to an individual
                retirement arrangement (IRA), and generally, payments other than
                interest and dividends, you are not required to sign the
                certification, but you must provide your correct TIN. See the
                instructions for Part II, later.
              </span>
            </p>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Signature of U.S. person:
              </Form.Label>
              <Form.Control
                type="text"
                value={formData?.signature}
                onChange={handleInputChange}
                placeholder="Enter  text"
              />
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
            <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
              General Instructions
            </p>
            <p style={{ fontWeight: "500" }}>
              Section references are to the Internal Revenue Code unless
              otherwise noted. <br />{" "}
              <span style={{ fontWeight: "bold" }}>Future developments.</span>
              For the latest information about developments related to Form W-9
              and its instructions, such as legislation enacted after they were
              published, go to www.irs.gov/FormW9.
            </p>
            <p>Purpose of Form</p>
            <p style={{ fontWeight: "500" }}>
              An individual or entity (Form W-9 requester) who is required to
              file an information return with the IRS must obtain your correct
              taxpayer identification number (TIN) which may be your social
              security number (SSN), individual taxpayer identification number
              (ITIN), adoption taxpayer identification number (ATIN), or
              employer identification number (EIN), to report on an information
              return the amount paid to you, or other amount reportable on an
              information return. Examples of information returns include, but
              are not limited to, the following.
            </p>
            <p style={{ fontWeight: "500" }}>
              <li>Form 1099-INT (interest earned or paid)</li>
              <li>
                Form 1099-DIV (dividends, including those from stocks or mutual
                funds)
              </li>
              <li>
                Form 1099-MISC (various types of income, prizes, awards, or
                gross proceeds)
              </li>
              <li>
                Form 1099-B (stock or mutual fund sales and certain other
                transactions by brokers
              </li>
              <li> Form 1099-S (proceeds from real estate transactions) </li>
              <li>
                Form 1099-K (merchant card and third party network transactions)
              </li>
              <li>
                Form 1098 (home mortgage interest), 1098-E (student loan
                interest), 1098-T (tuition){" "}
              </li>
              <li> Form 1099-C (canceled debt) </li>
              <li>
                {" "}
                Form 1099-A (acquisition or abandonment of secured property) Use
                Form W-9 only if you are a U.S. person (including a resident
                alien), to provide your correct TIN.{" "}
              </li>
              <li>
                If you do not return Form W-9 to the requester with a TIN, you
                might be subject to backup withholding. See What is backup
                withholding, later
              </li>
            </p>
            <p style={{ fontWeight: "500" }}>
              By signing the filled-out form, you: <br /> 1. Certify that the
              TIN you are giving is correct (or you are waiting for a number to
              be issued),
              <br /> 2. Certify that you are not subject to backup withholding,
              or
              <br />
              3. Claim exemption from backup withholding if you are a U.S.
              exempt payee. If applicable, you are also certifying that as a
              U.S. person, your allocable share of any partnership income from a
              U.S. trade or business is not subject to the withholding tax on
              foreign partners' share of effectively connected income, and
              <br /> 4. Certify that FATCA code(s) entered on this form (if any)
              indicating that you are exempt from the FATCA reporting, is
              correct. See What is FATCA reporting, later, for further
              information.
              <br /> <span style={{ fontWeight: "bold" }}>Note:</span> If you
              are a U.S. person and a requester gives you a form other than Form
              W-9 to request your TIN, you must use the requester’s form if it
              is substantially similar to this Form W-9.
              <br />
              <span style={{ fontWeight: "bold" }}>
                Definition of a U.S. person.
              </span>
              For federal tax purposes, you are considered a U.S. person if you
              are:
              <br /> • An individual who is a U.S. citizen or U.S. resident
              alien;
              <br />• A partnership, corporation, company, or association
              created or organized in the United States or under the laws of the
              United States; <br />• An estate (other than a foreign estate); or{" "}
              <br />• A domestic trust (as defined in Regulations section
              301.7701-7).
              <br />
              <span style={{ fontWeight: "bold" }}>
                Special rules for partnerships.
              </span>
              Partnerships that conduct a trade or business in the United States
              are generally required to pay a withholding tax under section 1446
              on any foreign partners’ share of effectively connected taxable
              income from such business. Further, in certain cases where a Form
              W-9 has not been received, the rules under section 1446 require a
              partnership to presume that a partner is a foreign person, and pay
              the section 1446 withholding tax. Therefore, if you are a U.S.
              person that is a partner in a partnership conducting a trade or
              business in the United States, provide Form W-9 to the partnership
              to establish your U.S. status and avoid section 1446 withholding
              on your share of partnership income. <br />
              <br />
              In the cases below, the following person must give Form W-9 to the
              partnership for purposes of establishing its U.S. status and
              avoiding withholding on its allocable share of net income from the
              partnership conducting a trade or business in the United States. •
              In the case of a disregarded entity with a U.S. owner, the U.S.
              owner of the disregarded entity and not the entity; • In the case
              of a grantor trust with a U.S. grantor or other U.S. owner,
              generally, the U.S. grantor or other U.S. owner of the grantor
              trust and not the trust; and
              <br /> • In the case of a U.S. trust (other than a grantor trust),
              the U.S. trust (other than a grantor trust) and not the
              beneficiaries of the trust.
              <br />{" "}
              <span style={{ fontWeight: "bold" }}>
                Foreign person. If you are a foreign person or the U.S.
              </span>
              branch of a foreign bank that has elected to be treated as a U.S.
              person, do not use Form W-9. Instead, use the appropriate Form W-8
              or Form 8233 (see Pub. 515, Withholding of Tax on Nonresident
              Aliens and Foreign Entities).{" "}
              <span style={{ fontWeight: "bold" }}>
                > Nonresident alien who becomes a resident alien.
              </span>
              Generally, only a nonresident alien individual may use the terms
              of a tax treaty to reduce or eliminate U.S. tax on certain types
              of income. However, most tax treaties contain a provision known as
              a “saving clause.” Exceptions specified in the saving clause may
              permit an exemption from tax to continue for certain types of
              income even after the payee has otherwise become a U.S. resident
              alien for tax purposes.
              <br /> If you are a U.S. resident alien who is relying on an
              exception contained in the saving clause of a tax treaty to claim
              an exemption from U.S. tax on certain types of income, you must
              attach a statement to Form W-9 that specifies the following five
              items. <br />
              1. The treaty country. Generally, this must be the same treaty
              under which you claimed exemption from tax as a nonresident alien.
              <br /> 2. The treaty article addressing the income.
              <br /> 3. The article number (or location) in the tax treaty that
              contains the saving clause and its exceptions. <br />
              4. The type and amount of income that qualifies for the exemption
              from tax. 5. Sufficient facts to justify the exemption from tax
              under the terms of the treaty article.
            </p>
            <p style={{ fontWeight: "500" }}>
              <span>Example.</span>
              <br /> Article 20 of the U.S.-China income tax treaty allows an
              exemption from tax for scholarship income received by a Chinese
              student temporarily present in the United States. Under U.S. law,
              this student will become a resident alien for tax purposes if his
              or her stay in the United States exceeds 5 calendar years.
              However, paragraph 2 of the first Protocol to the U.S.-China
              treaty (dated April 30, 1984) allows the provisions of Article 20
              to continue to apply even after the Chinese student becomes a
              resident alien of the United States. A Chinese student who
              qualifies for this exception (under paragraph 2 of the first
              protocol) and is relying on this exception to claim an exemption
              from tax on his or her scholarship or fellowship income would
              attach to Form W-9 a statement that includes the information
              described above to support that exemption. If you are a
              nonresident alien or a foreign entity, give the requester the
              appropriate completed Form W-8 or Form 8233.
            </p>
            <p style={{ fontWeight: "500" }}>
              <span style={{ fontWeight: "bold" }}>
                Backup Withholding <br />
              </span>
              <span style={{ fontWeight: "bold" }}>
                What is backup withholding?
              </span>
              Persons making certain payments to you must under certain
              conditions withhold and pay to the IRS 24% of such payments. This
              is called “backup withholding.” Payments that may be subject to
              backup withholding include interest, tax-exempt interest,
              dividends, broker and barter exchange transactions, rents,
              royalties, nonemployee pay, payments made in settlement of payment
              card and third party network transactions, and certain payments
              from fishing boat operators. Real estate transactions are not
              subject to backup withholding. <br /> You will not be subject to
              backup withholding on payments you receive if you give the
              requester your correct TIN, make the proper certifications, and
              report all your taxable interest and dividends on your tax return.{" "}
              <br />
              <span style={{ fontWeight: "bold" }}>
                Payments you receive will be subject to backup withholding if:
              </span>
              1. You do not furnish your TIN to the requester, <br /> 2. You do
              not certify your TIN when required (see the instructions for Part
              II for details), <br /> 3. The IRS tells the requester that you
              furnished an incorrect TIN, <br /> 4. The IRS tells you that you
              are subject to backup withholding because you did not report all
              your interest and dividends on your tax return (for reportable
              interest and dividends only), or <br /> 5. You do not certify to
              the requester that you are not subject to backup withholding under
              4 above (for reportable interest and dividend accounts opened
              after 1983 only). <br /> Certain payees and payments are exempt
              from backup withholding. See Exempt payee code, later, and the
              separate Instructions for the Requester of Form W-9 for more
              information. Also see Special rules for partnerships, earlier.{" "}
              <br />
            </p>
            <p style={{ fontWeight: "500" }}>
              <span style={{ fontWeight: "bold" }}>
                What is FATCA Reporting?
              </span>{" "}
              <br />
              The Foreign Account Tax Compliance Act (FATCA) requires a
              participating foreign financial institution to report all United
              States account holders that are specified United States persons.
              Certain payees are exempt from FATCA reporting. See Exemption from
              FATCA reporting code, later, and the Instructions for the
              Requester of Form W-9 for more information. <br />
              <span style={{ fontWeight: "bold" }}>
                Updating Your Information
              </span>
              <br />
              You must provide updated information to any person to whom you
              claimed to be an exempt payee if you are no longer an exempt payee
              and anticipate receiving reportable payments in the future from
              this person. For example, you may need to provide updated
              information if you are a C corporation that elects to be an S
              corporation, or if you no longer are tax exempt. In addition, you
              must furnish a new Form W-9 if the name or TIN changes for the
              account; for example, if the grantor of a grantor trust dies.{" "}
              <br />
              <span style={{ fontWeight: "bold" }}>Penalties</span>
              <br />
              Failure to furnish TIN. If you fail to furnish your correct TIN to
              a requester, you are subject to a penalty of $50 for each such
              failure unless your failure is due to reasonable cause and not to
              willful neglect. Civil penalty for false information with respect
              to withholding. If you make a false statement with no reasonable
              basis that results in no backup withholding, you are subject to a
              $500 penalty.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>
                Criminal penalty for falsifying information.
              </span>
              Willfully falsifying certifications or affirmations may subject
              you to criminal penalties including fines and/or imprisonment.
              Misuse of TINs. If the requester discloses or uses TINs in
              violation of federal law, the requester may be subject to civil
              and criminal penalties.
            </p>
            <p>Specific Instructions</p>

            <p style={{ fontWeight: "500" }}>
              <span style={{ fontWeight: "bold" }}>Line 1</span>
              <br />
              You must enter one of the following on this line; do not leave
              this line blank. The name should match the name on your tax
              return. If this Form W-9 is for a joint account (other than an
              account maintained by a foreign financial institution (FFI)), list
              first, and then circle, the name of the person or entity whose
              number you entered in Part I of Form W-9. If you are providing
              Form W-9 to an FFI to document a joint account, each holder of the
              account that is a U.S. person must provide a Form W-9.
              <br /> <span style={{ fontWeight: "bold" }}>a. Individual.</span>
              Generally, enter the name shown on your tax return. If you have
              changed your last name without informing the Social Security
              Administration (SSA) of the name change, enter your first name,
              the last name as shown on your social security card, and your new
              last name. <br />{" "}
              <span style={{ fontWeight: "bold" }}>Note: ITIN applicant:</span>
              <br /> Enter your individual name as it was entered on your Form
              W-7 application, line 1a. This should also be the same as the name
              you entered on the Form 1040/1040A/1040EZ you filed with your
              application. <br />{" "}
              <span style={{ fontWeight: "bold" }}>
                b. Sole proprietor or single-member LLC.
              </span>
              Enter your individual name as shown on your 1040/1040A/1040EZ on
              line 1. You may enter your business, trade, or “doing business as”
              (DBA) name on line 2. <br />{" "}
              <span style={{ fontWeight: "bold" }}>
                c. Partnership, LLC that is not a single-member LLC, C
                corporation, or S corporation.
              </span>
              Enter the entity's name as shown on the entity's tax return on
              line 1 and any business, trade, or DBA name on line 2. <br />
              <span style={{ fontWeight: "bold" }}>d. Other entities.</span>
              Enter your name as shown on required U.S. federal tax documents on
              line 1. This name should match the name shown on the charter or
              other legal document creating the entity. You may enter any
              business, trade, or DBA name on line 2.{" "}
              <span style={{ fontWeight: "bold" }}>e. Disregarded entity.</span>
              For U.S. federal tax purposes, an entity that is disregarded as an
              entity separate from its owner is treated as a “disregarded
              entity.” See Regulations section 301.7701-2(c)(2)(iii). Enter the
              owner's name on line 1. The name of the entity entered on line 1
              should never be a disregarded entity. The name on line 1 should be
              the name shown on the income tax return on which the income should
              be reported. For example, if a foreign LLC that is treated as a
              disregarded entity for U.S. federal tax purposes has a single
              owner that is a U.S. person, the U.S. owner's name is required to
              be provided on line 1. If the direct owner of the entity is also a
              disregarded entity, enter the first owner that is not disregarded
              for federal tax purposes. Enter the disregarded entity's name on
              line 2, “Business name/disregarded entity name.” If the owner of
              the disregarded entity is a foreign person, the owner must
              complete an appropriate Form W-8 instead of a Form W-9. This is
              the case even if the foreign person has a U.S. TIN. <br />
              <span style={{ fontWeight: "bold" }}>Line 2</span>
              <br />
              If you have a business name, trade name, DBA name, or disregarded
              entity name, you may enter it on line 2. <br />
              <span style={{ fontWeight: "bold" }}>Line 3</span>
              <br />
              Check the appropriate box on line 3 for the U.S. federal tax
              classification of the person whose name is entered on line 1.
              Check only one box on line 3.
            </p>
            <p className="first-table-fw9">
              <span className="fw9-span-left" style={{ fontWeight: "500" }}>
                <Table bordered style={{ borderColor: "black" }}>
                  <thead>
                    <tr>
                      <th>IF the entity/person on line 1 is a(n) . . .</th>
                      <th>THEN check the box for . . .</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Corporation</td>
                      <td>Corporation</td>
                    </tr>
                    <tr>
                      <td>
                        • Individual • Sole proprietorship, or • Single-member
                        limited liability company (LLC) owned by an individual
                        and disregarded for U.S. federal tax purposes.
                      </td>
                      <td>Individual/sole proprietor or singlemember LLC</td>
                    </tr>
                    <tr>
                      <td>
                        • LLC treated as a partnership for U.S. federal tax
                        purposes, • LLC that has filed Form 8832 or 2553 to be
                        taxed as a corporation, or • LLC that is disregarded as
                        an entity separate from its owner but the owner is
                        another LLC that is not disregarded for U.S. federal tax
                        purposes.
                      </td>
                      <td>
                        • LLC treated as a partnership for U.S. federal tax
                        purposes, • LLC that has filed Form 8832 or 2553 to be
                        taxed as a corporation, or • LLC that is disregarded as
                        an entity separate from its owner but the owner is
                        another LLC that is not disregarded for U.S. federal tax
                        purposes.
                      </td>
                    </tr>
                    <tr>
                      <td>• Partnership</td>
                      <td>Partnership</td>
                    </tr>
                    <tr>
                      <td>Trust/estate</td>
                      <td>Trust/estate</td>
                    </tr>
                  </tbody>
                </Table>
              </span>
              <span className="fw9-span-right">
                <p style={{ fontWeight: "500" }}>
                  <span style={{ fontWeight: "bold" }}>Line 4, Exemptions</span>
                  <br />
                  If you are exempt from backup withholding and/or FATCA
                  reporting, enter in the appropriate space on line 4 any
                  code(s) that may apply to you. <br />
                  <span style={{ fontWeight: "bold" }}>Exempt payee code.</span>
                  • <br />
                  Generally, individuals (including sole proprietors) are not
                  exempt from backup withholding. <br /> • Except as provided
                  below, corporations are exempt from backup withholding for
                  certain payments, including interest and dividends. • <br />
                  Corporations are not exempt from backup withholding for
                  payments made in settlement of payment card or third party
                  network transactions. <br /> • Corporations are not exempt
                  from backup withholding with respect to attorneys’ fees or
                  gross proceeds paid to attorneys, and corporations that
                  provide medical or health care services are not exempt with
                  respect to payments reportable on Form 1099-MISC. The
                  following codes identify payees that are exempt from backup
                  withholding. Enter the appropriate code in the space in line
                  4. <br /> 1—An organization exempt from tax under section
                  501(a), any IRA, or a custodial account under section
                  403(b)(7) if the account satisfies the requirements of section
                  401(f)(2) <br /> 2—The United States or any of its agencies or
                  instrumentalities <br /> 3—A state, the District of Columbia,
                  a U.S. commonwealth or possession, or any of their political
                  subdivisions or instrumentalities <br /> 4—A foreign
                  government or any of its political subdivisions, agencies, or
                  instrumentalities <br /> 5—A corporation <br /> 6—A dealer in
                  securities or commodities required to register in the United
                  States, the District of Columbia, or a U.S. commonwealth or
                  possession <br /> 7—A futures commission merchant registered
                  with the Commodity Futures Trading
                  <br /> 8—A real estate investment trust <br />
                  9—An entity registered at all times during the tax year under
                  the Investment Company Act of 1940 <br />
                  10—A common trust fund operated by a bank under section 584(a){" "}
                  <br />
                  11—A financial institution <br /> 12—A middleman known in the
                  investment community as a nominee or custodian <br />
                  13—A trust exempt from tax under section 664 or described in
                  section 4947 <br /> <br />
                </p>
              </span>
            </p>
            <p style={{ fontWeight: "500" }}>
              The following chart shows types of payments that may be exempt
              from backup withholding. The chart applies to the exempt payees
              listed above, 1 through 13.
            </p>
            <p className="first-table-fw9">
              <span className="fw9-span-left" style={{ fontWeight: "500" }}>
                <Table bordered style={{ borderColor: "black" }}>
                  <thead>
                    <tr>
                      <th>IF the payment is for . . .</th>
                      <th>All exempt payees except for 7</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Broker transactions</td>
                      <td>
                        Exempt payees 1 through 4 and 6 through 11 and all C
                        corporations. S corporations must not enter an exempt
                        payee code because they are exempt only for sales of
                        noncovered securities acquired prior to 2012.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Barter exchange transactions and patronage dividends
                      </td>
                      <td>Exempt payees 1 through 4</td>
                    </tr>
                    <tr>
                      <td>
                        Payments over $600 required to be reported and direct
                        sales over $5,0001
                      </td>
                      <td>Generally, exempt payees 1 through 5</td>
                    </tr>
                    <tr>
                      <td>
                        Payments made in settlement of payment card or third
                        party network transactions
                      </td>
                      <td>Exempt payees 1 through 4</td>
                    </tr>
                  </tbody>
                </Table>
              </span>
              <span className="fw9-span-right">
                <p style={{ fontWeight: "500" }}>
                  1 See Form 1099-MISC, Miscellaneous Income, and its
                  instructions. <br /> 2 However, the following payments made to
                  a corporation and reportable on Form 1099-MISC are not exempt
                  from backup withholding: medical and health care payments,
                  attorneys’ fees, gross proceeds paid to an attorney reportable
                  under section 6045(f), and payments for services paid by a
                  federal executive agency. <br />
                  <span style={{ fontWeight: "500" }}>
                    Exemption from FATCA reporting code.
                  </span>
                  The following codes identify payees that are exempt from
                  reporting under FATCA. These codes apply to persons submitting
                  this form for accounts maintained outside of the United States
                  by certain foreign financial institutions. Therefore, if you
                  are only submitting this form for an account you hold in the
                  United States, you may leave this field blank. Consult with
                  the person requesting this form if you are uncertain if the
                  financial institution is subject to these requirements. A
                  requester may indicate that a code is not required by
                  providing you with a Form W-9 with “Not Applicable” (or any
                  similar indication) written or printed on the line for a FATCA
                  exemption code. <br /> A—An organization exempt from tax under
                  section 501(a) or any individual retirement plan as defined in
                  section 7701(a)(37) <br />
                  B—The United States or any of its agencies or
                  instrumentalities
                  <br /> C—A state, the District of Columbia, a U.S.
                  commonwealth or possession, or any of their political
                  subdivisions or instrumentalities <br /> D—A corporation the
                  stock of which is regularly traded on one or more established
                  securities markets, as described in Regulations section
                  1.1472-1(c)(1)(i)
                </p>
              </span>
            </p>

            <p style={{ fontWeight: "500" }}>
              E—A corporation that is a member of the same expanded affiliated
              group as a corporation described in Regulations section
              1.1472-1(c)(1)(i) <br /> F—A dealer in securities, commodities, or
              derivative financial instruments (including notional principal
              contracts, futures, forwards, and options) that is registered as
              such under the laws of the United States or any state <br />
              G—A real estate investment trust
              <br /> H—A regulated investment company as defined in section 851
              or an entity registered at all times during the tax year under the
              Investment Company Act of 1940 <br />
              I—A common trust fund as defined in section 584(a)
              <br /> J—A bank as defined in section 581 <br />
              K—A broker
              <br /> L—A trust exempt from tax under section 664 or described in
              section 4947(a)(1) <br />
              M—A tax exempt trust under a section 403(b) plan or section 457(g)
              plan
              <br /> <span style={{ fontWeight: "bold" }}>Note:</span> You may
              wish to consult with the financial institution requesting this
              form to determine whether the FATCA code and/or exempt payee code
              should be completed. <br />
              <span style={{ fontWeight: "bold" }}>
                Line 5 <br />
              </span>
              Enter your address (number, street, and apartment or suite
              number). This is where the requester of this Form W-9 will mail
              your information returns. If this address differs from the one the
              requester already has on file, write NEW at the top. If a new
              address is provided, there is still a chance the old address will
              be used until the payor changes your address in their records.
              <br /> <span style={{ fontWeight: "bold" }}>Line 6</span>
              Enter your city, state, and ZIP code.
            </p>
            <p style={{ fontWeight: "500" }}>
              <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                Part I. Taxpayer Identification Number (TIN)
              </span>
              <br />
              Enter your TIN in the appropriate box. If you are a resident alien
              and you do not have and are not eligible to get an SSN, your TIN
              is your IRS individual taxpayer identification number (ITIN).
              Enter it in the social security number box. If you do not have an
              ITIN, see How to get a TIN below. <br /> If you are a sole
              proprietor and you have an EIN, you may enter either your SSN or
              EIN. If you are a single-member LLC that is disregarded as an
              entity separate from its owner, enter the owner’s SSN (or EIN, if
              the owner has one). Do not enter the disregarded entity’s EIN.
              <br /> If the LLC is classified as a corporation or partnership,
              enter the entity’s EIN.{" "}
              <span style={{ fontWeight: "bold" }}>Note:</span> See What Name
              and Number To Give the Requester, later, for further clarification
              of name and TIN combinations.
              <span style={{ fontWeight: "bold" }}> How to get a TIN.</span> If
              you do not have a TIN, apply for one immediately. To apply for an
              SSN, get Form SS-5, Application for a Social Security Card, from
              your local SSA office or get this form online at www.SSA.gov. You
              may also get this form by calling 1-800-772-1213. Use Form W-7,
              Application for IRS Individual Taxpayer Identification Number, to
              apply for an ITIN, or Form SS-4, Application for Employer
              Identification Number, to apply for an EIN. You can apply for an
              EIN online by accessing the IRS website at www.irs.gov/Businesses
              and clicking on Employer Identification Number (EIN) under
              Starting a Business. Go to www.irs.gov/Forms to view, download, or
              print Form W-7 and/or Form SS-4. Or, you can go to
              www.irs.gov/OrderForms to place an order and have Form W-7 and/or
              SS-4 mailed to you within 10 business days.
              <br /> If you are asked to complete Form W-9 but do not have a
              TIN, apply for a TIN and write “Applied For” in the space for the
              TIN, sign and date the form, and give it to the requester. For
              interest and dividend payments, and certain payments made with
              respect to readily tradable instruments, generally you will have
              60 days to get a TIN and give it to the requester before you are
              subject to backup withholding on payments. The 60-day rule does
              not apply to other types of payments. You will be subject to
              backup withholding on all such payments until you provide your TIN
              to the requester.
              <br /> <span style={{ fontWeight: "bold" }}>Note:</span> Entering
              “Applied For” means that you have already applied for a TIN or
              that you intend to apply for one soon. <br />{" "}
              <span style={{ fontWeight: "bold" }}>Caution:</span>
              A disregarded U.S. entity that has a foreign owner must use the
              appropriate Form W-8. <br />{" "}
              <span style={{ fontWeight: "bold" }}>Part II. Certification</span>
              To establish to the withholding agent that you are a U.S. person,
              or resident alien, sign Form W-9. You may be requested to sign by
              the withholding agent even if item 1, 4, or 5 below indicates
              otherwise. For a joint account, only the person whose TIN is shown
              in Part I should sign (when required). In the case of a
              disregarded entity, the person identified on line 1 must sign.
              Exempt payees, see Exempt payee code, earlier. Signature
              requirements. Complete the certification as indicated in items 1
              through 5 below.
            </p>
            <p style={{ fontWeight: "500" }}>
              <span style={{ fontWeight: "bold" }}>
                1. Interest, dividend, and barter exchange accounts opened
                before 1984 and broker accounts considered active during 1983.{" "}
                <br />
              </span>{" "}
              You must give your correct TIN, but you do not have to sign the
              certification.{" "}
              <span style={{ fontWeight: "bold" }}>
                certification. 2. Interest, dividend, broker, and barter
                exchange accounts opened after 1983 certification. <br />{" "}
              </span>{" "}
              and broker accounts considered inactive during 1983. You must sign
              the certification or backup withholding will apply. If you are
              subject to backup withholding and you are merely providing your
              correct TIN to the requester, you must cross out item 2 in the
              certification before signing the form. certification before
              signing the form.
              <br />
              <span style={{ fontWeight: "bold" }}>
                3. Real estate transactions.
                <br />
              </span>{" "}
              You must sign the certification. certification before signing the
              form. You may cross out item 2 of the certification. form. You may
              cross out item 2 of the certification.
              <span style={{ fontWeight: "bold" }}>
                4. Other payments.
              </span>{" "}
              <br /> form. You may cross out item 2 of the certification. You
              must give your correct TIN, but you do not have to sign the
              certification unless you have been notified that you have
              previously given an incorrect TIN. “Other payments” include
              payments made in the course of the requester’s trade or business
              for rents, royalties, goods (other than bills for merchandise),
              medical and health care services (including payments to
              corporations), payments to a nonemployee for services, payments
              made in settlement of payment card and third party network
              transactions, payments to certain fishing boat crew members and
              fishermen, and gross proceeds paid to attorneys (including
              payments to corporations). <br />
              <span style={{ fontWeight: "bold" }}>
                5. Mortgage interest paid by you, acquisition or abandonment of
                secured property, cancellation of debt, qualified tuition
                program payments (under section 529), ABLE accounts (under
                section 529A), IRA, Coverdell ESA, Archer MSA or HSA
                contributions or distributions, and pension distributions.
              </span>{" "}
              You must give your correct TIN, but you do not have to sign the
              certification.
            </p>

            <p className="first-table-fw9">
              <span className="fw9-span-left" style={{ fontWeight: "500" }}>
                <Table bordered style={{ borderColor: "black" }}>
                  <thead>
                    <tr>
                      <th>For this type of account:</th>
                      <th>Give name and SSN of:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        1. Individual <br /> 2. Two or more individuals (joint
                        account) other than an account maintained by an FFI{" "}
                        <br /> 3. Two or more U.S. persons (joint account
                        maintained by an FFI) <br /> 4. Custodial account of a
                        minor (Uniform Gift to Minors Act) <br /> 5. a. The
                        usual revocable savings trust (grantor is also trustee)
                        b. So-called trust account that is not a legal or valid
                        trust under state law
                        <br /> 6. Sole proprietorship or disregarded entity
                        owned by an individual <br /> 7. Grantor trust filing
                        under Optional Form 1099 Filing Method 1 (see
                        Regulations section 1.671-4(b)(2)(i) (A))
                      </td>
                      <td>
                        The individual <br /> The actual owner of the account{" "}
                        <br /> or, if combined funds, the first individual on
                        the account1 <br /> Each holder of the account <br />{" "}
                        The minor <br /> <br /> The grantor-trustee <br /> The
                        actual owner The owner The grantor*
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>
                        For this type of account:
                      </td>
                      <td style={{ fontWeight: "bold" }}>
                        Give name and EIN of:
                      </td>
                    </tr>
                    <tr>
                      <td>
                        8. Disregarded entity not owned by an individual <br />{" "}
                        9. A valid trust, estate, or pension trust
                        <br /> 10. Corporation or LLC electing corporate status
                        on Form 8832 or Form 2553
                        <br /> 11. Association, club, religious, charitable,
                        educational, or other taxexempt organization
                        <br /> 12. Partnership or multi-member LLC <br />
                        13. A broker or registered nominee
                      </td>
                      <td>
                        The owner <br /> Legal entity4 The corporation <br />{" "}
                        The organization <br /> The partnership <br /> The
                        broker or nominee
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>
                        For this type of account:
                      </td>
                      <td style={{ fontWeight: "bold" }}>
                        Give name and EIN of:
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>
                        14. Account with the Department of Agriculture in the
                        name of a public entity (such as a state or local
                        government, school district, or prison) that receives
                        agricultural program payments <br /> 15. Grantor trust
                        filing under the Form 1041 Filing Method or the Optional
                        Form 1099 Filing Method 2 (see Regulations section
                        1.671-4(b)(2)(i)(B))
                      </td>
                      <td style={{ fontWeight: "bold" }}>
                        The public entity <br /> The trust
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </span>
              <span className="fw9-span-right">
                <p style={{ fontWeight: "500" }}>
                  1 List first and circle the name of the person whose number
                  you furnish. If only one person on a joint account has an SSN,
                  that person’s number must be furnished. <br /> 2 Circle the
                  minor’s name and furnish the minor’s SSN.
                  <br /> 3 You must show your individual name and you may also
                  enter your business or DBA name on the “Business
                  name/disregarded entity” name line. You may use either your
                  SSN or EIN (if you have one), but the IRS encourages you to
                  use your SSN.
                  <br /> 4 List first and circle the name of the trust, estate,
                  or pension trust. (Do not furnish the TIN of the personal
                  representative or trustee unless the legal entity itself is
                  not designated in the account title.) Also see Special rules
                  for partnerships, earlier.{" "}
                  <span style={{ fontWeight: "bold" }}>*Note:</span> The grantor
                  also must provide a Form W-9 to trustee of trust.{" "}
                  <span style={{ fontWeight: "bold" }}>Note:</span> If no name
                  is circled when more than one name is listed, the number will
                  be considered to be that of the first name listed. considered
                  to be that of the first name listed.
                  <span style={{ fontWeight: "bold" }}>
                    Secure Your Tax Records From Identity Theft
                  </span>{" "}
                  considered to be that of the first name listed. Identity theft
                  occurs when someone uses your personal information such as
                  your name, SSN, or other identifying information, without your
                  permission, to commit fraud or other crimes. An identity thief
                  may use your SSN to get a job or may file a tax return using
                  your SSN to receive a refund.
                  <br /> To reduce your risk: • Protect your SSN,
                  <br /> • Ensure your employer is protecting your SSN, and
                  <br /> • Be careful when choosing a tax preparer.
                  <br /> If your tax records are affected by identity theft and
                  you receive a notice from the IRS, respond right away to the
                  name and phone number printed on the IRS notice or letter.
                  <br /> If your tax records are not currently affected by
                  identity theft but you think you are at risk due to a lost or
                  stolen purse or wallet, questionable credit card activity or
                  credit report, contact the IRS Identity Theft Hotline at
                  1-800-908-4490 or submit Form 14039.
                  <br /> For more information, see Pub. 5027, Identity Theft
                  Information for Taxpayers. Victims of identity theft who are
                  experiencing economic harm or a systemic problem, or are
                  seeking help in resolving tax problems that have not been
                  resolved through normal channels, may be eligible for Taxpayer
                  Advocate Service (TAS) assistance. You can reach TAS by
                  calling the TAS toll-free case intake line at 1-877-777-4778
                  or TTY/TDD 1-800-829-4059.
                  <br />{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Protect yourself from suspicious emails or phishing schemes.
                  </span>
                  Phishing is the creation and use of email and websites
                  designed to mimic legitimate business emails and websites. The
                  most common act is sending an email to a user falsely claiming
                  to be an established legitimate enterprise in an attempt to
                  scam the user into surrendering private information that will
                  be used for identity theft. <br /> The IRS does not initiate
                  contacts with taxpayers via emails. Also, the IRS does not
                  request personal detailed information through email or ask
                  taxpayers for the PIN numbers, passwords, or similar secret
                  access information for their credit card, bank, or other
                  financial accounts. <br /> If you receive an unsolicited email
                  claiming to be from the IRS, forward this message to
                  phishing@irs.gov. You may also report misuse of the IRS name,
                  logo, or other IRS property to the Treasury Inspector General
                  for Tax Administration (TIGTA) at 1-800-366-4484. You can
                  forward suspicious emails to the Federal Trade Commission at
                  spam@uce.gov or report them at www.ftc.gov/complaint. You can
                  contact the FTC at www.ftc.gov/idtheft or 877-IDTHEFT
                  (877-438-4338). If you have been the victim of identity theft,
                  see www.IdentityTheft.gov and Pub. 5027. <br /> Visit
                  www.irs.gov/IdentityTheft to learn more about identity theft
                  and how to reduce your risk.
                </p>
              </span>
            </p>

            <p style={{ fontWeight: "500" }}>
              <span style={{ fontWeight: "bold" }}>Privacy Act Notice</span>{" "}
              <br />
              Section 6109 of the Internal Revenue Code requires you to provide
              your correct TIN to persons (including federal agencies) who are
              required to file information returns with the IRS to report
              interest, dividends, or certain other income paid to you; mortgage
              interest you paid; the acquisition or abandonment of secured
              property; the cancellation of debt; or contributions you made to
              an IRA, Archer MSA, or HSA. The person collecting this form uses
              the information on the form to file information returns with the
              IRS, reporting the above information. Routine uses of this
              information include giving it to the Department of Justice for
              civil and criminal litigation and to cities, states, the District
              of Columbia, and U.S. commonwealths and possessions for use in
              administering their laws. The information also may be disclosed to
              other countries under a treaty, to federal and state agencies to
              enforce civil and criminal laws, or to federal law enforcement and
              intelligence agencies to combat terrorism. You must provide your
              TIN whether or not you are required to file a tax return. Under
              section 3406, payers must generally withhold a percentage of
              taxable interest, dividend, and certain other payments to a payee
              who does not give a TIN to the payer. Certain penalties may also
              apply for providing false or fraudulent information.
            </p>
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
