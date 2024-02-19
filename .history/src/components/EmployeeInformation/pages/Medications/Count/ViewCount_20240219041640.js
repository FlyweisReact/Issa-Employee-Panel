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


const ViewCount = () => {

    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
    const { id } = useParams();
    const [details, setDetails] = useState({});
  
    useEffect(() => {
      getData(setPatients, "employee/getPatient");
      getData(setDetails, `employee/getMedicationOpioidCountById/${id}`);
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
  



    useEffect(() => {
      if (details) {
        const item = details?.data;
        setPatientId(item?.patientId);
        setLocation(item?.location);
        setMedicationName(item?.medicationName);
        setDose(item?.dose);
        setPrescriptionInstruction(item?.prescriptionInstruction);
        setPrescribingProvider(item?.prescribingProvider);
        setBeginningMedCount(item?.beginningMedCount);
        setMonthYear(item?.monthYear);
        setCountType(item?.countType);
  
        const table = item?.data;
        const staffData = item?.staff;
  
        // Function to merge array of objects into a single object
        function mergeArraysIntoObject(arr) {
          return arr.reduce((result, obj) => {
            return { ...result, ...obj };
          }, {});
        }
  
        // Merge all elements of table and staffData arrays into a single object
        const merged = {
          ...mergeArraysIntoObject(table || []),
          ...mergeArraysIntoObject(staffData || []),
        };
  
        setMultipleTable([merged]);
      }
    }, [details]);
  

  return (
    <div>ViewCount</div>
  )
}

export default ViewCount