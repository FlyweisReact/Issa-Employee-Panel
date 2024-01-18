import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../api/api.js";

const OnSite2 = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getData(setData, "employee/getAllOnSiteFacility");
  },[])
  const handleDelete=(id)=>{
    deleteData("employee/deleteOnSiteFacility",id)
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
            ON SITE AND FACILITY ORIENTATION VERIFICATION
          </p>
          <p><Button onClick={() => navigate("/employee/training/on-site")}>Data</Button></p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
         <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Training Date </Form.Label>
            <Form.Control type="date" />
          </Form.Group>
         </Form>
        </div>
      </div>
    </>
  );
};

export default OnSite2;
