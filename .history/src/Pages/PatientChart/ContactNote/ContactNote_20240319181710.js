/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { getData } from "../../../components/api/api";
import { deleteApi, fetchApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import CreateNav from "../../../Helper/CreateNav";
import Loader from "../../../components/Loader/Loader";

const ContactNote = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getAllData = () => {
    fetchApi(setLoading, "employee/getAllContactNote", setData);
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = async (id) => {
    await deleteApi(`employee/deleteContactNote/${id}`);
    getAllData();
  };

  return (
    <>
      <CreateNav title={"CONTACT NOTE"} link={"/create-contact-note"} />

      <Container className="full-width-container">
        {loading ? (
          <Loader />
        ) : (
          <div className="overflow-table">
            <table className="colored_table">
              <thead>
                <tr>
                  <th>Resident's Name</th>
                  <th>Family Member</th>
                  <th>Email</th>
                  <th>Cash Manager</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.data?.map((item) => (
                  <tr key={item._id}>
                    <td>{item?.residentName}</td>
                    <td>{item?.familyMember}</td>
                    <td>{item.email}</td>
                    <td>{item.caseManager}</td>
                    <td>
                      <div className="icon-joiner ">
                        <Link to={`/update-contact-note/${item._id}`}>
                          <i className="fa-solid fa-edit" />
                        </Link>
                        <i
                          className="fa-solid fa-trash-can"
                          onClick={() => handleDelete(item._id)}
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

export default HOC(ContactNote);
