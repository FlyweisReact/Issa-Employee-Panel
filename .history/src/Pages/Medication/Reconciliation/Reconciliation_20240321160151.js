/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form, Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from "axios";
import { getData } from "../../../components/api/api.js";
import CreateNav from "../../../Helper/CreateNav.js";
import { InputMaker } from "../../../Helper/Makers";
import { deleteApi } from "../../../Repository/Apis.js";

const Reconciliation = () => {
    const [patients, setPatients] = useState([]);
    const [data, setData] = useState([]);
    const [patientId, setPatientId] = useState("");
    const [allergiesAndReactions, setAllergiesAndReactions] = useState("");
    const [ loading , setLoading ] = useState(false)


    const url = `employee/getAllMedicationReconciliation`

    const getAllData = () => {
        fetchApi(setLoading , "employee/getAllMedicationReconciliation" )
      axios
        .get(`${Baseurl}employee/getAllMedicationReconciliation`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: {
            patientId: patientId ? patientId : null,
            allergiesAndReactions: allergiesAndReactions
              ? allergiesAndReactions
              : null,
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
      getData(setPatients, "employee/getPatient");
    }, []);
  
    useEffect(() => {
      getAllData();
    }, [patientId]);
  
    const handleDelete = async (id) => {
      await deleteApi(`employee/deleteMedicationReconciliation/${id}`);
      getAllData();
    };
  
  return (
    <>
      <CreateNav
        title={"MEDICATION RECONCILIATION"}
        link="/employee/medications/reconciliations2"
      />
    </>
  );
};

export default Reconciliation;
