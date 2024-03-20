/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import HOC from "../../../Layout/Inner/HOC";
import { DateInMMDDYY, deleteApi, fetchApi } from "../../../Repository/Apis";
import CreateNav from "../../../Helper/CreateNav";

const MilegaLog = () => {
  const [logs, setLogs] = useState({});
  const [loading, setLoading] = useState(false);

  const getAllLogs = async () => {
    fetchApi(setLoading, "employee/getAllMileageLog", setLogs);
  };

  useEffect(() => {
    getAllLogs();
  }, []);

  const deleteHandler = async (id) => {
    await deleteApi(`employee/deleteMileageLog/${id}`);
    getAllLogs();
  };

  return (
    <>
      <CreateNav title={"MILEAGE LOG"} link={"/create-milega-log"} />

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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {logs?.data?.data?.map((log, index) => (
                  <tr key={index}>
                    <td>{DateInMMDDYY(log?.date)}</td>
                    <td>{log?.residentInitials}</td>
                    <td>{log?.destination}</td>
                    <td>{log?.beginningMileage}</td>
                    <td>{log?.endingMileage}</td>
                    <td>{log?.totalMileage}</td>
                    <td>{log?.driverSignature}</td>
                    <td>{log?.anyIssues}</td>
                    <td>
                      <div className="icon-joiner">
                        <Link to={`/update-milega-log/${log?._id}`}>
                          <i className="fa-solid fa-edit" />
                        </Link>
                        <Link to={`/update-milega-log/${log?._id}`}>
                          <i className="fa-solid fa-edit" />
                        </Link>
                        <i
                          className="fa-solid fa-trash-can"
                          onClick={() => deleteHandler(log?._id)}
                        />
                      </div>
                    </td>
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
