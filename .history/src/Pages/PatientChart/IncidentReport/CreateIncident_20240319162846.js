import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import {
  BorderlessInput,
  CheckBoxMaker,
  DateFormatter,
  InputMaker,
  MultiSelect,
  TextareaMaker,
} from "../../../../Helper/Makers";
import {
  incidentOptions,
  levelSeverityOptions,
} from "../../../../Constant/Constant";
import { SignatureModal } from "../../../../Mod/Modal";
import { postApi } from "../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../components/api/api";
import { BorderlessInput } from "../../../Helper/Makers";

const CreateIncident = () => {
  return (
    <div>CreateIncident</div>
  )
}

export default CreateIncident