import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  DateFormatter,
  DefaultInput,
} from "../../../../../Helper/Makers";

const ViewRecociliation = () => {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
    const [open, setOpen] = useState(false);
    const [patientId, setPatientId] = useState("");
    const [residentName, setResidentName] = useState("");
    const [allergiesAndReactions, setAllergiesAndReactions] = useState("");
    const [name, setName] = useState("");
    const [dose, setDose] = useState("");
    const [route, setRoute] = useState("");
    const [frequency, setFrequency] = useState("");
    const [startDate, setStartDate] = useState("");
    const [stopChangeDate, setStopChangeDate] = useState("");
    const [reasonForStopChange, setReasonForStopChange] = useState("");
    const [providerName, setProviderName] = useState("");
    const [providerSignature, setProviderSignature] = useState("");
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false);
    const [arr, setArr] = useState([]);
    const [details, setDetails] = useState({});
    const { id } = useParams();
  

  
    useEffect(() => {
      getData(setDetails, `employee/getMedicationReconciliationById/${id}`);
    }, [id]);
  
  

  

  return (
    <div>ViewRecociliation</div>
  )
}

export default ViewRecociliation