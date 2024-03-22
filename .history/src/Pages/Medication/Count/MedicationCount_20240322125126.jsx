/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { deleteData } from "../../../components/api/api.js";
import axios from "axios";
import { Baseurl } from "../../../Baseurl";
import HOC from "../../../Layout/Inner/HOC.js";
import CreateNav from "../../../Helper/CreateNav.js";
import { fetchApi } from "../../../Repository/Apis.js";

const MedicationCount = () => {
  const [data, setData] = useState({});
  const [countType, setCountType] = useState("medication");
  const [ loading , setLoading ] = useState(false)

  const handleDelete = (id) => {
    deleteData("employee/deleteMedicationOpioidCount", id);
  };




  const 

  const getAllData = () => {
    fetchApi(setLoading , "employee/getAllMedicationOpioidCount" , setData)
    axios
      .get(`${Baseurl}employee/getAllMedicationOpioidCount`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          countType,
        },
      })
      .then((res) => {
        if (res.data?.data?.length === 0) {
          setData([]);
          return;
        }
        setData(res.data?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getAllData();
  }, [countType]);

  return (
    <>
      <CreateNav
        title={"Medication Count"}
        link={"/create-medication-count"}
      />
        <Container className="full-width-container">
          <Table responsive className="withoutBorder mt-5">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Medication Name</th>
                <th>Dose</th>
                <th>Prescription Instruction</th>
                <th>Prescribing Provider</th>
                <th>Beginning Count</th>
                <th>Ending Count</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 &&
                data?.map((item) => (
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{item?.medicationName}</td>
                    <td>{item?.dose}</td>
                    <td>{item?.prescriptionInstruction}</td>
                    <td>{item?.prescribingProvider}</td>
                    <td>{item?.data?.[0]?.beginningCount}</td>
                    <td>{item?.data?.[0]?.endingCount}</td>
                    <td className="icon-container">
                      <Link to={`/view-count/${item?._id}`}>
                        <i className="fa-solid fa-eye"></i>
                      </Link>
                      <Link to={`/update-count/${item?._id}`}>
                        <FaRegEdit className="edit" />
                      </Link>

                      <span
                        className="delete"
                        onClick={() => handleDelete(item?._id)}
                      >
                        {" "}
                        <RiDeleteBin5Fill style={{ color: "red" }} />
                        <span style={{ color: "red", fontSize: "1.1.1rem" }}>
                          DELETE
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      
    </>
  );
};

export default HOC(MedicationCount);
