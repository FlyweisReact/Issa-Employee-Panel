import React, { useState } from "react";
import "./Personal.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Baseurl, Auth, showMsg } from "../../../../../Baseurl";
export const Personal = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    lastName: "",
    firstName: "",
    middleInitial: "",
    addressStreet: "",
    addressCity: "",
    addressState: "",
    addressZip: "",
    socSecNo: "",
    birthDate: "",
    telephoneHome: "",
    telephonePersonalCell: "",
    telephoneWork: "",
    telephoneBusinessCell: "",
    dLStateOfIssue: "",
    dLNumber: "",
    dLExpirationDate: "",
    businessEmail: "",
    personalEmail: "",
    emergencyContactName: "",
    emergencyContactRelationship: "",
    emergencyContactNumber: "",
    savedSigned: ""
  });
  const updateField = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const submitHandler=(e)=>{
    e.preventDefault()
    const emptyValues = Object.values(formData).filter(x => x === "");

    if (emptyValues.length > 0) {
      showMsg("Error", `${Object.keys(formData).filter(x => formData[x] === "")} cannot be empty`, "danger");
      return;
    }
    
    try {
      
   
    axios.post(`${Baseurl}employee/createPersonalInformation`,formData,Auth()).then((res)=>{
      console.log(res);
      showMsg("Success", res.data.message, "success");
    })
  } catch (error) {
      showMsg("Error", error?.response?.data?.message || "An error occurred", "danger");
  }
  }

  return (
    <div className="main-div-personal important">
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate('/employment/')} src="/back_button2.png" alt="da" />
        </div>
        <div className="nav-div-personal">
          <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>
            EMPLOYEE PERSONNEL INFORMATION/EMERGENCY CONTACT
          </p>
        </div>
      </div>
      <div className="top-div-personal">
        <Form className="form-personal">
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("date", e.target.value)} type="date" placeholder="Enter Date" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Last Name :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("lastName", e.target.value)} type="text" placeholder="Enter Last Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label  style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              First Name :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("firstName", e.target.value)} type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Middle Name :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("middleInitial", e.target.value)} type="text" placeholder="Enter Middle Name" />
          </Form.Group>

          <h5 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>Address :</h5>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Street :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("addressStreet", e.target.value)} type="text" placeholder="Enter Street Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              City :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("addressCity", e.target.value)} type="text" placeholder="Enter City Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              State :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("addressState", e.target.value)} type="text" placeholder="Enter State Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Zip Code :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("addressZip", e.target.value)} type="text" placeholder="Enter Zip Code" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Soc Sec No:
            </Form.Label>
            <Form.Control onChange={(e) => updateField("socSecNo", e.target.value)} type="text" placeholder="Enter Soc Sec Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Birth Date :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("birthDate", e.target.value)} type="Date" placeholder="Enter Date of Birth" />
          </Form.Group>

          <h5 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            Telephone :
          </h5>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Home :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("telephoneHome", e.target.value)} type="number" placeholder="Enter Home Number" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Personal Call :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("telephonePersonalCell", e.target.value)} type="number" placeholder="Enter Personal Number" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Work :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("telephoneWork", e.target.value)} type="number" placeholder="Enter Work Number" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Business Call :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("telephoneBusinessCell", e.target.value)} type="number" placeholder="Enter Business Number" />
          </Form.Group>

          <h5 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            Driver's License :
          </h5>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              State Of Issue :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("dLStateOfIssue", e.target.value)} type="text" placeholder="Enter State of Issue" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              License Number :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("dLNumber", e.target.value)} type="number" placeholder="Enter License Number" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Expiration Date :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("dLExpirationDate", e.target.value)} type="Date" placeholder="Enter Expiration Date" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Business Email :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("businessEmail", e.target.value)} type="text" placeholder="Enter Business Email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Personal Email :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("personalEmail", e.target.value)} type="text" placeholder="Enter Personal Email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Emergency Contact :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("emergencyContactName", e.target.value)} type="text" placeholder="Enter Emergency Contact" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Relationship :
            </Form.Label>
            <Form.Control onChange={(e) => updateField("emergencyContactRelationship", e.target.value)} type="text" placeholder="Enter Relationship" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Emergency Contact Phone :
            </Form.Label>
            <Form.Control
              type="number" 
              onChange={(e) => updateField("emergencyContactNumber", e.target.value)}
              placeholder="Enter Emergency Contact Number"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
Signature :
            </Form.Label>
            <Form.Control
              type="text" 
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
              <button style={{ border: "1px solid #0C5C75", color: "#0C5C75" }}>
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
  );
};
