
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { getData } from "../../../api/api";
import { postApi } from "../../../../Repository/Apis";
import {
  CheckBoxMaker,
  InputMaker,
  MultiSelect,
  SelectMaker,
} from "../../../../Helper/Makers";

const EditProgressNote = () => {
  return (
    <div>EditProgressNote</div>
  )
}

export default EditProgressNote