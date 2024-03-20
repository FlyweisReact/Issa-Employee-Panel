/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { Auth } from "../../../Baseurl";
import axios from "axios";
import Loader from "../../../components/Loader/Loader";
import HOC from "../../../Layout/Inner/HOC";
import { fetchApi } from "../../../Repository/Apis";

const MilegaLog = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState({});
  const [loading, setLoading] = useState(false);

  const getAllLogs = async () => {
    fetchApi(setLoading , "employee/getAllMileageLog" , setLogs)
  };

  useEffect(() => {
    getAllLogs();
  }, []);


  return (
    <>
      <div className="nav-wrap-personal">
        <div className="nav-div-personal1">
          <img
            onClick={() => navigate("/employee/therapy-notes")}
            src="/back_button2.png"
            alt="da"
          />
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
          {loading ? (
            <Loader />
          ) : (
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
                {logs?.map((log) => (
                  <tr key={log._id} style={{ border: "1px solid black" }}>
                    <td>
                      {log.date
                        ?.toString()
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                    </td>
                    <td>{log.residentInitials}</td>
                    <td>{log.destination}</td>
                    <td>{log.beginningMileage}</td>
                    <td>{log.endingMileage}</td>
                    <td>{log.totalMileage}</td>
                    <td>{log.driverSignature}</td>
                    <td>{log.anyIssues}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

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

export default HOC(MilegaLog);
