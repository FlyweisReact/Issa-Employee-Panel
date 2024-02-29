/** @format */

import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./OfferLetter.css";
import { getSingleUserData, showMsg } from "../../../../../Baseurl";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import NavWrapper from "../../../../../Helper/NavWrapper";
import { fetchApi } from "../../../../../Repository/Apis";
import { DefaultInput } from "../../../../../Helper/Makers";
import { DateFormatter } from "../../../../../Helper/Makers";
import Loader from "../../../../Loader/Loader";

export const OfferLetter = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    fetchApi(setLoading, "employee/getMyOfferLetter", setData);
  }, []);

  console.log(data?.data?.data);


  return (
    <>
      <NavWrapper title={"Employment Offer Letter"} isArrow={true} />
      {loading ? <Loader /> : }

    </>
  );
};
