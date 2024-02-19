import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { getData } from "../../../../api/api";
import {
  DateFormatter,
  DefaultInput,
  InputMaker,
  SelectMaker,
} from "../../../../../Helper/Makers";
import { ClipLoader } from "react-spinners";
import { SignatureModal } from "../../../../../Mod/Modal";
import { postApi } from "../../../../../Repository/Apis";

const UpdateCount = () => {
  return (
    <div>UpdateCount</div>
  )
}

export default UpdateCount