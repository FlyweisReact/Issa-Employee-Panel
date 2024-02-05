/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { showMsg } from "../../../api/ShowMsg";

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

  useEffect(() => {
    getData(setData, "employee/getPatient");
  }, []);

  const initialData = {
    patientId: "6572c1ffd4a09e03c1c57f50",
    residentName: "resident_name_value",
    guardian: "guardian_value",
    caseManager: "case_manager_value",
    pharmacy: "pharmacy_value",
    familyMember: "family_member_value",
    doctorsOffice: "doctors_office_value",
    personContactedOther: "person_contacted_other_value",
    contactName: "contact_name_value",
    email: "email_value",
    textMessage: "text_message_value",
    phoneCall: "phone_call_value",
    inPerson: "in_person_value",
    modeOfContactOther: "mode_of_contact_other_value",
    contactSummaryNote: "contact_summary_note_value",
    emergencyIssue: false,
  };

  const [contactData, setContactData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "patientId") {
      setContactData((prevData) => ({
        ...prevData,
        residentName: data?.data?.find((patient) => patient._id === value)
          ?.fullName,
      }));
    }
    if (type === "checkbox") {
      setContactData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setContactData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(contactData);
    const emptyValues = Object.keys(contactData).filter(
      (key) => contactData[key] === ""
    );
    if (emptyValues.length > 0) {
      return showMsg(
        "Error",
        `${emptyValues.join(",")}  cannot be empty`,
        "danger"
      );
    }
    postData("employee/createContactNote", contactData);
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

      </div>
    </>
  );
};

export default ContactChart2;
