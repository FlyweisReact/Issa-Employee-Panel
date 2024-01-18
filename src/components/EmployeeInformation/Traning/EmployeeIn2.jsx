import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
const EmployeeIn2 = () => {
  const navigate = useNavigate();
  return (
    <>
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
          <p><Button style={{ fontSize: ".9rem", fontWeight: "bold" }} onClick={() => navigate("/employee/training/employee-in")}> Data</Button></p>
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
                <th></th>
                <th>Employee’s Signature</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ border: "1px solid black" }}>
                <td> </td>
                <td>
                  (All this will be drop down each) Infectious Control, Fall
                  prevention and fall recovery, Annual TB education, Assistance
                  in the self administration of medication, Medication
                  administration.
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td> </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td> </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td> </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
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

export default EmployeeIn2;
