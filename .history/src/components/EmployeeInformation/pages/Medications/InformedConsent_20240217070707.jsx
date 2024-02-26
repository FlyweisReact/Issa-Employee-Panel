import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../../api/api.js";
import axios from "axios";
import { Auth, Baseurl } from "../../../../Baseurl";


const InformedConsent = () => {
  const navigate = useNavigate();
const [patients,setPatients]=useState([])
const [data,setData]=useState([])
const [allergiesAndReactions,setAllergiesAndReactions]=useState('')
const [patientId,setPatientId]=useState('')



const handleDelete = (id) => {
  deleteData("employee/deleteInformedConsentForMedication", id);
}

const getAllData = () => {
  console.log(patientId, allergiesAndReactions);
  axios.get(`${Baseurl}employee/getAllInformedConsentForMedication`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    params: {
      patientId: patientId ? patientId : null,
      allergiesAndReactions: allergiesAndReactions ? allergiesAndReactions : null
    }
  })
  .then((res) => {
    
    console.log(res.data);
    if(res.data?.data?.length === 0){
      setData([]);
      return
    }
    setData(res.data?.data);
  })
  .catch((error) => {
   
    console.error(error);
  });
};
useEffect(() => {
  
  getData(setPatients, 'employee/getPatient');
  

 getAllData();
}, [patientId, allergiesAndReactions]);
  
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
          <p><Button onClick={() => navigate("/employee/medications/informed-consent2")} style={{paddingRight:"1rem"}} variant="primary">+ Add</Button></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Resident’s Name</Form.Label>
            <Form.Select onChange={(e) => setPatientId(e.target.value)} aria-label="Default select example">
              <option>Select Resident Name</option>
              {patients?.data?.map((patient)=>(
                <option value={patient._id}>{patient.fullName}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Allergies and reaction</Form.Label>
            <Form.Control  onChange={(e) => setAllergiesAndReactions(e.target.value)} type="text" placeholder="Enter text" />
          </Form.Group>
          <Table responsive>
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "#D1ECF0",
                  borderRadius: "5px 0 0 0",
                }}
              >
                <input type="checkbox" />
              </th>
              <th style={{ backgroundColor: "#D1ECF0" }}>Admit Date</th>
              <th style={{ backgroundColor: "#D1ECF0" }}>Medication / Instructions</th>
              <th style={{ backgroundColor: "#D1ECF0" }}>Medication Start Date</th>
              <th style={{ backgroundColor: "#D1ECF0" }}>D/C Date</th>
              <th style={{ backgroundColor: "#D1ECF0" }}>Resident / Guardian Initial</th>
              <th style={{ backgroundColor: "#D1ECF0" }}>Staff Initial</th>
              <th style={{ backgroundColor: "#D1ECF0" }}></th>

             
              <th
                style={{
                  backgroundColor: "#D1ECF0",
                  borderRadius: "0 5px 0 0",
                }}
              ></th>
            </tr>
          </thead>
          <tbody>
          {data?.length > 0 && (
            data?.map((item) => (
              <tr key={item?._id}>
              <td>
                <input type="checkbox" />
              </td>

              <td>
               {item?.admitDate?.split("T")?.[0]?.split("-")?.reverse().join("-")}
              </td>
              <td>
                {item?.tableDate?.[0]?.medicationInstructions}
              </td>
              <td>{item?.tableDate?.[0]?.medicationStartDate?.split("T")?.[0]?.split("-")?.reverse().join("-").split("T")?.[0]?.split("-")?.reverse().join("-")}</td>
              <td>{item?.tableDate?.[0]?.dischargeDate?.split("T")?.[0]?.split("-")?.reverse().join("-")?.split("T")?.[0]?.split("-")?.reverse().join("-")}</td>
              <td>{item?.tableDate?.[0]?.residentGuardianInitial  }</td>
              <td>{item?.tableDate?.[0]?.staffInitial}</td>

              <td
                style={{
                  display: "flex",
                  gap: "1rem",
                  fontWeight: "bold",
                  color: "#1A9FB2",
                  alignItems: "center",
                  fontSize: "1.4rem",
                }}
              >
                <span>
                  {" "}
                  <FaRegEdit />
                </span>
                <span
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => handleDelete(item?._id)}
                >
                  {" "}
                  <RiDeleteBin5Fill style={{ color: "red" }} />
                  <span style={{ color: "red", fontSize: "1.1.1rem" }}>
                    DELETE
                  </span>
                </span>
              </td>
            </tr>
            ))
          )}
            
          </tbody>
        </Table>
          
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
          
        </div>
      </div>
    </>
  );
};

export default InformedConsent;