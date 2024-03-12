/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import {
  BorderlessInput,
  DateFormatter,
  DefaultInput,
} from "../../../Helper/Makers";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Outer/HOC";
import { SignatureModal } from "../../../Mod/Modal";
import { downloadReport, fetchApi, postApi } from "../../../Repository/Apis";
import { getData } from "../../../components/api/api";
import Loader from "../../../components/Loader/Loader";
import { useReactToPrint } from "react-to-print";

const JobDescription = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [employeeInfoSignature, setEmployeeInfoSignature] = useState("");
  const [employeeInfoDate, setEmployeeInfoDate] = useState("");
  const [open, setOpen] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    getData(setProfile, "employee/getProfile");
    fetchApi(setLoading, "employee/getMyJobDescription", setData);
  }, []);

  const payload = {
    employeeInfoSignature,
    employeeInfoDate,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(setSubmitLoading, "employee/updateJobDescription", payload);
  };

  // Download Report
  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint2 = () => {
    downloadReport(handlePrint);
  };

  return (
    <>
      <div ref={componentRef}>
        
      </div>
     
    </>
  );
};

export default HOC({ Wcomponenet: JobDescription, isNavbar: false });
