import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getData } from "../../../components/api/api";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis";
import { SignatureModal } from "../../../Mod/Modal";
import {
  BorderlessInput,
  BorderlessSelect,
  CheckBoxMaker,
} from "../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";
import { useParams } from "react-router-dom";

const ViewDTF = () => {
  return (
    <div>ViewDTF</div>
  )
}

export default ViewDTF