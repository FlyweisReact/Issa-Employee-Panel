import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";
import {
  BorderlessInput,
  BorderlessSelect,
  CheckBoxMaker,
  DateFormatter,
  MultiSelect,
  TextareaMaker,
} from "../../../Helper/Makers";
import {
  incidentOptions,
  levelSeverityOptions,
} from "../../../Constant/Constant";
import { SignatureModal } from "../../../Mod/Modal";
import { DateInMMDDYY, postApi } from "../../../Repository/Apis";
import HOC from "../../../Layout/Inner/HOC";
import NavWrapper from "../../../Helper/NavWrapper";


const ViewIncidentReport = () => {
  return (
    <div>ViewIncidentReport</div>
  )
}

export default ViewIncidentReport