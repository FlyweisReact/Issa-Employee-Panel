
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Select from "react-select";
import NavWrapper from "../../../Helper/NavWrapper.js";
import HOC from "../../../Layout/Inner/HOC.js";
import {
  BorderlessInput,
  DateFormatter,
  MultiSelect,
} from "../../../Helper/Makers.js";
import { SignatureModal } from "../../../Mod/Modal.js";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis.js";
import { ClipLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { getData } from "../../../components/api/api.js";

const ViewServiceLog = () => {
  return (
    <div>ViewServiceLog</div>
  )
}

export default ViewServiceLog