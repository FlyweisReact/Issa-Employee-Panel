/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  BorderlessInput,
  CheckBoxMaker,
  DateFormatter,
} from "../../../../../Helper/Makers";
import NavWrapper from "../../../../../Helper/NavWrapper";
import { SignatureModal } from "../../../../../Mod/Modal";
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

  // -------
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [taxClassification, setTaxClassification] = useState("");
  const [llcTaxClassification, setLLCTaxClassification] = useState("");
  const [other, setOther] = useState("");
  const [exemptionsPayeeCode, setExemptionsPayeeCode] = useState("");
  const [exemptionsFatCaExemptionCode, setExemptionsFatCaExemptionCode] =
    useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [requesterName, setRequesterName] = useState("");
  const [requesterAddress, setRequesterAddress] = useState("");
  const [accountNumbers, setAccountNumbers] = useState([]);
  const [tinSsn, setTinSsn] = useState("");
  const [tinEin, setTinEin] = useState("");
  const [signature, setSignature] = useState("");
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);

  // --
  const content = {
    firstItem: [
      {
        para: "General Instructions",
        status: "heading",
      },
      {
        para: "Section references are to the Internal Revenue Code unless otherwise oted",
        status: "desc",
      },
      {
        para: "Future developments. For the latest information about developments related to Form W-9 and its instructions, such as legislation enacted after they were published, go to www.irs.gov/FormW9.",
        status: "desc",
      },
      {
        para: "Purpose of Form",
        status: "heading",
      },
      {
        para: "An individual or entity (Form W-9 requester) who is required to file an information return with the IRS must obtain your correct taxpayer  identification number (TIN) which may be your social security number (SSN), individual taxpayer identification number (ITIN), adoption taxpayer identification number (ATIN), or employer identification number (EIN), to report on an information return the amount paid to you, or other amount reportable on an information return. Examples of information returns include, but are not limited to, the following.",
        status: "desc",
      },
      {
        para: "By signing the filled-out form, you: 1. Certify that the TIN you are giving is correct (or you are waiting for a number to be issued), 2. Certify that you are not subject to backup withholding, or 3. Claim exemption from backup withholding if you are a U.S. exempt  payee. If applicable, you are also certifying that as a U.S. person, your  allocable share of any partnership income from a U.S. trade or business is not subject to the withholding tax on foreign partners' share of  effectively connected income, and  4. Certify that FATCA code(s) entered on this form (if any) indicating that you are exempt from the FATCA reporting, is correct. See What is FATCA reporting, later, for further information. Note: If you are a U.S. person and a requester gives you a form other  than Form W-9 to request your TIN, you must use the requester’s form if  it is substantially similar to this Form W-9. Definition of a U.S. person. For federal tax purposes, you are  considered a U.S. person if you are: • An individual who is a U.S. citizen or U.S. resident alien; • A partnership, corporation, company, or association created or organized in the United States or under the laws of the United States; • An estate (other than a foreign estate); or • A domestic trust (as defined in Regulations section 301.7701-7). Special rules for partnerships. Partnerships that conduct a trade or business in the United States are generally required to pay a withholding tax under section 1446 on any foreign partners’ share of effectively  connected taxable income from such business. Further, in certain cases where a Form W-9 has not been received, the rules under section 1446 require a partnership to presume that a partner is a foreign person, and pay the section 1446 withholding tax. Therefore, if you are a U.S. person that is a partner in a partnership conducting a trade or business in the United States, provide Form W-9 to the partnership to establish your U.S. status and avoid section 1446 withholding on your share of partnership income. In the cases below, the following person must give Form W-9 to the partnership for purposes of establishing its U.S. status and avoiding  withholding on its allocable share of net income from the partnership  conducting a trade or business in the United States.   • In the case of a disregarded entity with a U.S. owner, the U.S. owner of the disregarded entity and not the entity; • In the case of a grantor trust with a U.S. grantor or other U.S. owner,  generally, the U.S. grantor or other U.S. owner of the grantor trust and  not the trust; and   • In the case of a U.S. trust (other than a grantor trust), the U.S. trust  (other than a grantor trust) and not the beneficiaries of the trust. Foreign person. If you are a foreign person or the U.S. branch of a  foreign bank that has elected to be treated as a U.S. person, do not use Form W-9. Instead, use the appropriate Form W-8 or Form 8233 (see Pub. 515, Withholding of Tax on Nonresident Aliens and Foreign Entities). Nonresident alien who becomes a resident alien. Generally, only a nonresident alien individual may use the terms of a tax treaty to reduce or eliminate U.S. tax on certain types of income. However, most tax treaties contain a provision known as a “saving clause.” Exceptions  specified in the saving clause may permit an exemption from tax to  continue for certain types of income even after the payee has otherwise become a U.S. resident alien for tax purposes.  If you are a U.S. resident alien who is relying on an exception contained in the saving clause of a tax treaty to claim an exemption from U.S. tax on certain types of income, you must attach a statement  to Form W-9 that specifies the following five items. 1. The treaty country. Generally, this must be the same treaty under which you claimed exemption from tax as a nonresident alien. 2. The treaty article addressing the income.  3. The article number (or location) in the tax treaty that contains the saving clause and its exceptions. 4. The type and amount of income that qualifies for the exemption from tax.   5. Sufficient facts to justify the exemption from tax under the terms of  the treaty article.",
        status: "desc",
      },
      {
        para: "Criminal penalty for falsifying information. Willfully falsifying certifications or affirmations may subject you to criminal penalties including fines and/or imprisonment",
        status: "desc",
      },
      {
        para: "Misuse of TINs. If the requester discloses or uses TINs in violation of  federal law, the requester may be subject to civil and  criminal penalties.",
        status: "desc",
      },
      {
        para: "Specific Instructions  ",
        status: "heading",
      },
      {
        para: "Line 1 You must enter one of the following on this line; do not leave this line  blank. The name should match the name on your tax return. If this Form W-9 is for a joint account (other than an account maintained by a foreign financial institution (FFI)), list first, and then circle, the name of the person or entity whose number you entered in Part I of Form W-9. If you are providing Form W-9 to an FFI to document a joint account, each holder of the account that is a U.S. person must provide a Form W-9. a. Individual. Generally, enter the name shown on your tax return. If you have changed your last name without informing the Social Security Administration (SSA) of the name change, enter your first name, the last name as shown on your social security card, and your new last name. Note: ITIN applicant: Enter your individual name as it was entered on your Form W-7 application, line 1a. This should also be the same as the name you entered on the Form 1040/1040A/1040EZ you filed with your application. b. Sole proprietor or single-member LLC. Enter your individual  name as shown on your 1040/1040A/1040EZ on line 1. You may enter your business, trade, or “doing business as” (DBA) name on line 2. c. Partnership, LLC that is not a single-member LLC, C corporation, or S corporation. Enter the entity's name as shown on the entity's tax return on line 1 and any business, trade, or DBA name on line 2. d. Other entities. Enter your name as shown on required U.S. federal tax documents on line 1. This name should match the name shown on the  charter or other legal document creating the entity. You may enter any business, trade, or DBA name on line 2.   e. Disregarded entity. For U.S. federal tax purposes, an entity that is disregarded as an entity separate from its owner is treated as a  “disregarded entity.” See Regulations section 301.7701-2(c)(2)(iii). Enter  the owner's name on line 1. The name of the entity entered on line 1  should never be a disregarded entity. The name on line 1 should be the   name shown on the income tax return on which the income should be  reported. For example, if a foreign LLC that is treated as a disregarded   entity for U.S. federal tax purposes has a single owner that is a U.S.   person, the U.S. owner's name is required to be provided on line 1. If  the direct owner of the entity is also a disregarded entity, enter the first  owner that is not disregarded for federal tax purposes. Enter the  disregarded entity's name on line 2, “Business name/disregarded entity   name.” If the owner of the disregarded entity is a foreign person, the  owner must complete an appropriate Form W-8 instead of a Form W-9.   This is the case even if the foreign person has a U.S. TIN.  Line 2 If you have a business name, trade name, DBA name, or disregarded  entity name, you may enter it on line 2. Line 3 Check the appropriate box on line 3 for the U.S. federal tax  classification of the person whose name is entered on line 1. Check only  one box on line 3 The following chart shows types of payments that may be exempt from backup withholding. The chart applies to the exempt payees  above, 1 through 13.",
        status: "desc",
      },
      {
        status: "table",
        parent: {
          head: [
            "IF the payment is for . . .",
            "THEN the payment is exempt for . . .",
          ],
          body: [
            {
              first: "Interest and dividend payments",
              second: "All exempt payees except   for 7",
            },
            {
              first: "Broker transactions",
              second:
                "Exempt payees 1 through 4 and 6  through 11 and all C corporations.  S corporations must not enter an  exempt payee code because they  are exempt only for sales of   noncovered securities acquired   prior to 2012. ",
            },
            {
              first: "Barter exchange transactions and  patronage dividends",
              second: "Exempt payees 1 through 4 ",
            },
            {
              first:
                "Payments over $600 required to be   reported and direct sales over     $5,0001",
              second: "Generally, exempt payees 1 through 52 ",
            },
            {
              first:
                "Payments made in settlement of  payment card or third party network transactions",
              second: "Exempt payees 1 through 4 ",
            },
          ],
        },
      },
      {
        para: "1 See Form 1099-MISC, Miscellaneous Income, and its instructions.  2 However, the following payments made to a corporation and  reportable on Form 1099-MISC are not exempt from backup  withholding: medical and health care payments, attorneys’ fees, gross   proceeds paid to an attorney reportable under section 6045(f), and   payments for services paid by a federal executive agency.  Exemption from FATCA reporting code. The following codes identify  payees that are exempt from reporting under FATCA. These codes   apply to persons submitting this form for accounts maintained outside    of the United States by certain foreign financial institutions.  Therefore, if   you are only submitting this form for an account you hold in the United States, you may leave this field blank. Consult with the person requesting this form if you are uncertain if the financial institution is subject to these requirements. A requester may indicate that a code is not required by providing you with a Form W-9 with “Not Applicable” (or any similar indication) written or printed on the line for a FATCA exemption code. A—An organization exempt from tax under section 501(a) or any individual retirement plan as defined in section 7701(a)(37) B—The United States or any of its agencies or instrumentalities  C—A state, the District of Columbia, a U.S. commonwealth or  possession, or any of their political subdivisions or instrumentalities  D—A corporation the stock of which is regularly traded on one or   more established securities markets, as described in Regulations section 1.1472-1(c)(1)(i) E—A corporation that is a member of the same expanded affiliated  as a corporation described in Regulations section 1.1472-1(c)(1)(i)  F—A dealer in securities, commodities, or derivative financial instruments (including notional principal contracts, futures, forwards, and options) that is registered as such under the laws of the United  States or any state G—A real estate investment trust  H—A regulated investment company as defined in section 851 or an entity registered at all times during the tax year under the Investment  Company Act of 1940  I—A common trust fund as defined in section 584(a)  J—A bank as defined in section 581  K—A broker   L—A trust exempt from tax under section 664 or described in section  4947(a)(1)",
        status: "desc",
      },
      {
        para: "1. Interest, dividend, and barter exchange accounts opened before 1984 and broker accounts considered active during 1983. You must give your correct TIN, but you do not have to sign the certification. 2. Interest, dividend, broker, and barter exchange accounts opened after 1983 and broker accounts considered inactive during  1983. You must sign the certification or backup withholding will apply. If you are subject to backup withholding and you are merely providing  your correct TIN to the requester, you must cross out item 2 in the certification before signing the form. 3. Real estate transactions. You must sign the certification. You may cross out item 2 of the certification. 4. Other payments. You must give your correct TIN, but you do not have to sign the certification unless you have been notified that you have previously given an incorrect TIN. “Other payments” include  payments made in the course of the requester’s trade or business for rents, royalties, goods (other than bills for merchandise), medical and health care services (including payments to corporations), payments to a nonemployee for services, payments made in settlement of payment  card and third party network transactions, payments to certain fishing boat crew members and fishermen, and gross proceeds paid to  attorneys (including payments to corporations). 5. Mortgage interest paid by you, acquisition or abandonment of secured property, cancellation of debt, qualified tuition program payments (under section 529), ABLE accounts (under section 529A), IRA, Coverdell ESA, Archer MSA or HSA contributions or distributions, and pension distributions. You must give your correct TIN, but you do not have to sign the certification.",
        status: "desc",
      },
      {
        status: "heading",
        para: "What Name and Number To Give the Requester",
      },
      {
        status: "table",
        parent: {
          head: ["For this type of account", "Give name and SSN of"],
          body: [
            {
              first: "1. Individual",
              second: "The individual",
            },
            {
              first:
                "2. Two or more individuals (joint account) other than an account  maintained by an FFI",
              second:
                "The actual owner of the account or, if combined funds, the first individual on the account",
            },
            {
              first:
                "3. Two or more U.S. persons  (joint account maintained by an FFI)",
              second: " Each holder of the account",
            },
            {
              first:
                "4. Custodial account of a minor (Uniform Gift to Minors Act)  ",
              second: "The minor2 ",
            },
            {
              first:
                "5. a. The usual revocable savings trust (grantor is also trustee) b. So-called trust account that is not a legal or valid trust under state law",
              second: "The grantor-trustee The actual owner",
            },
            {
              first:
                "6. Sole proprietorship or disregarded entity owned by an individual",
              second: "The owner3",
            },
            {
              first:
                "7. Grantor trust filing under Optional  Form 1099 Filing Method 1 (see  Regulations section 1.671-4(b)(2)(i)",
              second: "The grantor*",
            },
          ],
        },
      },
      {
        status: "table",
        parent: {
          head: ["For this type of account:", "Give name and EIN of:"],
          body: [
            {
              first: "8. Disregarded entity not owned by an individual",
              second: "The owner  ",
            },
            {
              first: "9. A valid trust, estate, or pension trust",
              second: "Legal entity4",
            },
            {
              first:
                "10. Corporation or LLC electing corporate status on Form 8832 or Form 2553",
              second: "The corporation",
            },
            {
              first:
                "11. Association, club, religious, charitable, educational, or other taxexempt organization",
              second: "The organization",
            },
            {
              first: "12. Partnership or multi-member LLC",
              second: "The partnership",
            },
            {
              first: "13. A broker or registered nominee ",
              second: "The broker or nominee",
            },
          ],
        },
      },
      ,
      {
        para: "The IRS does not initiate contacts with taxpayers via emails. Also, the IRS does not request personal detailed information through email or ask taxpayers for the PIN numbers, passwords, or similar secret access information for their credit card, bank, or other financial accounts. If you receive an unsolicited email claiming to be from the IRS, forward this message to phishing@irs.gov. You may also report misuse of the IRS name, logo, or other IRS property to the Treasury Inspector General for Tax Administration (TIGTA) at 1-800-366-4484. You can forward suspicious emails to the Federal Trade Commission at spam@uce.gov or report them at www.ftc.gov/complaint. You can contact the FTC at www.ftc.gov/idtheft or 877-IDTHEFT (877-438-4338). If you have been the victim of identity theft, see www.IdentityTheft. gov and Pub. 5027. Visit www.irs.gov/IdentityTheft to learn more about identity theft and how to reduce your risk.",
        status: "desc",
      },
    ],
    secondItem: [
      {
        para: "• Form 1099-DIV (dividends, including those from stocks or mutual funds) • Form 1099-MISC (various types of income, prizes, awards, or gross proceeds) • Form 1099-B (stock or mutual fund sales and certain other transactions by brokers) • Form 1099-S (proceeds from real estate transactions) • Form 1099-K (merchant card and third party network transactions) • Form 1098 (home mortgage interest), 1098-E (student loan interest), 1098-T (tuition) • Form 1099-C (canceled debt) • Form 1099-A (acquisition or abandonment of secured property) Use Form W-9 only if you are a U.S. person (including a resident alien), to provide your correct TIN. If you do not return Form W-9 to the requester with a TIN, you might be subject to backup withholding. See What is backup withholding, later.",
        status: "desc",
      },
      {
        para: "Example. Article 20 of the U.S.-China income tax treaty allows an  exemption from tax for scholarship income received by a Chinese student temporarily present in the United States. Under U.S. law, this student will become a resident alien for tax purposes if his or her  stay in the United States exceeds 5 calendar years. However, paragraph 2 of the first Protocol to the U.S.-China treaty (dated April 30, 1984) allows the provisions of Article 20 to continue to apply even after the  Chinese student becomes a resident alien of the United States. A Chinese student who qualifies for this exception (under paragraph 2 of the  first protocol) and is relying on this exception to claim an exemption from tax on his or her scholarship or fellowship income would attach to Form  W-9 a statement that includes the information described above to support that exemption If you are a nonresident alien or a foreign entity, give the requester the appropriate completed Form W-8 or Form 8233.",
        status: "desc",
      },
      {
        para: "Backup Withholding .",
        status: "heading",
      },
      {
        para: "What is backup withholding? Persons making certain payments to you must under certain conditions withhold and pay to the IRS 24% of such payments. This is called “backup withholding.” Payments that may be  subject to backup withholding include interest, tax-exempt interest,  dividends, broker and barter exchange transactions, rents, royalties, nonemployee pay, payments made in settlement of payment card and third party network transactions, and certain payments from fishing boat operators. Real estate transactions are not subject to backup  withholding. You will not be subject to backup withholding on payments you  receive if you give the requester your correct TIN, make the proper certifications, and report all your taxable interest and dividends on your  tax return.
        Payments you receive will be subject to backup withholding if:
        1. You do not furnish your TIN to the requester,
        2. You do not certify your TIN when required (see the instructions for
        Part II for details),
        3. The IRS tells the requester that you furnished an incorrect TIN,
        4. The IRS tells you that you are subject to backup withholding
        because you did not report all your interest and dividends on your tax
        return (for reportable interest and dividends only), or
        5. You do not certify to the requester that you are not subject to
        backup withholding under 4 above (for reportable interest and dividend
        accounts opened after 1983 only).
        Certain payees and payments are exempt from backup withholding.
        See Exempt payee code, later, and the separate Instructions for the
        Requester of Form W-9 for more information.
        Also see Special rules for partnerships, earlier.",
        status: "desc",
      },
      {
        para: "An individual or entity (Form W-9 requester) who is required to file an information return with the IRS must obtain your correct taxpayer  identification number (TIN) which may be your social security number (SSN), individual taxpayer identification number (ITIN), adoption taxpayer identification number (ATIN), or employer identification number (EIN), to report on an information return the amount paid to you, or other amount reportable on an information return. Examples of information returns include, but are not limited to, the following.",
        status: "desc",
      },
      {
        para: "By signing the filled-out form, you: 1. Certify that the TIN you are giving is correct (or you are waiting for a number to be issued), 2. Certify that you are not subject to backup withholding, or 3. Claim exemption from backup withholding if you are a U.S. exempt  payee. If applicable, you are also certifying that as a U.S. person, your  allocable share of any partnership income from a U.S. trade or business is not subject to the withholding tax on foreign partners' share of  effectively connected income, and  4. Certify that FATCA code(s) entered on this form (if any) indicating that you are exempt from the FATCA reporting, is correct. See What is FATCA reporting, later, for further information. Note: If you are a U.S. person and a requester gives you a form other  than Form W-9 to request your TIN, you must use the requester’s form if  it is substantially similar to this Form W-9. Definition of a U.S. person. For federal tax purposes, you are  considered a U.S. person if you are: • An individual who is a U.S. citizen or U.S. resident alien; • A partnership, corporation, company, or association created or organized in the United States or under the laws of the United States; • An estate (other than a foreign estate); or • A domestic trust (as defined in Regulations section 301.7701-7). Special rules for partnerships. Partnerships that conduct a trade or business in the United States are generally required to pay a withholding tax under section 1446 on any foreign partners’ share of effectively  connected taxable income from such business. Further, in certain cases where a Form W-9 has not been received, the rules under section 1446 require a partnership to presume that a partner is a foreign person, and pay the section 1446 withholding tax. Therefore, if you are a U.S. person that is a partner in a partnership conducting a trade or business in the United States, provide Form W-9 to the partnership to establish your U.S. status and avoid section 1446 withholding on your share of partnership income. In the cases below, the following person must give Form W-9 to the partnership for purposes of establishing its U.S. status and avoiding  withholding on its allocable share of net income from the partnership  conducting a trade or business in the United States.   • In the case of a disregarded entity with a U.S. owner, the U.S. owner of the disregarded entity and not the entity; • In the case of a grantor trust with a U.S. grantor or other U.S. owner,  generally, the U.S. grantor or other U.S. owner of the grantor trust and  not the trust; and   • In the case of a U.S. trust (other than a grantor trust), the U.S. trust  (other than a grantor trust) and not the beneficiaries of the trust. Foreign person. If you are a foreign person or the U.S. branch of a  foreign bank that has elected to be treated as a U.S. person, do not use Form W-9. Instead, use the appropriate Form W-8 or Form 8233 (see Pub. 515, Withholding of Tax on Nonresident Aliens and Foreign Entities). Nonresident alien who becomes a resident alien. Generally, only a nonresident alien individual may use the terms of a tax treaty to reduce or eliminate U.S. tax on certain types of income. However, most tax treaties contain a provision known as a “saving clause.” Exceptions  specified in the saving clause may permit an exemption from tax to  continue for certain types of income even after the payee has otherwise become a U.S. resident alien for tax purposes.  If you are a U.S. resident alien who is relying on an exception contained in the saving clause of a tax treaty to claim an exemption from U.S. tax on certain types of income, you must attach a statement  to Form W-9 that specifies the following five items. 1. The treaty country. Generally, this must be the same treaty under which you claimed exemption from tax as a nonresident alien. 2. The treaty article addressing the income.  3. The article number (or location) in the tax treaty that contains the saving clause and its exceptions. 4. The type and amount of income that qualifies for the exemption from tax.   5. Sufficient facts to justify the exemption from tax under the terms of  the treaty article.",
        status: "desc",
      },
      {
        para: "Criminal penalty for falsifying information. Willfully falsifying certifications or affirmations may subject you to criminal penalties including fines and/or imprisonment",
        status: "desc",
      },
      {
        para: "Misuse of TINs. If the requester discloses or uses TINs in violation of  federal law, the requester may be subject to civil and  criminal penalties.",
        status: "desc",
      },
      {
        para: "Specific Instructions  ",
        status: "heading",
      },
      {
        para: "Line 1 You must enter one of the following on this line; do not leave this line  blank. The name should match the name on your tax return. If this Form W-9 is for a joint account (other than an account maintained by a foreign financial institution (FFI)), list first, and then circle, the name of the person or entity whose number you entered in Part I of Form W-9. If you are providing Form W-9 to an FFI to document a joint account, each holder of the account that is a U.S. person must provide a Form W-9. a. Individual. Generally, enter the name shown on your tax return. If you have changed your last name without informing the Social Security Administration (SSA) of the name change, enter your first name, the last name as shown on your social security card, and your new last name. Note: ITIN applicant: Enter your individual name as it was entered on your Form W-7 application, line 1a. This should also be the same as the name you entered on the Form 1040/1040A/1040EZ you filed with your application. b. Sole proprietor or single-member LLC. Enter your individual  name as shown on your 1040/1040A/1040EZ on line 1. You may enter your business, trade, or “doing business as” (DBA) name on line 2. c. Partnership, LLC that is not a single-member LLC, C corporation, or S corporation. Enter the entity's name as shown on the entity's tax return on line 1 and any business, trade, or DBA name on line 2. d. Other entities. Enter your name as shown on required U.S. federal tax documents on line 1. This name should match the name shown on the  charter or other legal document creating the entity. You may enter any business, trade, or DBA name on line 2.   e. Disregarded entity. For U.S. federal tax purposes, an entity that is disregarded as an entity separate from its owner is treated as a  “disregarded entity.” See Regulations section 301.7701-2(c)(2)(iii). Enter  the owner's name on line 1. The name of the entity entered on line 1  should never be a disregarded entity. The name on line 1 should be the   name shown on the income tax return on which the income should be  reported. For example, if a foreign LLC that is treated as a disregarded   entity for U.S. federal tax purposes has a single owner that is a U.S.   person, the U.S. owner's name is required to be provided on line 1. If  the direct owner of the entity is also a disregarded entity, enter the first  owner that is not disregarded for federal tax purposes. Enter the  disregarded entity's name on line 2, “Business name/disregarded entity   name.” If the owner of the disregarded entity is a foreign person, the  owner must complete an appropriate Form W-8 instead of a Form W-9.   This is the case even if the foreign person has a U.S. TIN.  Line 2 If you have a business name, trade name, DBA name, or disregarded  entity name, you may enter it on line 2. Line 3 Check the appropriate box on line 3 for the U.S. federal tax  classification of the person whose name is entered on line 1. Check only  one box on line 3 The following chart shows types of payments that may be exempt from backup withholding. The chart applies to the exempt payees  above, 1 through 13.",
        status: "desc",
      },
      {
        status: "table",
        parent: {
          head: [
            "IF the payment is for . . .",
            "THEN the payment is exempt for . . .",
          ],
          body: [
            {
              first: "Interest and dividend payments",
              second: "All exempt payees except   for 7",
            },
            {
              first: "Broker transactions",
              second:
                "Exempt payees 1 through 4 and 6  through 11 and all C corporations.  S corporations must not enter an  exempt payee code because they  are exempt only for sales of   noncovered securities acquired   prior to 2012. ",
            },
            {
              first: "Barter exchange transactions and  patronage dividends",
              second: "Exempt payees 1 through 4 ",
            },
            {
              first:
                "Payments over $600 required to be   reported and direct sales over     $5,0001",
              second: "Generally, exempt payees 1 through 52 ",
            },
            {
              first:
                "Payments made in settlement of  payment card or third party network transactions",
              second: "Exempt payees 1 through 4 ",
            },
          ],
        },
      },
      {
        para: "1 See Form 1099-MISC, Miscellaneous Income, and its instructions.  2 However, the following payments made to a corporation and  reportable on Form 1099-MISC are not exempt from backup  withholding: medical and health care payments, attorneys’ fees, gross   proceeds paid to an attorney reportable under section 6045(f), and   payments for services paid by a federal executive agency.  Exemption from FATCA reporting code. The following codes identify  payees that are exempt from reporting under FATCA. These codes   apply to persons submitting this form for accounts maintained outside    of the United States by certain foreign financial institutions.  Therefore, if   you are only submitting this form for an account you hold in the United States, you may leave this field blank. Consult with the person requesting this form if you are uncertain if the financial institution is subject to these requirements. A requester may indicate that a code is not required by providing you with a Form W-9 with “Not Applicable” (or any similar indication) written or printed on the line for a FATCA exemption code. A—An organization exempt from tax under section 501(a) or any individual retirement plan as defined in section 7701(a)(37) B—The United States or any of its agencies or instrumentalities  C—A state, the District of Columbia, a U.S. commonwealth or  possession, or any of their political subdivisions or instrumentalities  D—A corporation the stock of which is regularly traded on one or   more established securities markets, as described in Regulations section 1.1472-1(c)(1)(i) E—A corporation that is a member of the same expanded affiliated  as a corporation described in Regulations section 1.1472-1(c)(1)(i)  F—A dealer in securities, commodities, or derivative financial instruments (including notional principal contracts, futures, forwards, and options) that is registered as such under the laws of the United  States or any state G—A real estate investment trust  H—A regulated investment company as defined in section 851 or an entity registered at all times during the tax year under the Investment  Company Act of 1940  I—A common trust fund as defined in section 584(a)  J—A bank as defined in section 581  K—A broker   L—A trust exempt from tax under section 664 or described in section  4947(a)(1)",
        status: "desc",
      },
      {
        para: "1. Interest, dividend, and barter exchange accounts opened before 1984 and broker accounts considered active during 1983. You must give your correct TIN, but you do not have to sign the certification. 2. Interest, dividend, broker, and barter exchange accounts opened after 1983 and broker accounts considered inactive during  1983. You must sign the certification or backup withholding will apply. If you are subject to backup withholding and you are merely providing  your correct TIN to the requester, you must cross out item 2 in the certification before signing the form. 3. Real estate transactions. You must sign the certification. You may cross out item 2 of the certification. 4. Other payments. You must give your correct TIN, but you do not have to sign the certification unless you have been notified that you have previously given an incorrect TIN. “Other payments” include  payments made in the course of the requester’s trade or business for rents, royalties, goods (other than bills for merchandise), medical and health care services (including payments to corporations), payments to a nonemployee for services, payments made in settlement of payment  card and third party network transactions, payments to certain fishing boat crew members and fishermen, and gross proceeds paid to  attorneys (including payments to corporations). 5. Mortgage interest paid by you, acquisition or abandonment of secured property, cancellation of debt, qualified tuition program payments (under section 529), ABLE accounts (under section 529A), IRA, Coverdell ESA, Archer MSA or HSA contributions or distributions, and pension distributions. You must give your correct TIN, but you do not have to sign the certification.",
        status: "desc",
      },
      {
        status: "heading",
        para: "What Name and Number To Give the Requester",
      },
      {
        status: "table",
        parent: {
          head: ["For this type of account", "Give name and SSN of"],
          body: [
            {
              first: "1. Individual",
              second: "The individual",
            },
            {
              first:
                "2. Two or more individuals (joint account) other than an account  maintained by an FFI",
              second:
                "The actual owner of the account or, if combined funds, the first individual on the account",
            },
            {
              first:
                "3. Two or more U.S. persons  (joint account maintained by an FFI)",
              second: " Each holder of the account",
            },
            {
              first:
                "4. Custodial account of a minor (Uniform Gift to Minors Act)  ",
              second: "The minor2 ",
            },
            {
              first:
                "5. a. The usual revocable savings trust (grantor is also trustee) b. So-called trust account that is not a legal or valid trust under state law",
              second: "The grantor-trustee The actual owner",
            },
            {
              first:
                "6. Sole proprietorship or disregarded entity owned by an individual",
              second: "The owner3",
            },
            {
              first:
                "7. Grantor trust filing under Optional  Form 1099 Filing Method 1 (see  Regulations section 1.671-4(b)(2)(i)",
              second: "The grantor*",
            },
          ],
        },
      },
      {
        status: "table",
        parent: {
          head: ["For this type of account:", "Give name and EIN of:"],
          body: [
            {
              first: "8. Disregarded entity not owned by an individual",
              second: "The owner  ",
            },
            {
              first: "9. A valid trust, estate, or pension trust",
              second: "Legal entity4",
            },
            {
              first:
                "10. Corporation or LLC electing corporate status on Form 8832 or Form 2553",
              second: "The corporation",
            },
            {
              first:
                "11. Association, club, religious, charitable, educational, or other taxexempt organization",
              second: "The organization",
            },
            {
              first: "12. Partnership or multi-member LLC",
              second: "The partnership",
            },
            {
              first: "13. A broker or registered nominee ",
              second: "The broker or nominee",
            },
          ],
        },
      },
      ,
      {
        para: "The IRS does not initiate contacts with taxpayers via emails. Also, the IRS does not request personal detailed information through email or ask taxpayers for the PIN numbers, passwords, or similar secret access information for their credit card, bank, or other financial accounts. If you receive an unsolicited email claiming to be from the IRS, forward this message to phishing@irs.gov. You may also report misuse of the IRS name, logo, or other IRS property to the Treasury Inspector General for Tax Administration (TIGTA) at 1-800-366-4484. You can forward suspicious emails to the Federal Trade Commission at spam@uce.gov or report them at www.ftc.gov/complaint. You can contact the FTC at www.ftc.gov/idtheft or 877-IDTHEFT (877-438-4338). If you have been the victim of identity theft, see www.IdentityTheft. gov and Pub. 5027. Visit www.irs.gov/IdentityTheft to learn more about identity theft and how to reduce your risk.",
        status: "desc",
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
        title={"Request for Taxpayer Identification Number and Certification"}
        isArrow={true}
      />

      <Container className="full-width-container">
        <form className="w-100 text-start">
          <p className="fw-bold text-center">
            ▶ Go to www.irs.gov/FormW9 for instructions and the latest
            information.
          </p>
          <div className="grid-container">
            <div className="grid-item full-wid-input">
              <label>
                Name (as shown on your income tax return). Name is required on
                this line; do not leave this line blank.
              </label>
              <BorderlessInput
                setState={setName}
                placeholder={""}
                type={"text"}
                value={name}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label>
                Business name/disregarded entity name, if different from above
              </label>
              <BorderlessInput
                setState={setBusinessName}
                placeholder={""}
                type={"text"}
                value={businessName}
              />
            </div>

            <div className="grid-item full-wid-input d-block">
              <label>
                Check appropriate box for federal tax classification of the
                person whose name is entered on line 1. Check only one of the
                following seven boxes.
              </label>
              <div className="mt-2">
                <CheckBoxMaker
                  setValue={setTaxClassification}
                  value={"Individual/sole proprietor or single-member LLC"}
                  label={"Individual/sole proprietor or single-member LLC"}
                  checked={
                    taxClassification ===
                    "Individual/sole proprietor or single-member LLC"
                  }
                  id={"taxClassification"}
                />
                <CheckBoxMaker
                  setValue={setTaxClassification}
                  value={"C Corporation"}
                  label={"C Corporation"}
                  checked={taxClassification === "C Corporation"}
                  id={"taxClassification1"}
                />
                <CheckBoxMaker
                  setValue={setTaxClassification}
                  value={"S Corporation"}
                  label={"S Corporation"}
                  checked={taxClassification === "S Corporation"}
                  id={"taxClassification2"}
                />
                <CheckBoxMaker
                  setValue={setTaxClassification}
                  value={"Partnership"}
                  label={"Partnership"}
                  checked={taxClassification === "Partnership"}
                  id={"taxClassification3"}
                />
                <CheckBoxMaker
                  setValue={setTaxClassification}
                  value={"Trust/estate"}
                  label={"Trust/estate"}
                  checked={taxClassification === "Trust/estate"}
                  id={"taxClassification4"}
                />
              </div>
            </div>
            <div className="grid-item full-wid-input">
              <CheckBoxMaker
                setValue={setLLCTaxClassification}
                value={!llcTaxClassification}
                label={
                  "Limited liability company. Enter the tax classification (C=C corporation, S=S corporation, P=Partnership)"
                }
                checked={llcTaxClassification}
                id={"llcTaxClassification"}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>
                Note: Check the appropriate box in the line above for the tax
                classification of the single-member owner. Do not check LLC if
                the LLC is classified as a single-member LLC that is disregarded
                from the owner unless the owner of the LLC is another LLC that
                is not disregarded from the owner for U.S. federal tax purposes.
                Otherwise, a single-member LLC that is disregarded from the
                owner should check the appropriate box for the tax
                classification of its owner.
              </label>
            </div>
            <div className="grid-item full-wid-input">
              <CheckBoxMaker
                setValue={setOther}
                value={!other}
                label={"Other (see instructions)"}
                checked={other}
                id={"other"}
              />
            </div>
            <div className="grid-item full-wid-input">
              <label>
                Exemptions (codes apply only to certain entities, not
                individuals; see instructions on page 3):
              </label>
            </div>
            <div className="grid-item long-input">
              <label>Exempt payee code (if any)</label>
              <BorderlessInput
                setState={setExemptionsPayeeCode}
                placeholder={""}
                type={"text"}
                value={exemptionsPayeeCode}
              />
            </div>
            <div className="grid-item long-input">
              <label>Exemption from FATCA reporting code (if any)</label>
              <BorderlessInput
                setState={setExemptionsFatCaExemptionCode}
                placeholder={""}
                type={"text"}
                value={exemptionsFatCaExemptionCode}
              />
            </div>

            <div className="grid-item long-input">
              <label>
                Address (number, street, and apt. or suite no.) See instructions
                :
              </label>
              <BorderlessInput
                setState={setStreet}
                placeholder={""}
                type={"text"}
                value={street}
              />
            </div>
            <div className="grid-item">
              <label>City:</label>
              <BorderlessInput
                setState={setCity}
                placeholder={""}
                type={"text"}
                value={city}
              />
            </div>
            <div className="grid-item">
              <label>State:</label>
              <BorderlessInput
                setState={setState}
                placeholder={""}
                type={"text"}
                value={state}
              />
            </div>
            <div className="grid-item">
              <label>ZIP Code:</label>
              <BorderlessInput
                setState={setZipCode}
                placeholder={""}
                type={"text"}
                value={zipCode}
              />
            </div>
            <div className="grid-item third-wid-input">
              <label>List account number(s) here (optional) :</label>
              <BorderlessInput
                setState={setAccountNumbers}
                placeholder={""}
                type={"text"}
                value={accountNumbers}
              />
            </div>
            <div className="grid-item long-input">
              <label>Requester’s name (optional)</label>
              <BorderlessInput
                setState={setRequesterName}
                placeholder={""}
                type={"text"}
                value={requesterName}
              />
            </div>
            <div className="grid-item long-input">
              <label>Requester’s address (optional)</label>
              <BorderlessInput
                setState={setRequesterAddress}
                placeholder={""}
                type={"text"}
                value={requesterAddress}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label className="heading">
                Taxpayer Identification Number (TIN)
              </label>
            </div>

            <div className="grid-item full-wid-input">
              <label>
                Enter your TIN in the appropriate box. The TIN provided must
                match the name given on line 1 to avoid backup withholding. For
                individuals, this is generally your social security number
                (SSN). However, for a resident alien, sole proprietor, or
                disregarded entity, see the instructions for Part I, later. For
                other entities, it is your employer identification number (EIN).
                If you do not have a number, see How to get a TIN, later. <br />{" "}
                Note: If the account is in more than one name, see the
                instructions for line 1. Also see What Name and Number To Give
                the Requester for guidelines on whose number to enter.
              </label>
            </div>
            <div className="grid-item long-input">
              <label>Social security number</label>
              <BorderlessInput
                setState={setTinSsn}
                placeholder={""}
                type={"text"}
                value={tinSsn}
              />
            </div>
            <div className="grid-item long-input">
              <label>Employer identification number</label>
              <BorderlessInput
                setState={setTinEin}
                placeholder={""}
                type={"text"}
                value={tinEin}
              />
            </div>

            <div className="grid-item full-wid-input">
              <label className="heading">Certification</label>
            </div>
            <div className="grid-item full-wid-input">
              <label>
                Under penalties of perjury, I certify that: <br /> 1. The number
                shown on this form is my correct taxpayer identification number
                (or I am waiting for a number to be issued to me); and <br /> 2.
                I am not subject to backup withholding because: (a) I am exempt
                from backup withholding, or (b) I have not been notified by the
                Internal Revenue Service (IRS) that I am subject to backup
                withholding as a result of a failure to report all interest or
                dividends, or (c) the IRS has notified me that I am no longer
                subject to backup withholding; and <br /> 3. I am a U.S. citizen
                or other U.S. person (defined below); and <br /> 4. The FATCA
                code(s) entered on this form (if any) indicating that I am
                exempt from FATCA reporting is correct. <br /> Certification
                instructions. You must cross out item 2 above if you have been
                notified by the IRS that you are currently subject to backup
                withholding because you have failed to report all interest and
                dividends on your tax return. For real estate transactions, item
                2 does not apply. For mortgage interest paid, acquisition or
                abandonment of secured property, cancellation of debt,
                contributions to an individual retirement arrangement (IRA), and
                generally, payments other than interest and dividends, you are
                not required to sign the certification, but you must provide
                your correct TIN. See the instructions for Part II, later.
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
                <div>{signature && <p>Digitally Sign by {signature} </p>}</div>
              </div>
            </div>

            <div className="grid-item">
              <label>Date:</label>
              <BorderlessInput
                setState={setDate}
                placeholder={""}
                type={"date"}
                value={DateFormatter(date)}
              />
            </div>
          </div>
          <div className="instruction-content">
            <div className="deivider">
              <div className="items">
                {content?.firstItem?.map((i, index) => (
                  <div key={index}>
                    <p className="heading">
                      {" "}
                      {i.status === "heading" && i.para}{" "}
                    </p>
                    <p className="desc"> {i.status === "desc" && i.para} </p>
                    {i.status === "table" && (
                      <table className="text-start under-table">
                        <thead>
                          <tr>
                            {i.parent?.head?.map((i, index) => (
                              <th key={index}> {i} </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {i.parent?.body?.map((i, index) => (
                            <tr key={index}>
                              <td> {i.first} </td>
                              <td> {i.second} </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                ))}
              </div>
              <div className="items">
                {content?.secondItem?.map((i, index) => (
                  <div key={index}>
                    <p className="heading">
                      {" "}
                      {i.status === "heading" && i.para}{" "}
                    </p>
                    <p className="desc"> {i.status === "desc" && i.para} </p>
                    {i.status === "table" && (
                      <table className="text-start under-table">
                        <thead>
                          <tr>
                            {i.parent?.head?.map((i, index) => (
                              <th key={index}> {i} </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {i.parent?.body?.map((i, index) => (
                            <tr key={index}>
                              <td> {i.first} </td>
                              <td> {i.second} </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </Container>

      <div className="main-div-personal important">
        <div className="top-div-personal">
          <Form
            onSubmit={handleSubmit}
            id="form-appendix"
            className="form-personal offer-letter appendix1"
          >
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
