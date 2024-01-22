import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData, postData } from "../../api/api.js";
import { showMsg } from "../../api/ShowMsg.jsx";
import { MultiSelect } from "react-multi-select-component";


const EmployeeIn2 = () => {
  const navigate = useNavigate();

  
  const options=[{
    label:"Infectious Control",value:"Infectious Control",
  },{
    label:"Fall prevention and fall recovery",value:"Fall prevention and fall recovery",
  }]
  const [selectedOptions, setSelectedOptions] = useState(options);
const [value, setValue] = useState([]);
  const initialTrainingState = {
    "employeeName": "",
    "dateOfTraining": "",
    "trainingSubject":value ,
    "administratorSignature": "","hoursOrUnits": 2,
    "employeeSignature": ""
  }
  const [formData, setFormData] = useState(initialTrainingState);

 
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
     console.log(formData)
    const emptyValues=Object.keys(formData).filter(key=>formData[key]==="");
    if(emptyValues.length>0){
      return showMsg("Error", `${emptyValues.join(",")}  cannot be empty`, "danger")
    }
    postData("employee/createEmployeeInServiceLog", formData);
    return    navigate("/employee/training/employee-in")
  }
  
  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate('/employee/training/on-site')} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem",display: "flex", paddingRight: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold",flex: "1" }}>
        EMPLOYEE IN-SERVICE LOG
          </p>
          <p><Button onClick={() => navigate("/employee/training/on-site")}>Data</Button></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
         <Form  style={{textAlign:"left",width:"100%"}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control name="text" onChange={(e)=>handleInputChange("employeeName",e.target.value)} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of Training </Form.Label>
            <Form.Control name="date" onChange={(e)=>handleInputChange("dateOfTraining",e.target.value)} type="date" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Training Subject </Form.Label>
            <MultiSelect
  options={options}
  value={formData.trainingSubject}
  onChange={(selectedOptions) => {
    setFormData({
      ...formData,
      trainingSubject: selectedOptions.map((item) => (item && item.value) || null),
    });
  }}
  isMulti
/>


          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Hours of Unit</Form.Label>
            <Form.Control type="number" name="description" onChange={(e)=>handleInputChange("hoursOrUnits",e.target.value)}  />
          </Form.Group>

         
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Administrator Signature </Form.Label>
            <Form.Control name="employeeSignature" onChange={(e)=>handleInputChange("administratorSignature",e.target.value)} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Employee Signature</Form.Label>
            <Form.Control name="trainerSignature" onChange={(e)=>handleInputChange("employeeSignature",e.target.value)} type="text" />
          </Form.Group>
          <div style={{display:'flex',justifyContent:"center",marginTop:"2rem",marginBottom:'3rem'}}>
          <Button style={{padding:"0.5rem 1rem"}} onClick={submitHandler} type="submit" >Submit</Button>
          </div>
         </Form>
        </div>
      </div>
    </>
  );
};

export default EmployeeIn2;
