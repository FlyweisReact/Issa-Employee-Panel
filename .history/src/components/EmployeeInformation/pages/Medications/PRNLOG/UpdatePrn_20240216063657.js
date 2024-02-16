/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  DateFormatter,
  DefaultInput,
  InputMaker,
  SelectMaker,
} from "../../../../../Helper/Makers";
import { SignatureModal } from "../../../../../Mod/Modal";
import { editApi } from "../../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";

const UpdatePrn = () => {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
  
    // Form States
    const [patientId, setPatientId] = useState("");
    const [medicationAndStrength, setMedicationAndStrength] = useState("");
    const [instructions, setInstructions] = useState("");
    const [prescriberName, setPrescriberName] = useState("");
    const [site, setSite] = useState("");
    // table Data
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [tabsGiven, setTabsGiven] = useState("");
    const [reason, setReason] = useState("");
    const [residentInitials, setResidentInitials] = useState("");
    const [staffInitials, setStaffInitials] = useState("");
    const [timeReevaluated, setTimeReevaluated] = useState("");
    const [responseCode, setResponseCode] = useState("");
    const [staffReevaluatedInitials, setStaffReevaluatedInitials] = useState("");
    // staff signature
    const [staffNameAndSignature, setStaffNameAndSignature] = useState("");
    const [staffInitials1, setStaffInitials1] = useState("");
    const [open, setOpen] = useState(false);
    const [multipleTable, setMultipleTable] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams()
  
    const payload = {
      patientId,
      medicationAndStrength,
      instructions,
      prescriberName,
      site,
      tableData: multipleTable?.map((i) => ({
        date: i.date,
        time: i.time,
        tabsGiven: i.tabsGiven,
        reason: i.reason,
        residentInitials: i.residentInitials,
        staffInitials: i.staffInitials,
        timeReevaluated: i.timeReevaluated,
        responseCode: i.responseCode,
        staffReevaluatedInitials: i.staffReevaluatedInitials,
      })),
      staff: multipleTable?.map((i) => ({
        staffNameAndSignature: i.staffNameAndSignature,
        staffInitials: i.staffInitials1,
      })),
    };
  
    const table = {
      date,
      time,
      tabsGiven,
      reason,
      residentInitials,
      staffInitials,
      timeReevaluated,
      responseCode,
      staffReevaluatedInitials,
    };
  
    const staffTabler = {
      staffNameAndSignature,
      staffInitials1,
    };
  
    const mergedData = {
      ...table,
      ...staffTabler,
    };
  
    const addTable = () => {
      setMultipleTable((prev) => [...prev, mergedData]);
    };
  
    useEffect(() => {
      getData(setPatients, "employee/getPatient");
    }, []);
  
    const submitHandler = (e) => {
      e.preventDefault();
      editApi(setLoading, `employee/editPrnMedicationLogById`, payload);
    };
  
    const removeOne = (index) => {
      setMultipleTable((prev) => prev.filter((_, i) => i !== index));
    };
  return <div>UpdatePrn</div>;
};

export default UpdatePrn;
