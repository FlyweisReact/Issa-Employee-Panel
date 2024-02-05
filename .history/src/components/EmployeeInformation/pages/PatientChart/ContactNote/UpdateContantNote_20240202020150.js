
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  InputMaker,
  TextareaMaker,
  CheckBoxMaker,
} from "../../../../../Helper/Makers";
import { postApi } from "../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../../Mod/Modal";

const UpdateContantNote = () => {
  return (
    <div>UpdateContantNote</div>
  )
}

export default UpdateContantNote