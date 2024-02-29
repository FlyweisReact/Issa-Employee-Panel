/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Auth, Baseurl, showMsg } from "../../../../../Baseurl";
import axios from "axios";
import NavWrapper from "../../../../../Helper/NavWrapper";
import { fetchApi } from "../../../../../Repository/Apis";

export const JobDescription = () => {
  const [JobDescription, setJobDescription] = useState({});
  const [employeeSignature, setEmployeeSignature] = useState("");
  const [employeeDate, setEmployeeDate] = useState("");
  const getEmployeeId = async () => {
    try {
      const res = await axios.get(`${Baseurl}employee/getProfile`, Auth());
      console.log(res?.data?.data?._id);

      if (res?.data?.data?._id) {
        try {
          const jobDescriptionResponse = await axios.get(
            `${Baseurl}admin/getJobDescriptionById/${res?.data?.data?._id}`,
            Auth()
          );
          console.log(jobDescriptionResponse);
          setJobDescription(jobDescriptionResponse?.data?.data);
        } catch (error) {
          console.log(error);
          if (error.response && error.response.status === 404) {
            setJobDescription({});
            showMsg("Error", error?.response?.data?.message, "danger");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployeeId();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(employeeSignature, employeeDate);
    if (!JobDescription) {
      return;
    }
    try {
      const res = axios.post(`${Baseurl}employee/updateJobDescription`, {
        employeeInfoSignature: employeeSignature,
        employeeInfoDate: employeeDate,
      });
      showMsg("Success", res?.data?.message, "success");
    } catch (error) {
      if (error.res.status === 403) {
        return;
      }
      showMsg("Error", error?.response?.data?.message, "danger");
      console.log(error);
    }
  };

  // ---
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApi(setLoading, "employee/getMyJobDescription", setData);
  }, []);

  return (
    <>
      <NavWrapper title="JOB DESCRIPTION" isArrow={true} />

      <Container className="full-width-container">
        <form className="w-100 text-start">
          <div
            dangerouslySetInnerHTML={{
              __html: data?.data?.data?.jobDescription,
            }}
          />
          <p className="fw-bold">
            Upon a successfully hiring process, my signature below indicates
            that I understand and agree to the duties of BEHAVIORAL HEALTH
            TECHNICIAN(BHT), and I have meet the stated qualifications,
            experience requirements, and can adequately perform duties
            prescribed or as stated in this job descriptions.
          </p>
        </form>
      </Container>
    </>
  );
};
