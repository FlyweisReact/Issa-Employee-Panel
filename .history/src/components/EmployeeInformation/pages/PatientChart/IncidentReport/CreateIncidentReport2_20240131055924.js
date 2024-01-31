import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../api/api";
import {
  CheckBoxMaker,
  InputMaker,
  MultiSelect,
} from "../../../../Helper/Makers";
import {
  incidentOptions,
  levelSeverityOptions,
} from "../../../../Constant/Constant";
import { SignatureModal } from "../../../../Mod/Modal";
import { postApi } from "../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";


const CreateIncidentReport2 = () => {
  return (
    <div>CreateIncidentReport2</div>
  )
}

export default CreateIncidentReport2