/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { showMsg } from "../../../api/ShowMsg";
import { postApi } from "../../../../Repository/Apis";

const ContactChart2 = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [patientId, setPatientId] = useState("");
  const [residentName, setResidentName] = useState("");
  const [guardian, setGuardian] = useState("");
  const [caseManager, setCaseManager] = useState("");
  const [pharmacy, setPharmacy] = useState("");
  const [familyMember, setFamilyMember] = useState("");
  const [doctorsOffice, setDoctorsOffice] = useState("");
  const [personContactedOther, setPersonContactedOther] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [textMessage, setTextMessage] = useState("");
  const [phoneCall, setPhoneCall] = useState("");
  const [inPerson, setInPerson] = useState("");
  const [modeOfContactOther, setModeOfContactOther] = useState("");
  const [contactSummaryNote, setContactSummaryNote] = useState("");
  const [emergencyIssue, setEmergencyIssue] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData(setData, "employee/getPatient");
  }, []);

  const payload = {};

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setLoading, `employee/createContactNote`, payload);
  };

  const selectHandler = (e) => {
    const obj = JSON.parse(e);
    console.log(obj);
  };

  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/patient-chart/contact-chart")}
            src="/back_button2.png"
            alt="da"
          />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>CONTACT NOTE</p>
          <p></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form className="w-100 text-start">
            <Form.Group className="mb-3">
              <Form.Label>Resident’s Name</Form.Label>
              <Form.Select onChange={(e) => selectHandler(e.target.value)}>
                <option value="">Select</option>
                {data?.data?.map((patient) => (
                  <option key={patient._id} value={JSON.stringify(patient)}>
                    {patient.fullName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ContactChart2;
