/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import { SignatureModal } from "../../../../../Mod/Modal";
import {
  DateFormatter,
  DefaultInput,
  InputMaker,
  SelectMaker,
} from "../../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { editApi } from "../../../../../Repository/Apis";

const UpdateRecociliation = () => {
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

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

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

  const submitHandler = (e) => {
    e.preventDefault();
    editApi(setLoading, "employee/createMedicationReconciliation", payload);
  };

  useEffect(() => {
    if (patients) {
      const filtered = patients?.data?.filter((i) => i._id === patientId);
      setResidentName(filtered?.[0]?.fullName);
    }
  }, [patientId]);
  return <div>UpdateRecociliation</div>;
};

export default UpdateRecociliation;
