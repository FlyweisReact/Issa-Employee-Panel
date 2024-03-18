import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../Mod/Modal";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import {
  BorderlessInput,
  DateFormatter,
  BorderlessSelect,
} from "../../../Helper/Makers";
import { getData } from "../../../components/api/api";
import { useParams } from "react-router-dom";

const ViewDischarge = () => {
  return (
    <div>ViewDischarge</div>
  )
}

export default ViewDischarge