import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Auth, showMsg, Baseurl } from "../../../../../Baseurl";
import axios from "axios";
const MilageLog = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState([]);
  const getAllLogs = () => {
    

    axios
      .get(`${Baseurl}employee/getAllMileageLog`, Auth())
      .then((res) => {
        console.log(res.data?.data);  
        setLogs(res.data?.data);
        
      })  
      .catch((err) => {
        console.error(err);
      });
  }
useEffect(() => {
  getAllLogs()
}, [])
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
          <p style={{ fontWeight: "bold", flex: "1" }}> MILEAGE LOG</p>
          <p>
            <Button
              style={{
                fontSize: ".9rem",
                fontWeight: "bold",
                backgroundColor: "#1A9FB2",
                padding: ".5rem 1.5rem",
                border: "none",
              }}
              onClick={() => navigate("/employee/therapy-notes/milage-log2")}
            >
            + NEW
            </Button>
          </p>
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
                <th>Date</th>
                <th> Resident Initials</th>
                <th>Destination</th>
                <th>Beginning Mileage</th>
                <th>Ending Mileage</th>
                <th>Total Mileage</th>
                <th>Drivers Signature</th>
                <th>Any Issues</th>
              </tr>
            </thead>
            <tbody>
            
              {console.log(logs)}
           
           
              <tr style={{ border: "1px solid black" }}>
                <td></td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            
             
             
            </tbody>
          </Table>

          <Form.Group className="mb-3 ">
            <Form.Label style={{ fontWeight: "bold", fontSize: ".9rem" }}>
              Drivers Signature:
            </Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
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

export default MilageLog;
