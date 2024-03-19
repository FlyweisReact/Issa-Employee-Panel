import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  InputMaker,
  TextareaMaker,
  CheckBoxMaker,
} from "../../../../../Helper/Makers";
import { editApi } from "../../../../../Repository/Apis";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../../../Mod/Modal";

const ViewContactNote = () => {
  return (
    <div>ViewContactNote</div>
  )
}

export default ViewContactNote