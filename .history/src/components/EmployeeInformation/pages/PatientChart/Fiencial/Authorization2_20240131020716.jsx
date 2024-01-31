/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData, postData } from "../../../../api/api";
import { showMsg } from "../../../../api/ShowMsg";
import { SelectMaker } from "../../../../../Helper/Makers";

const Authorization2 = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [patientId, setPatientId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [authorizedPersonName, setAuthorizedPersonName] = useState("");
  const [authorizedPersonAgency, setAuthorizedPersonAgency] = useState("");
  const [authorizedPersonAddress, setAuthorizedPersonAddress] = useState("");
  const [authorizedPersonPhone, setAuthorizedPersonPhone] = useState("");
  const [authorizedPersonFax, setAuthorizedPersonFax] = useState("");
  const [authorizedPersonEmail, setAuthorizedPersonEmail] = useState("");
  const [dropDown, setDropDown] = useState([]);
  const [purposeOfDisclosure, setPurposeOfDisclosure] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [expirationFrom, setExpirationFrom] = useState("");
  const [expirationTo, setExpirationTo] = useState("");
  const [revocation, setRevocation] = useState("");
  const [specify, setSpecify] = useState("");
  const [signature, setSignature] = useState("");
  const [dateSigned, setDateSigned] = useState("");
  const [relationshipToPerson, setRelationshipToPerson] = useState("");
  const [witness, setWitness] = useState("");

  const getAllPatents = () => {
    getData(setData, `employee/getPatient`);
  };
  useEffect(() => {
    getAllPatents();
  }, []);

  const initialData = {
    patientId: "",
    residentName: "",
    dateOfBirth: "",
    authorizedPersonName: "",
    authorizedPersonAgency: "",
    authorizedPersonAddress: "",
    authorizedPersonPhone: "",
    authorizedPersonFax: "",
    authorizedPersonEmail: "",
    dropDown: ["Mental Health", "Substance abuse"],
    purposeOfDisclosure: "",
    companyName: "",
    expirationFrom: "",
    expirationTo: "",
    revocation: "",
    specify: "",
    signature: "",
    dateSigned: "",
    relationshipToPerson: "",
    witness: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "patientId") {
      setFormData((prevData) => ({
        ...prevData,
        residentName: data?.data?.find((patient) => patient._id === value)
          ?.fullName,
      }));
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      Object.keys(formData).filter((key) => formData[key] === "").length > 0
    ) {
      return showMsg(
        "Error",
        `${Object.keys(formData)
          .filter((key) => formData[key] === "")
          .join(",")}  cannot be empty`,
        "danger"
      );
    }
    postData("employee/createAuthorizationForReleaseOfInformation", formData);
    setFormData(initialData);
    navigate("/employee/patient-chart/authorization");
  };

  const selectHandler = (e) => {
    const obj = JSON.parse(e);
    setPatientId(obj?._id);
    setResidentName(obj?.fullName);
  };

  const dropdownOptions = [
    {
      label:  "Mental Health" , 
      value : "Mental Health"
    },
    {
      label:  "Substance abuse" , 
      value : "Substance abuse"
    },
    {
      label:  "Medical information" , 
      value : "Medical information"
    },
    {
      label:  "Pharmacy" , 
      value : "Pharmacy"
    },
    {
      label:  "Current medication" , 
      value : "Current medication"
    },
    {
      label:  "Psychotherapy notes" , 
      value : "Psychotherapy notes"
    },
    {
      label:  "Progress notes" , 
      value : "Progress notes"
    },
    {
      label:  "Immunization records" , 
      value : "Immunization records"
    },
  ]

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/patient-chart/authorization")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            AUTHORIZATION FOR RELEASE OF INFORMATION
          </p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Resident Name:
            </Form.Label>
            <Form.Select
              required
              onChange={(e) => selectHandler(e.target.value)}
            >
              <option value={JSON.stringify("")}>Select</option>
              {data?.data?.map((patient) => (
                <option value={JSON.stringify(patient)}>
                  {patient.fullName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date Of Birth:
            </Form.Label>
            <Form.Control
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
              type="date"
              placeholder="Enter text"
            />
          </Form.Group>

          <div className="mixed_input mb-3">
            Authorize
            <span>
              <input
                type="text"
                required
                placeholder="Employee Name"
                onChange={(e) => setAuthorizedPersonName(e.target.value)}
              />
            </span>
            to release the information described below to: Person and Agency
            (recipient)
          </div>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Address :
            </Form.Label>
            <Form.Control
              onChange={(e) => setAuthorizedPersonAddress(e.target.value)}
              type="text"
              required
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Phone :
            </Form.Label>
            <Form.Control
              type="tel"
              required
              onChange={(e) => setAuthorizedPersonPhone(e.target.value)}
              placeholder="Enter number"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Fax:
            </Form.Label>
            <Form.Control
              onChange={(e) => setAuthorizedPersonFax(e.target.value)}
              type="text"
              required
              placeholder="Enter text"
            />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Email:
            </Form.Label>
            <Form.Control
              onChange={(e) => setAuthorizedPersonEmail(e.target.value)}
              type="email"
              required
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Agency Name:
            </Form.Label>
            <Form.Control
              onChange={(e) => setAuthorizedPersonAgency(e.target.value)}
              type="text"
              required
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Company Name:
            </Form.Label>
            <Form.Control
              onChange={(e) => setCompanyName(e.target.value)}
              type="text"
              required
              placeholder="Enter text"
            />
          </Form.Group>

          <p>
            Notice to Recipient: This information has been disclosed to you from
            records that Federal law protects. These records are not subject to
            re disclosure. Federal regulations (42 CFR Part 2) prohibit you from
            making further disclosure of Substance Abuse Information without
            this specific written consent of the person to whom it pertains, or
            as otherwise permitted by such regulations. A general authorization
            for the release of medical or other information is not sufficient
            for this purpose.
          </p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              I authorize to release the following Information below:
            </Form.Label>
            <SelectMaker setValue={setDropDown} value={dropDown} label={'  I authorize to release the following Information below'} 
            options={}
             />
            <Form.Control
              name="purposeOfDisclosure"
              onChange={handleChange}
              as="textarea"
              rows={3}
              placeholder="Enter text"
            />
          </Form.Group>
          <p style={{ fontWeight: "bold" }}>Purpose of Disclosure:</p>
          <p>
            I understand that at anytime, I may revoke this authorization by
            writing to Company Name .This revocation will be effective except to
            the extent that action based on this authorization has already been
            taken. This authorization for release of information will expire:
            <input
              type="date"
              name="expirationTo"
              placeholder="____"
              onChange={handleChange}
            />{" "}
            One year from date{" "}
            <input
              type="date"
              name="expirationFrom"
              onChange={handleChange}
              placeholder="___________"
            />{" "}
            60 Days (Substance Abuse Services){" "}
            <input
              type="text"
              onChange={handleChange}
              name="revocation"
              placeholder="________"
            />{" "}
            Other (specify)
            <input
              type="text"
              onChange={handleChange}
              name="specify"
              placeholder="________"
            />{" "}
            By signing below, I acknowledge that I have read and understand this
            document. I have given authorization to my provider to disclose my
            records. I understand that my information being disclosed to the
            receiving agency may no longer be protected under the terms of this
            agreement.
          </p>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Signature of Individual/Guardian:
            </Form.Label>
            <Form.Control
              name="signature"
              onChange={handleChange}
              type="text"
              placeholder="Enter text"
            />
          </Form.Group>
          {/* <div
            style={{ maxWidth: "370px", width: "auto" }}
            className="save-as-draft-btn-personal"
          >
            <div>
              <img
                style={{ height: "80%", width: "100%", border: "1px " }}
                src="/Dashboard/save.png"
                alt=""
              />
            </div>
            <div className="save-as-draft-btn">
              <button style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}>
                SAVE AS DRAFT
              </button>
              <button style={{ backgroundColor: "#0C5C75", color: "white" }}>
                SAVED AND SIGNED
              </button>
            </div>
          </div> */}
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date Signed:
            </Form.Label>
            <Form.Control
              name="dateSigned"
              onChange={handleChange}
              type="date"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Relationship to Person:
            </Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="relationshipToPerson"
              placeholder="Enter text"
            />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Witness:
            </Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="witness"
              placeholder="Enter text"
            />
          </Form.Group>

          <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
            <button
              style={{
                padding: "10px 24px",
                backgroundColor: "#1A9FB2",
                color: "white",
                marginTop: "1rem",
              }}
              type="submit"
            >
              PRINT REPORT
            </button>
          </div>
          <div className="save-as-draft-btn123">
            <button className="btn1233" onClick={submitHandler} type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authorization2;
