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

const ViewCount = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    getData(setDetails, `employee/getMedicationOpioidCountById/${id}`);
  }, []);

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

  return <div>ViewCount</div>;
};

export default ViewCount;
