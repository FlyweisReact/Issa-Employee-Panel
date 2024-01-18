import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../api/api.js";
const EmployeeIn = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const handleDelete=(id)=>{
    deleteData("employee/deleteEmployeeInServiceLog",id)
  }
  const getAllData=()=>{
    getData(setData,"employee/getAllEmployeeInServiceLog")
  }
  useEffect(()=>{
    getAllData()
  },[])
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
               
                <th>Employee’s Signature</th>
              </tr>
            </thead>
            <tbody>
            {data?.data?.administratorSignature && (
              <tr style={{ border: "1px solid black" }}>
                <td> {data?.data?.dateOfTraining.split("T")[0].split("-").reverse().join("-")} </td>
                <td>
                  {data?.data?.trainingSubject?.length > 0 && data?.data?.trainingSubject?.map((data)=>{
                    return data
                  })}
                </td>
                <td>{data?.data?.hoursOrUnits}</td>
                <td>{data?.data?.administratorSignature}</td>
                <td>{data?.data?.employeeSignature}</td>
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
                        onClick={() => handleDelete(data?.data?._id)}
                      >
                        {" "}
                        <RiDeleteBin5Fill style={{ color: "red" }} />
                      
                      </span>
                    </td>
              </tr> 
            )}
            
            
            { data?.data?.length > 0 && data?.data?.map((data)=>{
              
          
              <tr style={{ border: "1px solid black" }}>
                <td> {data?.dateOfTraining} </td>
                <td>
                  (All this will be drop down each) Infectious Control, Fall
                  prevention and fall recovery, Annual TB education, Assistance
                  in the self administration of medication, Medication
                  administration.
                </td>
                <td></td>
                <td></td>
                <td></td>
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
                        onClick={() => handleDelete(data?.data?._id)}
                      >
                        {" "}
                        <RiDeleteBin5Fill style={{ color: "red" }} />
                      
                      </span>
                    </td>
              </tr>  })}
              
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
