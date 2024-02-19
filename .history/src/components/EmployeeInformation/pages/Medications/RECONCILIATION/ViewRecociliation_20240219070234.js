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
      getData(setPatients, "employee/getPatient");
    }, []);
  
    useEffect(() => {
      getData(setDetails, `employee/getMedicationReconciliationById/${id}`);
    }, [id]);
  
    console.log(details?.data);
  
    const medications = {
      name,
      dose,
      route,
      frequency,
      startDate,
      stopChangeDate,
      reasonForStopChange,
    };
  
    const payload = {
      patientId,
      residentName,
      allergiesAndReactions,
      medications: arr?.map((i) => ({
        name: i.name,
        dose: i.dose,
        route: i.route,
        frequency: i.frequency,
        startDate: i.startDate,
        stopChangeDate: i.stopChangeDate,
        reasonForStopChange: i.reasonForStopChange,
      })),
      providerName,
      providerSignature,
      date,
    };
  
    const addData = () => {
      setArr((prev) => [...prev, medications]);
    };
  
    const removeOne = (index) => {
      setArr((prev) => prev.filter((_, i) => i !== index));
    };


  
    useEffect(() => {
      if (details) {
        const item = details?.data;
        setPatientId(item?.patientId);
        setAllergiesAndReactions(item?.allergiesAndReactions);
        setProviderName(item?.providerName);
        setProviderSignature(item?.providerSignature);
        setArr(item?.medications);
      }
    }, [details]);
  return (
    <div>ViewRecociliation</div>
  )
}

export default ViewRecociliation