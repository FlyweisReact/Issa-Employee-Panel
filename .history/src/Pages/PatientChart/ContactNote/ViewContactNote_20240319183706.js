/** @format */

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { DefaultInput } from "../../../Helper/Makers";
import { DateInMMDDYY, downloadReport } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const ViewContactNote = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const fetchDetail = () => {
    getData(setDetails, `employee/getContactNoteById/${id}`);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  const componentRef = React.useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handlePrint2 = () => {
    downloadReport(handlePrint);
  };


  return (
    <>
    <div ref={componentRef} ></div>

    </>
  );
};

export default HOC(ViewContactNote);
