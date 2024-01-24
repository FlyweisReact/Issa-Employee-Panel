import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { Auth,  Baseurl} from "../../../../../Baseurl";
import axios from "axios";
import { showMsg } from "../../../../api/ShowMsg";
const VisitorLog2 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    visitorName: '',
    timeIn: '',
    reason: '',
    timeOut: ''
  });
  
  const handleInputChange = ( name, value) => {
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // return console.log(formData);
    const emptyValues = Object.values(formData).some((value) => value === "");
    if (emptyValues) {
      showMsg("Error", `${Object.keys(formData).filter((key) => formData[key] === "")} is required`, "danger"); 
      return;
    }
    try {
      axios
        .post(`${Baseurl}employee/createVisitLog`, formData, Auth())
        .then((res) => {
          showMsg("Success", res.data.message, "success");
          navigate("/employee/therapy-notes/visitor-log");
        })
        .catch((err) => {
          console.error(err);
          showMsg("Error", err.response.data.message, "error");
        });
    } catch (error) {
      console.error(error);
      showMsg("Error", error.message, "error");
    }
  };
  
  
  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img onClick={() => navigate(-1)} src="/back_button2.png" alt="da" />
        </div>
        <div
          className="nav-div-personal"
          style={{
            width: "80%",
            marginBottom: "1rem",
            display: "flex",
            paddingRight: "1rem",
          }}
        >
          <p style={{ fontWeight: "bold", flex: "1" }}> VISITOR SIGN IN LOG</p>
          <p>
            <Button
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                backgroundColor: "#1A9FB2",
                padding: ".5rem 1.5rem",
                border: "none",
              }}
              onClick={() => navigate("/employee/therapy-notes/visitor-log")}
         
            >
              LOGS
            </Button>
          </p>
        </div>
      </div>
      <div>
      <div className="top-div-personal">
        <Form className="form-personal">
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Date :
            </Form.Label>
            <Form.Control onChange={(e) => handleInputChange("date", e.target.value)} type="date" placeholder="Enter Date" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Visitor Name :
            </Form.Label>
            <Form.Control onChange={(e) => handleInputChange("visitorName", e.target.value)}   type="text" placeholder="Enter  Visitor Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label  style={{ fontWeight: "bold", fontSize: ".9rem" }}>
             Time In :
            </Form.Label>
            <Form.Control onChange={(e) => handleInputChange("timeIn", e.target.value)}  type="time" placeholder="Enter  Time In" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
             Time Out :
            </Form.Label>
            <Form.Control onChange={(e) => handleInputChange("timeOut", e.target.value)} type="time" placeholder="Enter Time Out" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
             Reason :
            </Form.Label>
            <Form.Control onChange={(e) => handleInputChange("reason", e.target.value)} type="text" placeholder="Enter  Reason" />
          </Form.Group>

         

          
          
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

export default VisitorLog2;
