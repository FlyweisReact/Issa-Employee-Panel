/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { showMsg } from "../../Baseurl";
import { InputMaker } from "../../Helper/Makers";
import NavWrapper from "../../Helper/NavWrapper";
import SignatureModal from "../../Helper/Popovers/SignatureModal";

const DashboardPage5 = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [skill, setSkill] = useState("");
  const [nameOfApplicant, setNameOfApplicant] = useState("");
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState({});
  const [open, setOpen] = useState(false);

  const payload = {
    companyName,
    skill,
    nameOfApplicant,
  };

  const Auth = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.React_App_Baseurl}employee/addEmployeeSkillAndQualification`,
        payload,
        Auth
      );
      setLoading(false);
      const msg = res.data.message;
      showMsg("", msg, "success");
      navigate("/dashboard");
    } catch (e) {
      setLoading(false);
      const msg = e?.response?.data?.message;
      showMsg("Error ||", msg, "danger");
    }
  };

  const fetchHandler = async () => {
    try {
      const res = await axios.get(
        `${process.env.React_App_Baseurl}employee/viewEmployeeSkillAndQualification`,
        Auth
      );
      const data = res.data.data;
      setDetail(data);
    } catch {}
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  useEffect(() => {
    if (detail) {
      setCompanyName(detail?.companyName);
      setSkill(detail?.skill);
      setNameOfApplicant(detail?.nameOfApplicant);
    }
  }, [detail]);

  return (
    <>
      <SignatureModal show={open} onHide={() => setOpen(false)} />
      <NavWrapper isArrow={true} title={"ACKNOWLEDGEMENT"} filled={5} />
      <Container  className="full-width-container">

      </Container>
    
        {" "}
   
    </>
  );
};

export default DashboardPage5;
