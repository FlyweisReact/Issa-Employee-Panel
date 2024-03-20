import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavWrapper from "../../../Helper/NavWrapper";
import HOC from "../../../Layout/Inner/HOC";
import { BorderlessInput, DateFormatter } from "../../../Helper/Makers";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { getData } from "../../../components/api/api";

const ViewMilega = () => {
  return (
    <div>ViewMilega</div>
  )
}

export default ViewMilega