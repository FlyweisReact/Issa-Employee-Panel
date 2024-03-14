/** @format */

import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData, getData } from "../../../components/api/api.js";
import HOC from "../../../Layout/Inner/HOC.js";
import CreateNav from "../../../Helper/CreateNav.js";

const Skills = () => {
  const [data, setData] = useState([]);

  const getAllData = () => {
    getData(setData, "employee/getAllSkillAndKnowledge");
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = (id) => {
    deleteData("employee/deleteSkillAndKnowledge", id);
  };

  console.log(data);

  return (
    <>
      <CreateNav
        title={"Skills and Knowledge Training"}
        link={"/create-skill-training"}
      />

      <Container className="full-width-container">
        <div className="overflow_table">
          <table className="colored_table">
            <thead>
              <tr>
                <th>Hours completed</th>
                <th>Employee title</th>
                <th>Verified title</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((i, index) => (
                <tr key={index}>
                  <td> {i?.hoursCompleted} </td>
                  <td> {i?.employeeTitle} </td>
                  <td> {i?.verifiedByTitle} </td>
                  <td>
                    <div className="icon-joiner">
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={() => handleDelete(i?._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default HOC(Skills);
