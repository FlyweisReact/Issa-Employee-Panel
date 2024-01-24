/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { Auth, Baseurl } from "../../../../../Baseurl";
import axios from "axios";

const VisitorLog = () => {
  const navigate = useNavigate();
  const [visitorLog, setVisitorLog] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchHandler = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/getAllVisitLog`,
        Auth()
      );
      const data = res.data?.data;
      setVisitorLog(data);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

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
              onClick={() => navigate("/employee/therapy-notes/visitor-log2")}
            >
              + NEW
            </Button>
          </p>
        </div>
      </div>
      <div>
        <div className="top-div-personal">
              {/* {
                loading ? <
              } */}
          <Table
            style={{ borderColor: "black", textAlign: "center" }}
            responsive
            bordered
          >
            <thead>
              <tr>
                <th>Date</th>
                <th> Name</th>
                <th>Time In</th>
                <th>Time Out</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {visitorLog &&
                visitorLog.map((item, index) => (
                  <tr style={{ border: "1px solid black" }}>
                    <td>
                      {item.date?.split("T")[0].split("-").reverse().join("-")}
                    </td>
                    <td>{item.visitorName}</td>
                    <td>{item.timeIn}</td>
                    <td>{item.timeOut}</td>
                    <td>{item.reason}</td>
                  </tr>
                ))}
            </tbody>
          </Table>


          <div style={{ textAlign: "center", width: "100%", margin: "auto" }}>
            <button
              style={{
                padding: "10px 24px",
                backgroundColor: "#1A9FB2",
                color: "white",
                marginTop: "1rem",
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

export default VisitorLog;
