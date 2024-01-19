import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { showMsg } from "../../../../Baseurl";
const InformedConsent2 = () => {
  const navigate = useNavigate();
  const [patients,setPatients]=useState([])
const [data,setData]=useState([])
useEffect(()=>{
  getData(setPatients,'employee/getPatient')
},[])
const [formData, setFormData] = useState({
    patientId: "",
    admitDate: "",
    tableDate: [],
    staff: [],
    residentGuardianSignature: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  const submitHandler = (e) => {
    return console.log(formData);
    const emptyValues=Object.keys(formData).filter(key=>formData[key]==="");
    if(emptyValues.length>0){
      return showMsg("Error", `${emptyValues.join(",")}  cannot be empty`, "danger")
    }
    postData("employee/createMedicationReconciliation", formData)
    setformData(initialPatientState);
  }
  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem",display:"flex", }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold",flex:"1" }}>
          INFORMEDCONSENT FOR MEDIACTIONS
          </p>
          <p>
        
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
        <Form.Group  style={{ fontWeight: "bold", fontSize: ".9rem" }}className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>Resident’s Name</Form.Label>
        <Form.Select  aria-label="Default select example">
          <option>Name</option>
          {patients?.data?.map((patient)=>(
            <option value={patient._id}>{patient.fullName}</option>
          ))}
        </Form.Select>
      </Form.Group>
          <Form.Group style={{ fontWeight: "bold", fontSize: ".9rem" }} className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>Date of Birth</Form.Label>
            <Form.Control   type="date" placeholder="Enter text" />
          </Form.Group>
          <Form.Group style={{ fontWeight: "bold", fontSize: ".9rem" }} className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>Admit Date</Form.Label>
            <Form.Control   type="text" placeholder="Enter text" />
          </Form.Group>
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <Form.Label style={{ fontWeight: "bold", fontSize: "1rem" }}>
          Informed consent for medications
          </Form.Label>
          <Button variant="primary" >+ Add</Button>
          </div>
          <Form.Group style={{ fontWeight: "bold", fontSize: ".9rem" }} className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>Medication/Instructions</Form.Label>
            <Form.Control  type="text" placeholder="Enter text" />
          </Form.Group>
       

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
            Medication Start Date:
            </Form.Label>
            <Form.Control type="date" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
            Few Days Only:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
            D/C Date:
            </Form.Label>
            <Form.Control  type="date" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
            Resident/Guardian Initial :
            </Form.Label>
            <Form.Control  type="date" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
            Staff Initial:  
            </Form.Label>
            <Form.Control  type="text" placeholder="Enter text" />
          </Form.Group>
          <p>I, the resident/Guardian, have received instruction in the use of the above listed medication(s) including the medication anticipated results, and potential side effect that maybe result from not taking the medication.</p>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
            Staff Name, Title:
            </Form.Label>
            <Form.Control  type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
           Signature   Staff:
            </Form.Label>
            <Form.Control  type="text" placeholder="Enter text" />
          </Form.Group>
         
          <div
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
                SAVED AND SAVED
              </button>
            </div>
          </div>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
            Initials:
            </Form.Label>
            <Form.Control type="text"  placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
            Resident/Guardian/Public Fiduciary Signature:
            </Form.Label>
            <Form.Control type="text"  placeholder="Enter text" />
          </Form.Group>
          <div
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
                SAVED AND SAVED
              </button>
            </div>
          </div>

          <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
           
          </div>
          <div className="save-as-draft-btn123">
            <button onClick={submitHandler} className="btn1233" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformedConsent2;
