import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  BorderlessInput,
  DateFormatter,
  MultiSelect,
} from "../../../Helper/Makers.js";
import { ClipLoader } from "react-spinners";
import { DateInMMDDYY, editApi } from "../../../Repository/Apis.js";
import NavWrapper from "../../../Helper/NavWrapper.js";
import { SignatureModal } from "../../../Mod/Modal.js";
import HOC from "../../../Layout/Inner/HOC.js";
import { useParams } from "react-router-dom";
import { getData } from "../../../components/api/api.js";

const ViewSite = () => {
  return (
    <div>ViewSite</div>
  )
}

export default ViewSite