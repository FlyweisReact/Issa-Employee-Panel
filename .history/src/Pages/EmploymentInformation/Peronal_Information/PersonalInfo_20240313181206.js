/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { DateInMMDDYY, deleteApi, fetchApi } from "../../../Repository/Apis";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { DateFormatter } from "../../../Helper/Makers";
import NavWrapper from "../../../Helper/NavWrapper";
import NoFound from "../../../components/Loader/NoFound";
import HOC from "../../../Layout/Outer/HOC";
import CreateNav from "../../../Helper/CreateNav";

const PersonalInfo = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const fetchHandler = () => {
    fetchApi(setLoading, "employee/getPersonalInformation", setData);
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const items = data?.data?.data;

  const deleteHandler = async () => {
    await deleteApi("employee/deleteApsConsent");
    fetchHandler();
  };

  return (
    <>
      {items ? (
        <NavWrapper
          title={"EMPLOYEE PERSONNEL INFORMATION/EMERGENCY CONTACT"}
          isArrow={true}
        />
      ) : (
        <CreateNav
          title={"EMPLOYEE PERSONNEL INFORMATION/EMERGENCY CONTACT"}
          link={"/Personal-Information"}
        />
      )}

      {loading ? (
        <Loader />
      ) : items ? (
        <Container className="full-width-container">
          <div className="top-div-personal2">
            <div className="overflow_table">
              <table responsive className="colored_table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>MI</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> {DateInMMDDYY(items?.date)} </td>
                    <td> {items?.firstName} </td>
                    <td> {items?.lastName} </td>
                    <td> {items?.middleInitial} </td>
                    <td className="icon-container">
                      <Link to="/view-employee-information">
                        <i className="fa-solid fa-eye" />
                      </Link>
                      <Link to={`/Personal-Information`}>
                        <FaRegEdit />
                      </Link>
                      <span className="delete" onClick={() => deleteHandler()}>
                        <RiDeleteBin5Fill style={{ color: "red" }} />
                      </span>
                    </td>
                  </tr>
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
    </>
  );
};

export default HOC({ Wcomponenet: PersonalInfo, isNavbar: false });
