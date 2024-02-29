/** @format */

import React, { useEffect, useState } from "react";
import "./Personal.css";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Baseurl, Auth, showMsg } from "../../../../../Baseurl";
import NavWrapper from "../../../../../Helper/NavWrapper";
import { BorderlessInput, DateFormatter } from "../../../../../Helper/Makers";

export const Personal = () => {
  const [data, setData] = useState({});

  const getPersonal = async () => {
    try {
      const res = await axios.get(
        `${Baseurl}employee/getPersonalInformation`,
        Auth()
      );
      console.log(res?.data);
      setData(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPersonal();
  }, []);

  const initialData = {
    date: data?.date?.split("T")[0] || "",
    lastName: data?.lastName || "",
    firstName: data?.firstName || "",
    middleInitial: data?.middleInitial || "",
    addressStreet: data?.addressStreet || "",
    addressCity: data?.addressCity || "",
    addressState: data?.addressState || "",
    addressZip: data?.addressZip || "",
    socSecNo: data?.socSecNo || "",
    birthDate: data?.birthDate?.split("T")[0] || "",
    telephoneHome: data?.telephoneHome || "",
    telephonePersonalCell: data?.telephonePersonalCell || "",
    telephoneWork: data?.telephoneWork || "",
    telephoneBusinessCell: data?.telephoneBusinessCell || "",
    dLStateOfIssue: data?.dLStateOfIssue || "",
    dLNumber: data?.dLNumber || "",
    dLExpirationDate: data?.dLExpirationDate?.split("T")[0] || "",
    businessEmail: data?.businessEmail || "",
    personalEmail: data?.personalEmail || "",
    emergencyContactName: data?.emergencyContactName || "",
    emergencyContactRelationship: data?.emergencyContactRelationship || "",
    emergencyContactNumber: data?.emergencyContactNumber || "",
    savedSigned: data?.savedSigned || "",
  };

  const [formData, setFormData] = useState(initialData);

  const updateField = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const emptyValues = Object.values(formData).filter((x) => x === "");

    if (emptyValues.length > 0) {
      showMsg(
        "Error",
        `${Object.keys(formData).filter(
          (x) => formData[x] === ""
        )} cannot be empty`,
        "danger"
      );
      return;
    }

    try {
      axios
        .post(`${Baseurl}employee/createPersonalInformation`, formData, Auth())
        .then((res) => {
          console.log(res);
          showMsg("Success", res.data.message, "success");
        });
    } catch (error) {
      showMsg(
        "Error",
        error?.response?.data?.message || "An error occurred",
        "danger"
      );
    }
  };

  useEffect(() => {
    setFormData({ ...formData, ...initialData });
  }, [data]);

  // ----
  const [date, setDate] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleInitial, setMiddleInitial] = useState("");
  const [addressStreet, setAddressStreet] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressState, setAddressState] = useState("");
  const [addressZip, setAddressZip] = useState("");
  const [socSecNo, setSocSecNo] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [telephoneHome, setTelephoneHome] = useState("");
  const [telephonePersonalCell, setTelephonePersonalCell] = useState("");
  const [telephoneWork, setTelephoneWork] = useState("");
  const [telephoneBusinessCell, setTelephoneBusinessCell] = useState("");
  const [dLStateOfIssue, setDLStateOfIssue] = useState("");
  const [dLNumber, setDLNumber] = useState("");
  const [dLExpirationDate, setDLExpirationDate] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [emergencyContactRelationship, setEmergencyContactRelationship] =
    useState("");
  const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
  const [savedSigned, setSavedSigned] = useState("");

  return (
    <>
      <NavWrapper
        title={"EMPLOYEE PERSONNEL INFORMATION/EMERGENCY CONTACT"}
        isArrow={true}
      />
      <Container className="full-width-container">
        <form onSubmit={submitHandler} className="w-100 text-start">
          <div className="grid-container mb-3">
            <div className="grid-item long-input" />
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
            <div className="grid-item long-input">
              <label>Last Name:</label>
              <BorderlessInput
                setState={setLastName}
                placeholder=""
                type={"text"}
                value={lastName}
              />
            </div>
            <div className="grid-item">
              <label>First:</label>
              <BorderlessInput
                setState={setFirstName}
                placeholder=""
                type={"text"}
                value={firstName}
              />
            </div>
            <div className="grid-item">
              <label>MI:</label>
              <BorderlessInput
                setState={setMiddleInitial}
                placeholder=""
                type={"text"}
                value={middleInitial}
              />
            </div>
            <div className="grid-item  full-wid-input">
              <label>Address:</label>
            </div>
            <div className="grid-item  full-wid-input">
              <label>Street:</label>
            </div>
          </div>
        </form>
      </Container>

      <div className="main-div-personal important">
        <div className="top-div-personal">
          <Form className="form-personal">
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Middle Name :
              </Form.Label>
              <Form.Control
                value={formData.middleInitial}
                onChange={(e) => updateField("middleInitial", e.target.value)}
                type="text"
                placeholder="Enter Middle Name"
              />
            </Form.Group>

            <h5 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Address :
            </h5>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Street :
              </Form.Label>
              <Form.Control
                value={formData.addressStreet}
                onChange={(e) => updateField("addressStreet", e.target.value)}
                type="text"
                placeholder="Enter Street Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                City :
              </Form.Label>
              <Form.Control
                value={formData.addressCity}
                onChange={(e) => updateField("addressCity", e.target.value)}
                type="text"
                placeholder="Enter City Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                State :
              </Form.Label>
              <Form.Control
                value={formData.addressState}
                onChange={(e) => updateField("addressState", e.target.value)}
                type="text"
                placeholder="Enter State Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Zip Code :
              </Form.Label>
              <Form.Control
                value={formData.addressZip}
                onChange={(e) => updateField("addressZip", e.target.value)}
                type="text"
                placeholder="Enter Zip Code"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Soc Sec No:
              </Form.Label>
              <Form.Control
                value={formData.socSecNo}
                onChange={(e) => updateField("socSecNo", e.target.value)}
                type="text"
                placeholder="Enter Soc Sec Name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Birth Date :
              </Form.Label>
              <Form.Control
                onChange={(e) => updateField("birthDate", e.target.value)}
                type="Date"
                placeholder="Enter Date of Birth"
              />
            </Form.Group>

            <h5 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Telephone :
            </h5>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Home :
              </Form.Label>
              <Form.Control
                value={formData.telephoneHome}
                onChange={(e) => updateField("telephoneHome", e.target.value)}
                type="number"
                placeholder="Enter Home Number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Personal Call :
              </Form.Label>
              <Form.Control
                value={formData.telephonePersonalCell}
                onChange={(e) =>
                  updateField("telephonePersonalCell", e.target.value)
                }
                type="number"
                placeholder="Enter Personal Number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Work :
              </Form.Label>
              <Form.Control
                value={formData.telephoneWork}
                onChange={(e) => updateField("telephoneWork", e.target.value)}
                type="number"
                placeholder="Enter Work Number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Business Call :
              </Form.Label>
              <Form.Control
                value={formData.telephoneBusinessCell}
                onChange={(e) =>
                  updateField("telephoneBusinessCell", e.target.value)
                }
                type="number"
                placeholder="Enter Business Number"
              />
            </Form.Group>

            <h5 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              Driver's License :
            </h5>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                State Of Issue :
              </Form.Label>
              <Form.Control
                value={formData.dLStateOfIssue}
                onChange={(e) => updateField("dLStateOfIssue", e.target.value)}
                type="text"
                placeholder="Enter State of Issue"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                License Number :
              </Form.Label>
              <Form.Control
                value={formData.dLNumber}
                onChange={(e) => updateField("dLNumber", e.target.value)}
                type="text"
                placeholder="Enter License Number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Expiration Date :
              </Form.Label>
              <Form.Control
                onChange={(e) =>
                  updateField("dLExpirationDate", e.target.value)
                }
                type="Date"
                placeholder="Enter Expiration Date"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Business Email :
              </Form.Label>
              <Form.Control
                value={formData.businessEmail}
                onChange={(e) => updateField("businessEmail", e.target.value)}
                type="text"
                placeholder="Enter Business Email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Personal Email :
              </Form.Label>
              <Form.Control
                value={formData.personalEmail}
                onChange={(e) => updateField("personalEmail", e.target.value)}
                type="text"
                placeholder="Enter Personal Email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Emergency Contact :
              </Form.Label>
              <Form.Control
                value={formData.emergencyContactName}
                onChange={(e) =>
                  updateField("emergencyContactName", e.target.value)
                }
                type="text"
                placeholder="Enter Emergency Contact"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Relationship :
              </Form.Label>
              <Form.Control
                value={formData.emergencyContactRelationship}
                onChange={(e) =>
                  updateField("emergencyContactRelationship", e.target.value)
                }
                type="text"
                placeholder="Enter Relationship"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Emergency Contact Phone :
              </Form.Label>
              <Form.Control
                type="number"
                value={formData.emergencyContactNumber}
                onChange={(e) =>
                  updateField("emergencyContactNumber", e.target.value)
                }
                placeholder="Enter Emergency Contact Number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
                Signature :
              </Form.Label>
              <Form.Control
                type="text"
                value={formData.savedSigned}
                onChange={(e) => updateField("savedSigned", e.target.value)}
                placeholder="Enter Emergency Contact Number"
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
              <button onClick={submitHandler} className="btn1233" type="submit">
                SUBMIT
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};
