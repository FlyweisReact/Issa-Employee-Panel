/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { Auth } from "../../../Baseurl";
import axios from "axios";
import Loader from "../../../components/Loader/Loader";
import HOC from "../../../Layout/Inner/HOC";
import { fetchApi } from "../../../Repository/Apis";
import NavWrapper from "../../../Helper/NavWrapper";
import CreateNav from "../../../Helper/CreateNav";

const MilegaLog = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState({});
  const [loading, setLoading] = useState(false);

  const getAllLogs = async () => {
    fetchApi(setLoading, "employee/getAllMileageLog", setLogs);
  };

  useEffect(() => {
    getAllLogs();
  }, []);

  return (
    <>
      <CreateNav
        title={"MILEAGE LOG"}
        link={"/employee/therapy-notes/milage-log2"}
      />

      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-table">
            <table className="colored_table">
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
                {logs?.data?.data?.map((log) => (
                  <tr key={log._id}>
                    <td>
                      {log.date}
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
            </table>
          </div>
        )}
      </Container>
    </>
  );
};

export default HOC(MilegaLog);
