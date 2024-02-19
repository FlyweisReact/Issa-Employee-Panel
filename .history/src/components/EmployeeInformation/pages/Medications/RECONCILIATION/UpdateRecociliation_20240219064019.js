import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData, postData } from "../../../api/api";
import { SignatureModal } from "../../../../Mod/Modal";
import {
  DateFormatter,
  DefaultInput,
  InputMaker,
  SelectMaker,
} from "../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { postApi } from "../../../../Repository/Apis";

const UpdateRecociliation = () => {
  return (
    <div>UpdateRecociliation</div>
  )
}

export default UpdateRecociliation