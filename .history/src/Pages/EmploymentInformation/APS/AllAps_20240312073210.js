/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { deleteApi, downloadReport, fetchApi } from "../../../Repository/Apis";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { DateFormatter } from "../../../Helper/Makers";
import NoFound from "../../../components/Loader/NoFound";
import HOC from "../../../Layout/Outer/HOC";
import CreateNav from "../../../Helper/CreateNav";

const AllAps = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const fetchHandler = () => {
    fetchApi(setLoading, "employee/getAllApsConsent", setData);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const items = data?.data?.data;

  const deleteHandler = async (id) => {
    await deleteApi(`employee/deleteApsConsent/${id}`);
    fetchHandler();
  };



  return (
    <>
      <div ref={componentRef}>
        <CreateNav
          title={"APS Search Consent Form"}
          link={"/aps-consent-form"}
        />
        {loading ? (
          <Loader />
        ) : items ? (
          <Container className="full-width-container">
            <div className="top-div-personal2">
              <div className="overflow_table">
                <table className="colored_table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Employee Name </th>
                      <th>Employee Signature </th>
                      <th>Administrator Name </th>
                      <th>Administrator Signature</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data?.data?.map((i, index) => (
                      <tr key={index}>
                        <td> {DateFormatter(i?.date)} </td>
                        <td> {i.employeeName} </td>
                        <td> {i.employeeSignature} </td>
                        <td> {i.administratorName} </td>
                        <td> {i.administratorSignature} </td>
                        <td className="icon-container">
                          <Link to={`/edit-aps/${i._id}`}>
                            <FaRegEdit />
                          </Link>
                          <span
                            className="delete"
                            onClick={() => deleteHandler(i._id)}
                          >
                            <RiDeleteBin5Fill style={{ color: "red" }} />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        ) : (
          <Container className="full-width-container">
            <NoFound msg={"No Data Found"} />
          </Container>
        )}
      </div>
    </>
  );
};

export default HOC({ Wcomponenet: AllAps, isNavbar: false });
