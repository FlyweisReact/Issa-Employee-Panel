/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  DateFormatter,
  DefaultInput,
  InputMaker,
  SelectMaker,
} from "../../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../../../Mod/Modal";
import { editApi } from "../../../../../Repository/Apis";

const UpdateCount = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getData(setPatients, "employee/getPatient");
  }, []);

  // -----
  const [patientId, setPatientId] = useState("");
  const [location, setLocation] = useState("");
  const [medicationName, setMedicationName] = useState("");
  const [dose, setDose] = useState("");
  const [prescriptionInstruction, setPrescriptionInstruction] = useState("");
  const [prescribingProvider, setPrescribingProvider] = useState("");
  const [beginningMedCount, setBeginningMedCount] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [countType, setCountType] = useState("medication");

  // --- Prescribing provider data
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");
  const [painLevel, setPainLevel] = useState("");
  const [numberOfTabsGiven, setNumberOfTabsGiven] = useState("");
  const [beginningCount, setBeginningCount] = useState("");
  const [endingCount, setEndingCount] = useState("");
  const [currentStaffOnShiftSignature, setCurrentStaffOnShiftSignature] =
    useState("");
  const [relievingStaffSignature, setRelievingStaffSignature] = useState("");
  // -- Staff
  const [name, setName] = useState("");
  const [initials, setInitials] = useState("");
  const [loading, setLoading] = useState(false);
  const [multipleTable, setMultipleTable] = useState([]);

  const table = {
    date,
    shift,
    painLevel,
    numberOfTabsGiven,
    beginningCount,
    endingCount,
    currentStaffOnShiftSignature,
    relievingStaffSignature,
  };
  const staffTabler = {
    name,
    initials,
  };

  const mergedData = { ...table, ...staffTabler };

  const dateOfBirth = patients?.data?.filter((i) => i._id === patientId);

  const addTable = () => {
    setMultipleTable((prev) => [...prev, mergedData]);
  };

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const removeOne = (index) => {
    setMultipleTable((prev) => prev.filter((_, i) => i !== index));
  };

  const payload = {
    patientId,
    location,
    medicationName,
    dose,
    prescriptionInstruction,
    prescribingProvider,
    beginningMedCount,
    monthYear,
    data: multipleTable?.map((i) => ({
      date: i.date,
      shift: i.shift,
      painLevel: i.painLevel,
      beginningCount: i.beginningCount,
      numberOfTabsGiven: i.numberOfTabsGiven,
      endingCount: i.endingCount,
      currentStaffOnShiftSignature: i.currentStaffOnShiftSignature,
      relievingStaffSignature: i.relievingStaffSignature,
    })),
    staff: multipleTable?.map((i) => ({
      name: i.name,
      initials: i.initials,
    })),
    countType,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    editApi(setLoading, "employee/createMedicationOpioidCount", payload);
  };

  return <div>UpdateCount</div>;
};

export default UpdateCount;
