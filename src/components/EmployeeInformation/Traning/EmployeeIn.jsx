import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData, postData, updateDataById } from "../../api/api.js";
import { showMsg } from "../../api/ShowMsg.jsx";
import { MultiSelect } from "react-multi-select-component";
const EmployeeIn = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [dataId, setDataId] = React.useState("");
  const handleDelete=(id)=>{
    deleteData("employee/deleteEmployeeInServiceLog",id)
  }
  const getAllData=()=>{
    getData(setData,"employee/getAllEmployeeInServiceLog")
  }
  useEffect(()=>{
    getAllData()
  },[])
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
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
    const [formData, setFormData] = useState  (initialTrainingState);
  
   
    const handleInputChange = (field, value) => {
      setFormData({
        ...formData,
        [field]: value
      });
    };
    const submitHandler = (e) => {
      e.preventDefault();
      const payload = {
        
      }
      if(formData.employeeName){
        payload.employeeName = formData.employeeName
      }
      if(formData.dateOfTraining){
        payload.dateOfTraining = formData.dateOfTraining
      }
      if(formData.trainingSubject){
        payload.trainingSubject = formData.trainingSubject
      }
      if(formData.administratorSignature){
        payload.administratorSignature = formData.administratorSignature
      }
      if(formData.hoursOrUnits){
        payload.hoursOrUnits = formData.hoursOrUnits
      }
      if(formData.employeeSignature){
        payload.employeeSignature = formData.employeeSignature
      }

      updateDataById("employee/updateEmployeeInServiceLog",dataId,payload).then(()=>{
        
        getAllData();
        setModalShow(false)
      })
     
      return    
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
    const selectedValues = selectedOptions
      .filter((item) => item && item.value !== null)
      .map((item) => item.value);

    setFormData({
      ...formData,
      trainingSubject: selectedValues,
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  return (
    <> <MyVerticallyCenteredModal
    show={modalShow}
    onHide={() => setModalShow(false)}
  />
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{ width: "80%", marginBottom: "1rem",display: "flex", paddingRight: "1rem" }}
        >
          <p style={{ fontSize: ".9rem", fontWeight: "bold" ,flex: "1"}}>
            EMPLOYEE IN-SERVICE LOG
          </p>
          <p> <Button onClick={() => navigate("/employee/training/employee-in2")}>+ NEW</Button></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
       
          <Table
            style={{ borderColor: "black", textAlign: "center" }}
            responsive
            bordered
          >
            <thead>
              <tr>
                <th>Date of In-Service Training</th>
                <th> Subject</th>
                <th>Number of Hours or Units</th>
                <th>Administrator/ BHP/Registered Nures Signature</th>
               
                <th style={{border: "1px solid black"}}>Employee’s Signature</th>
          <th></th>    </tr>
            </thead>
            <tbody>
              {console.log(data?.data)}
              {data?.data?.length > 0 && (
  data?.data?.map((data) => (
    <tr key={data?._id} style={{ border: "1px solid black" }}>
      <td>{data?.dateOfTraining.split("T")[0].split("-").reverse().join("-")}</td>
      <td>
        {data?.trainingSubject?.length > 0 &&
          data?.trainingSubject?.map((subject, index) => (
            <span key={index}>{subject} {console.log(subject)}</span>
          ))}
      </td>
      <td>{data?.hoursOrUnits}</td>
      <td>{data?.administratorSignature}</td>
      <td>{data?.employeeSignature}</td>
      <td
        style={{
          display: "flex",
          gap: "1rem",
          fontWeight: "bold",
          color: "#1A9FB2",
          alignItems: "center",
          fontSize: "1.4rem",cursor: "pointer",
        }}
      >
        <span onClick={() => {
          setDataId(data?._id);
          ;setModalShow(true);}}>
          {" "}
          <FaRegEdit />
        </span>
        <span
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => handleDelete(data?._id)}
        >
          {" "}
          <RiDeleteBin5Fill style={{ color: "red" }} />
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
          <div className="save-as-draft-btn123">
            <button className="btn1233" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeIn;
